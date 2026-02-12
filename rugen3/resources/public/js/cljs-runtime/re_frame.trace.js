goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12628){
var map__12629 = p__12628;
var map__12629__$1 = cljs.core.__destructure_map(map__12629);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12629__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12629__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12629__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12629__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__12632_12661 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12633_12662 = null;
var count__12634_12663 = (0);
var i__12635_12664 = (0);
while(true){
if((i__12635_12664 < count__12634_12663)){
var vec__12648_12665 = chunk__12633_12662.cljs$core$IIndexed$_nth$arity$2(null, i__12635_12664);
var k_12666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12648_12665,(0),null);
var cb_12667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12648_12665,(1),null);
try{var G__12652_12668 = cljs.core.deref(re_frame.trace.traces);
(cb_12667.cljs$core$IFn$_invoke$arity$1 ? cb_12667.cljs$core$IFn$_invoke$arity$1(G__12652_12668) : cb_12667.call(null, G__12652_12668));
}catch (e12651){var e_12669 = e12651;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12666,"while storing",cljs.core.deref(re_frame.trace.traces),e_12669], 0));
}

var G__12670 = seq__12632_12661;
var G__12671 = chunk__12633_12662;
var G__12672 = count__12634_12663;
var G__12673 = (i__12635_12664 + (1));
seq__12632_12661 = G__12670;
chunk__12633_12662 = G__12671;
count__12634_12663 = G__12672;
i__12635_12664 = G__12673;
continue;
} else {
var temp__5804__auto___12674 = cljs.core.seq(seq__12632_12661);
if(temp__5804__auto___12674){
var seq__12632_12675__$1 = temp__5804__auto___12674;
if(cljs.core.chunked_seq_QMARK_(seq__12632_12675__$1)){
var c__5525__auto___12676 = cljs.core.chunk_first(seq__12632_12675__$1);
var G__12677 = cljs.core.chunk_rest(seq__12632_12675__$1);
var G__12678 = c__5525__auto___12676;
var G__12679 = cljs.core.count(c__5525__auto___12676);
var G__12680 = (0);
seq__12632_12661 = G__12677;
chunk__12633_12662 = G__12678;
count__12634_12663 = G__12679;
i__12635_12664 = G__12680;
continue;
} else {
var vec__12653_12681 = cljs.core.first(seq__12632_12675__$1);
var k_12682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12653_12681,(0),null);
var cb_12683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12653_12681,(1),null);
try{var G__12657_12684 = cljs.core.deref(re_frame.trace.traces);
(cb_12683.cljs$core$IFn$_invoke$arity$1 ? cb_12683.cljs$core$IFn$_invoke$arity$1(G__12657_12684) : cb_12683.call(null, G__12657_12684));
}catch (e12656){var e_12685 = e12656;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12682,"while storing",cljs.core.deref(re_frame.trace.traces),e_12685], 0));
}

var G__12686 = cljs.core.next(seq__12632_12675__$1);
var G__12687 = null;
var G__12688 = (0);
var G__12689 = (0);
seq__12632_12661 = G__12686;
chunk__12633_12662 = G__12687;
count__12634_12663 = G__12688;
i__12635_12664 = G__12689;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
