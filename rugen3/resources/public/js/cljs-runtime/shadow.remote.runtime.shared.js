goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14084){
var map__14085 = p__14084;
var map__14085__$1 = cljs.core.__destructure_map(map__14085);
var runtime = map__14085__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14085__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14281 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14281)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14095 = runtime;
var G__14096 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14281);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14095,G__14096) : shadow.remote.runtime.shared.process.call(null, G__14095,G__14096));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14097,res){
var map__14098 = p__14097;
var map__14098__$1 = cljs.core.__destructure_map(map__14098);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14098__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14098__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14099 = res;
var G__14099__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14099,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14099);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14099__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14099__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14105 = arguments.length;
switch (G__14105) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14113,msg,handlers,timeout_after_ms){
var map__14114 = p__14113;
var map__14114__$1 = cljs.core.__destructure_map(map__14114);
var runtime = map__14114__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14114__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var args__5732__auto__ = [];
var len__5726__auto___14306 = arguments.length;
var i__5727__auto___14307 = (0);
while(true){
if((i__5727__auto___14307 < len__5726__auto___14306)){
args__5732__auto__.push((arguments[i__5727__auto___14307]));

var G__14309 = (i__5727__auto___14307 + (1));
i__5727__auto___14307 = G__14309;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14121,ev,args){
var map__14122 = p__14121;
var map__14122__$1 = cljs.core.__destructure_map(map__14122);
var runtime = map__14122__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14122__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14123 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14126 = null;
var count__14127 = (0);
var i__14128 = (0);
while(true){
if((i__14128 < count__14127)){
var ext = chunk__14126.cljs$core$IIndexed$_nth$arity$2(null, i__14128);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14325 = seq__14123;
var G__14326 = chunk__14126;
var G__14327 = count__14127;
var G__14328 = (i__14128 + (1));
seq__14123 = G__14325;
chunk__14126 = G__14326;
count__14127 = G__14327;
i__14128 = G__14328;
continue;
} else {
var G__14330 = seq__14123;
var G__14331 = chunk__14126;
var G__14332 = count__14127;
var G__14333 = (i__14128 + (1));
seq__14123 = G__14330;
chunk__14126 = G__14331;
count__14127 = G__14332;
i__14128 = G__14333;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14123);
if(temp__5804__auto__){
var seq__14123__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14123__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14123__$1);
var G__14341 = cljs.core.chunk_rest(seq__14123__$1);
var G__14342 = c__5525__auto__;
var G__14343 = cljs.core.count(c__5525__auto__);
var G__14344 = (0);
seq__14123 = G__14341;
chunk__14126 = G__14342;
count__14127 = G__14343;
i__14128 = G__14344;
continue;
} else {
var ext = cljs.core.first(seq__14123__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14348 = cljs.core.next(seq__14123__$1);
var G__14349 = null;
var G__14350 = (0);
var G__14351 = (0);
seq__14123 = G__14348;
chunk__14126 = G__14349;
count__14127 = G__14350;
i__14128 = G__14351;
continue;
} else {
var G__14353 = cljs.core.next(seq__14123__$1);
var G__14354 = null;
var G__14355 = (0);
var G__14356 = (0);
seq__14123 = G__14353;
chunk__14126 = G__14354;
count__14127 = G__14355;
i__14128 = G__14356;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14118){
var G__14119 = cljs.core.first(seq14118);
var seq14118__$1 = cljs.core.next(seq14118);
var G__14120 = cljs.core.first(seq14118__$1);
var seq14118__$2 = cljs.core.next(seq14118__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14119,G__14120,seq14118__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14150,p__14151){
var map__14153 = p__14150;
var map__14153__$1 = cljs.core.__destructure_map(map__14153);
var runtime = map__14153__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14153__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14154 = p__14151;
var map__14154__$1 = cljs.core.__destructure_map(map__14154);
var msg = map__14154__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14154__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14160 = cljs.core.deref(state_ref);
var map__14160__$1 = cljs.core.__destructure_map(map__14160);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14160__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14160__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14177,msg){
var map__14178 = p__14177;
var map__14178__$1 = cljs.core.__destructure_map(map__14178);
var runtime = map__14178__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14178__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14181,key,p__14182){
var map__14187 = p__14181;
var map__14187__$1 = cljs.core.__destructure_map(map__14187);
var state = map__14187__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14187__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14188 = p__14182;
var map__14188__$1 = cljs.core.__destructure_map(map__14188);
var spec = map__14188__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14188__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14188__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14190,key,spec){
var map__14191 = p__14190;
var map__14191__$1 = cljs.core.__destructure_map(map__14191);
var runtime = map__14191__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14191__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14413 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14413 == null)){
} else {
var on_welcome_14418 = temp__5808__auto___14413;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14418.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14418.cljs$core$IFn$_invoke$arity$0() : on_welcome_14418.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14197_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14197_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14198_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14198_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14199_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14199_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14200_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14200_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14205_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14205_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14220,key){
var map__14222 = p__14220;
var map__14222__$1 = cljs.core.__destructure_map(map__14222);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14222__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14225,msg){
var map__14226 = p__14225;
var map__14226__$1 = cljs.core.__destructure_map(map__14226);
var runtime = map__14226__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14226__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14237,p__14238){
var map__14239 = p__14237;
var map__14239__$1 = cljs.core.__destructure_map(map__14239);
var runtime = map__14239__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14239__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14240 = p__14238;
var map__14240__$1 = cljs.core.__destructure_map(map__14240);
var msg = map__14240__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14240__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14240__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
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
var seq__14245 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14247 = null;
var count__14248 = (0);
var i__14249 = (0);
while(true){
if((i__14249 < count__14248)){
var map__14264 = chunk__14247.cljs$core$IIndexed$_nth$arity$2(null, i__14249);
var map__14264__$1 = cljs.core.__destructure_map(map__14264);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14264__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14460 = seq__14245;
var G__14461 = chunk__14247;
var G__14462 = count__14248;
var G__14463 = (i__14249 + (1));
seq__14245 = G__14460;
chunk__14247 = G__14461;
count__14248 = G__14462;
i__14249 = G__14463;
continue;
} else {
var G__14464 = seq__14245;
var G__14465 = chunk__14247;
var G__14466 = count__14248;
var G__14467 = (i__14249 + (1));
seq__14245 = G__14464;
chunk__14247 = G__14465;
count__14248 = G__14466;
i__14249 = G__14467;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14245);
if(temp__5804__auto__){
var seq__14245__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14245__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14245__$1);
var G__14478 = cljs.core.chunk_rest(seq__14245__$1);
var G__14479 = c__5525__auto__;
var G__14480 = cljs.core.count(c__5525__auto__);
var G__14481 = (0);
seq__14245 = G__14478;
chunk__14247 = G__14479;
count__14248 = G__14480;
i__14249 = G__14481;
continue;
} else {
var map__14269 = cljs.core.first(seq__14245__$1);
var map__14269__$1 = cljs.core.__destructure_map(map__14269);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14269__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14501 = cljs.core.next(seq__14245__$1);
var G__14502 = null;
var G__14503 = (0);
var G__14504 = (0);
seq__14245 = G__14501;
chunk__14247 = G__14502;
count__14248 = G__14503;
i__14249 = G__14504;
continue;
} else {
var G__14509 = cljs.core.next(seq__14245__$1);
var G__14510 = null;
var G__14511 = (0);
var G__14512 = (0);
seq__14245 = G__14509;
chunk__14247 = G__14510;
count__14248 = G__14511;
i__14249 = G__14512;
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
