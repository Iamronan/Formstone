/*! Formstone v0.0.1 [dropdown.js] 2014-12-06 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){F=b.$body}function d(c){c.multiple=this.prop("multiple"),c.disabled=this.is(":disabled"),c.multiple?c.links=!1:c.external&&(c.links=!0);var d=this.find(":selected").not(":disabled"),e=d.text(),f=this.find("option").index(d);c.multiple||""===c.label?c.label="":(d=this.prepend('<option value="" class="'+z.item_placeholder+'" selected>'+c.label+"</option>"),e=c.label,f=0);var g=this.find("option, optgroup"),h=g.filter("option");c.tabIndex=this[0].tabIndex,this[0].tabIndex=-1;var k=[z.base,z.customClass];b.isMobile?k.push(z.mobile):c.cover&&k.push(z.cover),c.multiple&&k.push(z.multiple),c.disabled&&k.push(z.disabled);var l='<div class="'+k.join(" ")+'" tabindex="'+c.tabIndex+'"></div>',q="";c.multiple||(q+='<span class="'+z.selected+'">',q+=a("<span></span>").text(v(e,c.trim)).html(),q+="</span>"),q+='<div class="'+z.options+'">',q+="</div>",this.wrap(l).after(q),c.$dropdown=this.parent(y.base),c.$allOptions=g,c.$options=h,c.$selected=c.$dropdown.find(y.selected),c.$wrapper=c.$dropdown.find(y.options),c.$placeholder=c.$dropdown.find(y.placeholder),c.index=-1,c.guid=C++,c.closed=!0,c.keyDownGUID=A.keyDown+c.guid,i(c),c.multiple||r(f,c),c.$selected.touch({tap:!0}).on(A.tap,c,j),c.$dropdown.on(A.click,y.item,c,m),this.on(A.change,c,n),b.isMobile||(c.$dropdown.on(A.focusIn,c,o).on(A.blur,c,p),this.on(A.focusIn,c,function(a){a.data.$dropdown.trigger("focus")}))}function e(a){a.$dropdown.hasClass(z.open)&&a.$selected.trigger(A.click),a.$el[0].tabIndex=a.tabIndex,a.$placeholder.remove(),a.$selected.remove(),a.$wrapper.remove(),a.$dropdown.off(A.namespace),a.$el.off(A.namespace).show().unwrap()}function f(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).addClass(z.item_disabled),a.$options.eq(c).prop("disabled",!0)}else a.$dropdown.hasClass(z.open)&&a.$selected.trigger(A.click),a.$dropdown.addClass(z.disabled),a.$el.prop("disabled",!0),a.disabled=!0}function g(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).removeClass(z.item_disabled),a.$options.eq(c).prop("disabled",!1)}else a.$dropdown.removeClass(z.disabled),a.$el.prop("disabled",!1),a.disabled=!1}function h(a){var b=a.index;a.$allOptions=a.$el.find("option, optgroup"),a.$options=a.$allOptions.filter("option"),a.index=-1,b=a.$options.index(a.$options.filter(":selected")),i(a),a.multiple||r(b,a)}function i(b){for(var c="",d=0,e=0,f=b.$allOptions.length;f>e;e++){var g=b.$allOptions.eq(e),h=[];if("OPTGROUP"===g[0].tagName)h.push(z.group),g.is(":disabled")&&h.push(z.disabled),c+='<span class="'+h.join(" ")+'">'+g.attr("label")+"</span>";else{var i=g.val();g.attr("value")||g.attr("value",i),h.push(z.item),g.hasClass(z.placeholder)&&h.push(z.item_placeholder),g.is(":selected")&&h.push(z.item_selected),g.is(":disabled")&&h.push(z.item_disabled),c+='<span class="'+h.join(" ")+'" ',c+='data-value="'+i+'">',c+=a("<span></span>").text(v(g.text(),b.trim)).html(),c+="</span>",d++}}b.$items=b.$wrapper.html(c).find(y.item)}function j(a){B.killEvent(a);var c=a.data;if(!c.disabled)if(c.mobile||!b.isMobile||b.isFirefoxMobile)c.closed?k(c):l(c);else{var d=c.$el[0];if(E.createEvent){var e=E.createEvent("MouseEvents");e.initMouseEvent("mousedown",!1,!0,D,0,0,0,0,0,!1,!1,!1,!1,0,null),d.dispatchEvent(e)}else d.fireEvent&&d.fireEvent("onmousedown")}}function k(a){if(a.closed){{var b=a.$dropdown.offset(),c=F.outerHeight(),d=a.$wrapper.outerHeight(!0);a.index>=0?a.$items.eq(a.index).position():{left:0,top:0}}b.top+d>c&&a.$dropdown.addClass(z.bottom),a.$dropdown.addClass(z.open),s(a),a.closed=!1}}function l(a){a&&!a.closed&&(a.$dropdown.removeClass([z.open,z.bottom].join(" ")),a.closed=!0)}function m(b){B.killEvent(b);var c=a(this),d=b.data;if(!d.disabled){if(d.$wrapper.is(":visible")){var e=d.$items.index(c);e!==d.index&&(r(e,d),t(d))}d.multiple||l(d)}}function n(b,c){var d=a(this),e=b.data;if(!c&&!e.multiple){var f=e.$options.index(e.$options.filter("[value='"+w(d.val())+"']"));r(f,e),t(e)}}function o(a){B.killEvent(a);var b=a.data;b.disabled||b.multiple||b.$dropdown.addClass(z.focus).on(b.keyDownGUID,b,q)}function p(a){B.killEvent(a);var b=a.data;b.$dropdown.removeClass(z.focus).off(b.keyDownGUID),b.multiple||l(b)}function q(c){var d=c.data;if(13===c.keyCode)d.closed||(l(d),r(d.index,d)),t(d);else if(!(9===c.keyCode||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)){B.killEvent(c);var e=d.$items.length-1,f=d.index<0?0:d.index;if(a.inArray(c.keyCode,b.isFirefox?[38,40,37,39]:[38,40])>-1)f+=38===c.keyCode||b.isFirefox&&37===c.keyCode?-1:1,0>f&&(f=0),f>e&&(f=e);else{var g,h,i=String.fromCharCode(c.keyCode).toUpperCase();for(h=d.index+1;e>=h;h++)if(g=d.$options.eq(h).text().charAt(0).toUpperCase(),g===i){f=h;break}if(0>f||f===d.index)for(h=0;e>=h;h++)if(g=d.$options.eq(h).text().charAt(0).toUpperCase(),g===i){f=h;break}}f>=0&&(r(f,d),s(d))}}function r(a,b){var c=b.$items.eq(a),d=b.$options.eq(a),e=c.hasClass(z.item_selected),f=c.hasClass(z.item_disabled);if(!f)if(b.multiple)e?(d.prop("selected",null),c.removeClass(z.item_selected)):(d.prop("selected",!0),c.addClass(z.item_selected));else if(a>-1&&a<b.$items.length){{var g=c.html();c.data("value")}b.$selected.html(g).removeClass(y.item_placeholder),b.$items.filter(y.item_selected).removeClass(z.item_selected),b.$el[0].selectedIndex=a,c.addClass(z.item_selected),b.index=a}else""!==b.label&&b.$selected.html(b.label)}function s(a){var b=a.$items.eq(a.index),c=a.index>=0&&!b.hasClass(y.item_placeholder)?b.position():{left:0,top:0};a.$wrapper.scrollTop(a.$wrapper.scrollTop()+c.top)}function t(a){a.links?u(a):a.$el.trigger(A.raw.change,[!0])}function u(a){var b=a.$el.val();a.external?D.open(b):D.location.href=b}function v(a,b){return 0===b?a:a.length>b?a.substring(0,b)+"...":a}function w(a){return"string"==typeof a?a.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"):a}var x=b.Plugin("dropdown",{widget:!0,defaults:{cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,trim:0},methods:{_setup:c,_construct:d,_destruct:e,disable:f,enable:g,update:h,open:k,close:l},classes:["cover","bottom","multiple","mobile","open","disabled","focus","selected","options","group","item","item_disabled","item_selected","item_placeholder"],events:{tap:"tap"}}),y=x.classes,z=y.raw,A=x.events,B=x.functions,C=0,D=b.window,E=(b.$window,b.document),F=null}(jQuery,Formstone);