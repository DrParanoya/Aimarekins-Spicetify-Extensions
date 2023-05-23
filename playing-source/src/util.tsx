import { Translate } from "./localizer"

export function waitForElm(selector:string, within:HTMLElement = document.body, timeoutAfter = 5000, shouldReject = false): Promise<HTMLElement> {
	return new Promise((resolve, reject) => {
		let timeoutId: NodeJS.Timeout
		if (timeoutAfter > 0) {
			timeoutId = setTimeout(() => {
				if (shouldReject) {
					return reject("Did not find element after timeout.")
				} else {
					console.warn("waitForElm has waited for", timeoutAfter ," for selector", selector, "within", within, "but it has not yet been found.")
				}
			}, timeoutAfter)
		}

		const el = within.querySelector(selector)
		if (el) {
			return resolve(el as HTMLElement)
		}

		const observer = new MutationObserver(() => {
			const el = within.querySelector(selector)
			if (el) {
				observer.disconnect()
				clearTimeout(timeoutId)
				return resolve(el as HTMLElement)
			}
		})

		observer.observe(within, {
			childList: true,
			subtree: true
		})
	})
}

export function bindElementTo(el: HTMLElement, rootSelector: string, containerSelector: string) {
	waitForElm(rootSelector, document.body).then((foundRoot) => {
		let currentParent : Element | null = null
		function appendElement() {
			const foundParent = foundRoot.querySelector(containerSelector)
			if (foundParent && foundParent !== currentParent) {
				currentParent = foundParent
				foundParent.appendChild(el)
			}
		}
		appendElement()

		new MutationObserver(appendElement).observe(foundRoot, {
			childList: true,
			subtree: true
		})
	})
}

export function generateBindsFor(generator: () => HTMLElement, options: string[][]) {
	const generated: HTMLElement[] = []
	options.forEach((option) => {
		const el = generator()
		generated.push(el)
		bindElementTo(el, option[0], option[1])
	})
	return generated
}

export function setOnAll(selector: string, property: string, value: any) {
	document.body.querySelectorAll(selector).forEach((el: any) => {
		el[property] = value
	})
}

const _getUriName_cache: Record<string, string | null | Promise<string | null> > = {}
export function storeUriNameChache(URI: string, name: string | null | undefined) {
	_getUriName_cache[URI] = name === undefined ? null : (name || null)
}

const typesThatShouldntCache = new Set<string | undefined>([
	Spicetify.URI.Type.AD,
	Spicetify.URI.Type.SEARCH,
	Spicetify.URI.Type.LOCAL_TRACK,
	Spicetify.URI.Type.LOCAL_ALBUM,
	Spicetify.URI.Type.LOCAL_ARTIST
])

export function getUriName(URI:string | undefined): Promise<string | null> {
	if (!URI) return new Promise((resolve) => resolve(null))

	const cached = _getUriName_cache[URI]
	if (cached !== undefined) {
		if (cached instanceof Promise) {
			return cached
		}
		return new Promise((resolve) => resolve(cached))
	}

	return new Promise((resolve) => {
		const namePromise = _getUriName(URI)
		if (!typesThatShouldntCache.has(Spicetify.URI.from(URI)?.type)) {
			_getUriName_cache[URI] = namePromise
		}
		namePromise.then((name) => resolve(name)).catch(() => resolve(null))
	})
}

async function _getUriName(SourceURI:string): Promise<string | null> {
	const URI = Spicetify.URI.from(SourceURI)
	if (URI === null) return null

	switch (URI.type) {
		case Spicetify.URI.Type.TRACK:
			return (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks/${URI._base62Id}`))?.name || null
		case Spicetify.URI.Type.PLAYLIST:
		case Spicetify.URI.Type.PLAYLIST_V2:
			return (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${URI._base62Id}?fields=name`))?.name || null
		case Spicetify.URI.Type.ALBUM:
		case Spicetify.URI.Type.COLLECTION_ALBUM:
			return (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/albums/${URI._base62Id}`))?.name || null
		case Spicetify.URI.Type.ARTIST:
		case Spicetify.URI.Type.COLLECTION_ARTIST:
			return (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists/${URI._base62Id}`))?.name || null
		case Spicetify.URI.Type.EPISODE:
			return (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/episodes/${URI._base62Id}`))?.name || null
		case Spicetify.URI.Type.SHOW:
			return (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/shows/${URI._base62Id}`))?.name || null
		case Spicetify.URI.Type.STATION:
			return await getUriName("spotify:" + SourceURI.substring("spotify:station:".length))
		case Spicetify.URI.Type.PROFILE: {
			const res = await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/users/${URI._base62Id}`)
			return res?.display_name || res?.id || null
		}
		case Spicetify.URI.Type.FOLDER: {
			// Getting this is a little more complicated. We have to traverse the user's playlists and find the one that matches the folder's ID
			let toReturn = null
			function traverse(item) {
				if (item.type == "folder") {
					storeUriNameChache(item.uri, item.name)
					if (item.uri == SourceURI) {
						toReturn = item.name
					}
					item.items.forEach(traverse)
				}
			}
			traverse(await Spicetify.Platform.RootlistAPI.getContents())
			return toReturn
		}

		case Spicetify.URI.Type.AD:
			return Translate("playing_ad")
		case Spicetify.URI.Type.SEARCH: {
			const query = (Spicetify.URI.from(URI)?.query as string) || null
			return query ? Translate("search_format").formatUnicorn(query) : null
		}

		case Spicetify.URI.Type.LOCAL_TRACK: {
			return URI?.track || null
		}
		case Spicetify.URI.Type.LOCAL_ALBUM: {
			return URI?.album || null
		}
		case Spicetify.URI.Type.LOCAL_ARTIST: {
			return URI?.artist || null
		}
	}

	return null
}