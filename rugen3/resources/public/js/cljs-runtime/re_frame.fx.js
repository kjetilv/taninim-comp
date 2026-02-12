goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
var _STAR_current_trace_STAR__orig_val__12980 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__12981 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__12981);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13074 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13074)){
var new_db_13075 = temp__5804__auto___13074;
var fexpr__12984_13076 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__12984_13076.cljs$core$IFn$_invoke$arity$1 ? fexpr__12984_13076.cljs$core$IFn$_invoke$arity$1(new_db_13075) : fexpr__12984_13076.call(null, new_db_13075));
} else {
}

var seq__12985 = cljs.core.seq(effects_without_db);
var chunk__12986 = null;
var count__12987 = (0);
var i__12988 = (0);
while(true){
if((i__12988 < count__12987)){
var vec__12998 = chunk__12986.cljs$core$IIndexed$_nth$arity$2(null, i__12988);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12998,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12998,(1),null);
var temp__5802__auto___13077 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13077)){
var effect_fn_13078 = temp__5802__auto___13077;
(effect_fn_13078.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13078.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13078.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13079 = seq__12985;
var G__13080 = chunk__12986;
var G__13081 = count__12987;
var G__13082 = (i__12988 + (1));
seq__12985 = G__13079;
chunk__12986 = G__13080;
count__12987 = G__13081;
i__12988 = G__13082;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12985);
if(temp__5804__auto__){
var seq__12985__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12985__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12985__$1);
var G__13083 = cljs.core.chunk_rest(seq__12985__$1);
var G__13084 = c__5525__auto__;
var G__13085 = cljs.core.count(c__5525__auto__);
var G__13086 = (0);
seq__12985 = G__13083;
chunk__12986 = G__13084;
count__12987 = G__13085;
i__12988 = G__13086;
continue;
} else {
var vec__13001 = cljs.core.first(seq__12985__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13001,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13001,(1),null);
var temp__5802__auto___13087 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13087)){
var effect_fn_13088 = temp__5802__auto___13087;
(effect_fn_13088.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13088.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13088.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13089 = cljs.core.next(seq__12985__$1);
var G__13090 = null;
var G__13091 = (0);
var G__13092 = (0);
seq__12985 = G__13089;
chunk__12986 = G__13090;
count__12987 = G__13091;
i__12988 = G__13092;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12606__auto___13093 = re_frame.interop.now();
var duration__12607__auto___13094 = (end__12606__auto___13093 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12607__auto___13094,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12606__auto___13093);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12980);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13095 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13095)){
var new_db_13096 = temp__5804__auto___13095;
var fexpr__13005_13097 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13005_13097.cljs$core$IFn$_invoke$arity$1 ? fexpr__13005_13097.cljs$core$IFn$_invoke$arity$1(new_db_13096) : fexpr__13005_13097.call(null, new_db_13096));
} else {
}

var seq__13006 = cljs.core.seq(effects_without_db);
var chunk__13007 = null;
var count__13008 = (0);
var i__13009 = (0);
while(true){
if((i__13009 < count__13008)){
var vec__13016 = chunk__13007.cljs$core$IIndexed$_nth$arity$2(null, i__13009);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13016,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13016,(1),null);
var temp__5802__auto___13098 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13098)){
var effect_fn_13099 = temp__5802__auto___13098;
(effect_fn_13099.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13099.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13099.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13100 = seq__13006;
var G__13101 = chunk__13007;
var G__13102 = count__13008;
var G__13103 = (i__13009 + (1));
seq__13006 = G__13100;
chunk__13007 = G__13101;
count__13008 = G__13102;
i__13009 = G__13103;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13006);
if(temp__5804__auto__){
var seq__13006__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13006__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13006__$1);
var G__13104 = cljs.core.chunk_rest(seq__13006__$1);
var G__13105 = c__5525__auto__;
var G__13106 = cljs.core.count(c__5525__auto__);
var G__13107 = (0);
seq__13006 = G__13104;
chunk__13007 = G__13105;
count__13008 = G__13106;
i__13009 = G__13107;
continue;
} else {
var vec__13020 = cljs.core.first(seq__13006__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13020,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13020,(1),null);
var temp__5802__auto___13108 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13108)){
var effect_fn_13109 = temp__5802__auto___13108;
(effect_fn_13109.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13109.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13109.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13110 = cljs.core.next(seq__13006__$1);
var G__13111 = null;
var G__13112 = (0);
var G__13113 = (0);
seq__13006 = G__13110;
chunk__13007 = G__13111;
count__13008 = G__13112;
i__13009 = G__13113;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__13025){
var map__13026 = p__13025;
var map__13026__$1 = cljs.core.__destructure_map(map__13026);
var effect = map__13026__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13026__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13026__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__13028 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13029 = null;
var count__13030 = (0);
var i__13031 = (0);
while(true){
if((i__13031 < count__13030)){
var effect = chunk__13029.cljs$core$IIndexed$_nth$arity$2(null, i__13031);
re_frame.fx.dispatch_later(effect);


var G__13114 = seq__13028;
var G__13115 = chunk__13029;
var G__13116 = count__13030;
var G__13117 = (i__13031 + (1));
seq__13028 = G__13114;
chunk__13029 = G__13115;
count__13030 = G__13116;
i__13031 = G__13117;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13028);
if(temp__5804__auto__){
var seq__13028__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13028__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13028__$1);
var G__13118 = cljs.core.chunk_rest(seq__13028__$1);
var G__13119 = c__5525__auto__;
var G__13120 = cljs.core.count(c__5525__auto__);
var G__13121 = (0);
seq__13028 = G__13118;
chunk__13029 = G__13119;
count__13030 = G__13120;
i__13031 = G__13121;
continue;
} else {
var effect = cljs.core.first(seq__13028__$1);
re_frame.fx.dispatch_later(effect);


var G__13122 = cljs.core.next(seq__13028__$1);
var G__13123 = null;
var G__13124 = (0);
var G__13125 = (0);
seq__13028 = G__13122;
chunk__13029 = G__13123;
count__13030 = G__13124;
i__13031 = G__13125;
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
var seq__13044 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__13045 = null;
var count__13046 = (0);
var i__13047 = (0);
while(true){
if((i__13047 < count__13046)){
var vec__13058 = chunk__13045.cljs$core$IIndexed$_nth$arity$2(null, i__13047);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13058,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13058,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13126 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13126)){
var effect_fn_13127 = temp__5802__auto___13126;
(effect_fn_13127.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13127.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13127.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13128 = seq__13044;
var G__13129 = chunk__13045;
var G__13130 = count__13046;
var G__13131 = (i__13047 + (1));
seq__13044 = G__13128;
chunk__13045 = G__13129;
count__13046 = G__13130;
i__13047 = G__13131;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13044);
if(temp__5804__auto__){
var seq__13044__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13044__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13044__$1);
var G__13132 = cljs.core.chunk_rest(seq__13044__$1);
var G__13133 = c__5525__auto__;
var G__13134 = cljs.core.count(c__5525__auto__);
var G__13135 = (0);
seq__13044 = G__13132;
chunk__13045 = G__13133;
count__13046 = G__13134;
i__13047 = G__13135;
continue;
} else {
var vec__13061 = cljs.core.first(seq__13044__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13061,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13061,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13136 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13136)){
var effect_fn_13137 = temp__5802__auto___13136;
(effect_fn_13137.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13137.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13137.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13138 = cljs.core.next(seq__13044__$1);
var G__13139 = null;
var G__13140 = (0);
var G__13141 = (0);
seq__13044 = G__13138;
chunk__13045 = G__13139;
count__13046 = G__13140;
i__13047 = G__13141;
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
var seq__13064 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13065 = null;
var count__13066 = (0);
var i__13067 = (0);
while(true){
if((i__13067 < count__13066)){
var event = chunk__13065.cljs$core$IIndexed$_nth$arity$2(null, i__13067);
re_frame.router.dispatch(event);


var G__13142 = seq__13064;
var G__13143 = chunk__13065;
var G__13144 = count__13066;
var G__13145 = (i__13067 + (1));
seq__13064 = G__13142;
chunk__13065 = G__13143;
count__13066 = G__13144;
i__13067 = G__13145;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13064);
if(temp__5804__auto__){
var seq__13064__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13064__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13064__$1);
var G__13146 = cljs.core.chunk_rest(seq__13064__$1);
var G__13147 = c__5525__auto__;
var G__13148 = cljs.core.count(c__5525__auto__);
var G__13149 = (0);
seq__13064 = G__13146;
chunk__13065 = G__13147;
count__13066 = G__13148;
i__13067 = G__13149;
continue;
} else {
var event = cljs.core.first(seq__13064__$1);
re_frame.router.dispatch(event);


var G__13150 = cljs.core.next(seq__13064__$1);
var G__13151 = null;
var G__13152 = (0);
var G__13153 = (0);
seq__13064 = G__13150;
chunk__13065 = G__13151;
count__13066 = G__13152;
i__13067 = G__13153;
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
var seq__13068 = cljs.core.seq(value);
var chunk__13069 = null;
var count__13070 = (0);
var i__13071 = (0);
while(true){
if((i__13071 < count__13070)){
var event = chunk__13069.cljs$core$IIndexed$_nth$arity$2(null, i__13071);
clear_event(event);


var G__13154 = seq__13068;
var G__13155 = chunk__13069;
var G__13156 = count__13070;
var G__13157 = (i__13071 + (1));
seq__13068 = G__13154;
chunk__13069 = G__13155;
count__13070 = G__13156;
i__13071 = G__13157;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13068);
if(temp__5804__auto__){
var seq__13068__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13068__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13068__$1);
var G__13158 = cljs.core.chunk_rest(seq__13068__$1);
var G__13159 = c__5525__auto__;
var G__13160 = cljs.core.count(c__5525__auto__);
var G__13161 = (0);
seq__13068 = G__13158;
chunk__13069 = G__13159;
count__13070 = G__13160;
i__13071 = G__13161;
continue;
} else {
var event = cljs.core.first(seq__13068__$1);
clear_event(event);


var G__13162 = cljs.core.next(seq__13068__$1);
var G__13163 = null;
var G__13164 = (0);
var G__13165 = (0);
seq__13068 = G__13162;
chunk__13069 = G__13163;
count__13070 = G__13164;
i__13071 = G__13165;
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
var _STAR_current_trace_STAR__orig_val__13072 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13073 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13073);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12606__auto___13166 = re_frame.interop.now();
var duration__12607__auto___13167 = (end__12606__auto___13166 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12607__auto___13167,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12606__auto___13166);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13072);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
