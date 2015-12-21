qx.$$packageData['1024']={"locales":{},"resources":{"qx/static/blank.gif":[1,1,"gif","qx"],"qxc/application/twitterdemo/twitter_logo_outline.png":[300,78,"png","qxc.application.twitterdemo"]},"translations":{}};
qx.Part.$$notifyLoad("1024", function() {
(function(){var o="failed",n="sending",m="completed",k="receiving",j="aborted",h="timeout",g="qx.event.type.Event",f="Connection dropped",d="qx.io.remote.Response",c="=",bp="configured",bo="&",bn="Unknown status code. ",bm="qx.io.remote.transport.XmlHttp",bl="qx.io.remote.transport.Abstract",bk="Request-URL too large",bj="MSHTML-specific HTTP status code",bi="Not available",bh="Precondition failed",bg="Server error",v="Moved temporarily",w="qx.io.remote.Exchange",t="Possibly due to a cross-domain request?",u="Bad gateway",r="Gone",s="See other",p="Partial content",q="Server timeout",B="qx.io.remote.transport.Script",C="HTTP version not supported",L="Unauthorized",I="Possibly due to application URL using 'file:' protocol?",T="Multiple choices",O="Payment required",bc="Not implemented",Y="Proxy authentication required",E="Length required",bf="_applyState",be="changeState",bd="Not modified",D="qx.io.remote.Request",G="Connection closed by server",H="Moved permanently",K="_applyImplementation",M="",P="Method not allowed",V="Forbidden",bb="Use proxy",x="Ok",y="Conflict",F="Not found",S="Not acceptable",R="Request time-out",Q="Bad request",X="No content",W="file:",N="qx.io.remote.transport.Iframe",U="Request entity too large",a="Unknown status code",ba="Unsupported media type",z="Gateway time-out",A="created",J="Out of resources",b="undefined";
qx.Class.define(w,{extend:qx.core.Object,construct:function(bq){qx.core.Object.call(this);
this.setRequest(bq);
bq.setTransport(this);
},events:{"sending":g,"receiving":g,"completed":d,"aborted":g,"failed":d,"timeout":d},statics:{typesOrder:[bm,N,B],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(br,bs){qx.io.remote.Exchange.typesAvailable[bs]=br;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bu in qx.io.remote.Exchange.typesAvailable){var bt=qx.io.remote.Exchange.typesAvailable[bu];

if(bt.isSupported()){qx.io.remote.Exchange.typesSupported[bu]=bt;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bv,bw,bx){if(!qx.lang.Array.contains(bv.handles.responseTypes,bx)){return false;
}
for(var by in bw){if(!bv.handles[by]){return false;
}}return true;
},_nativeMap:{0:A,1:bp,2:n,3:k,4:m},wasSuccessful:function(bz,bA,bB){if(bB){switch(bz){case null:case 0:return true;
case -1:return bA<4;
default:return typeof bz===b;
}}else{switch(bz){case -1:{};
return bA<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bA!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bz>206&&bz<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bz+" ("+bA+")");
return false;
}}},statusCodeToString:function(bC){switch(bC){case -1:return bi;
case 0:var bD=window.location.href;
if(qx.lang.String.startsWith(bD.toLowerCase(),W)){return (bn+I);
}else{return (bn+t);
}break;
case 200:return x;
case 304:return bd;
case 206:return p;
case 204:return X;
case 300:return T;
case 301:return H;
case 302:return v;
case 303:return s;
case 305:return bb;
case 400:return Q;
case 401:return L;
case 402:return O;
case 403:return V;
case 404:return F;
case 405:return P;
case 406:return S;
case 407:return Y;
case 408:return R;
case 409:return y;
case 410:return r;
case 411:return E;
case 412:return bh;
case 413:return U;
case 414:return bk;
case 415:return ba;
case 500:return bg;
case 501:return bc;
case 502:return u;
case 503:return J;
case 504:return z;
case 505:return C;
case 12002:return q;
case 12029:return f;
case 12030:return f;
case 12031:return f;
case 12152:return G;
case 13030:return bj;
default:return a;
}}},properties:{request:{check:D,nullable:true},implementation:{check:bl,nullable:true,apply:K},state:{check:[bp,n,k,m,j,h,o],init:bp,event:be,apply:bf}},members:{send:function(){var bH=this.getRequest();

if(!bH){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bF=qx.io.remote.Exchange.typesOrder;
var bE=qx.io.remote.Exchange.typesSupported;
var bJ=bH.getResponseType();
var bK={};

if(bH.getAsynchronous()){bK.asynchronous=true;
}else{bK.synchronous=true;
}
if(bH.getCrossDomain()){bK.crossDomain=true;
}
if(bH.getFileUpload()){bK.fileUpload=true;
}for(var bI in bH.getFormFields()){bK.programaticFormFields=true;
break;
}var bL,bG;

for(var i=0,l=bF.length;i<l;i++){bL=bE[bF[i]];

if(bL){if(!qx.io.remote.Exchange.canHandle(bL,bK,bJ)){continue;
}
try{bG=new bL;
this.setImplementation(bG);
bG.setUseBasicHttpAuth(bH.getUseBasicHttpAuth());
bG.send();
return true;
}catch(bM){this.error("Request handler throws error");
this.error(bM);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bH);
},abort:function(){var bN=this.getImplementation();

if(bN){bN.abort();
}else{this.setState(j);
}},timeout:function(){var bQ=this.getImplementation();

if(bQ){var bP=M;

for(var bO in bQ.getParameters()){bP+=bo+bO+c+bQ.getParameters()[bO];
}this.warn("Timeout: implementation "+bQ.toHashCode()+", "+bQ.getUrl()+" ["+bQ.getMethod()+"], "+bP);
bQ.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(h);
}this.__qw();
},__qw:function(){var bR=this.getRequest();

if(bR){bR.setTimeout(0);
}},_onsending:function(e){this.setState(n);
},_onreceiving:function(e){this.setState(k);
},_oncompleted:function(e){this.setState(m);
},_onabort:function(e){this.setState(j);
},_onfailed:function(e){this.setState(o);
},_ontimeout:function(e){this.setState(h);
},_applyImplementation:function(bS,bT){if(bT){bT.removeListener(n,this._onsending,this);
bT.removeListener(k,this._onreceiving,this);
bT.removeListener(m,this._oncompleted,this);
bT.removeListener(j,this._onabort,this);
bT.removeListener(h,this._ontimeout,this);
bT.removeListener(o,this._onfailed,this);
}
if(bS){var bV=this.getRequest();
bS.setUrl(bV.getUrl());
bS.setMethod(bV.getMethod());
bS.setAsynchronous(bV.getAsynchronous());
bS.setUsername(bV.getUsername());
bS.setPassword(bV.getPassword());
bS.setParameters(bV.getParameters(false));
bS.setFormFields(bV.getFormFields());
bS.setRequestHeaders(bV.getRequestHeaders());
if(bS instanceof qx.io.remote.transport.XmlHttp){bS.setParseJson(bV.getParseJson());
}var bY=bV.getData();

if(bY===null){var ca=bV.getParameters(true);
var bX=[];

for(var bU in ca){var bW=ca[bU];

if(bW instanceof Array){for(var i=0;i<bW.length;i++){bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW[i]));
}}else{bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW));
}}
if(bX.length>0){bS.setData(bX.join(bo));
}}else{bS.setData(bY);
}bS.setResponseType(bV.getResponseType());
bS.addListener(n,this._onsending,this);
bS.addListener(k,this._onreceiving,this);
bS.addListener(m,this._oncompleted,this);
bS.addListener(j,this._onabort,this);
bS.addListener(h,this._ontimeout,this);
bS.addListener(o,this._onfailed,this);
}},_applyState:function(cb,cc){switch(cb){case n:this.fireEvent(n);
break;
case k:this.fireEvent(k);
break;
case m:case j:case h:case o:var ce=this.getImplementation();

if(!ce){break;
}this.__qw();

if(this.hasListener(cb)){var cf=qx.event.Registration.createEvent(cb,qx.io.remote.Response);

if(cb==m){var cd=ce.getResponseContent();
cf.setContent(cd);
if(cd===null){cb=o;
}}else if(cb==o){cf.setContent(ce.getResponseContent());
}cf.setStatusCode(ce.getStatusCode());
cf.setResponseHeaders(ce.getResponseHeaders());
this.dispatchEvent(cf);
}this.setImplementation(null);
ce.dispose();
break;
}}},environment:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var cg=this.getImplementation();

if(cg){this.setImplementation(null);
cg.dispose();
}this.setRequest(null);
}});
})();
(function(){var k="qx.debug.io",j="engine.name",i="mshtml",h="",g="engine.version",f="head",e="script",d="opera",c="Unknown response headers",b="unknown",a="qx.bom.request.Script";
qx.Bootstrap.define(a,{construct:function(){this.__sx();
this.__so=qx.Bootstrap.bind(this._onNativeLoad,this);
this.__sp=qx.Bootstrap.bind(this._onNativeError,this);
this.__sq=qx.Bootstrap.bind(this._onTimeout,this);
this.__sr=document.head||document.getElementsByTagName(f)[0]||document.documentElement;
this.timeout=this.__sB()?0:15000;
},members:{readyState:null,status:null,statusText:null,timeout:null,__ss:null,open:function(l,m){if(this.__sv){return;
}this.__sx();
this.__st=null;
this.__su=m;

if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Open native request with "+"url: "+m);
}this.__sy(1);
},setRequestHeader:function(n,o){if(this.__sv){return;
}var p={};

if(this.readyState!==1){throw new Error("Invalid state");
}p[n]=o;
this.__su=qx.util.Uri.appendParamsToUrl(this.__su,p);
},send:function(){if(this.__sv){return;
}var s=this.__sC(),q=this.__sr,r=this;

if(this.timeout>0){this.__dS=window.setTimeout(this.__sq,this.timeout);
}
if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Send native request");
}q.insertBefore(s,q.firstChild);
window.setTimeout(function(){r.__sy(2);
r.__sy(3);
});
},abort:function(){if(this.__sv){return;
}this.__st=true;
this.__sD();
this.onabort();
},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(t){if(this.__sv){return;
}return b;
},getAllResponseHeaders:function(){if(this.__sv){return;
}return c;
},setDetermineSuccess:function(u){qx.core.Assert.assertFunction(u);
this.__ss=u;
},dispose:function(){var v=this.__sw;

if(!this.__sv){if(v){v.onload=v.onreadystatechange=null;
this.__sD();
}
if(this.__dS){window.clearTimeout(this.__dS);
}this.__sv=true;
}},_getUrl:function(){return this.__su;
},_getScriptElement:function(){return this.__sw;
},_onTimeout:function(){this.__sA();

if(!this.__sB()){this.onerror();
}this.ontimeout();

if(!this.__sB()){this.onloadend();
}},_onNativeLoad:function(){var y=this.__sw,w=this.__ss,x=this;
if(this.__st){return;
}if(qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9){if(!(/loaded|complete/).test(y.readyState)){return;
}else{if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native readyState: loaded");
}}}
if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native load");
}if(w){if(!this.status){this.status=w()?200:500;
}}
if(this.status===500){if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Detected error");
}}
if(this.__dS){window.clearTimeout(this.__dS);
}window.setTimeout(function(){x.__sz();
x.__sy(4);
x.onload();
x.onloadend();
});
},_onNativeError:function(){this.__sA();
this.onerror();
this.onloadend();
},__sw:null,__sr:null,__su:h,__so:null,__sp:null,__sq:null,__dS:null,__st:null,__sv:null,__sx:function(){this.readyState=0;
this.status=0;
this.statusText=h;
},__sy:function(z){this.readyState=z;
this.onreadystatechange();
},__sz:function(){this.__sD();
this.readyState=4;
if(!this.status){this.status=200;
}this.statusText=h+this.status;
},__sA:function(){this.__sD();
this.readyState=4;
this.status=0;
this.statusText=null;
},__sB:function(){var B=qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9;
var A=qx.core.Environment.get(j)===d;
return !(B||A);
},__sC:function(){var C=this.__sw=document.createElement(e);
C.src=this.__su;
C.onerror=this.__sp;
C.onload=this.__so;
if(qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9){C.onreadystatechange=this.__so;
}return C;
},__sD:function(){var D=this.__sw;

if(D&&D.parentNode){this.__sr.removeChild(D);
}}},defer:function(){qx.core.Environment.add(k,false);
}});
})();
(function(){var q="qx.event.type.Event",p="String",o="failed",n="timeout",m="created",l="aborted",k="sending",j="configured",i="receiving",h="completed",c="Object",g="Boolean",f="abstract",b="_applyState",a="GET",e="changeState",d="qx.io.remote.transport.Abstract";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":q,"configured":q,"sending":q,"receiving":q,"completed":q,"aborted":q,"failed":q,"timeout":q},properties:{url:{check:p,nullable:true},method:{check:p,nullable:true,init:a},asynchronous:{check:g,nullable:true,init:true},data:{check:p,nullable:true},username:{check:p,nullable:true},password:{check:p,nullable:true},state:{check:[m,j,k,i,h,l,n,o],init:m,event:e,apply:b},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:p,nullable:true},useBasicHttpAuth:{check:g,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){this.setState(l);
},timeout:function(){this.setState(n);
},failed:function(){this.setState(o);
},setRequestHeader:function(r,s){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(t){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){switch(u){case m:this.fireEvent(m);
break;
case j:this.fireEvent(j);
break;
case k:this.fireEvent(k);
break;
case i:this.fireEvent(i);
break;
case h:this.fireEvent(h);
break;
case l:this.fireEvent(l);
break;
case o:this.fireEvent(o);
break;
case n:this.fireEvent(n);
break;
}return true;
}},destruct:function(){this.setRequestHeaders(null);
this.setParameters(null);
this.setFormFields(null);
}});
})();
(function(){var j="aborted",i="completed",h="failed",g="configured",f="timeout",e="application/json",d="loaded",c="qx.event.type.Data",b="error",a="receiving",y="changeState",x="sending",w="changeModel",v="json",u="GET",t="fail",s="queued",r="success",q="String",p="changePhase",n="__qE",o="qx.data.store.Json",l="_marshaler",m="changeUrl",k="_applyUrl";
qx.Class.define(o,{extend:qx.core.Object,construct:function(z,A){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(A);
this._delegate=A;
this.__sG=false;

if(z!=null){this.setUrl(z);
}},events:{"loaded":c,"error":c},properties:{model:{nullable:true,event:w},state:{check:[g,s,x,a,i,j,f,h],init:g,event:y},url:{check:q,apply:k,event:m,nullable:true}},members:{_marshaler:null,_delegate:null,__qE:null,__sG:null,_applyUrl:function(B,C){if(B!=null){B=qx.util.AliasManager.getInstance().resolve(B);
B=qx.util.ResourceManager.getInstance().toUri(B);
this._createRequest(B);
}},_getRequest:function(){return this.__qE;
},_setRequest:function(D){this.__qE=D;
},setDeprecatedTransport:function(E){qx.core.Assert.assertBoolean(E);

if(E){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
}this.__sG=E;
},isDeprecatedTransport:function(){return !!this.__sG;
},_createRequest:function(F){if(this.__qE){this.__qE.dispose();
this.__qE=null;
}
if(this.isDeprecatedTransport()){this._warnDeprecated();
return this.__sH(F);
}var G=new qx.io.request.Xhr(F);
this._setRequest(G);
G.setAccept(e);
G.setParser(v);
G.addListener(r,this._onSuccess,this);
var H=this._delegate;

if(H&&qx.lang.Type.isFunction(H.configureRequest)){this._delegate.configureRequest(G);
}G.addListener(p,this._onChangePhase,this);
G.addListener(t,this._onFail,this);
G.send();
},__sH:function(I){var J=new qx.io.remote.Request(I,u,e);
this._setRequest(J);
J.addListener(i,this.__sJ,this);
var K=this._delegate;

if(K&&qx.lang.Type.isFunction(K.configureRequest)){this._delegate.configureRequest(J);
}J.addListener(y,function(L){var M=L.getData();
this.setState(M);
},this);
J.addListener(h,this.__sI,this);
J.addListener(j,this.__sI,this);
J.addListener(f,this.__sI,this);
J.send();
},_onChangePhase:function(N){var O=N.getData(),Q={},P;
Q={"opened":g,"sent":x,"loading":a,"success":i,"abort":j,"timeout":f,"statusError":h};
P=Q[O];

if(P){this.setState(P);
}},_onFail:function(R){var S=R.getTarget();
this.fireDataEvent(b,S);
},__sI:function(T){this.fireDataEvent(b,T);
},_onSuccess:function(U){if(this.isDisposed()){return;
}var W=U.getTarget(),X=W.getResponse();
var V=this._delegate;

if(V&&qx.lang.Type.isFunction(V.manipulateData)){X=this._delegate.manipulateData(X);
}this._marshaler.toClass(X,true);
var Y=this.getModel();
this.setModel(this._marshaler.toModel(X));
if(Y&&Y.dispose){Y.dispose();
}this.fireDataEvent(d,this.getModel());
if(this.__qE){this.__qE.dispose();
this.__qE=null;
}},__sJ:function(ba){var bc=ba.getContent();
var bb=this._delegate;

if(bb&&qx.lang.Type.isFunction(bb.manipulateData)){bc=this._delegate.manipulateData(bc);
}this._marshaler.toClass(bc,true);
var bd=this.getModel();
this.setModel(this._marshaler.toModel(bc));
if(bd&&bd.dispose){bd.dispose();
}this.fireDataEvent(d,this.getModel());
},reload:function(){var be=this.getUrl();

if(be!=null){this._createRequest(be);
}},_warnDeprecated:function(){qx.log.Logger.warn("Using qx.io.remote.Request in qx.data.store.Json "+"is deprecated. Please consult the API documentation.");
}},destruct:function(){if(this.__qE!=null){this._disposeObjects(n);
}this._disposeSingletonObjects(l);
this._delegate=null;
}});
})();
(function(){var n="error",m="?",l="fail",k="String",j="callback",i="loaded",h="changePhase",g="&",f='qx.data.store.Jsonp[',e='].callback',b="failed",d="=",c="success",a="qx.data.store.Jsonp";
qx.Class.define(a,{extend:qx.data.store.Json,construct:function(o,p,q){if(q!=undefined){this.setCallbackParam(q);
}qx.data.store.Json.call(this,o,p);
},properties:{callbackParam:{check:k,init:j,nullable:true},callbackName:{check:k,nullable:true}},members:{_createRequest:function(r){if(this.isDeprecatedTransport()){this._warnDeprecated();
return this.__sE(r);
}if(this._getRequest()){this._getRequest().dispose();
}var s=new qx.io.request.Jsonp();
this._setRequest(s);
s.setCallbackParam(this.getCallbackParam());
s.setCallbackName(this.getCallbackName());
s.setUrl(r);
s.addListener(c,this._onSuccess,this);
var t=this._delegate;

if(t&&qx.lang.Type.isFunction(t.configureRequest)){this._delegate.configureRequest(s);
}s.addListener(h,this._onChangePhase,this);
s.addListener(l,this._onFail,this);
s.send();
},__sE:function(u){if(this._getRequest()){this._getRequest().dispose();
}var w=new qx.io.ScriptLoader();
this._setRequest(w);
var x=this._delegate;

if(x&&qx.lang.Type.isFunction(x.configureRequest)){this._delegate.configureRequest(w);
}var v=u.indexOf(m)==-1?m:g;
u+=v+this.getCallbackParam()+d;
var y=parseInt(this.toHashCode(),10);
qx.data.store.Jsonp[y]=this;
u+=f+y+e;
w.load(u,function(status){delete this[y];

if(status===l){this.fireDataEvent(n);
}},this);
},callback:function(z){if(this.isDisposed()){return;
}this.__sF(z);
},__sF:function(A){if(A==undefined){this.setState(b);
this.fireEvent(n);
return;
}var B=this._delegate;

if(B&&qx.lang.Type.isFunction(B.manipulateData)){A=this._delegate.manipulateData(A);
}this._marshaler.toClass(A);
this.setModel(this._marshaler.toModel(A));
this.fireDataEvent(i,this.getModel());
},_warnDeprecated:function(){qx.log.Logger.warn("Using qx.io.ScriptLoader in qx.data.store.Jsonp "+"is deprecated. Please consult the API documentation.");
}}});
})();
(function(){var j="qx.event.type.Event",i="qx.debug.io",h="fail",g="GET",f="qx.event.type.Data",e="load",d="abort",c="loadEnd",b="Map",a="qx.io.request.AbstractRequest",C="changePhase",B="sent",A="qx.io.request.authentication.IAuthentication",z="error",y="loading",x="success",w="String",v="",u="opened",t="POST",q="statusError",r="readyStateChange",o="abstract",p="unsent",m="changeResponse",n="Number",k="Content-Type",l="timeout",s="undefined";
qx.Class.define(a,{type:o,extend:qx.core.Object,construct:function(D){qx.core.Object.call(this);

if(D!==undefined){this.setUrl(D);
}var E=this._transport=this._createTransport();
this._setPhase(p);
this.__sK=qx.lang.Function.bind(this._onReadyStateChange,this);
this.__sL=qx.lang.Function.bind(this._onLoad,this);
this.__sM=qx.lang.Function.bind(this._onLoadEnd,this);
this.__sN=qx.lang.Function.bind(this._onAbort,this);
this.__sq=qx.lang.Function.bind(this._onTimeout,this);
this.__sO=qx.lang.Function.bind(this._onError,this);
E.onreadystatechange=this.__sK;
E.onload=this.__sL;
E.onloadend=this.__sM;
E.onabort=this.__sN;
E.ontimeout=this.__sq;
E.onerror=this.__sO;
},events:{"readyStateChange":j,"success":j,"load":j,"loadEnd":j,"abort":j,"timeout":j,"error":j,"statusError":j,"fail":j,"changeResponse":f,"changePhase":f},properties:{url:{check:w},requestHeaders:{check:b,nullable:true},timeout:{check:n,nullable:true,init:0},requestData:{check:function(F){return qx.lang.Type.isString(F)||qx.Class.isSubClassOf(F.constructor,qx.core.Object)||qx.lang.Type.isObject(F);
},nullable:true},authentication:{check:A,nullable:true}},members:{__sK:null,__sL:null,__sM:null,__sN:null,__sq:null,__sO:null,__sP:null,__st:null,__sQ:null,_transport:null,_createTransport:function(){throw new Error("Abstract method call");
},_getConfiguredUrl:function(){},_setRequestHeaders:function(){},_getParsedResponse:function(){throw new Error("Abstract method call");
},send:function(){var K=this._transport,G,J,H,I;
G=this._getConfiguredUrl();
if(/\#/.test(G)){G=G.replace(/\#.*/,v);
}K.timeout=this.getTimeout()*1000;
J=qx.lang.Type.isFunction(this.getMethod)?this.getMethod():g;
H=qx.lang.Type.isFunction(this.getAsync)?this.getAsync():true;
if(qx.core.Environment.get(i)){this.debug("Open low-level request with method: "+J+", url: "+G+", async: "+H);
}K.open(J,G,H);
this._setPhase(u);
I=this._serializeData(this.getRequestData());
this._setRequestHeaders();
this.__sS();
this.__sR();
if(qx.core.Environment.get(i)){this.debug("Send low-level request");
}J==g?K.send():K.send(I);
this._setPhase(B);
},abort:function(){if(qx.core.Environment.get(i)){this.debug("Abort request");
}this.__st=true;
this.__sQ=d;
this._transport.abort();
},getTransport:function(){return this._transport;
},getReadyState:function(){return this._transport.readyState;
},getPhase:function(){return this.__sQ;
},getStatus:function(){return this._transport.status;
},getStatusText:function(){return this._transport.statusText;
},getResponseText:function(){return this._transport.responseText;
},getAllResponseHeaders:function(){return this._transport.getAllResponseHeaders();
},getResponseHeader:function(L){return this._transport.getResponseHeader(L);
},getResponseContentType:function(){return this.getResponseHeader(k);
},isDone:function(){return this.getReadyState()===4;
},getResponse:function(){return this.__sP;
},_setResponse:function(M){var N=M;

if(this.__sP!==M){this.__sP=M;
this.fireEvent(m,qx.event.type.Data,[this.__sP,N]);
}},_onReadyStateChange:function(){var O,P=this.getReadyState();

if(qx.core.Environment.get(i)){this.debug("Fire readyState: "+P);
}this.fireEvent(r);
if(this.__st){return;
}
if(P===3){this._setPhase(y);
}
if(this.isDone()){if(qx.core.Environment.get(i)){this.debug("Request completed with HTTP status: "+this.getStatus());
}this._setPhase(e);
if(qx.util.Request.isSuccessful(this.getStatus())){if(qx.core.Environment.get(i)){this.debug("Response is of type: '"+this.getResponseContentType()+"'");
}O=this._getParsedResponse();
this._setResponse(O);
this._fireStatefulEvent(x);
}else{if(this.getStatus()!==0){this._fireStatefulEvent(q);
this.fireEvent(h);
}}}},_onLoad:function(){this.fireEvent(e);
},_onLoadEnd:function(){this.fireEvent(c);
},_onAbort:function(){this._fireStatefulEvent(d);
},_onTimeout:function(){this._fireStatefulEvent(l);
this.fireEvent(h);
},_onError:function(){this.fireEvent(z);
this.fireEvent(h);
},_fireStatefulEvent:function(Q){this._setPhase(Q);
this.fireEvent(Q);
},_setPhase:function(R){var S=this.__sQ;
this.__sQ=R;
this.fireDataEvent(C,R,S);
},_serializeData:function(T){var U=typeof this.getMethod!==s&&this.getMethod()==t;

if(!T){return;
}
if(qx.lang.Type.isString(T)){return T;
}
if(qx.Class.isSubClassOf(T.constructor,qx.core.Object)){return qx.util.Serializer.toUriParameter(T);
}
if(qx.lang.Type.isObject(T)){return qx.lang.Object.toUriParameter(T,U);
}},__sR:function(){var V=this.getRequestHeaders();

if(V){qx.lang.Object.getKeys(V).forEach(function(W){this._transport.setRequestHeader(W,V[W]);
},this);
}},__sS:function(){var Y=this.getAuthentication(),X=this._transport;

if(Y){Y.getAuthHeaders().forEach(function(ba){if(ba.key&&ba.value){if(qx.core.Environment.get(i)){this.debug("Set authentication header '"+ba.key+"' to '"+ba.value+"'");
}X.setRequestHeader(ba.key,ba.value);
}},this);
}}},environment:{"qx.debug.io":false},destruct:function(){var bc=this._transport,bb=function(){};

if(this._transport){bc.onreadystatechange=bc.onload=bc.onloadend=bc.onabort=bc.ontimeout=bc.onerror=bb;
bc.dispose();
}}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e.setType(this.getType());
e.setState(this.getState());
e.setStatusCode(this.getStatusCode());
e.setContent(this.getContent());
e.setResponseHeaders(this.getResponseHeaders());
return e;
},getResponseHeader:function(f){var g=this.getResponseHeaders();

if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var k="value",j=" ",h="icon",g="model",f="text",e="source",d="mshtml",c="engine.name",b="user.profile_image_url",a="qxc/application/twitterdemo/twitter_logo_outline.png",J="Enter",I="one",H="http",G="keydown",F="http://twitter.com/statuses/user_timeline/1and1.json",E="<a href='",D="execute",C="1and1",B="selection[0]",A="username",r="Location: ",s="Details",p="user.name",q="Name: ",n="qxc.application.twitterdemo.Demo",o="target='_blank'",l="</a>",m="Posted with: ",t="' target='_blank'>",u="Show",w="user.location",v=".json",y="http://twitter.com/statuses/user_timeline/",x="Avatar: ",z="Message: ";
qx.Class.define(n,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._createView();
},members:{_createView:function(){this.setLayout(new qx.ui.layout.Canvas());
var T=new qx.ui.basic.Image(a);
this.add(T,{left:10,top:15});
var O=new qx.ui.form.List();
this.add(O,{left:10,top:135,bottom:5});
O.set({selectionMode:I,width:300,maxHeight:400});
var R=new qx.data.controller.List(null,O);
R.setDelegate(this);
R.setLabelPath(f);
if(qx.core.Environment.get(c)!=d){R.setIconPath(b);
}var M=F;
var V=new qx.data.store.Jsonp(M);
V.bind(g,R,g);
var P=new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
P.set({width:300});
P.add(new qx.ui.core.Spacer(),{flex:1});
var K=new qx.ui.form.TextField(C);
K.setPlaceholder(A);
P.add(K);
var S=new qx.ui.form.Button(u);
P.add(S);
S.addListener(D,function(){var X=y+K.getValue()+v;

if(V.getUrl()==X){V.reload();
}else{V.setUrl(X);
}},this);
K.addListener(G,function(Y){if(Y.getKeyIdentifier()==J){S.execute();
}},this);
this.add(P,{left:10,top:105});
var N=new qx.ui.groupbox.GroupBox(s);
this.add(N,{left:320,top:116,bottom:5});
N.setWidth(270);
N.setHeight(220);
N.setAllowGrowY(false);
N.setLayout(new qx.ui.layout.Grid(5,5));
N.add(new qx.ui.basic.Label(q),{row:0,column:0});
N.add(new qx.ui.basic.Label(r),{row:1,column:0});
N.add(new qx.ui.basic.Label(z),{row:2,column:0});
N.add(new qx.ui.basic.Label(m),{row:3,column:0});
var name=new qx.ui.basic.Label();
N.add(name,{row:0,column:1});
var location=new qx.ui.basic.Label();
N.add(location,{row:1,column:1});
var U=new qx.ui.basic.Label();
U.setRich(true);
U.setWidth(150);
U.setSelectable(true);
N.add(U,{row:2,column:1});
var W=new qx.ui.basic.Label();
W.setRich(true);
N.add(W,{row:3,column:1});
var L=new qx.data.controller.Object();
L.addTarget(name,k,p);
L.addTarget(location,k,w);
L.addTarget(U,k,f,false,{converter:function(ba){var bb=ba.split(j);

for(var i=bb.length-1;i>=0;i--){if(bb[i].indexOf(H)==0){bb[i]=E+bb[i]+t+bb[i]+l;
}}return bb.join(j);
}});
L.addTarget(W,k,e,false,{converter:function(bc){bc=bc.split(j);
bc.splice(1,0,o);
return bc.join(j);
}});

if(qx.core.Environment.get(c)!=d){N.add(new qx.ui.basic.Label(x),{row:4,column:0});
var Q=new qx.ui.basic.Image();
N.add(Q,{row:4,column:1});
L.addTarget(Q,e,b);
}R.bind(B,L,g);
},configureItem:function(bd){bd.setRich(true);
bd.getChildControl(h).setWidth(48);
bd.getChildControl(h).setHeight(48);
bd.getChildControl(h).setScale(true);
}}});
})();
(function(){var o="qx.event.type.Event",n="function",m="xml",l="Content-Type",k="GET",j="Boolean",i="",h="Accept",g="application/x-www-form-urlencoded",f="Cache-Control",c="qx.debug.io",e="qx.io.request.Xhr",d="json",b="POST",a="String";
qx.Class.define(e,{extend:qx.io.request.AbstractRequest,construct:function(p,q){if(q!==undefined){this.setMethod(q);
}qx.io.request.AbstractRequest.call(this,p);
},events:{"readyStateChange":o,"success":o,"load":o,"statusError":o},statics:{PARSER:{json:qx.lang.Json.parse,xml:qx.xml.Document.fromString}},properties:{method:{init:k},async:{check:j,init:true},accept:{check:a,nullable:true},cache:{check:function(r){return qx.lang.Type.isBoolean(r)||qx.lang.Type.isString(r);
},init:true}},members:{__sT:null,_createTransport:function(){return new qx.bom.request.Xhr();
},_getConfiguredUrl:function(){var s=this.getUrl(),t;

if(this.getMethod()===k&&this.getRequestData()){t=this._serializeData(this.getRequestData());
s=qx.util.Uri.appendParamsToUrl(s,t);
}
if(this.getCache()===false){s=qx.util.Uri.appendParamsToUrl(s,{nocache:new Date().valueOf()});
}return s;
},_setRequestHeaders:function(){var v=this._transport,u=this.getRequestHeaders();
if(qx.lang.Type.isString(this.getCache())){v.setRequestHeader(f,this.getCache());
}if(this.getMethod()===b&&!u||(u&&!u[l])){v.setRequestHeader(l,g);
}if(this.getAccept()){if(qx.core.Environment.get(c)){this.debug("Accepting: '"+this.getAccept()+"'");
}v.setRequestHeader(h,this.getAccept());
}},_getParsedResponse:function(){var x=this._transport.responseText,w=this._getParser();

if(typeof w===n){if(x!==i){return w.call(this,x);
}}return x;
},setParser:function(y){var z=qx.io.request.Xhr;
if(typeof z.PARSER[y]===n){return this.__sT=z.PARSER[y];
}return this.__sT=y;
},_getParser:function(){var A=this.__sT,B;
if(A){return A;
}if(!this.isDone()){return;
}B=this.getResponseContentType();

if((/^application\/json/).test(B)){A=qx.io.request.Xhr.PARSER[d];
}
if((/^application\/xml/).test(B)){A=qx.io.request.Xhr.PARSER[m];
}if((/[^\/]+\/[^\+]+\+xml/).test(this.getResponseContentType())){A=qx.io.request.Xhr.PARSER[m];
}return A;
}}});
})();
(function(){var t="Integer",s="aborted",r="_onaborted",q="_on",p="__iz",o="_applyEnabled",n="Boolean",m="sending",l="interval",k="__qt",c="failed",j="qx.io.remote.RequestQueue",g="timeout",b="completed",a="queued",f="io.maxrequests",d="receiving",h="singleton";
qx.Class.define(j,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__gX=[];
this.__qt=[];
this.__qu=0;
this.__iz=new qx.event.Timer(500);
this.__iz.addListener(l,this._oninterval,this);
},properties:{enabled:{init:true,check:n,apply:o},maxTotalRequests:{check:t,nullable:true},maxConcurrentRequests:{check:t,init:qx.core.Environment.get(f)},defaultTimeout:{check:t,init:5000}},members:{__gX:null,__qt:null,__qu:null,__iz:null,getRequestQueue:function(){return this.__gX;
},getActiveQueue:function(){return this.__qt;
},_debug:function(){var u;
},_check:function(){this._debug();
if(this.__qt.length==0&&this.__gX.length==0){this.__iz.stop();
}if(!this.getEnabled()){return;
}if(this.__gX.length==0||(this.__gX[0].isAsynchronous()&&this.__qt.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__qu>=this.getMaxTotalRequests()){return;
}var v=this.__gX.shift();
var w=new qx.io.remote.Exchange(v);
this.__qu++;
this.__qt.push(w);
this._debug();
w.addListener(m,this._onsending,this);
w.addListener(d,this._onreceiving,this);
w.addListener(b,this._oncompleted,this);
w.addListener(s,this._oncompleted,this);
w.addListener(g,this._oncompleted,this);
w.addListener(c,this._oncompleted,this);
w._start=(new Date).valueOf();
w.send();
if(this.__gX.length>0){this._check();
}},_remove:function(x){qx.lang.Array.remove(this.__qt,x);
x.dispose();
this._check();
},__qv:0,_onsending:function(e){e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){var z=e.getTarget().getRequest();
var y=q+e.getType();
this._remove(e.getTarget());
try{if(z[y]){z[y](e);
}}catch(A){this.error("Request "+z+" handler "+y+" threw an error: ",A);
try{if(z[r]){var event=qx.event.Registration.createEvent(s,qx.event.type.Event);
z[r](event);
}}catch(B){}}},_oninterval:function(e){var I=this.__qt;

if(I.length==0){this.__iz.stop();
return;
}var D=(new Date).valueOf();
var G;
var E;
var H=this.getDefaultTimeout();
var F;
var C;

for(var i=I.length-1;i>=0;i--){G=I[i];
E=G.getRequest();

if(E.isAsynchronous()){F=E.getTimeout();
if(F==0){continue;
}
if(F==null){F=H;
}C=D-G._start;

if(C>F){this.warn("Timeout: transport "+G.toHashCode());
this.warn(C+"ms > "+F+"ms");
G.timeout();
}}}},_applyEnabled:function(J,K){if(J){this._check();
}this.__iz.setEnabled(J);
},add:function(L){L.setState(a);

if(L.isAsynchronous()){this.__gX.push(L);
}else{this.__gX.unshift(L);
}this._check();

if(this.getEnabled()){this.__iz.start();
}},abort:function(M){var N=M.getTransport();

if(N){N.abort();
}else if(qx.lang.Array.contains(this.__gX,M)){qx.lang.Array.remove(this.__gX,M);
}}},destruct:function(){this._disposeArray(k);
this._disposeObjects(p);
this.__gX=null;
}});
})();
(function(){var u='"',t="{",s="[",r=",",q="",p="get",o="}",n="]",m='":',l="&",d="null",k='\\t',g='\\"',c='\\n',b='\\b',f="=",e="qx.util.Serializer",h='\\r',a='\\\\',j='\\f';
qx.Class.define(e,{statics:{toUriParameter:function(v,w,x){var B=q;
var C=qx.util.PropertyUtil.getProperties(v.constructor);

for(var name in C){var y=v[p+qx.lang.String.firstUp(name)]();
if(qx.lang.Type.isArray(y)){var A=qx.data&&qx.data.IListData&&qx.Class.hasInterface(y&&y.constructor,qx.data.IListData);

for(var i=0;i<y.length;i++){var z=A?y.getItem(i):y[i];
B+=this.__sU(name,z,w);
}}else if(qx.lang.Type.isDate(y)&&x!=null){B+=this.__sU(name,x.format(y),w);
}else{B+=this.__sU(name,y,w);
}}return B.substring(0,B.length-1);
},__sU:function(name,D,E){if(D instanceof qx.core.Object&&E!=null){var F=encodeURIComponent(E(D));

if(F===undefined){var F=encodeURIComponent(D);
}}else{var F=encodeURIComponent(D);
}return encodeURIComponent(name)+f+F+l;
},toNativeObject:function(G,H,I){var L;
if(G==null){return null;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(G.constructor,qx.data.IListData)){L=[];

for(var i=0;i<G.getLength();i++){L.push(qx.util.Serializer.toNativeObject(G.getItem(i),H,I));
}return L;
}if(qx.lang.Type.isArray(G)){L=[];

for(var i=0;i<G.length;i++){L.push(qx.util.Serializer.toNativeObject(G[i],H,I));
}return L;
}if(G instanceof qx.core.Object){if(H!=null){var M=H(G);
if(M!=undefined){return M;
}}L={};
var N=qx.util.PropertyUtil.getAllProperties(G.constructor);

for(var name in N){if(N[name].group!=undefined){continue;
}var K=G[p+qx.lang.String.firstUp(name)]();
L[name]=qx.util.Serializer.toNativeObject(K,H,I);
}return L;
}if(qx.lang.Type.isDate(G)&&I!=null){return I.format(G);
}if(qx.locale&&qx.locale.LocalizedString&&G instanceof qx.locale.LocalizedString){return G.toString();
}if(qx.lang.Type.isObject(G)){L={};

for(var J in G){L[J]=qx.util.Serializer.toNativeObject(G[J],H,I);
}return L;
}return G;
},toJson:function(O,P,Q){var T=q;
if(O==null){return d;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(O.constructor,qx.data.IListData)){T+=s;

for(var i=0;i<O.getLength();i++){T+=qx.util.Serializer.toJson(O.getItem(i),P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(qx.lang.Type.isArray(O)){T+=s;

for(var i=0;i<O.length;i++){T+=qx.util.Serializer.toJson(O[i],P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(O instanceof qx.core.Object){if(P!=null){var U=P(O);
if(U!=undefined){return u+U+u;
}}T+=t;
var V=qx.util.PropertyUtil.getProperties(O.constructor);

for(var name in V){if(V[name].group!=undefined){continue;
}var S=O[p+qx.lang.String.firstUp(name)]();
T+=u+name+m+qx.util.Serializer.toJson(S,P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(O instanceof qx.locale.LocalizedString){O=O.toString();
}if(qx.lang.Type.isDate(O)&&Q!=null){return u+Q.format(O)+u;
}if(qx.lang.Type.isObject(O)){T+=t;

for(var R in O){T+=u+R+m+qx.util.Serializer.toJson(O[R],P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(qx.lang.Type.isString(O)){O=O.replace(/([\\])/g,a);
O=O.replace(/(["])/g,g);
O=O.replace(/([\r])/g,h);
O=O.replace(/([\f])/g,j);
O=O.replace(/([\n])/g,c);
O=O.replace(/([\t])/g,k);
O=O.replace(/([\b])/g,b);
return u+O+u;
}if(qx.lang.Type.isDate(O)||qx.lang.Type.isRegExp(O)){return u+O+u;
}return O+q;
}}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var s=++qx.io.remote.transport.Script.__qC;

if(s>=2000000000){qx.io.remote.transport.Script.__qC=s=1;
}this.__eg=null;
this.__qC=s;
},statics:{__qC:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(t,content){var u=qx.io.remote.transport.Script._instanceRegistry[t];

if(u==null){}else{u._responseContent=content;
u._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__qA:0,__eg:null,__qC:null,send:function(){var x=this.getUrl();
x+=(x.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__qC;
var A=this.getParameters();
var z=[];

for(var w in A){if(w.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var y=A[w];

if(y instanceof Array){for(var i=0;i<y.length;i++){z.push(encodeURIComponent(w)+q+encodeURIComponent(y[i]));
}}else{z.push(encodeURIComponent(w)+q+encodeURIComponent(y));
}}
if(z.length>0){x+=r+z.join(r);
}var v=this.getData();

if(v!=null){x+=r+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+q+encodeURIComponent(v);
}qx.io.remote.transport.Script._instanceRegistry[this.__qC]=this;
this.__eg=document.createElement(c);
this.__eg.charset=e;
this.__eg.src=x;
document.body.appendChild(this.__eg);
},_switchReadyState:function(B){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__qA<B){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qA]);
}},setRequestHeader:function(C,D){},getResponseHeader:function(E){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){return null;
}
switch(this.getResponseType()){case m:case o:case l:{};
var F=this._responseContent;
return (F===0?0:(F||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__eg){delete qx.io.remote.transport.Script._instanceRegistry[this.__qC];
document.body.removeChild(this.__eg);
}this.__eg=this._responseContent=null;
}});
})();
(function(){var x="source",w="password",v="qx.util.Uri",u="port",t="protocol",s="&",r="",q="userInfo",p="?",n="user",e="anchor",l="strict",h="queryKey",c="directory",b="loose",g="relative",f="path",j="host",a="file",k="authority",d="query";
qx.Class.define(v,{statics:{parseUri:function(y,z){var A={key:[x,t,k,q,n,w,j,u,g,f,c,a,d,e],q:{name:h,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};
var o=A,m=A.parser[z?l:b].exec(y),B={},i=14;

while(i--){B[o.key[i]]=m[i]||r;
}B[o.q.name]={};
B[o.key[12]].replace(o.q.parser,function(C,D,E){if(D){B[o.q.name][D]=E;
}});
return B;
},appendParamsToUrl:function(F,G){if(G===undefined){return F;
}
if(qx.lang.Type.isObject(G)){G=qx.lang.Object.toUriParameter(G);
}
if(!G){return F;
}return F+=(/\?/).test(F)?s+G:p+G;
}}});
})();
(function(){var c="qx.event.type.Event",b="qx.io.request.Jsonp",a="Boolean";
qx.Class.define(b,{extend:qx.io.request.AbstractRequest,events:{"success":c,"load":c,"statusError":c},properties:{cache:{check:a,init:true}},members:{_createTransport:function(){return new qx.bom.request.Jsonp();
},_getConfiguredUrl:function(){var d=this.getUrl(),e;

if(this.getRequestData()){e=this._serializeData(this.getRequestData());
d=qx.util.Uri.appendParamsToUrl(d,e);
}
if(!this.getCache()){d=qx.util.Uri.appendParamsToUrl(d,{nocache:new Date().valueOf()});
}return d;
},_getParsedResponse:function(){return this._transport.responseJson;
},setCallbackParam:function(f){this._transport.setCallbackParam(f);
},setCallbackName:function(name){this._transport.setCallbackName(name);
}}});
})();
(function(){var a="showcase.page.databinding.Content";
qx.Class.define(a,{extend:showcase.AbstractContent,construct:function(b){showcase.AbstractContent.call(this,b);
this.setView(new qxc.application.twitterdemo.Demo());
}});
})();
(function(){var b="//",a="qx.util.Request";
qx.Class.define(a,{statics:{isCrossDomain:function(c){var e=qx.util.Uri.parseUri(c),location=window.location,d=location.protocol;
if(!(c.indexOf(b)!==-1)){return false;
}
if(d.substr(0,d.length-1)==e.protocol&&location.host===e.host&&location.port===e.port){return false;
}return true;
},isSuccessful:function(status){return (status>=200&&status<300||status===304);
}}});
})();
(function(){var k="engine.name",j="qx.debug.io",i="",h="mshtml",g="opera",f="gecko",d="engine.version",c="onunload",b="file:",a="undefined",w="activex",v="If-None-Match",u="xhr",t="If-Modified-Since",s="If-Match",r="Microsoft.XMLHTTP",q="browser.version",p="qx.bom.request.Xhr",o="Microsoft.XMLDOM",n="If-Range",l="Content-Type",m="io.xhr";
qx.Bootstrap.define(p,{construct:function(){this.__sV=qx.Bootstrap.bind(this.__tf,this);
this.__sq=qx.Bootstrap.bind(this.__th,this);
this.__te();
if(window.attachEvent){this.__sW=qx.Bootstrap.bind(this.__tk,this);
window.attachEvent(c,this.__sW);
}},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{readyState:0,responseText:i,responseXML:null,status:0,statusText:i,timeout:0,open:function(x,y,z,A,B){if(this.__sv){return;
}this.__st=false;
this.__sX=false;
this.__sY=false;

if(typeof z==a){z=true;
}this.__ta=z;
if(!this.__tl()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.dispose();
this.__te();
}this.__tc.onreadystatechange=this.__sV;

try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Open native request with method: "+x+", url: "+y+", async: "+z);
}this.__tc.open(x,y,z,A,B);
}catch(C){if(!qx.util.Request.isCrossDomain(y)){throw C;
}
if(!this.__ta){this.__tb=C;
}
if(this.__ta){if(window.XDomainRequest){this.readyState=4;
this.__tc=new XDomainRequest();
this.__tc.onerror=qx.Bootstrap.bind(function(){this.onreadystatechange();
this.onerror();
this.onloadend();
},this);

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Retry open native request with method: "+x+", url: "+y+", async: "+z);
}this.__tc.open(x,y,z,A,B);
return;
}window.setTimeout(qx.Bootstrap.bind(function(){this.readyState=4;
this.onreadystatechange();
this.onerror();
this.onloadend();
},this));
}}if(qx.core.Environment.get(k)===f&&parseInt(qx.core.Environment.get(d),10)<2&&!this.__ta){this.readyState=qx.bom.request.Xhr.OPENED;
this.onreadystatechange();
}},setRequestHeader:function(D,E){if(this.__sv){return;
}if(D==s||D==t||D==v||D==n){this.__sY=true;
}this.__tc.setRequestHeader(D,E);
},send:function(F){if(this.__sv){return;
}if(!this.__ta&&this.__tb){throw this.__tb;
}if(qx.core.Environment.get(k)===g&&this.timeout===0){this.timeout=10000;
}if(this.timeout>0){this.__td=window.setTimeout(this.__sq,this.timeout);
}F=typeof F==a?null:F;
try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Send native request");
}this.__tc.send(F);
}catch(H){if(!this.__ta){throw H;
}if(this._getProtocol()===b){this.readyState=2;
this.__sy();
var G=this;
window.setTimeout(function(){G.readyState=3;
G.__sy();
G.readyState=4;
G.__sy();
});
}}if(qx.core.Environment.get(k)===f&&!this.__ta){this.__tf();
}this.__sX=true;
},abort:function(I){if(this.__sv){return;
}this.__st=true;
this.__tc.abort();

if(this.__tc){this.readyState=this.__tc.readyState;
}
if(I){return;
}},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(J){if(this.__sv){return;
}return this.__tc.getResponseHeader(J);
},getAllResponseHeaders:function(){if(this.__sv){return;
}return this.__tc.getAllResponseHeaders();
},getRequest:function(){return this.__tc;
},dispose:function(){if(this.__sv){return false;
}if(window.detachEvent){window.detachEvent(c,this.__sW);
}try{this.__tc.onreadystatechange;
}catch(L){return;
}var K=function(){};
this.__tc.onreadystatechange=K;
this.__tc.onload=K;
this.__tc.onerror=K;
this.abort(true);
this.__tc=null;
this.__sv=true;
return true;
},_createNativeXhr:function(){var M=qx.core.Environment.get(m);

if(M===u){return new XMLHttpRequest();
}
if(M==w){return new window.ActiveXObject(r);
}qx.log.Logger.error(this,"No XHR support available.");
},_getProtocol:function(){return window.location.protocol;
},__tc:null,__ta:null,__sV:null,__sW:null,__sq:null,__sX:null,__st:null,__dU:null,__sv:null,__td:null,__tb:null,__sY:null,__te:function(){this.__tc=this._createNativeXhr();
this.__tc.onreadystatechange=this.__sV;
this.__sv=this.__sX=this.__st=false;
},__tf:function(){var N=this.__tc,O=true;

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Received native readyState: "+N.readyState);
}if(this.readyState==N.readyState){return;
}this.readyState=N.readyState;
if(this.readyState===qx.bom.request.Xhr.DONE&&this.__st&&!this.__sX){return;
}if(!this.__ta&&(N.readyState==2||N.readyState==3)){return;
}this.status=0;
this.statusText=this.responseText=i;
this.responseXML=null;

if(this.readyState>qx.bom.request.Xhr.OPENED){try{this.status=N.status;
this.statusText=N.statusText;
this.responseText=N.responseText;
this.responseXML=N.responseXML;
}catch(P){O=false;
}
if(O){this.__ti();
this.__tj();
}}this.__sy();
if(this.readyState==qx.bom.request.Xhr.DONE){if(N){N.onreadystatechange=function(){};
}}},__sy:function(){var Q=this;
if(qx.core.Environment.get(k)==h&&qx.core.Environment.get(d)<8){if(this.__ta&&!this.__sX&&this.readyState>=qx.bom.request.Xhr.LOADING){if(this.readyState==qx.bom.request.Xhr.LOADING){return ;
}
if(this.readyState==qx.bom.request.Xhr.DONE){window.setTimeout(function(){Q.readyState=3;
Q.onreadystatechange();
Q.readyState=4;
Q.onreadystatechange();
Q.__tg();
});
return;
}}}this.onreadystatechange();
this.__tg();
},__tg:function(){if(this.readyState===qx.bom.request.Xhr.DONE){window.clearTimeout(this.__td);
if(this.__dU){this.ontimeout();
if(qx.core.Environment.get(k)===g){this.onerror();
}this.__dU=false;
}else{if(this.__st){this.onabort();
}else{this.statusText?this.onload():this.onerror();
}}this.onloadend();
}},__th:function(){var R=this.__tc;
this.readyState=qx.bom.request.Xhr.DONE;
this.__dU=true;
R.abort();
this.responseText=i;
this.responseXML=null;
this.__sy();
},__ti:function(){var S=this.readyState===qx.bom.request.Xhr.DONE;
if(this._getProtocol()===b&&this.status===0){this.status=200;
}if(this.status===1223){this.status=204;
}if(qx.core.Environment.get(k)===g){if(S&&this.__sY&&!this.__st&&this.status===0){this.status=304;
}}},__tj:function(){if(qx.core.Environment.get(k)==h&&(this.getResponseHeader(l)||i).match(/[^\/]+\/[^\+]+\+xml/)&&this.responseXML&&!this.responseXML.documentElement){var T=new window.ActiveXObject(o);
T.async=false;
T.validateOnParse=false;
T.loadXML(this.responseText);
this.responseXML=T;
}},__tk:function(){try{if(this){this.dispose();
}}catch(e){}},__tl:function(){var name=qx.core.Environment.get(k);
var U=qx.core.Environment.get(q);
return !(name==h&&U<9||name==f&&U<3.5);
}},defer:function(){qx.core.Environment.add(j,false);
}});
})();
(function(){var i="qx.debug.io",h="qx.bom.request.Jsonp",g="callback",f="open",e="dispose",d="",c="_onNativeLoad",b="].callback",a="qx.bom.request.Jsonp[";
qx.Bootstrap.define(h,{extend:qx.bom.request.Script,construct:function(){qx.bom.request.Script.apply(this);
this.__ts();
},members:{responseJson:null,__bR:null,__tm:null,__tn:null,__to:null,__tp:null,__sv:null,open:function(j,k){if(this.__sv){return;
}var l={},n,m,o=this;
this.responseJson=null;
this.__to=false;
n=this.__tm||g;
m=this.__tn||a+this.__bR+b;
if(!this.__tn){this.constructor[this.__bR]=this;
}else{if(!window[this.__tn]){this.__tp=true;
window[this.__tn]=function(p){o.callback(p);
};
}else{if(qx.core.Environment.get(i)){qx.log.Logger.debug(qx.bom.request.Jsonp,"Callback "+this.__tn+" already exists");
}}}
if(qx.core.Environment.get(i)){qx.Bootstrap.debug(qx.bom.request.Jsonp,"Expecting JavaScript response to call: "+m);
}l[n]=m;
k=qx.util.Uri.appendParamsToUrl(k,l);
this.__tr(f,[j,k]);
},callback:function(q){if(this.__sv){return;
}this.__to=true;
this.responseJson=q;
this.constructor[this.__bR]=undefined;
this.__tq();
},setCallbackParam:function(r){this.__tm=r;
},setCallbackName:function(name){this.__tn=name;
},dispose:function(){this.__tq();
this.__tr(e);
},_onNativeLoad:function(){this.status=this.__to?200:500;
this.__tr(c);
},__tq:function(){if(this.__tp&&window[this.__tn]){window[this.__tn]=undefined;
this.__tp=false;
}},__tr:function(s,t){qx.bom.request.Script.prototype[s].apply(this,t||[]);
},__ts:function(){this.__bR=(new Date().valueOf())+(d+Math.random()).substring(2,5);
}}});
})();
(function(){var m="failed",k="completed",j="=",h="aborted",g="sending",f="",d="&",c="engine.name",b="configured",a="timeout",L="application/xml",K="qx.io.remote.transport.XmlHttp",J="application/json",I="text/html",H="receiving",G="text/plain",F="text/javascript",E="?",D="created",C="Boolean",u='Referer',v="engine.version",r='Basic ',t="\n</pre>",p="string",q='Authorization',n="<pre>Could not execute json: \n",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",w="mshtml",x=':',z="parseerror",y="file:",B="webkit",A="object";
qx.Class.define(K,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[G,F,J,L,I]},createRequestObject:qx.core.Environment.select(c,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:C,init:true}},members:{__qD:false,__qA:0,__qE:null,getRequest:function(){if(this.__qE===null){this.__qE=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__qE.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__qE;
},send:function(){this.__qA=0;
var Q=this.getRequest();
var M=this.getMethod();
var T=this.getAsynchronous();
var S=this.getUrl();
var O=(window.location.protocol===y&&!(/^http(s){0,1}\:/.test(S)));
this.__qD=O;
var W=this.getParameters(false);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){S+=(S.indexOf(E)>=0?d:E)+U.join(d);
}if(this.getData()===null){var W=this.getParameters(true);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){this.setData(U.join(d));
}}var V=function(X){var bd=o;
var bh=f;
var bb,ba,Y;
var be,bf,bg,bc;
var i=0;

do{bb=X.charCodeAt(i++);
ba=X.charCodeAt(i++);
Y=X.charCodeAt(i++);
be=bb>>2;
bf=((bb&3)<<4)|(ba>>4);
bg=((ba&15)<<2)|(Y>>6);
bc=Y&63;

if(isNaN(ba)){bg=bc=64;
}else if(isNaN(Y)){bc=64;
}bh+=bd.charAt(be)+bd.charAt(bf)+bd.charAt(bg)+bd.charAt(bc);
}while(i<X.length);
return bh;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){Q.open(M,S,T);
Q.setRequestHeader(q,r+V(this.getUsername()+x+this.getPassword()));
}else{Q.open(M,S,T,this.getUsername(),this.getPassword());
}}else{Q.open(M,S,T);
}}catch(bi){this.error("Failed with exception: "+bi);
this.failed();
return;
}if(!(qx.core.Environment.get(c)==B)){Q.setRequestHeader(u,window.location.href);
}var P=this.getRequestHeaders();

for(var N in P){Q.setRequestHeader(N,P[N]);
}try{if(O&&T&&qx.core.Environment.get(c)==w&&qx.core.Environment.get(v)==9){qx.event.Timer.once(function(){Q.send(this.getData());
},this,0);
}else{Q.send(this.getData());
}}catch(bj){if(O){this.failedLocally();
}else{this.error("Failed to send data: "+bj,"send");
this.failed();
}return;
}if(!T){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===m){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case k:case h:case m:case a:{};
return;
}var bk=this.getReadyState();

if(bk==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bk,this.__qD)){if(this.getState()===b){this.setState(g);
}this.failed();
return;
}}if(bk==3&&this.__qA==1){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qA]);
}while(this.__qA<bk){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qA]);
}}),getReadyState:function(){var bl=null;

try{bl=this.getRequest().readyState;
}catch(bm){}return bl;
},setRequestHeader:function(bn,bo){this.getRequestHeaders()[bn]=bo;
},getResponseHeader:function(bp){var bq=null;

try{bq=this.getRequest().getResponseHeader(bp)||null;
}catch(br){}return bq;
},getStringResponseHeaders:function(){var bt=null;

try{var bs=this.getRequest().getAllResponseHeaders();

if(bs){bt=bs;
}}catch(bu){}return bt;
},getResponseHeaders:function(){var bx=this.getStringResponseHeaders();
var by={};

if(bx){var bv=bx.split(/[\r\n]+/g);

for(var i=0,l=bv.length;i<l;i++){var bw=bv[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bw){by[bw[1]]=bw[2];
}}}return by;
},getStatusCode:function(){var bz=-1;

try{bz=this.getRequest().status;
if(bz===1223){bz=204;
}}catch(bA){}return bz;
},getStatusText:function(){var bB=f;

try{bB=this.getRequest().statusText;
}catch(bC){}return bB;
},getResponseText:function(){var bD=null;

try{bD=this.getRequest().responseText;
}catch(bE){bD=null;
}return bD;
},getResponseXml:function(){var bH=null;
var bF=this.getStatusCode();
var bG=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bF,bG,this.__qD)){try{bH=this.getRequest().responseXML;
}catch(bI){}}if(typeof bH==A&&bH!=null){if(!bH.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,f);
bH.loadXML(s);
}if(!bH.documentElement){throw new Error("Missing Document Element!");
}
if(bH.documentElement.tagName==z){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bH;
},getFetchedLength:function(){var bJ=this.getResponseText();
return typeof bJ==p?bJ.length:0;
},getResponseContent:function(){var bK=this.getState();

if(bK!==k&&bK!=m){return null;
}var bM=this.getResponseText();

if(bK==m){return bM;
}
switch(this.getResponseType()){case G:case I:{};
return bM;
case J:{};

try{if(bM&&bM.length>0){var bL;

if(this.getParseJson()){bL=qx.lang.Json.parse(bM);
bL=(bL===0?0:(bL||null));
}else{bL=bM;
}return bL;
}else{return null;
}}catch(bN){this.error("Could not execute json: ["+bM+"]",bN);
return n+bM+t;
}case F:{};

try{if(bM&&bM.length>0){var bL=window.eval(bM);
return (bL===0?0:(bL||null));
}else{return null;
}}catch(bO){this.error("Could not execute javascript: ["+bM+"]",bO);
return null;
}case L:bM=this.getResponseXml();
{};
return (bM===0?0:(bM||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bP,bQ){switch(bP){case D:this.fireEvent(D);
break;
case b:this.fireEvent(b);
break;
case g:this.fireEvent(g);
break;
case H:this.fireEvent(H);
break;
case k:this.fireEvent(k);
break;
case m:this.fireEvent(m);
break;
case h:this.getRequest().abort();
this.fireEvent(h);
break;
case a:this.getRequest().abort();
this.fireEvent(a);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,K);
},destruct:function(){var bR=this.getRequest();

if(bR){bR.onreadystatechange=qx.lang.Function.empty;
switch(bR.readyState){case 1:case 2:case 3:bR.abort();
}}this.__qE=null;
}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="queued",h="String",g="sending",f="receiving",d="aborted",c="failed",b="nocache",a="completed",P="qx.io.remote.Response",O="POST",N="configured",M="timeout",L="GET",K="Pragma",J="no-url-params-on-post",I="PUT",H="no-cache",G="Cache-Control",r="Content-Type",s="text/plain",p="application/xml",q="application/json",n="text/html",o="application/x-www-form-urlencoded",l="qx.io.remote.Exchange",m="Integer",t="X-Qooxdoo-Response-Type",u="HEAD",y="qx.io.remote.Request",x="_applyResponseType",A="_applyState",z="text/javascript",C="changeState",B="_applyProhibitCaching",w="",F="_applyMethod",E="DELETE",D="boolean";
qx.Class.define(y,{extend:qx.core.Object,construct:function(Q,R,S){qx.core.Object.call(this);
this.__qn={};
this.__qo={};
this.__qp={};
this.__qq={};

if(Q!==undefined){this.setUrl(Q);
}
if(R!==undefined){this.setMethod(R);
}
if(S!==undefined){this.setResponseType(S);
}this.setProhibitCaching(true);
this.__qr=++qx.io.remote.Request.__qr;
},events:{"created":j,"configured":j,"sending":j,"receiving":j,"completed":P,"aborted":j,"failed":P,"timeout":P},statics:{__qr:0,methodAllowsRequestBody:function(T){return (T==O)||(T==I);
}},properties:{url:{check:h,init:w},method:{check:[L,O,I,u,E],apply:F,init:L},asynchronous:{check:k,init:true},data:{check:h,nullable:true},username:{check:h,nullable:true},password:{check:h,nullable:true},state:{check:[N,i,g,f,a,d,M,c],init:N,apply:A,event:C},responseType:{check:[s,z,q,p,n],init:s,apply:x},timeout:{check:m,nullable:true},prohibitCaching:{check:function(v){return typeof v==D||v===J;
},init:true,apply:B},crossDomain:{check:k,init:false},fileUpload:{check:k,init:false},transport:{check:l,nullable:true},useBasicHttpAuth:{check:k,init:false},parseJson:{check:k,init:true}},members:{__qn:null,__qo:null,__qp:null,__qq:null,__qr:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case g:case f:this.error("Aborting already sent request!");
case i:this.abort();
break;
}},isConfigured:function(){return this.getState()===N;
},isQueued:function(){return this.getState()===i;
},isSending:function(){return this.getState()===g;
},isReceiving:function(){return this.getState()===f;
},isCompleted:function(){return this.getState()===a;
},isAborted:function(){return this.getState()===d;
},isTimeout:function(){return this.getState()===M;
},isFailed:function(){return this.getState()===c;
},__qs:qx.event.GlobalError.observeMethod(function(e){var U=e.clone();
U.setTarget(this);
this.dispatchEvent(U);
}),_onqueued:function(e){this.setState(i);
this.__qs(e);
},_onsending:function(e){this.setState(g);
this.__qs(e);
},_onreceiving:function(e){this.setState(f);
this.__qs(e);
},_oncompleted:function(e){this.setState(a);
this.__qs(e);
this.dispose();
},_onaborted:function(e){this.setState(d);
this.__qs(e);
this.dispose();
},_ontimeout:function(e){this.setState(M);
this.__qs(e);
this.dispose();
},_onfailed:function(e){this.setState(c);
this.__qs(e);
this.dispose();
},_applyState:function(V,W){},_applyProhibitCaching:function(X,Y){if(!X){this.removeParameter(b);
this.removeRequestHeader(K);
this.removeRequestHeader(G);
return;
}if(X!==J||this.getMethod()!=O){this.setParameter(b,new Date().valueOf());
}else{this.removeParameter(b);
}this.setRequestHeader(K,H);
this.setRequestHeader(G,H);
},_applyMethod:function(ba,bb){if(qx.io.remote.Request.methodAllowsRequestBody(ba)){this.setRequestHeader(r,o);
}else{this.removeRequestHeader(r);
}var bc=this.getProhibitCaching();
this._applyProhibitCaching(bc,bc);
},_applyResponseType:function(bd,be){this.setRequestHeader(t,bd);
},setRequestHeader:function(bf,bg){this.__qn[bf]=bg;
},removeRequestHeader:function(bh){delete this.__qn[bh];
},getRequestHeader:function(bi){return this.__qn[bi]||null;
},getRequestHeaders:function(){return this.__qn;
},setParameter:function(bj,bk,bl){if(bl){this.__qp[bj]=bk;
}else{this.__qo[bj]=bk;
}},removeParameter:function(bm,bn){if(bn){delete this.__qp[bm];
}else{delete this.__qo[bm];
}},getParameter:function(bo,bp){if(bp){return this.__qp[bo]||null;
}else{return this.__qo[bo]||null;
}},getParameters:function(bq){return (bq?this.__qp:this.__qo);
},setFormField:function(br,bs){this.__qq[br]=bs;
},removeFormField:function(bt){delete this.__qq[bt];
},getFormField:function(bu){return this.__qq[bu]||null;
},getFormFields:function(){return this.__qq;
},getSequenceNumber:function(){return this.__qr;
}},destruct:function(){this.setTransport(null);
this.__qn=this.__qo=this.__qp=this.__qq=null;
}});
})();
(function(){var l="=",k="",j="engine.name",h="&",g="application/xml",f="application/json",d="text/html",c="textarea",b="_data_",a="load",G="text/plain",F="text/javascript",E="readystatechange",D="completed",C="?",B="qx.io.remote.transport.Iframe",A="none",z="display",y="gecko",x="frame_",s="aborted",t="pre",q="javascript:void(0)",r="sending",o="form",p="failed",m="mshtml",n="form_",u="opera",v="timeout",w="qx/static/blank.gif";
qx.Class.define(B,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var H=(new Date).valueOf();
var I=x+H;
var J=n+H;
var K;

if((qx.core.Environment.get(j)==m)){K=q;
}this.__qx=qx.bom.Iframe.create({id:I,name:I,src:K});
qx.bom.element.Style.set(this.__qx,z,A);
this.__qy=qx.bom.Element.create(o,{id:J,name:J,target:I});
qx.bom.element.Style.set(this.__qy,z,A);
qx.dom.Element.insertEnd(this.__qy,qx.dom.Node.getBodyElement(document));
this.__cF=qx.bom.Element.create(c,{id:b,name:b});
qx.dom.Element.insertEnd(this.__cF,this.__qy);
qx.dom.Element.insertEnd(this.__qx,qx.dom.Node.getBodyElement(document));
qx.event.Registration.addListener(this.__qx,a,this._onload,this);
this.__qz=qx.lang.Function.listener(this._onreadystatechange,this);
qx.bom.Event.addNativeListener(this.__qx,E,this.__qz);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[G,F,f,g,d]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__cF:null,__qA:0,__qy:null,__qx:null,__qz:null,send:function(){var M=this.getMethod();
var O=this.getUrl();
var S=this.getParameters(false);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){O+=(O.indexOf(C)>=0?h:C)+R.join(h);
}if(this.getData()===null){var S=this.getParameters(true);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){this.setData(R.join(h));
}}var L=this.getFormFields();

for(var N in L){var Q=document.createElement(c);
Q.name=N;
Q.appendChild(document.createTextNode(L[N]));
this.__qy.appendChild(Q);
}this.__qy.action=O;
this.__qy.method=M;
this.__cF.appendChild(document.createTextNode(this.getData()));
this.__qy.submit();
this.setState(r);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(qx.core.Environment.get(j)==u&&this.getIframeHtmlContent()==k){return;
}
if(this.__qy.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__qx.readyState]);
}),_switchReadyState:function(T){switch(this.getState()){case D:case s:case p:case v:this.warn("Ignore Ready State Change");
return;
}while(this.__qA<T){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qA]);
}},setRequestHeader:function(U,V){},getResponseHeader:function(W){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return k;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__qx);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__qx);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__qx);
},getIframeTextContent:function(){var X=this.getIframeBody();

if(!X){return null;
}
if(!X.firstChild){return k;
}if(X.firstChild.tagName&&X.firstChild.tagName.toLowerCase()==t){return X.firstChild.innerHTML;
}else{return X.innerHTML;
}},getIframeHtmlContent:function(){var Y=this.getIframeBody();
return Y?Y.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==D){return null;
}var ba=this.getIframeTextContent();

switch(this.getResponseType()){case G:{};
return ba;
break;
case d:ba=this.getIframeHtmlContent();
{};
return ba;
break;
case f:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?qx.lang.Json.parse(ba):null;
}catch(bb){return this.error("Could not execute json: ("+ba+")",bb);
}case F:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?window.eval(ba):null;
}catch(bc){return this.error("Could not execute javascript: ("+ba+")",bc);
}case g:ba=this.getIframeDocument();
{};
return ba;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,B);
},destruct:function(){if(this.__qx){qx.event.Registration.removeListener(this.__qx,a,this._onload,this);
qx.bom.Event.removeNativeListener(this.__qx,E,this.__qz);
if((qx.core.Environment.get(j)==y)){this.__qx.src=qx.util.ResourceManager.getInstance().toUri(w);
}qx.dom.Element.remove(this.__qx);
}
if(this.__qy){qx.dom.Element.remove(this.__qy);
}this.__qx=this.__qy=this.__cF=null;
}});
})();

});