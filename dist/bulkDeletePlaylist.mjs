await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));
var Y=new CSSStyleSheet;Y.replaceSync(`.bulk-delete-modal{position:fixed;inset:0;background:#000000b3;display:flex;align-items:center;justify-content:center;z-index:9999}.bulk-delete-content{background:#181818;border-radius:8px;width:600px;max-height:85vh;display:flex;flex-direction:column;color:#fff;font-family:var(--font-family, spotify),sans-serif;box-shadow:0 8px 24px #00000080}.bulk-delete-header{padding:16px 20px;border-bottom:1px solid #282828;font-size:18px;font-weight:700;display:flex;justify-content:space-between;align-items:center}.bulk-delete-header-right{display:flex;align-items:center;gap:8px}.bulk-delete-close{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:transparent;border:none;cursor:pointer;transition:background .15s}.bulk-delete-close:hover{background:#282828}.bulk-delete-close svg{width:18px;height:18px;fill:#b3b3b3;transition:fill .15s}.bulk-delete-close:hover svg{fill:#fff}.bulk-delete-github{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;transition:background .15s}.bulk-delete-github:hover{background:#282828}.bulk-delete-github svg{width:18px;height:18px;fill:#b3b3b3;transition:fill .15s}.bulk-delete-github:hover svg{fill:#fff}.bulk-delete-playlist-selector{padding:16px 20px;border-bottom:1px solid #282828}.bulk-delete-playlist-label{display:block;color:#b3b3b3;font-size:12px;font-weight:600;margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px}.bulk-delete-playlist-select{width:100%;padding:10px 36px 10px 12px;background:#3f3f3f;border:none;border-radius:4px;color:#fff;font-size:14px;font-family:inherit;cursor:pointer;transition:background .2s;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='%23b3b3b3'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center}.bulk-delete-playlist-select:hover{background-color:#4a4a4a}.bulk-delete-playlist-select:focus{outline:none;background-color:#4a4a4a}.bulk-delete-search{padding:16px 20px;border-bottom:1px solid #282828}.bulk-delete-search-wrapper{display:flex;align-items:center;background:#282828;border-radius:4px;padding:0 12px}.bulk-delete-search-icon{color:#b3b3b3;display:flex;align-items:center}.bulk-delete-search-icon svg{width:20px;height:20px}.bulk-delete-search input{flex:1;background:transparent;border:none;color:#fff;font-size:14px;padding:12px;outline:none}.bulk-delete-search input::placeholder{color:#b3b3b3}.bulk-delete-search input:disabled{opacity:.5}.bulk-delete-track-info{padding:12px 20px;background:#121212;border-bottom:1px solid #282828}.bulk-delete-track-info p{color:#b3b3b3;font-size:13px;margin:0}.bulk-delete-track-info span{color:#fff;font-weight:600}.bulk-delete-list{flex:1;overflow-y:auto;padding:8px 0;min-height:400px}.bulk-delete-empty{display:flex;align-items:center;justify-content:center;height:100%;min-height:400px;color:#b3b3b3;font-size:14px}.bulk-delete-item{display:flex;align-items:center;padding:8px 16px;cursor:pointer;transition:background .15s;gap:8px}.bulk-delete-item:hover{background:#282828}.bulk-delete-item.selected{background:#1db9541a}.bulk-delete-track-number{width:32px;text-align:center;color:#b3b3b3;font-size:14px;flex-shrink:0}.bulk-delete-playing-indicator{width:12px;height:12px;display:inline-block}.bulk-delete-playing-indicator:before{content:"";display:block;width:12px;height:12px;background:#1db954;border-radius:50%;animation:bulk-delete-pulse 1s ease-in-out infinite}@keyframes bulk-delete-pulse{0%,to{opacity:1}50%{opacity:.5}}.bulk-delete-track-image-container{width:40px;height:40px;flex-shrink:0;border-radius:4px;overflow:hidden;background:#282828}.bulk-delete-track-image{width:100%;height:100%;object-fit:cover}.bulk-delete-playback-controls{display:flex;align-items:center;gap:8px;width:280px;flex-shrink:0}.bulk-delete-playback-button{width:28px;height:28px;border-radius:50%;background:transparent;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s}.bulk-delete-playback-button:hover{background:#282828}.bulk-delete-playback-button svg{width:16px;height:16px}.bulk-delete-slider-container{display:flex;align-items:center;gap:4px;flex:1}.bulk-delete-slider-time{color:#b3b3b3;font-size:11px;min-width:35px}.bulk-delete-slider{flex:1;height:4px;-webkit-appearance:none;appearance:none;background:#4a4a4a;border-radius:2px;cursor:pointer}.bulk-delete-slider::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;background:#fff;border-radius:50%;cursor:pointer}.bulk-delete-slider:hover::-webkit-slider-thumb{transform:scale(1.2)}.bulk-delete-checkbox-wrapper{position:relative;width:20px;height:20px;margin-right:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.bulk-delete-checkbox{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer}.bulk-delete-checkbox-custom{width:16px;height:16px;border:2px solid #b3b3b3;border-radius:3px;transition:all .15s;display:flex;align-items:center;justify-content:center}.bulk-delete-checkbox:checked+.bulk-delete-checkbox-custom{background:#1db954;border-color:#1db954}.bulk-delete-checkbox:checked+.bulk-delete-checkbox-custom:after{content:"";width:6px;height:10px;border:solid #000;border-width:0 2px 2px 0;transform:rotate(45deg);margin-bottom:2px}.bulk-delete-item-info{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.bulk-delete-item-title{color:#fff;font-size:14px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.bulk-delete-item-artist{color:#b3b3b3;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.bulk-delete-item-album{color:#727272;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px}.bulk-delete-buttons{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-top:1px solid #282828}.bulk-delete-select-all{background:transparent;border:none;color:#1db954;font-size:13px;font-weight:600;cursor:pointer;padding:8px 16px;transition:color .2s}.bulk-delete-select-all:hover{color:#1ed760}.bulk-delete-button-group{display:flex;gap:12px}.bulk-delete-btn{padding:10px 20px;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;transition:all .2s;border:none}.bulk-delete-btn.cancel{background:transparent;border:1px solid #727272;color:#fff}.bulk-delete-btn.cancel:hover{border-color:#fff}.bulk-delete-btn.delete{background:#e91429;color:#fff}.bulk-delete-btn.delete:hover:not(:disabled){background:#f03727}.bulk-delete-btn.delete:disabled{background:#535353;color:#181818;cursor:not-allowed}.bulk-delete-confirm-overlay{position:fixed;inset:0;background:#000000b3;display:flex;align-items:center;justify-content:center;z-index:10000}.bulk-delete-confirm-content{background:#181818;border-radius:8px;width:480px;padding:20px;box-shadow:0 8px 24px #00000080}.bulk-delete-confirm-header{color:#fff;font-size:16px;font-weight:700;margin-bottom:16px}.bulk-delete-confirm-warning{display:flex;align-items:center;gap:12px;padding:12px;background:#e914291a;border-radius:4px;margin-bottom:20px}.bulk-delete-confirm-warning svg{width:24px;height:24px;color:#e91429;flex-shrink:0}.bulk-delete-confirm-warning p{color:#fff;font-size:14px;margin:0;line-height:1.4}.bulk-delete-confirm-buttons{display:flex;justify-content:flex-end;gap:12px;margin-top:24px}.bulk-delete-confirm-track-list{max-height:300px;overflow-y:auto;border-radius:4px;background:#282828}.bulk-delete-confirm-track-item{display:flex;align-items:center;gap:12px;padding:8px;border-bottom:1px solid #333}.bulk-delete-confirm-track-item:last-child{border-bottom:none}.bulk-delete-confirm-track-image{width:40px;height:40px;border-radius:4px;object-fit:cover;background:#333}.bulk-delete-confirm-track-info{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.bulk-delete-confirm-track-title{color:#fff;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.bulk-delete-confirm-track-artist-album{color:#a0a0a0;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`);var Z=Y;async function re(){let l=Spicetify.Platform?.LibraryAPI;if(!l)return[];let a=1e4,n=[],o=0;for(;;){let i=(await l.getContents({offset:o,limit:a,flattenTree:!0}))?.items||[];if(n.push(...i),i.length<a)break;o+=a}return n}async function oe(){try{let l=await re(),a=[];for(let n of l){let o=n;o.type==="playlist"&&(o.canDelete||o.canAddTo)&&a.push({name:o.name||"Unknown",uri:o.uri||"",canDelete:o.canDelete||!1,canAddTo:o.canAddTo||!1})}return a}catch{return[]}}function G(l){if(l==null||isNaN(l)||l<=0)return"0:00";let a=Math.floor(l/1e3);return`${Math.floor(a/60)}:${(a%60).toString().padStart(2,"0")}`}function ce(l,a){let n=document.createElement("div");n.className="bulk-delete-playback-controls",n.dataset.uri=l;let o=document.createElement("button");o.className="bulk-delete-playback-button",o.innerHTML='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>',o.addEventListener("click",f=>{f.stopPropagation();try{let s=Spicetify.Player;if(!s)return;s?.data?.item?.uri===l?s?.isPlaying()?s.pause():s.play():s.playUri(l)}catch{Spicetify.Player?.playUri(l)}});let t=document.createElement("div");t.className="bulk-delete-slider-container";let i=document.createElement("span");i.className="bulk-delete-slider-time",i.textContent="0:00";let u=document.createElement("input");u.type="range",u.className="bulk-delete-slider",u.min="0",u.max=a>0?a.toString():"1000",u.value="0",u.step="1000";let m=document.createElement("span");return m.className="bulk-delete-slider-time",m.textContent=G(a),u.addEventListener("input",()=>{i.textContent=G(parseInt(u.value))}),u.addEventListener("change",()=>{try{Spicetify.Player?.seek(parseInt(u.value))}catch(f){console.error("Failed to seek:",f)}}),t.appendChild(i),t.appendChild(u),t.appendChild(m),n.appendChild(o),n.appendChild(t),n}function se(l){let a=document.createElement("div");a.className="bulk-delete-track-image-container";let n=document.createElement("img");return n.className="bulk-delete-track-image",n.src=l||"",n.loading="lazy",n.onerror=()=>{n.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23282828' d='M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'/%3E%3C/svg%3E"},a.appendChild(n),a}function de(){let l=document.createElement("div");return l.className="bulk-delete-playing-indicator",l}async function _(l){let a=[];try{let n=Spicetify.Platform?.PlaylistAPI;if(!n)throw new Error("PlaylistAPI not available");let o=500,t=500,i=0;for(;a.length<t;){let u=t-a.length,m=Math.min(o,u),f=await n.getContents(l,{offset:i,limit:m});if(!f?.items)break;for(let s of f.items)if(s?.uri){let v="Unknown Track",L="Unknown Artist",w="Unknown Album",E="",S=0,P=s.uid||"";s.name&&(v=s.name),s.artists?.[0]?.name&&(L=s.artists[0].name),s.album?.name&&(w=s.album.name),s.album?.images?.[0]?.url?E=s.album.images[0].url:s.album?.coverArt?.sources?.[0]?.url&&(E=s.album.coverArt.sources[0].url);let h=s,g=0;if(h.duration&&typeof h.duration=="object"){let y=h.duration;y.totalMs?g=y.totalMs:y.milliseconds&&(g=y.milliseconds)}else typeof h.duration=="number"?g=h.duration:typeof h.durationMs=="number"&&(g=h.durationMs);S=g,a.push({uri:s.uri,name:v,artist:L,album:w,imageUrl:E,duration:S,uid:P})}if(f.items.length<m||a.length>=t)break;i+=m}a.length>=t&&Spicetify.showNotification(`Showing first ${t} tracks. Playlist is larger.`,!1,5e3)}catch(n){throw console.error("Error fetching playlist tracks:",n),n}return a}async function ue(l,a){let n=Spicetify.Platform?.PlaylistAPI;if(!n)return!1;try{let o=a.map(t=>({uri:t.uri,uid:t.uid}));return await n.remove(l,o),!0}catch{try{return await n.remove(l,a.map(t=>t.uri)),!0}catch(t){return console.error("Delete failed:",t),!1}}}function pe(l,a,n,o){let t=document.createElement("div");t.className="bulk-delete-confirm-overlay";let i=document.createElement("div");i.className="bulk-delete-confirm-content";let u=document.createElement("div");u.className="bulk-delete-confirm-header",u.textContent="Delete Tracks";let m=document.createElement("div");m.className="bulk-delete-confirm-warning";let f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("viewBox","0 0 24 24");let s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("fill","currentColor"),s.setAttribute("d","M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"),f.appendChild(s);let v=document.createElement("p");v.appendChild(document.createTextNode("This will permanently remove "));let L=document.createElement("strong");L.textContent=l.length.toString(),v.appendChild(L),v.appendChild(document.createTextNode(" track(s) from "));let w=document.createElement("strong");w.textContent=a,v.appendChild(w),v.appendChild(document.createTextNode(". This action cannot be undone.")),m.appendChild(f),m.appendChild(v);let E=document.createElement("div");E.className="bulk-delete-confirm-track-list";for(let g of l){let y=document.createElement("div");y.className="bulk-delete-confirm-track-item";let z=document.createElement("img");z.className="bulk-delete-confirm-track-image",z.src=g.imageUrl||"https://www.scdn.co/i/_global/favicon.png",z.alt="";let x=document.createElement("div");x.className="bulk-delete-confirm-track-info";let A=document.createElement("span");A.className="bulk-delete-confirm-track-title",A.textContent=g.name;let b=document.createElement("span");b.className="bulk-delete-confirm-track-artist-album",b.textContent=`${g.artist} \u2014 ${g.album}`,x.appendChild(A),x.appendChild(b),y.appendChild(z),y.appendChild(x),E.appendChild(y)}let S=document.createElement("div");S.className="bulk-delete-confirm-buttons";let P=document.createElement("button");P.className="bulk-delete-btn cancel",P.textContent="Cancel",P.addEventListener("click",()=>{t.remove(),o()});let h=document.createElement("button");h.className="bulk-delete-btn delete",h.textContent="Delete",h.addEventListener("click",()=>{t.remove(),n()}),S.appendChild(P),S.appendChild(h),i.appendChild(u),i.appendChild(m),i.appendChild(E),i.appendChild(S),t.appendChild(i),document.body.appendChild(t),t.addEventListener("click",g=>{g.target===t&&(t.remove(),o())})}function ee(l,a){let n=[],o=[],t=[],i=new Set,u=a||null,m=document.createElement("div");m.className="bulk-delete-modal";let f=document.createElement("div");f.className="bulk-delete-content";let s=document.createElement("div");s.className="bulk-delete-header";let v=document.createElement("span");v.textContent="Bulk Delete from Playlist";let L=document.createElement("div");L.className="bulk-delete-header-right";let w=document.createElement("a");w.className="bulk-delete-github",w.href="https://github.com/JimMarley420/spicetify-extension",w.target="_blank",w.rel="noopener noreferrer",w.setAttribute("aria-label","Open GitHub repository"),w.innerHTML='<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';let E=document.createElement("button");E.className="bulk-delete-close",E.innerHTML='<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',E.addEventListener("click",()=>m.remove()),L.appendChild(w),L.appendChild(E),s.appendChild(v),s.appendChild(L);let S=document.createElement("div");S.className="bulk-delete-playlist-selector";let P=document.createElement("label");P.className="bulk-delete-playlist-label",P.textContent="Select Playlist";let h=document.createElement("select");h.className="bulk-delete-playlist-select",S.appendChild(P),S.appendChild(h);let g=document.createElement("div");g.className="bulk-delete-search";let y=document.createElement("div");y.className="bulk-delete-search-wrapper";let z=document.createElement("div");z.className="bulk-delete-search-icon",z.innerHTML='<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';let x=document.createElement("input");x.type="text",x.placeholder="Search tracks in playlist...",x.disabled=!0,y.appendChild(z),y.appendChild(x),g.appendChild(y);let A=document.createElement("div");A.className="bulk-delete-track-info",A.innerHTML="<p><span>0</span> track(s) selected from playlist</p>";let b=document.createElement("div");b.className="bulk-delete-list";let I=document.createElement("div");I.className="bulk-delete-empty",I.textContent="Select a playlist first",b.appendChild(I);function O(e){if(b.innerHTML="",e.length===0){let p=x.value?"No tracks found":"Playlist is empty",d=document.createElement("div");d.className="bulk-delete-empty",d.textContent=p,b.appendChild(d);return}let r=Spicetify.Player?.data?.item?.uri||null;for(let p=0;p<e.length;p++){let d=e[p],C=r===d.uri,c=document.createElement("div");c.className="bulk-delete-item"+(i.has(d.uri)?" selected":""),c.setAttribute("data-uri",d.uri),c.style.cursor="pointer",c.addEventListener("click",X=>{X.target.closest(".bulk-delete-checkbox-wrapper")||X.target.closest(".bulk-delete-playback-controls")||(T.checked=!T.checked,T.checked?(i.add(d.uri),c.classList.add("selected")):(i.delete(d.uri),c.classList.remove("selected")),M())});let k=document.createElement("span");k.className="bulk-delete-track-number",C?k.appendChild(de()):k.textContent=(p+1).toString();let B=se(d.imageUrl),N=document.createElement("div");N.className="bulk-delete-item-info";let j=document.createElement("span");j.className="bulk-delete-item-title",j.textContent=d.name;let W=document.createElement("span");W.className="bulk-delete-item-artist",W.textContent=d.artist;let R=document.createElement("span");R.className="bulk-delete-item-album",R.textContent=d.album,N.appendChild(j),N.appendChild(W),N.appendChild(R);let ie=ce(d.uri,d.duration),V=document.createElement("div");V.className="bulk-delete-checkbox-wrapper";let T=document.createElement("input");T.type="checkbox",T.className="bulk-delete-checkbox",T.checked=i.has(d.uri);let Q=document.createElement("div");Q.className="bulk-delete-checkbox-custom",V.appendChild(T),V.appendChild(Q),T.addEventListener("change",()=>{T.checked?(i.add(d.uri),c.classList.add("selected")):(i.delete(d.uri),c.classList.remove("selected")),M()}),c.appendChild(k),c.appendChild(V),c.appendChild(B),c.appendChild(N),c.appendChild(ie),b.appendChild(c)}}function le(){let e=x.value.toLowerCase();t=o.filter(r=>r.name.toLowerCase().includes(e)||r.artist.toLowerCase().includes(e)||r.album.toLowerCase().includes(e)),O(t),M()}function M(){let e=i.size;A.innerHTML=`<p><span>${e}</span> track(s) selected from playlist</p>`,D.disabled=e===0,e===0?U.textContent="Select All":e===t.length?U.textContent="Deselect All":U.textContent="Select All"}async function J(e){I.textContent="Loading tracks...",b.innerHTML="",b.appendChild(I);try{o=await _(e),t=[...o],i.clear(),x.disabled=!1,x.value="",O(t),M()}catch{I.textContent="Failed to load tracks",b.appendChild(I),Spicetify.showNotification("Failed to load tracks",!0)}}async function ne(){try{n=await oe(),n.sort((e,r)=>e.name.localeCompare(r.name));for(let e of n){let r=document.createElement("option");r.value=e.uri,r.textContent=e.name,h.appendChild(r)}if(l.length>0&&n.length>0){let e=null;if(u){let r=n.find(p=>p.uri===u);if(r)try{let p=await _(r.uri),d=new Set(p.map(c=>c.uri));l.some(c=>d.has(c))&&(e=r)}catch{}}if(!e){for(let r of n)if(r.uri!==u)try{let p=await _(r.uri),d=new Set(p.map(c=>c.uri));if(l.some(c=>d.has(c))){e=r;break}}catch{}}if(e){h.value=e.uri,u=e.uri,await J(e.uri),i.clear();let r=new Set(o.map(p=>p.uri));for(let p of l)r.has(p)&&i.add(p);b.querySelectorAll(".bulk-delete-item").forEach(p=>{let d=p.getAttribute("data-uri"),C=p.querySelector(".bulk-delete-checkbox");d&&i.has(d)&&(p.classList.add("selected"),C.checked=!0)}),M()}}}catch{Spicetify.showNotification("Failed to load playlists",!0)}}ne(),h.addEventListener("change",async()=>{let e=h.value;if(e)u=e,await J(e);else{u=null,o=[],t=[],i.clear(),x.disabled=!0,x.value="",b.innerHTML="";let r=document.createElement("div");r.className="bulk-delete-empty",r.textContent="Select a playlist first",b.appendChild(r),M()}}),x.addEventListener("input",le);let H=document.createElement("div");H.className="bulk-delete-buttons";let U=document.createElement("button");U.className="bulk-delete-select-all",U.textContent="Select All",U.addEventListener("click",()=>{i.size===t.length?(i.clear(),b.querySelectorAll(".bulk-delete-item").forEach(e=>{e.classList.remove("selected");let r=e.querySelector(".bulk-delete-checkbox");r&&(r.checked=!1)})):(t.forEach(e=>i.add(e.uri)),b.querySelectorAll(".bulk-delete-item").forEach(e=>{e.classList.add("selected");let r=e.querySelector(".bulk-delete-checkbox");r&&(r.checked=!0)})),M()});let $=document.createElement("div");$.className="bulk-delete-button-group";let F=document.createElement("button");F.className="bulk-delete-btn cancel",F.textContent="Cancel",F.addEventListener("click",()=>{K(),m.remove()});let D=document.createElement("button");D.className="bulk-delete-btn delete",D.textContent="Delete",D.disabled=!0,D.addEventListener("click",async()=>{if(!u)return;let r=n.find(C=>C.uri===u)?.name||"Unknown Playlist",p=i.size,d=o.filter(C=>i.has(C.uri));pe(d,r,async()=>{let C=d.map(k=>({uri:k.uri,uid:k.uid}));await ue(u,C)?(Spicetify.showNotification(`Deleted ${p} track(s) from playlist`),o=o.filter(k=>!i.has(k.uri)),t=t.filter(k=>!i.has(k.uri)),i.clear(),O(t),M()):Spicetify.showNotification("Failed to delete tracks",!0)},()=>{})}),$.appendChild(F),$.appendChild(D),H.appendChild(U),H.appendChild($),f.appendChild(s),f.appendChild(S),f.appendChild(g),f.appendChild(A),f.appendChild(b),f.appendChild(H),m.appendChild(f),document.body.appendChild(m);let K=()=>{q&&(window.clearInterval(q),q=null)};m.addEventListener("click",e=>{e.target===m&&(K(),m.remove())});let q=null,ae=()=>{let e=Spicetify.Player;if(!e?.data?.item)return;let r=e.data.item.uri,p=e.isPlaying(),d=e.getProgress(),C=e.getDuration()||e.data.item.duration?.totalMs||0;b.querySelectorAll(".bulk-delete-playback-controls").forEach(c=>{let k=c.querySelector(".bulk-delete-playback-button"),B=c.querySelector(".bulk-delete-slider"),N=c.querySelector(".bulk-delete-slider-time");c.dataset.uri===r&&(p?k.innerHTML='<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor"/></svg>':k.innerHTML='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>',B&&(B.value=d.toString(),B.max=C.toString()),N&&(N.textContent=G(d)))}),b.querySelectorAll(".bulk-delete-item").forEach(c=>{let k=c.querySelector(".bulk-delete-track-number");if(!k)return;let B=c.querySelectorAll(".bulk-delete-playback-controls"),N="";if(B.forEach(j=>{N=j.dataset.uri||""}),N===r)k.innerHTML='<div class="bulk-delete-playing-indicator"></div>';else{let j=Array.from(b.querySelectorAll(".bulk-delete-item")).indexOf(c)+1;k.textContent=j.toString()}})};q||(q=window.setInterval(ae,1e3)),h.focus()}document.adoptedStyleSheets.push(Z);function te(l){let a=Spicetify.URI.from(l);return!!(a&&a.type==="track")}function me(l){let a=Spicetify.URI.from(l);return!!(a&&a.type==="playlist")}async function be(l,a,n){let o=l.filter(te);if(o.length===0){Spicetify.showNotification("No tracks selected",!0);return}let t;n&&me(n)&&(t=n),ee(o,t)}function fe(l){return l.some(te)}var he=new Spicetify.ContextMenu.Item("Delete from Playlist",be,fe,"block");he.register();

// extensions/bulkDeletePlaylist/src/styles.css
var sheet = new CSSStyleSheet();
sheet.replaceSync(`.bulk-delete-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.bulk-delete-content {
  background: #181818;
  border-radius: 8px;
  width: 600px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: var(--font-family, spotify), sans-serif;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.bulk-delete-header {
  padding: 16px 20px;
  border-bottom: 1px solid #282828;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bulk-delete-header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bulk-delete-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.15s;
}

.bulk-delete-close:hover {
  background: #282828;
}

.bulk-delete-close svg {
  width: 18px;
  height: 18px;
  fill: #b3b3b3;
  transition: fill 0.15s;
}

.bulk-delete-close:hover svg {
  fill: #fff;
}

.bulk-delete-github {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background 0.15s;
}

.bulk-delete-github:hover {
  background: #282828;
}

.bulk-delete-github svg {
  width: 18px;
  height: 18px;
  fill: #b3b3b3;
  transition: fill 0.15s;
}

.bulk-delete-github:hover svg {
  fill: #fff;
}

.bulk-delete-playlist-selector {
  padding: 16px 20px;
  border-bottom: 1px solid #282828;
}

.bulk-delete-playlist-label {
  display: block;
  color: #b3b3b3;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.bulk-delete-playlist-select {
  width: 100%;
  padding: 10px 12px;
  background: #3f3f3f;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='%23b3b3b3'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}

.bulk-delete-playlist-select:hover {
  background-color: #4a4a4a;
}

.bulk-delete-playlist-select:focus {
  outline: none;
  background-color: #4a4a4a;
}

.bulk-delete-search {
  padding: 16px 20px;
  border-bottom: 1px solid #282828;
}

.bulk-delete-search-wrapper {
  display: flex;
  align-items: center;
  background: #282828;
  border-radius: 4px;
  padding: 0 12px;
}

.bulk-delete-search-icon {
  color: #b3b3b3;
  display: flex;
  align-items: center;
}

.bulk-delete-search-icon svg {
  width: 20px;
  height: 20px;
}

.bulk-delete-search input {
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  padding: 12px;
  outline: none;
}

.bulk-delete-search input::placeholder {
  color: #b3b3b3;
}

.bulk-delete-search input:disabled {
  opacity: 0.5;
}

.bulk-delete-track-info {
  padding: 12px 20px;
  background: #121212;
  border-bottom: 1px solid #282828;
}

.bulk-delete-track-info p {
  color: #b3b3b3;
  font-size: 13px;
  margin: 0;
}

.bulk-delete-track-info span {
  color: #fff;
  font-weight: 600;
}

.bulk-delete-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
  min-height: 400px;
}

.bulk-delete-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 400px;
  color: #b3b3b3;
  font-size: 14px;
}

.bulk-delete-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.15s;
  gap: 8px;
}

.bulk-delete-item:hover {
  background: #282828;
}

.bulk-delete-item.selected {
  background: rgba(29, 185, 84, 0.1);
}

.bulk-delete-track-number {
  width: 32px;
  text-align: center;
  color: #b3b3b3;
  font-size: 14px;
  flex-shrink: 0;
}

.bulk-delete-playing-indicator {
  width: 12px;
  height: 12px;
  display: inline-block;
}

.bulk-delete-playing-indicator::before {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  background: #1db954;
  border-radius: 50%;
  animation: bulk-delete-pulse 1s ease-in-out infinite;
}

@keyframes bulk-delete-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.bulk-delete-track-image-container {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  background: #282828;
}

.bulk-delete-track-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bulk-delete-item-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.bulk-delete-item-title {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bulk-delete-item-artist {
  color: #b3b3b3;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bulk-delete-item-album {
  color: #727272;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 2px;
}

.bulk-delete-playback-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 280px;
  flex-shrink: 0;
}

.bulk-delete-playback-button {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}

.bulk-delete-playback-button:hover {
  background: #282828;
}

.bulk-delete-playback-button svg {
  width: 16px;
  height: 16px;
}

.bulk-delete-slider-container {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
}

.bulk-delete-slider-time {
  color: #b3b3b3;
  font-size: 11px;
  min-width: 35px;
}

.bulk-delete-slider {
  flex: 1;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: #4a4a4a;
  border-radius: 2px;
  cursor: pointer;
}

.bulk-delete-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.bulk-delete-slider:hover::-webkit-slider-thumb {
  transform: scale(1.2);
}

.bulk-delete-checkbox-wrapper {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.bulk-delete-checkbox {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.bulk-delete-checkbox-custom {
  width: 16px;
  height: 16px;
  border: 2px solid #b3b3b3;
  border-radius: 3px;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bulk-delete-checkbox:checked + .bulk-delete-checkbox-custom {
  background: #1db954;
  border-color: #1db954;
}

.bulk-delete-checkbox:checked + .bulk-delete-checkbox-custom::after {
  content: "";
  width: 6px;
  height: 10px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-bottom: 2px;
}

.bulk-delete-item-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.bulk-delete-item-title {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bulk-delete-item-artist {
  color: #b3b3b3;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bulk-delete-item-album {
  color: #727272;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 2px;
}

.bulk-delete-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-top: 1px solid #282828;
}

.bulk-delete-select-all {
  background: transparent;
  border: none;
  color: #1db954;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 16px;
  transition: color 0.2s;
}

.bulk-delete-select-all:hover {
  color: #1ed760;
}

.bulk-delete-button-group {
  display: flex;
  gap: 12px;
}

.bulk-delete-btn {
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.bulk-delete-btn.cancel {
  background: transparent;
  border: 1px solid #727272;
  color: #fff;
}

.bulk-delete-btn.cancel:hover {
  border-color: #fff;
}

.bulk-delete-btn.delete {
  background: #e91429;
  color: #fff;
}

.bulk-delete-btn.delete:hover:not(:disabled) {
  background: #f03727;
}

.bulk-delete-btn.delete:disabled {
  background: #535353;
  color: #181818;
  cursor: not-allowed;
}

.bulk-delete-confirm-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.bulk-delete-confirm-content {
  background: #181818;
  border-radius: 8px;
  width: 480px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.bulk-delete-confirm-header {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
}

.bulk-delete-confirm-warning {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(233, 20, 41, 0.1);
  border-radius: 4px;
  margin-bottom: 20px;
}

.bulk-delete-confirm-warning svg {
  width: 24px;
  height: 24px;
  color: #e91429;
  flex-shrink: 0;
}

.bulk-delete-confirm-warning p {
  color: #fff;
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
}

.bulk-delete-confirm-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}

.bulk-delete-confirm-track-list {
  max-height: 300px;
  overflow-y: auto;
  border-radius: 4px;
  background: #282828;
}

.bulk-delete-confirm-track-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-bottom: 1px solid #333;
}

.bulk-delete-confirm-track-item:last-child {
  border-bottom: none;
}

.bulk-delete-confirm-track-image {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
  background: #333;
}

.bulk-delete-confirm-track-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.bulk-delete-confirm-track-title {
  color: #fff;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bulk-delete-confirm-track-artist-album {
  color: #a0a0a0;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`);
var styles_default = sheet;

// extensions/bulkDeletePlaylist/src/modal.tsx
async function fetchAllLibraryContents() {
  const LibraryAPI = Spicetify.Platform?.LibraryAPI;
  if (!LibraryAPI) return [];
  const pageSize = 1e4;
  const items = [];
  let offset = 0;
  while (true) {
    const response = await LibraryAPI.getContents({
      offset,
      limit: pageSize,
      flattenTree: true
    });
    const pageItems = response?.items || [];
    items.push(...pageItems);
    if (pageItems.length < pageSize) {
      break;
    }
    offset += pageSize;
  }
  return items;
}
async function fetchPlaylistsWithDeletePermission() {
  try {
    const items = await fetchAllLibraryContents();
    const playlists = [];
    for (const item of items) {
      const playlist = item;
      if (playlist.type === "playlist" && (playlist.canDelete || playlist.canAddTo)) {
        playlists.push({
          name: playlist.name || "Unknown",
          uri: playlist.uri || "",
          canDelete: playlist.canDelete || false,
          canAddTo: playlist.canAddTo || false
        });
      }
    }
    return playlists;
  } catch (e) {
    return [];
  }
}
function formatTime(ms) {
  if (ms == null || isNaN(ms) || ms <= 0) return "0:00";
  const s = Math.floor(ms / 1e3);
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}
function createPlaybackControl(uri, duration) {
  const container = document.createElement("div");
  container.className = "bulk-delete-playback-controls";
  container.dataset.uri = uri;
  const playBtn = document.createElement("button");
  playBtn.className = "bulk-delete-playback-button";
  playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
  playBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    try {
      const player = Spicetify.Player;
      if (!player) return;
      const currentUri = player?.data?.item?.uri;
      if (currentUri === uri) {
        if (player?.isPlaying()) {
          player.pause();
        } else {
          player.play();
        }
      } else {
        player.playUri(uri);
      }
    } catch (err) {
      Spicetify.Player?.playUri(uri);
    }
  });
  const sliderContainer = document.createElement("div");
  sliderContainer.className = "bulk-delete-slider-container";
  const currentTime = document.createElement("span");
  currentTime.className = "bulk-delete-slider-time";
  currentTime.textContent = "0:00";
  const slider = document.createElement("input");
  slider.type = "range";
  slider.className = "bulk-delete-slider";
  slider.min = "0";
  slider.max = duration > 0 ? duration.toString() : "1000";
  slider.value = "0";
  slider.step = "1000";
  const totalTime = document.createElement("span");
  totalTime.className = "bulk-delete-slider-time";
  totalTime.textContent = formatTime(duration);
  slider.addEventListener("input", () => {
    currentTime.textContent = formatTime(parseInt(slider.value));
  });
  slider.addEventListener("change", () => {
    try {
      Spicetify.Player?.seek(parseInt(slider.value));
    } catch (e) {
      console.error("Failed to seek:", e);
    }
  });
  sliderContainer.appendChild(currentTime);
  sliderContainer.appendChild(slider);
  sliderContainer.appendChild(totalTime);
  container.appendChild(playBtn);
  container.appendChild(sliderContainer);
  return container;
}
function createTrackImage(url) {
  const imgContainer = document.createElement("div");
  imgContainer.className = "bulk-delete-track-image-container";
  const img = document.createElement("img");
  img.className = "bulk-delete-track-image";
  img.src = url || "";
  img.loading = "lazy";
  img.onerror = () => {
    img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23282828' d='M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'/%3E%3C/svg%3E";
  };
  imgContainer.appendChild(img);
  return imgContainer;
}
function createPlayingIndicator() {
  const indicator = document.createElement("div");
  indicator.className = "bulk-delete-playing-indicator";
  return indicator;
}
async function getPlaylistTracks(playlistUri) {
  const tracks = [];
  try {
    const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
    if (!PlaylistAPI) {
      throw new Error("PlaylistAPI not available");
    }
    const pageSize = 500;
    const maxTracks = 500;
    let offset = 0;
    while (tracks.length < maxTracks) {
      const remainingSlots = maxTracks - tracks.length;
      const currentLimit = Math.min(pageSize, remainingSlots);
      const response = await PlaylistAPI.getContents(playlistUri, {
        offset,
        limit: currentLimit
      });
      if (!response?.items) {
        break;
      }
      for (const item of response.items) {
        if (item?.uri) {
          let name = "Unknown Track";
          let artist = "Unknown Artist";
          let album = "Unknown Album";
          let imageUrl = "";
          let duration = 0;
          let uid = item.uid || "";
          if (item.name) name = item.name;
          if (item.artists?.[0]?.name) artist = item.artists[0].name;
          if (item.album?.name) album = item.album.name;
          if (item.album?.images?.[0]?.url) imageUrl = item.album.images[0].url;
          else if (item.album?.coverArt?.sources?.[0]?.url) imageUrl = item.album.coverArt.sources[0].url;
          const itemAny = item;
          let durationVal = 0;
          if (itemAny.duration && typeof itemAny.duration === "object") {
            const dur = itemAny.duration;
            if (dur.totalMs) durationVal = dur.totalMs;
            else if (dur.milliseconds) durationVal = dur.milliseconds;
          } else if (typeof itemAny.duration === "number") {
            durationVal = itemAny.duration;
          } else if (typeof itemAny.durationMs === "number") {
            durationVal = itemAny.durationMs;
          }
          duration = durationVal;
          tracks.push({
            uri: item.uri,
            name,
            artist,
            album,
            imageUrl,
            duration,
            uid
          });
        }
      }
      if (response.items.length < currentLimit || tracks.length >= maxTracks) {
        break;
      }
      offset += currentLimit;
    }
    if (tracks.length >= maxTracks) {
      Spicetify.showNotification(`Showing first ${maxTracks} tracks. Playlist is larger.`, false, 5e3);
    }
  } catch (e) {
    console.error("Error fetching playlist tracks:", e);
    throw e;
  }
  return tracks;
}
async function deleteTracksFromPlaylist(playlistUri, tracks) {
  const PlaylistAPI = Spicetify.Platform?.PlaylistAPI;
  if (!PlaylistAPI) {
    return false;
  }
  try {
    const trackList = tracks.map((t) => ({
      uri: t.uri,
      uid: t.uid
    }));
    await PlaylistAPI.remove(playlistUri, trackList);
    return true;
  } catch (e) {
    try {
      await PlaylistAPI.remove(playlistUri, tracks.map((t) => t.uri));
      return true;
    } catch (e2) {
      console.error("Delete failed:", e2);
      return false;
    }
  }
}
function createDeleteConfirmModal(tracks, playlistName, onConfirm, onCancel) {
  const overlay = document.createElement("div");
  overlay.className = "bulk-delete-confirm-overlay";
  const content = document.createElement("div");
  content.className = "bulk-delete-confirm-content";
  const header = document.createElement("div");
  header.className = "bulk-delete-confirm-header";
  header.textContent = "Delete Tracks";
  const warning = document.createElement("div");
  warning.className = "bulk-delete-confirm-warning";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill", "currentColor");
  path.setAttribute("d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z");
  svg.appendChild(path);
  const p = document.createElement("p");
  p.appendChild(document.createTextNode("This will permanently remove "));
  const strong1 = document.createElement("strong");
  strong1.textContent = tracks.length.toString();
  p.appendChild(strong1);
  p.appendChild(document.createTextNode(" track(s) from "));
  const strong2 = document.createElement("strong");
  strong2.textContent = playlistName;
  p.appendChild(strong2);
  p.appendChild(document.createTextNode(". This action cannot be undone."));
  warning.appendChild(svg);
  warning.appendChild(p);
  const trackList = document.createElement("div");
  trackList.className = "bulk-delete-confirm-track-list";
  for (const track of tracks) {
    const trackItem = document.createElement("div");
    trackItem.className = "bulk-delete-confirm-track-item";
    const img = document.createElement("img");
    img.className = "bulk-delete-confirm-track-image";
    img.src = track.imageUrl || "https://www.scdn.co/i/_global/favicon.png";
    img.alt = "";
    const info = document.createElement("div");
    info.className = "bulk-delete-confirm-track-info";
    const title = document.createElement("span");
    title.className = "bulk-delete-confirm-track-title";
    title.textContent = track.name;
    const artistAlbum = document.createElement("span");
    artistAlbum.className = "bulk-delete-confirm-track-artist-album";
    artistAlbum.textContent = `${track.artist} \u2014 ${track.album}`;
    info.appendChild(title);
    info.appendChild(artistAlbum);
    trackItem.appendChild(img);
    trackItem.appendChild(info);
    trackList.appendChild(trackItem);
  }
  const buttons = document.createElement("div");
  buttons.className = "bulk-delete-confirm-buttons";
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "bulk-delete-btn cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    overlay.remove();
    onCancel();
  });
  const confirmBtn = document.createElement("button");
  confirmBtn.className = "bulk-delete-btn delete";
  confirmBtn.textContent = "Delete";
  confirmBtn.addEventListener("click", () => {
    overlay.remove();
    onConfirm();
  });
  buttons.appendChild(cancelBtn);
  buttons.appendChild(confirmBtn);
  content.appendChild(header);
  content.appendChild(warning);
  content.appendChild(trackList);
  content.appendChild(buttons);
  overlay.appendChild(content);
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.remove();
      onCancel();
    }
  });
}
function createModal(trackUris, preferredPlaylistUri) {
  let allPlaylists = [];
  let currentTracks = [];
  let filteredTracks = [];
  const selectedSet = /* @__PURE__ */ new Set();
  let currentPlaylistUri = preferredPlaylistUri || null;
  const modal = document.createElement("div");
  modal.className = "bulk-delete-modal";
  const content = document.createElement("div");
  content.className = "bulk-delete-content";
  const header = document.createElement("div");
  header.className = "bulk-delete-header";
  const headerTitle = document.createElement("span");
  headerTitle.textContent = "Bulk Delete from Playlist";
  const headerRight = document.createElement("div");
  headerRight.className = "bulk-delete-header-right";
  const githubLink = document.createElement("a");
  githubLink.className = "bulk-delete-github";
  githubLink.href = "https://github.com/JimMarley420/spicetify-extension";
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  githubLink.setAttribute("aria-label", "Open GitHub repository");
  githubLink.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
  const closeBtn = document.createElement("button");
  closeBtn.className = "bulk-delete-close";
  closeBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
  closeBtn.addEventListener("click", () => modal.remove());
  headerRight.appendChild(githubLink);
  headerRight.appendChild(closeBtn);
  header.appendChild(headerTitle);
  header.appendChild(headerRight);
  const playlistSelector = document.createElement("div");
  playlistSelector.className = "bulk-delete-playlist-selector";
  const playlistLabel = document.createElement("label");
  playlistLabel.className = "bulk-delete-playlist-label";
  playlistLabel.textContent = "Select Playlist";
  const playlistSelect = document.createElement("select");
  playlistSelect.className = "bulk-delete-playlist-select";
  playlistSelector.appendChild(playlistLabel);
  playlistSelector.appendChild(playlistSelect);
  const searchContainer = document.createElement("div");
  searchContainer.className = "bulk-delete-search";
  const searchWrapper = document.createElement("div");
  searchWrapper.className = "bulk-delete-search-wrapper";
  const searchIcon = document.createElement("div");
  searchIcon.className = "bulk-delete-search-icon";
  searchIcon.innerHTML = `<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search tracks in playlist...";
  searchInput.disabled = true;
  searchWrapper.appendChild(searchIcon);
  searchWrapper.appendChild(searchInput);
  searchContainer.appendChild(searchWrapper);
  const trackInfo = document.createElement("div");
  trackInfo.className = "bulk-delete-track-info";
  trackInfo.innerHTML = `<p><span>0</span> track(s) selected from playlist</p>`;
  const trackList = document.createElement("div");
  trackList.className = "bulk-delete-list";
  const emptyState = document.createElement("div");
  emptyState.className = "bulk-delete-empty";
  emptyState.textContent = "Select a playlist first";
  trackList.appendChild(emptyState);
  function renderTracks(tracks) {
    trackList.innerHTML = "";
    if (tracks.length === 0) {
      const emptyMsg = searchInput.value ? "No tracks found" : "Playlist is empty";
      const empty = document.createElement("div");
      empty.className = "bulk-delete-empty";
      empty.textContent = emptyMsg;
      trackList.appendChild(empty);
      return;
    }
    const currentPlayingUri = Spicetify.Player?.data?.item?.uri || null;
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      const isPlaying = currentPlayingUri === track.uri;
      const item = document.createElement("div");
      item.className = "bulk-delete-item" + (selectedSet.has(track.uri) ? " selected" : "");
      item.setAttribute("data-uri", track.uri);
      item.style.cursor = "pointer";
      item.addEventListener("click", (e) => {
        if (e.target.closest(".bulk-delete-checkbox-wrapper") || e.target.closest(".bulk-delete-playback-controls")) {
          return;
        }
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) {
          selectedSet.add(track.uri);
          item.classList.add("selected");
        } else {
          selectedSet.delete(track.uri);
          item.classList.remove("selected");
        }
        updateButtonState();
      });
      const trackNumber = document.createElement("span");
      trackNumber.className = "bulk-delete-track-number";
      if (isPlaying) {
        trackNumber.appendChild(createPlayingIndicator());
      } else {
        trackNumber.textContent = (i + 1).toString();
      }
      const image = createTrackImage(track.imageUrl);
      const info = document.createElement("div");
      info.className = "bulk-delete-item-info";
      const title = document.createElement("span");
      title.className = "bulk-delete-item-title";
      title.textContent = track.name;
      const artist = document.createElement("span");
      artist.className = "bulk-delete-item-artist";
      artist.textContent = track.artist;
      const album = document.createElement("span");
      album.className = "bulk-delete-item-album";
      album.textContent = track.album;
      info.appendChild(title);
      info.appendChild(artist);
      info.appendChild(album);
      const playback = createPlaybackControl(track.uri, track.duration);
      const checkboxWrapper = document.createElement("div");
      checkboxWrapper.className = "bulk-delete-checkbox-wrapper";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "bulk-delete-checkbox";
      checkbox.checked = selectedSet.has(track.uri);
      const customCheckbox = document.createElement("div");
      customCheckbox.className = "bulk-delete-checkbox-custom";
      checkboxWrapper.appendChild(checkbox);
      checkboxWrapper.appendChild(customCheckbox);
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectedSet.add(track.uri);
          item.classList.add("selected");
        } else {
          selectedSet.delete(track.uri);
          item.classList.remove("selected");
        }
        updateButtonState();
      });
      item.appendChild(trackNumber);
      item.appendChild(checkboxWrapper);
      item.appendChild(image);
      item.appendChild(info);
      item.appendChild(playback);
      trackList.appendChild(item);
    }
  }
  function filterTracks() {
    const query = searchInput.value.toLowerCase();
    filteredTracks = currentTracks.filter(
      (t) => t.name.toLowerCase().includes(query) || t.artist.toLowerCase().includes(query) || t.album.toLowerCase().includes(query)
    );
    renderTracks(filteredTracks);
    updateButtonState();
  }
  function updateButtonState() {
    const selectedCount = selectedSet.size;
    trackInfo.innerHTML = `<p><span>${selectedCount}</span> track(s) selected from playlist</p>`;
    deleteBtn.disabled = selectedCount === 0;
    if (selectedCount === 0) {
      selectAllBtn.textContent = "Select All";
    } else if (selectedCount === filteredTracks.length) {
      selectAllBtn.textContent = "Deselect All";
    } else {
      selectAllBtn.textContent = "Select All";
    }
  }
  async function loadPlaylistTracks(playlistUri) {
    emptyState.textContent = "Loading tracks...";
    trackList.innerHTML = "";
    trackList.appendChild(emptyState);
    try {
      currentTracks = await getPlaylistTracks(playlistUri);
      filteredTracks = [...currentTracks];
      selectedSet.clear();
      searchInput.disabled = false;
      searchInput.value = "";
      renderTracks(filteredTracks);
      updateButtonState();
    } catch (e) {
      emptyState.textContent = "Failed to load tracks";
      trackList.appendChild(emptyState);
      Spicetify.showNotification("Failed to load tracks", true);
    }
  }
  async function loadPlaylists() {
    try {
      allPlaylists = await fetchPlaylistsWithDeletePermission();
      allPlaylists.sort((a, b) => a.name.localeCompare(b.name));
      for (const playlist of allPlaylists) {
        const option = document.createElement("option");
        option.value = playlist.uri;
        option.textContent = playlist.name;
        playlistSelect.appendChild(option);
      }
      if (trackUris.length > 0 && allPlaylists.length > 0) {
        let foundPlaylist = null;
        if (currentPlaylistUri) {
          const preferred = allPlaylists.find((p) => p.uri === currentPlaylistUri);
          if (preferred) {
            try {
              const tracks = await getPlaylistTracks(preferred.uri);
              const trackUrisSet = new Set(tracks.map((t) => t.uri));
              const hasSelectedTrack = trackUris.some((uri) => trackUrisSet.has(uri));
              if (hasSelectedTrack) {
                foundPlaylist = preferred;
              }
            } catch (e) {
            }
          }
        }
        if (!foundPlaylist) {
          for (const playlist of allPlaylists) {
            if (playlist.uri === currentPlaylistUri) continue;
            try {
              const tracks = await getPlaylistTracks(playlist.uri);
              const trackUrisSet = new Set(tracks.map((t) => t.uri));
              const hasSelectedTrack = trackUris.some((uri) => trackUrisSet.has(uri));
              if (hasSelectedTrack) {
                foundPlaylist = playlist;
                break;
              }
            } catch (e) {
            }
          }
        }
        if (foundPlaylist) {
          playlistSelect.value = foundPlaylist.uri;
          currentPlaylistUri = foundPlaylist.uri;
          await loadPlaylistTracks(foundPlaylist.uri);
          selectedSet.clear();
          const currentUris = new Set(currentTracks.map((t) => t.uri));
          for (const uri of trackUris) {
            if (currentUris.has(uri)) {
              selectedSet.add(uri);
            }
          }
          trackList.querySelectorAll(".bulk-delete-item").forEach((item) => {
            const uri = item.getAttribute("data-uri");
            const checkbox = item.querySelector(".bulk-delete-checkbox");
            if (uri && selectedSet.has(uri)) {
              item.classList.add("selected");
              checkbox.checked = true;
            }
          });
          updateButtonState();
        }
      }
    } catch (e) {
      Spicetify.showNotification("Failed to load playlists", true);
    }
  }
  loadPlaylists();
  playlistSelect.addEventListener("change", async () => {
    const selectedUri = playlistSelect.value;
    if (selectedUri) {
      currentPlaylistUri = selectedUri;
      await loadPlaylistTracks(selectedUri);
    } else {
      currentPlaylistUri = null;
      currentTracks = [];
      filteredTracks = [];
      selectedSet.clear();
      searchInput.disabled = true;
      searchInput.value = "";
      trackList.innerHTML = "";
      const empty = document.createElement("div");
      empty.className = "bulk-delete-empty";
      empty.textContent = "Select a playlist first";
      trackList.appendChild(empty);
      updateButtonState();
    }
  });
  searchInput.addEventListener("input", filterTracks);
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "bulk-delete-buttons";
  const selectAllBtn = document.createElement("button");
  selectAllBtn.className = "bulk-delete-select-all";
  selectAllBtn.textContent = "Select All";
  selectAllBtn.addEventListener("click", () => {
    if (selectedSet.size === filteredTracks.length) {
      selectedSet.clear();
      trackList.querySelectorAll(".bulk-delete-item").forEach((item) => {
        item.classList.remove("selected");
        const checkbox = item.querySelector(".bulk-delete-checkbox");
        if (checkbox) checkbox.checked = false;
      });
    } else {
      filteredTracks.forEach((t) => selectedSet.add(t.uri));
      trackList.querySelectorAll(".bulk-delete-item").forEach((item) => {
        item.classList.add("selected");
        const checkbox = item.querySelector(".bulk-delete-checkbox");
        if (checkbox) checkbox.checked = true;
      });
    }
    updateButtonState();
  });
  const buttonGroup = document.createElement("div");
  buttonGroup.className = "bulk-delete-button-group";
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "bulk-delete-btn cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    cleanupInterval();
    modal.remove();
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "bulk-delete-btn delete";
  deleteBtn.textContent = "Delete";
  deleteBtn.disabled = true;
  deleteBtn.addEventListener("click", async () => {
    if (!currentPlaylistUri) return;
    const playlist = allPlaylists.find((p) => p.uri === currentPlaylistUri);
    const playlistName = playlist?.name || "Unknown Playlist";
    const trackCount = selectedSet.size;
    const tracksToDelete = currentTracks.filter((t) => selectedSet.has(t.uri));
    createDeleteConfirmModal(
      tracksToDelete,
      playlistName,
      async () => {
        const tracksWithUid = tracksToDelete.map((t) => ({ uri: t.uri, uid: t.uid }));
        const success = await deleteTracksFromPlaylist(currentPlaylistUri, tracksWithUid);
        if (success) {
          Spicetify.showNotification(`Deleted ${trackCount} track(s) from playlist`);
          currentTracks = currentTracks.filter((t) => !selectedSet.has(t.uri));
          filteredTracks = filteredTracks.filter((t) => !selectedSet.has(t.uri));
          selectedSet.clear();
          renderTracks(filteredTracks);
          updateButtonState();
        } else {
          Spicetify.showNotification("Failed to delete tracks", true);
        }
      },
      () => {
      }
    );
  });
  buttonGroup.appendChild(cancelBtn);
  buttonGroup.appendChild(deleteBtn);
  buttonContainer.appendChild(selectAllBtn);
  buttonContainer.appendChild(buttonGroup);
  content.appendChild(header);
  content.appendChild(playlistSelector);
  content.appendChild(searchContainer);
  content.appendChild(trackInfo);
  content.appendChild(trackList);
  content.appendChild(buttonContainer);
  modal.appendChild(content);
  document.body.appendChild(modal);
  const cleanupInterval = () => {
    if (updateInterval) {
      window.clearInterval(updateInterval);
      updateInterval = null;
    }
  };
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      cleanupInterval();
      modal.remove();
    }
  });
  let updateInterval = null;
  const updatePlaybackState = () => {
    const player = Spicetify.Player;
    if (!player?.data?.item) {
      return;
    }
    const currentUri = player.data.item.uri;
    const isPlaying = player.isPlaying();
    const position = player.getProgress();
    const duration = player.getDuration() || player.data.item.duration?.totalMs || 0;
    trackList.querySelectorAll(".bulk-delete-playback-controls").forEach((ctrl) => {
      const playBtn = ctrl.querySelector(".bulk-delete-playback-button");
      const slider = ctrl.querySelector(".bulk-delete-slider");
      const currentTime = ctrl.querySelector(".bulk-delete-slider-time");
      if (ctrl.dataset.uri === currentUri) {
        if (isPlaying) {
          playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor"/></svg>`;
        } else {
          playBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
        }
        if (slider) {
          slider.value = position.toString();
          slider.max = duration.toString();
        }
        if (currentTime) currentTime.textContent = formatTime(position);
      }
    });
    trackList.querySelectorAll(".bulk-delete-item").forEach((item) => {
      const trackNumber = item.querySelector(".bulk-delete-track-number");
      if (!trackNumber) return;
      const playbacks = item.querySelectorAll(".bulk-delete-playback-controls");
      let itemUri = "";
      playbacks.forEach((pb) => {
        itemUri = pb.dataset.uri || "";
      });
      if (itemUri === currentUri) {
        trackNumber.innerHTML = `<div class="bulk-delete-playing-indicator"></div>`;
      } else {
        const idx = Array.from(trackList.querySelectorAll(".bulk-delete-item")).indexOf(item) + 1;
        trackNumber.textContent = idx.toString();
      }
    });
  };
  const startPlaybackUpdates = () => {
    if (updateInterval) return;
    updateInterval = window.setInterval(updatePlaybackState, 1e3);
  };
  startPlaybackUpdates();
  playlistSelect.focus();
}

// extensions/bulkDeletePlaylist/src/app.tsx
document.adoptedStyleSheets.push(styles_default);
function isTrackUri(uri) {
  const uriObj = Spicetify.URI.from(uri);
  return !!(uriObj && uriObj.type === "track");
}
function isPlaylistUri(uri) {
  const uriObj = Spicetify.URI.from(uri);
  return !!(uriObj && uriObj.type === "playlist");
}
async function handleMenuClick(uris, _uids, contextUri) {
  const trackUris = uris.filter(isTrackUri);
  if (trackUris.length === 0) {
    Spicetify.showNotification("No tracks selected", true);
    return;
  }
  let playlistUri;
  if (contextUri && isPlaylistUri(contextUri)) {
    playlistUri = contextUri;
  }
  createModal(trackUris, playlistUri);
}
function shouldAdd(uris) {
  return uris.some(isTrackUri);
}
var bulkDeleteMenuItem = new Spicetify.ContextMenu.Item(
  "Delete from Playlist",
  handleMenuClick,
  shouldAdd,
  "block"
);
bulkDeleteMenuItem.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZXh0ZW5zaW9ucy9idWxrRGVsZXRlUGxheWxpc3Qvc3JjL3N0eWxlcy5jc3MiLCAiLi4vZXh0ZW5zaW9ucy9idWxrRGVsZXRlUGxheWxpc3Qvc3JjL21vZGFsLnRzeCIsICIuLi9leHRlbnNpb25zL2J1bGtEZWxldGVQbGF5bGlzdC9zcmMvYXBwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG4gICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKGAuYnVsay1kZWxldGUtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmJ1bGstZGVsZXRlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSwgc3BvdGlmeSksIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYnVsay1kZWxldGUtaGVhZGVyIHtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI4MjgyODtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmJ1bGstZGVsZXRlLWNsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtY2xvc2Ugc3ZnIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZmlsbDogI2IzYjNiMztcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjE1cztcbn1cblxuLmJ1bGstZGVsZXRlLWNsb3NlOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1naXRodWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtZ2l0aHViOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbn1cblxuLmJ1bGstZGVsZXRlLWdpdGh1YiBzdmcge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBmaWxsOiAjYjNiM2IzO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMTVzO1xufVxuXG4uYnVsay1kZWxldGUtZ2l0aHViOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1zZWxlY3RvciB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5bGlzdC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXlsaXN0LXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICMzZjNmM2Y7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nJTIzYjNiM2IzJyUzRSUzQ3BhdGggZD0nTTcgMTBsNSA1IDUtNXonLyUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEycHggY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xufVxuXG4uYnVsay1kZWxldGUtcGxheWxpc3Qtc2VsZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXlsaXN0LXNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWFyY2gge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtc2VhcmNoLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaC1pY29uIHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWFyY2gtaWNvbiBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uYnVsay1kZWxldGUtc2VhcmNoIGlucHV0IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmJ1bGstZGVsZXRlLXNlYXJjaCBpbnB1dDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmJ1bGstZGVsZXRlLXRyYWNrLWluZm8ge1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMxMjEyMTI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtdHJhY2staW5mbyBwIHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnVsay1kZWxldGUtdHJhY2staW5mbyBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idWxrLWRlbGV0ZS1saXN0IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG4uYnVsay1kZWxldGUtZW1wdHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xuICBnYXA6IDhweDtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjksIDE4NSwgODQsIDAuMSk7XG59XG5cbi5idWxrLWRlbGV0ZS10cmFjay1udW1iZXIge1xuICB3aWR0aDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXlpbmctaW5kaWNhdG9yIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnVsay1kZWxldGUtcGxheWluZy1pbmRpY2F0b3I6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMWRiOTU0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogYnVsay1kZWxldGUtcHVsc2UgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYnVsay1kZWxldGUtcHVsc2Uge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgNTAlIHsgb3BhY2l0eTogMC41OyB9XG59XG5cbi5idWxrLWRlbGV0ZS10cmFjay1pbWFnZS1jb250YWluZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtdHJhY2staW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW0taW5mbyB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLWFydGlzdCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS1hbGJ1bSB7XG4gIGNvbG9yOiAjNzI3MjcyO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5YmFjay1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICB3aWR0aDogMjgwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYnVsay1kZWxldGUtcGxheWJhY2stYnV0dG9uIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbn1cblxuLmJ1bGstZGVsZXRlLXBsYXliYWNrLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1wbGF5YmFjay1idXR0b24gc3ZnIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmJ1bGstZGVsZXRlLXNsaWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgZmxleDogMTtcbn1cblxuLmJ1bGstZGVsZXRlLXNsaWRlci10aW1lIHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWluLXdpZHRoOiAzNXB4O1xufVxuXG4uYnVsay1kZWxldGUtc2xpZGVyIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA0cHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzRhNGE0YTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idWxrLWRlbGV0ZS1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1bGstZGVsZXRlLXNsaWRlcjpob3Zlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5idWxrLWRlbGV0ZS1jaGVja2JveC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYnVsay1kZWxldGUtY2hlY2tib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1bGstZGVsZXRlLWNoZWNrYm94LWN1c3RvbSB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNiM2IzYjM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1bGstZGVsZXRlLWNoZWNrYm94OmNoZWNrZWQgKyAuYnVsay1kZWxldGUtY2hlY2tib3gtY3VzdG9tIHtcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcbiAgYm9yZGVyLWNvbG9yOiAjMWRiOTU0O1xufVxuXG4uYnVsay1kZWxldGUtY2hlY2tib3g6Y2hlY2tlZCArIC5idWxrLWRlbGV0ZS1jaGVja2JveC1jdXN0b206OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXI6IHNvbGlkICMwMDA7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uYnVsay1kZWxldGUtaXRlbS1pbmZvIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW0tdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1bGstZGVsZXRlLWl0ZW0tYXJ0aXN0IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5idWxrLWRlbGV0ZS1pdGVtLWFsYnVtIHtcbiAgY29sb3I6ICM3MjcyNzI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmJ1bGstZGVsZXRlLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyODI4Mjg7XG59XG5cbi5idWxrLWRlbGV0ZS1zZWxlY3QtYWxsIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMxZGI5NTQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cblxuLmJ1bGstZGVsZXRlLXNlbGVjdC1hbGw6aG92ZXIge1xuICBjb2xvcjogIzFlZDc2MDtcbn1cblxuLmJ1bGstZGVsZXRlLWJ1dHRvbi1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbn1cblxuLmJ1bGstZGVsZXRlLWJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5idWxrLWRlbGV0ZS1idG4uY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MjcyNzI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnVsay1kZWxldGUtYnRuLmNhbmNlbDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLmJ1bGstZGVsZXRlLWJ0bi5kZWxldGUge1xuICBiYWNrZ3JvdW5kOiAjZTkxNDI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1bGstZGVsZXRlLWJ0bi5kZWxldGU6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjZjAzNzI3O1xufVxuXG4uYnVsay1kZWxldGUtYnRuLmRlbGV0ZTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICM1MzUzNTM7XG4gIGNvbG9yOiAjMTgxODE4O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzE4MTgxODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogNDgwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS1oZWFkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS13YXJuaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjAsIDQxLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5idWxrLWRlbGV0ZS1jb25maXJtLXdhcm5pbmcgc3ZnIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICNlOTE0Mjk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS13YXJuaW5nIHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi5idWxrLWRlbGV0ZS1jb25maXJtLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5idWxrLWRlbGV0ZS1jb25maXJtLXRyYWNrLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay1pbWFnZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG59XG5cbi5idWxrLWRlbGV0ZS1jb25maXJtLXRyYWNrLWluZm8ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYnVsay1kZWxldGUtY29uZmlybS10cmFjay1hcnRpc3QtYWxidW0ge1xuICBjb2xvcjogI2EwYTBhMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImludGVyZmFjZSBQbGF5bGlzdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgdXJpOiBzdHJpbmc7XG4gIGNhbkRlbGV0ZTogYm9vbGVhbjtcbiAgY2FuQWRkVG86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBUcmFjayB7XG4gIHVyaTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGFydGlzdDogc3RyaW5nO1xuICBhbGJ1bTogc3RyaW5nO1xuICBpbWFnZVVybDogc3RyaW5nO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICB1aWQ6IHN0cmluZztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbGxMaWJyYXJ5Q29udGVudHMoKTogUHJvbWlzZTxvYmplY3RbXT4ge1xuICBjb25zdCBMaWJyYXJ5QVBJID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXRmb3JtPy5MaWJyYXJ5QVBJO1xuICBpZiAoIUxpYnJhcnlBUEkpIHJldHVybiBbXTtcbiAgXG4gIGNvbnN0IHBhZ2VTaXplID0gMTAwMDA7XG4gIGNvbnN0IGl0ZW1zOiBvYmplY3RbXSA9IFtdO1xuICBsZXQgb2Zmc2V0ID0gMDtcbiAgXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBMaWJyYXJ5QVBJLmdldENvbnRlbnRzKHtcbiAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgbGltaXQ6IHBhZ2VTaXplLFxuICAgICAgZmxhdHRlblRyZWU6IHRydWUsXG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgcGFnZUl0ZW1zID0gcmVzcG9uc2U/Lml0ZW1zIHx8IFtdO1xuICAgIGl0ZW1zLnB1c2goLi4ucGFnZUl0ZW1zKTtcbiAgICBcbiAgICBpZiAocGFnZUl0ZW1zLmxlbmd0aCA8IHBhZ2VTaXplKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgb2Zmc2V0ICs9IHBhZ2VTaXplO1xuICB9XG4gIFxuICByZXR1cm4gaXRlbXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFBsYXlsaXN0c1dpdGhEZWxldGVQZXJtaXNzaW9uKCk6IFByb21pc2U8UGxheWxpc3RbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgZmV0Y2hBbGxMaWJyYXJ5Q29udGVudHMoKTtcbiAgICBcbiAgICBjb25zdCBwbGF5bGlzdHM6IFBsYXlsaXN0W10gPSBbXTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgIGNvbnN0IHBsYXlsaXN0ID0gaXRlbSBhcyB7IHR5cGU/OiBzdHJpbmc7IGNhbkRlbGV0ZT86IGJvb2xlYW47IGNhbkFkZFRvPzogYm9vbGVhbjsgbmFtZT86IHN0cmluZzsgdXJpPzogc3RyaW5nIH07XG4gICAgICBpZiAocGxheWxpc3QudHlwZSA9PT0gXCJwbGF5bGlzdFwiICYmIChwbGF5bGlzdC5jYW5EZWxldGUgfHwgcGxheWxpc3QuY2FuQWRkVG8pKSB7XG4gICAgICAgIHBsYXlsaXN0cy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBwbGF5bGlzdC5uYW1lIHx8IFwiVW5rbm93blwiLFxuICAgICAgICAgIHVyaTogcGxheWxpc3QudXJpIHx8IFwiXCIsXG4gICAgICAgICAgY2FuRGVsZXRlOiBwbGF5bGlzdC5jYW5EZWxldGUgfHwgZmFsc2UsXG4gICAgICAgICAgY2FuQWRkVG86IHBsYXlsaXN0LmNhbkFkZFRvIHx8IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBsYXlsaXN0cztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKG1zOiBudW1iZXIgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuICBpZiAobXMgPT0gbnVsbCB8fCBpc05hTihtcykgfHwgbXMgPD0gMCkgcmV0dXJuIFwiMDowMFwiO1xuICBjb25zdCBzID0gTWF0aC5mbG9vcihtcyAvIDEwMDApO1xuICByZXR1cm4gYCR7TWF0aC5mbG9vcihzIC8gNjApfTokeyhzICUgNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXliYWNrQ29udHJvbCh1cmk6IHN0cmluZywgZHVyYXRpb246IG51bWJlcik6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWJhY2stY29udHJvbHNcIjtcbiAgY29udGFpbmVyLmRhdGFzZXQudXJpID0gdXJpO1xuICBcbiAgY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBsYXlCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1wbGF5YmFjay1idXR0b25cIjtcbiAgcGxheUJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04IDV2MTRsMTEtN3pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPmA7XG4gIFxuICBwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBsYXllciA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF5ZXI7XG4gICAgICBpZiAoIXBsYXllcikgcmV0dXJuO1xuICAgICAgXG4gICAgICBjb25zdCBjdXJyZW50VXJpID0gcGxheWVyPy5kYXRhPy5pdGVtPy51cmk7XG4gICAgICBpZiAoY3VycmVudFVyaSA9PT0gdXJpKSB7XG4gICAgICAgIGlmIChwbGF5ZXI/LmlzUGxheWluZygpKSB7XG4gICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyLnBsYXlVcmkodXJpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIChTcGljZXRpZnkgYXMgYW55KS5QbGF5ZXI/LnBsYXlVcmkodXJpKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2xpZGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2xpZGVyLWNvbnRhaW5lclwiO1xuICBcbiAgY29uc3QgY3VycmVudFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY3VycmVudFRpbWUuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zbGlkZXItdGltZVwiO1xuICBjdXJyZW50VGltZS50ZXh0Q29udGVudCA9IFwiMDowMFwiO1xuICBcbiAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzbGlkZXIudHlwZSA9IFwicmFuZ2VcIjtcbiAgc2xpZGVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2xpZGVyXCI7XG4gIHNsaWRlci5taW4gPSBcIjBcIjtcbiAgc2xpZGVyLm1heCA9IGR1cmF0aW9uID4gMCA/IGR1cmF0aW9uLnRvU3RyaW5nKCkgOiBcIjEwMDBcIjtcbiAgc2xpZGVyLnZhbHVlID0gXCIwXCI7XG4gIHNsaWRlci5zdGVwID0gXCIxMDAwXCI7XG4gIFxuICBjb25zdCB0b3RhbFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdG90YWxUaW1lLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtc2xpZGVyLXRpbWVcIjtcbiAgdG90YWxUaW1lLnRleHRDb250ZW50ID0gZm9ybWF0VGltZShkdXJhdGlvbik7XG4gIFxuICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICBjdXJyZW50VGltZS50ZXh0Q29udGVudCA9IGZvcm1hdFRpbWUocGFyc2VJbnQoc2xpZGVyLnZhbHVlKSk7XG4gIH0pO1xuICBcbiAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAoU3BpY2V0aWZ5IGFzIGFueSkuUGxheWVyPy5zZWVrKHBhcnNlSW50KHNsaWRlci52YWx1ZSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VlazpcIiwgZSk7XG4gICAgfVxuICB9KTtcbiAgXG4gIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGltZSk7XG4gIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXIpO1xuICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodG90YWxUaW1lKTtcbiAgXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5QnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlckNvbnRhaW5lcik7XG4gIFxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUcmFja0ltYWdlKHVybDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWdDb250YWluZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS10cmFjay1pbWFnZS1jb250YWluZXJcIjtcbiAgXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXRyYWNrLWltYWdlXCI7XG4gIGltZy5zcmMgPSB1cmwgfHwgXCJcIjtcbiAgaW1nLmxvYWRpbmcgPSBcImxhenlcIjtcbiAgXG4gIGltZy5vbmVycm9yID0gKCkgPT4ge1xuICAgIGltZy5zcmMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnJTNFJTNDcGF0aCBmaWxsPSclMjMyODI4MjgnIGQ9J00xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnonLyUzRSUzQy9zdmclM0VcIjtcbiAgfTtcbiAgXG4gIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICByZXR1cm4gaW1nQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQbGF5aW5nSW5kaWNhdG9yKCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5kaWNhdG9yLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWluZy1pbmRpY2F0b3JcIjtcbiAgcmV0dXJuIGluZGljYXRvcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0VXJpOiBzdHJpbmcpOiBQcm9taXNlPFRyYWNrW10+IHtcbiAgY29uc3QgdHJhY2tzOiBUcmFja1tdID0gW107XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IFBsYXlsaXN0QVBJID0gKFNwaWNldGlmeSBhcyBhbnkpLlBsYXRmb3JtPy5QbGF5bGlzdEFQSTtcbiAgICBcbiAgICBpZiAoIVBsYXlsaXN0QVBJKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGF5bGlzdEFQSSBub3QgYXZhaWxhYmxlXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwYWdlU2l6ZSA9IDUwMDtcbiAgICBjb25zdCBtYXhUcmFja3MgPSA1MDA7XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgXG4gICAgd2hpbGUgKHRyYWNrcy5sZW5ndGggPCBtYXhUcmFja3MpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1Nsb3RzID0gbWF4VHJhY2tzIC0gdHJhY2tzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGN1cnJlbnRMaW1pdCA9IE1hdGgubWluKHBhZ2VTaXplLCByZW1haW5pbmdTbG90cyk7XG4gICAgICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgUGxheWxpc3RBUEkuZ2V0Q29udGVudHMocGxheWxpc3RVcmksIHtcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIGxpbWl0OiBjdXJyZW50TGltaXQsXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgaWYgKCFyZXNwb25zZT8uaXRlbXMpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiByZXNwb25zZS5pdGVtcykge1xuICAgICAgICBpZiAoaXRlbT8udXJpKSB7XG4gICAgICAgICAgbGV0IG5hbWUgPSBcIlVua25vd24gVHJhY2tcIjtcbiAgICAgICAgICBsZXQgYXJ0aXN0ID0gXCJVbmtub3duIEFydGlzdFwiO1xuICAgICAgICAgIGxldCBhbGJ1bSA9IFwiVW5rbm93biBBbGJ1bVwiO1xuICAgICAgICAgIGxldCBpbWFnZVVybCA9IFwiXCI7XG4gICAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgICAgICBsZXQgdWlkID0gaXRlbS51aWQgfHwgXCJcIjtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoaXRlbS5uYW1lKSBuYW1lID0gaXRlbS5uYW1lO1xuICAgICAgICAgIGlmIChpdGVtLmFydGlzdHM/LlswXT8ubmFtZSkgYXJ0aXN0ID0gaXRlbS5hcnRpc3RzWzBdLm5hbWU7XG4gICAgICAgICAgaWYgKGl0ZW0uYWxidW0/Lm5hbWUpIGFsYnVtID0gaXRlbS5hbGJ1bS5uYW1lO1xuICAgICAgICAgIGlmIChpdGVtLmFsYnVtPy5pbWFnZXM/LlswXT8udXJsKSBpbWFnZVVybCA9IGl0ZW0uYWxidW0uaW1hZ2VzWzBdLnVybDtcbiAgICAgICAgICBlbHNlIGlmIChpdGVtLmFsYnVtPy5jb3ZlckFydD8uc291cmNlcz8uWzBdPy51cmwpIGltYWdlVXJsID0gaXRlbS5hbGJ1bS5jb3ZlckFydC5zb3VyY2VzWzBdLnVybDtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBpdGVtQW55ID0gaXRlbSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgICBsZXQgZHVyYXRpb25WYWw6IG51bWJlciA9IDA7XG4gICAgICAgICAgaWYgKGl0ZW1BbnkuZHVyYXRpb24gJiYgdHlwZW9mIGl0ZW1BbnkuZHVyYXRpb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGR1ciA9IGl0ZW1BbnkuZHVyYXRpb24gYXMgeyB0b3RhbE1zPzogbnVtYmVyOyBtaWxsaXNlY29uZHM/OiBudW1iZXIgfTtcbiAgICAgICAgICAgIGlmIChkdXIudG90YWxNcykgZHVyYXRpb25WYWwgPSBkdXIudG90YWxNcztcbiAgICAgICAgICAgIGVsc2UgaWYgKGR1ci5taWxsaXNlY29uZHMpIGR1cmF0aW9uVmFsID0gZHVyLm1pbGxpc2Vjb25kcztcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtQW55LmR1cmF0aW9uID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBkdXJhdGlvblZhbCA9IGl0ZW1BbnkuZHVyYXRpb247XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbUFueS5kdXJhdGlvbk1zID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBkdXJhdGlvblZhbCA9IGl0ZW1BbnkuZHVyYXRpb25NcztcbiAgICAgICAgICB9XG4gICAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvblZhbDtcbiAgICAgICAgICBcbiAgICAgICAgICB0cmFja3MucHVzaCh7XG4gICAgICAgICAgICB1cmk6IGl0ZW0udXJpLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFydGlzdCxcbiAgICAgICAgICAgIGFsYnVtLFxuICAgICAgICAgICAgaW1hZ2VVcmwsXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAocmVzcG9uc2UuaXRlbXMubGVuZ3RoIDwgY3VycmVudExpbWl0IHx8IHRyYWNrcy5sZW5ndGggPj0gbWF4VHJhY2tzKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgXG4gICAgICBvZmZzZXQgKz0gY3VycmVudExpbWl0O1xuICAgIH1cbiAgICBcbiAgICBpZiAodHJhY2tzLmxlbmd0aCA+PSBtYXhUcmFja3MpIHtcbiAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKGBTaG93aW5nIGZpcnN0ICR7bWF4VHJhY2tzfSB0cmFja3MuIFBsYXlsaXN0IGlzIGxhcmdlci5gLCBmYWxzZSwgNTAwMCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHBsYXlsaXN0IHRyYWNrczpcIiwgZSk7XG4gICAgdGhyb3cgZTtcbiAgfVxuICBcbiAgcmV0dXJuIHRyYWNrcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRyYWNrc0Zyb21QbGF5bGlzdChcbiAgcGxheWxpc3RVcmk6IHN0cmluZyxcbiAgdHJhY2tzOiB7IHVyaTogc3RyaW5nOyB1aWQ6IHN0cmluZyB9W11cbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCBQbGF5bGlzdEFQSSA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF0Zm9ybT8uUGxheWxpc3RBUEk7XG4gIFxuICBpZiAoIVBsYXlsaXN0QVBJKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IHRyYWNrTGlzdCA9IHRyYWNrcy5tYXAodCA9PiAoe1xuICAgICAgdXJpOiB0LnVyaSxcbiAgICAgIHVpZDogdC51aWRcbiAgICB9KSk7XG4gICAgYXdhaXQgUGxheWxpc3RBUEkucmVtb3ZlKHBsYXlsaXN0VXJpLCB0cmFja0xpc3QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IFBsYXlsaXN0QVBJLnJlbW92ZShwbGF5bGlzdFVyaSwgdHJhY2tzLm1hcCh0ID0+IHQudXJpKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlMikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkRlbGV0ZSBmYWlsZWQ6XCIsIGUyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlQ29uZmlybU1vZGFsKFxuICB0cmFja3M6IFRyYWNrW10sXG4gIHBsYXlsaXN0TmFtZTogc3RyaW5nLFxuICBvbkNvbmZpcm06ICgpID0+IHZvaWQsXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkXG4pIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLW92ZXJsYXlcIjtcbiAgXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS1jb250ZW50XCI7XG4gIFxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLWhlYWRlclwiO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBUcmFja3NcIjtcbiAgXG4gIGNvbnN0IHdhcm5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3YXJuaW5nLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS13YXJuaW5nXCI7XG4gIFxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XG4gIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInBhdGhcIik7XG4gIHBhdGguc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKTtcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTVoLTJ2LTJoMnYyem0wLTRoLTJWN2gydjZ6XCIpO1xuICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG4gIFxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUaGlzIHdpbGwgcGVybWFuZW50bHkgcmVtb3ZlIFwiKSk7XG4gIGNvbnN0IHN0cm9uZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIpO1xuICBzdHJvbmcxLnRleHRDb250ZW50ID0gdHJhY2tzLmxlbmd0aC50b1N0cmluZygpO1xuICBwLmFwcGVuZENoaWxkKHN0cm9uZzEpO1xuICBwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIHRyYWNrKHMpIGZyb20gXCIpKTtcbiAgY29uc3Qgc3Ryb25nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7XG4gIHN0cm9uZzIudGV4dENvbnRlbnQgPSBwbGF5bGlzdE5hbWU7XG4gIHAuYXBwZW5kQ2hpbGQoc3Ryb25nMik7XG4gIHAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIuIFRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuXCIpKTtcbiAgXG4gIHdhcm5pbmcuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgd2FybmluZy5hcHBlbmRDaGlsZChwKTtcbiAgXG4gIGNvbnN0IHRyYWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRyYWNrTGlzdC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2stbGlzdFwiO1xuICBcbiAgZm9yIChjb25zdCB0cmFjayBvZiB0cmFja3MpIHtcbiAgICBjb25zdCB0cmFja0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRyYWNrSXRlbS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2staXRlbVwiO1xuICAgIFxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29uZmlybS10cmFjay1pbWFnZVwiO1xuICAgIGltZy5zcmMgPSB0cmFjay5pbWFnZVVybCB8fCBcImh0dHBzOi8vd3d3LnNjZG4uY28vaS9fZ2xvYmFsL2Zhdmljb24ucG5nXCI7XG4gICAgaW1nLmFsdCA9IFwiXCI7XG4gICAgXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5mby5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNvbmZpcm0tdHJhY2staW5mb1wiO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLXRyYWNrLXRpdGxlXCI7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0cmFjay5uYW1lO1xuICAgIFxuICAgIGNvbnN0IGFydGlzdEFsYnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgYXJ0aXN0QWxidW0uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLXRyYWNrLWFydGlzdC1hbGJ1bVwiO1xuICAgIGFydGlzdEFsYnVtLnRleHRDb250ZW50ID0gYCR7dHJhY2suYXJ0aXN0fSBcdTIwMTQgJHt0cmFjay5hbGJ1bX1gO1xuICAgIFxuICAgIGluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoYXJ0aXN0QWxidW0pO1xuICAgIHRyYWNrSXRlbS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIHRyYWNrSXRlbS5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQodHJhY2tJdGVtKTtcbiAgfVxuICBcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbnMuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1jb25maXJtLWJ1dHRvbnNcIjtcbiAgXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWJ0biBjYW5jZWxcIjtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBvbkNhbmNlbCgpO1xuICB9KTtcbiAgXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25maXJtQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnRuIGRlbGV0ZVwiO1xuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgb25Db25maXJtKCk7XG4gIH0pO1xuICBcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBidXR0b25zLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuICBcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHdhcm5pbmcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRyYWNrTGlzdCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG4gIFxuICBvdmVybGF5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICBcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBvbkNhbmNlbCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RhbCh0cmFja1VyaXM6IHN0cmluZ1tdLCBwcmVmZXJyZWRQbGF5bGlzdFVyaT86IHN0cmluZyB8IG51bGwpIHtcbiAgbGV0IGFsbFBsYXlsaXN0czogUGxheWxpc3RbXSA9IFtdO1xuICBsZXQgY3VycmVudFRyYWNrczogVHJhY2tbXSA9IFtdO1xuICBsZXQgZmlsdGVyZWRUcmFja3M6IFRyYWNrW10gPSBbXTtcbiAgY29uc3Qgc2VsZWN0ZWRTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgbGV0IGN1cnJlbnRQbGF5bGlzdFVyaTogc3RyaW5nIHwgbnVsbCA9IHByZWZlcnJlZFBsYXlsaXN0VXJpIHx8IG51bGw7XG4gIFxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtbW9kYWxcIjtcbiAgXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY29udGVudFwiO1xuICBcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaGVhZGVyXCI7XG4gIFxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiQnVsayBEZWxldGUgZnJvbSBQbGF5bGlzdFwiO1xuICBcbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJSaWdodC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWhlYWRlci1yaWdodFwiO1xuICBcbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWJMaW5rLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtZ2l0aHViXCI7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0ppbU1hcmxleTQyMC9zcGljZXRpZnktZXh0ZW5zaW9uXCI7XG4gIGdpdGh1YkxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgZ2l0aHViTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiT3BlbiBHaXRIdWIgcmVwb3NpdG9yeVwiKTtcbiAgZ2l0aHViTGluay5pbm5lckhUTUwgPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiAwYy02LjYyNiAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDIgMy40MzggOS44IDguMjA3IDExLjM4Ny41OTkuMTExLjc5My0uMjYxLjc5My0uNTc3di0yLjIzNGMtMy4zMzguNzI2LTQuMDMzLTEuNDE2LTQuMDMzLTEuNDE2LS41NDYtMS4zODctMS4zMzMtMS43NTYtMS4zMzMtMS43NTYtMS4wODktLjc0NS4wODMtLjcyOS4wODMtLjcyOSAxLjIwNS4wODQgMS44MzkgMS4yMzcgMS44MzkgMS4yMzcgMS4wNyAxLjgzNCAyLjgwNyAxLjMwNCAzLjQ5Mi45OTcuMTA3LS43NzUuNDE4LTEuMzA1Ljc2Mi0xLjYwNC0yLjY2NS0uMzA1LTUuNDY3LTEuMzM0LTUuNDY3LTUuOTMxIDAtMS4zMTEuNDY5LTIuMzgxIDEuMjM2LTMuMjIxLS4xMjQtLjMwMy0uNTM1LTEuNTI0LjExNy0zLjE3NiAwIDAgMS4wMDgtLjMyMiAzLjMwMSAxLjIzLjk1Ny0uMjY2IDEuOTgzLS4zOTkgMy4wMDMtLjQwNCAxLjAyLjAwNSAyLjA0Ny4xMzggMy4wMDYuNDA0IDIuMjkxLTEuNTUyIDMuMjk3LTEuMjMgMy4yOTctMS4yMy42NTMgMS42NTMuMjQyIDIuODc0LjExOCAzLjE3Ni43Ny44NCAxLjIzNSAxLjkxMSAxLjIzNSAzLjIyMSAwIDQuNjA5LTIuODA3IDUuNjI0LTUuNDc5IDUuOTIxLjQzLjM3Mi44MjMgMS4xMDIuODIzIDIuMjIydjMuMjkzYzAgLjMxOS4xOTIuNjk0LjgwMS41NzYgNC43NjUtMS41ODkgOC4xOTktNi4wODYgOC4xOTktMTEuMzg2IDAtNi42MjctNS4zNzMtMTItMTItMTJ6XCIvPjwvc3ZnPmA7XG4gIFxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNsb3NlQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY2xvc2VcIjtcbiAgY2xvc2VCdG4uaW5uZXJIVE1MID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwiLz48L3N2Zz5gO1xuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWwucmVtb3ZlKCkpO1xuICBcbiAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gIGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJSaWdodCk7XG4gIFxuICBjb25zdCBwbGF5bGlzdFNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWxpc3RTZWxlY3Rvci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXBsYXlsaXN0LXNlbGVjdG9yXCI7XG4gIFxuICBjb25zdCBwbGF5bGlzdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwbGF5bGlzdExhYmVsLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWxpc3QtbGFiZWxcIjtcbiAgcGxheWxpc3RMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VsZWN0IFBsYXlsaXN0XCI7XG4gIFxuICBjb25zdCBwbGF5bGlzdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHBsYXlsaXN0U2VsZWN0LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtcGxheWxpc3Qtc2VsZWN0XCI7XG4gIFxuICBwbGF5bGlzdFNlbGVjdG9yLmFwcGVuZENoaWxkKHBsYXlsaXN0TGFiZWwpO1xuICBwbGF5bGlzdFNlbGVjdG9yLmFwcGVuZENoaWxkKHBsYXlsaXN0U2VsZWN0KTtcbiAgXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLXNlYXJjaFwiO1xuICBcbiAgY29uc3Qgc2VhcmNoV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaFdyYXBwZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zZWFyY2gtd3JhcHBlclwiO1xuICBcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaEljb24uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zZWFyY2gtaWNvblwiO1xuICBzZWFyY2hJY29uLmlubmVySFRNTCA9IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAwMTYgOS41IDYuNSA2LjUgMCAxMDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XCIvPjwvc3ZnPmA7XG4gIFxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc2VhcmNoSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIHRyYWNrcyBpbiBwbGF5bGlzdC4uLlwiO1xuICBzZWFyY2hJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gIFxuICBzZWFyY2hXcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuICBzZWFyY2hXcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaFdyYXBwZXIpO1xuICBcbiAgY29uc3QgdHJhY2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHJhY2tJbmZvLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtdHJhY2staW5mb1wiO1xuICB0cmFja0luZm8uaW5uZXJIVE1MID0gYDxwPjxzcGFuPjA8L3NwYW4+IHRyYWNrKHMpIHNlbGVjdGVkIGZyb20gcGxheWxpc3Q8L3A+YDtcbiAgXG4gIGNvbnN0IHRyYWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRyYWNrTGlzdC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWxpc3RcIjtcbiAgXG4gIGNvbnN0IGVtcHR5U3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbXB0eVN0YXRlLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtZW1wdHlcIjtcbiAgZW1wdHlTdGF0ZS50ZXh0Q29udGVudCA9IFwiU2VsZWN0IGEgcGxheWxpc3QgZmlyc3RcIjtcbiAgdHJhY2tMaXN0LmFwcGVuZENoaWxkKGVtcHR5U3RhdGUpO1xuICBcbiAgZnVuY3Rpb24gcmVuZGVyVHJhY2tzKHRyYWNrczogVHJhY2tbXSkge1xuICAgIHRyYWNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIFxuICAgIGlmICh0cmFja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBlbXB0eU1zZyA9IHNlYXJjaElucHV0LnZhbHVlID8gXCJObyB0cmFja3MgZm91bmRcIiA6IFwiUGxheWxpc3QgaXMgZW1wdHlcIjtcbiAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGVtcHR5LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtZW1wdHlcIjtcbiAgICAgIGVtcHR5LnRleHRDb250ZW50ID0gZW1wdHlNc2c7XG4gICAgICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQoZW1wdHkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjdXJyZW50UGxheWluZ1VyaSA9IChTcGljZXRpZnkgYXMgYW55KS5QbGF5ZXI/LmRhdGE/Lml0ZW0/LnVyaSB8fCBudWxsO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0cmFjayA9IHRyYWNrc1tpXTtcbiAgICAgIGNvbnN0IGlzUGxheWluZyA9IGN1cnJlbnRQbGF5aW5nVXJpID09PSB0cmFjay51cmk7XG4gICAgICBcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaXRlbS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW1cIiArIChzZWxlY3RlZFNldC5oYXModHJhY2sudXJpKSA/IFwiIHNlbGVjdGVkXCIgOiBcIlwiKTtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS11cmlcIiwgdHJhY2sudXJpKTtcbiAgICAgIGl0ZW0uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICBcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoXCIuYnVsay1kZWxldGUtY2hlY2tib3gtd3JhcHBlclwiKSB8fCBcbiAgICAgICAgICAgIChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdChcIi5idWxrLWRlbGV0ZS1wbGF5YmFjay1jb250cm9sc1wiKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gIWNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgc2VsZWN0ZWRTZXQuYWRkKHRyYWNrLnVyaSk7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0ZWRTZXQuZGVsZXRlKHRyYWNrLnVyaSk7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zdCB0cmFja051bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdHJhY2tOdW1iZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS10cmFjay1udW1iZXJcIjtcbiAgICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgICAgdHJhY2tOdW1iZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUGxheWluZ0luZGljYXRvcigpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYWNrTnVtYmVyLnRleHRDb250ZW50ID0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZVRyYWNrSW1hZ2UodHJhY2suaW1hZ2VVcmwpO1xuICAgICAgXG4gICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGluZm8uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1pdGVtLWluZm9cIjtcbiAgICAgIFxuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtaXRlbS10aXRsZVwiO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0cmFjay5uYW1lO1xuICAgICAgXG4gICAgICBjb25zdCBhcnRpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGFydGlzdC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW0tYXJ0aXN0XCI7XG4gICAgICBhcnRpc3QudGV4dENvbnRlbnQgPSB0cmFjay5hcnRpc3Q7XG4gICAgICBcbiAgICAgIGNvbnN0IGFsYnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBhbGJ1bS5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWl0ZW0tYWxidW1cIjtcbiAgICAgIGFsYnVtLnRleHRDb250ZW50ID0gdHJhY2suYWxidW07XG4gICAgICBcbiAgICAgIGluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgaW5mby5hcHBlbmRDaGlsZChhcnRpc3QpO1xuICAgICAgaW5mby5hcHBlbmRDaGlsZChhbGJ1bSk7XG4gICAgICBcbiAgICAgIGNvbnN0IHBsYXliYWNrID0gY3JlYXRlUGxheWJhY2tDb250cm9sKHRyYWNrLnVyaSwgdHJhY2suZHVyYXRpb24pO1xuICAgICAgXG4gICAgICBjb25zdCBjaGVja2JveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY2hlY2tib3gtd3JhcHBlclwiO1xuICAgICAgXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gc2VsZWN0ZWRTZXQuaGFzKHRyYWNrLnVyaSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGN1c3RvbUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGN1c3RvbUNoZWNrYm94LmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtY2hlY2tib3gtY3VzdG9tXCI7XG4gICAgICBcbiAgICAgIGNoZWNrYm94V3JhcHBlci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY3VzdG9tQ2hlY2tib3gpO1xuICAgICAgXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICBzZWxlY3RlZFNldC5hZGQodHJhY2sudXJpKTtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZFNldC5kZWxldGUodHJhY2sudXJpKTtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodHJhY2tOdW1iZXIpO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChjaGVja2JveFdyYXBwZXIpO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGluZm8pO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChwbGF5YmFjayk7XG4gICAgICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBmaWx0ZXJUcmFja3MoKSB7XG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGZpbHRlcmVkVHJhY2tzID0gY3VycmVudFRyYWNrcy5maWx0ZXIodCA9PiBcbiAgICAgIHQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSB8fFxuICAgICAgdC5hcnRpc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkgfHxcbiAgICAgIHQuYWxidW0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSlcbiAgICApO1xuICAgIHJlbmRlclRyYWNrcyhmaWx0ZXJlZFRyYWNrcyk7XG4gICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gdXBkYXRlQnV0dG9uU3RhdGUoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IHNlbGVjdGVkU2V0LnNpemU7XG4gICAgdHJhY2tJbmZvLmlubmVySFRNTCA9IGA8cD48c3Bhbj4ke3NlbGVjdGVkQ291bnR9PC9zcGFuPiB0cmFjayhzKSBzZWxlY3RlZCBmcm9tIHBsYXlsaXN0PC9wPmA7XG4gICAgZGVsZXRlQnRuLmRpc2FibGVkID0gc2VsZWN0ZWRDb3VudCA9PT0gMDtcbiAgICBcbiAgICBpZiAoc2VsZWN0ZWRDb3VudCA9PT0gMCkge1xuICAgICAgc2VsZWN0QWxsQnRuLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQWxsXCI7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZENvdW50ID09PSBmaWx0ZXJlZFRyYWNrcy5sZW5ndGgpIHtcbiAgICAgIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVzZWxlY3QgQWxsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IEFsbFwiO1xuICAgIH1cbiAgfVxuICBcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0VXJpOiBzdHJpbmcpIHtcbiAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJMb2FkaW5nIHRyYWNrcy4uLlwiO1xuICAgIHRyYWNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgY3VycmVudFRyYWNrcyA9IGF3YWl0IGdldFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0VXJpKTtcbiAgICAgIGZpbHRlcmVkVHJhY2tzID0gWy4uLmN1cnJlbnRUcmFja3NdO1xuICAgICAgc2VsZWN0ZWRTZXQuY2xlYXIoKTtcbiAgICAgIHNlYXJjaElucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICByZW5kZXJUcmFja3MoZmlsdGVyZWRUcmFja3MpO1xuICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlbXB0eVN0YXRlLnRleHRDb250ZW50ID0gXCJGYWlsZWQgdG8gbG9hZCB0cmFja3NcIjtcbiAgICAgIHRyYWNrTGlzdC5hcHBlbmRDaGlsZChlbXB0eVN0YXRlKTtcbiAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiRmFpbGVkIHRvIGxvYWQgdHJhY2tzXCIsIHRydWUpO1xuICAgIH1cbiAgfVxuICBcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFBsYXlsaXN0cygpIHtcbiAgICB0cnkge1xuICAgICAgYWxsUGxheWxpc3RzID0gYXdhaXQgZmV0Y2hQbGF5bGlzdHNXaXRoRGVsZXRlUGVybWlzc2lvbigpO1xuICAgICAgXG4gICAgICBhbGxQbGF5bGlzdHMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG4gICAgICBcbiAgICAgIGZvciAoY29uc3QgcGxheWxpc3Qgb2YgYWxsUGxheWxpc3RzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHBsYXlsaXN0LnVyaTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcGxheWxpc3QubmFtZTtcbiAgICAgICAgcGxheWxpc3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHRyYWNrVXJpcy5sZW5ndGggPiAwICYmIGFsbFBsYXlsaXN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBmb3VuZFBsYXlsaXN0OiBQbGF5bGlzdCB8IG51bGwgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRQbGF5bGlzdFVyaSkge1xuICAgICAgICAgIGNvbnN0IHByZWZlcnJlZCA9IGFsbFBsYXlsaXN0cy5maW5kKHAgPT4gcC51cmkgPT09IGN1cnJlbnRQbGF5bGlzdFVyaSk7XG4gICAgICAgICAgaWYgKHByZWZlcnJlZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgdHJhY2tzID0gYXdhaXQgZ2V0UGxheWxpc3RUcmFja3MocHJlZmVycmVkLnVyaSk7XG4gICAgICAgICAgICAgIGNvbnN0IHRyYWNrVXJpc1NldCA9IG5ldyBTZXQodHJhY2tzLm1hcCh0ID0+IHQudXJpKSk7XG4gICAgICAgICAgICAgIGNvbnN0IGhhc1NlbGVjdGVkVHJhY2sgPSB0cmFja1VyaXMuc29tZSh1cmkgPT4gdHJhY2tVcmlzU2V0Lmhhcyh1cmkpKTtcbiAgICAgICAgICAgICAgaWYgKGhhc1NlbGVjdGVkVHJhY2spIHtcbiAgICAgICAgICAgICAgICBmb3VuZFBsYXlsaXN0ID0gcHJlZmVycmVkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCFmb3VuZFBsYXlsaXN0KSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwbGF5bGlzdCBvZiBhbGxQbGF5bGlzdHMpIHtcbiAgICAgICAgICAgIGlmIChwbGF5bGlzdC51cmkgPT09IGN1cnJlbnRQbGF5bGlzdFVyaSkgY29udGludWU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCB0cmFja3MgPSBhd2FpdCBnZXRQbGF5bGlzdFRyYWNrcyhwbGF5bGlzdC51cmkpO1xuICAgICAgICAgICAgICBjb25zdCB0cmFja1VyaXNTZXQgPSBuZXcgU2V0KHRyYWNrcy5tYXAodCA9PiB0LnVyaSkpO1xuICAgICAgICAgICAgICBjb25zdCBoYXNTZWxlY3RlZFRyYWNrID0gdHJhY2tVcmlzLnNvbWUodXJpID0+IHRyYWNrVXJpc1NldC5oYXModXJpKSk7XG4gICAgICAgICAgICAgIGlmIChoYXNTZWxlY3RlZFRyYWNrKSB7XG4gICAgICAgICAgICAgICAgZm91bmRQbGF5bGlzdCA9IHBsYXlsaXN0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGZvdW5kUGxheWxpc3QpIHtcbiAgICAgICAgICBwbGF5bGlzdFNlbGVjdC52YWx1ZSA9IGZvdW5kUGxheWxpc3QudXJpO1xuICAgICAgICAgIGN1cnJlbnRQbGF5bGlzdFVyaSA9IGZvdW5kUGxheWxpc3QudXJpO1xuICAgICAgICAgIGF3YWl0IGxvYWRQbGF5bGlzdFRyYWNrcyhmb3VuZFBsYXlsaXN0LnVyaSk7XG4gICAgICAgICAgXG4gICAgICAgICAgc2VsZWN0ZWRTZXQuY2xlYXIoKTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50VXJpcyA9IG5ldyBTZXQoY3VycmVudFRyYWNrcy5tYXAodCA9PiB0LnVyaSkpO1xuICAgICAgICAgIGZvciAoY29uc3QgdXJpIG9mIHRyYWNrVXJpcykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRVcmlzLmhhcyh1cmkpKSB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkU2V0LmFkZCh1cmkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0cmFja0xpc3QucXVlcnlTZWxlY3RvckFsbChcIi5idWxrLWRlbGV0ZS1pdGVtXCIpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmkgPSBpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtdXJpXCIpO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYnVsay1kZWxldGUtY2hlY2tib3hcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIGlmICh1cmkgJiYgc2VsZWN0ZWRTZXQuaGFzKHVyaSkpIHtcbiAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICAgIHVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkZhaWxlZCB0byBsb2FkIHBsYXlsaXN0c1wiLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgXG4gIGxvYWRQbGF5bGlzdHMoKTtcbiAgXG4gIHBsYXlsaXN0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVXJpID0gcGxheWxpc3RTZWxlY3QudmFsdWU7XG4gICAgaWYgKHNlbGVjdGVkVXJpKSB7XG4gICAgICBjdXJyZW50UGxheWxpc3RVcmkgPSBzZWxlY3RlZFVyaTtcbiAgICAgIGF3YWl0IGxvYWRQbGF5bGlzdFRyYWNrcyhzZWxlY3RlZFVyaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRQbGF5bGlzdFVyaSA9IG51bGw7XG4gICAgICBjdXJyZW50VHJhY2tzID0gW107XG4gICAgICBmaWx0ZXJlZFRyYWNrcyA9IFtdO1xuICAgICAgc2VsZWN0ZWRTZXQuY2xlYXIoKTtcbiAgICAgIHNlYXJjaElucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIHRyYWNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZW1wdHkuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1lbXB0eVwiO1xuICAgICAgZW1wdHkudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBhIHBsYXlsaXN0IGZpcnN0XCI7XG4gICAgICB0cmFja0xpc3QuYXBwZW5kQ2hpbGQoZW1wdHkpO1xuICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZpbHRlclRyYWNrcyk7XG4gIFxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1idXR0b25zXCI7XG4gIFxuICBjb25zdCBzZWxlY3RBbGxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzZWxlY3RBbGxCdG4uY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1zZWxlY3QtYWxsXCI7XG4gIHNlbGVjdEFsbEJ0bi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IEFsbFwiO1xuICBzZWxlY3RBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRTZXQuc2l6ZSA9PT0gZmlsdGVyZWRUcmFja3MubGVuZ3RoKSB7XG4gICAgICBzZWxlY3RlZFNldC5jbGVhcigpO1xuICAgICAgdHJhY2tMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnVsay1kZWxldGUtaXRlbVwiKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYnVsay1kZWxldGUtY2hlY2tib3hcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKGNoZWNrYm94KSBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyZWRUcmFja3MuZm9yRWFjaCh0ID0+IHNlbGVjdGVkU2V0LmFkZCh0LnVyaSkpO1xuICAgICAgdHJhY2tMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnVsay1kZWxldGUtaXRlbVwiKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYnVsay1kZWxldGUtY2hlY2tib3hcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKGNoZWNrYm94KSBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVCdXR0b25TdGF0ZSgpO1xuICB9KTtcbiAgXG4gIGNvbnN0IGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uR3JvdXAuY2xhc3NOYW1lID0gXCJidWxrLWRlbGV0ZS1idXR0b24tZ3JvdXBcIjtcbiAgXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSBcImJ1bGstZGVsZXRlLWJ0biBjYW5jZWxcIjtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYW51cEludGVydmFsKCk7XG4gICAgbW9kYWwucmVtb3ZlKCk7XG4gIH0pO1xuICBcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiYnVsay1kZWxldGUtYnRuIGRlbGV0ZVwiO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICBkZWxldGVCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICBcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50UGxheWxpc3RVcmkpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBwbGF5bGlzdCA9IGFsbFBsYXlsaXN0cy5maW5kKHAgPT4gcC51cmkgPT09IGN1cnJlbnRQbGF5bGlzdFVyaSk7XG4gICAgY29uc3QgcGxheWxpc3ROYW1lID0gcGxheWxpc3Q/Lm5hbWUgfHwgXCJVbmtub3duIFBsYXlsaXN0XCI7XG4gICAgY29uc3QgdHJhY2tDb3VudCA9IHNlbGVjdGVkU2V0LnNpemU7XG4gICAgY29uc3QgdHJhY2tzVG9EZWxldGUgPSBjdXJyZW50VHJhY2tzLmZpbHRlcih0ID0+IHNlbGVjdGVkU2V0Lmhhcyh0LnVyaSkpO1xuICAgIFxuICAgIGNyZWF0ZURlbGV0ZUNvbmZpcm1Nb2RhbChcbiAgICAgIHRyYWNrc1RvRGVsZXRlLFxuICAgICAgcGxheWxpc3ROYW1lLFxuICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB0cmFja3NXaXRoVWlkID0gdHJhY2tzVG9EZWxldGUubWFwKHQgPT4gKHsgdXJpOiB0LnVyaSwgdWlkOiB0LnVpZCB9KSk7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBkZWxldGVUcmFja3NGcm9tUGxheWxpc3QoY3VycmVudFBsYXlsaXN0VXJpISwgdHJhY2tzV2l0aFVpZCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKGBEZWxldGVkICR7dHJhY2tDb3VudH0gdHJhY2socykgZnJvbSBwbGF5bGlzdGApO1xuICAgICAgICAgIFxuICAgICAgICAgIGN1cnJlbnRUcmFja3MgPSBjdXJyZW50VHJhY2tzLmZpbHRlcih0ID0+ICFzZWxlY3RlZFNldC5oYXModC51cmkpKTtcbiAgICAgICAgICBmaWx0ZXJlZFRyYWNrcyA9IGZpbHRlcmVkVHJhY2tzLmZpbHRlcih0ID0+ICFzZWxlY3RlZFNldC5oYXModC51cmkpKTtcbiAgICAgICAgICBzZWxlY3RlZFNldC5jbGVhcigpO1xuICAgICAgICAgIHJlbmRlclRyYWNrcyhmaWx0ZXJlZFRyYWNrcyk7XG4gICAgICAgICAgdXBkYXRlQnV0dG9uU3RhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkZhaWxlZCB0byBkZWxldGUgdHJhY2tzXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKCkgPT4ge31cbiAgICApO1xuICB9KTtcbiAgXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gIFxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0QWxsQnRuKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcbiAgXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwbGF5bGlzdFNlbGVjdG9yKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRyYWNrSW5mbyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodHJhY2tMaXN0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICBcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgXG4gIGNvbnN0IGNsZWFudXBJbnRlcnZhbCA9ICgpID0+IHtcbiAgICBpZiAodXBkYXRlSW50ZXJ2YWwpIHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHVwZGF0ZUludGVydmFsKTtcbiAgICAgIHVwZGF0ZUludGVydmFsID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIFxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICBjbGVhbnVwSW50ZXJ2YWwoKTtcbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBsZXQgdXBkYXRlSW50ZXJ2YWw6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBcbiAgY29uc3QgdXBkYXRlUGxheWJhY2tTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSAoU3BpY2V0aWZ5IGFzIGFueSkuUGxheWVyO1xuICAgIGlmICghcGxheWVyPy5kYXRhPy5pdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGN1cnJlbnRVcmkgPSBwbGF5ZXIuZGF0YS5pdGVtLnVyaTtcbiAgICBjb25zdCBpc1BsYXlpbmcgPSBwbGF5ZXIuaXNQbGF5aW5nKCk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwbGF5ZXIuZ2V0UHJvZ3Jlc3MoKTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHBsYXllci5nZXREdXJhdGlvbigpIHx8IHBsYXllci5kYXRhLml0ZW0uZHVyYXRpb24/LnRvdGFsTXMgfHwgMDtcbiAgICBcbiAgICB0cmFja0xpc3QucXVlcnlTZWxlY3RvckFsbChcIi5idWxrLWRlbGV0ZS1wbGF5YmFjay1jb250cm9sc1wiKS5mb3JFYWNoKChjdHJsOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHBsYXlCdG4gPSBjdHJsLnF1ZXJ5U2VsZWN0b3IoXCIuYnVsay1kZWxldGUtcGxheWJhY2stYnV0dG9uXCIpO1xuICAgICAgY29uc3Qgc2xpZGVyID0gY3RybC5xdWVyeVNlbGVjdG9yKFwiLmJ1bGstZGVsZXRlLXNsaWRlclwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBjdHJsLnF1ZXJ5U2VsZWN0b3IoXCIuYnVsay1kZWxldGUtc2xpZGVyLXRpbWVcIik7XG4gICAgICBcbiAgICAgIGlmIChjdHJsLmRhdGFzZXQudXJpID09PSBjdXJyZW50VXJpKSB7XG4gICAgICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgICAgICBwbGF5QnRuLmlubmVySFRNTCA9IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00elwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PC9zdmc+YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5QnRuLmlubmVySFRNTCA9IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTggNXYxNGwxMS03elwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PC9zdmc+YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2xpZGVyKSB7XG4gICAgICAgICAgc2xpZGVyLnZhbHVlID0gcG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICAgICAgICBzbGlkZXIubWF4ID0gZHVyYXRpb24udG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudFRpbWUpIGN1cnJlbnRUaW1lLnRleHRDb250ZW50ID0gZm9ybWF0VGltZShwb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgdHJhY2tMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnVsay1kZWxldGUtaXRlbVwiKS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHRyYWNrTnVtYmVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmJ1bGstZGVsZXRlLXRyYWNrLW51bWJlclwiKTtcbiAgICAgIGlmICghdHJhY2tOdW1iZXIpIHJldHVybjtcbiAgICAgIFxuICAgICAgY29uc3QgcGxheWJhY2tzID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1bGstZGVsZXRlLXBsYXliYWNrLWNvbnRyb2xzXCIpO1xuICAgICAgbGV0IGl0ZW1VcmkgPSBcIlwiO1xuICAgICAgcGxheWJhY2tzLmZvckVhY2goKHBiOiBhbnkpID0+IHtcbiAgICAgICAgaXRlbVVyaSA9IHBiLmRhdGFzZXQudXJpIHx8IFwiXCI7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgaWYgKGl0ZW1VcmkgPT09IGN1cnJlbnRVcmkpIHtcbiAgICAgICAgdHJhY2tOdW1iZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJidWxrLWRlbGV0ZS1wbGF5aW5nLWluZGljYXRvclwiPjwvZGl2PmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpZHggPSBBcnJheS5mcm9tKHRyYWNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1bGstZGVsZXRlLWl0ZW1cIikpLmluZGV4T2YoaXRlbSkgKyAxO1xuICAgICAgICB0cmFja051bWJlci50ZXh0Q29udGVudCA9IGlkeC50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBcbiAgY29uc3Qgc3RhcnRQbGF5YmFja1VwZGF0ZXMgPSAoKSA9PiB7XG4gICAgaWYgKHVwZGF0ZUludGVydmFsKSByZXR1cm47XG4gICAgdXBkYXRlSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodXBkYXRlUGxheWJhY2tTdGF0ZSwgMTAwMCk7XG4gIH07XG4gIFxuICBzdGFydFBsYXliYWNrVXBkYXRlcygpO1xuICBcbiAgcGxheWxpc3RTZWxlY3QuZm9jdXMoKTtcbn0iLCAiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCIgd2l0aCB7IHR5cGU6IFwiY3NzXCIgfTtcbmltcG9ydCB7IGNyZWF0ZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWwudHN4XCI7XG5cbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHN0eWxlcyk7XG5cbmZ1bmN0aW9uIGlzVHJhY2tVcmkodXJpOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJpT2JqID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHVyaSk7XG4gIHJldHVybiAhISh1cmlPYmogJiYgKHVyaU9iaiBhcyB7IHR5cGU/OiBzdHJpbmcgfSkudHlwZSA9PT0gXCJ0cmFja1wiKTtcbn1cblxuZnVuY3Rpb24gaXNQbGF5bGlzdFVyaSh1cmk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmlPYmogPSBTcGljZXRpZnkuVVJJLmZyb20odXJpKTtcbiAgcmV0dXJuICEhKHVyaU9iaiAmJiAodXJpT2JqIGFzIHsgdHlwZT86IHN0cmluZyB9KS50eXBlID09PSBcInBsYXlsaXN0XCIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVNZW51Q2xpY2sodXJpczogc3RyaW5nW10sIF91aWRzPzogc3RyaW5nW10sIGNvbnRleHRVcmk/OiBzdHJpbmcpIHtcbiAgY29uc3QgdHJhY2tVcmlzID0gdXJpcy5maWx0ZXIoaXNUcmFja1VyaSk7XG4gIFxuICBpZiAodHJhY2tVcmlzLmxlbmd0aCA9PT0gMCkge1xuICAgIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiTm8gdHJhY2tzIHNlbGVjdGVkXCIsIHRydWUpO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgbGV0IHBsYXlsaXN0VXJpOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGlmIChjb250ZXh0VXJpICYmIGlzUGxheWxpc3RVcmkoY29udGV4dFVyaSkpIHtcbiAgICBwbGF5bGlzdFVyaSA9IGNvbnRleHRVcmk7XG4gIH1cbiAgXG4gIGNyZWF0ZU1vZGFsKHRyYWNrVXJpcywgcGxheWxpc3RVcmkpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRBZGQodXJpczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHVyaXMuc29tZShpc1RyYWNrVXJpKTtcbn1cblxuY29uc3QgYnVsa0RlbGV0ZU1lbnVJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudS5JdGVtKFxuICBcIkRlbGV0ZSBmcm9tIFBsYXlsaXN0XCIsXG4gIGhhbmRsZU1lbnVDbGljayxcbiAgc2hvdWxkQWRkLFxuICBcImJsb2NrXCIgYXMgU3BpY2V0aWZ5Lkljb25cbik7XG5cbmJ1bGtEZWxldGVNZW51SXRlbS5yZWdpc3RlcigpOyJdLAogICJtYXBwaW5ncyI6ICI7OztBQUNVLElBQU0sUUFBUSxJQUFJLGNBQWM7QUFDaEMsTUFBTSxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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
