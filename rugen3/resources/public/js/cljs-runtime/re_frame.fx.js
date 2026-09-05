goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * Per-fx-execution-frame override map. Bound by `do-fx-after`
 * from the current event's `:re-frame/fx-overrides` metadata.
 */
re_frame.fx._STAR_current_overrides_STAR_ = null;
/**
 * Resolve an fx handler: prefer an override from
 * `*current-overrides*` (set by do-fx-after for the active
 * dispatch); fall back to the global registrar.
 */
re_frame.fx.effect_handler = (function re_frame$fx$effect_handler(effect_key){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frame.fx._STAR_current_overrides_STAR_,effect_key);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
}
});
/**
 * Apply the `:db` effect first, then every other effect via
 * `effect-handler`. Extracted so `do-fx-after` can call it with OR
 * without a `*current-overrides*` binding pushed — the no-overrides
 * hot path skips the binding entirely.
 */
re_frame.fx.run_effects_BANG_ = (function re_frame$fx$run_effects_BANG_(effects,effects_without_db){
var temp__5825__auto___23699 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___23699)){
var new_db_23700 = temp__5825__auto___23699;
var fexpr__23603_23701 = re_frame.fx.effect_handler(new cljs.core.Keyword(null,"db","db",993250759));
(fexpr__23603_23701.cljs$core$IFn$_invoke$arity$1 ? fexpr__23603_23701.cljs$core$IFn$_invoke$arity$1(new_db_23700) : fexpr__23603_23701.call(null,new_db_23700));
} else {
}

var seq__23609 = cljs.core.seq(effects_without_db);
var chunk__23610 = null;
var count__23611 = (0);
var i__23612 = (0);
while(true){
if((i__23612 < count__23611)){
var vec__23625 = chunk__23610.cljs$core$IIndexed$_nth$arity$2(null,i__23612);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23625,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23625,(1),null);
var temp__5823__auto___23702 = re_frame.fx.effect_handler(effect_key);
if(cljs.core.truth_(temp__5823__auto___23702)){
var effect_fn_23703 = temp__5823__auto___23702;
(effect_fn_23703.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23703.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23703.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?(""+"You may be trying to return a coeffect map from an event-fx handler. "+"See https://day8.github.io/re-frame/FAQs/use-cofx-as-fx/"):null)], 0));
}


var G__23704 = seq__23609;
var G__23705 = chunk__23610;
var G__23706 = count__23611;
var G__23707 = (i__23612 + (1));
seq__23609 = G__23704;
chunk__23610 = G__23705;
count__23611 = G__23706;
i__23612 = G__23707;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__23609);
if(temp__5825__auto__){
var seq__23609__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23609__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__23609__$1);
var G__23708 = cljs.core.chunk_rest(seq__23609__$1);
var G__23709 = c__5694__auto__;
var G__23710 = cljs.core.count(c__5694__auto__);
var G__23711 = (0);
seq__23609 = G__23708;
chunk__23610 = G__23709;
count__23611 = G__23710;
i__23612 = G__23711;
continue;
} else {
var vec__23628 = cljs.core.first(seq__23609__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23628,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23628,(1),null);
var temp__5823__auto___23712 = re_frame.fx.effect_handler(effect_key);
if(cljs.core.truth_(temp__5823__auto___23712)){
var effect_fn_23713 = temp__5823__auto___23712;
(effect_fn_23713.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23713.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23713.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?(""+"You may be trying to return a coeffect map from an event-fx handler. "+"See https://day8.github.io/re-frame/FAQs/use-cofx-as-fx/"):null)], 0));
}


var G__23714 = cljs.core.next(seq__23609__$1);
var G__23715 = null;
var G__23716 = (0);
var G__23717 = (0);
seq__23609 = G__23714;
chunk__23610 = G__23715;
count__23611 = G__23716;
i__23612 = G__23717;
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
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23635 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23636 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23636);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null));
var overrides = new cljs.core.Keyword("re-frame","fx-overrides","re-frame/fx-overrides",1984520294).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(event));
if(cljs.core.truth_(overrides)){
var _STAR_current_overrides_STAR__orig_val__23637 = re_frame.fx._STAR_current_overrides_STAR_;
var _STAR_current_overrides_STAR__temp_val__23638 = overrides;
(re_frame.fx._STAR_current_overrides_STAR_ = _STAR_current_overrides_STAR__temp_val__23638);

try{return re_frame.fx.run_effects_BANG_(effects,effects_without_db);
}finally {(re_frame.fx._STAR_current_overrides_STAR_ = _STAR_current_overrides_STAR__orig_val__23637);
}} else {
return re_frame.fx.run_effects_BANG_(effects,effects_without_db);
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22773__auto___23720 = re_frame.interop.now();
var duration__22774__auto___23721 = (end__22773__auto___23720 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var finished__22775__auto___23722 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22774__auto___23721,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),end__22773__auto___23720], 0));
if(re_frame.trace.validate_trace_enabled_QMARK_){
re_frame.trace.check_trace_against_schema(finished__22775__auto___23722);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,finished__22775__auto___23722);

re_frame.trace.run_tracing_callbacks_BANG_(end__22773__auto___23720);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23635);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null));
var overrides = new cljs.core.Keyword("re-frame","fx-overrides","re-frame/fx-overrides",1984520294).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(event));
if(cljs.core.truth_(overrides)){
var _STAR_current_overrides_STAR__orig_val__23639 = re_frame.fx._STAR_current_overrides_STAR_;
var _STAR_current_overrides_STAR__temp_val__23640 = overrides;
(re_frame.fx._STAR_current_overrides_STAR_ = _STAR_current_overrides_STAR__temp_val__23640);

try{return re_frame.fx.run_effects_BANG_(effects,effects_without_db);
}finally {(re_frame.fx._STAR_current_overrides_STAR_ = _STAR_current_overrides_STAR__orig_val__23639);
}} else {
return re_frame.fx.run_effects_BANG_(effects,effects_without_db);
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__23642){
var map__23643 = p__23642;
var map__23643__$1 = cljs.core.__destructure_map(map__23643);
var effect = map__23643__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23643__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23643__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__23644 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23645 = null;
var count__23646 = (0);
var i__23647 = (0);
while(true){
if((i__23647 < count__23646)){
var effect = chunk__23645.cljs$core$IIndexed$_nth$arity$2(null,i__23647);
re_frame.fx.dispatch_later(effect);


var G__23724 = seq__23644;
var G__23725 = chunk__23645;
var G__23726 = count__23646;
var G__23727 = (i__23647 + (1));
seq__23644 = G__23724;
chunk__23645 = G__23725;
count__23646 = G__23726;
i__23647 = G__23727;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__23644);
if(temp__5825__auto__){
var seq__23644__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23644__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__23644__$1);
var G__23728 = cljs.core.chunk_rest(seq__23644__$1);
var G__23729 = c__5694__auto__;
var G__23730 = cljs.core.count(c__5694__auto__);
var G__23731 = (0);
seq__23644 = G__23728;
chunk__23645 = G__23729;
count__23646 = G__23730;
i__23647 = G__23731;
continue;
} else {
var effect = cljs.core.first(seq__23644__$1);
re_frame.fx.dispatch_later(effect);


var G__23732 = cljs.core.next(seq__23644__$1);
var G__23733 = null;
var G__23734 = (0);
var G__23735 = (0);
seq__23644 = G__23732;
chunk__23645 = G__23733;
count__23646 = G__23734;
i__23647 = G__23735;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__23669 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__23670 = null;
var count__23671 = (0);
var i__23672 = (0);
while(true){
if((i__23672 < count__23671)){
var vec__23683 = chunk__23670.cljs$core$IIndexed$_nth$arity$2(null,i__23672);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23683,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23683,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___23736 = re_frame.fx.effect_handler(effect_key);
if(cljs.core.truth_(temp__5823__auto___23736)){
var effect_fn_23737 = temp__5823__auto___23736;
(effect_fn_23737.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23737.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23737.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23738 = seq__23669;
var G__23739 = chunk__23670;
var G__23740 = count__23671;
var G__23741 = (i__23672 + (1));
seq__23669 = G__23738;
chunk__23670 = G__23739;
count__23671 = G__23740;
i__23672 = G__23741;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__23669);
if(temp__5825__auto__){
var seq__23669__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23669__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__23669__$1);
var G__23742 = cljs.core.chunk_rest(seq__23669__$1);
var G__23743 = c__5694__auto__;
var G__23744 = cljs.core.count(c__5694__auto__);
var G__23745 = (0);
seq__23669 = G__23742;
chunk__23670 = G__23743;
count__23671 = G__23744;
i__23672 = G__23745;
continue;
} else {
var vec__23686 = cljs.core.first(seq__23669__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23686,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23686,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___23746 = re_frame.fx.effect_handler(effect_key);
if(cljs.core.truth_(temp__5823__auto___23746)){
var effect_fn_23747 = temp__5823__auto___23746;
(effect_fn_23747.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23747.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23747.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23748 = cljs.core.next(seq__23669__$1);
var G__23749 = null;
var G__23750 = (0);
var G__23751 = (0);
seq__23669 = G__23748;
chunk__23670 = G__23749;
count__23671 = G__23750;
i__23672 = G__23751;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__23689 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23690 = null;
var count__23691 = (0);
var i__23692 = (0);
while(true){
if((i__23692 < count__23691)){
var event = chunk__23690.cljs$core$IIndexed$_nth$arity$2(null,i__23692);
re_frame.router.dispatch(event);


var G__23754 = seq__23689;
var G__23755 = chunk__23690;
var G__23756 = count__23691;
var G__23757 = (i__23692 + (1));
seq__23689 = G__23754;
chunk__23690 = G__23755;
count__23691 = G__23756;
i__23692 = G__23757;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__23689);
if(temp__5825__auto__){
var seq__23689__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23689__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__23689__$1);
var G__23758 = cljs.core.chunk_rest(seq__23689__$1);
var G__23759 = c__5694__auto__;
var G__23760 = cljs.core.count(c__5694__auto__);
var G__23761 = (0);
seq__23689 = G__23758;
chunk__23690 = G__23759;
count__23691 = G__23760;
i__23692 = G__23761;
continue;
} else {
var event = cljs.core.first(seq__23689__$1);
re_frame.router.dispatch(event);


var G__23762 = cljs.core.next(seq__23689__$1);
var G__23763 = null;
var G__23764 = (0);
var G__23765 = (0);
seq__23689 = G__23762;
chunk__23690 = G__23763;
count__23691 = G__23764;
i__23692 = G__23765;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__23693 = cljs.core.seq(value);
var chunk__23694 = null;
var count__23695 = (0);
var i__23696 = (0);
while(true){
if((i__23696 < count__23695)){
var event = chunk__23694.cljs$core$IIndexed$_nth$arity$2(null,i__23696);
clear_event(event);


var G__23766 = seq__23693;
var G__23767 = chunk__23694;
var G__23768 = count__23695;
var G__23769 = (i__23696 + (1));
seq__23693 = G__23766;
chunk__23694 = G__23767;
count__23695 = G__23768;
i__23696 = G__23769;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__23693);
if(temp__5825__auto__){
var seq__23693__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23693__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__23693__$1);
var G__23770 = cljs.core.chunk_rest(seq__23693__$1);
var G__23771 = c__5694__auto__;
var G__23772 = cljs.core.count(c__5694__auto__);
var G__23773 = (0);
seq__23693 = G__23770;
chunk__23694 = G__23771;
count__23695 = G__23772;
i__23696 = G__23773;
continue;
} else {
var event = cljs.core.first(seq__23693__$1);
clear_event(event);


var G__23774 = cljs.core.next(seq__23693__$1);
var G__23775 = null;
var G__23776 = (0);
var G__23777 = (0);
seq__23693 = G__23774;
chunk__23694 = G__23775;
count__23695 = G__23776;
i__23696 = G__23777;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23697 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23698 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23698);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22773__auto___23778 = re_frame.interop.now();
var duration__22774__auto___23779 = (end__22773__auto___23778 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var finished__22775__auto___23780 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22774__auto___23779,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),end__22773__auto___23778], 0));
if(re_frame.trace.validate_trace_enabled_QMARK_){
re_frame.trace.check_trace_against_schema(finished__22775__auto___23780);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,finished__22775__auto___23780);

re_frame.trace.run_tracing_callbacks_BANG_(end__22773__auto___23778);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23697);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
