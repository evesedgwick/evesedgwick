(function(){function s(b){var a,e,c,d=document.querySelectorAll(".entry");if("ZemantaPostSettings"in window){if("true"===ZemantaPostSettings)if(1==d.length){a=d[0];c=escape(window.entryPermalink);e=t+u(a.id.substr(6),i);v(a,e,c);n=e;a:{b=escape(location.href.split("#")[0]);for(a=escape(document.referrer);c=D.exec(document.cookie);)if((E||c[1]===a)&&c[2]===b){c=c[3].split("|");document.cookie="zem_rp_click:"+a+":"+b+"=;path=/;expires="+(new Date(0)).toUTCString();b={source_post_id:c[0],position:c[1],
source_request_id:c[3]};break a}b=!1}a=F();c={post_id:n,blog_id:i,referrer:escape(document.referrer),request_id:window._zem_rp_request_id};b?(c.click="1",c.source_post_id=b.source_post_id,c.position=b.position,c.thumbnails="1",c.source_request_id=b.source_request_id):a?(c.click="1",c.source_blog_id=a.source_blog_id,c.source_post_id=a.source_post_id,c.source_request_id=a.source_request_id,c.article_id=a.article_id):c.click="0";document.createElement("img").setAttribute("src","http://t.zemanta.com/pageview/?"+
w(c))}else b||x()}else{y=!0;for(var f=0,G=d.length;f<G;f++)if(a=d[f],(e=a.querySelector("input[type=hidden][name=zemanta-related]"))&&!("true"!=e.getAttribute("value")&&"true"!=e.getAttribute("val"))){if(e=a.querySelector(".entry-header a"))c=e.href;else if(e=a.querySelector(".entry-footer .entry-footer-info a.permalink"))c=e.href;c=escape(c);e=t+u(a.id.substr(6),i);!(e in z)&&A<H&&(A++,v(a,e,c))}b||x()}}function v(b,a,e){var c=b.querySelector(".entry-header"),d=z[a]={post_id:a,url:e},a={blog_id:i,
post_id:a,request_id:window._zem_rp_request_id,post_url:e,title:c?escape(c.innerText):""};window[a.callback=d.callback_name="_zem_callback_"+(d.callback_id=parseInt(1E5*Math.random()))]=d.callback_function=function(a){d.response=a;if("ok"==a.status){var c=a.data,a=c.settings,e=c.results;if(a&&e&&e.length){a.css&&!B&&(c=document.createElement("style"),c.type="text/css",document.getElementsByTagName("head")[0].appendChild(c),c.styleSheet?c.styleSheet.cssText=a.css:c.innerHTML=a.css,B=!0);c=d.zem_rp_wrap=
document.createElement("div");c.setAttribute("class","zem_rp_wrap");c.innerHTML='<div class="zem_rp_content"><h3 class="related_post_title">'+a.title+'</h3><ul class="related_post zem_rp"></ul><div class="zem_rp_footer"><a class="zem_rp_backlink" target="_blank" rel="nofollow" href="http://www.zemanta.com/?blogger-related-posts">Zemanta</a></div></div>';for(var g=d.ul=c.querySelector("ul"),i=0,n=e.length;i<n;i++){var h=e[i],m="promoted"==h.type,p="network"==h.type,l=document.createElement("li"),k;
l.setAttribute("data-position",i);var j="";a.display_thumbnails&&h.thumbnail_url&&(j+='<a href="'+h.url+(m?'" rel="nofollow"':'"')+' class="zem_rp_thumbnail"><img src="'+h.thumbnail_url+'" alt="'+h.title+'"></a>');j+='<a href="'+h.url+(m?'" rel="nofollow"':'"')+' class="zem_rp_title">'+h.title+"</a>";a.display_publish_date&&h.published_date&&(j+=" ("+h.published_date+") ");a.display_post_excerpt&&h.excerpt&&(j+="<br /><small>"+h.excerpt+"...</small>");l.innerHTML=j;a.display_thumbnails&&h.aid&&(k=
l.querySelector("img"),k.onerror=function(a){return function(){this.onerror=function(){};this.src="http://content.zemanta.com/static/thumbs/"+a%I+".jpg"}}(h.aid));if(m||p)l.className="zem_rp_remote",h=document.createElement("span"),a.display_thumbnails?(h.innerHTML="&nbsp;",h.className="zem_rp_badge",k=k||l.querySelector("img"),k.parentNode.appendChild(h)):(h.style.fontSize="0.8em",h.innerHTML=" (external)",l.querySelector(".zem_rp_title").appendChild(h));g.appendChild(l)}k=b.querySelector(".entry-more");
null!=k?k.appendChild(c):b.querySelector(".entry-body").appendChild(c);q(g,"mousedown",function(){event=event||window.event;var a=event.target||event.srcElement;if(!("a"!==a.nodeName.toLowerCase()&&"a"!==(a=a.parentNode).nodeName.toLowerCase()))a.href=e[a.parentNode.getAttribute("data-position")].target_url});q(g,"click",r);q(g,"contextmenu",r)}}};e=d.script=document.createElement("script");e.src="http://sre.zemanta.com/content/?"+w(a);e.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(e)}
function F(){var b=location.href;if(-1===b.indexOf("ref_related_posts="))return!1;for(var b=b.substr(b.indexOf("?")+1).split("&"),a=0,e=b.length;a<e;a++){var c=b[a].split("=");if("ref_related_posts"===c[0])return info=c[1].split("."),{source_blog_id:info[0],source_post_id:info[1],source_request_id:3<=info.length?info[2]:"none",article_id:4<=info.length?info[3]:"none"}}return!1}function r(b){if(!y){var b=b||window.event,a=b.target||b.srcElement;if(!("a"!==a.nodeName.toLowerCase()&&"a"!==(a=a.parentNode).nodeName.toLowerCase())){var b=
location.href.split("#")[0],e=a.href,a=a.parentNode.getAttribute("data-position")||"none",a=n+"|"+a+"|1|"+window._zem_rp_request_id,b="zem_rp_click:"+escape(b)+":"+escape(e);document.cookie=b+"="+a+";path=/;expires="+(new Date((new Date).getTime()+1E4)).toUTCString()}}}function w(b){var a=[];for(key in b)b.hasOwnProperty(key)&&a.push(key+"="+b[key]);return a.join("&")}function q(b,a,e){b.addEventListener?b.addEventListener(a,e,!1):b.attachEvent("on"+a,e)}function m(){document.body?p||(p=!0,s(!0)):
setTimeout(m,1)}function g(){if(document.addEventListener)document.removeEventListener("DOMContentLoaded",g,!1);else if("complete"===document.readyState)document.detachEvent("onreadystatechange",g);else return;m()}function x(){if(!C)if(C=!0,"complete"===document.readyState)setTimeout(g,1);else if(document.addEventListener)document.addEventListener("DOMContentLoaded",g,!1),window.addEventListener("load",g,!1);else{document.attachEvent("onreadystatechange",g);window.attachEvent("onload",g);var b=!1;
try{b=null==window.frameElement&&document.documentElement}catch(a){}b&&b.doScroll&&function c(){if(!p){try{b.doScroll("left")}catch(a){return setTimeout(c,50)}m()}}()}}function u(b,a){var e,c,d,f,g;e=b.length&3;c=b.length-e;d=a;for(g=0;g<c;)f=b.charCodeAt(g)&255|(b.charCodeAt(++g)&255)<<8|(b.charCodeAt(++g)&255)<<16|(b.charCodeAt(++g)&255)<<24,++g,f=3432918353*(f&65535)+((3432918353*(f>>>16)&65535)<<16)&4294967295,f=f<<15|f>>>17,f=461845907*(f&65535)+((461845907*(f>>>16)&65535)<<16)&4294967295,d^=
f,d=d<<13|d>>>19,d=5*(d&65535)+((5*(d>>>16)&65535)<<16)&4294967295,d=(d&65535)+27492+(((d>>>16)+58964&65535)<<16);f=0;switch(e){case 3:f^=(b.charCodeAt(g+2)&255)<<16;case 2:f^=(b.charCodeAt(g+1)&255)<<8;case 1:f^=b.charCodeAt(g)&255,f=3432918353*(f&65535)+((3432918353*(f>>>16)&65535)<<16)&4294967295,f=f<<15|f>>>17,d^=461845907*(f&65535)+((461845907*(f>>>16)&65535)<<16)&4294967295}d^=b.length;d^=d>>>16;d=2246822507*(d&65535)+((2246822507*(d>>>16)&65535)<<16)&4294967295;d^=d>>>13;d=3266489909*(d&65535)+
((3266489909*(d>>>16)&65535)<<16)&4294967295;return(d^d>>>16)>>>0}if(document.querySelector){var i=window.ZEMANTA_BLOG_ID=parseInt(window.ZemantaBlogSettings.split("|")[0]),n;if(i&&!isNaN(i)){window._zem_rp_request_id=window._zem_rp_request_id||"typd"+((new Date).getTime()%60466176/60466176).toString(36).substr(2,5)+Math.random().toString(36).substr(2,2);var I=31,H=5,t="88008800",z=window._zem_rp_articles={},A=0,B=!1,y=!1,E=!!navigator.vendor&&-1!==navigator.vendor.indexOf("Apple"),D=/(?:; |^)zem_rp_click:([^:]*):([^=]*)=([^;]*)/g;
window._zem_rp_save_click_event=r;var p=!1,C=!1;s()}}})();
