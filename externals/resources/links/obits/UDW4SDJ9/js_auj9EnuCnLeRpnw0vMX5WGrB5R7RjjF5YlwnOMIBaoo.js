// ColorBox v1.3.17.2 - a full featured, light-weight, customizable lightbox based on jQuery 1.3+
// Copyright (c) 2011 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function(a,b,c){function bc(b){if(!U){P=b,_(),y=a(P),Q=0,K.rel!=="nofollow"&&(y=a("."+g).filter(function(){var b=a.data(this,e).rel||this.rel;return b===K.rel}),Q=y.index(P),Q===-1&&(y=y.add(P),Q=y.length-1));if(!S){S=T=!0,r.show();if(K.returnFocus)try{P.blur(),a(P).one(l,function(){try{this.focus()}catch(a){}})}catch(c){}q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=Z(K.initialWidth,"x"),K.h=Z(K.initialHeight,"y"),X.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),ba(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()}X.load(!0)}}function bb(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;K.slideshow&&y[1]?(d=function(){F.text(K.slideshowStop).unbind(c).bind(j,function(){if(Q<y.length-1||K.loop)a=setTimeout(X.next,K.slideshowSpeed)}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(X.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.text(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,d),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function ba(b,c){c&&c.call(P),a.event.trigger(b)}function _(b){K=a.extend({},a.data(P,e));for(b in K)a.isFunction(K[b])&&b.substring(0,2)!=="on"&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,typeof K.href=="string"&&(K.href=a.trim(K.href))}function $(a){return K.photo||/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(a)}function Z(a,b){return Math.round((/%/.test(a)?(b==="x"?z.width():z.height())/100:1)*parseInt(a,10))}function Y(c,d,e){e=b.createElement("div"),c&&(e.id=f+c),e.style.cssText=d||"";return a(e)}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:!1},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=a.browser.msie&&!a.support.opacity,o=n&&a.browser.version<7,p=f+"_IE6",q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X;X=a.fn[e]=a[e]=function(b,c){var f=this;b=b||{};if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b)),a(this).addClass(g)}),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&bc(f[0]);return f},X.init=function(){z=a(c),r=Y().attr({id:e,"class":n?f+(o?"IE6":"IE"):""}),q=Y("Overlay",o?"position:absolute":"").hide(),s=Y("Wrapper"),t=Y("Content").append(A=Y("LoadedContent","width:0; height:0; overflow:hidden"),C=Y("LoadingOverlay").add(Y("LoadingGraphic")),D=Y("Title"),E=Y("Current"),G=Y("Next"),H=Y("Previous"),F=Y("Slideshow").bind(h,bb),I=Y("Close")),s.append(Y().append(Y("TopLeft"),u=Y("TopCenter"),Y("TopRight")),Y(!1,"clear:left").append(v=Y("MiddleLeft"),t,w=Y("MiddleRight")),Y(!1,"clear:left").append(Y("BottomLeft"),x=Y("BottomCenter"),Y("BottomRight"))).children().children().css({"float":"left"}),B=Y(!1,"position:absolute; width:9999px; visibility:hidden; display:none"),a("body").prepend(q,r.append(s,B)),t.children().hover(function(){a(this).addClass("hover")},function(){a(this).removeClass("hover")}).addClass("hover"),L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}).hide(),G.click(function(){X.next()}),H.click(function(){X.prev()}),I.click(function(){X.close()}),J=G.add(H).add(E).add(F),t.children().removeClass("hover"),q.click(function(){K.overlayClose&&X.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&b===27&&(a.preventDefault(),X.close()),S&&K.arrowKey&&y[1]&&(b===37?(a.preventDefault(),H.click()):b===39&&(a.preventDefault(),G.click()))})},X.remove=function(){r.add(q).remove(),a("."+g).removeData(e).removeClass(g)},X.position=function(a,c){function g(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,C[0].style.height=C[1].style.height=t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var d=0,e=0;z.unbind("resize."+f),r.hide(),K.fixed&&!o?r.css({position:"fixed"}):(d=z.scrollTop(),e=z.scrollLeft(),r.css({position:"absolute"})),K.right!==!1?e+=Math.max(z.width()-K.w-O-M-Z(K.right,"x"),0):K.left!==!1?e+=Z(K.left,"x"):e+=Math.round(Math.max(z.width()-K.w-O-M,0)/2),K.bottom!==!1?d+=Math.max(b.documentElement.clientHeight-K.h-N-L-Z(K.bottom,"y"),0):K.top!==!1?d+=Z(K.top,"y"):d+=Math.round(Math.max(b.documentElement.clientHeight-K.h-N-L,0)/2),r.show(),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",r.dequeue().animate({width:K.w+O,height:K.h+N,top:d,left:e},{duration:a,complete:function(){g(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",c&&c(),setTimeout(function(){z.bind("resize."+f,X.position)},1)},step:function(){g(this)}})},X.resize=function(a){if(S){a=a||{},a.width&&(K.w=Z(a.width,"x")-O-M),a.innerWidth&&(K.w=Z(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=Z(a.height,"y")-N-L),a.innerHeight&&(K.h=Z(a.innerHeight,"y"));if(!a.innerHeight&&!a.height){var b=A.wrapInner("<div style='overflow:auto'></div>").children();K.h=b.height(),b.replaceWith(b.children())}A.css({height:K.h}),X.position(K.transition==="none"?0:K.speed)}},X.prep=function(b){function h(){K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h;return K.h}function g(){K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w;return K.w}if(!!S){var c,d=K.transition==="none"?0:K.speed;A.remove(),A=Y("LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function o(){n&&r[0].style.removeAttribute("filter")}var b,c,g,h,i=y.length,k,l;!S||(l=function(){clearTimeout(W),C.hide(),ba(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show(),i>1?(typeof K.current=="string"&&E.html(K.current.replace("{current}",Q+1).replace("{total}",i)).show(),G[K.loop||Q<i-1?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),b=Q?y[Q-1]:y[i-1],g=Q<i-1?y[Q+1]:y[0],K.slideshow&&F.show(),K.preloading&&(h=a.data(g,e).href||g.href,c=a.data(b,e).href||b.href,h=a.isFunction(h)?h.call(g):h,c=a.isFunction(c)?c.call(b):c,$(h)&&(a("<img/>")[0].src=h),$(c)&&(a("<img/>")[0].src=c))):J.hide(),K.iframe?(k=a("<iframe/>").addClass(f+"Iframe")[0],K.fastIframe?l():a(k).one("load",l),k.name=f+ +(new Date),k.src=K.href,K.scrolling||(k.scrolling="no"),n&&(k.frameBorder=0,k.allowTransparency="true"),a(k).appendTo(A).one(m,function(){k.src="//about:blank"})):l(),K.transition==="fade"?r.fadeTo(d,1,o):o())},K.transition==="fade"?r.fadeTo(d,0,function(){X.position(0,c)}):X.position(d,c)}},X.load=function(b){var c,d,e=X.prep;T=!0,R=!1,P=y[Q],b||_(),ba(m),ba(i,K.onLoad),K.h=K.height?Z(K.height,"y")-N-L:K.innerHeight&&Z(K.innerHeight,"y"),K.w=K.width?Z(K.width,"x")-O-M:K.innerWidth&&Z(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=Z(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=Z(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,W=setTimeout(function(){C.show()},100),K.inline?(Y().hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):$(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Y("Error").text("This image could not be loaded"))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(Q<y.length-1||K.loop)&&(R.style.cursor="pointer",R.onclick=function(){X.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c,d){e(c==="error"?Y("Error").text("Request unsuccessful: "+d.statusText):a(this).contents())})},X.next=function(){!T&&y[1]&&(Q<y.length-1||K.loop)&&(Q=Q<y.length-1?Q+1:0,X.load())},X.prev=function(){!T&&y[1]&&(Q||K.loop)&&(Q=Q?Q-1:y.length-1,X.load())},X.close=function(){S&&!U&&(U=!0,S=!1,ba(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),ba(m),A.remove(),setTimeout(function(){U=!1,ba(l,K.onClosed)},1)}))},X.element=function(){return a(P)},X.settings=d,V=function(a){a.button!==0&&typeof a.button!="undefined"||a.ctrlKey||a.shiftKey||a.altKey||(a.preventDefault(),bc(this))},a.fn.delegate?a(b).delegate("."+g,"click",V):a("."+g).live("click",V),a(X.init)})(jQuery,document,this);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);
  }
};

{
  $(document).bind('cbox_complete', function () {
    Drupal.attachBehaviors('#cboxLoadedContent');
  });
}

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(document).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        setTimeout(function () { $('#cboxTitle', context).slideUp() }, 1500);
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('.colorbox-load', context)
      .once('init-colorbox-load', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxInline = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParam = function(name, url){
      if (name == 'fragment') {
        var results = new RegExp('(#[^&#]*)').exec(url);
      }
      else {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
      }
      if (!results) { return ''; }
      return results[1] || '';
    };
    $('.colorbox-inline', context).once('init-colorbox-inline').colorbox({
      transition:settings.colorbox.transition,
      speed:settings.colorbox.speed,
      opacity:settings.colorbox.opacity,
      slideshow:settings.colorbox.slideshow,
      slideshowAuto:settings.colorbox.slideshowAuto,
      slideshowSpeed:settings.colorbox.slideshowSpeed,
      slideshowStart:settings.colorbox.slideshowStart,
      slideshowStop:settings.colorbox.slideshowStop,
      current:settings.colorbox.current,
      previous:settings.colorbox.previous,
      next:settings.colorbox.next,
      close:settings.colorbox.close,
      overlayClose:settings.colorbox.overlayClose,
      maxWidth:settings.colorbox.maxWidth,
      maxHeight:settings.colorbox.maxHeight,
      innerWidth:function(){
        return $.urlParam('width', $(this).attr('href'));
      },
      innerHeight:function(){
        return $.urlParam('height', $(this).attr('href'));
      },
      title:function(){
        return decodeURIComponent($.urlParam('title', $(this).attr('href')));
      },
      iframe:function(){
        return $.urlParam('iframe', $(this).attr('href'));
      },
      inline:function(){
        return $.urlParam('inline', $(this).attr('href'));
      },
      href:function(){
        return $.urlParam('fragment', $(this).attr('href'));
      }
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLogin = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $("a[href*='/user/login'], a[href*='?q=user/login']", context).once('init-colorbox-login', function () {
      var path = this.href;
      var new_path = path.replace(/user\/login/,'user/login/colorbox')
      var addquery = (path.indexOf('?') !=-1) ? '&' : '?';
      var dest = window.location.pathname.replace(Drupal.settings.basePath, '').replace(Drupal.settings.pathPrefix, '');

      // If no destination, add one to the current page.
      if (path.indexOf('destination') != -1 || dest == '') {
        this.href = new_path;
      }
      else {
        this.href = new_path + addquery + 'destination=' + dest;
      }
    }).colorbox({
      initialWidth:200,
      initialHeight:200,
      onComplete:function(){
        $('#cbox-edit-name').focus();
      }
    });
  }
};

})(jQuery);
;
(function($){Drupal.behaviors.image_caption={attach:function(context,settings){$("img.caption:not(.caption-processed)").each(function(i){var imgwidth=$(this).width()?$(this).width():false;var imgheight=$(this).height()?$(this).height():false;var captiontext=$(this).attr('title');if($(this).attr('align')){var alignment=$(this).attr('align');$(this).css({'float':alignment});$(this).removeAttr('align');}else if($(this).css('float')){var alignment=$(this).css('float');}else{var alignment='normal';}
var style=$(this).attr('style')?$(this).attr('style'):'';$(this).removeAttr('width');$(this).removeAttr('height');$(this).css('width','');$(this).css('height','');$(this).removeAttr('align');$(this).removeAttr('style');$(this).wrap("<span class=\"image-caption-container\" style=\"display:inline-block;"+style+"\"></span>");$(this).parent().addClass('image-caption-container-'+alignment);if(imgwidth){$(this).width(imgwidth);$(this).parent().width(imgwidth);}
if(imgheight){$(this).height(imgheight);}
$(this).parent().append("<span style=\"display:block;\" class=\"image-caption\">"+captiontext+"</span>");$(this).addClass('caption-processed');});}};})(jQuery);;

(function ($) {
  Drupal.Panels = Drupal.Panels || {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
/**
 * @file
 * JavaScript for the Disqus Drupal module.
 */

// The Disqus global variables.
var disqus_shortname = '';
var disqus_url = '';
var disqus_title = '';
var disqus_identifier = '';
var disqus_developer = 0;
var disqus_def_name = '';
var disqus_def_email = '';
var disqus_config;

(function ($) {

/**
 * Drupal Disqus behavior.
 */
Drupal.behaviors.disqus = {
  attach: function (context, settings) {
    $('body').once('disqus', function() {
      // Load the Disqus comments.
      if (settings.disqus || false) {
        // Setup the global JavaScript variables for Disqus.
        disqus_shortname = settings.disqus.domain;
        disqus_url = settings.disqus.url;
        disqus_title = settings.disqus.title;
        disqus_identifier = settings.disqus.identifier;
        disqus_developer = settings.disqus.developer || 0;
        disqus_def_name = settings.disqus.name || '';
        disqus_def_email = settings.disqus.email || '';

        // Language and SSO settings are passed in through disqus_config().
        disqus_config = function() {
          if (settings.disqus.language || false) {
            this.language = settings.disqus.language;
          }
          if (settings.disqus.remote_auth_s3 || false) {
            this.page.remote_auth_s3 = settings.disqus.remote_auth_s3;
          }
          if (settings.disqus.api_key || false) {
            this.page.api_key = settings.disqus.api_key;
          }
          if (settings.disqus.sso || false) {
            this.sso = settings.disqus.sso;
          }
        };

        // Make the AJAX call to get the Disqus comments.
        jQuery.ajax({
          type: 'GET',
          url: 'http://' + disqus_shortname + '.disqus.com/embed.js',
          dataType: 'script',
          cache: false
        });
      }

      // Load the comment numbers JavaScript.
      if (settings.disqusComments || false) {
        disqus_shortname = settings.disqusComments;
        // Make the AJAX call to get the number of comments.
        jQuery.ajax({
          type: 'GET',
          url: 'http://' + disqus_shortname + '.disqus.com/count.js',
          dataType: 'script',
          cache: false
        });
      }
    });
  }
};

})(jQuery);
;

/**
 * Cookie plugin 1.0
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
;
// $Id$
/*
 * Drupal Most Popular - Showcase the most popular content across your Drupal website and engage your audience.
 * Copyright © 2009-2012 New Signature
 * 
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * You can contact New Signature by electronic mail at labs@newsignature.com -or- by U.S. Postal Service at 1100 H St. NW, Suite 940, Washington, DC 20005.
 */
/**
 * @file 
 * Overwrites jQuery's fade functions to better support IE.
 * Borrowed from http://www.malsup.com/jquery/fadetest.html
 */
(function ($) {
	
    $.fn.fadeIn = function (speed, callback) {
        return this.animate({opacity: 'show'}, speed, function () { 
            if ($.browser.msie) {
                this.style.removeAttribute('filter');
            }
            if ($.isFunction(callback)) { 
                callback();
            }
        }); 
    }; 
 
    $.fn.fadeOut = function (speed, callback) { 
        return this.animate({opacity: 'hide'}, speed, function () { 
            if ($.browser.msie) {
                this.style.removeAttribute('filter');
            }
            if ($.isFunction(callback)) { 
                callback();  
            }
        }); 
    };
     
    $.fn.fadeTo = function (speed, to, callback) { 
        return this.animate({opacity: to}, speed, function () { 
            if (to == 1 && $.browser.msie) {
                this.style.removeAttribute('filter');
            }
            if ($.isFunction(callback)) {
                callback();
            }
        });
    };
    
})(jQuery);;
// $Id$
/*
 * Drupal Most Popular - Showcase the most popular content across your Drupal website and engage your audience.
 * Copyright © 2009-2012 New Signature
 * 
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * You can contact New Signature by electronic mail at labs@newsignature.com -or- by U.S. Postal Service at 1100 H St. NW, Suite 940, Washington, DC 20005.
 */
/**
 * @file Adds javascript actions to the most popular block.
 */
(function($) {
  Drupal.behaviors.mostpopular = {
    attach: function(context) {

      // Get the configuration options
      var options = $.extend(Drupal.behaviors.mostpopular.defaultOptions,
          Drupal.settings.mostpopular);
  
      // Attach to all the most popular blocks on the page
      var parents = $(options.blockSelector, context);
      parents.each(function() {
        parents.once(function() {
          var block = $(this);
          
          var serviceTabs = block.find(options.servicesSelector).filter('[data-sid]');
          var intervalTabs = block.find(options.intervalsSelector).filter('[data-iid]');
    
          // Keep track of the page we're currently looking at
          var selected = { 'sid' : null, 'iid' : null };
          
          // Get our current page from the cookies
          var bid = block.attr('data-bid');
          var cookie = $.cookie('mostpopular-' + bid);
          if (cookie) {
            var parts = cookie.split('/');
            selected.sid = parts[0];
            selected.iid = parts[1];
          }
    
          // Create a content container
          var content = block.find(options.contentSelector);
          var wrapper = content.wrap("<div />").parent()
          .css({
            position : 'relative'
          });
    
          // Create a throbber image
          if (options.showThrobber) {
            var throbber = $(Drupal.theme('MostPopularThrobber'))
            .css({
              position : 'absolute',
              zIndex : 100
            }).appendTo(wrapper).hide();
    
            // Redefine the show function for the throbber to center it
            throbber.centerAndShow = function() {
              var top = parseInt((wrapper.outerHeight({margin: true}) - throbber.height()) / 2);
              var left = parseInt((wrapper.outerWidth({margin: true}) - throbber.width()) / 2);
              throbber.css({
                top : top,
                left : left
              }).show();
            };
          }
    
          // -----------------------------------------------------
          // Bind all the links to services
          serviceTabs.each(function() {
            var tab = $(this).data('service', true);
            var sid = tab.attr('data-sid');
            
            var link = $('<a href="#"/>')
              .text(tab.text())
              .click(function() {
                selected.sid = sid;
                
                getSelected(tab);
                return false;
              });
            tab.html(link);
            tab.click(function() {
              return link.click();
            });
            
            // If this service is currently selected, load the content
            if (!selected.sid) {
              selected.sid = sid;
            }
            if (selected.sid == sid) {
              tab.addClass(options.selectedClass);
            }
          });
    
          // -----------------------------------------------------
          // Bind all the links to intervals
          intervalTabs.each(function() {
            var tab = $(this).data('interval', true);
            var iid = tab.attr('data-iid');
            
            var link = $('<a href="#"/>')
              .text(tab.text())
              .click(function() {
                selected.iid = iid;
                
                getSelected(tab);
                return false;
              });
            tab.html(link);
            tab.click(function() {
              link.click();
            });
            
            // If this interval is currently selected, load the content
            if (!selected.iid) {
              selected.iid = iid;
            }
            if (selected.iid == iid) {
              tab.click();
            }
          });
          
          function getSelected(tab) {
            if (selected.sid && selected.iid) {
              startReload();
              
              var path = selected.sid + '/' + selected.iid;
              
              // Save the cookie
              $.cookie('mostpopular-' + bid, path, { path: '/' });
              
              // Fetch the content via AJAX
              var url = options.url + '/' + bid + '/' + path;
              $.get(url, function(data) {
                onGet(tab, data);
              });
            }
          }
          
          /**
           * This function is called when there is new data from the AJAX call.
           * 
           * @param link
           *   The link object that clicked.
           * @param data
           *   The new HTML sent back from Drupal.
           */
          function onGet(tab, data) {
            finishReload(data);
    
            // Select the appropriate tabs
            if (tab.data('service')) {
              serviceTabs.removeClass(options.selectedClass);
            }
            else if (tab.data('interval')) {
              intervalTabs.removeClass(options.selectedClass);
            }
            tab.addClass(options.selectedClass);
            return false;
          }
    
          /**
           * Starts the process of reloading the most popular items, by hiding
           * the existing content and showing the throbber, if necessary.
           * 
           * The hideContent() method defined in the options will be called.
           */
          function startReload() {
            // Show the throbber and dim the content
            if (throbber) {
              throbber.centerAndShow();
            }
            options.hideContent(content);
          }
    
          /**
           * Finishes the process of reloading the most popular items, by showing
           * the new content and hiding the throbber, if necessary.
           * 
           * The showContent() method defined in the options will be called.
           * 
           * @param response
           *   A JSON response from Drupal.  It contains one key, 'data', whose
           *   value is an HTML string to render.
           */
          function finishReload(response) {
            // Replace the content, fade it back in and hide the throbber
            options.showContent(content, response);
            if (throbber) {
              throbber.hide();
            }
            Drupal.attachBehaviors(content);
          }
        });
      });
    },
  
    /**
     * Defines the default options. Override these options in
     * Drupal.settings.mostpopular.
     */
    defaultOptions: {  
      'hideContent' : function(content) {
        content.fadeTo(200, 0.5);
      },
      'showContent' : function(content, html) {
        content.html(html).fadeTo(200, 1.0);
      },
      'showThrobber' : true,
      'blockSelector' : '.mostpopular-block',
      'servicesSelector' : 'ul.mostpopular--services li',
      'intervalsSelector' : 'ul.mostpopular--intervals li',
      'contentSelector' : 'div.mostpopular--content',
      'selectedClass' : 'selected',
      'url' : '/mostpopular/ajax'
    }
  };

  /**
   * Provides a default theme for the throbber that appears when content is
   * reloading.   You can override this in your own theme.
   * 
   * @return An HTML string to render the throbber.
   */
  Drupal.theme.prototype.MostPopularThrobber = function() {
    return '<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>';
  };
  
})(jQuery);;
(function($) {

/**
 * Create a DART object to handle tagging functionality
 */
Drupal.DART = {};

/**
 * Overridable settings.
 */
Drupal.DART.settings = {
  "writeTags": true
};

/**
 * Using document.write, add a DART tag to the page
 */
Drupal.DART.tag = function(tag) {
  tag = typeof(tag) == 'string' ? eval('(' + tag + ')') : tag;

  var tagname = tag.settings.options.method == 'adj' ? 'script' : 'iframe';
  var options = tag.settings.options.method == 'adj' ? 'type="text/javascript"' : 'frameborder="0" scrolling="no" width="' + tag.sz.split("x")[0] + '" height="' + tag.sz.split("x")[1] + '"';

  // Allow other modules to include js that can manipulate the tag object.
  var processed_tag = ($ !== undefined) ? $(document).triggerHandler('dart_tag_process', [tag]) : undefined;
  tag = processed_tag !== undefined ? processed_tag : tag;

  ad = '<' + tagname + ' ' + options + ' src="';
  ad += dart_url + "/";
  ad += tag.network_id !== '' ? tag.network_id + "/" : "";
  ad += tag.settings.options.method + "/";
  ad += tag.prefix + '.' + tag.site + "/" + tag.zone + ";";
  ad += this.keyVals(tag.key_vals);

  // Allow other modules to include js that can manipulate the concatenated tag string.
  rendered_ad = ($ !== undefined) ? $(document).triggerHandler('dart_tag_render', [ad]) : undefined;
  ad = rendered_ad !== undefined ? rendered_ad : ad; ad += '"></' + tagname + '>';

  if (Drupal.DART.settings.writeTags) {
    document.write(ad);
  }

  // console.log('-----------------'+tag.pos+'------------------');
  // console.log(tag);

  return ad;
};

/**
 * Format a key|val pair into a dart tag key|val pair.
 */
Drupal.DART.keyVal = function(key, val, useEval) {
  if (key != "<none>") {
    kvp  = key + "=";
    kvp += useEval ? eval(val) : val;
    kvp += key == "ord" ? "?" : ";";
  }
  else {
    kvp = useEval ? eval(val) : val;
  }

  return(kvp);
};

/**
 * Loop through an object and create kay|val pairs.
 *
 * @param vals
 *   an object in this form:
 *   {
 *     key1 : {{val:'foo', eval:true}, {val:'foo2', eval:false}}
 *     key2 : {{val:'bar', eval:false}},
 *     key3 : {{val:'foobar', eval:true}}
 *   }
 */
Drupal.DART.keyVals = function(vals) {
  var ad = '';
  for(var key in vals) {
    value = vals[key];
    for(var val in value) {
      v = value[val];
      ad += this.keyVal(key, v['val'], v['eval']);
    }
  }
  return ad;
};


/**
 * If there are tags in the loadLastTags, then load them where they belong.
 */
Drupal.DART.display_ads = function () {
  ord = Math.round(Math.random()*1000000000000);
    if (typeof(Drupal.DART.settings.loadLastTags) == 'object') {
    $('.dart-tag.dart-processed').each(function () {
      $(this).removeClass('dart-processed');
      $(this).html('');
    });
    var init = false;
    for (var tag in Drupal.DART.settings.loadLastTags) {
      // variables for background ads may be defined in late loaded scripts. Load bg ad if needed.
      if (Drupal.DART.settings.loadLastTags.hasOwnProperty(tag) && tag != null) {
        var name = tag;
        var scriptTag = Drupal.DART.tag(Drupal.DART.settings.loadLastTags[name]);
        if (typeof(postscribe) == 'function') {
          postscribe($('.dart-name-' + name), scriptTag, function () {
            Drupal.DART.loadBgAd(Drupal.settings.DART.bgAdVars);
            $('.dart-name-' + name).addClass('dart-processed');
          });
        }
        else if (typeof(_this.writeCapture) == 'function') {
          $('.dart-name-' + name).writeCapture().append(scriptTag, function () {
              Drupal.DART.loadBgAd(Drupal.settings.DART.bgAdVars);
          }).addClass('dart-processed');
        }
      }
    }
  }
}

/**
 * Load the background ad as served by DART.
 */
Drupal.DART.loadBgAd = function(bgAdVars) {
  //ensure ads are loaded only once on the page
  if (!Drupal.DART.settings.bgAdLoaded && typeof bgAdVars != 'undefined') {
    var bgAdCSS = {};
    if (window[bgAdVars.bgImg] != undefined) {
      bgAdCSS['background-image'] = 'url(' + window[bgAdVars.bgImg] + ')';
    }
    if (window[bgAdVars.bgColor] != undefined) {
      bgAdCSS['background-color'] = window[bgAdVars.bgColor];
    }
    if (window[bgAdVars.bgRepeat] != undefined) {
      bgAdCSS['background-repeat'] = window[bgAdVars.bgRepeat];
    }
    $(bgAdVars.selector).css(bgAdCSS);

    if (window[bgAdVars.clickThru] != undefined) {
      $(bgAdVars.selector).addClass('background-ad');
      $(bgAdVars.selector).click(function (e) {
      if(e.target != this) return;
        window.open(window[bgAdVars.clickThru]);
      });
    }

    //don't try to load again
    if (window[bgAdVars.bgImg] != undefined) {
      Drupal.DART.settings.bgAdLoaded = true;
    }
  }
};



/**
 * Display Ads.
 */
Drupal.behaviors.DART = {
  attach: function(context) {
    Drupal.DART.display_ads();
    Drupal.DART.loadBgAd(Drupal.settings.DART.bgAdVars);
  }
};

})(jQuery);

;
