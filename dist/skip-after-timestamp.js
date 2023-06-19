var skipDafterDtimestamp=(()=>{var o=Object.create,p=Object.defineProperty,I=Object.defineProperties,l=Object.getOwnPropertyDescriptor,A=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,m=Object.getPrototypeOf,q=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,H=(e,t,i)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,e=(e,t)=>function(){return t||(0,e[c(e)[0]])((t={exports:{}}).exports,t),t.exports},t=(e,t,i)=>{i=null!=e?o(m(e)):{};var a=!t&&e&&e.__esModule?i:p(i,"default",{value:e,enumerable:!0}),s=e,r=void 0,n=void 0;if(s&&"object"==typeof s||"function"==typeof s)for(let e of c(s))q.call(a,e)||e===r||p(a,e,{get:()=>s[e],enumerable:!(n=l(s,e))||n.enumerable});return a},i=e({"external-global-plugin:react"(e,t){t.exports=Spicetify.React}}),e=e({"external-global-plugin:react-dom"(e,t){t.exports=Spicetify.ReactDOM}}),r={svg:"http://www.w3.org/2000/svg",path:"http://www.w3.org/2000/svg"};function W(e,t,...i){if("function"==typeof e)return e(t,...i);var a=t.xmlns||r[e]||"http://www.w3.org/1999/xhtml";const s=document.createElementNS(a,e);return Object.entries(t||{}).forEach(([e,t])=>{(e="className"===e?"class":e).startsWith("on")&&e.toLowerCase()in window?s.addEventListener(e.toLowerCase().substring(2),t):s.setAttribute(e,String(t))}),i.forEach(e=>{!function t(i,e){Array.isArray(e)?e.forEach(e=>t(i,e)):i.append(e)}(s,e)}),s}var a="en",s={en:{skip_after_timestamp:"Skip after Timestamp",percentage_mode_setting:"Percentage mode - Skip tracks based on percentage completed instead of a timestamp",will_skip_after_time:"Tracks will now be skipped after {0}",will_skip_after_percentage:"Tracks will now be skipped after {0} completed",future_skip_after_time:"Future tracks will now be skipped after {0}",future_skip_after_percentage:"Future tracks will now be skipped after {0} completed",this_skip_after_time:"This track will now be skipped after {0}",this_skip_after_percentage:"This track will now be skipped after {0} completed",disabled_auto_skip:"Disabled auto skip",disabled_once:"Will not skip this track once"},es:{skip_after_timestamp:"Saltar Después de",percentage_mode_setting:"Modo de porcentaje - Salta la canción después de que se haya reproducido un porcentaje en vez de una duración",will_skip_after_time:"Se reproducirá la siguiente canción tras {0}",will_skip_after_percentage:"Se reproducirá la siguiente canción tras reproducir el {0}",future_skip_after_time:"Las siguientes canciones se reproducirán tras {0}",future_skip_after_percentage:"Las siguientes canciones se reproducirán tras reproducir el {0}",this_skip_after_time:"Se reproducirá la siguiente canción tras {0}",this_skip_after_percentage:"Se reproducirá la siguiente canción tras reproducir el {0}",disabled_auto_skip:"Siguiente reproducción automática desactivada",disabled_once:"Esta canción no se saltará automáticamente"}};function z(e,t){return t=t||Spicetify.Locale.getLocale(),s[t]?s[t][e]||e:z(e,a)}function U(e,t){e=e.clientX-t.getBoundingClientRect().left;return Math.min(Math.max(e/t.clientWidth,0),1)}var X=e=>Math.floor(e/6e4)+":"+Math.floor(e%6e4/1e3).toString().padStart(2,"0"),J=(e,t=!1)=>`${t?100*e:Math.floor(100*e)}%`,n=e=>"string"!=typeof e||e.match(/[^\d.]/)?NaN:parseFloat(e.trim().replace(",","."));function Y(e){var t;return!e||!e.match(/\d/)||3<(t=e.split(":")).length||(t=1e3*(3600*(2<t.length?n(t[t.length-3]):0)+60*(1<t.length?n(t[t.length-2]):0)+n(t[t.length-1])),console.log("TIME",e,t),isNaN(t))?null:t}function $(e){var t;return!e||!e.match(/\d/)||(t=n(e.replace("%",""))/100,console.log("PERCENT",e,t),isNaN(t))?null:t}var d=t(i()),f=t(e()),u={settingsContainer:"settings-module__settingsContainer___e9wxn_skipDafterDtimestamp",heading:"settings-module__heading___AnER-_skipDafterDtimestamp",description:"settings-module__description___dP4fR_skipDafterDtimestamp",inputWrapper:"settings-module__inputWrapper___LgOrw_skipDafterDtimestamp"},G=class{constructor(e,t,i={}){this.name=e,this.settingsId=t,this.initialSettingsFields=i,this.settingsFields=this.initialSettingsFields,this.setRerender=null,this.buttonClassnames=null,this.pushSettings=async()=>{for(Object.entries(this.settingsFields).forEach(([e,t])=>{"button"!==t.type&&void 0===this.getFieldValue(e)&&this.setFieldValue(e,t.defaultValue)});!Spicetify?.Platform?.History?.listen;)await new Promise(e=>setTimeout(e,100));this.stopHistoryListener&&this.stopHistoryListener(),this.stopHistoryListener=Spicetify.Platform.History.listen(e=>{"/preferences"===e.pathname&&this.render()}),"/preferences"===Spicetify.Platform.History.location.pathname&&await this.render()},this.rerender=()=>{this.setRerender&&this.setRerender(Math.random())},this.render=async()=>{for(;!document.getElementById("desktop.settings.selectLanguage");){if("/preferences"!==Spicetify.Platform.History.location.pathname)return;await new Promise(e=>setTimeout(e,100))}var e=document.querySelector(".main-view-container__scroll-node-child main div");if(!e)return console.error("[spcr-settings] settings container not found");this.buttonClassnames=Array.from(e.querySelectorAll(":scope > button")).at(-1)?.className??null;let t=Array.from(e.children).find(e=>e.id===this.settingsId);t?console.log(t):((t=document.createElement("div")).id=this.settingsId,t.className=u.settingsContainer,e.appendChild(t)),f.default.render(d.default.createElement(this.FieldsContainer,null),t)},this.addButton=(e,t,i,a,s)=>{this.settingsFields[e]={type:"button",description:t,value:i,events:{onClick:a,...s}}},this.addInput=(e,t,i,a,s)=>{this.settingsFields[e]={type:"input",description:t,defaultValue:i,events:{onChange:a,...s}}},this.addHidden=(e,t)=>{this.settingsFields[e]={type:"hidden",defaultValue:t}},this.addToggle=(e,t,i,a,s)=>{this.settingsFields[e]={type:"toggle",description:t,defaultValue:i,events:{onChange:a,...s}}},this.addDropDown=(e,t,i,a,s,r)=>{this.settingsFields[e]={type:"dropdown",description:t,defaultValue:i[a],options:i,events:{onSelect:s,...r}}},this.getFieldValue=e=>JSON.parse(Spicetify.LocalStorage.get(this.settingsId+"."+e)||"{}")?.value,this.setFieldValue=(e,t)=>{Spicetify.LocalStorage.set(this.settingsId+"."+e,JSON.stringify({value:t}))},this.FieldsContainer=()=>{var[e,t]=(0,d.useState)(0);return this.setRerender=t,d.default.createElement("div",{className:u.settingsContainer,key:e},d.default.createElement("h2",{className:["main-shelf-title main-type-cello",u.heading].join(" ")},this.name),Object.entries(this.settingsFields).map(([e,t])=>d.default.createElement(this.Field,{nameId:e,field:t})))},this.Field=i=>{var e=this.settingsId+"."+i.nameId;let t;if(t="button"===i.field.type?i.field.value:this.getFieldValue(i.nameId),"hidden"===i.field.type)return d.default.createElement(d.default.Fragment,null);const[a,s]=(0,d.useState)(t),r=e=>{void 0!==e&&(s(e),this.setFieldValue(i.nameId,e))};return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"main-type-mesto",style:{color:"var(--spice-subtext)"}},d.default.createElement("label",{className:u.description,htmlFor:e},i.field.description||"")),d.default.createElement("span",{className:["x-settings-secondColumn",u.inputWrapper].join(" ")},"input"===i.field.type?d.default.createElement("input",{className:"main-dropDown-dropDown",id:e,dir:"ltr",value:a,type:"text",...i.field.events,onChange:e=>{r(e.currentTarget.value);var t=i.field.events?.onChange;t&&t(e)}}):"button"===i.field.type?d.default.createElement("span",{className:""},d.default.createElement("button",{id:e,className:this.buttonClassnames??"",...i.field.events,onClick:e=>{r();var t=i.field.events?.onClick;t&&t(e)},type:"button"},a)):"toggle"===i.field.type?d.default.createElement("label",{className:"x-toggle-wrapper x-settings-secondColumn"},d.default.createElement("input",{id:e,className:"x-toggle-input",type:"checkbox",checked:a,...i.field.events,onClick:e=>{r(e.currentTarget.checked);var t=i.field.events?.onClick;t&&t(e)}}),d.default.createElement("span",{className:"x-toggle-indicatorWrapper"},d.default.createElement("span",{className:"x-toggle-indicator"}))):"dropdown"===i.field.type?d.default.createElement("select",{className:"main-dropDown-dropDown",id:e,...i.field.events,onChange:e=>{r(i.field.options[e.currentTarget.selectedIndex]);var t=i.field.events?.onChange;t&&t(e)}},i.field.options.map((e,t)=>d.default.createElement("option",{selected:e===a,value:t+1},e))):d.default.createElement(d.default.Fragment,null)))}}};String.prototype.formatUnicorn=String.prototype.formatUnicorn||function(){let t=this.toString();if(arguments.length){var i=typeof arguments[0];let e;var a="string"==i||"number"==i?Array.prototype.slice.call(arguments):arguments[0];for(e in a)t=t.replace(new RegExp("\\{"+e+"\\}","gi"),a[e])}return t};var g=async function(){for(;!(null!=Spicetify&&Spicetify.Player&&null!=Spicetify&&Spicetify.Locale&&null!=Spicetify&&Spicetify.showNotification&&null!=Spicetify&&Spicetify.CosmosAsync);)await new Promise(e=>setTimeout(e,100));Spicetify.CosmosAsync.sub("sp://player/v2/main",e=>{e.playback_id!==Spicetify.Player.data.playback_id||void 0===(e=e.position_as_of_timestamp)||e<1e3||e>=b()&&D(!1)});const i=new G(z("skip_after_timestamp"),"skip-after-timestamp",{"percentage-mode":{type:"toggle",description:z("percentage_mode_setting"),defaultValue:!1,events:{onChange:()=>{var e,t;e=i.getFieldValue("percentage-mode"),t=!0,e!==w()&&(_()?e?P(S(),t):L(b(),t):N(e,t))}}}}),r=(await i.pushSettings(),n=".playback-progressbar",o=document.body,l=!(p=5e3),await new Promise((t,e)=>{let i;0<p&&(i=setTimeout(()=>{if(l)return e("Did not find element after timeout.");console.warn("waitForElm has waited for",p," for selector",n,"within",o,"but it has not yet been found.")},p));var a=o.querySelector(n);if(a)return t(a);const s=new MutationObserver(()=>{var e=o.querySelector(n);if(e)return s.disconnect(),clearTimeout(i),t(e)});s.observe(o,{childList:!0,subtree:!0})}));var n,o,p,l;const c=W("div",{className:"skip-after-timestamp-marker"},W("div",{className:"skip-after-timestamp-container"},W("button",{className:"skip-after-timestamp-button",type:"button"}))),m=(document.body.appendChild(c),["left","top","right","bottom"]),d=Array(m.length).fill(null);!function e(){var t,i,a=r.getBoundingClientRect();for([t,i]of m.entries()){var s=a[i];s!==d[t]&&(c.style.setProperty("--skip-after-timestamp-playback-"+i,s+"px"),d[t]=s)}requestAnimationFrame(e)}(),c.addEventListener("mousedown",e=>{const r=e.clientX,n=e.clientY;function o(e){window.removeEventListener("mousemove",p),c.contains(e.target)&&(e.preventDefault(),0===e.button?(E(!0),Spicetify.showNotification(z("disabled_auto_skip")),c.classList.remove("skip-after-timestamp-active")):2===e.button&&D(!t(),!0))}function p(e){var t,i,a,s;t=r,i=n,a=e.clientX,s=e.clientY,8<Math.sqrt(Math.pow(a-t,2)+Math.pow(s-i,2))&&(j(e),window.removeEventListener("mouseup",o),window.removeEventListener("mousemove",p))}window.addEventListener("mouseup",o,{once:!0}),window.addEventListener("mousemove",p)}),e=((e,t)=>{for(var i in t=t||{})q.call(t,i)&&H(e,i,t[i]);if(R)for(var i of R(t))B.call(t,i)&&H(e,i,t[i]);return e})({},Spicetify.TippyProps);var e=I(e,A({interactive:!0,interactiveBorder:30}));const s=Spicetify.Tippy(c,e),a=W("input",{className:"skip-after-timestamp-input",type:"text"}),f=(s.popper.querySelector(".main-contextMenu-tippy").appendChild(a),a.addEventListener("focusout",e=>{var i=a.value;if(""!==i){a.value=f();let e=(w()?$:Y)(i),t=w();null===e&&(t=!t,e=(w()?Y:$)(i)),null!==e&&(t?J:X)(e)!==f()&&(t?P:L)(e,!0)}}),a.addEventListener("keypress",e=>{"Enter"===e.key&&a.blur()}),()=>w()?J(S()):X(b())),u=(e,t=Spicetify.Player.getDuration())=>e*t;let g,k,h,y,v;const _=()=>!0===g,t=()=>!0===k,w=()=>!0===h,b=()=>w()?u(v):y,S=()=>{return w()?v:(e=y,t=Spicetify.Player.getDuration(),e/t);var e,t};function E(e=!1){_()&&(D(!(g=!1)),c.classList.remove("skip-after-timestamp-active"),e)&&Spicetify.showNotification(z("disabled_auto_skip"))}function x(e=!1){e=e?"this":t()?"will":"future";w()?Spicetify.showNotification(z(e+"_skip_after_percentage").formatUnicorn(J(S()))):Spicetify.showNotification(z(e+"_skip_after_time").formatUnicorn(X(b())))}function L(e,t=!1){!w()&&e===b()||(s.hide(),c.classList.add("skip-after-timestamp-active"),c.classList.add("skip-after-timestamp-duration-mode"),c.classList.remove("skip-after-timestamp-percentage-mode"),N(!(g=!0)),y=e,C(),F()&&D(!1),X(e),t&&x(),a.value=X(e))}function P(e,t=!1){w()&&e===S()||(s.hide(),c.classList.add("skip-after-timestamp-active"),c.classList.remove("skip-after-timestamp-duration-mode"),c.classList.add("skip-after-timestamp-percentage-mode"),N(g=!0),v=e,C(),F()&&D(!1),J(e),t&&x(),a.value=J(e))}const M=(e,t=!1)=>w()?P(e,t):L(u(e),t);function D(e,t=!1){e!==k&&(k=e,c.classList[e?"remove":"add"]("skip-after-timestamp-dont-skip-this-playback"),t)&&(e?x(!0):Spicetify.showNotification(z("disabled_once")))}function N(e,t=!1){e!==w()&&(h=e,i.setFieldValue("percentage-mode",e),c.classList[e?"add":"remove"]("skip-after-timestamp-percentage-mode"),t)&&_()&&x()}function C(e=S()){c.style.setProperty("--skip-after-timestamp-set",e.toString()),c.classList[1<e?"add":"remove"]("skip-after-timestamp-overflow")}E(),D(!0),N(i.getFieldValue("percentage-mode"));const F=()=>w()?Spicetify.Player.getProgressPercent()>=v:Spicetify.Player.getProgress()>=y;let O=!1;function j(i){if(!O){O=!0,s.disable();const a=e=>c.style.setProperty("--skip-after-timestamp-drag",U(e,r).toString());c.classList.add("skip-after-timestamp-dragging"),a(i),window.addEventListener("mousemove",a),window.addEventListener("mouseup",function e(t){t.button===i.button&&(window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",e),O=!1,s.enable(),c.classList.remove("skip-after-timestamp-dragging"),t=U(t,r),M(t,!0))})}}r.addEventListener("mousedown",e=>{2===e.button&&j(e)});let T=void 0,V=!1;Spicetify.Player.addEventListener("onprogress",()=>{Spicetify.Player.data.playback_id!==T&&(T=Spicetify.Player.data.playback_id,D(!0),V=!1,C()),V||_()&&t()&&F()&&1e3<Spicetify.Player.getProgress()&&!O&&(Spicetify.Player.isPlaying()?(V=!0,Spicetify.Player.next()):D(!1))}),console.log("Loaded skip-after-timestamp")};(async()=>{await g()})()})();(async()=>{var e;document.getElementById("skipDafterDtimestamp")||((e=document.createElement("style")).id="skipDafterDtimestamp",e.textContent=String.raw`
  .settings-module__settingsContainer___e9wxn_skipDafterDtimestamp{display:contents}.settings-module__heading___AnER-_skipDafterDtimestamp{grid-column:1/-1;font-size:1.125rem;line-height:1.5rem;color:#fff;margin-top:24px}.settings-module__description___dP4fR_skipDafterDtimestamp{font-size:.875rem;line-height:1.25rem}.settings-module__inputWrapper___LgOrw_skipDafterDtimestamp{display:flex;justify-self:end}.skip-after-timestamp-marker{position:absolute;height:15px;width:15px;left:calc(var(--skip-after-timestamp-playback-left) + var(--skip-after-timestamp-progress) * (var(--skip-after-timestamp-playback-right) - var(--skip-after-timestamp-playback-left)));top:calc((var(--skip-after-timestamp-playback-top) + var(--skip-after-timestamp-playback-bottom))/ 2);--skip-after-timestamp-progress:var(--skip-after-timestamp-set);transform:translate(-5px,-50%);z-index:1;overflow:visible;transition:left .25s,transform 50ms}.skip-after-timestamp-marker.skip-after-timestamp-overflow:not(.skip-after-timestamp-dragging){left:var(--skip-after-timestamp-playback-right);top:var(--skip-after-timestamp-playback-top);transform:translate(-50%,-150%)}.skip-after-timestamp-marker.skip-after-timestamp-overflow:not(.skip-after-timestamp-dragging) .skip-after-timestamp-container{background-color:gray}.skip-after-timestamp-marker.skip-after-timestamp-dont-skip-this-playback .skip-after-timestamp-container{background-color:gray}.skip-after-timestamp-marker:not(.skip-after-timestamp-active):not(.skip-after-timestamp-dragging){display:none}.skip-after-timestamp-marker.skip-after-timestamp-dragging{transition:none;--skip-after-timestamp-progress:var(--skip-after-timestamp-drag)}.skip-after-timestamp-marker:hover{cursor:pointer}.skip-after-timestamp-marker:hover .skip-after-timestamp-button{background-color:rgba(0,0,0,.2)}.skip-after-timestamp-marker:active .skip-after-timestamp-button{background-color:rgba(0,0,0,.4)}.skip-after-timestamp-marker .skip-after-timestamp-button{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' role='img' aria-hidden='true' viewBox='0 0 16 16' fill='white'><path d='M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z'/></svg>")}.skip-after-timestamp-marker.skip-after-timestamp-dont-skip-this-playback .skip-after-timestamp-button,.skip-after-timestamp-marker.skip-after-timestamp-overflow .skip-after-timestamp-button{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' role='img' aria-hidden='true' viewBox='0 0 16 16' fill='white'><path d='M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z'/></svg>")}.skip-after-timestamp-container{background-color:#4687d6;filter:drop-shadow(0 0 6px var(--spice-shadow));transition:background-color .25s;height:100%;width:100%}.skip-after-timestamp-button{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:calc(100% - 4px);height:calc(100% - 4px);border-radius:0;background-color:transparent;border:none;display:flex;justify-content:center;align-items:center;color:#fff}.skip-after-timestamp-input{width:55px;background-color:transparent;border:none;text-align:center}.skip-after-timestamp-input:focus{border-bottom:1px solid #fff;text-align:left}
      `.trim(),document.head.appendChild(e))})();