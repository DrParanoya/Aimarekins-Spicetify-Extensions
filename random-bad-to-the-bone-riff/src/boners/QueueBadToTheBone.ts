import { chance, randomInt } from "../util/RandomUtil"
import isBadToTheBone from "../isBadToTheBone"
import chanceEveryHandler from "./handlers/chanceEveryHandler"

const BAD_TO_THE_BONE_URI = "spotify:track:5PldHs83FjoH0kyTZw75yI?si=cb9b50a0b79d4513"

export function queueBadToTheBone() {
	Spicetify.addToQueue([ { uri: BAD_TO_THE_BONE_URI } ])
	Spicetify.showNotification("👽")
}

export function getQueueBadToTheBoneChance(boneLevel: number) {
	return chance((121 / 5000) * (boneLevel - 0.5))
}

export async function mayQueueBadToTheBone() {
	if (!Spicetify.Player.isPlaying()) {
		return false
	}

	const checkURIs: (string | undefined)[] = [Spicetify.Player.data.item?.uri].concat(Spicetify.Queue.nextTracks.slice(0, 5).map((track) => track?.contextTrack?.uri))

	const results = await Promise.all(checkURIs.map(async (uri) => uri && await isBadToTheBone(uri)))
	
	return results.every((result) => !result)
}

export function getQueueBadToTheBoneStepTime() {
	return randomInt(5000, 10000)
}

export default function queueBadToTheBoneHandler(): (boneLevel: number) => void {
	return chanceEveryHandler({
		body: queueBadToTheBone,
		bodyChance: getQueueBadToTheBoneChance,
		getTimeoutTime: getQueueBadToTheBoneStepTime,
		mayRun: mayQueueBadToTheBone,
	})
}
