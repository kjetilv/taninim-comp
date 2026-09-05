goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_14772 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_14772(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_14775 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_14775(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13483 = coll;
var G__13484 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13483,G__13484) : shadow.dom.lazy_native_coll_seq.call(null,G__13483,G__13484));
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
var or__5162__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"shadow.dom/NativeColl");
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
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13531 = arguments.length;
switch (G__13531) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__13536 = arguments.length;
switch (G__13536) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__13542 = arguments.length;
switch (G__13542) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__13546 = arguments.length;
switch (G__13546) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__13553 = arguments.length;
switch (G__13553) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__13568 = arguments.length;
switch (G__13568) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e13593){if((e13593 instanceof Object)){
var e = e13593;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13593;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13596 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13597 = null;
var count__13598 = (0);
var i__13599 = (0);
while(true){
if((i__13599 < count__13598)){
var el = chunk__13597.cljs$core$IIndexed$_nth$arity$2(null,i__13599);
var handler_14807__$1 = ((function (seq__13596,chunk__13597,count__13598,i__13599,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13596,chunk__13597,count__13598,i__13599,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_14807__$1);


var G__14808 = seq__13596;
var G__14809 = chunk__13597;
var G__14810 = count__13598;
var G__14811 = (i__13599 + (1));
seq__13596 = G__14808;
chunk__13597 = G__14809;
count__13598 = G__14810;
i__13599 = G__14811;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__13596);
if(temp__5825__auto__){
var seq__13596__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13596__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__13596__$1);
var G__14815 = cljs.core.chunk_rest(seq__13596__$1);
var G__14816 = c__5694__auto__;
var G__14817 = cljs.core.count(c__5694__auto__);
var G__14818 = (0);
seq__13596 = G__14815;
chunk__13597 = G__14816;
count__13598 = G__14817;
i__13599 = G__14818;
continue;
} else {
var el = cljs.core.first(seq__13596__$1);
var handler_14820__$1 = ((function (seq__13596,chunk__13597,count__13598,i__13599,el,seq__13596__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13596,chunk__13597,count__13598,i__13599,el,seq__13596__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_14820__$1);


var G__14821 = cljs.core.next(seq__13596__$1);
var G__14822 = null;
var G__14823 = (0);
var G__14824 = (0);
seq__13596 = G__14821;
chunk__13597 = G__14822;
count__13598 = G__14823;
i__13599 = G__14824;
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
var G__13632 = arguments.length;
switch (G__13632) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__13650 = cljs.core.seq(events);
var chunk__13651 = null;
var count__13652 = (0);
var i__13653 = (0);
while(true){
if((i__13653 < count__13652)){
var vec__13686 = chunk__13651.cljs$core$IIndexed$_nth$arity$2(null,i__13653);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13686,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13686,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__14836 = seq__13650;
var G__14837 = chunk__13651;
var G__14838 = count__13652;
var G__14839 = (i__13653 + (1));
seq__13650 = G__14836;
chunk__13651 = G__14837;
count__13652 = G__14838;
i__13653 = G__14839;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__13650);
if(temp__5825__auto__){
var seq__13650__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13650__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__13650__$1);
var G__14841 = cljs.core.chunk_rest(seq__13650__$1);
var G__14842 = c__5694__auto__;
var G__14843 = cljs.core.count(c__5694__auto__);
var G__14844 = (0);
seq__13650 = G__14841;
chunk__13651 = G__14842;
count__13652 = G__14843;
i__13653 = G__14844;
continue;
} else {
var vec__13689 = cljs.core.first(seq__13650__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13689,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13689,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__14845 = cljs.core.next(seq__13650__$1);
var G__14846 = null;
var G__14847 = (0);
var G__14848 = (0);
seq__13650 = G__14845;
chunk__13651 = G__14846;
count__13652 = G__14847;
i__13653 = G__14848;
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
var seq__13699 = cljs.core.seq(styles);
var chunk__13700 = null;
var count__13701 = (0);
var i__13702 = (0);
while(true){
if((i__13702 < count__13701)){
var vec__13710 = chunk__13700.cljs$core$IIndexed$_nth$arity$2(null,i__13702);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13710,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__14849 = seq__13699;
var G__14850 = chunk__13700;
var G__14851 = count__13701;
var G__14852 = (i__13702 + (1));
seq__13699 = G__14849;
chunk__13700 = G__14850;
count__13701 = G__14851;
i__13702 = G__14852;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__13699);
if(temp__5825__auto__){
var seq__13699__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13699__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__13699__$1);
var G__14853 = cljs.core.chunk_rest(seq__13699__$1);
var G__14854 = c__5694__auto__;
var G__14855 = cljs.core.count(c__5694__auto__);
var G__14856 = (0);
seq__13699 = G__14853;
chunk__13700 = G__14854;
count__13701 = G__14855;
i__13702 = G__14856;
continue;
} else {
var vec__13713 = cljs.core.first(seq__13699__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13713,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__14858 = cljs.core.next(seq__13699__$1);
var G__14859 = null;
var G__14860 = (0);
var G__14861 = (0);
seq__13699 = G__14858;
chunk__13700 = G__14859;
count__13701 = G__14860;
i__13702 = G__14861;
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
var G__13719_14862 = key;
var G__13719_14863__$1 = (((G__13719_14862 instanceof cljs.core.Keyword))?G__13719_14862.fqn:null);
switch (G__13719_14863__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

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
var ks_14870 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_14870,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_14870,"aria-");
}
})())){
el.setAttribute(ks_14870,value);
} else {
(el[ks_14870] = value);
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
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
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__13729){
var map__13730 = p__13729;
var map__13730__$1 = cljs.core.__destructure_map(map__13730);
var props = map__13730__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13730__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__13731 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13731,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13731,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13731,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__13734 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__13734,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__13734;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__13739 = arguments.length;
switch (G__13739) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
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
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__13743){
var vec__13744 = p__13743;
var seq__13745 = cljs.core.seq(vec__13744);
var first__13746 = cljs.core.first(seq__13745);
var seq__13745__$1 = cljs.core.next(seq__13745);
var nn = first__13746;
var first__13746__$1 = cljs.core.first(seq__13745__$1);
var seq__13745__$2 = cljs.core.next(seq__13745__$1);
var np = first__13746__$1;
var nc = seq__13745__$2;
var node = vec__13744;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13749 = nn;
var G__13750 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13749,G__13750) : create_fn.call(null,G__13749,G__13750));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13755 = nn;
var G__13756 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13755,G__13756) : create_fn.call(null,G__13755,G__13756));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__13758 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13758,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13758,(1),null);
var seq__13762_14901 = cljs.core.seq(node_children);
var chunk__13763_14902 = null;
var count__13764_14903 = (0);
var i__13765_14904 = (0);
while(true){
if((i__13765_14904 < count__13764_14903)){
var child_struct_14906 = chunk__13763_14902.cljs$core$IIndexed$_nth$arity$2(null,i__13765_14904);
var children_14907 = shadow.dom.dom_node(child_struct_14906);
if(cljs.core.seq_QMARK_(children_14907)){
var seq__13814_14909 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_14907));
var chunk__13816_14910 = null;
var count__13817_14911 = (0);
var i__13818_14912 = (0);
while(true){
if((i__13818_14912 < count__13817_14911)){
var child_14913 = chunk__13816_14910.cljs$core$IIndexed$_nth$arity$2(null,i__13818_14912);
if(cljs.core.truth_(child_14913)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_14913);


var G__14914 = seq__13814_14909;
var G__14915 = chunk__13816_14910;
var G__14916 = count__13817_14911;
var G__14917 = (i__13818_14912 + (1));
seq__13814_14909 = G__14914;
chunk__13816_14910 = G__14915;
count__13817_14911 = G__14916;
i__13818_14912 = G__14917;
continue;
} else {
var G__14918 = seq__13814_14909;
var G__14919 = chunk__13816_14910;
var G__14920 = count__13817_14911;
var G__14921 = (i__13818_14912 + (1));
seq__13814_14909 = G__14918;
chunk__13816_14910 = G__14919;
count__13817_14911 = G__14920;
i__13818_14912 = G__14921;
continue;
}
} else {
var temp__5825__auto___14922 = cljs.core.seq(seq__13814_14909);
if(temp__5825__auto___14922){
var seq__13814_14923__$1 = temp__5825__auto___14922;
if(cljs.core.chunked_seq_QMARK_(seq__13814_14923__$1)){
var c__5694__auto___14925 = cljs.core.chunk_first(seq__13814_14923__$1);
var G__14926 = cljs.core.chunk_rest(seq__13814_14923__$1);
var G__14927 = c__5694__auto___14925;
var G__14928 = cljs.core.count(c__5694__auto___14925);
var G__14929 = (0);
seq__13814_14909 = G__14926;
chunk__13816_14910 = G__14927;
count__13817_14911 = G__14928;
i__13818_14912 = G__14929;
continue;
} else {
var child_14930 = cljs.core.first(seq__13814_14923__$1);
if(cljs.core.truth_(child_14930)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_14930);


var G__14931 = cljs.core.next(seq__13814_14923__$1);
var G__14932 = null;
var G__14933 = (0);
var G__14934 = (0);
seq__13814_14909 = G__14931;
chunk__13816_14910 = G__14932;
count__13817_14911 = G__14933;
i__13818_14912 = G__14934;
continue;
} else {
var G__14935 = cljs.core.next(seq__13814_14923__$1);
var G__14936 = null;
var G__14937 = (0);
var G__14938 = (0);
seq__13814_14909 = G__14935;
chunk__13816_14910 = G__14936;
count__13817_14911 = G__14937;
i__13818_14912 = G__14938;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_14907);
}


var G__14939 = seq__13762_14901;
var G__14940 = chunk__13763_14902;
var G__14941 = count__13764_14903;
var G__14942 = (i__13765_14904 + (1));
seq__13762_14901 = G__14939;
chunk__13763_14902 = G__14940;
count__13764_14903 = G__14941;
i__13765_14904 = G__14942;
continue;
} else {
var temp__5825__auto___14943 = cljs.core.seq(seq__13762_14901);
if(temp__5825__auto___14943){
var seq__13762_14944__$1 = temp__5825__auto___14943;
if(cljs.core.chunked_seq_QMARK_(seq__13762_14944__$1)){
var c__5694__auto___14945 = cljs.core.chunk_first(seq__13762_14944__$1);
var G__14946 = cljs.core.chunk_rest(seq__13762_14944__$1);
var G__14947 = c__5694__auto___14945;
var G__14948 = cljs.core.count(c__5694__auto___14945);
var G__14949 = (0);
seq__13762_14901 = G__14946;
chunk__13763_14902 = G__14947;
count__13764_14903 = G__14948;
i__13765_14904 = G__14949;
continue;
} else {
var child_struct_14950 = cljs.core.first(seq__13762_14944__$1);
var children_14952 = shadow.dom.dom_node(child_struct_14950);
if(cljs.core.seq_QMARK_(children_14952)){
var seq__13840_14953 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_14952));
var chunk__13842_14954 = null;
var count__13843_14955 = (0);
var i__13844_14956 = (0);
while(true){
if((i__13844_14956 < count__13843_14955)){
var child_14957 = chunk__13842_14954.cljs$core$IIndexed$_nth$arity$2(null,i__13844_14956);
if(cljs.core.truth_(child_14957)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_14957);


var G__14959 = seq__13840_14953;
var G__14960 = chunk__13842_14954;
var G__14961 = count__13843_14955;
var G__14962 = (i__13844_14956 + (1));
seq__13840_14953 = G__14959;
chunk__13842_14954 = G__14960;
count__13843_14955 = G__14961;
i__13844_14956 = G__14962;
continue;
} else {
var G__14963 = seq__13840_14953;
var G__14964 = chunk__13842_14954;
var G__14965 = count__13843_14955;
var G__14966 = (i__13844_14956 + (1));
seq__13840_14953 = G__14963;
chunk__13842_14954 = G__14964;
count__13843_14955 = G__14965;
i__13844_14956 = G__14966;
continue;
}
} else {
var temp__5825__auto___14968__$1 = cljs.core.seq(seq__13840_14953);
if(temp__5825__auto___14968__$1){
var seq__13840_14970__$1 = temp__5825__auto___14968__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13840_14970__$1)){
var c__5694__auto___14971 = cljs.core.chunk_first(seq__13840_14970__$1);
var G__14973 = cljs.core.chunk_rest(seq__13840_14970__$1);
var G__14974 = c__5694__auto___14971;
var G__14975 = cljs.core.count(c__5694__auto___14971);
var G__14976 = (0);
seq__13840_14953 = G__14973;
chunk__13842_14954 = G__14974;
count__13843_14955 = G__14975;
i__13844_14956 = G__14976;
continue;
} else {
var child_14977 = cljs.core.first(seq__13840_14970__$1);
if(cljs.core.truth_(child_14977)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_14977);


var G__14981 = cljs.core.next(seq__13840_14970__$1);
var G__14982 = null;
var G__14983 = (0);
var G__14984 = (0);
seq__13840_14953 = G__14981;
chunk__13842_14954 = G__14982;
count__13843_14955 = G__14983;
i__13844_14956 = G__14984;
continue;
} else {
var G__14985 = cljs.core.next(seq__13840_14970__$1);
var G__14986 = null;
var G__14987 = (0);
var G__14988 = (0);
seq__13840_14953 = G__14985;
chunk__13842_14954 = G__14986;
count__13843_14955 = G__14987;
i__13844_14956 = G__14988;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_14952);
}


var G__14989 = cljs.core.next(seq__13762_14944__$1);
var G__14990 = null;
var G__14991 = (0);
var G__14992 = (0);
seq__13762_14901 = G__14989;
chunk__13763_14902 = G__14990;
count__13764_14903 = G__14991;
i__13765_14904 = G__14992;
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
var seq__13867 = cljs.core.seq(node);
var chunk__13868 = null;
var count__13869 = (0);
var i__13870 = (0);
while(true){
if((i__13870 < count__13869)){
var n = chunk__13868.cljs$core$IIndexed$_nth$arity$2(null,i__13870);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15007 = seq__13867;
var G__15008 = chunk__13868;
var G__15009 = count__13869;
var G__15010 = (i__13870 + (1));
seq__13867 = G__15007;
chunk__13868 = G__15008;
count__13869 = G__15009;
i__13870 = G__15010;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__13867);
if(temp__5825__auto__){
var seq__13867__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13867__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__13867__$1);
var G__15017 = cljs.core.chunk_rest(seq__13867__$1);
var G__15018 = c__5694__auto__;
var G__15019 = cljs.core.count(c__5694__auto__);
var G__15020 = (0);
seq__13867 = G__15017;
chunk__13868 = G__15018;
count__13869 = G__15019;
i__13870 = G__15020;
continue;
} else {
var n = cljs.core.first(seq__13867__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15026 = cljs.core.next(seq__13867__$1);
var G__15027 = null;
var G__15028 = (0);
var G__15029 = (0);
seq__13867 = G__15026;
chunk__13868 = G__15027;
count__13869 = G__15028;
i__13870 = G__15029;
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
var G__13875 = arguments.length;
switch (G__13875) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__13889 = arguments.length;
switch (G__13889) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__13942 = arguments.length;
switch (G__13942) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5162__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5903__auto__ = [];
var len__5897__auto___15049 = arguments.length;
var i__5898__auto___15050 = (0);
while(true){
if((i__5898__auto___15050 < len__5897__auto___15049)){
args__5903__auto__.push((arguments[i__5898__auto___15050]));

var G__15051 = (i__5898__auto___15050 + (1));
i__5898__auto___15050 = G__15051;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14005_15054 = cljs.core.seq(nodes);
var chunk__14006_15055 = null;
var count__14007_15056 = (0);
var i__14008_15057 = (0);
while(true){
if((i__14008_15057 < count__14007_15056)){
var node_15058 = chunk__14006_15055.cljs$core$IIndexed$_nth$arity$2(null,i__14008_15057);
fragment.appendChild(shadow.dom._to_dom(node_15058));


var G__15065 = seq__14005_15054;
var G__15066 = chunk__14006_15055;
var G__15067 = count__14007_15056;
var G__15068 = (i__14008_15057 + (1));
seq__14005_15054 = G__15065;
chunk__14006_15055 = G__15066;
count__14007_15056 = G__15067;
i__14008_15057 = G__15068;
continue;
} else {
var temp__5825__auto___15069 = cljs.core.seq(seq__14005_15054);
if(temp__5825__auto___15069){
var seq__14005_15071__$1 = temp__5825__auto___15069;
if(cljs.core.chunked_seq_QMARK_(seq__14005_15071__$1)){
var c__5694__auto___15073 = cljs.core.chunk_first(seq__14005_15071__$1);
var G__15074 = cljs.core.chunk_rest(seq__14005_15071__$1);
var G__15075 = c__5694__auto___15073;
var G__15076 = cljs.core.count(c__5694__auto___15073);
var G__15077 = (0);
seq__14005_15054 = G__15074;
chunk__14006_15055 = G__15075;
count__14007_15056 = G__15076;
i__14008_15057 = G__15077;
continue;
} else {
var node_15079 = cljs.core.first(seq__14005_15071__$1);
fragment.appendChild(shadow.dom._to_dom(node_15079));


var G__15081 = cljs.core.next(seq__14005_15071__$1);
var G__15082 = null;
var G__15083 = (0);
var G__15084 = (0);
seq__14005_15054 = G__15081;
chunk__14006_15055 = G__15082;
count__14007_15056 = G__15083;
i__14008_15057 = G__15084;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq13959){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13959));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14066_15087 = cljs.core.seq(scripts);
var chunk__14067_15088 = null;
var count__14068_15089 = (0);
var i__14069_15090 = (0);
while(true){
if((i__14069_15090 < count__14068_15089)){
var vec__14092_15092 = chunk__14067_15088.cljs$core$IIndexed$_nth$arity$2(null,i__14069_15090);
var script_tag_15093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14092_15092,(0),null);
var script_body_15094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14092_15092,(1),null);
eval(script_body_15094);


var G__15097 = seq__14066_15087;
var G__15098 = chunk__14067_15088;
var G__15099 = count__14068_15089;
var G__15100 = (i__14069_15090 + (1));
seq__14066_15087 = G__15097;
chunk__14067_15088 = G__15098;
count__14068_15089 = G__15099;
i__14069_15090 = G__15100;
continue;
} else {
var temp__5825__auto___15101 = cljs.core.seq(seq__14066_15087);
if(temp__5825__auto___15101){
var seq__14066_15103__$1 = temp__5825__auto___15101;
if(cljs.core.chunked_seq_QMARK_(seq__14066_15103__$1)){
var c__5694__auto___15104 = cljs.core.chunk_first(seq__14066_15103__$1);
var G__15105 = cljs.core.chunk_rest(seq__14066_15103__$1);
var G__15106 = c__5694__auto___15104;
var G__15107 = cljs.core.count(c__5694__auto___15104);
var G__15108 = (0);
seq__14066_15087 = G__15105;
chunk__14067_15088 = G__15106;
count__14068_15089 = G__15107;
i__14069_15090 = G__15108;
continue;
} else {
var vec__14096_15110 = cljs.core.first(seq__14066_15103__$1);
var script_tag_15111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14096_15110,(0),null);
var script_body_15112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14096_15110,(1),null);
eval(script_body_15112);


var G__15113 = cljs.core.next(seq__14066_15103__$1);
var G__15114 = null;
var G__15115 = (0);
var G__15116 = (0);
seq__14066_15087 = G__15113;
chunk__14067_15088 = G__15114;
count__14068_15089 = G__15115;
i__14069_15090 = G__15116;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14100){
var vec__14102 = p__14100;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14102,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14102,(1),null);
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
var G__14169 = arguments.length;
switch (G__14169) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
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
var seq__14207 = cljs.core.seq(style_keys);
var chunk__14208 = null;
var count__14209 = (0);
var i__14210 = (0);
while(true){
if((i__14210 < count__14209)){
var it = chunk__14208.cljs$core$IIndexed$_nth$arity$2(null,i__14210);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15132 = seq__14207;
var G__15133 = chunk__14208;
var G__15134 = count__14209;
var G__15135 = (i__14210 + (1));
seq__14207 = G__15132;
chunk__14208 = G__15133;
count__14209 = G__15134;
i__14210 = G__15135;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__14207);
if(temp__5825__auto__){
var seq__14207__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14207__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__14207__$1);
var G__15139 = cljs.core.chunk_rest(seq__14207__$1);
var G__15140 = c__5694__auto__;
var G__15141 = cljs.core.count(c__5694__auto__);
var G__15142 = (0);
seq__14207 = G__15139;
chunk__14208 = G__15140;
count__14209 = G__15141;
i__14210 = G__15142;
continue;
} else {
var it = cljs.core.first(seq__14207__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15143 = cljs.core.next(seq__14207__$1);
var G__15144 = null;
var G__15145 = (0);
var G__15146 = (0);
seq__14207 = G__15143;
chunk__14208 = G__15144;
count__14209 = G__15145;
i__14210 = G__15146;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k14229,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__14260 = k14229;
var G__14260__$1 = (((G__14260 instanceof cljs.core.Keyword))?G__14260.fqn:null);
switch (G__14260__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14229,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__14265){
var vec__14267 = p__14265;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14267,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14267,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14228){
var self__ = this;
var G__14228__$1 = this;
return (new cljs.core.RecordIter((0),G__14228__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14234,other14235){
var self__ = this;
var this14234__$1 = this;
return (((!((other14235 == null)))) && ((((this14234__$1.constructor === other14235.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14234__$1.x,other14235.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14234__$1.y,other14235.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14234__$1.__extmap,other14235.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k14229){
var self__ = this;
var this__5476__auto____$1 = this;
var G__14306 = k14229;
var G__14306__$1 = (((G__14306 instanceof cljs.core.Keyword))?G__14306.fqn:null);
switch (G__14306__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14229);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__14228){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__14310 = cljs.core.keyword_identical_QMARK_;
var expr__14311 = k__5478__auto__;
if(cljs.core.truth_((pred__14310.cljs$core$IFn$_invoke$arity$2 ? pred__14310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14311) : pred__14310.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14311)))){
return (new shadow.dom.Coordinate(G__14228,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14310.cljs$core$IFn$_invoke$arity$2 ? pred__14310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14311) : pred__14310.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14311)))){
return (new shadow.dom.Coordinate(self__.x,G__14228,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__14228),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__14228){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14228,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14250){
var extmap__5511__auto__ = (function (){var G__14332 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14250,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14250)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14332);
} else {
return G__14332;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14250),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14250),null,cljs.core.not_empty(extmap__5511__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k14349,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__14370 = k14349;
var G__14370__$1 = (((G__14370 instanceof cljs.core.Keyword))?G__14370.fqn:null);
switch (G__14370__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14349,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__14383){
var vec__14385 = p__14383;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14385,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14385,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Size{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14348){
var self__ = this;
var G__14348__$1 = this;
return (new cljs.core.RecordIter((0),G__14348__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14350,other14351){
var self__ = this;
var this14350__$1 = this;
return (((!((other14351 == null)))) && ((((this14350__$1.constructor === other14351.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14350__$1.w,other14351.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14350__$1.h,other14351.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14350__$1.__extmap,other14351.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k14349){
var self__ = this;
var this__5476__auto____$1 = this;
var G__14406 = k14349;
var G__14406__$1 = (((G__14406 instanceof cljs.core.Keyword))?G__14406.fqn:null);
switch (G__14406__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14349);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__14348){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__14412 = cljs.core.keyword_identical_QMARK_;
var expr__14413 = k__5478__auto__;
if(cljs.core.truth_((pred__14412.cljs$core$IFn$_invoke$arity$2 ? pred__14412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14413) : pred__14412.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__14413)))){
return (new shadow.dom.Size(G__14348,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14412.cljs$core$IFn$_invoke$arity$2 ? pred__14412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14413) : pred__14412.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__14413)))){
return (new shadow.dom.Size(self__.w,G__14348,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__14348),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__14348){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14348,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14352){
var extmap__5511__auto__ = (function (){var G__14429 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14352,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14352)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14429);
} else {
return G__14429;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14352),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14352),null,cljs.core.not_empty(extmap__5511__auto__),null));
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
var a__5759__auto__ = opts;
var l__5760__auto__ = a__5759__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5760__auto__)){
var G__15362 = (i + (1));
var G__15363 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15362;
ret = G__15363;
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14446){
var vec__14447 = p__14446;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14447,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14447,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__14451 = arguments.length;
switch (G__14451) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
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
var G__15417 = ps;
var G__15418 = (i + (1));
el__$1 = G__15417;
i = G__15418;
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
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
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
var vec__14502 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14502,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14502,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14502,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__14506_15432 = cljs.core.seq(props);
var chunk__14507_15433 = null;
var count__14508_15434 = (0);
var i__14509_15435 = (0);
while(true){
if((i__14509_15435 < count__14508_15434)){
var vec__14541_15438 = chunk__14507_15433.cljs$core$IIndexed$_nth$arity$2(null,i__14509_15435);
var k_15439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14541_15438,(0),null);
var v_15440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14541_15438,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_15439);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15439),v_15440);


var G__15443 = seq__14506_15432;
var G__15444 = chunk__14507_15433;
var G__15445 = count__14508_15434;
var G__15446 = (i__14509_15435 + (1));
seq__14506_15432 = G__15443;
chunk__14507_15433 = G__15444;
count__14508_15434 = G__15445;
i__14509_15435 = G__15446;
continue;
} else {
var temp__5825__auto___15449 = cljs.core.seq(seq__14506_15432);
if(temp__5825__auto___15449){
var seq__14506_15451__$1 = temp__5825__auto___15449;
if(cljs.core.chunked_seq_QMARK_(seq__14506_15451__$1)){
var c__5694__auto___15452 = cljs.core.chunk_first(seq__14506_15451__$1);
var G__15453 = cljs.core.chunk_rest(seq__14506_15451__$1);
var G__15454 = c__5694__auto___15452;
var G__15455 = cljs.core.count(c__5694__auto___15452);
var G__15456 = (0);
seq__14506_15432 = G__15453;
chunk__14507_15433 = G__15454;
count__14508_15434 = G__15455;
i__14509_15435 = G__15456;
continue;
} else {
var vec__14555_15457 = cljs.core.first(seq__14506_15451__$1);
var k_15458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14555_15457,(0),null);
var v_15459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14555_15457,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_15458);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15458),v_15459);


var G__15461 = cljs.core.next(seq__14506_15451__$1);
var G__15462 = null;
var G__15463 = (0);
var G__15464 = (0);
seq__14506_15432 = G__15461;
chunk__14507_15433 = G__15462;
count__14508_15434 = G__15463;
i__14509_15435 = G__15464;
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
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__14582 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14582,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14582,(1),null);
var seq__14592_15471 = cljs.core.seq(node_children);
var chunk__14594_15472 = null;
var count__14595_15473 = (0);
var i__14596_15474 = (0);
while(true){
if((i__14596_15474 < count__14595_15473)){
var child_struct_15476 = chunk__14594_15472.cljs$core$IIndexed$_nth$arity$2(null,i__14596_15474);
if((!((child_struct_15476 == null)))){
if(typeof child_struct_15476 === 'string'){
var text_15478 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15478)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_15476)));
} else {
var children_15480 = shadow.dom.svg_node(child_struct_15476);
if(cljs.core.seq_QMARK_(children_15480)){
var seq__14664_15482 = cljs.core.seq(children_15480);
var chunk__14666_15483 = null;
var count__14667_15484 = (0);
var i__14668_15485 = (0);
while(true){
if((i__14668_15485 < count__14667_15484)){
var child_15489 = chunk__14666_15483.cljs$core$IIndexed$_nth$arity$2(null,i__14668_15485);
if(cljs.core.truth_(child_15489)){
node.appendChild(child_15489);


var G__15491 = seq__14664_15482;
var G__15492 = chunk__14666_15483;
var G__15493 = count__14667_15484;
var G__15494 = (i__14668_15485 + (1));
seq__14664_15482 = G__15491;
chunk__14666_15483 = G__15492;
count__14667_15484 = G__15493;
i__14668_15485 = G__15494;
continue;
} else {
var G__15495 = seq__14664_15482;
var G__15496 = chunk__14666_15483;
var G__15497 = count__14667_15484;
var G__15498 = (i__14668_15485 + (1));
seq__14664_15482 = G__15495;
chunk__14666_15483 = G__15496;
count__14667_15484 = G__15497;
i__14668_15485 = G__15498;
continue;
}
} else {
var temp__5825__auto___15503 = cljs.core.seq(seq__14664_15482);
if(temp__5825__auto___15503){
var seq__14664_15504__$1 = temp__5825__auto___15503;
if(cljs.core.chunked_seq_QMARK_(seq__14664_15504__$1)){
var c__5694__auto___15505 = cljs.core.chunk_first(seq__14664_15504__$1);
var G__15506 = cljs.core.chunk_rest(seq__14664_15504__$1);
var G__15507 = c__5694__auto___15505;
var G__15508 = cljs.core.count(c__5694__auto___15505);
var G__15509 = (0);
seq__14664_15482 = G__15506;
chunk__14666_15483 = G__15507;
count__14667_15484 = G__15508;
i__14668_15485 = G__15509;
continue;
} else {
var child_15512 = cljs.core.first(seq__14664_15504__$1);
if(cljs.core.truth_(child_15512)){
node.appendChild(child_15512);


var G__15514 = cljs.core.next(seq__14664_15504__$1);
var G__15515 = null;
var G__15516 = (0);
var G__15517 = (0);
seq__14664_15482 = G__15514;
chunk__14666_15483 = G__15515;
count__14667_15484 = G__15516;
i__14668_15485 = G__15517;
continue;
} else {
var G__15518 = cljs.core.next(seq__14664_15504__$1);
var G__15519 = null;
var G__15520 = (0);
var G__15521 = (0);
seq__14664_15482 = G__15518;
chunk__14666_15483 = G__15519;
count__14667_15484 = G__15520;
i__14668_15485 = G__15521;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15480);
}
}


var G__15524 = seq__14592_15471;
var G__15525 = chunk__14594_15472;
var G__15526 = count__14595_15473;
var G__15527 = (i__14596_15474 + (1));
seq__14592_15471 = G__15524;
chunk__14594_15472 = G__15525;
count__14595_15473 = G__15526;
i__14596_15474 = G__15527;
continue;
} else {
var G__15530 = seq__14592_15471;
var G__15531 = chunk__14594_15472;
var G__15532 = count__14595_15473;
var G__15533 = (i__14596_15474 + (1));
seq__14592_15471 = G__15530;
chunk__14594_15472 = G__15531;
count__14595_15473 = G__15532;
i__14596_15474 = G__15533;
continue;
}
} else {
var temp__5825__auto___15534 = cljs.core.seq(seq__14592_15471);
if(temp__5825__auto___15534){
var seq__14592_15535__$1 = temp__5825__auto___15534;
if(cljs.core.chunked_seq_QMARK_(seq__14592_15535__$1)){
var c__5694__auto___15536 = cljs.core.chunk_first(seq__14592_15535__$1);
var G__15537 = cljs.core.chunk_rest(seq__14592_15535__$1);
var G__15538 = c__5694__auto___15536;
var G__15539 = cljs.core.count(c__5694__auto___15536);
var G__15540 = (0);
seq__14592_15471 = G__15537;
chunk__14594_15472 = G__15538;
count__14595_15473 = G__15539;
i__14596_15474 = G__15540;
continue;
} else {
var child_struct_15541 = cljs.core.first(seq__14592_15535__$1);
if((!((child_struct_15541 == null)))){
if(typeof child_struct_15541 === 'string'){
var text_15544 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15544)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_15541)));
} else {
var children_15545 = shadow.dom.svg_node(child_struct_15541);
if(cljs.core.seq_QMARK_(children_15545)){
var seq__14687_15546 = cljs.core.seq(children_15545);
var chunk__14690_15547 = null;
var count__14691_15548 = (0);
var i__14692_15549 = (0);
while(true){
if((i__14692_15549 < count__14691_15548)){
var child_15553 = chunk__14690_15547.cljs$core$IIndexed$_nth$arity$2(null,i__14692_15549);
if(cljs.core.truth_(child_15553)){
node.appendChild(child_15553);


var G__15555 = seq__14687_15546;
var G__15556 = chunk__14690_15547;
var G__15557 = count__14691_15548;
var G__15558 = (i__14692_15549 + (1));
seq__14687_15546 = G__15555;
chunk__14690_15547 = G__15556;
count__14691_15548 = G__15557;
i__14692_15549 = G__15558;
continue;
} else {
var G__15560 = seq__14687_15546;
var G__15561 = chunk__14690_15547;
var G__15562 = count__14691_15548;
var G__15563 = (i__14692_15549 + (1));
seq__14687_15546 = G__15560;
chunk__14690_15547 = G__15561;
count__14691_15548 = G__15562;
i__14692_15549 = G__15563;
continue;
}
} else {
var temp__5825__auto___15564__$1 = cljs.core.seq(seq__14687_15546);
if(temp__5825__auto___15564__$1){
var seq__14687_15565__$1 = temp__5825__auto___15564__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14687_15565__$1)){
var c__5694__auto___15566 = cljs.core.chunk_first(seq__14687_15565__$1);
var G__15567 = cljs.core.chunk_rest(seq__14687_15565__$1);
var G__15568 = c__5694__auto___15566;
var G__15569 = cljs.core.count(c__5694__auto___15566);
var G__15570 = (0);
seq__14687_15546 = G__15567;
chunk__14690_15547 = G__15568;
count__14691_15548 = G__15569;
i__14692_15549 = G__15570;
continue;
} else {
var child_15572 = cljs.core.first(seq__14687_15565__$1);
if(cljs.core.truth_(child_15572)){
node.appendChild(child_15572);


var G__15573 = cljs.core.next(seq__14687_15565__$1);
var G__15574 = null;
var G__15575 = (0);
var G__15576 = (0);
seq__14687_15546 = G__15573;
chunk__14690_15547 = G__15574;
count__14691_15548 = G__15575;
i__14692_15549 = G__15576;
continue;
} else {
var G__15577 = cljs.core.next(seq__14687_15565__$1);
var G__15578 = null;
var G__15579 = (0);
var G__15580 = (0);
seq__14687_15546 = G__15577;
chunk__14690_15547 = G__15578;
count__14691_15548 = G__15579;
i__14692_15549 = G__15580;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15545);
}
}


var G__15583 = cljs.core.next(seq__14592_15535__$1);
var G__15584 = null;
var G__15585 = (0);
var G__15586 = (0);
seq__14592_15471 = G__15583;
chunk__14594_15472 = G__15584;
count__14595_15473 = G__15585;
i__14596_15474 = G__15586;
continue;
} else {
var G__15588 = cljs.core.next(seq__14592_15535__$1);
var G__15589 = null;
var G__15590 = (0);
var G__15591 = (0);
seq__14592_15471 = G__15588;
chunk__14594_15472 = G__15589;
count__14595_15473 = G__15590;
i__14596_15474 = G__15591;
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
var args__5903__auto__ = [];
var len__5897__auto___15600 = arguments.length;
var i__5898__auto___15602 = (0);
while(true){
if((i__5898__auto___15602 < len__5897__auto___15600)){
args__5903__auto__.push((arguments[i__5898__auto___15602]));

var G__15605 = (i__5898__auto___15602 + (1));
i__5898__auto___15602 = G__15605;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq14727){
var G__14728 = cljs.core.first(seq14727);
var seq14727__$1 = cljs.core.next(seq14727);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14728,seq14727__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
