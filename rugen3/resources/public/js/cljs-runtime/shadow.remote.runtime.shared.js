goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13773){
var map__13774 = p__13773;
var map__13774__$1 = cljs.core.__destructure_map(map__13774);
var runtime = map__13774__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13774__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5162__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13957 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13957)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13786 = runtime;
var G__13787 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13957);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13786,G__13787) : shadow.remote.runtime.shared.process.call(null,G__13786,G__13787));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13797,res){
var map__13799 = p__13797;
var map__13799__$1 = cljs.core.__destructure_map(map__13799);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13799__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13799__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13800 = res;
var G__13800__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13800,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13800);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13800__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13800__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13805 = arguments.length;
switch (G__13805) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13809,msg,handlers,timeout_after_ms){
var map__13810 = p__13809;
var map__13810__$1 = cljs.core.__destructure_map(map__13810);
var runtime = map__13810__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13810__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___14009 = arguments.length;
var i__5898__auto___14010 = (0);
while(true){
if((i__5898__auto___14010 < len__5897__auto___14009)){
args__5903__auto__.push((arguments[i__5898__auto___14010]));

var G__14015 = (i__5898__auto___14010 + (1));
i__5898__auto___14010 = G__14015;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13827,ev,args){
var map__13828 = p__13827;
var map__13828__$1 = cljs.core.__destructure_map(map__13828);
var runtime = map__13828__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13828__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13829 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13832 = null;
var count__13833 = (0);
var i__13834 = (0);
while(true){
if((i__13834 < count__13833)){
var ext = chunk__13832.cljs$core$IIndexed$_nth$arity$2(null,i__13834);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14034 = seq__13829;
var G__14035 = chunk__13832;
var G__14036 = count__13833;
var G__14037 = (i__13834 + (1));
seq__13829 = G__14034;
chunk__13832 = G__14035;
count__13833 = G__14036;
i__13834 = G__14037;
continue;
} else {
var G__14040 = seq__13829;
var G__14041 = chunk__13832;
var G__14042 = count__13833;
var G__14043 = (i__13834 + (1));
seq__13829 = G__14040;
chunk__13832 = G__14041;
count__13833 = G__14042;
i__13834 = G__14043;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__13829);
if(temp__5825__auto__){
var seq__13829__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13829__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__13829__$1);
var G__14045 = cljs.core.chunk_rest(seq__13829__$1);
var G__14046 = c__5694__auto__;
var G__14047 = cljs.core.count(c__5694__auto__);
var G__14048 = (0);
seq__13829 = G__14045;
chunk__13832 = G__14046;
count__13833 = G__14047;
i__13834 = G__14048;
continue;
} else {
var ext = cljs.core.first(seq__13829__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14053 = cljs.core.next(seq__13829__$1);
var G__14054 = null;
var G__14055 = (0);
var G__14056 = (0);
seq__13829 = G__14053;
chunk__13832 = G__14054;
count__13833 = G__14055;
i__13834 = G__14056;
continue;
} else {
var G__14058 = cljs.core.next(seq__13829__$1);
var G__14059 = null;
var G__14060 = (0);
var G__14061 = (0);
seq__13829 = G__14058;
chunk__13832 = G__14059;
count__13833 = G__14060;
i__13834 = G__14061;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13824){
var G__13825 = cljs.core.first(seq13824);
var seq13824__$1 = cljs.core.next(seq13824);
var G__13826 = cljs.core.first(seq13824__$1);
var seq13824__$2 = cljs.core.next(seq13824__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13825,G__13826,seq13824__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13848,p__13849){
var map__13850 = p__13848;
var map__13850__$1 = cljs.core.__destructure_map(map__13850);
var runtime = map__13850__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13850__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13851 = p__13849;
var map__13851__$1 = cljs.core.__destructure_map(map__13851);
var msg = map__13851__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13851__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__13856 = cljs.core.deref(state_ref);
var map__13856__$1 = cljs.core.__destructure_map(map__13856);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13856__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13856__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13860,msg){
var map__13861 = p__13860;
var map__13861__$1 = cljs.core.__destructure_map(map__13861);
var runtime = map__13861__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13861__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13862,key,p__13863){
var map__13864 = p__13862;
var map__13864__$1 = cljs.core.__destructure_map(map__13864);
var state = map__13864__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13864__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13865 = p__13863;
var map__13865__$1 = cljs.core.__destructure_map(map__13865);
var spec = map__13865__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13865__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13865__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13872,key,spec){
var map__13873 = p__13872;
var map__13873__$1 = cljs.core.__destructure_map(map__13873);
var runtime = map__13873__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13873__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___14154 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___14154 == null)){
} else {
var on_welcome_14155 = temp__5829__auto___14154;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14155.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14155.cljs$core$IFn$_invoke$arity$0() : on_welcome_14155.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13876_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13876_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13877_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13877_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13878_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13878_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13879_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13879_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13880_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13880_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13892,key){
var map__13897 = p__13892;
var map__13897__$1 = cljs.core.__destructure_map(map__13897);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13897__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13913,msg){
var map__13914 = p__13913;
var map__13914__$1 = cljs.core.__destructure_map(map__13914);
var runtime = map__13914__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13914__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13922,p__13923){
var map__13924 = p__13922;
var map__13924__$1 = cljs.core.__destructure_map(map__13924);
var runtime = map__13924__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13924__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13925 = p__13923;
var map__13925__$1 = cljs.core.__destructure_map(map__13925);
var msg = map__13925__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13925__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13925__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13926 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13928 = null;
var count__13929 = (0);
var i__13930 = (0);
while(true){
if((i__13930 < count__13929)){
var map__13941 = chunk__13928.cljs$core$IIndexed$_nth$arity$2(null,i__13930);
var map__13941__$1 = cljs.core.__destructure_map(map__13941);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13941__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14215 = seq__13926;
var G__14216 = chunk__13928;
var G__14217 = count__13929;
var G__14218 = (i__13930 + (1));
seq__13926 = G__14215;
chunk__13928 = G__14216;
count__13929 = G__14217;
i__13930 = G__14218;
continue;
} else {
var G__14221 = seq__13926;
var G__14222 = chunk__13928;
var G__14223 = count__13929;
var G__14224 = (i__13930 + (1));
seq__13926 = G__14221;
chunk__13928 = G__14222;
count__13929 = G__14223;
i__13930 = G__14224;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__13926);
if(temp__5825__auto__){
var seq__13926__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13926__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__13926__$1);
var G__14230 = cljs.core.chunk_rest(seq__13926__$1);
var G__14231 = c__5694__auto__;
var G__14232 = cljs.core.count(c__5694__auto__);
var G__14233 = (0);
seq__13926 = G__14230;
chunk__13928 = G__14231;
count__13929 = G__14232;
i__13930 = G__14233;
continue;
} else {
var map__13945 = cljs.core.first(seq__13926__$1);
var map__13945__$1 = cljs.core.__destructure_map(map__13945);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13945__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14237 = cljs.core.next(seq__13926__$1);
var G__14238 = null;
var G__14239 = (0);
var G__14240 = (0);
seq__13926 = G__14237;
chunk__13928 = G__14238;
count__13929 = G__14239;
i__13930 = G__14240;
continue;
} else {
var G__14241 = cljs.core.next(seq__13926__$1);
var G__14242 = null;
var G__14243 = (0);
var G__14244 = (0);
seq__13926 = G__14241;
chunk__13928 = G__14242;
count__13929 = G__14243;
i__13930 = G__14244;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
