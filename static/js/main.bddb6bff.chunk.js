(this["webpackJsonpkage-editor"]=this["webpackJsonpkage-editor"]||[]).push([[0],{22:function(e){e.exports=JSON.parse("{}")},26:function(e,t,n){e.exports=n(51)},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(8),l=n.n(o),s=n(5),i=n(4),u=n(2),h=n(3),d=n(1),m=n(19),v=n(10),f=n(20),g=n.n(f);!function(e){e[e.north=0]="north",e[e.south=1]="south",e[e.east=2]="east",e[e.west=3]="west",e[e.southeast=4]="southeast"}(a||(a={}));var p,b=g()("EDITOR"),O={selectSingle:b("SELECT_SINGLE"),selectAddSingle:b("SELECT_ADD_SINGLE"),selectRemoveSingle:b("SELECT_REMOVE_SINGLE"),selectNone:b("SELECT_NONE"),selectAll:b("SELECT_ALL"),selectPrev:b("SELECT_PREV"),selectNext:b("SELECT_NEXT"),startAreaSelect:b("AREA_SELECT_START"),startSelectionDrag:b("SELECTION_DRAG_START"),startPointDrag:b("MOVE_POINT_START"),startResize:b("RESIZE_START"),mouseMove:b("MOUSE_MOVE"),mouseUp:b("MOUSE_UP"),updateCTMInv:b("UPDATE_CTMINV")},j=function(e){var t=e.value.slice();return 99===t[0]&&(t[7]=e.partName||""),t.join(":")},S=function(e){var t=e.map((function(e){return Object(u.a)(e,1)[0]})),n=e.map((function(e){return Object(u.a)(e,2)[1]}));return[Math.min.apply(Math,Object(h.a)(t)),Math.min.apply(Math,Object(h.a)(n)),Math.max.apply(Math,Object(h.a)(t)),Math.max.apply(Math,Object(h.a)(n))]},E=function(e){switch(e.value[0]){case 99:return S([[e.value[3],e.value[4]],[e.value[5],e.value[6]]]);case 0:case 1:case 2:case 3:case 4:case 6:case 7:case 9:for(var t=[],n=3;n+2<=e.value.length;n+=2)t.push([e.value[n],e.value[n+1]]);return S(t);default:return S([])}},y=function(e,t){var n=Object(u.a)(e,4),a=n[0],c=n[1],r=n[2],o=n[3],l=Object(u.a)(t,4),s=l[0],i=l[1],h=l[2],d=l[3];return[Math.min(a,s),Math.min(c,i),Math.max(r,h),Math.max(o,d)]},M=new(n(21).Kage),w=null,C=function(e){var t;if(e===(null===(t=w)||void 0===t?void 0:t.glyph))return w.result;var n=e.map(j),a=M.makeGlyphSeparated(n);return w={glyph:e,result:a},a},D=new URLSearchParams(window.location.hash.slice(1)),N={glyph:(p=D.get("data")||"",p.split(/[$\r\n]+/).map((function(e){return function(e){for(var t=e.split(":"),n=function(e){switch(e){case 0:case 1:case 9:return 7;case 2:return 9;case 3:case 4:case 6:case 99:return 11;default:return 0}}(+t[0]),a=[],c=0;c<n;c++)a.push(Math.floor(+t[c]||0));return 99===a[0]?{value:a,partName:t[7]||""}:{value:a}}(e)})).filter((function(e){return 0!==(t=e).value.length&&(0!==t.value[0]||97===t.value[1]||98===t.value[1]||99===t.value[1]);var t}))),selection:[],areaSelectRect:null,dragSelection:null,dragPoint:null,resizeSelection:null,ctmInv:null},I=Object(m.reducerWithInitialState)(N).case(O.selectSingle,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{selection:[t]})})).case(O.selectAddSingle,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{selection:e.selection.includes(t)?e.selection:e.selection.concat([t])})})).case(O.selectRemoveSingle,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{selection:e.selection.filter((function(e){return t!==e}))})})).case(O.selectAll,(function(e){return Object(d.a)(Object(d.a)({},e),{},{selection:e.glyph.map((function(e,t){return t}))})})).case(O.selectNone,(function(e){return Object(d.a)(Object(d.a)({},e),{},{selection:[]})})).case(O.selectPrev,(function(e){if(0===e.glyph.length)return Object(d.a)(Object(d.a)({},e),{},{selection:[]});var t=0===e.selection.length?0:Math.min.apply(Math,Object(h.a)(e.selection));return Object(d.a)(Object(d.a)({},e),{},{selection:[(t-1+e.glyph.length)%e.glyph.length]})})).case(O.selectNext,(function(e){if(0===e.glyph.length)return Object(d.a)(Object(d.a)({},e),{},{selection:[]});var t=0===e.selection.length?-1:Math.max.apply(Math,Object(h.a)(e.selection));return Object(d.a)(Object(d.a)({},e),{},{selection:[(t+1+e.glyph.length)%e.glyph.length]})})).case(O.startAreaSelect,(function(e,t){if(!e.ctmInv)return e;var n=e.ctmInv(t.clientX,t.clientY),a=Object(u.a)(n,2),c=a[0],r=a[1];return Object(d.a)(Object(d.a)({},e),{},{areaSelectRect:[c,r,c,r]})})).case(O.startSelectionDrag,(function(e,t){if(!e.ctmInv)return e;var n=e.ctmInv(t.clientX,t.clientY),a=Object(u.a)(n,2),c=a[0],r=a[1];return Object(d.a)(Object(d.a)({},e),{},{dragSelection:[c,r,c,r]})})).case(O.startPointDrag,(function(e,t){var n=Object(u.a)(t,2),a=n[0],c=n[1];if(!e.ctmInv)return e;var r=e.ctmInv(a.clientX,a.clientY),o=Object(u.a)(r,2),l=o[0],s=o[1];return Object(d.a)(Object(d.a)({},e),{},{dragPoint:[c,[l,s,l,s]]})})).case(O.startResize,(function(e,t){var n=Object(u.a)(t,2),a=n[0],c=n[1];if(!e.ctmInv)return e;var r=e.ctmInv(a.clientX,a.clientY),o=Object(u.a)(r,2),l=o[0],s=o[1];return Object(d.a)(Object(d.a)({},e),{},{resizeSelection:[c,[l,s,l,s]]})})).case(O.mouseMove,(function(e,t){if(!e.ctmInv)return e;if(e.areaSelectRect){var n=Object(u.a)(e.areaSelectRect,2),a=n[0],c=n[1],r=e.ctmInv(t.clientX,t.clientY),o=Object(u.a)(r,2),l=o[0],s=o[1];return Object(d.a)(Object(d.a)({},e),{},{areaSelectRect:[a,c,l,s]})}if(e.dragSelection){var i=Object(u.a)(e.dragSelection,2),h=i[0],m=i[1],v=e.ctmInv(t.clientX,t.clientY),f=Object(u.a)(v,2),g=f[0],p=f[1];return Object(d.a)(Object(d.a)({},e),{},{dragSelection:[h,m,g,p]})}if(e.dragPoint){var b=Object(u.a)(e.dragPoint,2),O=b[0],j=Object(u.a)(b[1],2),S=j[0],E=j[1],y=e.ctmInv(t.clientX,t.clientY),M=Object(u.a)(y,2),w=M[0],C=M[1];return Object(d.a)(Object(d.a)({},e),{},{dragPoint:[O,[S,E,w,C]]})}if(e.resizeSelection){var D=Object(u.a)(e.resizeSelection,2),N=D[0],I=Object(u.a)(D[1],2),R=I[0],x=I[1],k=e.ctmInv(t.clientX,t.clientY),T=Object(u.a)(k,2),P=T[0],A=T[1];return Object(d.a)(Object(d.a)({},e),{},{resizeSelection:[N,[R,x,P,A]]})}return e})).case(O.mouseUp,(function(e,t){if(!e.ctmInv)return e;if(e.areaSelectRect){var n=Object(u.a)(e.areaSelectRect,2),a=n[0],c=n[1],r=e.ctmInv(t.clientX,t.clientY),o=Object(u.a)(r,2),l=o[0],s=o[1],i=function(e,t,n,a,c){for(var r=C(e),o=[],l=[[t,n],[t,c],[a,c],[a,n],[t,n]],s=0;s<r.length;s++){r[s].array.some((function(e){var t=e.array.map((function(e){return[e.x,e.y]}));return t.push(t[0]),Object(v.a)(l,t)||Object(v.a)(t,l)||Object(v.b)(l,t)}))&&o.push(s)}return o}(e.glyph,a,c,l,s),h=Array.from(new Set(e.selection.concat(i)));return Object(d.a)(Object(d.a)({},e),{},{selection:h,areaSelectRect:null})}if(e.dragSelection){var m=Object(u.a)(e.dragSelection,2),f=(m[0],m[1],e.ctmInv(t.clientX,t.clientY)),g=Object(u.a)(f,2),p=(g[0],g[1],b=e.glyph,e.selection,b);return Object(d.a)(Object(d.a)({},e),{},{glyph:p,dragSelection:null})}var b;if(e.dragPoint){var O=Object(u.a)(e.dragPoint,2),j=(O[0],Object(u.a)(O[1],2)),S=(j[0],j[1],e.ctmInv(t.clientX,t.clientY)),E=Object(u.a)(S,2),y=(E[0],E[1],function(e,t,n,a,c){return e}(e.glyph,e.selection));return Object(d.a)(Object(d.a)({},e),{},{glyph:y,dragPoint:null})}if(e.resizeSelection){var M=Object(u.a)(e.resizeSelection,2),w=(M[0],Object(u.a)(M[1],2)),D=(w[0],w[1],e.ctmInv(t.clientX,t.clientY)),N=Object(u.a)(D,2),I=(N[0],N[1],function(e,t,n,a,c){return e}(e.glyph,e.selection));return Object(d.a)(Object(d.a)({},e),{},{glyph:I,resizeSelection:null})}return e})).case(O.updateCTMInv,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{ctmInv:t})})),R=Object(i.b)({editor:I}),x=(n(44),n(45),function(e){return r.a.createElement(r.a.Fragment,null,e.polygons.array.map((function(e,t){return r.a.createElement("polygon",{key:t,points:e.array.map((function(e){var t=e.x,n=e.y;return"".concat(t,",").concat(n," ")})).join("")})})))}),k=(n(46),function(e){var t=C(e.glyph),n=e.selection,a=t.map((function(e,t){return t})).filter((function(e){return!n.includes(e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("g",{className:"strokes-deselected"},a.map((function(n){return r.a.createElement("g",{key:n,onMouseDown:function(t){var a;return null===(a=e.handleMouseDownDeselectedStroke)||void 0===a?void 0:a.call(e,t,n)}},r.a.createElement(x,{polygons:t[n]}))}))),r.a.createElement("g",{className:"strokes-selected"},n.map((function(n){return r.a.createElement("g",{key:n,onMouseDown:function(t){var a;return null===(a=e.handleMouseDownSelectedStroke)||void 0===a?void 0:a.call(e,t,n)}},r.a.createElement(x,{polygons:t[n]}))}))))}),T=(n(47),function(e){if(!e.rect)return null;var t=Object(u.a)(e.rect,4),n=t[0],a=t[1],c=t[2],o=t[3];if(n>c){var l=n;n=c,c=l}if(a>o){var s=a;a=o,o=s}return r.a.createElement("rect",{className:"areaselect-rect",x:n,y:a,width:c-n,height:o-a})}),P=(n(48),function(e){return r.a.createElement("rect",{x:e.x-4,y:e.y-4,width:8,height:8,className:"controlpoint-rect ".concat(e.className||""),onMouseDown:e.handleMouseDown})}),A=(n(49),function(e){return r.a.createElement(r.a.Fragment,null,e.rectControl&&r.a.createElement(r.a.Fragment,null,r.a.createElement("rect",{className:"selection-rect",x:e.rectControl.coords[0],y:e.rectControl.coords[1],width:e.rectControl.coords[2]-e.rectControl.coords[0],height:e.rectControl.coords[3]-e.rectControl.coords[1]}),r.a.createElement(P,{x:(e.rectControl.coords[0]+e.rectControl.coords[2])/2,y:e.rectControl.coords[1],className:"north",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.north)}}),r.a.createElement(P,{x:e.rectControl.coords[0],y:(e.rectControl.coords[1]+e.rectControl.coords[3])/2,className:"west",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.west)}}),r.a.createElement(P,{x:(e.rectControl.coords[0]+e.rectControl.coords[2])/2,y:e.rectControl.coords[3],className:"south",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.south)}}),r.a.createElement(P,{x:e.rectControl.coords[2],y:(e.rectControl.coords[1]+e.rectControl.coords[3])/2,className:"east",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.east)}}),r.a.createElement(P,{x:e.rectControl.coords[2],y:e.rectControl.coords[3],className:"southeast",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.southeast)}})),e.pointControl.map((function(t,n){var a=t.x,c=t.y,o=t.className;return r.a.createElement(P,{key:n,x:a,y:c,className:o,handleMouseDown:function(t){return e.handleMouseDownPointControl(t,n)}})})))}),L=Object(s.b)((function(e){if(0===e.editor.selection.length)return{rectControl:null,pointControl:[]};if(e.editor.selection.length>1){var t=e.editor.selection.map((function(t){return e.editor.glyph[t]}));return{rectControl:{multiSelect:!0,coords:t.map(E).reduce(y,S([]))},pointControl:[]}}var n=e.editor.glyph[e.editor.selection[0]];switch(n.value[0]){case 0:case 9:case 99:return{rectControl:{multiSelect:!1,coords:[n.value[3],n.value[4],n.value[5],n.value[6]]},pointControl:[]};case 1:case 2:case 3:case 4:case 6:case 7:for(var a=[],c=3;c+2<=n.value.length;c+=2)a.push({x:n.value[c],y:n.value[c+1],className:""});return{rectControl:null,pointControl:a};default:return{rectControl:null,pointControl:[]}}}),(function(e){return{handleMouseDownRectControl:function(t,n){e(O.startResize([t,n])),t.stopPropagation()},handleMouseDownPointControl:function(t,n){e(O.startPointDrag([t,n])),t.stopPropagation()}}}))(A),_=(n(50),function(e){var t=e.handleMouseMove,n=e.handleMouseUp;return Object(c.useEffect)((function(){return document.addEventListener("mousemove",t),document.addEventListener("mouseup",n),function(){document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",n)}}),[t,n]),r.a.createElement("div",{className:"glyph-area"},r.a.createElement("svg",{width:"100%",height:"100%",viewBox:"-20 -20 500 240",onMouseDownCapture:e.handleMouseDownCapture,onMouseDown:e.handleMouseDownBackground},r.a.createElement("rect",{x:"0",y:"0",width:"200",height:"200",className:"glyph-boundary"}),r.a.createElement("rect",{x:"12",y:"12",width:"176",height:"176",className:"glyph-guide"}),r.a.createElement(k,{glyph:e.glyph,selection:e.selection,handleMouseDownDeselectedStroke:e.handleMouseDownDeselectedStroke,handleMouseDownSelectedStroke:e.handleMouseDownSelectedStroke}),r.a.createElement(L,null),r.a.createElement(T,{rect:e.areaSelectRect})))}),z=Object(s.b)((function(e){return Object(d.a)({},e.editor)}),(function(e){return{handleMouseDownCapture:function(t){if(t.target instanceof SVGSVGElement){var n=t.target.getScreenCTM();if(n){var a=t.target.createSVGPoint();e(O.updateCTMInv((function(e,t){a.x=e,a.y=t;var c=a.matrixTransform(n.inverse());return[c.x,c.y]})))}}},handleMouseDownBackground:function(t){t.shiftKey||t.ctrlKey||e(O.selectNone()),e(O.startAreaSelect(t))},handleMouseDownDeselectedStroke:function(t,n){t.shiftKey||t.ctrlKey?e(O.selectAddSingle(n)):e(O.selectSingle(n)),e(O.startSelectionDrag(t)),t.stopPropagation()},handleMouseDownSelectedStroke:function(t,n){(t.shiftKey||t.ctrlKey)&&e(O.selectRemoveSingle(n)),e(O.startSelectionDrag(t)),t.stopPropagation()},handleMouseMove:function(t){e(O.mouseMove(t))},handleMouseUp:function(t){e(O.mouseUp(t))}}}))(_);var X=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null),r.a.createElement("div",{className:"editor-controls"}),r.a.createElement("div",{className:"parts-list-area"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(14),U=n(53),V={ja:{translation:n(22)}},G=D.get("host"),K="ja";if(G)switch(G.split(".")[0]){case"en":K="en";break;case"ko":K="ko";break;case"zhs":K="zh-Hans";break;case"zht":K="zh-Hant"}Y.a.use(U.a).init({resources:V,lng:K,returnObjects:!0,interpolation:{escapeValue:!1}});Y.a;var B=Object(i.c)(R);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:B},r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.bddb6bff.chunk.js.map