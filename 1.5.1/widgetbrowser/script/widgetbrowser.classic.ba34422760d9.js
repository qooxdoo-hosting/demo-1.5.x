qx.$$packageData['256']={"locales":{},"resources":{"qx/icon/Oxygen/16/apps/utilities-calculator.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/utilities-notes.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/utilities-terminal.png":[16,16,"png","qx"]},"translations":{}};
qx.Part.$$notifyLoad("256", function() {
(function(){var n="icon/16/apps/utilities-calculator.png",m="Layout-Settings…",l="Notes",k="icon/16/apps/utilities-notes.png",j="Layout",i="bottom",h="icon/16/apps/utilities-terminal.png",g="Notes…",f="top",e="left",b="Calculator",d="right",c="widgetbrowser.pages.Tab",a="Calculator…";
qx.Class.define(c,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.__kR=new qx.ui.container.Composite(new qx.ui.layout.Grid(10,20));
this.add(this.__kR);
this.initWidgets();
},members:{__kR:null,initWidgets:function(){var o=this._widgets;
var q=this.__uv();
q.setBarPosition(f);
this.__kR.add(q,{row:0,column:0});
o.push(q);
var p=this.__uv();
p.setBarPosition(i);
this.__kR.add(p,{row:0,column:1});
o.push(p);
var r=this.__uv();
r.setBarPosition(e);
this.__kR.add(r,{row:1,column:0});
o.push(r);
var s=this.__uv();
s.setBarPosition(d);
this.__kR.add(s,{row:1,column:1});
o.push(s);
},__uv:function(){var t=new qx.ui.tabview.TabView();
t.setWidth(400);
var w=new qx.ui.tabview.Page(j,h);
w.setLayout(new qx.ui.layout.VBox());
w.add(new qx.ui.basic.Label(m));
t.add(w);
var u=new qx.ui.tabview.Page(l,k);
u.setLayout(new qx.ui.layout.VBox());
u.add(new qx.ui.basic.Label(g));
t.add(u);
var v=new qx.ui.tabview.Page(b,n);
v.setLayout(new qx.ui.layout.VBox());
v.add(new qx.ui.basic.Label(a));
t.add(v);
return t;
}}});
})();

});