!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/assets/",r(r.s=8)}([,function(t,e,r){"use strict";r.r(e),e.default=r.p+"index.css"},,,,,,,function(t,e,r){r(9),t.exports=r(1)},function(t,e,r){"use strict";r.r(e);var n;r(10),r(11);(n=jQuery)(document).ready((function(){n("#fullpage").fullpage({anchors:["intro","graph1","graph2","graph3","graph4","graph5","challenges","you-have-the-power-to-help","do-it-today","footer"],sectionsColor:["#F2F2F2","#D6D6D6","#F2F2F2","#D6D6D6","#F2F2F2","#D6D6D6","#F2F2F2","#D6D6D6","#F2F2F2","#1B1C1C"],navigation:!0,navigationPosition:"right",navigationTooltips:["Introduction","Graph 1","Current challenges"],afterLoad:function(t,e){var r=n("#section"+e+" > div > div.container > div.flip > div > svg > g > rect");setTimeout((function(){r.animate({svgWidth:0},7e3,"linear")}),2e3)},onLeave:function(t,e){n("#section"+e+" > div > div.container > div.flip > div > svg > g > rect").attr("width","732")}}),n(".bg-image-zoom-in").css("transform","scale(1.2)")}));var a=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,100],a=d3.min(e,(function(t){return t.year})),i=d3.max(e,(function(t){return t.year})),s=d3.scaleLinear().domain([a,i]).range([0,730]),o=d3.scaleLinear().domain(n).range([330,0]),l=d3.axisBottom(s).tickFormat(d3.format("d")),d=d3.axisLeft(o),c=d3.axisBottom(s).ticks(9).tickSize(330,0).tickFormat(""),h=d3.axisRight(o).ticks(10).tickSize(730,0).tickFormat(""),p=d3.select(t).select((function(){return this.parentNode})).select((function(){return this.parentNode})).style("background-color"),u=d3.select(t).append("svg").attr("width",800).attr("height",400),g=u.append("g").attr("transform","translate(50,50)"),f=d3.line().x((function(t){return s(t.year)})).y((function(t){return o(t[r])})),m=d3.area().x((function(t){return s(t.year)})).y0(330).y1((function(t){return o(t[r])})),v=u.append("defs"),y=v.append("linearGradient").attr("id","redGradient").attr("x1","0%").attr("y1","0%").attr("x2","100%").attr("y2","100%").attr("spreadMethod","pad");y.append("stop").attr("offset","0%").attr("stop-color","#c00").attr("stop-opacity",1),y.append("stop").attr("offset","100%").attr("stop-color",p).attr("stop-opacity","0.2");var x,_=v.append("linearGradient").attr("id","greenGradient").attr("x1","0%").attr("y1","0%").attr("x2","100%").attr("y2","100%").attr("spreadMethod","pad");_.append("stop").attr("offset","0%").attr("stop-color",p).attr("stop-opacity","0.2"),_.append("stop").attr("offset","100%").attr("stop-color","#008000").attr("stop-opacity",1),x=e[0][r]>e.slice(-1)[0][r]?"url(#redGradient)":"url(#greenGradient)";var k=d3.select("body").append("div").attr("class","graph-tooltip").text("a simple tooltip");g.append("path").attr("d",m(e)).style("fill",x).style("fill-opacity","0.6").style("stroke-width","0"),g.append("path").attr("d",f(e)).attr("class","graph-line");var b=g.append("g").attr("class","graph-dot").attr("width",800).attr("height",400);b.append("circle").attr("r",1).attr("cx",0).attr("cy",0),b.selectAll(".circle").data(e).enter().append("circle").attr("r",3).attr("fill-opacity",1).style("fill","#fff").attr("cx",(function(t){return s(t.year)})).attr("cy",(function(t){return o(t[r])})).on("mouseover",(function(t){k.style("visibility","visible"),k.text("".concat(t.year,": ").concat(t[r]))})).on("mousemove",(function(){k.style("top",d3.event.pageY-50+"px").style("left",d3.event.pageX+"px")})).on("mouseout",(function(){return k.style("visibility","hidden")})),g.append("rect").attr("x",-734).attr("y",-330).attr("height",330).attr("width",734).attr("fill",p).attr("transform","rotate(180)"),g.append("g").attr("transform","translate(0, 330)").call(l),g.append("g").call(d),g.append("g").call(h).attr("class","axis-grid"),g.append("g").call(c).attr("class","axis-grid")};d3.csv("/assets/datasets/child-mortality.csv").then((function(t){a("#child-mortality-graph-container",t,"notSurvivingFiveYears")})),d3.csv("/assets/datasets/life-expectancy-in-uk.csv").then((function(t){a("#life-expectancy-graph-container",t,"lifeExpectancyInUK")})),d3.csv("/assets/datasets/extreme-poverty-percentage.csv").then((function(t){a("#extreme-poverty-graph-container",t,"extremePovertyPercentage")})),d3.csv("/assets/datasets/gdp.csv").then((function(t){a("#gdp-graph-container",t,"gdp",[1e3,15e3])})),d3.csv("/assets/datasets/literate-illiterate.csv").then((function(t){a("#literacy-graph-container",t,"literatePercentage")})),particlesJS("particles-js",{particles:{number:{value:20,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:30,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){function e(){this._settings=[],this._extensions=[],this.regional=[],this.regional[""]={errorLoadingText:"Error loading"},this.local=this.regional[""],this._uuid=(new Date).getTime(),this._ie=!!window.ActiveXObject}function n(e,r){this._svg=e,this._container=r;for(var n=0;n<t.svg._extensions.length;n++){var a=t.svg._extensions[n];this[a[0]]=new a[1](this)}}function a(){this._path=""}function i(){this._parts=[]}t.extend(e.prototype,{markerClassName:"hasSVG",propertyName:"svgwrapper",svgNS:"http://www.w3.org/2000/svg",xlinkNS:"http://www.w3.org/1999/xlink",_wrapperClass:n,_attrNames:{class_:"class",in_:"in",alignmentBaseline:"alignment-baseline",baselineShift:"baseline-shift",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",underlinePosition:"underline-position",underlineThickness:"underline-thickness",vertAdvY:"vert-adv-y",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode"},_attachSVG:function(e,r){var n=e.namespaceURI===this.svgNS?e:null;if(!t((e=n?null:e)||n).hasClass(this.markerClassName)){"string"==typeof r?r={loadURL:r}:"function"==typeof r&&(r={onLoad:r}),t(e||n).addClass(this.markerClassName);try{n||((n=document.createElementNS(this.svgNS,"svg")).setAttribute("version","1.1"),e.clientWidth>0&&n.setAttribute("width",e.clientWidth),e.clientHeight>0&&n.setAttribute("height",e.clientHeight),e.appendChild(n)),this._afterLoad(e,n,r||{})}catch(r){t(e).html("<p>SVG is not supported natively on this browser</p>")}}},_afterLoad:function(e,r,n){n=n||this._settings[e.id];this._settings[e?e.id:""]=null;var a=new this._wrapperClass(r,e);t.data(e||r,t.svg.propertyName,a);try{n.loadURL&&a.load(n.loadURL,n),n.settings&&a.configure(n.settings),n.onLoad&&!n.loadURL&&n.onLoad.apply(e||r,[a])}catch(t){alert(t)}},_getSVG:function(e){return t(e).data(this.propertyName)},_destroySVG:function(e){(e=t(e)).hasClass(this.markerClassName)&&(e.removeClass(this.markerClassName).removeData(this.propertyName),e[0].namespaceURI!==this.svgNS&&e.empty())},addExtension:function(t,e){this._extensions.push([t,e])},isSVGElem:function(e){return 1===e.nodeType&&e.namespaceURI===t.svg.svgNS}}),t.extend(n.prototype,{width:function(){return this._container?this._container.clientWidth:this._svg.width},height:function(){return this._container?this._container.clientHeight:this._svg.height},root:function(){return this._svg},configure:function(e,r,n){if(e.nodeName||(n=r,r=e,e=this._svg),n)for(var a=e.attributes.length-1;a>=0;a--){var i=e.attributes.item(a);"onload"!==i.nodeName&&"version"!==i.nodeName&&"xmlns"!==i.nodeName.substring(0,5)&&e.attributes.removeNamedItem(i.nodeName)}for(var s in r)e.setAttribute(t.svg._attrNames[s]||s,r[s]);return this},getElementById:function(t){return this._svg.ownerDocument.getElementById(t)},change:function(e,r){if(e)for(var n in r)null==r[n]?e.removeAttribute(t.svg._attrNames[n]||n):e.setAttribute(t.svg._attrNames[n]||n,r[n]);return this},_args:function(e,n,a){n.splice(0,0,"parent"),n.splice(n.length,0,"settings");var i={},s=0;null!=e[0]&&e[0].jquery&&(e[0]=e[0][0]),null==e[0]||"object"===r(e[0])&&e[0].nodeName||(i.parent=null,s=1);for(var o=0;o<e.length;o++)i[n[o+s]]=e[o];return a&&t.each(a,(function(t,e){"object"===r(i[e])&&(i.settings=i[e],i[e]=null)})),i},title:function(t,e,r){var n=this._args(arguments,["text"]),a=this._makeNode(n.parent,"title",n.settings||{});return a.appendChild(this._svg.ownerDocument.createTextNode(n.text)),a},describe:function(t,e,r){var n=this._args(arguments,["text"]),a=this._makeNode(n.parent,"desc",n.settings||{});return a.appendChild(this._svg.ownerDocument.createTextNode(n.text)),a},defs:function(e,r,n){var a=this._args(arguments,["id"],["id"]);return this._makeNode(a.parent,"defs",t.extend(a.id?{id:a.id}:{},a.settings||{}))},symbol:function(e,r,n,a,i,s,o){var l=this._args(arguments,["id","x1","y1","width","height"]);return this._makeNode(l.parent,"symbol",t.extend({id:l.id,viewBox:l.x1+" "+l.y1+" "+l.width+" "+l.height},l.settings||{}))},marker:function(e,r,n,a,i,s,o,l){var d=this._args(arguments,["id","refX","refY","mWidth","mHeight","orient"],["orient"]);return this._makeNode(d.parent,"marker",t.extend({id:d.id,refX:d.refX,refY:d.refY,markerWidth:d.mWidth,markerHeight:d.mHeight,orient:d.orient||"auto"},d.settings||{}))},style:function(e,r,n){var a=this._args(arguments,["styles"]),i=this._makeNode(a.parent,"style",t.extend({type:"text/css"},a.settings||{}));return i.appendChild(this._svg.ownerDocument.createTextNode(a.styles)),i},script:function(e,r,n,a){var i=this._args(arguments,["script","type"],["type"]),s=this._makeNode(i.parent,"script",t.extend({type:i.type||"text/javascript"},i.settings||{}));return s.appendChild(this._svg.ownerDocument.createTextNode(i.script)),t.svg._ie&&t.globalEval(i.script),s},linearGradient:function(e,r,n,a,i,s,o,l){var d=this._args(arguments,["id","stops","x1","y1","x2","y2"],["x1"]),c=t.extend({id:d.id},null!=d.x1?{x1:d.x1,y1:d.y1,x2:d.x2,y2:d.y2}:{});return this._gradient(d.parent,"linearGradient",t.extend(c,d.settings||{}),d.stops)},radialGradient:function(e,r,n,a,i,s,o,l,d){var c=this._args(arguments,["id","stops","cx","cy","r","fx","fy"],["cx"]),h=t.extend({id:c.id},null!=c.cx?{cx:c.cx,cy:c.cy,r:c.r,fx:c.fx,fy:c.fy}:{});return this._gradient(c.parent,"radialGradient",t.extend(h,c.settings||{}),c.stops)},_gradient:function(e,r,n,a){for(var i=this._makeNode(e,r,n),s=0;s<a.length;s++){var o=a[s];this._makeNode(i,"stop",t.extend({offset:o[0],stopColor:o[1]},null!=o[2]?{stopOpacity:o[2]}:{}))}return i},pattern:function(e,r,n,a,i,s,o,l,d,c,h){var p=this._args(arguments,["id","x","y","width","height","vx","vy","vwidth","vheight"],["vx"]),u=t.extend({id:p.id,x:p.x,y:p.y,width:p.width,height:p.height},null!=p.vx?{viewBox:p.vx+" "+p.vy+" "+p.vwidth+" "+p.vheight}:{});return this._makeNode(p.parent,"pattern",t.extend(u,p.settings||{}))},clipPath:function(e,r,n,a){var i=this._args(arguments,["id","units"]);return i.units=i.units||"userSpaceOnUse",this._makeNode(i.parent,"clipPath",t.extend({id:i.id,clipPathUnits:i.units},i.settings||{}))},mask:function(e,r,n,a,i,s,o){var l=this._args(arguments,["id","x","y","width","height"]);return this._makeNode(l.parent,"mask",t.extend({id:l.id,x:l.x,y:l.y,width:l.width,height:l.height},l.settings||{}))},createPath:function(){return new a},createText:function(){return new i},svg:function(e,r,n,a,i,s,o,l,d,c){var h=this._args(arguments,["x","y","width","height","vx","vy","vwidth","vheight"],["vx"]),p=t.extend({x:h.x,y:h.y,width:h.width,height:h.height},null!=h.vx?{viewBox:h.vx+" "+h.vy+" "+h.vwidth+" "+h.vheight}:{});return this._makeNode(h.parent,"svg",t.extend(p,h.settings||{}))},group:function(e,r,n){var a=this._args(arguments,["id"],["id"]);return this._makeNode(a.parent,"g",t.extend({id:a.id},a.settings||{}))},use:function(e,r,n,a,i,s,o){var l=this._args(arguments,["x","y","width","height","ref"]);"string"==typeof l.x&&(l.ref=l.x,l.settings=l.y,l.x=l.y=l.width=l.height=null);var d=this._makeNode(l.parent,"use",t.extend({x:l.x,y:l.y,width:l.width,height:l.height},l.settings||{}));return d.setAttributeNS(t.svg.xlinkNS,"href",l.ref),d},link:function(e,r,n){var a=this._args(arguments,["ref"]),i=this._makeNode(a.parent,"a",a.settings);return i.setAttributeNS(t.svg.xlinkNS,"href",a.ref),i},image:function(e,r,n,a,i,s,o){var l=this._args(arguments,["x","y","width","height","ref"]),d=this._makeNode(l.parent,"image",t.extend({x:l.x,y:l.y,width:l.width,height:l.height},l.settings||{}));return d.setAttributeNS(t.svg.xlinkNS,"href",l.ref),d},path:function(e,r,n){var a=this._args(arguments,["path"]);return this._makeNode(a.parent,"path",t.extend({d:a.path.path?a.path.path():a.path},a.settings||{}))},rect:function(e,r,n,a,i,s,o,l){var d=this._args(arguments,["x","y","width","height","rx","ry"],["rx"]);return this._makeNode(d.parent,"rect",t.extend({x:d.x,y:d.y,width:d.width,height:d.height},d.rx?{rx:d.rx,ry:d.ry}:{},d.settings||{}))},circle:function(e,r,n,a,i){var s=this._args(arguments,["cx","cy","r"]);return this._makeNode(s.parent,"circle",t.extend({cx:s.cx,cy:s.cy,r:s.r},s.settings||{}))},ellipse:function(e,r,n,a,i,s){var o=this._args(arguments,["cx","cy","rx","ry"]);return this._makeNode(o.parent,"ellipse",t.extend({cx:o.cx,cy:o.cy,rx:o.rx,ry:o.ry},o.settings||{}))},line:function(e,r,n,a,i,s){var o=this._args(arguments,["x1","y1","x2","y2"]);return this._makeNode(o.parent,"line",t.extend({x1:o.x1,y1:o.y1,x2:o.x2,y2:o.y2},o.settings||{}))},polyline:function(t,e,r){var n=this._args(arguments,["points"]);return this._poly(n.parent,"polyline",n.points,n.settings)},polygon:function(t,e,r){var n=this._args(arguments,["points"]);return this._poly(n.parent,"polygon",n.points,n.settings)},_poly:function(e,r,n,a){for(var i="",s=0;s<n.length;s++)i+=n[s].join()+" ";return this._makeNode(e,r,t.extend({points:t.trim(i)},a||{}))},text:function(e,r,n,a,i){var s=this._args(arguments,["x","y","value"]);return"string"==typeof s.x&&arguments.length<4&&(s.value=s.x,s.settings=s.y,s.x=s.y=null),this._text(s.parent,"text",s.value,t.extend({x:s.x&&t.isArray(s.x)?s.x.join(" "):s.x,y:s.y&&t.isArray(s.y)?s.y.join(" "):s.y},s.settings||{}))},textpath:function(e,r,n,a){var i=this._args(arguments,["path","value"]),s=this._text(i.parent,"textPath",i.value,i.settings||{});return s.setAttributeNS(t.svg.xlinkNS,"href",i.path),s},_text:function(e,r,n,a){var i=this._makeNode(e,r,a);if("string"==typeof n)i.appendChild(i.ownerDocument.createTextNode(n));else for(var s=0;s<n._parts.length;s++){var o=n._parts[s];if("tspan"===o[0])(l=this._makeNode(i,o[0],o[2])).appendChild(i.ownerDocument.createTextNode(o[1])),i.appendChild(l);else if("tref"===o[0]){(l=this._makeNode(i,o[0],o[2])).setAttributeNS(t.svg.xlinkNS,"href",o[1]),i.appendChild(l)}else if("textpath"===o[0]){var l,d=t.extend({},o[2]);d.href=null,(l=this._makeNode(i,o[0],d)).setAttributeNS(t.svg.xlinkNS,"href",o[2].href),l.appendChild(i.ownerDocument.createTextNode(o[1])),i.appendChild(l)}else i.appendChild(i.ownerDocument.createTextNode(o[1]))}return i},other:function(t,e,r){var n=this._args(arguments,["name"]);return this._makeNode(n.parent,n.name,n.settings||{})},_makeNode:function(e,r,n){e=e||this._svg;var a=this._svg.ownerDocument.createElementNS(t.svg.svgNS,r);for(var r in n){var i=n[r];null==i||"string"==typeof i&&""===i||a.setAttribute(t.svg._attrNames[r]||r,i)}return e.appendChild(a),a},add:function(e,r){var n=this._args(1===arguments.length?[null,e]:arguments,["node"]),a=this;n.parent=n.parent||this._svg,n.node=n.node.jquery?n.node:t(n.node);try{n.parent.appendChild(n.node.cloneNode(!0))}catch(t){n.node.each((function(){var t=a._cloneAsSVG(this);t&&n.parent.appendChild(t)}))}return this},clone:function(e,r){var n=this,a=this._args(1===arguments.length?[null,e]:arguments,["node"]);a.parent=a.parent||this._svg,a.node=a.node.jquery?a.node:t(a.node);var i=[];return a.node.each((function(){var t=n._cloneAsSVG(this);t&&(t.id="",a.parent.appendChild(t),i.push(t))})),i},_cloneAsSVG:function(e){var r=null;if(1===e.nodeType){r=this._svg.ownerDocument.createElementNS(t.svg.svgNS,this._checkName(e.nodeName));for(var n=0;n<e.attributes.length;n++){var a=e.attributes.item(n);"xmlns"!==a.nodeName&&a.nodeValue&&("xlink"===a.prefix?r.setAttributeNS(t.svg.xlinkNS,a.localName||a.baseName,a.nodeValue):r.setAttribute(this._checkName(a.nodeName),a.nodeValue))}for(n=0;n<e.childNodes.length;n++){var i=this._cloneAsSVG(e.childNodes[n]);i&&r.appendChild(i)}}else if(3===e.nodeType)t.trim(e.nodeValue)&&(r=this._svg.ownerDocument.createTextNode(e.nodeValue));else if(4===e.nodeType&&t.trim(e.nodeValue))try{r=this._svg.ownerDocument.createCDATASection(e.nodeValue)}catch(t){r=this._svg.ownerDocument.createTextNode(e.nodeValue.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"))}return r},_checkName:function(t){return"svg:"===(t=t.substring(0,1)>="A"&&t.substring(0,1)<="Z"?t.toLowerCase():t).substring(0,4)?t.substring(4):t},load:function(e,n){(n="boolean"==typeof n?{addTo:n}:"function"==typeof n?{onLoad:n}:"string"==typeof n||"object"===r(n)&&n.nodeName||"object"===r(n)&&n.jquery?{parent:n}:n||{}).parent||n.addTo||this.clear(!1);var a=[this._svg.getAttribute("width"),this._svg.getAttribute("height")],i=this,s=function(e){e=t.svg.local.errorLoadingText+": "+e,n.onLoad?n.onLoad.apply(i._container||i._svg,[i,e]):i.text(null,10,20,e)},o=function(r){if(r)if("svg"===r.documentElement.nodeName){for(var o=n.parent?t(n.parent)[0]:i._svg,l={},d=0;d<r.documentElement.attributes.length;d++){var c=r.documentElement.attributes.item(d);"version"!==c.nodeName&&"xmlns"!==c.nodeName.substring(0,5)&&(l[c.nodeName]=c.nodeValue)}i.configure(o,l,!n.parent);var h=r.documentElement.childNodes;for(d=0;d<h.length;d++)try{o.appendChild(i._svg.ownerDocument.importNode(h[d],!0)),"script"===h[d].nodeName&&t.globalEval(h[d].textContent)}catch(t){i.add(o,h[d])}if(!n.keepRelativeLinks&&e.match("/")){var p=e.replace(/\/[^\/]*$/,"/");t("*",o).each((function(){var e=t(this).attr("xlink:href");e&&!e.match(/(^[a-z][-a-z0-9+.]*:.*$)|(^\/.*$)|(^#.*$)/i)&&t(this).attr("xlink:href",p+e)}))}n.changeSize||i.configure(o,{width:a[0],height:a[1]}),n.onLoad&&n.onLoad.apply(i._container||i._svg,[i])}else{var u=r.getElementsByTagName("parsererror"),g=u.length?u[0].getElementsByTagName("div"):[];s(u.length?(g.length?g[0]:u[0]).firstChild.nodeValue:"???")}};if(e.match("<svg"))try{o((new DOMParser).parseFromString(e,"text/xml"))}catch(t){s(t)}else t.ajax({url:e,dataType:"xml",success:function(t){o(t)},error:function(t,e,r){s(e+(r?" "+r.message:""))}});return this},remove:function(t){return(t=t.jquery?t[0]:t).parentNode.removeChild(t),this},clear:function(t){for(t&&this.configure({},!0);this._svg.firstChild;)this._svg.removeChild(this._svg.firstChild);return this},toSVG:function(t){return t=t||this._svg,"undefined"==typeof XMLSerializer?this._toSVG(t):(new XMLSerializer).serializeToString(t)},_toSVG:function(e){var r="";if(!e)return r;if(3===e.nodeType)r=e.nodeValue;else if(4===e.nodeType)r="<![CDATA["+e.nodeValue+"]]>";else{if(r="<"+e.nodeName,e.attributes)for(var n=0;n<e.attributes.length;n++){var a=e.attributes.item(n);""===t.trim(a.nodeValue)||a.nodeValue.match(/^\[object/)||a.nodeValue.match(/^function/)||(r+=" "+(a.namespaceURI===t.svg.xlinkNS?"xlink:":"")+a.nodeName+'="'+a.nodeValue+'"')}if(e.firstChild){r+=">";for(var i=e.firstChild;i;)r+=this._toSVG(i),i=i.nextSibling;r+="</"+e.nodeName+">"}else r+="/>"}return r}}),t.extend(a.prototype,{reset:function(){return this._path="",this},move:function(e,r,n){return n=t.isArray(e)?r:n,this._coords(n?"m":"M",e,r)},line:function(e,r,n){return n=t.isArray(e)?r:n,this._coords(n?"l":"L",e,r)},horiz:function(e,r){return this._path+=(r?"h":"H")+(t.isArray(e)?e.join(" "):e),this},vert:function(e,r){return this._path+=(r?"v":"V")+(t.isArray(e)?e.join(" "):e),this},curveC:function(e,r,n,a,i,s,o){return o=t.isArray(e)?r:o,this._coords(o?"c":"C",e,r,n,a,i,s)},smoothC:function(e,r,n,a,i){return i=t.isArray(e)?r:i,this._coords(i?"s":"S",e,r,n,a)},curveQ:function(e,r,n,a,i){return i=t.isArray(e)?r:i,this._coords(i?"q":"Q",e,r,n,a)},smoothQ:function(e,r,n){return n=t.isArray(e)?r:n,this._coords(n?"t":"T",e,r)},_coords:function(e,r,n,a,i,s,o){if(t.isArray(r))for(var l=0;l<r.length;l++){var d=r[l];this._path+=(0===l?e:" ")+d[0]+","+d[1]+(d.length<4?"":" "+d[2]+","+d[3]+(d.length<6?"":" "+d[4]+","+d[5]))}else this._path+=e+r+","+n+(null==a?"":" "+a+","+i+(null==s?"":" "+s+","+o));return this},arc:function(e,r,n,a,i,s,o,l){if(l=t.isArray(e)?r:l,this._path+=l?"a":"A",t.isArray(e))for(var d=0;d<e.length;d++){var c=e[d];this._path+=(0===d?"":" ")+c[0]+","+c[1]+" "+c[2]+" "+(c[3]?"1":"0")+","+(c[4]?"1":"0")+" "+c[5]+","+c[6]}else this._path+=e+","+r+" "+n+" "+(a?"1":"0")+","+(i?"1":"0")+" "+s+","+o;return this},close:function(){return this._path+="z",this},path:function(){return this._path}}),a.prototype.moveTo=a.prototype.move,a.prototype.lineTo=a.prototype.line,a.prototype.horizTo=a.prototype.horiz,a.prototype.vertTo=a.prototype.vert,a.prototype.curveCTo=a.prototype.curveC,a.prototype.smoothCTo=a.prototype.smoothC,a.prototype.curveQTo=a.prototype.curveQ,a.prototype.smoothQTo=a.prototype.smoothQ,a.prototype.arcTo=a.prototype.arc,t.extend(i.prototype,{reset:function(){return this._parts=[],this},string:function(t){return this._parts.push(["text",t]),this},span:function(t,e){return this._parts.push(["tspan",t,e]),this},ref:function(t,e){return this._parts.push(["tref",t,e]),this},path:function(e,r,n){return this._parts.push(["textpath",r,t.extend({href:e},n||{})]),this}}),t.fn.svg=function(e){var r=Array.prototype.slice.call(arguments,1);return"string"==typeof e&&"get"===e?t.svg["_"+e+"SVG"].apply(t.svg,[this[0]].concat(r)):this.each((function(){"string"==typeof e?t.svg["_"+e+"SVG"].apply(t.svg,[this].concat(r)):t.svg._attachSVG(this,e||{})}))},t.svg=new e}(jQuery)},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){var e=parseInt(t.fn.jquery,10)>1||parseInt(t.fn.jquery.substring(2),10)>5;function n(t){for(var e=t.split(/[, ]+/),r=0;r<e.length;r++)e[r]=parseFloat(e[r]),isNaN(e[r])&&(e[r]=0);if(e.length%2==1){var n=e.length;for(r=0;r<n;r++)e.push(e[r])}return e}function a(t){for(var e=t.split(/[, ]+/),r=0;r<e.length;r++)e[r]=parseFloat(e[r]),isNaN(e[r])&&(e[r]=0);for(;e.length<4;)e.push(0);return e}function i(e,n){"object"===r(e=e||"")&&(e=e.nodeValue);var a=t.extend({translateX:0,translateY:0,scaleX:0,scaleY:0,rotateA:0,rotateX:0,rotateY:0,skewX:0,skewY:0,matrix:[0,0,0,0,0,0]},n||{});a.order="";for(var i=/([a-zA-Z]+)\(\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*)?)?)?\)/g,s=i.exec(e);s;){switch(s[1]){case"translate":a.order+="t",a.translateX=parseFloat(s[2]),a.translateY=s[3]?parseFloat(s[3]):0;break;case"scale":a.order+="s",a.scaleX=parseFloat(s[2]),a.scaleY=s[3]?parseFloat(s[3]):a.scaleX;break;case"rotate":a.order+="r",a.rotateA=parseFloat(s[2]),a.rotateX=s[3]?parseFloat(s[3]):0,a.rotateY=s[4]?parseFloat(s[4]):0;break;case"skewX":a.order+="x",a.skewX=parseFloat(s[2]);break;case"skewY":a.order+="y",a.skewY=parseFloat(s[2]);break;case"matrix":a.order+="m",a.matrix=[parseFloat(s[2]),parseFloat(s[3]),parseFloat(s[4]),parseFloat(s[5]),parseFloat(s[6]),parseFloat(s[7])]}s=i.exec(e)}if("m"===a.order&&Math.abs(a.matrix[0])===Math.abs(a.matrix[3])&&0!==a.matrix[1]&&Math.abs(a.matrix[1])===Math.abs(a.matrix[2])){var o=180*Math.acos(a.matrix[0])/Math.PI;o=a.matrix[1]<0?360-o:o,a.order="rt",a.rotateA=o,a.rotateX=a.rotateY=0,a.translateX=a.matrix[4],a.translateY=a.matrix[5]}return a}t.each(["x","y","width","height","rx","ry","cx","cy","r","x1","y1","x2","y2","stroke-width","strokeWidth","opacity","fill-opacity","fillOpacity","stroke-opacity","strokeOpacity","stroke-dashoffset","strokeDashOffset","font-size","fontSize","font-weight","fontWeight","letter-spacing","letterSpacing","word-spacing","wordSpacing"],(function(r,n){var a=n.charAt(0).toUpperCase()+n.substr(1);t.cssProps&&(t.cssProps["svg"+a]=t.cssProps["svg-"+n]=n),t.fx.step["svg"+a]=t.fx.step["svg-"+n]=function(r){var i=t.svg._attrNames[n]||n,s=r.elem.attributes.getNamedItem(i);if(!r.set){r.start=s?parseFloat(s.nodeValue):0;var o=e?"":r.options.curAnim["svg"+a]||r.options.curAnim["svg-"+n];/^[+-]=/.exec(o)&&(r.end=r.start+parseFloat(o.replace(/=/,""))),t(r.elem).css(i,""),r.set=!0}var l=r.pos*(r.end-r.start)+r.start+("%"===r.unit?"%":"");s?s.nodeValue=l:r.elem.setAttribute(i,l)}})),t.fx.step.svgStrokeDashArray=t.fx.step["svg-strokeDashArray"]=t.fx.step["svgStroke-dasharray"]=t.fx.step["svg-stroke-dasharray"]=function(r){var a=r.elem.attributes.getNamedItem("stroke-dasharray");if(!r.set){r.start=n(a?a.nodeValue:"");var i=e?r.end:r.options.curAnim.svgStrokeDashArray||r.options.curAnim["svg-strokeDashArray"]||r.options.curAnim["svgStroke-dasharray"]||r.options.curAnim["svg-stroke-dasharray"];if(r.end=n(i),/^[+-]=/.exec(i)){if((i=i.split(/[, ]+/)).length%2==1)for(var s=i.length,o=0;o<s;o++)i.push(i[o]);for(o=0;o<i.length;o++)/^[+-]=/.exec(i[o])&&(r.end[o]=r.start[o]+parseFloat(i[o].replace(/=/,"")))}r.set=!0}var l=t.map(r.start,(function(t,e){return r.pos*(r.end[e]-t)+t})).join(",");a?a.nodeValue=l:r.elem.setAttribute("stroke-dasharray",l)},t.fx.step.svgViewBox=t.fx.step["svg-viewBox"]=function(r){var n=r.elem.attributes.getNamedItem("viewBox");if(!r.set){r.start=a(n?n.nodeValue:"");var i=e?r.end:r.options.curAnim.svgViewBox||r.options.curAnim["svg-viewBox"];if(r.end=a(i),/^[+-]=/.exec(i)){for(i=i.split(/[, ]+/);i.length<4;)i.push("0");for(var s=0;s<4;s++)/^[+-]=/.exec(i[s])&&(r.end[s]=r.start[s]+parseFloat(i[s].replace(/=/,"")))}r.set=!0}var o=t.map(r.start,(function(t,e){return r.pos*(r.end[e]-t)+t})).join(" ");n?n.nodeValue=o:r.elem.setAttribute("viewBox",o)},t.fx.step.svgTransform=t.fx.step["svg-transform"]=function(t){var e=t.elem.attributes.getNamedItem("transform");t.set||(t.start=i(e?e.nodeValue:""),t.end=i(t.end,t.start),t.set=!0);for(var r="",n=0;n<t.end.order.length;n++)switch(t.end.order.charAt(n)){case"t":r+=" translate("+(t.pos*(t.end.translateX-t.start.translateX)+t.start.translateX)+","+(t.pos*(t.end.translateY-t.start.translateY)+t.start.translateY)+")";break;case"s":r+=" scale("+(t.pos*(t.end.scaleX-t.start.scaleX)+t.start.scaleX)+","+(t.pos*(t.end.scaleY-t.start.scaleY)+t.start.scaleY)+")";break;case"r":r+=" rotate("+(t.pos*(t.end.rotateA-t.start.rotateA)+t.start.rotateA)+","+(t.pos*(t.end.rotateX-t.start.rotateX)+t.start.rotateX)+","+(t.pos*(t.end.rotateY-t.start.rotateY)+t.start.rotateY)+")";break;case"x":r+=" skewX("+(t.pos*(t.end.skewX-t.start.skewX)+t.start.skewX)+")";case"y":r+=" skewY("+(t.pos*(t.end.skewY-t.start.skewY)+t.start.skewY)+")";break;case"m":for(var a="",s=0;s<6;s++)a+=","+(t.pos*(t.end.matrix[s]-t.start.matrix[s])+t.start.matrix[s]);r+=" matrix("+a.substr(1)+")"}e?e.nodeValue=r:t.elem.setAttribute("transform",r)},t.each(["fill","stroke"],(function(e,r){var n=r.charAt(0).toUpperCase()+r.substr(1);t.fx.step["svg"+n]=t.fx.step["svg-"+r]=function(e){if(!e.set){e.start=t.svg._getColour(e.elem,r);var n="none"===e.end;e.end=n?t.svg._getColour(e.elem.parentNode,r):t.svg._getRGB(e.end),e.end[3]=n,t(e.elem).css(r,""),e.set=!0}var a="rgb("+[Math.min(Math.max(parseInt(e.pos*(e.end[0]-e.start[0])+e.start[0],10),0),255),Math.min(Math.max(parseInt(e.pos*(e.end[1]-e.start[1])+e.start[1],10),0),255),Math.min(Math.max(parseInt(e.pos*(e.end[2]-e.start[2])+e.start[2],10),0),255)].join(",")+")";a=e.end[3]&&1===e.state?"none":a;var i=e.elem.attributes.getNamedItem(r);i?i.nodeValue=a:e.elem.setAttribute(r,a)}})),t.svg._getColour=function(e,r){var n;e=t(e);do{if(""!==(n=e.attr(r)||e.css(r))&&"none"!==n||e.hasClass(t.svg.markerClassName))break}while(e=e.parent());return t.svg._getRGB(n)},t.svg._getRGB=function(e){var r;return e&&e.constructor===Array?3===e.length||4===e.length?e:s.none:(r=/^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/.exec(e))?[parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10)]:(r=/^rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)$/.exec(e))?[2.55*parseFloat(r[1]),2.55*parseFloat(r[2]),2.55*parseFloat(r[3])]:(r=/^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(e))?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]:(r=/^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/.exec(e))?[parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16)]:s[t.trim(e).toLowerCase()]||s.none};var s={"":[255,255,255,1],none:[255,255,255,1],aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],grey:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}(jQuery)}]);