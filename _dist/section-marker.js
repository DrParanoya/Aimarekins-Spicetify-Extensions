var sectionDmarker=(()=>{var f=300,d=e=>e[0].toUpperCase()+e.slice(1),p=document.createElement("div"),h=(p.classList.add("section-marker-element","section-marker-sections"),document.createElement("div")),b=(h.classList.add("section-marker-element","section-marker-markers"),!1);async function t(){if(b)throw new Error("Interface already injected");function t(e,t){document.body.style.setProperty("--section-marker-playbar-width",e+"px"),document.body.style.setProperty("--section-marker-playbar-height",t+"px"),document.body.classList[e<f?"add":"remove"]("section-marker-playbar-below-marker-width")}b=!0;let r;const a=new ResizeObserver(()=>{t(r.clientWidth,r.clientHeight)});document.body.classList.add("section-marker-no-data");let o=null;function n(o){s(o),c&&new MutationObserver((e,t)=>{for(const r of e)for(const a of r.removedNodes)if(a===o)return t.disconnect(),void c(o)}).observe(o.parentNode,{childList:!0})}var i,e,s,c,d,l,m,k,u,y;[i,e=document.body,s,c,d=!0]=[".playback-bar .playback-progressbar",(m="#main > .Root",k=document.body,y=!(u=5e3),await new Promise((t,e)=>{let r;0<u&&(r=setTimeout(()=>{if(y)return e("Did not find element after timeout.");console.warn("waitForElm has waited for",u," for selector",m,"within",k,"but it has not yet been found.")},u));var a=k.querySelector(m);if(a)return t(a);const o=new MutationObserver(()=>{var e=k.querySelector(m);if(e)return o.disconnect(),clearTimeout(r),t(e)});o.observe(k,{childList:!0,subtree:!0})})),e=>{o!==e&&((r=e).classList.add("section-marker-injected-playbar"),(e=r.querySelector(".x-progressBar-sliderArea")).appendChild(p),e.appendChild(h),t(r.clientWidth,r.clientHeight),a.disconnect(),a.observe(r))}],(l=e.querySelector(i))&&n(l),new MutationObserver(e=>{for(const t of e)for(const r of t.addedNodes)r instanceof HTMLElement&&r.querySelectorAll(i).forEach(n)}).observe(e,{childList:!0,subtree:d})}function r(){document.body.classList.remove("section-marker-loading-data","section-marker-had-no-data","section-marker-less-than-two-sections"),document.body.classList.add("section-marker-no-data")}var l={start:(e,t)=>e.sections[t].start,duration:(e,t)=>e.sections[t].duration,index:(e,t)=>t};var a=15e3;function o(e){e=Spicetify.URI.from(e);return e&&e.type===Spicetify.URI.Type.TRACK}var m=0,e=null;function n(t){if(t!==e){e=t;const c=++m;o(t)?(document.body.classList[document.body.classList.contains("section-marker-no-data")?"add":"remove"]("section-marker-had-no-data"),document.body.classList.add("section-marker-loading-data"),Spicetify.getAudioData(t).then(e=>{if(c===m){var o=e;var t=document.body.querySelector(".section-marker-markers"),r=document.body.querySelector(".section-marker-sections");const i=Array.from(t.querySelectorAll(".section-marker-marker")),s=Array.from(r.querySelectorAll(".section-marker-section"));document.body.classList[o.sections.length<2?"add":"remove"]("section-marker-less-than-two-sections");for(let e=i.length;e<o.sections.length;e++){var a=document.createElement("div"),n=(a.classList.add("section-marker-marker"),document.createElement("div"));n.classList.add("section-marker-section"),[a,n].forEach(e=>e.classList.add("section-marker-not-exists")),t.appendChild(a),r.appendChild(n),i.push(a),s.push(n)}requestAnimationFrame(()=>{var e=o.track.duration.toString();document.body.style.setProperty("--section-marker-data-track-duration",e),document.body.dataset.sectionMarkerDataTrackDuration=e,document.body.classList.remove("section-marker-loading-data"),document.body.classList.contains("section-marker-no-data")&&(document.body.classList.remove("section-marker-no-data"),document.body.classList.add("section-marker-had-no-data"));for(let a=0;a<o.sections.length;a++)[i[a],s[a]].forEach(e=>{e.classList.remove("section-marker-not-exists");for(var[t,r]of Object.entries(l)){r=r(o,a).toString();e.dataset["sectionMarkerData"+d(t)]=r,e.style.setProperty("--section-marker-data-"+t,r)}});for(let e=o.sections.length;e<i.length;e++)[i[e],s[e]].forEach(e=>e.classList.add("section-marker-not-exists"))})}}).catch(e=>{console.warn("SECTION-MARKER: Failed to get audio data for",t,e),c===m&&r()})):r()}}var i=null,s=0;var c=async function(){for(var e;!(null!=(e=null==Spicetify?void 0:Spicetify.Player)&&e.data&&null!=Spicetify&&Spicetify.URI&&null!=Spicetify&&Spicetify.Locale&&null!=Spicetify&&Spicetify.CosmosAsync&&null!=Spicetify&&Spicetify.React);)await new Promise(e=>setTimeout(e,100));await t(),Spicetify.Player.addEventListener("onprogress",()=>{var e=(e=Spicetify.Player.origin.getState()).hasContext&&e.item.uri||null;n(e),Spicetify.Player.getDuration()-Spicetify.Player.getProgress()<1e4&&(e=null==(e=null==(e=Spicetify.Queue.nextTracks[0])?void 0:e.contextTrack)?void 0:e.uri,i==e||Date.now()-s<a||!o(e)||(i=e,s=Date.now(),Spicetify.getAudioData(e)))})};(async()=>{await c()})()})();(async()=>{var e;document.getElementById("sectionDmarker")||((e=document.createElement("style")).id="sectionDmarker",e.textContent=String.raw`
  .playback-bar .progress-bar{--section-marker-marker-color:rgb(255 255 255 / 0.8);--section-marker-marker-size:4px}.section-marker-disabled .section-marker-element,.section-marker-less-than-two-sections .section-marker-element,.section-marker-loading-data.section-marker-had-no-data .section-marker-element,.section-marker-no-data .section-marker-element{opacity:0;transition-duration:.1s}.section-marker-loading-data .section-marker-element{opacity:.1}.section-marker-no-markers .section-marker-markers,.section-marker-playbar-below-marker-width .section-marker-markers{display:none}.section-marker-had-no-data .section-marker-marker,.section-marker-had-no-data .section-marker-section{transition:none}.section-marker-element{position:absolute;top:0;left:0;width:100%;height:100%;transition-property:opacity;transition-duration:.5s;transition-timing-function:ease-in-out;direction:ltr;pointer-events:none}.section-marker-marker{width:var(--section-marker-marker-size);height:var(--section-marker-playbar-height);position:absolute;top:50%;left:calc(var(--section-marker-data-start)/ var(--section-marker-data-track-duration) * 100%);transform:translate(-50%,-50%);background-color:var(--section-marker-marker-color);transition-property:left,opacity;transition-duration:.5s;transition-timing-function:ease-in-out}.section-marker-marker.section-marker-not-exists{left:100%;opacity:0}.section-marker-marker:first-child{display:none}.section-marker-sections{overflow-x:hidden;display:flex;flex-direction:row;position:absolute}.section-marker-section{width:calc(var(--section-marker-data-duration)/ var(--section-marker-data-track-duration) * 100%);height:100%;flex-shrink:0;transition:width .5s ease-in-out}.section-marker-section:last-child{width:100%}.section-marker-section.section-marker-not-exists{width:0}.section-marker-section:nth-child(2n){-webkit-backdrop-filter:contrast(0.6) invert(0.1);backdrop-filter:contrast(0.6) invert(0.1)}
      `.trim(),document.head.appendChild(e))})();