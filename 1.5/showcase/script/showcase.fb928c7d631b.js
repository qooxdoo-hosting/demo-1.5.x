qx.$$packageData['512']={"locales":{},"resources":{"qx/icon/Tango/22/emotes/face-angel.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-embarrassed.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-kiss.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-laugh.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-plain.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-raspberry.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-sad.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-smile-big.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-smile.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-surprise.png":[22,22,"png","qx"],"showcase/virtuallist/imicons/christian_hagendorn.png":[52,64,"png","showcase"],"showcase/virtuallist/imicons/martin_wittemann.png":[52,52,"png","showcase"],"showcase/virtuallist/imicons/readme.txt":"showcase","showcase/virtuallist/imicons/status_away.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/status_busy.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/status_offline.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/status_online.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/tino_butz.png":[48,48,"png","showcase"],"showcase/virtuallist/imicons/tristan_koch.png":[73,73,"png","showcase"],"showcase/virtuallist/imicons/user_add.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/user_delete.png":[16,16,"png","showcase"]},"translations":{}};
qx.Part.$$notifyLoad("512", function() {
(function(){var k="execute",j="middle",i="name",h="",g="away",f="offline",d="value",c="online",b="icon",a="busy",S="selection[0].status",R="right",Q="separator-vertical",P="Escape",O="Cancel",N="Group: ",M="Name:",L="Enter",K="source",J="Group:",r="selection[0]",s="showcase.page.virtuallist.Content",p="center",q="showcase/virtuallist/imicons/user_delete.png",n="enabled",o="icon/16/actions/list-add.png",l="group",m="Name: ",t="keypress",u="selection.length",B="modelSelection",z="top",D="Contacts",C="Status: ",F="selection",E="Add",w="Contact Details",I="Add user",H="model",G="appear",v="avatar",x="showcase/virtuallist/imicons/user_add.png",y="left",A="Avatar: ";
qx.Class.define(s,{extend:showcase.AbstractContent,construct:function(T){showcase.AbstractContent.call(this,T);
this.setView(this._createView());
},members:{messenger:null,__JB:null,__JC:null,_createView:function(){var X=new qx.ui.window.Desktop(new qx.ui.window.Manager());
var U=new qx.ui.window.Window(D);
U.set({showClose:false,showMinimize:false,contentPadding:0});
X.add(U);
U.moveTo(250,20);
U.open();
var W=new qx.ui.layout.VBox();
W.setSeparator(Q);
U.setLayout(W);
this.messenger=new showcase.page.virtuallist.messenger.Roster();
var V=showcase.page.virtuallist.messenger.BuddyModel.createBuddies(200);
this.messenger.setModel(V);
U.add(this.createToolbar());
U.add(this.messenger,{flex:1});
X.add(this.createDetailsView(),{left:20,top:20});
return X;
},createToolbar:function(){var toolbar=new qx.ui.toolbar.ToolBar();
var bb=new qx.ui.toolbar.Part();
toolbar.add(bb);
var Y=new qx.ui.toolbar.Button(h,x).set({show:b});
Y.addListener(k,this.showAddContactWindow,this);
bb.add(Y);
var ba=new qx.ui.toolbar.Button(h,q).set({show:b});
this.messenger.bind(u,ba,n,{converter:function(bc){return bc>0;
}});
ba.addListener(k,function(){this.messenger.getModel().remove(this.messenger.getSelection().getItem(0));
},this);
bb.add(ba);
return bb;
},createDetailsView:function(){var bg=new qx.data.controller.Object();
this.messenger.bind(r,bg,H);
var bd=new qx.ui.groupbox.GroupBox(w);
var bh=new qx.ui.layout.Grid(5,5);
bh.setColumnAlign(0,R,j);
bd.setLayout(bh);
bd.add(new qx.ui.basic.Label(m),{row:0,column:0});
var bj=new qx.ui.form.TextField();
bg.addTarget(bj,d,i,true);
bd.add(bj,{row:0,column:1});
bd.add(new qx.ui.basic.Label(N),{row:1,column:0});
var be=new qx.ui.form.VirtualComboBox();
be.setLabelPath(i);
be.setModel(this.messenger.getGroups());
bg.addTarget(be,d,l,true);
bd.add(be,{row:1,column:1});
bd.add(new qx.ui.basic.Label(C),{row:2,column:0});
var bi=new qx.ui.form.SelectBox();
bi.add(new qx.ui.form.ListItem(c).set({model:c}));
bi.add(new qx.ui.form.ListItem(g).set({model:g}));
bi.add(new qx.ui.form.ListItem(a).set({model:a}));
bi.add(new qx.ui.form.ListItem(f).set({model:f}));
this.messenger.bind(S,bi,B,{converter:function(bk){return [bk];
}});
bi.bind(F,this.messenger,S,{converter:function(bl){return bl[0].getModel();
}});
bd.add(bi,{row:2,column:1});
bd.add(new qx.ui.basic.Label(A).set({alignY:z}),{row:3,column:0});
var bf=new qx.ui.basic.Image().set({alignX:p,maxWidth:70,maxHeight:70,scale:true});
bg.addTarget(bf,K,v);
bd.add(bf,{row:3,column:1});
return bd;
},showAddContactWindow:function(){if(this.__JB==null){var bm=new qx.ui.layout.Grid(5,10);
var bo=new qx.ui.window.Window(I,o);
bo.set({width:165,height:100,showMinimize:false,showClose:false,showMaximize:false});
bo.setLayout(bm);
var br=new qx.ui.basic.Label(M);
var bs=new qx.ui.form.TextField();
var bp=new qx.ui.form.VirtualComboBox();
bp.setLabelPath(i);
bp.setModel(this.messenger.getGroups());
var bn=new qx.ui.basic.Label(J);
var bu=new qx.ui.form.Button(E);
var bt=new qx.ui.form.Button(O);
this.__JC=bs;
bu.setAllowGrowX(false);
bt.setAllowGrowX(false);
bo.addListener(G,bs.focus,bs);
bt.addListener(k,bo.close,bo);
var bq=function(){var bv=new showcase.page.virtuallist.messenger.BuddyModel();
bv.setName(bs.getValue());
bv.setGroup(bp.getValue());
this.messenger.getModel().push(bv);
this.messenger.getSelection().setItem(0,bv);
bo.close();
};
bu.addListener(k,bq,this);
bo.addListener(t,function(e){var bw=e.getKeyIdentifier();

if(bw==L){bq.call(this);
}else if(bw==P){bo.close();
}},this);
bo.add(br,{row:0,column:0});
bo.add(bs,{row:0,column:1,colSpan:2});
bo.add(bn,{row:1,column:0});
bo.add(bp,{row:1,column:1,colSpan:2});
bo.add(bu,{row:2,column:1});
bo.add(bt,{row:2,column:2});
bm.setColumnAlign(0,y,j);
bm.setColumnAlign(1,R,j);
this.getView().add(bo,{left:270,top:40});
this.__JB=bo;
}this.__JC.setValue(h);
this.__JB.open();
},removeContact:function(){this.messenger.getModel().pop();
}}});
})();
(function(){var v="name",u="open",t="qx.data.Array",s="model",r="change",q="count",p="avatar",o="status",n="changeBubble",m="changeModel",f="rgb(238, 243, 255)",l="row-layer",j="off",e="white",d="changeSelection",h="changeGroup",g="showcase.page.virtuallist.messenger.Roster",k="_applyModel",c="auto";
qx.Class.define(g,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
var y=new qx.ui.layout.VBox();
this._setLayout(y);
var w=this.list=new qx.ui.list.List();
w.set({scrollbarX:j,scrollbarY:c,width:200,height:300,itemHeight:28,decorator:null,autoGrouping:false});
w.setDelegate(this);
this._add(w,{flex:1});
this.initGroups(w.getGroups());
this.initModel(new qx.data.Array());
this.initSelection(w.getSelection());
this.bind(s,w,s);
var x=w.getChildControl(l);
x.set({colorEven:e,colorOdd:f});
new qx.ui.virtual.behavior.Prefetch(w,{minLeft:0,maxLeft:0,minRight:0,maxRight:0,minAbove:600,maxAbove:800,minBelow:600,maxBelow:800}).set({interval:500});
},properties:{model:{check:t,event:m,apply:k,nullable:false,deferredInit:true},selection:{check:t,event:d,nullable:false,deferredInit:true},groups:{check:t,event:h,nullable:false,deferredInit:true}},members:{createItem:function(){return new showcase.page.virtuallist.messenger.Buddy();
},createGroupItem:function(){return new showcase.page.virtuallist.messenger.Group();
},bindItem:function(z,A,B){z.bindProperty(v,v,null,A,B);
z.bindProperty(p,p,null,A,B);
z.bindProperty(o,o,null,A,B);
},bindGroupItem:function(C,D,E){C.bindProperty(v,v,null,D,E);
C.bindProperty(q,q,null,D,E);
C.bindProperty(u,u,null,D,E);
C.bindPropertyReverse(u,u,null,D,E);
},filter:function(F){return this.__JE(F.getGroup()).isOpen();
},sorter:function(a,b){return a.getName()<b.getName()?-1:1;
},group:function(G){return this.__JE(G.getGroup());
},_applyModel:function(H,I){H.addListener(r,this.__JD,this);
H.addListener(n,this.__JD,this);

if(I!=null){I.removeListener(r,this.__JD,this);
I.removeListener(n,this.__JD,this);
}this.__JD();
},__JD:function(event){var M=this.getModel();
var L=this.getGroups();
var N={};

for(var i=0;i<L.getLength();i++){var K=L.getItem(i);
N[K.getName()]=0;
}
for(var i=0;i<M.getLength();i++){var K=M.getItem(i).getGroup();

if(N[K]==null){N[K]=1;
}else{N[K]+=1;
}}
for(var name in N){var J=N[name];
var K=this.__JE(name);
K.setCount(J);
}
if(event&&event.getType()=="changeBubble"){this.list.refresh();
}},__JE:function(name){var Q=this.getGroups();
var P=null;

for(var i=0;i<Q.getLength();i++){var O=Q.getItem(i);

if(name==O.getName()){P=O;
break;
}}
if(P==null){P=new showcase.page.virtuallist.messenger.GroupModel(name);
P.addListener("changeOpen",this.__JF,this);
Q.push(P);
}return P;
},__JF:function(event){this.list.refresh();
}}});
})();
(function(){var k="scroll",j="scrollbar-x",i="scrollbar-y",h="__ki",g="_applyInterval",f="appear",e="interval",d="qx.ui.virtual.behavior.Prefetch",c="_applyScroller",b="qx.ui.virtual.core.Scroller",a="Integer";
qx.Class.define(d,{extend:qx.core.Object,construct:function(l,m){qx.core.Object.call(this);
this.setPrefetchX(m.minLeft,m.maxLeft,m.minRight,m.maxRight);
this.setPrefetchY(m.minAbove,m.maxAbove,m.minBelow,m.maxBelow);
this.__ki=new qx.event.Timer(this.getInterval());
this.__ki.addListener(e,this._onInterval,this);

if(l){this.setScroller(l);
}},properties:{scroller:{check:b,nullable:true,init:null,apply:c},interval:{check:a,init:200,apply:g}},members:{__Ie:null,__If:null,__ki:null,__Ig:null,__Ih:null,setPrefetchX:function(n,o,p,q){this.__Ie=[n,o,p,q];
},setPrefetchY:function(r,s,t,u){this.__If=[r,s,t,u];
},_onInterval:function(){var v=this.__Ie;

if(v[1]&&v[3]){this.getScroller().getPane().prefetchX(v[0],v[1],v[2],v[3]);
qx.ui.core.queue.Manager.flush();
}var w=this.__If;

if(w[1]&&w[3]){this.getScroller().getPane().prefetchY(w[0],w[1],w[2],w[3]);
qx.ui.core.queue.Manager.flush();
}},_applyScroller:function(x,y){if(y){if(this.__Ig){y.getChildControl(j).removeListenerById(this.__Ig);
}
if(this.__Ih){y.getChildControl(i).removeListenerById(this.__Ih);
}}
if(x){if(!x.getContainerElement().getDomElement()){this.__ki.stop();
x.addListenerOnce(f,this.__ki.start,this.__ki);
}else{this.__ki.restart();
}this.__Ig=x.getChildControl(j).addListener(k,this.__ki.restart,this.__ki);
this.__Ih=x.getChildControl(i).addListener(k,this.__ki.restart,this.__ki);
}else{this.__ki.stop();
}},_applyInterval:function(z,A){this.__ki.setInterval(z);
}},destruct:function(){this.setScroller(null);
this.__Ie=this.__If=null;
this._disposeObjects(h);
}});
})();
(function(){var m="",l="icon",k="label",j="statusIcon",i="String",h="listitem",g="showcase.page.virtuallist.messenger.Buddy",f=".png",e="_applyAvatar",d="middle",a="_applyLabel",c="_applyStatus",b="showcase/virtuallist/imicons/status_";
qx.Class.define(g,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({padding:[0,3]});
this._setLayout(new qx.ui.layout.HBox(3).set({alignY:d}));
this._add(this.getChildControl(j));
this._add(this.getChildControl(k),{flex:1});
this._add(this.getChildControl(l));
},properties:{appearance:{refine:true,init:h},name:{check:i,apply:a,init:m},avatar:{check:i,apply:e,init:m},status:{check:i,apply:c,init:m}},members:{_createChildControlImpl:function(n,o){var p;

switch(n){case k:p=new qx.ui.basic.Label().set({allowGrowX:true});
break;
case l:p=new qx.ui.basic.Image().set({width:26,height:26,scale:true});
break;
case j:p=new qx.ui.basic.Image();
break;
}return p||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,n);
},_applyLabel:function(q,r){this.getChildControl(k).setValue(q);
},_applyAvatar:function(s,t){this.getChildControl(l).setSource(s);
},_applyStatus:function(u,v){var w=b+u+f;
this.getChildControl(j).setSource(w);
}}});
})();
(function(){var h="changeOpen",g="Boolean",f="changeCount",e="changeName",d="showcase.page.virtuallist.messenger.GroupModel",c="Friends",b="Integer",a="String";
qx.Class.define(d,{extend:qx.core.Object,construct:function(name){qx.core.Object.call(this);

if(name!==undefined){this.setName(name);
}},properties:{name:{init:c,event:e,check:a},open:{check:g,init:true,event:h},count:{check:b,init:0,event:f}}});
})();
(function(){var u="icon",t="label",s="count",r="decoration/arrows/down-invert.png",q="white",p="bold",o="_applyName",n="_applyCount",m="rgb(60, 97, 226)",l="Boolean",e="changeOpen",k="",h="(",c="click",b="_applyOpen",g="middle",f=")",i="showcase.page.virtuallist.messenger.Group",a="decoration/arrows/right-invert.png",j="Integer",d="String";
qx.Class.define(i,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({backgroundColor:m,padding:[0,3]});
this._setLayout(new qx.ui.layout.HBox(3).set({alignY:g}));
this._add(this.getChildControl(u));
this._add(this.getChildControl(t),{flex:1});
this._add(this.getChildControl(s));
},properties:{open:{check:l,event:e,apply:b,init:true},name:{check:d,apply:o,init:k},count:{check:j,apply:n,init:0}},members:{_createChildControlImpl:function(v,w){var x;

switch(v){case t:x=new qx.ui.basic.Label().set({allowGrowX:true,textColor:q,font:p});
break;
case u:x=new qx.ui.basic.Image().set({source:r});
x.addListener(c,this._onClick,this);
break;
case s:x=new qx.ui.basic.Label().set({textColor:q,font:p});
break;
}return x||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,v);
},_applyOpen:function(y,z){var A=r;

if(y==false){A=a;
}this.getChildControl(u).setSource(A);
},_applyName:function(B,C){this.getChildControl(t).setValue(B);
},_applyCount:function(D,E){this.getChildControl(s).setValue(h+D+f);
},_onClick:function(event){this.toggleOpen();
}}});
})();
(function(){var k="_applyEventPropagation",j="offline",h="String",g="Friends",f="away",e="online",d="busy",c="User #",b="qooxdoo",a="Alexander Steitz",Q=".png",P="kiss",O="Gabriel Munteanu",N="changeStatus",M="icon/22/emotes/face-smile.png",L="embarrassed",K="showcase/virtuallist/imicons/christian_hagendorn.png",J="showcase/virtuallist/imicons/tino_butz.png",I="plain",H="smile-big",r="surprise",s="smile",p="raspberry",q="sad",n="showcase/virtuallist/imicons/martin_wittemann.png",o="changeGroup",l="Tino Butz",m="showcase/virtuallist/imicons/tristan_koch.png",t="changeAvatar",u="Daniel Wagner",z="showcase.page.virtuallist.messenger.BuddyModel",y="(unnamed)",B="Andreas Ecker",A="Christian Hagendorn",D="laugh",C="Thomas Herchenröder",w="changeName",G="angel",F="icon/22/emotes/face-",E="Tristan Koch",v="Martin Wittemann",x="Adrian Olaru";
qx.Class.define(z,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{name:{init:y,event:w,check:h,apply:k},avatar:{init:M,event:t,check:h,apply:k},status:{init:j,event:N,check:[f,d,e,j],apply:k},group:{init:g,event:o,check:h,apply:k}},statics:{createBuddies:function(R){var T=[{name:a,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:B,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:v,img:n,statusIcon:this.getRandomStatus()},{name:C,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:u,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:A,img:K,statusIcon:this.getRandomStatus()},{name:x,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:l,img:J,statusIcon:this.getRandomStatus()},{name:E,img:m,statusIcon:this.getRandomStatus()},{name:O,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()}];

for(var i=0;i<T.length;i++){T[i].group=b;
}for(var i=T.length;i<R;i++){T[i]={name:c+i,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus(),group:g};
}var S=[];

for(var i=0;i<T.length;i++){var U=new showcase.page.virtuallist.messenger.BuddyModel().set({name:T[i].name,avatar:T[i].img,status:T[i].statusIcon,group:T[i].group});
S.push(U);
}return new qx.data.Array(S);
},getRandomBuddy:function(){var V=[G,L,P,D,I,p,q,H,s,r];
return F+V[Math.floor(Math.random()*V.length)]+Q;
},getRandomStatus:function(){var W=[f,d,e,j];
return W[Math.floor(Math.random()*W.length)];
}}});
})();

});