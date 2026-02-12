goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12759 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12759(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12776 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12776(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11711 = coll;
var G__11712 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11711,G__11712) : shadow.dom.lazy_native_coll_seq.call(null, G__11711,G__11712));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11737 = arguments.length;
switch (G__11737) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11741 = arguments.length;
switch (G__11741) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11745 = arguments.length;
switch (G__11745) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11758 = arguments.length;
switch (G__11758) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11778 = arguments.length;
switch (G__11778) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11875 = arguments.length;
switch (G__11875) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e11895){if((e11895 instanceof Object)){
var e = e11895;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11895;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11899 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11901 = null;
var count__11902 = (0);
var i__11903 = (0);
while(true){
if((i__11903 < count__11902)){
var el = chunk__11901.cljs$core$IIndexed$_nth$arity$2(null, i__11903);
var handler_12994__$1 = ((function (seq__11899,chunk__11901,count__11902,i__11903,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11899,chunk__11901,count__11902,i__11903,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12994__$1);


var G__13002 = seq__11899;
var G__13003 = chunk__11901;
var G__13004 = count__11902;
var G__13005 = (i__11903 + (1));
seq__11899 = G__13002;
chunk__11901 = G__13003;
count__11902 = G__13004;
i__11903 = G__13005;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11899);
if(temp__5804__auto__){
var seq__11899__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11899__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11899__$1);
var G__13009 = cljs.core.chunk_rest(seq__11899__$1);
var G__13010 = c__5525__auto__;
var G__13011 = cljs.core.count(c__5525__auto__);
var G__13012 = (0);
seq__11899 = G__13009;
chunk__11901 = G__13010;
count__11902 = G__13011;
i__11903 = G__13012;
continue;
} else {
var el = cljs.core.first(seq__11899__$1);
var handler_13014__$1 = ((function (seq__11899,chunk__11901,count__11902,i__11903,el,seq__11899__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11899,chunk__11901,count__11902,i__11903,el,seq__11899__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13014__$1);


var G__13017 = cljs.core.next(seq__11899__$1);
var G__13018 = null;
var G__13019 = (0);
var G__13020 = (0);
seq__11899 = G__13017;
chunk__11901 = G__13018;
count__11902 = G__13019;
i__11903 = G__13020;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11947 = arguments.length;
switch (G__11947) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11970 = cljs.core.seq(events);
var chunk__11971 = null;
var count__11972 = (0);
var i__11973 = (0);
while(true){
if((i__11973 < count__11972)){
var vec__12002 = chunk__11971.cljs$core$IIndexed$_nth$arity$2(null, i__11973);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12002,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13070 = seq__11970;
var G__13071 = chunk__11971;
var G__13072 = count__11972;
var G__13073 = (i__11973 + (1));
seq__11970 = G__13070;
chunk__11971 = G__13071;
count__11972 = G__13072;
i__11973 = G__13073;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11970);
if(temp__5804__auto__){
var seq__11970__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11970__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11970__$1);
var G__13076 = cljs.core.chunk_rest(seq__11970__$1);
var G__13077 = c__5525__auto__;
var G__13078 = cljs.core.count(c__5525__auto__);
var G__13079 = (0);
seq__11970 = G__13076;
chunk__11971 = G__13077;
count__11972 = G__13078;
i__11973 = G__13079;
continue;
} else {
var vec__12019 = cljs.core.first(seq__11970__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12019,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12019,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13108 = cljs.core.next(seq__11970__$1);
var G__13109 = null;
var G__13110 = (0);
var G__13111 = (0);
seq__11970 = G__13108;
chunk__11971 = G__13109;
count__11972 = G__13110;
i__11973 = G__13111;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__12032 = cljs.core.seq(styles);
var chunk__12033 = null;
var count__12034 = (0);
var i__12035 = (0);
while(true){
if((i__12035 < count__12034)){
var vec__12063 = chunk__12033.cljs$core$IIndexed$_nth$arity$2(null, i__12035);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12063,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12063,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13129 = seq__12032;
var G__13130 = chunk__12033;
var G__13131 = count__12034;
var G__13132 = (i__12035 + (1));
seq__12032 = G__13129;
chunk__12033 = G__13130;
count__12034 = G__13131;
i__12035 = G__13132;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12032);
if(temp__5804__auto__){
var seq__12032__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12032__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12032__$1);
var G__13148 = cljs.core.chunk_rest(seq__12032__$1);
var G__13149 = c__5525__auto__;
var G__13150 = cljs.core.count(c__5525__auto__);
var G__13151 = (0);
seq__12032 = G__13148;
chunk__12033 = G__13149;
count__12034 = G__13150;
i__12035 = G__13151;
continue;
} else {
var vec__12072 = cljs.core.first(seq__12032__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12072,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12072,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13153 = cljs.core.next(seq__12032__$1);
var G__13154 = null;
var G__13155 = (0);
var G__13156 = (0);
seq__12032 = G__13153;
chunk__12033 = G__13154;
count__12034 = G__13155;
i__12035 = G__13156;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__12090_13159 = key;
var G__12090_13160__$1 = (((G__12090_13159 instanceof cljs.core.Keyword))?G__12090_13159.fqn:null);
switch (G__12090_13160__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_13176 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_13176,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_13176,"aria-");
}
})())){
el.setAttribute(ks_13176,value);
} else {
(el[ks_13176] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12145){
var map__12147 = p__12145;
var map__12147__$1 = cljs.core.__destructure_map(map__12147);
var props = map__12147__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12147__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12149 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12149,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12149,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12149,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12154 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12154,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12154;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12157 = arguments.length;
switch (G__12157) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12174){
var vec__12175 = p__12174;
var seq__12176 = cljs.core.seq(vec__12175);
var first__12177 = cljs.core.first(seq__12176);
var seq__12176__$1 = cljs.core.next(seq__12176);
var nn = first__12177;
var first__12177__$1 = cljs.core.first(seq__12176__$1);
var seq__12176__$2 = cljs.core.next(seq__12176__$1);
var np = first__12177__$1;
var nc = seq__12176__$2;
var node = vec__12175;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12183 = nn;
var G__12184 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12183,G__12184) : create_fn.call(null, G__12183,G__12184));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12187 = nn;
var G__12188 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12187,G__12188) : create_fn.call(null, G__12187,G__12188));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12190 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12190,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12190,(1),null);
var seq__12193_13351 = cljs.core.seq(node_children);
var chunk__12194_13352 = null;
var count__12195_13353 = (0);
var i__12196_13354 = (0);
while(true){
if((i__12196_13354 < count__12195_13353)){
var child_struct_13359 = chunk__12194_13352.cljs$core$IIndexed$_nth$arity$2(null, i__12196_13354);
var children_13361 = shadow.dom.dom_node(child_struct_13359);
if(cljs.core.seq_QMARK_(children_13361)){
var seq__12227_13380 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13361));
var chunk__12229_13383 = null;
var count__12230_13385 = (0);
var i__12231_13388 = (0);
while(true){
if((i__12231_13388 < count__12230_13385)){
var child_13395 = chunk__12229_13383.cljs$core$IIndexed$_nth$arity$2(null, i__12231_13388);
if(cljs.core.truth_(child_13395)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13395);


var G__13399 = seq__12227_13380;
var G__13400 = chunk__12229_13383;
var G__13401 = count__12230_13385;
var G__13402 = (i__12231_13388 + (1));
seq__12227_13380 = G__13399;
chunk__12229_13383 = G__13400;
count__12230_13385 = G__13401;
i__12231_13388 = G__13402;
continue;
} else {
var G__13404 = seq__12227_13380;
var G__13405 = chunk__12229_13383;
var G__13406 = count__12230_13385;
var G__13407 = (i__12231_13388 + (1));
seq__12227_13380 = G__13404;
chunk__12229_13383 = G__13405;
count__12230_13385 = G__13406;
i__12231_13388 = G__13407;
continue;
}
} else {
var temp__5804__auto___13409 = cljs.core.seq(seq__12227_13380);
if(temp__5804__auto___13409){
var seq__12227_13410__$1 = temp__5804__auto___13409;
if(cljs.core.chunked_seq_QMARK_(seq__12227_13410__$1)){
var c__5525__auto___13411 = cljs.core.chunk_first(seq__12227_13410__$1);
var G__13412 = cljs.core.chunk_rest(seq__12227_13410__$1);
var G__13413 = c__5525__auto___13411;
var G__13414 = cljs.core.count(c__5525__auto___13411);
var G__13415 = (0);
seq__12227_13380 = G__13412;
chunk__12229_13383 = G__13413;
count__12230_13385 = G__13414;
i__12231_13388 = G__13415;
continue;
} else {
var child_13416 = cljs.core.first(seq__12227_13410__$1);
if(cljs.core.truth_(child_13416)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13416);


var G__13419 = cljs.core.next(seq__12227_13410__$1);
var G__13420 = null;
var G__13421 = (0);
var G__13422 = (0);
seq__12227_13380 = G__13419;
chunk__12229_13383 = G__13420;
count__12230_13385 = G__13421;
i__12231_13388 = G__13422;
continue;
} else {
var G__13423 = cljs.core.next(seq__12227_13410__$1);
var G__13424 = null;
var G__13425 = (0);
var G__13426 = (0);
seq__12227_13380 = G__13423;
chunk__12229_13383 = G__13424;
count__12230_13385 = G__13425;
i__12231_13388 = G__13426;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13361);
}


var G__13428 = seq__12193_13351;
var G__13429 = chunk__12194_13352;
var G__13430 = count__12195_13353;
var G__13431 = (i__12196_13354 + (1));
seq__12193_13351 = G__13428;
chunk__12194_13352 = G__13429;
count__12195_13353 = G__13430;
i__12196_13354 = G__13431;
continue;
} else {
var temp__5804__auto___13433 = cljs.core.seq(seq__12193_13351);
if(temp__5804__auto___13433){
var seq__12193_13434__$1 = temp__5804__auto___13433;
if(cljs.core.chunked_seq_QMARK_(seq__12193_13434__$1)){
var c__5525__auto___13436 = cljs.core.chunk_first(seq__12193_13434__$1);
var G__13439 = cljs.core.chunk_rest(seq__12193_13434__$1);
var G__13440 = c__5525__auto___13436;
var G__13441 = cljs.core.count(c__5525__auto___13436);
var G__13443 = (0);
seq__12193_13351 = G__13439;
chunk__12194_13352 = G__13440;
count__12195_13353 = G__13441;
i__12196_13354 = G__13443;
continue;
} else {
var child_struct_13466 = cljs.core.first(seq__12193_13434__$1);
var children_13467 = shadow.dom.dom_node(child_struct_13466);
if(cljs.core.seq_QMARK_(children_13467)){
var seq__12239_13469 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13467));
var chunk__12241_13470 = null;
var count__12242_13471 = (0);
var i__12243_13472 = (0);
while(true){
if((i__12243_13472 < count__12242_13471)){
var child_13475 = chunk__12241_13470.cljs$core$IIndexed$_nth$arity$2(null, i__12243_13472);
if(cljs.core.truth_(child_13475)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13475);


var G__13478 = seq__12239_13469;
var G__13479 = chunk__12241_13470;
var G__13480 = count__12242_13471;
var G__13481 = (i__12243_13472 + (1));
seq__12239_13469 = G__13478;
chunk__12241_13470 = G__13479;
count__12242_13471 = G__13480;
i__12243_13472 = G__13481;
continue;
} else {
var G__13489 = seq__12239_13469;
var G__13490 = chunk__12241_13470;
var G__13491 = count__12242_13471;
var G__13492 = (i__12243_13472 + (1));
seq__12239_13469 = G__13489;
chunk__12241_13470 = G__13490;
count__12242_13471 = G__13491;
i__12243_13472 = G__13492;
continue;
}
} else {
var temp__5804__auto___13523__$1 = cljs.core.seq(seq__12239_13469);
if(temp__5804__auto___13523__$1){
var seq__12239_13533__$1 = temp__5804__auto___13523__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12239_13533__$1)){
var c__5525__auto___13536 = cljs.core.chunk_first(seq__12239_13533__$1);
var G__13541 = cljs.core.chunk_rest(seq__12239_13533__$1);
var G__13542 = c__5525__auto___13536;
var G__13543 = cljs.core.count(c__5525__auto___13536);
var G__13544 = (0);
seq__12239_13469 = G__13541;
chunk__12241_13470 = G__13542;
count__12242_13471 = G__13543;
i__12243_13472 = G__13544;
continue;
} else {
var child_13551 = cljs.core.first(seq__12239_13533__$1);
if(cljs.core.truth_(child_13551)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13551);


var G__13554 = cljs.core.next(seq__12239_13533__$1);
var G__13555 = null;
var G__13556 = (0);
var G__13557 = (0);
seq__12239_13469 = G__13554;
chunk__12241_13470 = G__13555;
count__12242_13471 = G__13556;
i__12243_13472 = G__13557;
continue;
} else {
var G__13560 = cljs.core.next(seq__12239_13533__$1);
var G__13561 = null;
var G__13562 = (0);
var G__13563 = (0);
seq__12239_13469 = G__13560;
chunk__12241_13470 = G__13561;
count__12242_13471 = G__13562;
i__12243_13472 = G__13563;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13467);
}


var G__13574 = cljs.core.next(seq__12193_13434__$1);
var G__13575 = null;
var G__13576 = (0);
var G__13578 = (0);
seq__12193_13351 = G__13574;
chunk__12194_13352 = G__13575;
count__12195_13353 = G__13576;
i__12196_13354 = G__13578;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12264 = cljs.core.seq(node);
var chunk__12265 = null;
var count__12266 = (0);
var i__12267 = (0);
while(true){
if((i__12267 < count__12266)){
var n = chunk__12265.cljs$core$IIndexed$_nth$arity$2(null, i__12267);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__13628 = seq__12264;
var G__13629 = chunk__12265;
var G__13630 = count__12266;
var G__13631 = (i__12267 + (1));
seq__12264 = G__13628;
chunk__12265 = G__13629;
count__12266 = G__13630;
i__12267 = G__13631;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12264);
if(temp__5804__auto__){
var seq__12264__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12264__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12264__$1);
var G__13638 = cljs.core.chunk_rest(seq__12264__$1);
var G__13639 = c__5525__auto__;
var G__13640 = cljs.core.count(c__5525__auto__);
var G__13641 = (0);
seq__12264 = G__13638;
chunk__12265 = G__13639;
count__12266 = G__13640;
i__12267 = G__13641;
continue;
} else {
var n = cljs.core.first(seq__12264__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__13645 = cljs.core.next(seq__12264__$1);
var G__13646 = null;
var G__13647 = (0);
var G__13648 = (0);
seq__12264 = G__13645;
chunk__12265 = G__13646;
count__12266 = G__13647;
i__12267 = G__13648;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12291 = arguments.length;
switch (G__12291) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12297 = arguments.length;
switch (G__12297) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12307 = arguments.length;
switch (G__12307) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13736 = arguments.length;
var i__5727__auto___13737 = (0);
while(true){
if((i__5727__auto___13737 < len__5726__auto___13736)){
args__5732__auto__.push((arguments[i__5727__auto___13737]));

var G__13739 = (i__5727__auto___13737 + (1));
i__5727__auto___13737 = G__13739;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12329_13742 = cljs.core.seq(nodes);
var chunk__12330_13743 = null;
var count__12331_13744 = (0);
var i__12332_13745 = (0);
while(true){
if((i__12332_13745 < count__12331_13744)){
var node_13746 = chunk__12330_13743.cljs$core$IIndexed$_nth$arity$2(null, i__12332_13745);
fragment.appendChild(shadow.dom._to_dom(node_13746));


var G__13749 = seq__12329_13742;
var G__13750 = chunk__12330_13743;
var G__13751 = count__12331_13744;
var G__13752 = (i__12332_13745 + (1));
seq__12329_13742 = G__13749;
chunk__12330_13743 = G__13750;
count__12331_13744 = G__13751;
i__12332_13745 = G__13752;
continue;
} else {
var temp__5804__auto___13753 = cljs.core.seq(seq__12329_13742);
if(temp__5804__auto___13753){
var seq__12329_13755__$1 = temp__5804__auto___13753;
if(cljs.core.chunked_seq_QMARK_(seq__12329_13755__$1)){
var c__5525__auto___13756 = cljs.core.chunk_first(seq__12329_13755__$1);
var G__13758 = cljs.core.chunk_rest(seq__12329_13755__$1);
var G__13759 = c__5525__auto___13756;
var G__13760 = cljs.core.count(c__5525__auto___13756);
var G__13761 = (0);
seq__12329_13742 = G__13758;
chunk__12330_13743 = G__13759;
count__12331_13744 = G__13760;
i__12332_13745 = G__13761;
continue;
} else {
var node_13762 = cljs.core.first(seq__12329_13755__$1);
fragment.appendChild(shadow.dom._to_dom(node_13762));


var G__13763 = cljs.core.next(seq__12329_13755__$1);
var G__13764 = null;
var G__13765 = (0);
var G__13766 = (0);
seq__12329_13742 = G__13763;
chunk__12330_13743 = G__13764;
count__12331_13744 = G__13765;
i__12332_13745 = G__13766;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12327){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12327));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12351_13769 = cljs.core.seq(scripts);
var chunk__12352_13770 = null;
var count__12353_13771 = (0);
var i__12354_13772 = (0);
while(true){
if((i__12354_13772 < count__12353_13771)){
var vec__12372_13774 = chunk__12352_13770.cljs$core$IIndexed$_nth$arity$2(null, i__12354_13772);
var script_tag_13775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12372_13774,(0),null);
var script_body_13776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12372_13774,(1),null);
eval(script_body_13776);


var G__13780 = seq__12351_13769;
var G__13781 = chunk__12352_13770;
var G__13782 = count__12353_13771;
var G__13783 = (i__12354_13772 + (1));
seq__12351_13769 = G__13780;
chunk__12352_13770 = G__13781;
count__12353_13771 = G__13782;
i__12354_13772 = G__13783;
continue;
} else {
var temp__5804__auto___13785 = cljs.core.seq(seq__12351_13769);
if(temp__5804__auto___13785){
var seq__12351_13786__$1 = temp__5804__auto___13785;
if(cljs.core.chunked_seq_QMARK_(seq__12351_13786__$1)){
var c__5525__auto___13787 = cljs.core.chunk_first(seq__12351_13786__$1);
var G__13788 = cljs.core.chunk_rest(seq__12351_13786__$1);
var G__13789 = c__5525__auto___13787;
var G__13790 = cljs.core.count(c__5525__auto___13787);
var G__13791 = (0);
seq__12351_13769 = G__13788;
chunk__12352_13770 = G__13789;
count__12353_13771 = G__13790;
i__12354_13772 = G__13791;
continue;
} else {
var vec__12377_13793 = cljs.core.first(seq__12351_13786__$1);
var script_tag_13794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12377_13793,(0),null);
var script_body_13795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12377_13793,(1),null);
eval(script_body_13795);


var G__13796 = cljs.core.next(seq__12351_13786__$1);
var G__13797 = null;
var G__13798 = (0);
var G__13799 = (0);
seq__12351_13769 = G__13796;
chunk__12352_13770 = G__13797;
count__12353_13771 = G__13798;
i__12354_13772 = G__13799;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12380){
var vec__12382 = p__12380;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12382,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12382,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12389 = arguments.length;
switch (G__12389) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12406 = cljs.core.seq(style_keys);
var chunk__12407 = null;
var count__12408 = (0);
var i__12409 = (0);
while(true){
if((i__12409 < count__12408)){
var it = chunk__12407.cljs$core$IIndexed$_nth$arity$2(null, i__12409);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13821 = seq__12406;
var G__13822 = chunk__12407;
var G__13823 = count__12408;
var G__13824 = (i__12409 + (1));
seq__12406 = G__13821;
chunk__12407 = G__13822;
count__12408 = G__13823;
i__12409 = G__13824;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12406);
if(temp__5804__auto__){
var seq__12406__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12406__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12406__$1);
var G__13825 = cljs.core.chunk_rest(seq__12406__$1);
var G__13826 = c__5525__auto__;
var G__13827 = cljs.core.count(c__5525__auto__);
var G__13828 = (0);
seq__12406 = G__13825;
chunk__12407 = G__13826;
count__12408 = G__13827;
i__12409 = G__13828;
continue;
} else {
var it = cljs.core.first(seq__12406__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13832 = cljs.core.next(seq__12406__$1);
var G__13833 = null;
var G__13834 = (0);
var G__13835 = (0);
seq__12406 = G__13832;
chunk__12407 = G__13833;
count__12408 = G__13834;
i__12409 = G__13835;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12427,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12437 = k12427;
var G__12437__$1 = (((G__12437 instanceof cljs.core.Keyword))?G__12437.fqn:null);
switch (G__12437__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12427,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12438){
var vec__12439 = p__12438;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12439,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12439,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12426){
var self__ = this;
var G__12426__$1 = this;
return (new cljs.core.RecordIter((0),G__12426__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12428,other12429){
var self__ = this;
var this12428__$1 = this;
return (((!((other12429 == null)))) && ((((this12428__$1.constructor === other12429.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12428__$1.x,other12429.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12428__$1.y,other12429.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12428__$1.__extmap,other12429.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12427){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12460 = k12427;
var G__12460__$1 = (((G__12460 instanceof cljs.core.Keyword))?G__12460.fqn:null);
switch (G__12460__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12427);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12426){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12464 = cljs.core.keyword_identical_QMARK_;
var expr__12465 = k__5309__auto__;
if(cljs.core.truth_((pred__12464.cljs$core$IFn$_invoke$arity$2 ? pred__12464.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12465) : pred__12464.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12465)))){
return (new shadow.dom.Coordinate(G__12426,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12464.cljs$core$IFn$_invoke$arity$2 ? pred__12464.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12465) : pred__12464.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12465)))){
return (new shadow.dom.Coordinate(self__.x,G__12426,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12426),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12426){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12426,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12434){
var extmap__5342__auto__ = (function (){var G__12472 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12434,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12434)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12472);
} else {
return G__12472;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12434),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12434),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12479,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12488 = k12479;
var G__12488__$1 = (((G__12488 instanceof cljs.core.Keyword))?G__12488.fqn:null);
switch (G__12488__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12479,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12490){
var vec__12491 = p__12490;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12491,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12491,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12478){
var self__ = this;
var G__12478__$1 = this;
return (new cljs.core.RecordIter((0),G__12478__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12480,other12481){
var self__ = this;
var this12480__$1 = this;
return (((!((other12481 == null)))) && ((((this12480__$1.constructor === other12481.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12480__$1.w,other12481.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12480__$1.h,other12481.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12480__$1.__extmap,other12481.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12479){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12510 = k12479;
var G__12510__$1 = (((G__12510 instanceof cljs.core.Keyword))?G__12510.fqn:null);
switch (G__12510__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12479);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12478){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12511 = cljs.core.keyword_identical_QMARK_;
var expr__12512 = k__5309__auto__;
if(cljs.core.truth_((pred__12511.cljs$core$IFn$_invoke$arity$2 ? pred__12511.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12512) : pred__12511.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12512)))){
return (new shadow.dom.Size(G__12478,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12511.cljs$core$IFn$_invoke$arity$2 ? pred__12511.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12512) : pred__12511.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12512)))){
return (new shadow.dom.Size(self__.w,G__12478,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12478),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12478){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12478,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12484){
var extmap__5342__auto__ = (function (){var G__12523 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12484,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12484)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12523);
} else {
return G__12523;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12484),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12484),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__13923 = (i + (1));
var G__13924 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13923;
ret = G__13924;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12548){
var vec__12549 = p__12548;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12549,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12557 = arguments.length;
switch (G__12557) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13926 = ps;
var G__13927 = (i + (1));
el__$1 = G__13926;
i = G__13927;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12600 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12600,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12600,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12600,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12609_13941 = cljs.core.seq(props);
var chunk__12610_13942 = null;
var count__12611_13943 = (0);
var i__12612_13944 = (0);
while(true){
if((i__12612_13944 < count__12611_13943)){
var vec__12625_13946 = chunk__12610_13942.cljs$core$IIndexed$_nth$arity$2(null, i__12612_13944);
var k_13948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12625_13946,(0),null);
var v_13949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12625_13946,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13948);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13948),v_13949);


var G__13956 = seq__12609_13941;
var G__13957 = chunk__12610_13942;
var G__13958 = count__12611_13943;
var G__13959 = (i__12612_13944 + (1));
seq__12609_13941 = G__13956;
chunk__12610_13942 = G__13957;
count__12611_13943 = G__13958;
i__12612_13944 = G__13959;
continue;
} else {
var temp__5804__auto___13961 = cljs.core.seq(seq__12609_13941);
if(temp__5804__auto___13961){
var seq__12609_13962__$1 = temp__5804__auto___13961;
if(cljs.core.chunked_seq_QMARK_(seq__12609_13962__$1)){
var c__5525__auto___13963 = cljs.core.chunk_first(seq__12609_13962__$1);
var G__13964 = cljs.core.chunk_rest(seq__12609_13962__$1);
var G__13965 = c__5525__auto___13963;
var G__13966 = cljs.core.count(c__5525__auto___13963);
var G__13967 = (0);
seq__12609_13941 = G__13964;
chunk__12610_13942 = G__13965;
count__12611_13943 = G__13966;
i__12612_13944 = G__13967;
continue;
} else {
var vec__12631_13968 = cljs.core.first(seq__12609_13962__$1);
var k_13969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12631_13968,(0),null);
var v_13970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12631_13968,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13969);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13969),v_13970);


var G__13973 = cljs.core.next(seq__12609_13962__$1);
var G__13974 = null;
var G__13975 = (0);
var G__13976 = (0);
seq__12609_13941 = G__13973;
chunk__12610_13942 = G__13974;
count__12611_13943 = G__13975;
i__12612_13944 = G__13976;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12640 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12640,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12640,(1),null);
var seq__12643_13980 = cljs.core.seq(node_children);
var chunk__12645_13981 = null;
var count__12646_13982 = (0);
var i__12647_13983 = (0);
while(true){
if((i__12647_13983 < count__12646_13982)){
var child_struct_13985 = chunk__12645_13981.cljs$core$IIndexed$_nth$arity$2(null, i__12647_13983);
if((!((child_struct_13985 == null)))){
if(typeof child_struct_13985 === 'string'){
var text_13986 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13986),child_struct_13985].join(''));
} else {
var children_13987 = shadow.dom.svg_node(child_struct_13985);
if(cljs.core.seq_QMARK_(children_13987)){
var seq__12696_13988 = cljs.core.seq(children_13987);
var chunk__12698_13989 = null;
var count__12699_13990 = (0);
var i__12700_13991 = (0);
while(true){
if((i__12700_13991 < count__12699_13990)){
var child_13995 = chunk__12698_13989.cljs$core$IIndexed$_nth$arity$2(null, i__12700_13991);
if(cljs.core.truth_(child_13995)){
node.appendChild(child_13995);


var G__13996 = seq__12696_13988;
var G__13997 = chunk__12698_13989;
var G__13998 = count__12699_13990;
var G__13999 = (i__12700_13991 + (1));
seq__12696_13988 = G__13996;
chunk__12698_13989 = G__13997;
count__12699_13990 = G__13998;
i__12700_13991 = G__13999;
continue;
} else {
var G__14000 = seq__12696_13988;
var G__14001 = chunk__12698_13989;
var G__14002 = count__12699_13990;
var G__14003 = (i__12700_13991 + (1));
seq__12696_13988 = G__14000;
chunk__12698_13989 = G__14001;
count__12699_13990 = G__14002;
i__12700_13991 = G__14003;
continue;
}
} else {
var temp__5804__auto___14004 = cljs.core.seq(seq__12696_13988);
if(temp__5804__auto___14004){
var seq__12696_14005__$1 = temp__5804__auto___14004;
if(cljs.core.chunked_seq_QMARK_(seq__12696_14005__$1)){
var c__5525__auto___14006 = cljs.core.chunk_first(seq__12696_14005__$1);
var G__14008 = cljs.core.chunk_rest(seq__12696_14005__$1);
var G__14009 = c__5525__auto___14006;
var G__14010 = cljs.core.count(c__5525__auto___14006);
var G__14011 = (0);
seq__12696_13988 = G__14008;
chunk__12698_13989 = G__14009;
count__12699_13990 = G__14010;
i__12700_13991 = G__14011;
continue;
} else {
var child_14012 = cljs.core.first(seq__12696_14005__$1);
if(cljs.core.truth_(child_14012)){
node.appendChild(child_14012);


var G__14013 = cljs.core.next(seq__12696_14005__$1);
var G__14014 = null;
var G__14015 = (0);
var G__14016 = (0);
seq__12696_13988 = G__14013;
chunk__12698_13989 = G__14014;
count__12699_13990 = G__14015;
i__12700_13991 = G__14016;
continue;
} else {
var G__14017 = cljs.core.next(seq__12696_14005__$1);
var G__14018 = null;
var G__14019 = (0);
var G__14020 = (0);
seq__12696_13988 = G__14017;
chunk__12698_13989 = G__14018;
count__12699_13990 = G__14019;
i__12700_13991 = G__14020;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13987);
}
}


var G__14021 = seq__12643_13980;
var G__14022 = chunk__12645_13981;
var G__14023 = count__12646_13982;
var G__14024 = (i__12647_13983 + (1));
seq__12643_13980 = G__14021;
chunk__12645_13981 = G__14022;
count__12646_13982 = G__14023;
i__12647_13983 = G__14024;
continue;
} else {
var G__14025 = seq__12643_13980;
var G__14026 = chunk__12645_13981;
var G__14027 = count__12646_13982;
var G__14028 = (i__12647_13983 + (1));
seq__12643_13980 = G__14025;
chunk__12645_13981 = G__14026;
count__12646_13982 = G__14027;
i__12647_13983 = G__14028;
continue;
}
} else {
var temp__5804__auto___14029 = cljs.core.seq(seq__12643_13980);
if(temp__5804__auto___14029){
var seq__12643_14030__$1 = temp__5804__auto___14029;
if(cljs.core.chunked_seq_QMARK_(seq__12643_14030__$1)){
var c__5525__auto___14031 = cljs.core.chunk_first(seq__12643_14030__$1);
var G__14032 = cljs.core.chunk_rest(seq__12643_14030__$1);
var G__14033 = c__5525__auto___14031;
var G__14034 = cljs.core.count(c__5525__auto___14031);
var G__14035 = (0);
seq__12643_13980 = G__14032;
chunk__12645_13981 = G__14033;
count__12646_13982 = G__14034;
i__12647_13983 = G__14035;
continue;
} else {
var child_struct_14036 = cljs.core.first(seq__12643_14030__$1);
if((!((child_struct_14036 == null)))){
if(typeof child_struct_14036 === 'string'){
var text_14042 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14042),child_struct_14036].join(''));
} else {
var children_14043 = shadow.dom.svg_node(child_struct_14036);
if(cljs.core.seq_QMARK_(children_14043)){
var seq__12716_14044 = cljs.core.seq(children_14043);
var chunk__12719_14045 = null;
var count__12720_14046 = (0);
var i__12721_14047 = (0);
while(true){
if((i__12721_14047 < count__12720_14046)){
var child_14049 = chunk__12719_14045.cljs$core$IIndexed$_nth$arity$2(null, i__12721_14047);
if(cljs.core.truth_(child_14049)){
node.appendChild(child_14049);


var G__14050 = seq__12716_14044;
var G__14051 = chunk__12719_14045;
var G__14052 = count__12720_14046;
var G__14053 = (i__12721_14047 + (1));
seq__12716_14044 = G__14050;
chunk__12719_14045 = G__14051;
count__12720_14046 = G__14052;
i__12721_14047 = G__14053;
continue;
} else {
var G__14054 = seq__12716_14044;
var G__14055 = chunk__12719_14045;
var G__14056 = count__12720_14046;
var G__14057 = (i__12721_14047 + (1));
seq__12716_14044 = G__14054;
chunk__12719_14045 = G__14055;
count__12720_14046 = G__14056;
i__12721_14047 = G__14057;
continue;
}
} else {
var temp__5804__auto___14058__$1 = cljs.core.seq(seq__12716_14044);
if(temp__5804__auto___14058__$1){
var seq__12716_14059__$1 = temp__5804__auto___14058__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12716_14059__$1)){
var c__5525__auto___14060 = cljs.core.chunk_first(seq__12716_14059__$1);
var G__14061 = cljs.core.chunk_rest(seq__12716_14059__$1);
var G__14062 = c__5525__auto___14060;
var G__14063 = cljs.core.count(c__5525__auto___14060);
var G__14064 = (0);
seq__12716_14044 = G__14061;
chunk__12719_14045 = G__14062;
count__12720_14046 = G__14063;
i__12721_14047 = G__14064;
continue;
} else {
var child_14065 = cljs.core.first(seq__12716_14059__$1);
if(cljs.core.truth_(child_14065)){
node.appendChild(child_14065);


var G__14066 = cljs.core.next(seq__12716_14059__$1);
var G__14067 = null;
var G__14068 = (0);
var G__14069 = (0);
seq__12716_14044 = G__14066;
chunk__12719_14045 = G__14067;
count__12720_14046 = G__14068;
i__12721_14047 = G__14069;
continue;
} else {
var G__14070 = cljs.core.next(seq__12716_14059__$1);
var G__14071 = null;
var G__14072 = (0);
var G__14073 = (0);
seq__12716_14044 = G__14070;
chunk__12719_14045 = G__14071;
count__12720_14046 = G__14072;
i__12721_14047 = G__14073;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14043);
}
}


var G__14075 = cljs.core.next(seq__12643_14030__$1);
var G__14076 = null;
var G__14077 = (0);
var G__14078 = (0);
seq__12643_13980 = G__14075;
chunk__12645_13981 = G__14076;
count__12646_13982 = G__14077;
i__12647_13983 = G__14078;
continue;
} else {
var G__14079 = cljs.core.next(seq__12643_14030__$1);
var G__14080 = null;
var G__14081 = (0);
var G__14082 = (0);
seq__12643_13980 = G__14079;
chunk__12645_13981 = G__14080;
count__12646_13982 = G__14081;
i__12647_13983 = G__14082;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14091 = arguments.length;
var i__5727__auto___14092 = (0);
while(true){
if((i__5727__auto___14092 < len__5726__auto___14091)){
args__5732__auto__.push((arguments[i__5727__auto___14092]));

var G__14094 = (i__5727__auto___14092 + (1));
i__5727__auto___14092 = G__14094;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12736){
var G__12737 = cljs.core.first(seq12736);
var seq12736__$1 = cljs.core.next(seq12736);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12737,seq12736__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
