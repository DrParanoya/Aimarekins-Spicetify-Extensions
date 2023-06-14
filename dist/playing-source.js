var playingDsource=(()=>{var n=Object.defineProperty,S=Object.defineProperties,g=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,E=(e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;function T(e,t,...i){if("function"==typeof e)return e(t,...i);const n=document.createElement(e);return Object.entries(t||{}).forEach(([e,t])=>{(e="className"===e?"class":e).startsWith("on")&&e.toLowerCase()in window?n.addEventListener(e.toLowerCase().substring(2),t):n.setAttribute(e,String(t))}),i.forEach(e=>{!function t(i,e){Array.isArray(e)?e.forEach(e=>t(i,e)):i.appendChild(e instanceof HTMLElement?e:document.createTextNode(e))}(n,e)}),n}function h(o,a=document.body,l=5e3,c=!1){return new Promise((t,e)=>{let i;0<l&&(i=setTimeout(()=>{if(c)return e("Did not find element after timeout.");console.warn("waitForElm has waited for",l," for selector",o,"within",a,"but it has not yet been found.")},l));var n=a.querySelector(o);if(n)return t(n);const r=new MutationObserver(()=>{var e=a.querySelector(o);if(e)return r.disconnect(),clearTimeout(i),t(e)});r.observe(a,{childList:!0,subtree:!0})})}function _(i,e,o=5e3){const a=[];return e.forEach(e=>{var n,r,t=i();a.push(t),[n,t,r,e=5e3]=[t,e[0],e[1],o],h(t,document.body,e).then(t=>{let i=null;function e(){var e=t.querySelector(r);e&&e!==i&&(i=e).appendChild(n)}e(),new MutationObserver(e).observe(t,{childList:!0,subtree:!0})})}),a}function l(e){e=Spicetify.URI.from(e);return e&&(e.hasBase62Id?e.id:e._base62Id)||null}function c(e){e=Spicetify.URI.from(e);return e&&e.type==Spicetify.URI.Type.STATION?"spotify:"+e.toString().substring("spotify:station:".length):null}var i="en",r={en:{playing_from:"Playing from",playing_PLAYLIST:"Playing from Playlist",playing_SEARCH:"Playing from Search",playing_ALBUM:"Playing from Album",playing_ARTIST:"Playing from Artist",playing_RECOMMENDED:"Playing recommended based on",playing_RECOMMENDED_NO_SOURCE:"Playing recommendations",playing_STATION:"Playing from Radio based on",playing_EPISODE:"Playing Episode",playing_PODCAST:"Playing from Podcast",playing_ARTIST_LIKED_SONGS:"Playing Liked Songs from",playing_FOLDER:"Playing from Folder",playing_TRACK:"Playing Track",playing_RECENT_SEARCHED:"Playing from recent searches",playing_USER_TOP_TRACKS:"Playing from Top Tracks",playing_LIKED_SONGS:"Playing from Liked Songs",playing_QUEUE:"Playing from Queue",playing_LOCAL_FILES:"Playing from Local Files",playing_AD:"Advertisement",playing_UNKNOWN:"Currently playing",search_format:'"{0}"',unknown:"Unknown",loading:"..."},es:{playing_from:"Reproduciendo desde",playing_PLAYLIST:"Reproduciendo Lista de Reproducción",playing_SEARCH:"Reproduciendo desde Búsqueda",playing_ALBUM:"Reproduciendo desde Álbum",playing_ARTIST:"Reproduciendo desde Artista",playing_RECOMMENDED:"Reproduciendo recomendados para",playing_RECOMMENDED_NO_SOURCE:"Reproduciendo recomendaciones",playing_STATION:"Reproduciendo Radio de",playing_EPISODE:"Reproduciendo Episodio",playing_PODCAST:"Reproduciendo desde Podcast",playing_ARTIST_LIKED_SONGS:"Reproduciendo canciones que te gustan de",playing_FOLDER:"Reproduciendo desde Carpeta",playing_TRACK:"Reproduciendo Canción",playing_RECENT_SEARCHED:"Reproduciendo desde búsquedas recientes",playing_USER_TOP_TRACKS:"Reproduciendo canciones más escuchadas",playing_LIKED_SONGS:"Reproduciendo canciones que te gustan",playing_QUEUE:"Reproduciendo desde la cola de reproducción",playing_LOCAL_FILES:"Reproduciendo archivos locales",playing_AD:"Anuncio",playing_UNKNOWN:"En reproducción",search_format:'"{0}"',unknown:"Desconocido",loading:"..."}};function I(e,t){return t=t||Spicetify.Locale.getLocale(),r[t]?r[t][e]||e:I(e,i)}var p,s=null;function A(e){return e?p=e!=s?async function(e){console.log("FETCHING NAME FOR",e);var t=Spicetify.URI.from(e);if(null!==t){const n=l(t);switch(t.type){case Spicetify.URI.Type.TRACK:return n?(null==(i=await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/tracks/"+n))?void 0:i.name)||null:null;case Spicetify.URI.Type.PLAYLIST:case Spicetify.URI.Type.PLAYLIST_V2:return n?(null==(i=await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${n}?fields=name`))?void 0:i.name)||null:null;case Spicetify.URI.Type.ALBUM:case Spicetify.URI.Type.COLLECTION_ALBUM:return n?(null==(i=await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/albums/"+n))?void 0:i.name)||null:null;case Spicetify.URI.Type.ARTIST:case Spicetify.URI.Type.COLLECTION_ARTIST:return n?(null==(i=await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/artists/"+n))?void 0:i.name)||null:null;case Spicetify.URI.Type.EPISODE:return n?(null==(i=await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/episodes/"+n))?void 0:i.name)||null:null;case Spicetify.URI.Type.SHOW:return n?(null==(i=await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/shows/"+n))?void 0:i.name)||null:null;case Spicetify.URI.Type.STATION:return A(c(e));case Spicetify.URI.Type.PROFILE:return n?(null==(i=await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/users/"+n))?void 0:i.display_name)||(null==i?void 0:i.id)||null:null;case Spicetify.URI.Type.FOLDER:{const r=e=>{if("folder"==e.type){if(l(e.uri)==n)return e.name;for(const i of e.items){var t=r(i);if(t)return t}}};return r(await Spicetify.Platform.RootlistAPI.getContents())||null}case Spicetify.URI.Type.AD:return I("playing_ad");case Spicetify.URI.Type.SEARCH:var i=(null==(i=Spicetify.URI.from(t))?void 0:i.query)||null;return i?I("search_format").formatUnicorn(i):null;case Spicetify.URI.Type.LOCAL_TRACK:return(null==t?void 0:t.track)||null;case Spicetify.URI.Type.LOCAL_ALBUM:return(null==t?void 0:t.album)||null;case Spicetify.URI.Type.LOCAL_ARTIST:return(null==t?void 0:t.artist)||null}}return null}(s=e):p:new Promise(e=>e(null))}var o=new Set;function O(){var e,t,i,n,r=function(){var e;const n=null==(i=Spicetify.Player.data)?void 0:i.context_uri;if("spotify:internal:local-files"==n)return{type:"LOCAL_FILES"};var t=Spicetify.URI.from(n);if(t){var i=null==(i=null==(i=Spicetify.Player.data)?void 0:i.track)?void 0:i.provider;if(i)switch(i){case"context":switch(t.type){case Spicetify.URI.Type.TRACK:return a(null==(e=null==(e=null==(e=Spicetify.Player.data)?void 0:e.track)?void 0:e.metadata)?void 0:e.title),{type:"TRACK",uri:n};case Spicetify.URI.Type.ALBUM:return a(null==(e=null==(e=Spicetify.Player.data)?void 0:e.context_metadata)?void 0:e.context_description),{type:"ALBUM",uri:n};case Spicetify.URI.Type.PLAYLIST:case Spicetify.URI.Type.PLAYLIST_V2:return a(null==(e=null==(e=Spicetify.Player.data)?void 0:e.context_metadata)?void 0:e.context_description),{type:"PLAYLIST",uri:n};case Spicetify.URI.Type.ARTIST:return a(null==(e=null==(e=Spicetify.Player.data)?void 0:e.context_metadata)?void 0:e.context_description),{type:"ARTIST",uri:n};case Spicetify.URI.Type.STATION:return{type:"STATION",uri:n};case Spicetify.URI.Type.EPISODE:return a(null==(e=null==(e=null==(e=Spicetify.Player.data)?void 0:e.track)?void 0:e.metadata)?void 0:e.title),{type:"EPISODE",uri:n};case Spicetify.URI.Type.SHOW:return a(null==(e=null==(e=Spicetify.Player.data)?void 0:e.context_metadata)?void 0:e.context_description),{type:"PODCAST",uri:n};case Spicetify.URI.Type.COLLECTION:return{type:"LIKED_SONGS",uri:n};case Spicetify.URI.Type.COLLECTION_ARTIST:return{type:"ARTIST_LIKED_SONGS",uri:n};case Spicetify.URI.Type.USER_TOPLIST:return{type:"USER_TOP_TRACKS",uri:n};case Spicetify.URI.Type.SEARCH:return""==(null==t?void 0:t.query)?{type:"RECENT_SEARCHED"}:{type:"SEARCH",uri:n};case Spicetify.URI.Type.FOLDER:return{type:"FOLDER",uri:n};case Spicetify.URI.Type.APPLICATION:if("local-files"===l(t))return{type:"LOCAL_FILES"}}break;case"ad":return{type:"AD"};case"autoplay":var r=(null==(o=null==(o=null==(o=Spicetify.Player.data)?void 0:o.track)?void 0:o.metadata)?void 0:o.context_uri)||n,o=Spicetify.URI.from(r);switch(null==o?void 0:o.type){case Spicetify.URI.Type.SEARCH:return{type:"RECOMMENDED_NO_SOURCE"};case Spicetify.URI.Type.STATION:return{type:"RECOMMENDED",uri:c(r)};default:return{type:"RECOMMENDED",uri:r}}case"queue":return{type:"QUEUE"}}}return{type:"UNKNOWN"};function a(e){var t,i;void 0!==e&&(t=n,i=e,s=t,p=new Promise(e=>e(i)))}}();return"UNKNOWN"==r.type&&(e=null==(e=Spicetify.Player.data)?void 0:e.context_uri,t=Spicetify.URI.from(e),i=null==(i=null==(i=Spicetify.Player.data)?void 0:i.track)?void 0:i.provider,o.has(n=i+"@"+e)||(console.warn("PLAYING-SOURCE: Unknown context for provider",i,"with URI",e,"\n",t,Spicetify.Player.data),o.add(n))),r}String.prototype.formatUnicorn=String.prototype.formatUnicorn||function(){let t=this.toString();if(arguments.length){var i=typeof arguments[0];let e;var n="string"==i||"number"==i?Array.prototype.slice.call(arguments):arguments[0];for(e in n)t=t.replace(new RegExp("\\{"+e+"\\}","gi"),n[e])}return t};var e=async function(){for(var e,t;!(null!=(e=null==Spicetify?void 0:Spicetify.Player)&&e.data&&null!=Spicetify&&Spicetify.URI&&null!=Spicetify&&Spicetify.Locale&&null!=Spicetify&&Spicetify.CosmosAsync);)await new Promise(e=>setTimeout(e,100));const i=_(()=>{var e=T("div",{className:"playing-source-ao-container"},T("div",{className:"playing-source-ao"},T("a",{className:"playing-source-ao-header"},"PLAYING FROM"),T("a",{className:"playing-source-ao-source"},"...")));return e.querySelectorAll("a").forEach(e=>e.addEventListener("click",u)),e},[[".main-downloadClient-container",".cover-art"],[".UalNRoO1omHtEEniypS5",".cover-art"],[".Root__top-container",".main-nowPlayingView-coverArt .cover-art"]],0),n=(t=((e,t)=>{for(var i in t=t||{})v.call(t,i)&&E(e,i,t[i]);if(m)for(var i of m(t))R.call(t,i)&&E(e,i,t[i]);return e})({},Spicetify.TippyProps),S(t,g({delay:0,trigger:"mouseenter focus",interactive:!0,allowHTML:!0,offset:[0,30]})));let r=null;const o=T("div",{className:"playing-source-tt"},T("a",{className:"playing-source-tt-header"},"Playing from"),T("div",{className:"playing-source-tt-source-container"},T("a",{className:"playing-source-tt-source"},"..."))),a=o.querySelector(".playing-source-tt-header"),l=o.querySelector(".playing-source-tt-source-container").querySelector(".playing-source-tt-source"),c=([a,l].forEach(e=>e.addEventListener("click",u)),h(".main-nowPlayingBar-left",void 0,0).then(t=>{let i=null;function e(){var e=t.querySelector(".main-coverSlotCollapsed-container");e&&e!==i&&(i=e,null!=r&&r.destroy(),(r=Spicetify.Tippy(e,n)).popper.querySelector(".main-contextMenu-tippy").appendChild(o))}e(),new MutationObserver(e).observe(t,{childList:!0,subtree:!0})}),new Set(["TRACK","RECENT_SEARCHED","RECOMMENDED_NO_SOURCE","AD","USER_TOP_TRACKS","LIKED_SONGS","QUEUE","LOCAL_FILES","UNKNOWN"])),p={AD:null,QUEUE:()=>{Spicetify.Platform.History.push("/queue")}},s=(e=O())=>{return e.type in p?p[e.type]:null==(e=Spicetify.Player.data)?void 0:e.context_uri};function u(e){var t;"void"==e.currentTarget.getAttribute("href")&&"function"==typeof(t=s())&&(e.preventDefault(),t())}function y(n,r){function t(e,t){e.innerText=n,t.innerText=r||"",t.classList[null===n?"add":"remove"]("playing-source-hidden"),t.removeAttribute("href"),e.removeAttribute("href");let i=s();null!==i&&("string"!=typeof i&&(i="void"),(null===r?e:t).setAttribute("href",i))}a.innerText=n,l.innerText=r||"",i.forEach(e=>t(e.querySelector(".playing-source-ao-header"),e.querySelector(".playing-source-ao-source"))),t(a,l)}let d=0,f=null;Spicetify.Player.addEventListener("onprogress",function(){var e=O();if(null===f||f.type!==e.type||(null==f?void 0:f.uri)!==(null==e?void 0:e.uri)){f=e;let t;var i=null;d++,t=I("playing_"+e.type),i=c.has(e.type)||void 0===e.uri?new Promise(e=>e(null)):A(e.uri),y(t,I("loading"));const n=d;i.then(e=>{n===d&&y(t,e)})}})};(async()=>{await e()})()})();(async()=>{var e;document.getElementById("playingDsource")||((e=document.createElement("style")).id="playingDsource",e.textContent=String.raw`
  .playing-source-ao-relative-positioner{position:relative}.playing-source-ao-container{transition:filter .1s ease-in-out;pointer-events:none;position:absolute;display:block;bottom:0;left:0;width:100%;height:100%;overflow:hidden;--playing-source-ao-bkg-color:rgba(0, 0, 0, 0.5);display:flex;flex-flow:column nowrap;justify-content:flex-end;filter:opacity(0);color:var(--spice-text)}.cover-art:focus-within .playing-source-ao-container,.cover-art:hover .playing-source-ao-container{filter:opacity(1)}.playing-source-ao-container::before{content:"";width:100%;height:50px;background:linear-gradient(transparent,var(--playing-source-ao-bkg-color))}.playing-source-ao{width:100%;height:-moz-min-content;height:min-content;display:flex;flex-flow:column nowrap;justify-content:flex-end;align-items:center;background:var(--playing-source-ao-bkg-color);padding:10px;padding-top:0;gap:5px;text-shadow:0 0 4px #000}.playing-source-ao-header{font-weight:100;font-size:.8em;text-transform:uppercase}.playing-source-ao-source{font-weight:700;text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;max-width:100%}.playing-source-ao-header[href],.playing-source-ao-source[href],.playing-source-tt-header[href],.playing-source-tt-source[href]{pointer-events:auto}.playing-source-ao-header[href]:hover,.playing-source-ao-source[href]:hover,.playing-source-tt-header[href]:hover,.playing-source-tt-source[href]:hover{text-decoration:underline}.playing-source-ao-header:not([href]),.playing-source-ao-source:not([href]),.playing-source-tt-header:not([href]),.playing-source-tt-source:not([href]){text-decoration:none}.playing-source-tt{text-align:center}.playing-source-tt-header{font-style:italic}.playing-source-tt-source{font-weight:700;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px}.playing-source-hidden{display:none!important}
      `.trim(),document.head.appendChild(e))})();