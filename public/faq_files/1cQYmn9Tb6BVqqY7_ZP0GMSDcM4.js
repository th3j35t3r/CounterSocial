;window.CloudflareApps=window.Eager=window.CloudflareApps||window.Eager||{};window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="cc3f2da80a21692c9f4c416ef7dd0793";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["0v1PQ3KtQN8V"]={appId:"lMxPPXVOqmoE",scope:{}};;CloudflareApps.installs["0v1PQ3KtQN8V"].options={"account":{"accountId":"j_bRJ5F1YQRy","service":"googleanalytics","userId":"102269399044908880969"},"id":"UA-34868516-5","social":true};;CloudflareApps.installs["Ep6p6VVMIc8H"]={appId:"t8Sk01am_9iA",scope:{}};;CloudflareApps.installs["Ep6p6VVMIc8H"].options={"advancedOptions":{"disableOnAJAX":true,"disableOnPushState":true},"color":"blue","hidePage":false,"showAdvanced":true,"theme":"center-atom"};;CloudflareApps.installs["QeVU88DoawWJ"]={appId:"mKZRW4xoYN4A",scope:{}};;CloudflareApps.installs["QeVU88DoawWJ"].options={"advanced":{"location":"body","minHeight":300,"minWidth":301},"opacity":46,"position":"lowerRight","showAdvanced":true,"text":"https://counter.social","textColor":"#b2b2b2","textSize":"24"};;CloudflareApps.installs["QeVU88DoawWJ"].selectors={"advanced.location":"body"};;CloudflareApps.installs["QeVU88DoawWJ"].product={"id":"plus"};;CloudflareApps.installs["THeEBOk9MMhA"]={appId:"nt4L5NPJq1za",scope:{}};;CloudflareApps.installs["THeEBOk9MMhA"].options={"blocks":[]};;CloudflareApps.installs["THeEBOk9MMhA"].URLPatterns=["^counter.social/?.*$"];;if(CloudflareApps.matchPage(CloudflareApps.installs['QeVU88DoawWJ'].URLPatterns)){(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==='object'&&typeof module==='object'){module.exports=factory();}else if(typeof define==='function'&&define.amd){define([],factory);}else if(typeof exports==='object'){exports["watermark"]=factory();}else{root["watermark"]=factory();}})(this,function(){return(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])
{return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0);})
([function(module,exports,__webpack_require__){__webpack_require__(1);module.exports=__webpack_require__(2).default;},function(module,exports){"use strict";exports.__esModule=true;exports["default"]=function(){};module.exports=exports["default"];},function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=watermark;var _image=__webpack_require__(3);var _canvas=__webpack_require__(5);var _blob=__webpack_require__(6);var _style=__webpack_require__(7);var style=_interopRequireWildcard(_style);var _object=__webpack_require__(10);var _pool=__webpack_require__(11);var _pool2=_interopRequireDefault(_pool);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){newObj[key]=obj[key];}}}
newObj.default=obj;return newObj;}}
var defaults={init:function init(){}};function mergeOptions(options){return(0,_object.extend)((0,_object.clone)(defaults),options);}
function release(result,pool){var canvas=result.canvas;var sources=result.sources;var dataURL=(0,_canvas.dataUrl)(canvas);sources.forEach(pool.release);return dataURL;}
function watermark(resources){var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var promise=arguments.length<=2||arguments[2]===undefined?null:arguments[2];var opts=mergeOptions(options);promise||(promise=(0,_image.load)(resources,opts.init));return{dataUrl:function dataUrl(draw){var promise=this.then(function(images){return(0,_image.mapToCanvas)(images,_pool2.default);}).then(function(canvases){return style.result(draw,canvases);}).then(function(result){return release(result,_pool2.default);});return watermark(resources,opts,promise);},load:function load(resources,init){var promise=this.then(function(resource){return(0,_image.load)([resource].concat(resources),init);});return watermark(resources,opts,promise);},render:function render(){var promise=this.then(function(resource){return(0,_image.load)([resource]);});return watermark(resources,opts,promise);},blob:function blob(draw){var promise=this.dataUrl(draw).then(_blob.blob);return watermark(resources,opts,promise);},image:function image(draw){var promise=this.dataUrl(draw).then(_image.createImage);return watermark(resources,opts,promise);},then:function then(){for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++){funcs[_key]=arguments[_key];}
return promise.then.apply(promise,funcs);}};};watermark.image=style.image;watermark.text=style.text;watermark.destroy=function(){return _pool2.default.clear();};},function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.getLoader=getLoader;exports.load=load;exports.loadUrl=loadUrl;exports.loadFile=loadFile;exports.createImage=createImage;exports.imageToCanvas=imageToCanvas;exports.mapToCanvas=mapToCanvas;var _functions=__webpack_require__(4);function _typeof(obj){return obj&&typeof Symbol!=="undefined"&&obj.constructor===Symbol?"symbol":typeof obj;}
function setAndResolve(img,src,resolve){img.onload=function(){return resolve(img);};img.src=src;}
function getLoader(resource){var type=typeof resource==='undefined'?'undefined':_typeof(resource);if(type==='string'){return loadUrl;}
if(resource instanceof Image){return _functions.identity;}
return loadFile;}
function load(resources,init){var promises=[];for(var i=0;i<resources.length;i++){var resource=resources[i];var loader=getLoader(resource);var promise=loader(resource,init);promises.push(promise);}
return Promise.all(promises);}
function loadUrl(url,init){var img=new Image();typeof init==='function'&&init(img);return new Promise(function(resolve){img.onload=function(){return resolve(img);};img.src=url;});}
function loadFile(file){var reader=new FileReader();return new Promise(function(resolve){var img=new Image();reader.onloadend=function(){return setAndResolve(img,reader.result,resolve);};reader.readAsDataURL(file);});}
function createImage(url,onload){var img=new Image();if(typeof onload==='function'){img.onload=onload;}
img.src=url;return img;}
function drawImage(img,canvas){var ctx=canvas.getContext('2d');canvas.width=img.width;canvas.height=img.height;ctx.drawImage(img,0,0);return canvas;}
function imageToCanvas(img,pool){var canvas=pool.pop();return drawImage(img,canvas);}
function mapToCanvas(images,pool){return images.map(function(img){return imageToCanvas(img,pool);});}},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.sequence=sequence;exports.identity=identity;function sequence(){for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++){funcs[_key]=arguments[_key];}
return function(value){return funcs.reduce(function(val,fn){return fn.call(null,val);},value);};}
function identity(x){return x;}},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.dataUrl=dataUrl;function dataUrl(canvas){return canvas.toDataURL();}},function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.blob=undefined;exports.split=split;exports.decode=decode;exports.uint8=uint8;var _functions=__webpack_require__(4);var url=/^data:([^;]+);base64,(.*)$/;function split(dataUrl){return url.exec(dataUrl).slice(1);}
function decode(base64){return window.atob(base64);}
function uint8(data){var length=data.length;var uints=new Uint8Array(length);for(var i=0;i<length;i++){uints[i]=data.charCodeAt(i);}
return uints;}
var blob=exports.blob=(0,_functions.sequence)(split,function(parts){return[decode(parts[1]),parts[0]];},function(blob){return new Blob([uint8(blob[0])],{type:blob[1]});});},function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.text=exports.image=undefined;exports.result=result;var _image=__webpack_require__(8);var img=_interopRequireWildcard(_image);var _text=__webpack_require__(9);var txt=_interopRequireWildcard(_text);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){newObj[key]=obj[key];}}}
newObj.default=obj;return newObj;}}
var image=exports.image=img;var text=exports.text=txt;function result(draw,sources){var canvas=draw.apply(null,sources);return{canvas:canvas,sources:sources};}},function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.atPos=atPos;exports.lowerRight=lowerRight;exports.upperRight=upperRight;exports.lowerLeft=lowerLeft;exports.upperLeft=upperLeft;exports.center=center;function atPos(xFn,yFn,alpha){alpha||(alpha=1.0);return function(target,watermark){var context=target.getContext('2d');context.save();context.globalAlpha=alpha;context.drawImage(watermark,xFn(target,watermark),yFn(target,watermark));context.restore();return target;};}
function lowerRight(alpha){return atPos(function(target,mark){return target.width-(mark.width+10);},function(target,mark){return target.height-(mark.height+10);},alpha);}
function upperRight(alpha){return atPos(function(target,mark){return target.width-(mark.width+10);},function(target,mark){return 100;},alpha);}
function lowerLeft(alpha){return atPos(function(target,mark){return 10;},function(target,mark){return target.height-(mark.height+10);},alpha);}
function upperLeft(alpha){return atPos(function(target,mark){return 10;},function(target,mark){return 10;},alpha);}
function center(alpha){return atPos(function(target,mark){return(target.width-mark.width)/2;},function(target,mark){return(target.height-mark.height)/2;},alpha);}},function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.atPos=atPos;exports.lowerRight=lowerRight;exports.lowerLeft=lowerLeft;exports.upperRight=upperRight;exports.upperLeft=upperLeft;exports.center=center;function atPos(xFn,yFn,text,font,fillStyle,alpha){alpha||(alpha=1.0);return function(target){var context=target.getContext('2d');context.save();context.globalAlpha=alpha;context.fillStyle=fillStyle;context.font=font;var metrics=context.measureText(text);context.fillText(text,xFn(target,metrics,context),yFn(target,metrics,context));context.restore();return target;};}
function lowerRight(text,font,fillStyle,alpha,y){return atPos(function(target,metrics){return target.width-(metrics.width+10);},function(target){return y||target.height-10;},text,font,fillStyle,alpha);}
function lowerLeft(text,font,fillStyle,alpha,y){return atPos(function(){return 10;},function(target){return y||target.height-10;},text,font,fillStyle,alpha);}
function upperRight(text,font,fillStyle,alpha,y){return atPos(function(target,metrics){return target.width-(metrics.width+10);},function(){return y||20;},text,font,fillStyle,alpha);}
function upperLeft(text,font,fillStyle,alpha,y){return atPos(function(){return 10;},function(){return y||20;},text,font,fillStyle,alpha);}
function center(text,font,fillStyle,alpha,y){return atPos(function(target,metrics,ctx){ctx.textAlign='center';return target.width/2;},function(target,metrics,ctx){ctx.textBaseline='middle';return target.height/2;},text,font,fillStyle,alpha);}},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.extend=extend;exports.clone=clone;function extend(first,second){var secondKeys=Object.keys(second);secondKeys.forEach(function(key){return first[key]=second[key];});return first;}
function clone(obj){return extend({},obj);}},function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.CanvasPool=CanvasPool;function CanvasPool(){var canvases=[];return{pop:function pop(){if(this.length===0){canvases.push(document.createElement('canvas'));}
return canvases.pop();},get length(){return canvases.length;},release:function release(canvas){var context=canvas.getContext('2d');context.clearRect(0,0,canvas.width,canvas.height);canvases.push(canvas);},clear:function clear(){canvases.splice(0,canvases.length);},get elements(){return canvases;}};}
var shared=CanvasPool();exports.default=shared;}])});;};if(CloudflareApps.matchPage(CloudflareApps.installs['QeVU88DoawWJ'].URLPatterns)){(function(){'use strict'
if(!window.MutationObserver||!window.Promise)return
var watermark=window.watermark
var SRCSET_PATTERN=new RegExp(',\\s')
var options=CloudflareApps.installs['QeVU88DoawWJ'].options
var observer=null
var container=null
var updateTimeout=null
var parseAttribute='data-watermark-parse-state'
var attributeMap={src:'data-cf-watermark-src',srcset:'data-cf-watermark-srcset'}
var watermarkOptions={init:function init(imageElement){imageElement.crossOrigin='anonymous'}}
function forEach(arrayLike,callback){Array.prototype.slice.call(arrayLike).forEach(callback)}
function watermarkImage(imageElement,force){if(imageElement.width<options.advanced.minWidth)return
if(imageElement.height<options.advanced.minHeight)return
if(imageElement.getAttribute(parseAttribute)==='parsing')return
if(imageElement.getAttribute(parseAttribute)==='parsed')return
if(imageElement.getAttribute(parseAttribute)==='pending'&&!force)return
imageElement.setAttribute(parseAttribute,'parsing')
var cachedAttribute={src:imageElement.attributes[attributeMap.src],srcset:imageElement.attributes[attributeMap.srcset]}
var textFunction=watermark.text[options.position]
var watermarkArgs=[options.text,options.textSize+'px sans-serif',options.textColor,options.opacity/100,!options.position.indexOf('upper')?options.textSize:null]
var promises=[]
function getSrcSetPromise(sourceSet){var entries=sourceSet.split(SRCSET_PATTERN).map(function(value){var parsed=value.split(/\s/)
return{url:parsed[0],size:parsed[1]}})
var srcsetPromises=entries.map(function(entry){return watermark([entry.url],watermarkOptions).image(textFunction.apply(null,watermarkArgs)).then(function(watermarkedImage){return[watermarkedImage.src,entry.size]})})
return Promise.all(srcsetPromises).then(function(results){return Promise.resolve({attribute:'srcset',value:results.map(function(result){return result.join(' ')}).join(', ')})})}
if(imageElement.srcset){var sourceSet=cachedAttribute.srcset?cachedAttribute.srcset.value:imageElement.srcset
promises.push(getSrcSetPromise(sourceSet))}else{var source=cachedAttribute.src?cachedAttribute.src.value:imageElement.src
promises.push(watermark([source],watermarkOptions).image(textFunction.apply(null,watermarkArgs)).then(function(watermarkedImage){return{attribute:'src',value:watermarkedImage.src}}))}
var parseTimeout=setTimeout(function(){imageElement.setAttribute(parseAttribute,'timeout')},5000)
Promise.all(promises).catch(function(error){clearTimeout(parseTimeout)
console.error('Watermark error',error)
imageElement.setAttribute(parseAttribute,'error')}).then(function(results){clearTimeout(parseTimeout)
if(imageElement.getAttribute(parseAttribute)==='pending'){watermarkImage(imageElement,true)
return}
forEach(results,function(result){if(!cachedAttribute[result.attribute]){var originalValue=imageElement.getAttribute(result.attribute)
imageElement.setAttribute(attributeMap[result.attribute],originalValue)}
imageElement.setAttribute(result.attribute,result.value)})
imageElement.setAttribute(parseAttribute,'parsed')})}
function parseDOM(){if(!container)return
var images=container.querySelectorAll('img')
forEach(images,function(image){watermarkImage(image)})}
function observeElements(){observer=new window.MutationObserver(parseDOM)
observer.observe(container,{childList:true,subtree:true})}
function bootstrap(){document.body.setAttribute('data-cf-watermark-mode',"QeVU88DoawWJ"==='preview'?'preview':'live')
container=document.querySelector(options.advanced.location)
if(!container)return
parseDOM()
observeElements()}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',bootstrap)}else{bootstrap()}
window.CloudflareApps.installs['QeVU88DoawWJ'].scope={setOptions:function(nextOptions){clearTimeout(updateTimeout)
options=nextOptions
var updateSelector='img['+attributeMap.src+'], img['+attributeMap.srcset+']'
var imageElements=document.documentElement.querySelectorAll(updateSelector)
forEach(imageElements,function(imageElement){imageElement.setAttribute(parseAttribute,'pending')})
updateTimeout=setTimeout(function(){forEach(imageElements,function(imageElement){window.requestAnimationFrame(watermarkImage.bind(null,imageElement,true))})},2000)}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['THeEBOk9MMhA'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['THeEBOk9MMhA'].options
var elements={}
var prevElements={}
function updateElements(){options.blocks.forEach(function(block,index){var locationHash=[block.location.selector,block.location.method,index].join('!')
var element
if(elements[locationHash]){element=elements[locationHash]}else{if(block.location.method==='replace'){prevElements[locationHash]=document.querySelector(block.location.selector)}
element=CloudflareApps.createElement(block.location)
elements[locationHash]=element}
element.foundInBlocks=true
element.innerHTML=block.code
var scripts=Array.prototype.slice.call(element.querySelectorAll('script'))
if(scripts){scripts.forEach(function(script){var newScript=document.createElement('script')
for(var key=script.attributes.length;key--;){var attr=script.attributes[key]
if(attr.specified){newScript.setAttribute(attr.name,attr.value)}}
newScript.innerHTML=script.innerHTML
element.replaceChild(newScript,script)})}})
for(var hash in elements){if(!elements[hash].foundInBlocks){if(prevElements[hash]){elements[hash].parentNode.replaceChild(prevElements[hash],elements[hash])
delete prevElements[hash]}else{elements[hash].parentNode.removeChild(elements[hash])}
delete elements[hash]}else{delete elements[hash].foundInBlocks}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElements)}else{updateElements()}
window.CloudflareApps.installs['THeEBOk9MMhA'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['0v1PQ3KtQN8V'].URLPatterns)){(function(){var options=CloudflareApps.installs['0v1PQ3KtQN8V'].options
var id
if(options.account&&options.organization){id=options['web-properties-for-'+options.organization]}else{id=(options.id||'').trim()}
if(!id){console.log('Cloudflare Google Analytics: Disabled. UA-ID not present.')
return}else if("0v1PQ3KtQN8V"==='preview'){console.log('Cloudflare Google Analytics: Enabled',id)}
function resolveParameter(uri,parameter){if(uri){var parameters=uri.split('#')[0].match(/[^?=&]+=([^&]*)?/g)
for(var i=0,chunk;chunk=parameters[i];++i){if(chunk.indexOf(parameter)===0){return unescape(chunk.split('=')[1])}}}}
window.dataLayer=window.dataLayer||[]
function gtag(){window.dataLayer.push(arguments)}
gtag('js',new Date())
gtag('config',id)
var vendorScript=document.createElement('script')
vendorScript.src='https://www.googletagmanager.com/gtag/js?id='+id
document.head.appendChild(vendorScript)
if(options.social){window.addEventListener('load',function googleAnalyticsSocialTracking(){var FB=window.FB
var twttr=window.twttr
if('FB'in window&&'Event'in FB&&'subscribe'in window.FB.Event){FB.Event.subscribe('edge.create',function(targetUrl){gtag('event','share',{method:'facebook',event_action:'like',content_id:targetUrl})})
FB.Event.subscribe('edge.remove',function(targetUrl){gtag('event','share',{method:'facebook',event_action:'unlike',content_id:targetUrl})})
FB.Event.subscribe('message.send',function(targetUrl){gtag('event','share',{method:'facebook',event_action:'send',content_id:targetUrl})})}
if('twttr'in window&&'events'in twttr&&'bind'in twttr.events){twttr.events.bind('tweet',function(event){if(event){var targetUrl
if(event.target&&event.target.nodeName==='IFRAME'){targetUrl=resolveParameter(event.target.src,'url')}
gtag('event','share',{method:'twitter',event_action:'tweet',content_id:targetUrl})}})}},false)}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['Ep6p6VVMIc8H'].URLPatterns)){window.paceOptions=window.paceOptions||{};window.paceOptions.restartOnPushState=false;};if(CloudflareApps.matchPage(CloudflareApps.installs['Ep6p6VVMIc8H'].URLPatterns)){window.paceOptions=window.paceOptions||{};window.paceOptions.restartOnRequestAfter=false;};if(CloudflareApps.matchPage(CloudflareApps.installs['Ep6p6VVMIc8H'].URLPatterns)){(function(){var AjaxMonitor,Bar,DocumentMonitor,ElementMonitor,ElementTracker,EventLagMonitor,Evented,Events,NoTargetError,Pace,RequestIntercept,SOURCE_KEYS,Scaler,SocketRequestTracker,XHRRequestTracker,animation,avgAmplitude,bar,cancelAnimation,cancelAnimationFrame,defaultOptions,extend,extendNative,getFromDOM,getIntercept,handlePushState,ignoreStack,init,now,options,paceHideStyle,requestAnimationFrame,result,runAnimation,scalers,shouldIgnoreURL,shouldTrack,source,sources,uniScaler,_WebSocket,_XDomainRequest,_XMLHttpRequest,_i,_intercept,_len,_pushState,_ref,_ref1,_replaceState,__slice=[].slice,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;};defaultOptions={hidePage:false,catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:true,restartOnPushState:true,restartOnRequestAfter:500,target:'body',elements:{checkInterval:100,selectors:['body']},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:['GET'],trackWebSockets:true,ignoreURLs:[]}};now=function(){var _ref;return(_ref=typeof performance!=="undefined"&&performance!==null?typeof performance.now==="function"?performance.now():void 0:void 0)!=null?_ref:+(new Date);};requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame;if(requestAnimationFrame==null){requestAnimationFrame=function(fn){return setTimeout(fn,50);};cancelAnimationFrame=function(id){return clearTimeout(id);};}
runAnimation=function(fn){var last,tick;last=now();tick=function(){var diff;diff=now()-last;if(diff>=33){last=now();return fn(diff,function(){return requestAnimationFrame(tick);});}else{return setTimeout(tick,33-diff);}};return tick();};result=function(){var args,key,obj;obj=arguments[0],key=arguments[1],args=3<=arguments.length?__slice.call(arguments,2):[];if(typeof obj[key]==='function'){return obj[key].apply(obj,args);}else{return obj[key];}};extend=function(){var key,out,source,sources,val,_i,_len;out=arguments[0],sources=2<=arguments.length?__slice.call(arguments,1):[];for(_i=0,_len=sources.length;_i<_len;_i++){source=sources[_i];if(source){for(key in source){if(!__hasProp.call(source,key))continue;val=source[key];if((out[key]!=null)&&typeof out[key]==='object'&&(val!=null)&&typeof val==='object'){extend(out[key],val);}else{out[key]=val;}}}}
return out;};avgAmplitude=function(arr){var count,sum,v,_i,_len;sum=count=0;for(_i=0,_len=arr.length;_i<_len;_i++){v=arr[_i];sum+=Math.abs(v);count++;}
return sum/count;};getFromDOM=function(key,json){var data,e,el;if(key==null){key='options';}
if(json==null){json=true;}
el=document.querySelector("[data-pace-"+key+"]");if(!el){return;}
data=el.getAttribute("data-pace-"+key);if(!json){return data;}
try{return JSON.parse(data);}catch(_error){e=_error;return typeof console!=="undefined"&&console!==null?console.error("Error parsing inline pace options",e):void 0;}};Evented=(function(){function Evented(){}
Evented.prototype.on=function(event,handler,ctx,once){var _base;if(once==null){once=false;}
if(this.bindings==null){this.bindings={};}
if((_base=this.bindings)[event]==null){_base[event]=[];}
return this.bindings[event].push({handler:handler,ctx:ctx,once:once});};Evented.prototype.once=function(event,handler,ctx){return this.on(event,handler,ctx,true);};Evented.prototype.off=function(event,handler){var i,_ref,_results;if(((_ref=this.bindings)!=null?_ref[event]:void 0)==null){return;}
if(handler==null){return delete this.bindings[event];}else{i=0;_results=[];while(i<this.bindings[event].length){if(this.bindings[event][i].handler===handler){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}
return _results;}};Evented.prototype.trigger=function(){var args,ctx,event,handler,i,once,_ref,_ref1,_results;event=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];if((_ref=this.bindings)!=null?_ref[event]:void 0){i=0;_results=[];while(i<this.bindings[event].length){_ref1=this.bindings[event][i],handler=_ref1.handler,ctx=_ref1.ctx,once=_ref1.once;handler.apply(ctx!=null?ctx:this,args);if(once){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}
return _results;}};return Evented;})();Pace=window.Pace||{};window.Pace=Pace;extend(Pace,Evented.prototype);options=Pace.options=extend({},defaultOptions,window.paceOptions,getFromDOM());_ref=['ajax','document','eventLag','elements'];for(_i=0,_len=_ref.length;_i<_len;_i++){source=_ref[_i];if(options[source]===true){options[source]=defaultOptions[source];}}
NoTargetError=(function(_super){__extends(NoTargetError,_super);function NoTargetError(){_ref1=NoTargetError.__super__.constructor.apply(this,arguments);return _ref1;}
return NoTargetError;})(Error);Bar=(function(){function Bar(){this.progress=0;}
Bar.prototype.getElement=function(){var targetElement;if(this.el==null){targetElement=document.querySelector(options.target);if(!targetElement){throw new NoTargetError;}
this.el=document.createElement('div');this.el.className="pace pace-active";document.body.className=document.body.className.replace(/pace-done/g,'');document.body.className+=' pace-running';this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';if(targetElement.firstChild!=null){targetElement.insertBefore(this.el,targetElement.firstChild);}else{targetElement.appendChild(this.el);}}
return this.el;};Bar.prototype.finish=function(){var el;el=this.getElement();el.className=el.className.replace('pace-active','');el.className+=' pace-inactive';document.body.className=document.body.className.replace('pace-running','');return document.body.className+=' pace-done';};Bar.prototype.update=function(prog){this.progress=prog;return this.render();};Bar.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement());}catch(_error){NoTargetError=_error;}
return this.el=void 0;};Bar.prototype.render=function(){var el,progressStr;if(document.querySelector(options.target)==null){return false;}
el=this.getElement();el.children[0].style.width=""+this.progress+"%";if(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0){el.children[0].setAttribute('data-progress-text',""+(this.progress|0)+"%");if(this.progress>=100){progressStr='99';}else{progressStr=this.progress<10?"0":"";progressStr+=this.progress|0;}
el.children[0].setAttribute('data-progress',""+progressStr);}
return this.lastRenderedProgress=this.progress;};Bar.prototype.done=function(){return this.progress>=100;};return Bar;})();Events=(function(){function Events(){this.bindings={};}
Events.prototype.trigger=function(name,val){var binding,_j,_len1,_ref2,_results;if(this.bindings[name]!=null){_ref2=this.bindings[name];_results=[];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){binding=_ref2[_j];_results.push(binding.call(this,val));}
return _results;}};Events.prototype.on=function(name,fn){var _base;if((_base=this.bindings)[name]==null){_base[name]=[];}
return this.bindings[name].push(fn);};return Events;})();_XMLHttpRequest=window.XMLHttpRequest;_XDomainRequest=window.XDomainRequest;_WebSocket=window.WebSocket;extendNative=function(to,from){var e,key,val,_results;_results=[];for(key in from.prototype){try{val=from.prototype[key];if((to[key]==null)&&typeof val!=='function'){_results.push(to[key]=val);}else{_results.push(void 0);}}catch(_error){e=_error;}}
return _results;};ignoreStack=[];Pace.ignore=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('ignore');ret=fn.apply(null,args);ignoreStack.shift();return ret;};Pace.track=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('track');ret=fn.apply(null,args);ignoreStack.shift();return ret;};shouldTrack=function(method){var _ref2;if(method==null){method='GET';}
if(ignoreStack[0]==='track'){return'force';}
if(!ignoreStack.length&&options.ajax){if(method==='socket'&&options.ajax.trackWebSockets){return true;}else if(_ref2=method.toUpperCase(),__indexOf.call(options.ajax.trackMethods,_ref2)>=0){return true;}}
return false;};RequestIntercept=(function(_super){__extends(RequestIntercept,_super);function RequestIntercept(){var monitorXHR,_this=this;RequestIntercept.__super__.constructor.apply(this,arguments);monitorXHR=function(req){var _open;_open=req.open;return req.open=function(type,url,async){if(shouldTrack(type)){_this.trigger('request',{type:type,url:url,request:req});}
return _open.apply(req,arguments);};};window.XMLHttpRequest=function(flags){var req;req=new _XMLHttpRequest(flags);monitorXHR(req);return req;};try{extendNative(window.XMLHttpRequest,_XMLHttpRequest);}catch(_error){}
if(_XDomainRequest!=null){window.XDomainRequest=function(){var req;req=new _XDomainRequest;monitorXHR(req);return req;};try{extendNative(window.XDomainRequest,_XDomainRequest);}catch(_error){}}
if((_WebSocket!=null)&&options.ajax.trackWebSockets){window.WebSocket=function(url,protocols){var req;if(protocols!=null){req=new _WebSocket(url,protocols);}else{req=new _WebSocket(url);}
if(shouldTrack('socket')){_this.trigger('request',{type:'socket',url:url,protocols:protocols,request:req});}
return req;};try{extendNative(window.WebSocket,_WebSocket);}catch(_error){}}}
return RequestIntercept;})(Events);_intercept=null;getIntercept=function(){if(_intercept==null){_intercept=new RequestIntercept;}
return _intercept;};shouldIgnoreURL=function(url){var pattern,_j,_len1,_ref2;_ref2=options.ajax.ignoreURLs;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){pattern=_ref2[_j];if(typeof pattern==='string'){if(url.indexOf(pattern)!==-1){return true;}}else{if(pattern.test(url)){return true;}}}
return false;};getIntercept().on('request',function(_arg){var after,args,request,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}
if(!Pace.running&&(options.restartOnRequestAfter!==false||shouldTrack(type)==='force')){args=arguments;after=options.restartOnRequestAfter||0;if(typeof after==='boolean'){after=0;}
return setTimeout(function(){var stillActive,_j,_len1,_ref2,_ref3,_results;if(type==='socket'){stillActive=request.readyState<2;}else{stillActive=(0<(_ref2=request.readyState)&&_ref2<4);}
if(stillActive){Pace.restart();_ref3=Pace.sources;_results=[];for(_j=0,_len1=_ref3.length;_j<_len1;_j++){source=_ref3[_j];if(source instanceof AjaxMonitor){source.watch.apply(source,args);break;}else{_results.push(void 0);}}
return _results;}},after);}});AjaxMonitor=(function(){function AjaxMonitor(){var _this=this;this.elements=[];getIntercept().on('request',function(){return _this.watch.apply(_this,arguments);});}
AjaxMonitor.prototype.watch=function(_arg){var request,tracker,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}
if(type==='socket'){tracker=new SocketRequestTracker(request);}else{tracker=new XHRRequestTracker(request);}
return this.elements.push(tracker);};return AjaxMonitor;})();XHRRequestTracker=(function(){function XHRRequestTracker(request){var event,size,_j,_len1,_onreadystatechange,_ref2,_this=this;this.progress=0;if(window.ProgressEvent!=null){size=null;request.addEventListener('progress',function(evt){if(evt.lengthComputable){return _this.progress=100*evt.loaded/evt.total;}else{return _this.progress=_this.progress+(100-_this.progress)/2;}},false);_ref2=['load','abort','timeout','error'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}else{_onreadystatechange=request.onreadystatechange;request.onreadystatechange=function(){var _ref3;if((_ref3=request.readyState)===0||_ref3===4){_this.progress=100;}else if(request.readyState===3){_this.progress=50;}
return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}}
return XHRRequestTracker;})();SocketRequestTracker=(function(){function SocketRequestTracker(request){var event,_j,_len1,_ref2,_this=this;this.progress=0;_ref2=['error','open'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}
return SocketRequestTracker;})();ElementMonitor=(function(){function ElementMonitor(options){var selector,_j,_len1,_ref2;if(options==null){options={};}
this.elements=[];if(options.selectors==null){options.selectors=[];}
_ref2=options.selectors;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){selector=_ref2[_j];this.elements.push(new ElementTracker(selector));}}
return ElementMonitor;})();ElementTracker=(function(){function ElementTracker(selector){this.selector=selector;this.progress=0;this.check();}
ElementTracker.prototype.check=function(){var _this=this;if(document.querySelector(this.selector)){return this.done();}else{return setTimeout((function(){return _this.check();}),options.elements.checkInterval);}};ElementTracker.prototype.done=function(){return this.progress=100;};return ElementTracker;})();DocumentMonitor=(function(){DocumentMonitor.prototype.states={loading:0,interactive:50,complete:100};function DocumentMonitor(){var _onreadystatechange,_ref2,_this=this;this.progress=(_ref2=this.states[document.readyState])!=null?_ref2:100;_onreadystatechange=document.onreadystatechange;document.onreadystatechange=function(){if(_this.states[document.readyState]!=null){_this.progress=_this.states[document.readyState];}
return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}
return DocumentMonitor;})();EventLagMonitor=(function(){function EventLagMonitor(){var avg,interval,last,points,samples,_this=this;this.progress=0;avg=0;samples=[];points=0;last=now();interval=setInterval(function(){var diff;diff=now()-last-50;last=now();samples.push(diff);if(samples.length>options.eventLag.sampleCount){samples.shift();}
avg=avgAmplitude(samples);if(++points>=options.eventLag.minSamples&&avg<options.eventLag.lagThreshold){_this.progress=100;return clearInterval(interval);}else{return _this.progress=100*(3/(avg+3));}},50);}
return EventLagMonitor;})();Scaler=(function(){function Scaler(source){this.source=source;this.last=this.sinceLastUpdate=0;this.rate=options.initialRate;this.catchup=0;this.progress=this.lastProgress=0;if(this.source!=null){this.progress=result(this.source,'progress');}}
Scaler.prototype.tick=function(frameTime,val){var scaling;if(val==null){val=result(this.source,'progress');}
if(val>=100){this.done=true;}
if(val===this.last){this.sinceLastUpdate+=frameTime;}else{if(this.sinceLastUpdate){this.rate=(val-this.last)/this.sinceLastUpdate;}
this.catchup=(val-this.progress)/options.catchupTime;this.sinceLastUpdate=0;this.last=val;}
if(val>this.progress){this.progress+=this.catchup*frameTime;}
scaling=1-Math.pow(this.progress/100,options.easeFactor);this.progress+=scaling*this.rate*frameTime;this.progress=Math.min(this.lastProgress+options.maxProgressPerFrame,this.progress);this.progress=Math.max(0,this.progress);this.progress=Math.min(100,this.progress);this.lastProgress=this.progress;return this.progress;};return Scaler;})();sources=null;scalers=null;bar=null;uniScaler=null;animation=null;cancelAnimation=null;Pace.running=false;handlePushState=function(){if(options.restartOnPushState){return Pace.restart();}};if(window.history.pushState!=null){_pushState=window.history.pushState;window.history.pushState=function(){handlePushState();return _pushState.apply(window.history,arguments);};}
if(window.history.replaceState!=null){_replaceState=window.history.replaceState;window.history.replaceState=function(){handlePushState();return _replaceState.apply(window.history,arguments);};}
SOURCE_KEYS={ajax:AjaxMonitor,elements:ElementMonitor,document:DocumentMonitor,eventLag:EventLagMonitor};(init=function(){var type,_j,_k,_len1,_len2,_ref2,_ref3,_ref4;Pace.sources=sources=[];_ref2=['ajax','elements','document','eventLag'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){type=_ref2[_j];if(options[type]!==false){sources.push(new SOURCE_KEYS[type](options[type]));}}
_ref4=(_ref3=options.extraSources)!=null?_ref3:[];for(_k=0,_len2=_ref4.length;_k<_len2;_k++){source=_ref4[_k];sources.push(new source(options));}
Pace.bar=bar=new Bar;scalers=[];return uniScaler=new Scaler;})();Pace.stop=function(){Pace.trigger('stop');Pace.running=false;bar.destroy();cancelAnimation=true;if(animation!=null){if(typeof cancelAnimationFrame==="function"){cancelAnimationFrame(animation);}
animation=null;}
return init();};Pace.restart=function(){Pace.trigger('restart');Pace.stop();return Pace.start();};Pace.go=function(){var start;Pace.running=true;bar.render();start=now();cancelAnimation=false;return animation=runAnimation(function(frameTime,enqueueNextFrame){var avg,count,done,element,elements,i,j,remaining,scaler,scalerList,sum,_j,_k,_len1,_len2,_ref2;remaining=100-bar.progress;count=sum=0;done=true;for(i=_j=0,_len1=sources.length;_j<_len1;i=++_j){source=sources[i];scalerList=scalers[i]!=null?scalers[i]:scalers[i]=[];elements=(_ref2=source.elements)!=null?_ref2:[source];for(j=_k=0,_len2=elements.length;_k<_len2;j=++_k){element=elements[j];scaler=scalerList[j]!=null?scalerList[j]:scalerList[j]=new Scaler(element);done&=scaler.done;if(scaler.done){continue;}
count++;sum+=scaler.tick(frameTime);}}
avg=sum/count;bar.update(uniScaler.tick(frameTime,avg));if(bar.done()||done||cancelAnimation){bar.update(100);Pace.trigger('done');return setTimeout(function(){bar.finish();Pace.running=false;return Pace.trigger('hide');},Math.max(options.ghostTime,Math.max(options.minTime-(now()-start),0)));}else{return enqueueNextFrame();}});};paceHideStyle=null;Pace.start=function(_options){extend(options,_options);if(options.hidePage){if(!paceHideStyle){paceHideStyle=document.createElement('style');document.head.appendChild(paceHideStyle);}
paceHideStyle.innerHTML="body > *:not(.pace), body:before, body:after { -webkit-transition: opacity .4s ease-in-out; -moz-transition: opacity .4s ease-in-out; -o-transition: opacity .4s ease-in-out; -ms-transition: opacity .4s ease-in-out; transition: opacity .4s ease-in-out } body:not(.pace-done) > *:not(.pace), body:not(.pace-done):before, body:not(.pace-done):after { opacity: 0 }";}else{if(paceHideStyle!=null){paceHideStyle.innerHTML='';}}
Pace.running=true;try{bar.render();}catch(_error){NoTargetError=_error;}
if(!document.querySelector('.pace')){return setTimeout(Pace.start,50);}else{Pace.trigger('start');return Pace.go();}};if(typeof define==='function'&&define.amd){define(function(){return Pace;});}else if(typeof exports==='object'){module.exports=Pace;}else{if(options.startOnPageLoad){Pace.start();}}}).call(this);};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,Ym9keVtkYXRhLWNmLXdhdGVybWFyay1tb2RlPSJsaXZlIl0gaW1nW2RhdGEtd2F0ZXJtYXJrLXBhcnNlLXN0YXRlPSJwYXJzaW5nIl0gewogIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50Owp9Cgpib2R5W2RhdGEtY2Ytd2F0ZXJtYXJrLW1vZGU9InByZXZpZXciXSBpbWdbZGF0YS13YXRlcm1hcmstcGFyc2Utc3RhdGU9InBlbmRpbmciXSB7CiAgdHJhbnNpdGlvbjogZmlsdGVyIDIwMG1zIGxpbmVhcjsKICBmaWx0ZXI6IGJsdXIoNHB4KTsKICBvcGFjaXR5OiAwLjc7Cn0KCmJvZHlbZGF0YS1jZi13YXRlcm1hcmstbW9kZT0icHJldmlldyJdIGltZ1tkYXRhLXdhdGVybWFyay1wYXJzZS1zdGF0ZT0icGFyc2luZyJdIHsKICB0cmFuc2l0aW9uOiBmaWx0ZXIgODAwbXMgbGluZWFyOwogIGZpbHRlcjogYmx1cigycHgpOwogIG9wYWNpdHk6IDAuODU7Cn0KLyogVGhpcyBpcyBhIGNvbXBpbGVkIGZpbGUsIHlvdSBzaG91bGQgYmUgZWRpdGluZyB0aGUgZmlsZSBpbiB0aGUgdGVtcGxhdGVzIGRpcmVjdG9yeSAqLwoucGFjZS5wYWNlLWluYWN0aXZlIHsKICBkaXNwbGF5OiBub25lOwp9CgoucGFjZSB7CiAgLXdlYmtpdC1wb2ludGVyLWV2ZW50czogbm9uZTsKICBwb2ludGVyLWV2ZW50czogbm9uZTsKCiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAtbW96LXVzZXItc2VsZWN0OiBub25lOwogIHVzZXItc2VsZWN0OiBub25lOwoKICB6LWluZGV4OiAyMDAwOwogIHBvc2l0aW9uOiBmaXhlZDsKICBoZWlnaHQ6IDYwcHg7CiAgd2lkdGg6IDEwMHB4OwogIG1hcmdpbjogYXV0bzsKICB0b3A6IDA7CiAgbGVmdDogMDsKICByaWdodDogMDsKICBib3R0b206IDA7Cn0KCi5wYWNlIC5wYWNlLXByb2dyZXNzIHsKICB6LWluZGV4OiAyMDAwOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICBoZWlnaHQ6IDYwcHg7CiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7Cn0KCi5wYWNlIC5wYWNlLXByb2dyZXNzOmJlZm9yZSB7CiAgY29udGVudDogYXR0cihkYXRhLXByb2dyZXNzLXRleHQpOwogIHRleHQtYWxpZ246IGNlbnRlcjsKICBjb2xvcjogI2ZmZjsKICBiYWNrZ3JvdW5kOiAjMjI5OWRkOwogIGJvcmRlci1yYWRpdXM6IDUwJTsKICBmb250LWZhbWlseTogIkhlbHZldGljYSBOZXVlIiwgc2Fucy1zZXJpZjsKICBmb250LXNpemU6IDE0cHg7CiAgZm9udC13ZWlnaHQ6IDEwMDsKICBsaW5lLWhlaWdodDogMTsKICBwYWRkaW5nOiAyMCUgMCA3cHg7CiAgd2lkdGg6IDUwJTsKICBoZWlnaHQ6IDQwJTsKICBtYXJnaW46IDEwcHggMCAwIDMwcHg7CiAgZGlzcGxheTogYmxvY2s7CiAgei1pbmRleDogOTk5OwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKfQoKLnBhY2UgLnBhY2UtcHJvZ3Jlc3M6YWZ0ZXIgewogIGJvcmRlci1yYWRpdXM6IDUwJTsKICBib3JkZXI6IDVweCBzb2xpZCAjMjI5OWRkOwogIGNvbnRlbnQ6ICcgJzsKICBkaXNwbGF5OiBibG9jazsKICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgdG9wOiAwOwogIGxlZnQ6IDA7CiAgaGVpZ2h0OiA2MHB4OwogIHdpZHRoOiAxMDBweDsKCiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7CiAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7CiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7CiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7CiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4tMyAycyBsaW5lYXIgaW5maW5pdGU7CiAgICAgLW1vei1hbmltYXRpb246IHNwaW4tMyAycyBsaW5lYXIgaW5maW5pdGU7CiAgICAgICAtby1hbmltYXRpb246IHNwaW4tMyAycyBsaW5lYXIgaW5maW5pdGU7CiAgICAgICAgICBhbmltYXRpb246IHNwaW4tMyAycyBsaW5lYXIgaW5maW5pdGU7Cn0KCi5wYWNlIC5wYWNlLWFjdGl2aXR5IHsKICBmb250LXNpemU6IDE1cHg7CiAgbGluZS1oZWlnaHQ6IDE7CiAgei1pbmRleDogMjAwMDsKICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgaGVpZ2h0OiA2MHB4OwogIHdpZHRoOiAxMDBweDsKCiAgZGlzcGxheTogYmxvY2s7Cn0KCi5wYWNlIC5wYWNlLWFjdGl2aXR5OmJlZm9yZSB7CiAgYm9yZGVyLXJhZGl1czogNTAlOwogIGJvcmRlcjogNXB4IHNvbGlkICMyMjk5ZGQ7CiAgY29udGVudDogJyAnOwogIGRpc3BsYXk6IGJsb2NrOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICB0b3A6IDA7CiAgbGVmdDogMDsKICBoZWlnaHQ6IDYwcHg7CiAgd2lkdGg6IDEwMHB4OwoKICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbi0xIDJzIGxpbmVhciBpbmZpbml0ZTsKICAgICAtbW96LWFuaW1hdGlvbjogc3Bpbi0xIDJzIGxpbmVhciBpbmZpbml0ZTsKICAgICAgIC1vLWFuaW1hdGlvbjogc3Bpbi0xIDJzIGxpbmVhciBpbmZpbml0ZTsKICAgICAgICAgIGFuaW1hdGlvbjogc3Bpbi0xIDJzIGxpbmVhciBpbmZpbml0ZTsKfQoKLnBhY2UgLnBhY2UtYWN0aXZpdHk6YWZ0ZXJ7CiAgYm9yZGVyLXJhZGl1czogNTAlOwogIGJvcmRlcjogNXB4IHNvbGlkICMyMjk5ZGQ7CiAgY29udGVudDogJyAnOwogIGRpc3BsYXk6IGJsb2NrOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICB0b3A6IDA7CiAgbGVmdDogMDsKICBoZWlnaHQ6IDYwcHg7CiAgd2lkdGg6IDEwMHB4OwoKICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsKICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsKICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsKICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsKICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbi0yIDJzIGxpbmVhciBpbmZpbml0ZTsKICAgICAtbW96LWFuaW1hdGlvbjogc3Bpbi0yIDJzIGxpbmVhciBpbmZpbml0ZTsKICAgICAgIC1vLWFuaW1hdGlvbjogc3Bpbi0yIDJzIGxpbmVhciBpbmZpbml0ZTsKICAgICAgICAgIGFuaW1hdGlvbjogc3Bpbi0yIDJzIGxpbmVhciBpbmZpbml0ZTsKfQoKQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4tMSB7CiAgMCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfQogIDEwMCV7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTt9Cn0KQC1tb3ota2V5ZnJhbWVzIHNwaW4tMSB7CiAgMCUgIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfQogIDEwMCV7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTt9Cn0KQC1vLWtleWZyYW1lcyBzcGluLTEgewogIDAlICB7IC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9CiAgMTAwJXsgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTt9Cn0KQGtleWZyYW1lcyBzcGluLTEgewogIDAlICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9CiAgMTAwJXsgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTt9Cn0KCkAtd2Via2l0LWtleWZyYW1lcyBzcGluLTIgewogIDAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTkuOGRlZyk7IH0KICAxMDAleyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQxOC44ZGVnKTt9Cn0KQC1tb3ota2V5ZnJhbWVzIHNwaW4tMiB7CiAgMCUgIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg1OS44ZGVnKTsgfQogIDEwMCV7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDE4LjhkZWcpO30KfQpALW8ta2V5ZnJhbWVzIHNwaW4tMiB7CiAgMCUgIHsgLW8tdHJhbnNmb3JtOiByb3RhdGUoNTkuOGRlZyk7IH0KICAxMDAleyAtby10cmFuc2Zvcm06IHJvdGF0ZSg0MTguOGRlZyk7fQp9CkBrZXlmcmFtZXMgc3Bpbi0yIHsKICAwJSAgeyB0cmFuc2Zvcm06IHJvdGF0ZSg1OS44ZGVnKTsgfQogIDEwMCV7IHRyYW5zZm9ybTogcm90YXRlKDQxOC44ZGVnKTt9Cn0KCkAtd2Via2l0LWtleWZyYW1lcyBzcGluLTMgewogIDAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTE5LjZkZWcpOyB9CiAgMTAwJXsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NzguNmRlZyk7fQp9CkAtbW96LWtleWZyYW1lcyBzcGluLTMgewogIDAlICB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTE5LjZkZWcpOyB9CiAgMTAwJXsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NzguNmRlZyk7fQp9CkAtby1rZXlmcmFtZXMgc3Bpbi0zIHsKICAwJSAgeyAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMTkuNmRlZyk7IH0KICAxMDAleyAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NzguNmRlZyk7fQp9CkBrZXlmcmFtZXMgc3Bpbi0zIHsKICAwJSAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMTkuNmRlZyk7IH0KICAxMDAleyB0cmFuc2Zvcm06IHJvdGF0ZSg0NzguNmRlZyk7fQp9';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();