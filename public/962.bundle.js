"use strict";(self.webpackChunkJuicebeam_Front=self.webpackChunkJuicebeam_Front||[]).push([[962],{4998:(t,e,n)=>{n.d(e,{DI:()=>a,O$:()=>y,UI:()=>g,cS:()=>S,xH:()=>p,WH:()=>l,KN:()=>m});var r=n(5466);function a(){return r.createElement("canvas",{id:"confetti-canvas"})}var o=["DodgerBlue","OliveDrab","Gold","Pink","SlateBlue","LightBlue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"],u=!1,c=null,i=[],s=0;function f(t,e,n){return t.colors=o[Math.random()*o.length|0],t.x=Math.random()*e,t.y=Math.random()*n-n,t.diameter=10*Math.random()+5,t.tilt=10*Math.random()-10,t.tiltAngleIncrement=.07*Math.random()+.05,t.tiltAngle=0,t}function p(){var t=window.innerWidth,e=window.innerHeight;window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,16.6666667)},null==document.querySelector("#confetti-canvas")&&(document.createElement("canvas"),n.setAttribute("id","confetti-canvas"),document.getElementById("effect-container").appendChild(n));var n=document.querySelector("#confetti-canvas");n.width=t,n.height=e,window.addEventListener("resize",(function(){n.width=window.innerWidth,n.height=window.innerHeight}),!0);for(var r=n.getContext("2d");i.length<150;)i.push(f({},t,e));u=!0,null===c&&function t(){r.clearRect(0,0,window.innerWidth,window.innerHeight),0===i.length?c=null:(function(){var t,e=window.innerWidth,n=window.innerHeight;s+=.01;for(var r=0;r<i.length;r++)t=i[r],!u&&t.y<-15?t.y=n+100:(t.tiltAngle+=t.tiltAngleIncrement,t.x+=Math.sin(s),t.y+=.5*(Math.cos(s)+t.diameter+2),t.tilt=15*Math.sin(t.tiltAngle)),(t.x>e+20||t.x<-20||t.y>n)&&(u&&i.length<=150?f(t,e,n):(i.splice(r,1),r--))}(),function(t){for(var e,n,r=0;r<i.length;r++)e=i[r],t.beginPath(),t.lineWidth=e.diameter,t.strokeStyle=e.colors,n=e.x+e.tilt,t.moveTo(n+e.diameter/2,e.y),t.lineTo(n,e.y+e.tilt+e.diameter/2),t.stroke()}(r),c=requestAnimFrame(t))}()}function l(){u=!1}var h=n(5043),d="Welcome to Juicebeam!";function m(t,e){console.log(e,t),null!=t&&null!=e?t!={}&&e!={}&&(d=t+" activated the "+e+" event!"):setTimeout((function(){d="Welcome to JuiceBeam!"}),2e3)}function g(){var t=r.useState(!1),e=(0,h.Z)(t,2),n=e[0],a=e[1],o=d;function u(){d!=o&&a(!n),setTimeout((function(){u()}),1e3)}function c(){return d}return(0,r.useEffect)((function(){console.log("Reloaded Ticker"),u()}),[d]),r.createElement(r.Fragment,null,r.createElement("div",{className:"ticker-title"},r.createElement("span",null,"JuiceBeam"),r.createElement("span",null,"JuiceBeam"),r.createElement("span",null,"JuiceBeam"),r.createElement("span",null,"JuiceBeam"),r.createElement("span",null,"JuiceBeam"),r.createElement("span",null,"JuiceBeam"),r.createElement("span",null,"JuiceBeam"),r.createElement("span",null,"JuiceBeam"),r.createElement("span",null,"JuiceBeam")),r.createElement("div",{className:"ticker"},r.createElement("span",{id:"TickerText"},r.createElement(c,null))))}function y(){return r.createElement("video",{width:"100%",height:"100%",id:"fire-vid"},r.createElement("source",{src:"../src/images/fire_VP8.webm",type:"video/webm"}))}function S(t){var e=document.querySelector("#fire-vid");t?e.play():(e.currentTime=0,e.pause())}},7195:(t,e,n)=>{n.d(e,{z:()=>u});var r=n(3862),a=n(9625),o=n(3267),u={getAllUsers:c,getSortedUsers:i,getSortedVideos:s,getSettings:f,updateSettings:function(t){a.d.updateSettings(t).then((function(){return o.h.dispatch(f)})).then((function(){t.channelName&&o.h.dispatch(s(o.h.getState().videos.params))}))},updateUser:function(t,e){a.d.updateUser(t).then((function(){return o.h.dispatch(c)})).then((function(){return o.h.dispatch(i(e))}))},addNewUser:function(t){return function(e){e(function(t){return{type:r.A.ADDNEW_REQUEST,params:t}}(t)),a.d.addUser(t).then((function(n){e(function(t){return{type:r.A.ADDNEW_SUCCESS,user:t}}(n)),e(c),e(i(t))}),(function(t){return e(function(t){return{type:r.A.ADDNEW_FAILURE,error:t}}(t.toString()))}))}},deleteUser:function(t,e){a.d.deleteUser(t).then((function(){return o.h.dispatch(c)})).then((function(){return o.h.dispatch(i(e))}))}};function c(){return function(t){a.d.getAllUsers().then((function(e){return t(function(t){return{type:r.A.GETALL_SUCCESS,users:t}}(e))}),(function(e){return t(function(t){return{type:r.A.GETALL_FAILURE,error:t}}(e.toString()))}))}}function i(t){return function(e){a.d.getSortedUsers(t).then((function(t){return e(function(t){return{type:r.A.GETSORTED_SUCCESS,users:t}}(t))}),(function(t){return e(function(t){return{type:r.A.GETSORTED_FAILURE,error:t}}(t.toString()))}))}}function s(t){return function(e){a.d.getSortedVideos(t).then((function(t){return e(function(t){return{type:"GETVIDEOS_SUCCESS",videos:t}}(t))}),(function(t){return e(function(t){return{type:"GETVIDEOS__FAILURE",error:t}}(t.toString()))}))}}function f(){a.d.getSettings().then((function(t){return o.h.dispatch(function(t){return{type:"GETSETTINGS_SUCCESS",settings:t}}(t))}),(function(t){return o.h.dispatch(function(t){return{type:"GETSETTINGS__FAILURE",error:t}}(t.toString()))}))}},5962:(t,e,n)=>{n.d(e,{zR:()=>g.z,Iu:()=>a,hI:()=>d});var r=n(3862),a={success:function(t){return{type:r.k.SUCCESS,message:t}},error:function(t){return{type:r.k.ERROR,message:t}},clear:function(){return{type:r.k.CLEAR}}},o=n(4390),u=n(4264),c=n.n(u),i=n(9625),s=n(3267),f=n(1974),p=n.n(f),l=n(714),h=n(4998),d={login:function(t,e,n,u,f){return function(){var u=(0,o.Z)(c().mark((function u(f){return c().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:f((h={username:t},{type:r.A.LOGIN_REQUEST,user:h})),i.W.login(t,e).then(function(){var t=(0,o.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(p(e));case 2:s.m8.push(n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),function(){var t=(0,o.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(l(e.toString()));case 2:return t.next=4,f(a.error(e.toString()));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return u.stop()}var h}),u)})));return function(t){return u.apply(this,arguments)}}();function p(t){return u(!0),f(!1),{type:r.A.LOGIN_SUCCESS,user:t}}function l(t){return{type:r.A.LOGIN_FAILURE,error:t}}},twitchAuth:function(){var t="https://id.twitch.tv/oauth2/authorize?client_id=2ycvvf2zsvwyvso2b8q9i9mjajs9yd&redirect_uri=http://localhost:8080"+location.pathname+"&response_type=token&scope=user:read:email%20user:read:subscriptions";window.location.replace(t)},twitchHandler:function(){var t=window.location.hash.substr(1),e=new URLSearchParams(t).get("access_token");return function(t){i.W.twitchHandler(e).then((function(e){var n;t((n=e,{type:r.A.LOGIN_SUCCESS,user:n})),t(a.success(e.toString()))}),(function(e){t(function(t){return{type:r.A.LOGIN_FAILURE,error:t}}(e.toString())),t(a.error(e.toString()))}))}},logout:function(){return i.W.logout(),{type:r.A.LOGOUT}},resetPassword:function(t,e,n){var o=JSON.parse(localStorage.getItem("user")).username;return function(u){var c;u((c={username:o},{type:r.A.RESET_REQUEST,user:c})),n!=e?u(a.error("Passwords do not match")):i.W.resetPassword(t,e).then((function(t){u(function(t){return{type:r.A.RESET_SUCCESS,response:t}}(t)),u(a.success(t.toString()))}),(function(t){u(function(t){return{type:r.A.RESET_FAILURE,error:t}}(t.toString())),u(a.error(t.toString()))}))}},register:function(t){return function(e){e(function(t){return{type:r.A.REGISTER_REQUEST,user:t}}(t)),i.W.register(t).then((function(t){e({type:r.A.REGISTER_SUCCESS,user:void 0}),e(a.success("Registration successful"))}),(function(t){e(function(t){return{type:r.A.REGISTER_FAILURE,error:t}}(t.toString())),e(a.error(t.toString()))}))}},getEvents:function(){return i.W.getEvents()},reqSettings:function(){return i.W.reqSettings()},getVideos:function(t){return i.W.getVideoData(t)},runEvent:function(t){return i.W.runEvent(t)},checkBalance:function(t){return i.W.checkBalance(t)},updateRank:function(t){var e=JSON.parse(localStorage.getItem("user")).username;return function(n){var o;n((o={username:e},{type:r.A.RANKUPDATE_REQUEST,user:o})),i.W.updateRank().then((function(e){n(a.success("Your rank was updated successfully!")),t()}),(function(t){n(function(t){return{type:r.A.RANKUPDATE_FAILURE,error:t}}(t.toString())),n(a.error(t.toString()))}))}},adminVerify:function(){return i.W.adminVerify()},userVerify:function(){return i.W.userVerify()},updateLocalUser:m,notifyListener:function(){var t="".concat(p().apiUrl,"/notify"),e=(0,l.ZP)(t);console.log("Waiting for new notifications from server"),e.on("connect",(function(){console.log("CONNECTED")})),e.on("event",(function(t){if(console.log(t),"off"!=t.name){switch(t.event){case"Confetti":(0,h.xH)();break;case"Fire":(0,h.cS)(!0)}(0,h.KN)(t.name,t.event)}})),e.on("off",(function(){(0,h.WH)(),(0,h.cS)(!1),s.h.dispatch(m()),(0,h.KN)(null,null)})),e.on("disconnect",(function(){console.log("LOST CONNECTION")}))}};function m(t){var e=JSON.parse(localStorage.getItem("user")).username;return function(n){var a;n((a={username:e},{type:r.A.UPDATE_REQUEST,user:a})),localStorage.getItem("user")?i.W.updateLocalUser().then((function(e){n(function(t){return{type:r.A.UPDATE_SUCCESS,user:t}}(e)),t&&t()}),(function(t){n(function(t){return{type:r.A.UPDATE_FAILURE,error:t}}(t.toString()))})):console.log("No user logged in. Cannot Update.")}}var g=n(7195)},9625:(t,e,n)=>{n.d(e,{d:()=>T,W:()=>l});var r=n(8270),a=n(4390),o=n(4264),u=n.n(o),c=n(1974),i=n.n(c),s=n(3267);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={login:function(t,e){return h.apply(this,arguments)},twitchHandler:function(t){return m.apply(this,arguments)},updateLocalUser:function(){return d.apply(this,arguments)},logout:function(){localStorage.removeItem("user"),location.pathname.includes("/account")},resetPassword:function(t,e){return g.apply(this,arguments)},register:function(t){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch("".concat(i().apiUrl,"/users/register"),e).then(w)},getEvents:function(){var t={method:"GET",headers:(0,s.zl)()};return fetch("".concat(i().apiUrl,"/events"),t).then(w).then((function(t){return t}))},reqSettings:function(){var t={method:"GET",headers:(0,s.zl)()};return fetch("".concat(i().apiUrl,"/admin/settings/user"),t).then(w).then((function(t){return t}))},getVideoData:function(t){return y.apply(this,arguments)},runEvent:function(t){var e={method:"POST",headers:p(p({},(0,s.zl)()),{},{"Content-Type":"application/json"}),body:JSON.stringify({eventname:t})};return fetch("".concat(i().apiUrl,"/events/run"),e).then(w).then((function(t){return t}))},checkBalance:function(t){var e={method:"GET",headers:(0,s.zl)()};return fetch("".concat(i().apiUrl,"/users/balance/").concat(t),e).then(w).then((function(t){return t}))},updateRank:function(){return S.apply(this,arguments)},adminVerify:function(t){return v.apply(this,arguments)},userVerify:function(t){return E.apply(this,arguments)}};function h(){return(h=(0,a.Z)(u().mark((function t(e,n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:n})},t.abrupt("return",fetch("".concat(i().apiUrl,"/users/authenticate"),r).then(w).then((function(t){return localStorage.setItem("user",JSON.stringify(t)),t})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return(d=(0,a.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",headers:(0,s.zl)()},t.next=3,fetch("".concat(i().apiUrl,"/users/update"),e).then(w).then((function(t){var e=JSON.stringify(t);return localStorage.setItem("user",e),JSON.parse(localStorage.getItem("user"))})).catch((function(){return!1}));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return(m=(0,a.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accessCode:e})},t.abrupt("return",fetch("".concat(i().apiUrl,"/users/twitch"),n).then(w).then((function(t){return localStorage.setItem("user",JSON.stringify(t.user)),console.log(t),"Login Successful"})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return(g=(0,a.Z)(u().mark((function t(e,n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={method:"POST",headers:p(p({},(0,s.zl)()),{},{"Content-Type":"application/json"}),body:JSON.stringify({password:e,newPassword:n})},t.abrupt("return",fetch("".concat(i().apiUrl,"/users/password"),r).then(w).then((function(t){return t})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return(y=(0,a.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",headers:(0,s.zl)()},t.abrupt("return",fetch("".concat(i().apiUrl,"/videos/").concat(e),n).then(w).then((function(t){return t})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=(0,a.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",headers:(0,s.zl)()},t.next=3,fetch("".concat(i().apiUrl,"/users/rank"),e).then(w).then((function(t){return t}));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return(v=(0,a.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",headers:(0,s.zl)()},t.abrupt("return",fetch("".concat(i().apiUrl,"/admin/"),n).then(w).then((function(t){return t})).catch((function(){return!1})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return(E=(0,a.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",headers:(0,s.zl)()},t.abrupt("return",fetch("".concat(i().apiUrl,"/users/"),n).then(w).then((function(t){return t})).catch((function(){return!1})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return t.text().then((function(e){var n=e&&JSON.parse(e);if(!t.ok){401===t.status&&console.log("Error 401!");var r=n&&n.message||t.statusText;return Promise.reject(r)}return n}))}function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var T={getAllUsers:function(){var t={method:"GET",headers:(0,s.zl)()};return fetch("".concat(i().apiUrl,"/admin/users/list/all-data"),t).then(I).then((function(t){return{allData:t[1]}}))},getSortedUsers:function(t){return b.apply(this,arguments)},getSortedVideos:function(t){return A.apply(this,arguments)},getSettings:function(){return x.apply(this,arguments)},updateSettings:function(t){return C.apply(this,arguments)},getUser:function(t){return k.apply(this,arguments)},updateUser:function(t){return P.apply(this,arguments)},addUser:function(t){return R.apply(this,arguments)},deleteUser:function(t){return N.apply(this,arguments)}};function b(){return(b=(0,a.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",headers:(0,s.zl)()},t.next=3,fetch("".concat(i().apiUrl,"/admin/users/list/data/").concat(new URLSearchParams(e)),n).then(I).then((function(t){return{params:e,data:t[1].users,totalPages:t[1].total}}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(){return(A=(0,a.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",headers:(0,s.zl)()},t.next=3,fetch("".concat(i().apiUrl,"/admin/videos/list/").concat(new URLSearchParams(e)),n).then(I).then((function(t){return{data:t[1].videos,allData:t[1].allData,total:t[1].total,params:e}}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=(0,a.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",headers:(0,s.zl)()},t.next=3,fetch("".concat(i().apiUrl,"/admin/users/").concat(e),n).then(I);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return(P=(0,a.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"PUT",headers:O(O({},(0,s.zl)()),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)},t.next=3,fetch("".concat(i().apiUrl,"/admin/users/update"),n).then(I);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(){return(R=(0,a.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:O(O({},(0,s.zl)()),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)},t.abrupt("return",fetch("".concat(i().apiUrl,"/admin/users/add-user"),n).then(I));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(){return(C=(0,a.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:O(O({},(0,s.zl)()),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)},t.abrupt("return",fetch("".concat(i().apiUrl,"/admin/settings"),n).then(I));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=(0,a.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",headers:(0,s.zl)()},t.abrupt("return",fetch("".concat(i().apiUrl,"/admin/settings"),e).then(I).then((function(t){return{api:t[1].api,accounts:t[1].accounts,videoParam:t[1].videoParam,eventParam:t[1].eventParam}})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=(0,a.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"DELETE",headers:(0,s.zl)()},t.next=3,fetch("".concat(i().apiUrl,"/admin/users/delete/").concat(e),n).then(I);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(t){return t.text().then((function(e){var n=e&&JSON.parse(e);if(!t.ok){401===t.status&&console.log("Error 401!");var r=n&&n.message||t.statusText;return Promise.reject(r)}return n}))}}}]);