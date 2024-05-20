var me=Object.defineProperty;var ke=(s,e,t)=>e in s?me(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var W=(s,e,t)=>(ke(s,typeof e!="symbol"?e+"":e,t),t);import{s as ge,n as J,o as be,r as _e,e as we}from"../chunks/scheduler.BvLojk_z.js";import{S as ve,i as pe,y as q,z as Y,d as B,g as p,o as f,j as D,k as m,A as U,e as C,s as S,b as z,u as Ce,c as E,B as O,h as N,f as R,v as Ee,w as Pe,l as X,t as ye,a as Ie,x as Le,C as H,p as Q}from"../chunks/index.BVbBP3S1.js";function F(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}class Be{constructor(e=5){W(this,"code",[]);W(this,"codeLength");this.codeLength=e,this.generateCode()}generateCode(){this.code=Array.from({length:this.codeLength},()=>Math.floor(Math.random()*10))}getCode(){return this.code}checkGuess(e){if(e.length!==this.codeLength)throw new Error("Guess length does not match code length");return e.map((t,o)=>{const n=Math.abs(t-this.code[o]);return n===0?"green":n===1?"yellow":n===2?"orange":n===3?"red":"gray"})}}function Z(s,e,t){const o=s.slice();return o[2]=e[t],o[4]=t,o}function x(s){let e,t,o,n;return{c(){e=q("g"),t=q("rect"),this.h()},l(l){e=Y(l,"g",{transform:!0});var r=B(e);t=Y(r,"rect",{y:!0,width:!0,height:!0,fill:!0,class:!0}),B(t).forEach(p),r.forEach(p),this.h()},h(){f(t,"y",o=100-s[2]),f(t,"width","20"),f(t,"height","50"),f(t,"fill",n=s[1][s[4]]),f(t,"class","svelte-1aegubf"),f(e,"transform","translate("+(56+s[4]*25)+", 60)")},m(l,r){D(l,e,r),m(e,t)},p(l,r){r&1&&o!==(o=100-l[2])&&f(t,"y",o),r&2&&n!==(n=l[1][l[4]])&&f(t,"fill",n)},d(l){l&&p(e)}}}function Te(s){let e,t,o=F(s[0]),n=[];for(let l=0;l<o.length;l+=1)n[l]=x(Z(s,o,l));return{c(){e=q("svg"),t=q("rect");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=Y(l,"svg",{viewBox:!0,width:!0,height:!0});var r=B(e);t=Y(r,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,stroke:!0,"stroke-width":!0,class:!0}),B(t).forEach(p);for(let i=0;i<n.length;i+=1)n[i].l(r);r.forEach(p),this.h()},h(){f(t,"x","50"),f(t,"y","50"),f(t,"width","132"),f(t,"height","158"),f(t,"fill","#ccc"),f(t,"stroke","#000"),f(t,"stroke-width","2"),f(t,"class","svelte-1aegubf"),f(e,"viewBox","0 0 232 300"),f(e,"width","264"),f(e,"height","300")},m(l,r){D(l,e,r),m(e,t);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null)},p(l,[r]){if(r&3){o=F(l[0]);let i;for(i=0;i<o.length;i+=1){const h=Z(l,o,i);n[i]?n[i].p(h,r):(n[i]=x(h),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=o.length}},i:J,o:J,d(l){l&&p(e),U(n,l)}}}function Ve(s,e,t){let{pinPositions:o=[0,0,0,0,0]}=e,{correctPositions:n=["","","","",""]}=e;return s.$$set=l=>{"pinPositions"in l&&t(0,o=l.pinPositions),"correctPositions"in l&&t(1,n=l.correctPositions)},[o,n]}class Ge extends ve{constructor(e){super(),pe(this,e,Ve,Te,ge,{pinPositions:0,correctPositions:1})}}function $(s,e,t){const o=s.slice();return o[21]=e[t],o}function ee(s,e,t){const o=s.slice();return o[21]=e[t],o[24]=e,o[25]=t,o}function te(s,e,t){const o=s.slice();return o[25]=e[t],o}function le(s,e,t){const o=s.slice();return o[28]=e[t],o}function ne(s,e,t){const o=s.slice();return o[31]=e[t],o[25]=t,o}function se(s){let e,t=s[28].guess[s[25]]+"",o;return{c(){e=C("div"),o=z(t),this.h()},l(n){e=E(n,"DIV",{class:!0,style:!0});var l=B(e);o=R(l,t),l.forEach(p),this.h()},h(){f(e,"class","feedback-cell svelte-uor0c6"),Q(e,"background-color",s[31])},m(n,l){D(n,e,l),m(e,o)},p(n,l){l[0]&2&&t!==(t=n[28].guess[n[25]]+"")&&X(o,t),l[0]&2&&Q(e,"background-color",n[31])},d(n){n&&p(e)}}}function oe(s){let e,t,o=F(s[28].colors),n=[];for(let l=0;l<o.length;l+=1)n[l]=se(ne(s,o,l));return{c(){e=C("div");for(let l=0;l<n.length;l+=1)n[l].c();t=S(),this.h()},l(l){e=E(l,"DIV",{class:!0});var r=B(e);for(let i=0;i<n.length;i+=1)n[i].l(r);t=N(r),r.forEach(p),this.h()},h(){f(e,"class","feedback-row svelte-uor0c6")},m(l,r){D(l,e,r);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null);m(e,t)},p(l,r){if(r[0]&2){o=F(l[28].colors);let i;for(i=0;i<o.length;i+=1){const h=ne(l,o,i);n[i]?n[i].p(h,r):(n[i]=se(h),n[i].c(),n[i].m(e,t))}for(;i<n.length;i+=1)n[i].d(1);n.length=o.length}},d(l){l&&p(e),U(n,l)}}}function re(s){let e,t,o="You picked the lock!",n,l,r="Share",i,h;return{c(){e=C("div"),t=C("p"),t.textContent=o,n=S(),l=C("button"),l.textContent=r,this.h()},l(k){e=E(k,"DIV",{class:!0});var g=B(e);t=E(g,"P",{"data-svelte-h":!0}),O(t)!=="svelte-18bb638"&&(t.textContent=o),n=N(g),l=E(g,"BUTTON",{class:!0,"data-svelte-h":!0}),O(l)!=="svelte-12lghq3"&&(l.textContent=r),g.forEach(p),this.h()},h(){f(l,"class","share-button svelte-uor0c6"),f(e,"class","win-message svelte-uor0c6")},m(k,g){D(k,e,g),m(e,t),m(e,n),m(e,l),i||(h=H(l,"click",s[12]),i=!0)},p:J,d(k){k&&p(e),i=!1,h()}}}function ie(s){let e,t,o="You fail...",n,l,r="Share",i,h,k,g,_,v=F(s[0]),d=[];for(let u=0;u<v.length;u+=1)d[u]=ce(te(s,v,u));return{c(){e=C("div"),t=C("p"),t.textContent=o,n=S(),l=C("button"),l.textContent=r,i=S(),h=C("div"),k=C("div");for(let u=0;u<d.length;u+=1)d[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var w=B(e);t=E(w,"P",{"data-svelte-h":!0}),O(t)!=="svelte-1crkit9"&&(t.textContent=o),n=N(w),l=E(w,"BUTTON",{class:!0,"data-svelte-h":!0}),O(l)!=="svelte-12lghq3"&&(l.textContent=r),w.forEach(p),i=N(u),h=E(u,"DIV",{class:!0});var b=B(h);k=E(b,"DIV",{class:!0});var M=B(k);for(let A=0;A<d.length;A+=1)d[A].l(M);M.forEach(p),b.forEach(p),this.h()},h(){f(l,"class","share-button svelte-uor0c6"),f(e,"class","win-message svelte-uor0c6"),f(k,"class","feedback-row svelte-uor0c6"),f(h,"class","answer-container svelte-uor0c6")},m(u,w){D(u,e,w),m(e,t),m(e,n),m(e,l),D(u,i,w),D(u,h,w),m(h,k);for(let b=0;b<d.length;b+=1)d[b]&&d[b].m(k,null);g||(_=H(l,"click",s[12]),g=!0)},p(u,w){if(w[0]&1){v=F(u[0]);let b;for(b=0;b<v.length;b+=1){const M=te(u,v,b);d[b]?d[b].p(M,w):(d[b]=ce(M),d[b].c(),d[b].m(k,null))}for(;b<d.length;b+=1)d[b].d(1);d.length=v.length}},d(u){u&&(p(e),p(i),p(h)),U(d,u),g=!1,_()}}}function ce(s){let e,t=s[25]+"",o;return{c(){e=C("div"),o=z(t),this.h()},l(n){e=E(n,"DIV",{class:!0,style:!0});var l=B(e);o=R(l,t),l.forEach(p),this.h()},h(){f(e,"class","feedback-cell svelte-uor0c6"),Q(e,"background-color","Green")},m(n,l){D(n,e,l),m(e,o)},p(n,l){l[0]&1&&t!==(t=n[25]+"")&&X(o,t)},d(n){n&&p(e)}}}function ae(s){let e,t=F(s[0]),o=[];for(let n=0;n<t.length;n+=1)o[n]=ue(ee(s,t,n));return{c(){e=C("div");for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){e=E(n,"DIV",{class:!0});var l=B(e);for(let r=0;r<o.length;r+=1)o[r].l(l);l.forEach(p),this.h()},h(){f(e,"class","guess-container svelte-uor0c6")},m(n,l){D(n,e,l);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(e,null)},p(n,l){if(l[0]&773){t=F(n[0]);let r;for(r=0;r<t.length;r+=1){const i=ee(n,t,r);o[r]?o[r].p(i,l):(o[r]=ue(i),o[r].c(),o[r].m(e,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=t.length}},d(n){n&&p(e),U(o,n)}}}function ue(s){let e,t,o=s[25],n,l;const r=()=>s[15](e,o),i=()=>s[15](null,o);function h(...g){return s[16](s[25],...g)}function k(...g){return s[17](s[25],...g)}return{c(){e=C("input"),this.h()},l(g){e=E(g,"INPUT",{type:!0,maxlength:!0,class:!0}),this.h()},h(){f(e,"type","text"),f(e,"maxlength","1"),e.value=t=s[21]!==-1?s[21]:"",e.readOnly=!0,f(e,"class","svelte-uor0c6")},m(g,_){D(g,e,_),r(),n||(l=[H(e,"input",h),H(e,"keydown",k)],n=!0)},p(g,_){s=g,_[0]&1&&t!==(t=s[21]!==-1?s[21]:"")&&e.value!==t&&(e.value=t),o!==s[25]&&(i(),o=s[25],r())},d(g){g&&p(e),i(),n=!1,_e(l)}}}function he(s){let e,t,o="Enter",n,l,r,i='<svg fill="#000000" height="35px" width="26px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><g><path d="M490.667,64H133.077c-7.196,0-13.906,3.627-17.848,9.647L3.485,244.314c-4.647,7.098-4.647,16.274,0,23.372 l111.744,170.667c3.942,6.02,10.652,9.647,17.848,9.647h357.589c11.782,0,21.333-9.551,21.333-21.333V85.333 C512,73.551,502.449,64,490.667,64z M469.333,405.333H144.609L46.833,256l97.776-149.333h324.725V405.333z"></path><path d="M198.246,356.418c8.331,8.331,21.839,8.331,30.17,0l70.248-70.248l70.248,70.248c8.331,8.331,21.839,8.331,30.17,0 s8.331-21.839,0-30.17L328.834,256l70.248-70.248c8.331-8.331,8.331-21.839,0-30.17s-21.839-8.331-30.17,0l-70.248,70.248 l-70.248-70.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L268.495,256l-70.248,70.248 C189.915,334.58,189.915,348.087,198.246,356.418z"></path></g></g></g></g></svg>',h,k,g=F(Array.from({length:10}).map(de)),_=[];for(let v=0;v<g.length;v+=1)_[v]=fe($(s,g,v));return{c(){e=C("footer"),t=C("button"),t.textContent=o,n=S();for(let v=0;v<_.length;v+=1)_[v].c();l=S(),r=C("button"),r.innerHTML=i,this.h()},l(v){e=E(v,"FOOTER",{class:!0});var d=B(e);t=E(d,"BUTTON",{class:!0,"data-svelte-h":!0}),O(t)!=="svelte-jiris3"&&(t.textContent=o),n=N(d);for(let u=0;u<_.length;u+=1)_[u].l(d);l=N(d),r=E(d,"BUTTON",{class:!0,"data-svelte-h":!0}),O(r)!=="svelte-1pvk8ya"&&(r.innerHTML=i),d.forEach(p),this.h()},h(){f(t,"class","svelte-uor0c6"),f(r,"class","svelte-uor0c6"),f(e,"class","buttons svelte-uor0c6")},m(v,d){D(v,e,d),m(e,t),m(e,n);for(let u=0;u<_.length;u+=1)_[u]&&_[u].m(e,null);m(e,l),m(e,r),h||(k=[H(t,"click",s[10]),H(r,"click",s[11])],h=!0)},p(v,d){if(d[0]&5){g=F(Array.from({length:10}).map(de));let u;for(u=0;u<g.length;u+=1){const w=$(v,g,u);_[u]?_[u].p(w,d):(_[u]=fe(w),_[u].c(),_[u].m(e,l))}for(;u<_.length;u+=1)_[u].d(1);_.length=g.length}},d(v){v&&p(e),U(_,v),h=!1,_e(k)}}}function fe(s){let e,t=s[21]+"",o,n,l;function r(){return s[18](s[21])}return{c(){e=C("button"),o=z(t),this.h()},l(i){e=E(i,"BUTTON",{class:!0});var h=B(e);o=R(h,t),h.forEach(p),this.h()},h(){f(e,"class","svelte-uor0c6")},m(i,h){D(i,e,h),m(e,o),n||(l=H(e,"click",r),n=!0)},p(i,h){s=i},d(i){i&&p(e),n=!1,l()}}}function Me(s){let e,t,o="Lockle",n,l,r,i,h,k,g,_,v,d,u,w,b,M,A=F(s[1]),y=[];for(let c=0;c<A.length;c+=1)y[c]=oe(le(s,A,c));let I=s[3]&&re(s),T=s[4]&&ie(s),V=!s[3]&&!s[4]&&ae(s);w=new Ge({props:{pinPositions:s[6],correctPositions:s[7]}});let G=!s[3]&&!s[4]&&he(s);return{c(){e=C("main"),t=C("h1"),t.textContent=o,n=S(),l=C("h3"),r=z("Guesses left: "),i=z(s[5]),h=S(),k=C("div");for(let c=0;c<y.length;c+=1)y[c].c();g=S(),I&&I.c(),_=S(),T&&T.c(),v=S(),V&&V.c(),d=S(),u=C("div"),Ce(w.$$.fragment),b=S(),G&&G.c(),this.h()},l(c){e=E(c,"MAIN",{});var a=B(e);t=E(a,"H1",{"data-svelte-h":!0}),O(t)!=="svelte-1uda5oc"&&(t.textContent=o),n=N(a),l=E(a,"H3",{});var L=B(l);r=R(L,"Guesses left: "),i=R(L,s[5]),L.forEach(p),h=N(a),k=E(a,"DIV",{class:!0});var P=B(k);for(let K=0;K<y.length;K+=1)y[K].l(P);P.forEach(p),g=N(a),I&&I.l(a),_=N(a),T&&T.l(a),v=N(a),V&&V.l(a),d=N(a),u=E(a,"DIV",{class:!0});var j=B(u);Ee(w.$$.fragment,j),j.forEach(p),b=N(a),G&&G.l(a),a.forEach(p),this.h()},h(){f(k,"class","feedback-container svelte-uor0c6"),f(u,"class","feedback-lock-container svelte-uor0c6")},m(c,a){D(c,e,a),m(e,t),m(e,n),m(e,l),m(l,r),m(l,i),m(e,h),m(e,k);for(let L=0;L<y.length;L+=1)y[L]&&y[L].m(k,null);m(e,g),I&&I.m(e,null),m(e,_),T&&T.m(e,null),m(e,v),V&&V.m(e,null),m(e,d),m(e,u),Pe(w,u,null),m(e,b),G&&G.m(e,null),M=!0},p(c,a){if((!M||a[0]&32)&&X(i,c[5]),a[0]&2){A=F(c[1]);let P;for(P=0;P<A.length;P+=1){const j=le(c,A,P);y[P]?y[P].p(j,a):(y[P]=oe(j),y[P].c(),y[P].m(k,null))}for(;P<y.length;P+=1)y[P].d(1);y.length=A.length}c[3]?I?I.p(c,a):(I=re(c),I.c(),I.m(e,_)):I&&(I.d(1),I=null),c[4]?T?T.p(c,a):(T=ie(c),T.c(),T.m(e,v)):T&&(T.d(1),T=null),!c[3]&&!c[4]?V?V.p(c,a):(V=ae(c),V.c(),V.m(e,d)):V&&(V.d(1),V=null);const L={};a[0]&64&&(L.pinPositions=c[6]),a[0]&128&&(L.correctPositions=c[7]),w.$set(L),!c[3]&&!c[4]?G?G.p(c,a):(G=he(c),G.c(),G.m(e,null)):G&&(G.d(1),G=null)},i(c){M||(ye(w.$$.fragment,c),M=!0)},o(c){Ie(w.$$.fragment,c),M=!1},d(c){c&&p(e),U(y,c),I&&I.d(),T&&T.d(),V&&V.d(),Le(w),G&&G.d()}}}function De(){return/Mobi|Android/i.test(navigator.userAgent)}function Se(s){return{green:"🟩",yellow:"🟨",orange:"🟧",red:"🟥",gray:"⬛"}[s]||"⬛"}function Ne(s){return s.map(e=>e.colors.map(Se).join("")).join(`
`)}const de=(s,e)=>e;function Ae(s,e,t){const n="always";let l,r=[-1,-1,-1,-1,-1],i=[],h=[],k=!1,g=!1,_=6,v=[0,0,0,0,0],d=["","","","",""];be(()=>{l=new Be,h[0].focus()});function u(c,a){const L=c.target,P=parseInt(L.value);!isNaN(P)&&P>=0&&P<=9?(t(0,r[a]=P,r),a<3&&h[a+1].focus()):L.value=""}function w(c,a){c.key==="Enter"?b():c.key==="Backspace"&&(a>0?h[a-1].focus():(t(0,r[a]=-1,r),t(2,h[a].value="",h),h[a].focus()))}function b(){if(r.every(c=>c!==-1)){t(5,_--,_);const c=l.checkGuess(r);if(t(1,i=[...i,{guess:[...r],colors:c}]),M(c),c.every(a=>a==="green"))t(3,k=!0);else if(t(0,r=[-1,-1,-1,-1,-1]),h[0].focus(),_===0){t(4,g=!0),t(0,r=l.getCode());const a=l.checkGuess(r);M(a)}}}function M(c){t(6,v=r.map((a,L)=>(10-a)*10)),t(7,d=c.map(a=>a))}function A(){const c=r.length-1-r.slice().reverse().findIndex(a=>a!==-1);c>=0&&c<r.length&&(t(0,r[c]=-1,r),t(2,h[c].value="",h),h[c].focus())}function y(){const a=`Lockle #1:
${Ne(i)}

Play here: https://gazump.github.io`;De()&&navigator.share?navigator.share({title:"Lockle Guess",text:a}):navigator.clipboard.writeText(a).then(()=>{alert("Copied to clipboard!")})}function I(c,a){we[c?"unshift":"push"](()=>{h[a]=c,t(2,h)})}return[r,i,h,k,g,_,v,d,u,w,b,A,y,!0,n,I,(c,a)=>u(a,c),(c,a)=>w(a,c),c=>{const a=r.findIndex(L=>L===-1);a!==-1&&(t(0,r[a]=c,r),t(2,h[a].value=c.toString(),h),a<3&&h[a+1].focus())}]}class Ue extends ve{constructor(e){super(),pe(this,e,Ae,Me,ge,{prerender:13,trailingSlash:14},null,[-1,-1])}get prerender(){return this.$$.ctx[13]}get trailingSlash(){return this.$$.ctx[14]}}export{Ue as component};