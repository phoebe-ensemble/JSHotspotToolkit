/*
 * IMPORTANT: Your use of this software indicates your acceptance of the terms
 * found at http://www.adobe.com/products/eulas/tou_typekit NOTE THAT YOUR
 * RIGHTS TO THIS SOFTWARE ARE LIMITED. USE AT YOUR OWN RISK. For font license
 * information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"f":"//use.edgefonts.net/c/cf8d93/1w;neuton,2,WTh:R:i4,WTj:R:n4,WTf:R:n7/{format}{/extras*}","fi":[15791,15788,15790],"fn":["neuton",["i4","n4","n7"]],"ht":"tk","p":"//p.typekit.net/p.gif?s=4&h={host}&f=15791.15788.15790&app={app}&_={_}","ps":4};
/*{"k":"1.11.7","created":"2015-01-28 10:26:02 UTC"}*/
;(function(window,document,undefined){
function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function g(a,b,c){g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return g.apply(null,arguments)}var ca=Date.now||function(){return+new Date};
function da(a,b){this.na=a;this.X=b||a;this.I=this.X.document}da.prototype.createElement=function(a,b,c){a=this.I.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.I.createTextNode(c));return a};function ea(a,b,c){a=a.I.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}function fa(a,b){function c(){a.I.body?b():setTimeout(c,0)}c()}
function l(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,h=0;h<d.length;h+=1)if(b[e]===d[h]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(h=0;h<c.length;h+=1)if(d[e]===c[h]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ga(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ha(a){if("string"===typeof a.qa)return a.qa;var b=a.X.location.protocol;"about:"==b&&(b=a.na.location.protocol);return"https:"==b?"https:":"http:"}function ia(a,b){/^http(s)?:$/.test(b)&&(a.qa=b)}function ja(a){return a.X.location.hostname||a.na.location.hostname}function ka(a,b,c){b=a.createElement("link",{rel:"stylesheet",href:b});var d=!1;b.onload=function(){d||(d=!0,c&&c(null))};b.onerror=function(){d||(d=!0,c&&c(Error("Stylesheet failed to load")))};ea(a,"head",b)}
function la(a,b,c){var d=a.I.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=!1;e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&d.removeChild(e))};d.appendChild(e);window.setTimeout(function(){f||(f=!0,c&&c(Error("Script load timeout")))},5E3)}}function m(a){this.ua=a}
function p(a,b,c,d){this.m=null!=a?a:null;this.q=null!=b?b:null;this.P=null!=c?c:null;this.l=null!=d?d:null}var ma=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;p.prototype.compare=function(a){return this.m>a.m||this.m===a.m&&this.q>a.q||this.m===a.m&&this.q===a.q&&this.P>a.P?1:this.m<a.m||this.m===a.m&&this.q<a.q||this.m===a.m&&this.q===a.q&&this.P<a.P?-1:0};function q(a,b){return-1===a.compare(b)}function t(a,b){return 0===a.compare(b)||1===a.compare(b)}
function v(a,b){return 0===a.compare(b)}p.prototype.toString=function(){return[this.m,this.q||"",this.P||"",this.l||""].join("")};function w(a){a=ma.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new p(b,c,d,e)}
function x(a,b,c,d,e,f,h,k){this.Y=a;this.v=b;this.J=c;this.T=d;this.n=e;this.h=f;this.ca=h;this.B=k}x.prototype.getName=function(){return this.Y};function na(a,b){this.e=a;this.S=b}var oa=new x("Unknown",new p,"Unknown",new p,"Unknown",new p,void 0,new m(!1));
na.prototype.parse=function(){var a;if(-1!=this.e.indexOf("MSIE")||-1!=this.e.indexOf("Trident/")){a=y(this);var b=w(z(this)),c=null,d=null,e=null,e=A(this.e,/Trident\/([\d\w\.]+)/,1),f=B(this.S),c=-1!=this.e.indexOf("MSIE")?w(A(this.e,/MSIE ([\d\w\.]+)/,1)):w(A(this.e,/rv:([\d\w\.]+)/,1));""!=e?(d="Trident",e=w(e)):(d="Unknown",e=new p);a=new x("MSIE",c,d,e,a,b,f,new m(!1))}else if(-1!=this.e.indexOf("Opera"))a:if(a="Unknown",b=w(A(this.e,/Presto\/([\d\w\.]+)/,1)),c=w(z(this)),d=B(this.S),null!==
b.m?a="Presto":(-1!=this.e.indexOf("Gecko")&&(a="Gecko"),b=w(A(this.e,/rv:([^\)]+)/,1))),-1!=this.e.indexOf("Opera Mini/"))f=w(A(this.e,/Opera Mini\/([\d\.]+)/,1)),a=new x("OperaMini",f,a,b,y(this),c,d,new m(!1));else{if(-1!=this.e.indexOf("Version/")&&(f=w(A(this.e,/Version\/([\d\.]+)/,1)),null!==f.m)){a=new x("Opera",f,a,b,y(this),c,d,new m(!1));break a}f=w(A(this.e,/Opera[\/ ]([\d\.]+)/,1));a=null!==f.m?new x("Opera",f,a,b,y(this),c,d,new m(!1)):new x("Opera",new p,a,b,y(this),c,d,new m(!1))}else/OPR\/[\d.]+/.test(this.e)?
a=pa(this):/AppleWeb(K|k)it/.test(this.e)?a=pa(this):-1!=this.e.indexOf("Gecko")?(a="Unknown",b=new p,c=w(z(this)),-1!=this.e.indexOf("Firefox")?(a="Firefox",b=w(A(this.e,/Firefox\/([\d\w\.]+)/,1))):-1!=this.e.indexOf("Mozilla")&&(a="Mozilla"),d=w(A(this.e,/rv:([^\)]+)/,1)),a=new x(a,b,"Gecko",d,y(this),c,B(this.S),new m(!1))):a=oa;return a};
function y(a){var b=A(a.e,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=A(a.e,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function z(a){var b=A(a.e,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=A(a.e,/Windows Phone( OS)? ([^;)]+)/,2))||(b=A(a.e,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=A(a.e,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=A(a.e,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function pa(a){var b=y(a),c=w(z(a)),d=w(A(a.e,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new p,f="Unknown";/OPR\/[\d.]+/.test(a.e)?e="Opera":-1!=a.e.indexOf("Chrome")||-1!=a.e.indexOf("CrMo")||-1!=a.e.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.e)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.e.indexOf("PhantomJS")?e="PhantomJS":-1!=a.e.indexOf("Safari")?e="Safari":-1!=a.e.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.e.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
e?f="Unknown":"Silk"==e?f=A(a.e,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=A(a.e,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.e.indexOf("Version/")?f=A(a.e,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=A(a.e,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=A(a.e,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=A(a.e,/PhantomJS\/([\d.]+)/,1));f=w(f);return new x(e,f,"AppleWebKit",d,b,c,B(a.S),new m(536>d.m||536==d.m&&11>d.q))}function A(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function B(a){if(a.documentMode)return a.documentMode}
function qa(a){this.Da=a||"-"}qa.prototype.l=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Da)};function ra(a,b){this.g=a;this.t=a.X.document.documentElement;this.$=b;this.p="wf";this.o=new qa("-");this.ya=!1!==b.events;this.F=!1!==b.classes}function sa(a){if(a.F){var b=ga(a.t,a.o.l(a.p,"active")),c=[],d=[a.o.l(a.p,"loading")];b||c.push(a.o.l(a.p,"inactive"));l(a.t,c,d)}C(a,"inactive")}
function C(a,b,c){if(a.ya&&a.$[b])if(c)a.$[b](c.getName(),D(c));else a.$[b]()}function E(a,b){this.Y=a;this.ea=4;this.Z="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.Z=c[1],this.ea=parseInt(c[2],10))}E.prototype.getName=function(){return this.Y};function D(a){return a.Z+a.ea}function F(a,b){this.g=a;this.N=b;this.w=this.g.createElement("span",{"aria-hidden":"true"},this.N)}function ta(a){ea(a.g,"body",a.w)}
function ua(a){var b;b=[];for(var c=a.Y.split(/,\s*/),d=0;d<c.length;d++){var e=c[d].replace(/['"]/g,"");-1==e.indexOf(" ")?b.push(e):b.push("'"+e+"'")}b=b.join(",");c="normal";"o"===a.Z?c="oblique":"i"===a.Z&&(c="italic");return"display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b+";"+("font-style:"+c+";font-weight:"+(a.ea+"00")+";")}
F.prototype.remove=function(){var a=this.w;a.parentNode&&a.parentNode.removeChild(a)};function va(a,b,c,d,e,f,h,k){this.fa=a;this.Ca=b;this.g=c;this.A=d;this.N=k||"BESbswy";this.B=e;this.O={};this.da=f||3E3;this.oa=h||null;this.M=this.L=null;a=new F(this.g,this.N);ta(a);for(var n in G)G.hasOwnProperty(n)&&(b=new E(G[n],D(this.A)),b=ua(b),a.w.style.cssText=b,this.O[G[n]]=a.w.offsetWidth);a.remove()}var G={Ra:"serif",Qa:"sans-serif",Ma:"monospace"};
va.prototype.start=function(){this.L=new F(this.g,this.N);ta(this.L);this.M=new F(this.g,this.N);ta(this.M);this.Ha=ca();var a=new E(this.A.getName()+",serif",D(this.A)),a=ua(a);this.L.w.style.cssText=a;a=new E(this.A.getName()+",sans-serif",D(this.A));a=ua(a);this.M.w.style.cssText=a;wa(this)};function xa(a,b,c){for(var d in G)if(G.hasOwnProperty(d)&&b===a.O[G[d]]&&c===a.O[G[d]])return!0;return!1}
function wa(a){var b=a.L.w.offsetWidth,c=a.M.w.offsetWidth;b===a.O.serif&&c===a.O["sans-serif"]||a.B.ua&&xa(a,b,c)?ca()-a.Ha>=a.da?a.B.ua&&xa(a,b,c)&&(null===a.oa||a.oa.hasOwnProperty(a.A.getName()))?ya(a,a.fa):ya(a,a.Ca):za(a):ya(a,a.fa)}function za(a){setTimeout(g(function(){wa(this)},a),25)}function ya(a,b){a.L.remove();a.M.remove();b(a.A)}function Aa(a,b,c,d){this.g=b;this.C=c;this.ba=0;this.ta=this.ma=!1;this.da=d;this.B=a.B}
Aa.prototype.za=function(a){var b=this.C;b.F&&l(b.t,[b.o.l(b.p,a.getName(),D(a).toString(),"active")],[b.o.l(b.p,a.getName(),D(a).toString(),"loading"),b.o.l(b.p,a.getName(),D(a).toString(),"inactive")]);C(b,"fontactive",a);this.ta=!0;Ba(this)};
Aa.prototype.Aa=function(a){var b=this.C;if(b.F){var c=ga(b.t,b.o.l(b.p,a.getName(),D(a).toString(),"active")),d=[],e=[b.o.l(b.p,a.getName(),D(a).toString(),"loading")];c||d.push(b.o.l(b.p,a.getName(),D(a).toString(),"inactive"));l(b.t,d,e)}C(b,"fontinactive",a);Ba(this)};function Ba(a){0==--a.ba&&a.ma&&(a.ta?(a=a.C,a.F&&l(a.t,[a.o.l(a.p,"active")],[a.o.l(a.p,"loading"),a.o.l(a.p,"inactive")]),C(a,"active")):sa(a.C))}function H(){this.G=this.Q=-1}H.prototype.now=function(){return(new Date).getTime()};
H.prototype.start=function(){this.Q=this.now();this.G=-1};H.prototype.stop=function(){this.G=this.now()};function Ca(){var a=[{name:"font-family",value:I.c[J+1]}];this.Fa=[I.c[J]];this.ia=a}function Da(a){for(var b=a.Fa.join(","),c=[],d=0;d<a.ia.length;d++){var e=a.ia[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function Ea(a){this.g=a}Ea.prototype.toString=function(){return encodeURIComponent(ja(this.g))};function Fa(a,b){this.r=a;this.s=b}
Fa.prototype.toString=function(){for(var a=[],b=0;b<this.s.length;b++)for(var c=this.s[b],d=c.D(),c=c.D(this.r),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=!0;break a}f=!1}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)b.unshift(parseInt(a.slice(0>d-4?0:d-4,d),2).toString(16));return b.join("")};function K(a){this.Ja=a}
K.prototype.l=function(a,b){var c=b||{},d=this.Ja.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Ga(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d].toString());return{format:a,extras:c}}function Ha(a,b){this.K=a;this.V=b;this.ka={};this.ja={}}Ha.prototype.D=function(a){return a?(this.ka[a]||this.V).slice(0):this.V.slice(0)};
function Ia(a,b,c){for(var d=[],e=a.K.split(",")[0].replace(/"|'/g,""),f=a.D(),h,k=[],n={},s=0;s<f.length;s++)h=f[s],0<h.length&&!n[h]&&(n[h]=!0,k.push(h));c=c.ra?c.ra(e,k,d):k;a.ka[b]=c;a.ja[b]=d}function Ja(a,b){for(var c=a.D(b),d=a.ja[b]||[],e=[],f=0;f<c.length;f++)e.push(new E(a.K,c[f]));for(f=0;f<d.length;f++)if(c=d[f].K,c!==a.K)for(var h=d[f].D(),k=0;k<h.length;k++)e.push(new E(c,h[k]));return e}function La(a,b){this.K=a;this.V=b}La.prototype.D=function(){return this.V};
function Ma(a,b,c,d,e){this.Ga=a;this.Ba=b;this.U=c||[];this.wa=d||null;this.Ia=e||null}
Ma.prototype.send=function(a,b,c){var d=new K("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&_={_}"),e=encodeURIComponent((window.__adobewebfontsappname__||"").toString().substr(0,20)),f=encodeURIComponent(ja(a)),h=[],k=[];window.Typekit.fonts||(window.Typekit.fonts=[]);for(var k=window.Typekit.fonts,n=0;n<this.U.length;n++){for(var s=!1,r=0;r<k.length;r++)if(this.U[n]===k[r]){s=!0;break}s||(h.push(this.U[n]),
k.push(this.U[n]))}h.length&&Na(d.l("https:"===ha(a),{service:this.Ga,token:this.Ia,app:e,hosting:this.Ba,host:f,variations:h.join("."),account:this.wa,stylesheetLoadTime:b,fontLoadTime:c,_:(+new Date).toString()}))};function Na(a){var b=new Image(1,1),c=!1;b.src=a;b.onload=function(){c=!0;b.onload=null};setTimeout(function(){c||(b.src="about:blank",b.onload=null)},3E3)}function Oa(){this.ga=this.va=this.H=this.W=this.la=!0}function L(a){return"Windows"===a.n}
function M(a){return L(a)&&v(a.h,new p(5,1))||L(a)&&v(a.h,new p(5,2))||L(a)&&v(a.h,new p(6,0))||L(a)&&t(a.h,new p(6,1))}function N(a){return"Macintosh"===a.n&&(t(a.h,new p(10,4))||null===a.h.m)}function Pa(a,b){return b.la&&("iPhone"===a.n||"iPod"===a.n)}function Qa(a,b){return Pa(a,b)&&t(a.h,new p(4,2))&&q(a.h,new p(5))}function Ra(a,b){return b.W&&"iPad"===a.n&&t(a.h,new p(4,2))&&q(a.h,new p(5))}function O(a,b){return b.H&&"Android"===a.n}
function Sa(a,b){return O(a,b)&&t(a.h,new p(2,2))&&q(a.h,new p(3,1))}function Ta(a,b){return O(a,b)&&t(a.h,new p(3,1))&&q(a.h,new p(4,1))}function P(a){return"Linux"===a.n||"Ubuntu"===a.n}function Ua(a){return"Safari"===a.getName()&&"AppleWebKit"===a.J||"Unknown"===a.getName()&&"AppleWebKit"===a.J&&("iPhone"===a.n||"iPad"===a.n||"iPod"===a.n)}function Va(a){return"Safari"===a.getName()&&"AppleWebKit"===a.J&&t(a.T,new p(525,13))&&q(a.T,new p(534,50))}
function Wa(a){return"BuiltinBrowser"===a.getName()}function Xa(a){this.ra=a}function Ya(a,b){return b}
var R={Na:"a",Pa:"b",Sa:"d",La:"i",Oa:"j",Ka:"k",NONE:"x"},S={a:function(a,b){return Va(a)&&M(a)||Wa(a)&&(Sa(a,b)||O(a,b)&&t(a.h,new p(4,1)))||b.H&&"Silk"===a.getName()&&q(a.v,new p(2))&&(Sa(a,b)||N)||b.H&&"Silk"===a.getName()&&t(a.v,new p(2))&&O(a,b)&&t(a.h,new p(4,1))||Ua(a)&&(Ra(a,b)||Qa(a,b))||"Chrome"===a.getName()&&t(a.v,new p(6))&&(Ra(a,b)||Qa(a,b))||"AdobeAIR"===a.getName()&&t(a.v,new p(2,5))&&(L(a)&&null===a.h.m||P(a))},b:function(a){return Va(a)&&N(a)||"AdobeAIR"===a.getName()&&t(a.v,new p(2,
5))&&N(a)},d:function(a,b){return"Chrome"===a.getName()&&t(a.v,new p(6))&&(M(a)||P(a)||N(a)||O(a,b)||"CrOS"===a.n||"CrKey"===a.n||b.W&&"iPad"===a.n&&t(a.h,new p(5))||Pa(a,b)&&t(a.h,new p(5)))||"Gecko"===a.J&&1===a.T.compare(new p(1,9,1))&&(M(a)||P(a)||N(a)||O(a,b))||"Safari"===a.getName()&&"AppleWebKit"===a.J&&t(a.T,new p(534,50))&&(M(a)||N(a))||Ua(a)&&(b.W&&"iPad"===a.n&&t(a.h,new p(5))||Pa(a,b)&&t(a.h,new p(5)))||"Opera"===a.getName()&&t(a.v,new p(11,10))&&(M(a)||P(a)||N(a)||O(a,b))||"MSIE"===a.getName()&&
9<=a.ca&&(L(a)&&t(a.h,new p(6,1))||L(a)&&v(a.h,new p(6,0)))||"MSIE"===a.getName()&&b.va&&"Windows Phone"===a.n&&t(a.h,new p(8))||Wa(a)&&(b.ga&&"BlackBerry"===a.n&&t(a.h,new p(10))||P(a))},j:function(a,b){return Wa(a)&&Ta(a,b)||b.H&&"Silk"===a.getName()&&t(a.v,new p(2))&&(Ta(a,b)||P(a))},i:function(a){return"MSIE"===a.getName()&&t(a.v,new p(6,0))&&(void 0===a.ca||9>a.ca)&&M(a)},x:function(){return!1}},Za={};
Za.i=new Xa(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f;f=e;f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+f;c.push(new La(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++){f=c[e];for(var h=0;h<f.length;h++){var k=f[h];if(a[k]){d=d.concat(a[k]);break}}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=!0,a.push(f));c=[];for(d=0;d<b.length;d++)for(e=b[d],f=0;f<a.length;f++)h=a[f],
h==e&&c.push(h);return c});var T={};T.a=T.j=T.b=T.d=T.j=function(){return[]};T.i=function(a,b,c){return[new Ea(a),new Fa(b,c)]};T.k=function(a){return[new Ea(a)]};function $a(a,b,c){return T[b](a,b,c)}function U(a){this.g=a;this.r="x";this.ha=this.e=null;this.s=[];this.R=[];this.aa=null}U.prototype.supportsConfiguredBrowser=function(){return"x"!==this.r};
U.prototype.init=function(){if(0<this.R.length){for(var a=[],b=0;b<this.R.length;b++)a.push(Da(this.R[b]));var b=this.g,a=a.join(""),c=this.g.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));ea(b,"head",c)}};
U.prototype.load=function(a,b,c){function d(){}var e=this,f=c||{},h=f.contextPath||".";a=f.timeout;c=!1!==f.events;var k=null,n=new H,s=new H;f.active&&(d=f.active);f.active=function(){s.stop();e.pa&&e.pa.send(e.g,-1!==n.Q&&-1!==n.G?n.G-n.Q:-1,-1!==s.Q&&-1!==s.G?s.G-s.Q:-1);d()};k=new ra(this.g,f);if(this.r){for(var f=Za[this.r]||new Xa(Ya),r=0;r<this.s.length;r++)Ia(this.s[r],this.r,f);this.aa&&(f=$a(this.g,this.r,this.s),f=Ga(this.r,f),f.contextPath=h,h=this.aa.l("https:"===ha(this.g),f),n.start(),
ka(this.g,h,function(){n.stop();s.start()}));if(c){for(var Q=[],Ka={},u=new Aa(this.e,this.g,k,a),r=0;r<this.s.length;r++)Q=Q.concat(Ja(this.s[r],this.r));for(r=0;r<Q.length;r++)Ka[Q[r].getName()]="BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006";fa(this.g,function(){var a=Q,c={},d=Ka||{};if(0===a.length&&b)sa(u.C);else{u.ba+=a.length;b&&(u.ma=b);for(var e=0;e<a.length;e++){var f=a[e],h=d[f.getName()],k=u.C,n=f;k.F&&l(k.t,[k.o.l(k.p,n.getName(),D(n).toString(),"loading")]);C(k,"fontloading",n);
k=null;k=new va(g(u.za,u),g(u.Aa,u),u.g,f,u.B,u.da,c,h);k.start()}}})}}};U.prototype.performOptionalActions=function(){};function ab(a,b,c,d){this.Ea=a;this.g=b;this.e=c;this.t=d;this.u=[]}ab.prototype.xa=function(a){this.u.push(a)};ab.prototype.load=function(a,b){var c=a,d=b||{};"string"==typeof c?c=[c]:c&&c.length||(d=c||{},c=[]);d.protocol&&ia(this.g,d.protocol);if(c.length)for(var e=this,f=c.length,h=0;h<c.length;h++)bb(this,c[h],function(){0==--f&&cb(e,d)});else cb(this,d)};
function bb(a,b,c){b=a.Ea.l("https:"===ha(a.g),{id:encodeURIComponent(b)});la(a.g,b,c)}function cb(a,b){if(0!=a.u.length){for(var c=new ra(a.g,b),d=!1,e=0;e<a.u.length;e++)a.u[e].init(),d=d||a.u[e].supportsConfiguredBrowser();if(d)for(c.F&&l(c.t,[c.o.l(c.p,"loading")]),C(c,"loading"),c=0;c<a.u.length;c++)d=a.u[c],d.supportsConfiguredBrowser()&&d.load(null,c==a.u.length-1,b);else sa(c);a.u=[]}}var db=(new na(navigator.userAgent,document)).parse(),eb=new da(window);window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var fb=window.Typekit.config||{},gb=null;fb.k&&(gb=new K(fb.k));var V=new ab(gb,eb,db,document.documentElement);window.Typekit.load=function(){V.load.apply(V,arguments)};window.Typekit.addKit=function(){V.xa.apply(V,arguments)}}var hb,W,X,I=window.Typekit.config||{};X=new U(eb);X.pa=new Ma(I.ps,I.ht,I.fi,I.a,I.kt);W=new Oa;W.la=!I.si;W.W=!I.st;W.H=!I.sa;W.va=!I.sw;W.ga=!I.sb;X.ha=W;I.f&&(hb=new K(I.f),X.aa=hb);var J;
if(I.fn)for(J=0;J<I.fn.length;J+=2)X.s.push(new Ha(I.fn[J],I.fn[J+1]));if(I.c)for(J=0;J<I.c.length;J+=2)X.R.push(new Ca);X.e=db;var Y;a:{var ib=X.e,jb=new Oa,kb=X.ha||jb,Z;for(Z in R){var $=R[Z];if(S[$]&&S[$](ib,kb)){Y=$;break a}}for(Z in R)if($=R[Z],S[$]&&S[$](ib,jb)){Y="x";break a}Y="k"}X.r=Y;window.Typekit.addKit(X);if(window.WebFont)try{window.Typekit.load()}catch(lb){};
})(this,document);
try{Typekit.load();}catch(e){};
