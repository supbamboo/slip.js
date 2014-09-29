(function(t,e){var i,n,o,r,s,h,u,a,f,c,l,d,p,g,y,v,x,m,S,T,E,b,w,C,M;g=void 0;f=null;u=10;h=40;i=["webkit","moz","ms","o",""];c=/\-?[0-9]+\.?[0-9]*/g;m="x";T="y";S="xy";s="left";l="right";y="up";n="down";r="ontouchend"in t;d=r?"touchstart":"mousedown";a=r?"touchmove":"mousemove";o=r?"touchend":"mouseup";v=t["innerHeight"];x=t["innerWidth"];b=function(){};w=function(t,e){var n,o,r,s,h;h=[];for(r=0,s=i.length;r<s;r++){o=i[r];n=o?""+o+"Transition":"transition";h.push(t.style[n]=e)}return h};C=function(t,e,n,o){var r,s,h,u,a;a=[];for(h=0,u=i.length;h<u;h++){s=i[h];r=s?""+s+"Transform":"transform";a.push(t.style[r]="translate3d("+(e||0)+"px, "+(n||0)+"px, "+(o||0)+"px)")}return a};E=function(t){var e,n,o,r,s,h,u;s=[];n="";e="";for(h=0,u=i.length;h<u;h++){r=i[h];o=r?""+r+"Transform":"transform";n=t.style[o];if(n&&typeof n==="string"){e=n.match(/\((.*)\)/g)[0];s=e&&e.match(c);break}}if(s.length){return{x:s[0]||0,y:s[1]||0,z:s[2]||0}}};p=function(){var t;t=function(t){var e,i;i=t.touches&&(t.touches.length?t.touches:[t]);e=t.changedTouches&&t.changedTouches[0]||t.originalEvent&&t.originalEvent.changedTouches&&t.originalEvent.changedTouches[0]||i[0].originalEvent||i[0];return{x:e.clientX,y:e.clientY}};function e(t,e){this.ele=t;this.direction=e;this.onStart=this.onMove=this.onEnd=b;this.coord=this.eventCoords=this.cacheCoords=this.finger=this.absFinger=f;this.orient=[];this.isSlider=false;this.isWebapp=false}e.prototype.start=function(t){return(this.onStart=t)&&this};e.prototype.move=function(t){return(this.onMove=t)&&this};e.prototype.end=function(t){return(this.onEnd=t)&&this};e.prototype.setCoord=function(t){var e,i,n;i=this.coord={x:t[m]||0,y:t[T]||0};n=this.ele;C(n,i[m],i[T]);for(e in i){n.setAttribute(e,i[e])}return this};e.prototype.onTouchStart=function(e){var i;this.eventCoords=t(e);this.cacheCoords=this.coord;this.finger=this.absFinger=f;if(this.isSlider){this.onSliderStart(e)}return i=this.onStart.apply(this,[e])};e.prototype.onTouchMove=function(e){var i,o,r,a,f,c,d,p,g,v,x;e.preventDefault();d=t(e);r=this.direction;c=this.finger={x:d.x-this.eventCoords.x,y:d.y-this.eventCoords.y};i=this.absFinger={x:Math.abs(c.x),y:Math.abs(c.y)};if(r!==S){p=r===m?T:m;if(i[r]<u||i[p]>h){return false}}g=[];if(i.x>u){g.push(c.x<0?s:l)}if(i.y>u){g.push(c.y<0?y:n)}this.orient=g;v=this.onMove.apply(this,[e]);if(v===false){return false}a=this.ele;f=this.coord={x:r.indexOf(m)<0?this.cacheCoords[m]:this.cacheCoords[m]-0+c.x,y:r.indexOf(T)<0?this.cacheCoords[T]:this.cacheCoords[T]-0+c.y};C(a,f[m],f[T]);x=[];for(o in f){x.push(a.setAttribute(o,f[o]))}return x};e.prototype.onTouchEnd=function(t){var e,i,n;e=this.ele;if(this.isSlider){this.onSliderEnd(t)}i=this.onEnd.apply(this,[t]);n=E(this.ele);if(n){return this.setCoord(n)}};e.prototype.onSliderStart=function(t){return w(this.ele,f)};e.prototype.onSliderEnd=function(t){var e,i,o,r,h,u,a,f,c,d,p;f=this.orient.join("");e="";p=0;c=this.page;d=this.pageNum;i=this.ele;u=f.indexOf(y)>-1;o=f.indexOf(n)>-1;r=f.indexOf(s)>-1;h=f.indexOf(l)>-1;a=this.direction===T;if(a){if(u){c++}if(o){c--}}else{if(r){c++}if(h){c--}}if(c===d){c=d-1}if(c===-1){c=0}w(i,"all .4s ease-in");if(a){p="-"+c*this.pageHeight;C(i,0,p,0)}else{p="-"+c*this.pageWidth;C(i,p,0,0)}return this.page=c};e.prototype.init=function(){var t,e,i,n,r,s,h;this.coord={x:0,y:0};h=this._onTouchStart=function(t){return function(e){return t.onTouchStart(e)}}(this);s=this._onTouchMove=function(t){return function(e){return t.onTouchMove(e)}}(this);r=this._onTouchEnd=function(t){return function(e){return t.onTouchEnd(e)}}(this);i=this.ele;i.addEventListener(d,h,false);i.addEventListener(a,s,false);i.addEventListener(o,r,false);n=this.coord={x:0,y:0};e=this.direction;C(i,n[m],n[T]);for(t in n){i.setAttribute(t,n[t])}return this};e.prototype.destroy=function(){var t;t=this.ele;t.removeEventListener(d,this._onTouchStart,false);t.removeEventListener(a,this._onTouchMove,false);t.removeEventListener(o,this._onTouchEnd,false);return this};e.prototype.slider=function(t){var e,i,n,o,r,h,u,a,f,c;r=this.ele;if(typeof t==="string"){t=r.querySelectorAll(t)}else if(!t){t=[];i=r.childNodes;for(u=0,f=i.length;u<f;u++){e=i[u];if(e.nodeType===1){t.push(e)}}}this.isSlider=true;this.page=0;this.elPages=t;o=t.length;h=this.pageNum=o?o:0;if(this.direction===m){for(a=0,c=t.length;a<c;a++){n=t[a];n.style.cssFloat=s}}return this};e.prototype.webapp=function(t){var e,i;this.isWebapp=true;this.slider(t).fullscreen();t=this.elPages;e=this.ele;i=this.pageNum;e.style.height=""+v*i+"px";this.height(v);if(this.direction===m){this.width(x)}return this};e.prototype.height=function(t){var e,i,n,o,r,s;n=this.ele;i=this.elPages;o=this.pageNum;t=String(t).replace("px","");if(t==="100%"){t=v}this.pageHeight=t;if(this.direction===m){n.style.height=""+t+"px"}for(r=0,s=i.length;r<s;r++){e=i[r];e.style.height=""+t+"px"}return this};e.prototype.width=function(t){var e,i,n,o,r,s;n=this.ele;i=this.elPages;o=this.pageNum;t=String(t).replace("px","");if(t==="100%"){t=x}this.pageWidth=t;if(this.direction===m){n.style.width=""+t*o+"px"}for(r=0,s=i.length;r<s;r++){e=i[r];e.style.width=""+t+"px"}return this};e.prototype.fullscreen=function(){var t,e,i;e=this.ele;t=e;while(i=t.parentNode){if(i.nodeType===1){i.style.height="100%";i.style.overflow="hidden"}t=i}return this};return e}();M=function(t,e){var i;i=new p(t,e||m);return i.init()};return t.Slip=M})(window,document);