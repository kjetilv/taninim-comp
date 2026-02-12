goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21656 = arguments.length;
var i__5727__auto___21657 = (0);
while(true){
if((i__5727__auto___21657 < len__5726__auto___21656)){
args__5732__auto__.push((arguments[i__5727__auto___21657]));

var G__21658 = (i__5727__auto___21657 + (1));
i__5727__auto___21657 = G__21658;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21222){
var G__21223 = cljs.core.first(seq21222);
var seq21222__$1 = cljs.core.next(seq21222);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21223,seq21222__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21230 = cljs.core.seq(sources);
var chunk__21231 = null;
var count__21232 = (0);
var i__21233 = (0);
while(true){
if((i__21233 < count__21232)){
var map__21243 = chunk__21231.cljs$core$IIndexed$_nth$arity$2(null, i__21233);
var map__21243__$1 = cljs.core.__destructure_map(map__21243);
var src = map__21243__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21243__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21243__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21243__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21243__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21244){var e_21659 = e21244;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21659);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21659.message)].join('')));
}

var G__21660 = seq__21230;
var G__21661 = chunk__21231;
var G__21662 = count__21232;
var G__21663 = (i__21233 + (1));
seq__21230 = G__21660;
chunk__21231 = G__21661;
count__21232 = G__21662;
i__21233 = G__21663;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21230);
if(temp__5804__auto__){
var seq__21230__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21230__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21230__$1);
var G__21664 = cljs.core.chunk_rest(seq__21230__$1);
var G__21665 = c__5525__auto__;
var G__21666 = cljs.core.count(c__5525__auto__);
var G__21667 = (0);
seq__21230 = G__21664;
chunk__21231 = G__21665;
count__21232 = G__21666;
i__21233 = G__21667;
continue;
} else {
var map__21247 = cljs.core.first(seq__21230__$1);
var map__21247__$1 = cljs.core.__destructure_map(map__21247);
var src = map__21247__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21247__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21247__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21247__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21247__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21248){var e_21668 = e21248;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21668);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21668.message)].join('')));
}

var G__21669 = cljs.core.next(seq__21230__$1);
var G__21670 = null;
var G__21671 = (0);
var G__21672 = (0);
seq__21230 = G__21669;
chunk__21231 = G__21670;
count__21232 = G__21671;
i__21233 = G__21672;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21253 = cljs.core.seq(js_requires);
var chunk__21254 = null;
var count__21255 = (0);
var i__21256 = (0);
while(true){
if((i__21256 < count__21255)){
var js_ns = chunk__21254.cljs$core$IIndexed$_nth$arity$2(null, i__21256);
var require_str_21673 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21673);


var G__21674 = seq__21253;
var G__21675 = chunk__21254;
var G__21676 = count__21255;
var G__21677 = (i__21256 + (1));
seq__21253 = G__21674;
chunk__21254 = G__21675;
count__21255 = G__21676;
i__21256 = G__21677;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21253);
if(temp__5804__auto__){
var seq__21253__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21253__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21253__$1);
var G__21678 = cljs.core.chunk_rest(seq__21253__$1);
var G__21679 = c__5525__auto__;
var G__21680 = cljs.core.count(c__5525__auto__);
var G__21681 = (0);
seq__21253 = G__21678;
chunk__21254 = G__21679;
count__21255 = G__21680;
i__21256 = G__21681;
continue;
} else {
var js_ns = cljs.core.first(seq__21253__$1);
var require_str_21682 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21682);


var G__21683 = cljs.core.next(seq__21253__$1);
var G__21684 = null;
var G__21685 = (0);
var G__21686 = (0);
seq__21253 = G__21683;
chunk__21254 = G__21684;
count__21255 = G__21685;
i__21256 = G__21686;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21259){
var map__21260 = p__21259;
var map__21260__$1 = cljs.core.__destructure_map(map__21260);
var msg = map__21260__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21260__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21260__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21261(s__21262){
return (new cljs.core.LazySeq(null,(function (){
var s__21262__$1 = s__21262;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21262__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21267 = cljs.core.first(xs__6360__auto__);
var map__21267__$1 = cljs.core.__destructure_map(map__21267);
var src = map__21267__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21267__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21267__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21262__$1,map__21267,map__21267__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21260,map__21260__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21261_$_iter__21263(s__21264){
return (new cljs.core.LazySeq(null,((function (s__21262__$1,map__21267,map__21267__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21260,map__21260__$1,msg,info,reload_info){
return (function (){
var s__21264__$1 = s__21264;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21264__$1);
if(temp__5804__auto____$1){
var s__21264__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21264__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21264__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21266 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21265 = (0);
while(true){
if((i__21265 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21265);
cljs.core.chunk_append(b__21266,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21687 = (i__21265 + (1));
i__21265 = G__21687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21266),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21261_$_iter__21263(cljs.core.chunk_rest(s__21264__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21266),null);
}
} else {
var warning = cljs.core.first(s__21264__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21261_$_iter__21263(cljs.core.rest(s__21264__$2)));
}
} else {
return null;
}
break;
}
});})(s__21262__$1,map__21267,map__21267__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21260,map__21260__$1,msg,info,reload_info))
,null,null));
});})(s__21262__$1,map__21267,map__21267__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21260,map__21260__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21261(cljs.core.rest(s__21262__$1)));
} else {
var G__21688 = cljs.core.rest(s__21262__$1);
s__21262__$1 = G__21688;
continue;
}
} else {
var G__21689 = cljs.core.rest(s__21262__$1);
s__21262__$1 = G__21689;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21268_21690 = cljs.core.seq(warnings);
var chunk__21269_21691 = null;
var count__21270_21692 = (0);
var i__21271_21693 = (0);
while(true){
if((i__21271_21693 < count__21270_21692)){
var map__21280_21694 = chunk__21269_21691.cljs$core$IIndexed$_nth$arity$2(null, i__21271_21693);
var map__21280_21695__$1 = cljs.core.__destructure_map(map__21280_21694);
var w_21696 = map__21280_21695__$1;
var msg_21697__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21280_21695__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21280_21695__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21280_21695__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21280_21695__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21700)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21698),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21699),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21697__$1)].join(''));


var G__21701 = seq__21268_21690;
var G__21702 = chunk__21269_21691;
var G__21703 = count__21270_21692;
var G__21704 = (i__21271_21693 + (1));
seq__21268_21690 = G__21701;
chunk__21269_21691 = G__21702;
count__21270_21692 = G__21703;
i__21271_21693 = G__21704;
continue;
} else {
var temp__5804__auto___21705 = cljs.core.seq(seq__21268_21690);
if(temp__5804__auto___21705){
var seq__21268_21706__$1 = temp__5804__auto___21705;
if(cljs.core.chunked_seq_QMARK_(seq__21268_21706__$1)){
var c__5525__auto___21707 = cljs.core.chunk_first(seq__21268_21706__$1);
var G__21708 = cljs.core.chunk_rest(seq__21268_21706__$1);
var G__21709 = c__5525__auto___21707;
var G__21710 = cljs.core.count(c__5525__auto___21707);
var G__21711 = (0);
seq__21268_21690 = G__21708;
chunk__21269_21691 = G__21709;
count__21270_21692 = G__21710;
i__21271_21693 = G__21711;
continue;
} else {
var map__21281_21712 = cljs.core.first(seq__21268_21706__$1);
var map__21281_21713__$1 = cljs.core.__destructure_map(map__21281_21712);
var w_21714 = map__21281_21713__$1;
var msg_21715__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21281_21713__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21281_21713__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21281_21713__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21281_21713__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21718)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21716),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21717),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21715__$1)].join(''));


var G__21719 = cljs.core.next(seq__21268_21706__$1);
var G__21720 = null;
var G__21721 = (0);
var G__21722 = (0);
seq__21268_21690 = G__21719;
chunk__21269_21691 = G__21720;
count__21270_21692 = G__21721;
i__21271_21693 = G__21722;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21258_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21258_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21286){
var map__21287 = p__21286;
var map__21287__$1 = cljs.core.__destructure_map(map__21287);
var msg = map__21287__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21287__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21287__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21288 = cljs.core.seq(updates);
var chunk__21290 = null;
var count__21291 = (0);
var i__21292 = (0);
while(true){
if((i__21292 < count__21291)){
var path = chunk__21290.cljs$core$IIndexed$_nth$arity$2(null, i__21292);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21500_21723 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21504_21724 = null;
var count__21505_21725 = (0);
var i__21506_21726 = (0);
while(true){
if((i__21506_21726 < count__21505_21725)){
var node_21727 = chunk__21504_21724.cljs$core$IIndexed$_nth$arity$2(null, i__21506_21726);
if(cljs.core.not(node_21727.shadow$old)){
var path_match_21728 = shadow.cljs.devtools.client.browser.match_paths(node_21727.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21728)){
var new_link_21729 = (function (){var G__21533 = node_21727.cloneNode(true);
G__21533.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21728),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21533;
})();
(node_21727.shadow$old = true);

(new_link_21729.onload = ((function (seq__21500_21723,chunk__21504_21724,count__21505_21725,i__21506_21726,seq__21288,chunk__21290,count__21291,i__21292,new_link_21729,path_match_21728,node_21727,path,map__21287,map__21287__$1,msg,updates,reload_info){
return (function (e){
var seq__21534_21730 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21536_21731 = null;
var count__21537_21732 = (0);
var i__21538_21733 = (0);
while(true){
if((i__21538_21733 < count__21537_21732)){
var map__21542_21734 = chunk__21536_21731.cljs$core$IIndexed$_nth$arity$2(null, i__21538_21733);
var map__21542_21735__$1 = cljs.core.__destructure_map(map__21542_21734);
var task_21736 = map__21542_21735__$1;
var fn_str_21737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21542_21735__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21542_21735__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21739 = goog.getObjectByName(fn_str_21737,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21738)].join(''));

(fn_obj_21739.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21739.cljs$core$IFn$_invoke$arity$2(path,new_link_21729) : fn_obj_21739.call(null, path,new_link_21729));


var G__21740 = seq__21534_21730;
var G__21741 = chunk__21536_21731;
var G__21742 = count__21537_21732;
var G__21743 = (i__21538_21733 + (1));
seq__21534_21730 = G__21740;
chunk__21536_21731 = G__21741;
count__21537_21732 = G__21742;
i__21538_21733 = G__21743;
continue;
} else {
var temp__5804__auto___21744 = cljs.core.seq(seq__21534_21730);
if(temp__5804__auto___21744){
var seq__21534_21745__$1 = temp__5804__auto___21744;
if(cljs.core.chunked_seq_QMARK_(seq__21534_21745__$1)){
var c__5525__auto___21746 = cljs.core.chunk_first(seq__21534_21745__$1);
var G__21747 = cljs.core.chunk_rest(seq__21534_21745__$1);
var G__21748 = c__5525__auto___21746;
var G__21749 = cljs.core.count(c__5525__auto___21746);
var G__21750 = (0);
seq__21534_21730 = G__21747;
chunk__21536_21731 = G__21748;
count__21537_21732 = G__21749;
i__21538_21733 = G__21750;
continue;
} else {
var map__21543_21751 = cljs.core.first(seq__21534_21745__$1);
var map__21543_21752__$1 = cljs.core.__destructure_map(map__21543_21751);
var task_21753 = map__21543_21752__$1;
var fn_str_21754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21543_21752__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21543_21752__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21756 = goog.getObjectByName(fn_str_21754,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21755)].join(''));

(fn_obj_21756.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21756.cljs$core$IFn$_invoke$arity$2(path,new_link_21729) : fn_obj_21756.call(null, path,new_link_21729));


var G__21757 = cljs.core.next(seq__21534_21745__$1);
var G__21758 = null;
var G__21759 = (0);
var G__21760 = (0);
seq__21534_21730 = G__21757;
chunk__21536_21731 = G__21758;
count__21537_21732 = G__21759;
i__21538_21733 = G__21760;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21727);
});})(seq__21500_21723,chunk__21504_21724,count__21505_21725,i__21506_21726,seq__21288,chunk__21290,count__21291,i__21292,new_link_21729,path_match_21728,node_21727,path,map__21287,map__21287__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21728], 0));

goog.dom.insertSiblingAfter(new_link_21729,node_21727);


var G__21761 = seq__21500_21723;
var G__21762 = chunk__21504_21724;
var G__21763 = count__21505_21725;
var G__21764 = (i__21506_21726 + (1));
seq__21500_21723 = G__21761;
chunk__21504_21724 = G__21762;
count__21505_21725 = G__21763;
i__21506_21726 = G__21764;
continue;
} else {
var G__21765 = seq__21500_21723;
var G__21766 = chunk__21504_21724;
var G__21767 = count__21505_21725;
var G__21768 = (i__21506_21726 + (1));
seq__21500_21723 = G__21765;
chunk__21504_21724 = G__21766;
count__21505_21725 = G__21767;
i__21506_21726 = G__21768;
continue;
}
} else {
var G__21769 = seq__21500_21723;
var G__21770 = chunk__21504_21724;
var G__21771 = count__21505_21725;
var G__21772 = (i__21506_21726 + (1));
seq__21500_21723 = G__21769;
chunk__21504_21724 = G__21770;
count__21505_21725 = G__21771;
i__21506_21726 = G__21772;
continue;
}
} else {
var temp__5804__auto___21773 = cljs.core.seq(seq__21500_21723);
if(temp__5804__auto___21773){
var seq__21500_21774__$1 = temp__5804__auto___21773;
if(cljs.core.chunked_seq_QMARK_(seq__21500_21774__$1)){
var c__5525__auto___21775 = cljs.core.chunk_first(seq__21500_21774__$1);
var G__21776 = cljs.core.chunk_rest(seq__21500_21774__$1);
var G__21777 = c__5525__auto___21775;
var G__21778 = cljs.core.count(c__5525__auto___21775);
var G__21779 = (0);
seq__21500_21723 = G__21776;
chunk__21504_21724 = G__21777;
count__21505_21725 = G__21778;
i__21506_21726 = G__21779;
continue;
} else {
var node_21780 = cljs.core.first(seq__21500_21774__$1);
if(cljs.core.not(node_21780.shadow$old)){
var path_match_21781 = shadow.cljs.devtools.client.browser.match_paths(node_21780.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21781)){
var new_link_21782 = (function (){var G__21544 = node_21780.cloneNode(true);
G__21544.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21781),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21544;
})();
(node_21780.shadow$old = true);

(new_link_21782.onload = ((function (seq__21500_21723,chunk__21504_21724,count__21505_21725,i__21506_21726,seq__21288,chunk__21290,count__21291,i__21292,new_link_21782,path_match_21781,node_21780,seq__21500_21774__$1,temp__5804__auto___21773,path,map__21287,map__21287__$1,msg,updates,reload_info){
return (function (e){
var seq__21545_21783 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21547_21784 = null;
var count__21548_21785 = (0);
var i__21549_21786 = (0);
while(true){
if((i__21549_21786 < count__21548_21785)){
var map__21553_21787 = chunk__21547_21784.cljs$core$IIndexed$_nth$arity$2(null, i__21549_21786);
var map__21553_21788__$1 = cljs.core.__destructure_map(map__21553_21787);
var task_21789 = map__21553_21788__$1;
var fn_str_21790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21553_21788__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21553_21788__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21792 = goog.getObjectByName(fn_str_21790,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21791)].join(''));

(fn_obj_21792.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21792.cljs$core$IFn$_invoke$arity$2(path,new_link_21782) : fn_obj_21792.call(null, path,new_link_21782));


var G__21793 = seq__21545_21783;
var G__21794 = chunk__21547_21784;
var G__21795 = count__21548_21785;
var G__21796 = (i__21549_21786 + (1));
seq__21545_21783 = G__21793;
chunk__21547_21784 = G__21794;
count__21548_21785 = G__21795;
i__21549_21786 = G__21796;
continue;
} else {
var temp__5804__auto___21797__$1 = cljs.core.seq(seq__21545_21783);
if(temp__5804__auto___21797__$1){
var seq__21545_21798__$1 = temp__5804__auto___21797__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21545_21798__$1)){
var c__5525__auto___21799 = cljs.core.chunk_first(seq__21545_21798__$1);
var G__21800 = cljs.core.chunk_rest(seq__21545_21798__$1);
var G__21801 = c__5525__auto___21799;
var G__21802 = cljs.core.count(c__5525__auto___21799);
var G__21803 = (0);
seq__21545_21783 = G__21800;
chunk__21547_21784 = G__21801;
count__21548_21785 = G__21802;
i__21549_21786 = G__21803;
continue;
} else {
var map__21554_21804 = cljs.core.first(seq__21545_21798__$1);
var map__21554_21805__$1 = cljs.core.__destructure_map(map__21554_21804);
var task_21806 = map__21554_21805__$1;
var fn_str_21807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21554_21805__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21554_21805__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21809 = goog.getObjectByName(fn_str_21807,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21808)].join(''));

(fn_obj_21809.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21809.cljs$core$IFn$_invoke$arity$2(path,new_link_21782) : fn_obj_21809.call(null, path,new_link_21782));


var G__21810 = cljs.core.next(seq__21545_21798__$1);
var G__21811 = null;
var G__21812 = (0);
var G__21813 = (0);
seq__21545_21783 = G__21810;
chunk__21547_21784 = G__21811;
count__21548_21785 = G__21812;
i__21549_21786 = G__21813;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21780);
});})(seq__21500_21723,chunk__21504_21724,count__21505_21725,i__21506_21726,seq__21288,chunk__21290,count__21291,i__21292,new_link_21782,path_match_21781,node_21780,seq__21500_21774__$1,temp__5804__auto___21773,path,map__21287,map__21287__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21781], 0));

goog.dom.insertSiblingAfter(new_link_21782,node_21780);


var G__21814 = cljs.core.next(seq__21500_21774__$1);
var G__21815 = null;
var G__21816 = (0);
var G__21817 = (0);
seq__21500_21723 = G__21814;
chunk__21504_21724 = G__21815;
count__21505_21725 = G__21816;
i__21506_21726 = G__21817;
continue;
} else {
var G__21818 = cljs.core.next(seq__21500_21774__$1);
var G__21819 = null;
var G__21820 = (0);
var G__21821 = (0);
seq__21500_21723 = G__21818;
chunk__21504_21724 = G__21819;
count__21505_21725 = G__21820;
i__21506_21726 = G__21821;
continue;
}
} else {
var G__21822 = cljs.core.next(seq__21500_21774__$1);
var G__21823 = null;
var G__21824 = (0);
var G__21825 = (0);
seq__21500_21723 = G__21822;
chunk__21504_21724 = G__21823;
count__21505_21725 = G__21824;
i__21506_21726 = G__21825;
continue;
}
}
} else {
}
}
break;
}


var G__21826 = seq__21288;
var G__21827 = chunk__21290;
var G__21828 = count__21291;
var G__21829 = (i__21292 + (1));
seq__21288 = G__21826;
chunk__21290 = G__21827;
count__21291 = G__21828;
i__21292 = G__21829;
continue;
} else {
var G__21830 = seq__21288;
var G__21831 = chunk__21290;
var G__21832 = count__21291;
var G__21833 = (i__21292 + (1));
seq__21288 = G__21830;
chunk__21290 = G__21831;
count__21291 = G__21832;
i__21292 = G__21833;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21288);
if(temp__5804__auto__){
var seq__21288__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21288__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21288__$1);
var G__21834 = cljs.core.chunk_rest(seq__21288__$1);
var G__21835 = c__5525__auto__;
var G__21836 = cljs.core.count(c__5525__auto__);
var G__21837 = (0);
seq__21288 = G__21834;
chunk__21290 = G__21835;
count__21291 = G__21836;
i__21292 = G__21837;
continue;
} else {
var path = cljs.core.first(seq__21288__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21557_21838 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21561_21839 = null;
var count__21562_21840 = (0);
var i__21563_21841 = (0);
while(true){
if((i__21563_21841 < count__21562_21840)){
var node_21842 = chunk__21561_21839.cljs$core$IIndexed$_nth$arity$2(null, i__21563_21841);
if(cljs.core.not(node_21842.shadow$old)){
var path_match_21843 = shadow.cljs.devtools.client.browser.match_paths(node_21842.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21843)){
var new_link_21844 = (function (){var G__21600 = node_21842.cloneNode(true);
G__21600.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21843),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21600;
})();
(node_21842.shadow$old = true);

(new_link_21844.onload = ((function (seq__21557_21838,chunk__21561_21839,count__21562_21840,i__21563_21841,seq__21288,chunk__21290,count__21291,i__21292,new_link_21844,path_match_21843,node_21842,path,seq__21288__$1,temp__5804__auto__,map__21287,map__21287__$1,msg,updates,reload_info){
return (function (e){
var seq__21602_21845 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21604_21846 = null;
var count__21605_21847 = (0);
var i__21606_21848 = (0);
while(true){
if((i__21606_21848 < count__21605_21847)){
var map__21611_21849 = chunk__21604_21846.cljs$core$IIndexed$_nth$arity$2(null, i__21606_21848);
var map__21611_21850__$1 = cljs.core.__destructure_map(map__21611_21849);
var task_21851 = map__21611_21850__$1;
var fn_str_21852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21611_21850__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21611_21850__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21854 = goog.getObjectByName(fn_str_21852,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21853)].join(''));

(fn_obj_21854.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21854.cljs$core$IFn$_invoke$arity$2(path,new_link_21844) : fn_obj_21854.call(null, path,new_link_21844));


var G__21855 = seq__21602_21845;
var G__21856 = chunk__21604_21846;
var G__21857 = count__21605_21847;
var G__21858 = (i__21606_21848 + (1));
seq__21602_21845 = G__21855;
chunk__21604_21846 = G__21856;
count__21605_21847 = G__21857;
i__21606_21848 = G__21858;
continue;
} else {
var temp__5804__auto___21859__$1 = cljs.core.seq(seq__21602_21845);
if(temp__5804__auto___21859__$1){
var seq__21602_21860__$1 = temp__5804__auto___21859__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21602_21860__$1)){
var c__5525__auto___21861 = cljs.core.chunk_first(seq__21602_21860__$1);
var G__21862 = cljs.core.chunk_rest(seq__21602_21860__$1);
var G__21863 = c__5525__auto___21861;
var G__21864 = cljs.core.count(c__5525__auto___21861);
var G__21865 = (0);
seq__21602_21845 = G__21862;
chunk__21604_21846 = G__21863;
count__21605_21847 = G__21864;
i__21606_21848 = G__21865;
continue;
} else {
var map__21614_21866 = cljs.core.first(seq__21602_21860__$1);
var map__21614_21867__$1 = cljs.core.__destructure_map(map__21614_21866);
var task_21868 = map__21614_21867__$1;
var fn_str_21869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614_21867__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614_21867__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21871 = goog.getObjectByName(fn_str_21869,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21870)].join(''));

(fn_obj_21871.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21871.cljs$core$IFn$_invoke$arity$2(path,new_link_21844) : fn_obj_21871.call(null, path,new_link_21844));


var G__21872 = cljs.core.next(seq__21602_21860__$1);
var G__21873 = null;
var G__21874 = (0);
var G__21875 = (0);
seq__21602_21845 = G__21872;
chunk__21604_21846 = G__21873;
count__21605_21847 = G__21874;
i__21606_21848 = G__21875;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21842);
});})(seq__21557_21838,chunk__21561_21839,count__21562_21840,i__21563_21841,seq__21288,chunk__21290,count__21291,i__21292,new_link_21844,path_match_21843,node_21842,path,seq__21288__$1,temp__5804__auto__,map__21287,map__21287__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21843], 0));

goog.dom.insertSiblingAfter(new_link_21844,node_21842);


var G__21876 = seq__21557_21838;
var G__21877 = chunk__21561_21839;
var G__21878 = count__21562_21840;
var G__21879 = (i__21563_21841 + (1));
seq__21557_21838 = G__21876;
chunk__21561_21839 = G__21877;
count__21562_21840 = G__21878;
i__21563_21841 = G__21879;
continue;
} else {
var G__21880 = seq__21557_21838;
var G__21881 = chunk__21561_21839;
var G__21882 = count__21562_21840;
var G__21883 = (i__21563_21841 + (1));
seq__21557_21838 = G__21880;
chunk__21561_21839 = G__21881;
count__21562_21840 = G__21882;
i__21563_21841 = G__21883;
continue;
}
} else {
var G__21884 = seq__21557_21838;
var G__21885 = chunk__21561_21839;
var G__21886 = count__21562_21840;
var G__21887 = (i__21563_21841 + (1));
seq__21557_21838 = G__21884;
chunk__21561_21839 = G__21885;
count__21562_21840 = G__21886;
i__21563_21841 = G__21887;
continue;
}
} else {
var temp__5804__auto___21888__$1 = cljs.core.seq(seq__21557_21838);
if(temp__5804__auto___21888__$1){
var seq__21557_21889__$1 = temp__5804__auto___21888__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21557_21889__$1)){
var c__5525__auto___21890 = cljs.core.chunk_first(seq__21557_21889__$1);
var G__21891 = cljs.core.chunk_rest(seq__21557_21889__$1);
var G__21892 = c__5525__auto___21890;
var G__21893 = cljs.core.count(c__5525__auto___21890);
var G__21894 = (0);
seq__21557_21838 = G__21891;
chunk__21561_21839 = G__21892;
count__21562_21840 = G__21893;
i__21563_21841 = G__21894;
continue;
} else {
var node_21895 = cljs.core.first(seq__21557_21889__$1);
if(cljs.core.not(node_21895.shadow$old)){
var path_match_21896 = shadow.cljs.devtools.client.browser.match_paths(node_21895.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21896)){
var new_link_21897 = (function (){var G__21615 = node_21895.cloneNode(true);
G__21615.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21896),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21615;
})();
(node_21895.shadow$old = true);

(new_link_21897.onload = ((function (seq__21557_21838,chunk__21561_21839,count__21562_21840,i__21563_21841,seq__21288,chunk__21290,count__21291,i__21292,new_link_21897,path_match_21896,node_21895,seq__21557_21889__$1,temp__5804__auto___21888__$1,path,seq__21288__$1,temp__5804__auto__,map__21287,map__21287__$1,msg,updates,reload_info){
return (function (e){
var seq__21616_21898 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21618_21899 = null;
var count__21619_21900 = (0);
var i__21620_21901 = (0);
while(true){
if((i__21620_21901 < count__21619_21900)){
var map__21624_21902 = chunk__21618_21899.cljs$core$IIndexed$_nth$arity$2(null, i__21620_21901);
var map__21624_21903__$1 = cljs.core.__destructure_map(map__21624_21902);
var task_21904 = map__21624_21903__$1;
var fn_str_21905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21624_21903__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21624_21903__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21907 = goog.getObjectByName(fn_str_21905,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21906)].join(''));

(fn_obj_21907.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21907.cljs$core$IFn$_invoke$arity$2(path,new_link_21897) : fn_obj_21907.call(null, path,new_link_21897));


var G__21908 = seq__21616_21898;
var G__21909 = chunk__21618_21899;
var G__21910 = count__21619_21900;
var G__21911 = (i__21620_21901 + (1));
seq__21616_21898 = G__21908;
chunk__21618_21899 = G__21909;
count__21619_21900 = G__21910;
i__21620_21901 = G__21911;
continue;
} else {
var temp__5804__auto___21912__$2 = cljs.core.seq(seq__21616_21898);
if(temp__5804__auto___21912__$2){
var seq__21616_21913__$1 = temp__5804__auto___21912__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21616_21913__$1)){
var c__5525__auto___21914 = cljs.core.chunk_first(seq__21616_21913__$1);
var G__21915 = cljs.core.chunk_rest(seq__21616_21913__$1);
var G__21916 = c__5525__auto___21914;
var G__21917 = cljs.core.count(c__5525__auto___21914);
var G__21918 = (0);
seq__21616_21898 = G__21915;
chunk__21618_21899 = G__21916;
count__21619_21900 = G__21917;
i__21620_21901 = G__21918;
continue;
} else {
var map__21630_21919 = cljs.core.first(seq__21616_21913__$1);
var map__21630_21920__$1 = cljs.core.__destructure_map(map__21630_21919);
var task_21921 = map__21630_21920__$1;
var fn_str_21922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21630_21920__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21630_21920__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21924 = goog.getObjectByName(fn_str_21922,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21923)].join(''));

(fn_obj_21924.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21924.cljs$core$IFn$_invoke$arity$2(path,new_link_21897) : fn_obj_21924.call(null, path,new_link_21897));


var G__21925 = cljs.core.next(seq__21616_21913__$1);
var G__21926 = null;
var G__21927 = (0);
var G__21928 = (0);
seq__21616_21898 = G__21925;
chunk__21618_21899 = G__21926;
count__21619_21900 = G__21927;
i__21620_21901 = G__21928;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21895);
});})(seq__21557_21838,chunk__21561_21839,count__21562_21840,i__21563_21841,seq__21288,chunk__21290,count__21291,i__21292,new_link_21897,path_match_21896,node_21895,seq__21557_21889__$1,temp__5804__auto___21888__$1,path,seq__21288__$1,temp__5804__auto__,map__21287,map__21287__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21896], 0));

goog.dom.insertSiblingAfter(new_link_21897,node_21895);


var G__21929 = cljs.core.next(seq__21557_21889__$1);
var G__21930 = null;
var G__21931 = (0);
var G__21932 = (0);
seq__21557_21838 = G__21929;
chunk__21561_21839 = G__21930;
count__21562_21840 = G__21931;
i__21563_21841 = G__21932;
continue;
} else {
var G__21933 = cljs.core.next(seq__21557_21889__$1);
var G__21934 = null;
var G__21935 = (0);
var G__21936 = (0);
seq__21557_21838 = G__21933;
chunk__21561_21839 = G__21934;
count__21562_21840 = G__21935;
i__21563_21841 = G__21936;
continue;
}
} else {
var G__21937 = cljs.core.next(seq__21557_21889__$1);
var G__21938 = null;
var G__21939 = (0);
var G__21940 = (0);
seq__21557_21838 = G__21937;
chunk__21561_21839 = G__21938;
count__21562_21840 = G__21939;
i__21563_21841 = G__21940;
continue;
}
}
} else {
}
}
break;
}


var G__21941 = cljs.core.next(seq__21288__$1);
var G__21942 = null;
var G__21943 = (0);
var G__21944 = (0);
seq__21288 = G__21941;
chunk__21290 = G__21942;
count__21291 = G__21943;
i__21292 = G__21944;
continue;
} else {
var G__21945 = cljs.core.next(seq__21288__$1);
var G__21946 = null;
var G__21947 = (0);
var G__21948 = (0);
seq__21288 = G__21945;
chunk__21290 = G__21946;
count__21291 = G__21947;
i__21292 = G__21948;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21636){
var map__21637 = p__21636;
var map__21637__$1 = cljs.core.__destructure_map(map__21637);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21637__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21638,done,error){
var map__21639 = p__21638;
var map__21639__$1 = cljs.core.__destructure_map(map__21639);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21639__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21640,done,error){
var map__21641 = p__21640;
var map__21641__$1 = cljs.core.__destructure_map(map__21641);
var msg = map__21641__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21641__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21641__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21641__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21642){
var map__21643 = p__21642;
var map__21643__$1 = cljs.core.__destructure_map(map__21643);
var src = map__21643__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21643__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21645 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21645) : done.call(null, G__21645));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21646){
var map__21647 = p__21646;
var map__21647__$1 = cljs.core.__destructure_map(map__21647);
var msg__$1 = map__21647__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21647__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21648){var ex = e21648;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21649){
var map__21650 = p__21649;
var map__21650__$1 = cljs.core.__destructure_map(map__21650);
var env = map__21650__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21650__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21651){
var map__21652 = p__21651;
var map__21652__$1 = cljs.core.__destructure_map(map__21652);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21652__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21652__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21654){
var map__21655 = p__21654;
var map__21655__$1 = cljs.core.__destructure_map(map__21655);
var svc = map__21655__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21655__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
