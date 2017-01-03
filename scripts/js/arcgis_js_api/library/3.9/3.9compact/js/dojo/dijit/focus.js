//>>built
define("dijit/focus","dojo/aspect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-construct dojo/dom-class dojo/Evented dojo/_base/lang dojo/on dojo/domReady dojo/sniff dojo/Stateful dojo/_base/window dojo/window ./a11y ./registry ./main".split(" "),function(n,u,p,v,q,w,x,h,k,y,z,A,B,r,C,l,m){var s,c=new (u([A,x],{curNode:null,activeStack:[],constructor:function(){var a=h.hitch(this,function(a){p.isDescendant(this.curNode,a)&&this.set("curNode",null);p.isDescendant(this.prevNode,a)&&this.set("prevNode",
null)});n.before(q,"empty",a);n.before(q,"destroy",a)},registerIframe:function(a){return this.registerWin(a.contentWindow,a)},registerWin:function(a,g){var d=this,b=a.document&&a.document.body;if(b){var t=k(a.document,"mousedown, touchstart",function(a){d._justMouseDowned=!0;setTimeout(function(){d._justMouseDowned=!1},0);if(!a||!(a.target&&null==a.target.parentNode))d._onTouchNode(g||a.target,"mouse")}),e=k(b,"focusin",function(a){s=(new Date).getTime();if(a.target.tagName){var b=a.target.tagName.toLowerCase();
"#document"==b||"body"==b||(C.isTabNavigable(a.target)?d._onFocusNode(g||a.target):d._onTouchNode(g||a.target))}}),c=k(b,"focusout",function(a){(new Date).getTime()<s+100||d._onBlurNode(g||a.target)});return{remove:function(){t.remove();e.remove();c.remove();b=t=e=c=null}}}},_onBlurNode:function(a){this._clearFocusTimer&&clearTimeout(this._clearFocusTimer);this._clearFocusTimer=setTimeout(h.hitch(this,function(){this.set("prevNode",this.curNode);this.set("curNode",null)}),0);this._justMouseDowned||
(this._clearActiveWidgetsTimer&&clearTimeout(this._clearActiveWidgetsTimer),this._clearActiveWidgetsTimer=setTimeout(h.hitch(this,function(){delete this._clearActiveWidgetsTimer;this._setStack([])}),0))},_onTouchNode:function(a,g){this._clearActiveWidgetsTimer&&(clearTimeout(this._clearActiveWidgetsTimer),delete this._clearActiveWidgetsTimer);var d=[];try{a&&(w.contains(a,"dijitMenuPopup")&&!a.getAttribute("dijitPopupParent"))&&(a=a.firstChild);for(;a;){var b=v.get(a,"dijitPopupParent");if(b)a=l.byId(b).domNode;
else if(a.tagName&&"body"==a.tagName.toLowerCase()){if(a===B.body())break;a=r.get(a.ownerDocument).frameElement}else{var c=a.getAttribute&&a.getAttribute("widgetId"),e=c&&l.byId(c);e&&!("mouse"==g&&e.get("disabled"))&&d.unshift(c);a=a.parentNode}}}catch(f){}this._setStack(d,g)},_onFocusNode:function(a){a&&9!=a.nodeType&&(this._clearFocusTimer&&(clearTimeout(this._clearFocusTimer),delete this._clearFocusTimer),this._onTouchNode(a),a!=this.curNode&&(this.set("prevNode",this.curNode),this.set("curNode",
a)))},_setStack:function(a,c){var d=this.activeStack,b=d.length-1,f=a.length-1;if(a[f]!=d[b]){this.set("activeStack",a);var e;for(e=b;0<=e&&d[e]!=a[e];e--)if(b=l.byId(d[e]))b._hasBeenBlurred=!0,b.set("focused",!1),b._focusManager==this&&b._onBlur(c),this.emit("widget-blur",b,c);for(e++;e<=f;e++)if(b=l.byId(a[e]))b.set("focused",!0),b._focusManager==this&&b._onFocus(c),this.emit("widget-focus",b,c)}},focus:function(a){if(a)try{a.focus()}catch(c){}}}));y(function(){var a=c.registerWin(r.get(document));
z("ie")&&k(window,"unload",function(){a&&(a.remove(),a=null)})});m.focus=function(a){c.focus(a)};for(var f in c)/^_/.test(f)||(m.focus[f]="function"==typeof c[f]?h.hitch(c,f):c[f]);c.watch(function(a,c,d){m.focus[a]=d});return c});