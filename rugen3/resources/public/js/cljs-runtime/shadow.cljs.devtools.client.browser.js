goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___21751 = arguments.length;
var i__5898__auto___21752 = (0);
while(true){
if((i__5898__auto___21752 < len__5897__auto___21751)){
args__5903__auto__.push((arguments[i__5898__auto___21752]));

var G__21753 = (i__5898__auto___21752 + (1));
i__5898__auto___21752 = G__21753;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21328){
var G__21329 = cljs.core.first(seq21328);
var seq21328__$1 = cljs.core.next(seq21328);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21329,seq21328__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21338 = cljs.core.seq(sources);
var chunk__21339 = null;
var count__21340 = (0);
var i__21341 = (0);
while(true){
if((i__21341 < count__21340)){
var map__21348 = chunk__21339.cljs$core$IIndexed$_nth$arity$2(null,i__21341);
var map__21348__$1 = cljs.core.__destructure_map(map__21348);
var src = map__21348__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21348__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21348__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21348__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21348__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21351){var e_21754 = e21351;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21754);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21754.message))));
}

var G__21755 = seq__21338;
var G__21756 = chunk__21339;
var G__21757 = count__21340;
var G__21758 = (i__21341 + (1));
seq__21338 = G__21755;
chunk__21339 = G__21756;
count__21340 = G__21757;
i__21341 = G__21758;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21338);
if(temp__5825__auto__){
var seq__21338__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21338__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21338__$1);
var G__21759 = cljs.core.chunk_rest(seq__21338__$1);
var G__21760 = c__5694__auto__;
var G__21761 = cljs.core.count(c__5694__auto__);
var G__21762 = (0);
seq__21338 = G__21759;
chunk__21339 = G__21760;
count__21340 = G__21761;
i__21341 = G__21762;
continue;
} else {
var map__21352 = cljs.core.first(seq__21338__$1);
var map__21352__$1 = cljs.core.__destructure_map(map__21352);
var src = map__21352__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21352__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21352__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21352__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21352__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21353){var e_21764 = e21353;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21764);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21764.message))));
}

var G__21765 = cljs.core.next(seq__21338__$1);
var G__21766 = null;
var G__21767 = (0);
var G__21768 = (0);
seq__21338 = G__21765;
chunk__21339 = G__21766;
count__21340 = G__21767;
i__21341 = G__21768;
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
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21356 = cljs.core.seq(js_requires);
var chunk__21357 = null;
var count__21358 = (0);
var i__21359 = (0);
while(true){
if((i__21359 < count__21358)){
var js_ns = chunk__21357.cljs$core$IIndexed$_nth$arity$2(null,i__21359);
var require_str_21769 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21769);


var G__21770 = seq__21356;
var G__21771 = chunk__21357;
var G__21772 = count__21358;
var G__21773 = (i__21359 + (1));
seq__21356 = G__21770;
chunk__21357 = G__21771;
count__21358 = G__21772;
i__21359 = G__21773;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21356);
if(temp__5825__auto__){
var seq__21356__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21356__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21356__$1);
var G__21774 = cljs.core.chunk_rest(seq__21356__$1);
var G__21775 = c__5694__auto__;
var G__21776 = cljs.core.count(c__5694__auto__);
var G__21777 = (0);
seq__21356 = G__21774;
chunk__21357 = G__21775;
count__21358 = G__21776;
i__21359 = G__21777;
continue;
} else {
var js_ns = cljs.core.first(seq__21356__$1);
var require_str_21778 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21778);


var G__21779 = cljs.core.next(seq__21356__$1);
var G__21780 = null;
var G__21781 = (0);
var G__21782 = (0);
seq__21356 = G__21779;
chunk__21357 = G__21780;
count__21358 = G__21781;
i__21359 = G__21782;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21361){
var map__21362 = p__21361;
var map__21362__$1 = cljs.core.__destructure_map(map__21362);
var msg = map__21362__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21362__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21362__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21363(s__21364){
return (new cljs.core.LazySeq(null,(function (){
var s__21364__$1 = s__21364;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21364__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__21369 = cljs.core.first(xs__6385__auto__);
var map__21369__$1 = cljs.core.__destructure_map(map__21369);
var src = map__21369__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__21364__$1,map__21369,map__21369__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21362,map__21362__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21363_$_iter__21365(s__21366){
return (new cljs.core.LazySeq(null,((function (s__21364__$1,map__21369,map__21369__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21362,map__21362__$1,msg,info,reload_info){
return (function (){
var s__21366__$1 = s__21366;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21366__$1);
if(temp__5825__auto____$1){
var s__21366__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21366__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__21366__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__21368 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__21367 = (0);
while(true){
if((i__21367 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__21367);
cljs.core.chunk_append(b__21368,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21784 = (i__21367 + (1));
i__21367 = G__21784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21368),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21363_$_iter__21365(cljs.core.chunk_rest(s__21366__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21368),null);
}
} else {
var warning = cljs.core.first(s__21366__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21363_$_iter__21365(cljs.core.rest(s__21366__$2)));
}
} else {
return null;
}
break;
}
});})(s__21364__$1,map__21369,map__21369__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21362,map__21362__$1,msg,info,reload_info))
,null,null));
});})(s__21364__$1,map__21369,map__21369__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21362,map__21362__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21363(cljs.core.rest(s__21364__$1)));
} else {
var G__21785 = cljs.core.rest(s__21364__$1);
s__21364__$1 = G__21785;
continue;
}
} else {
var G__21786 = cljs.core.rest(s__21364__$1);
s__21364__$1 = G__21786;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21370_21787 = cljs.core.seq(warnings);
var chunk__21371_21788 = null;
var count__21372_21789 = (0);
var i__21373_21790 = (0);
while(true){
if((i__21373_21790 < count__21372_21789)){
var map__21376_21791 = chunk__21371_21788.cljs$core$IIndexed$_nth$arity$2(null,i__21373_21790);
var map__21376_21792__$1 = cljs.core.__destructure_map(map__21376_21791);
var w_21793 = map__21376_21792__$1;
var msg_21794__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21376_21792__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21376_21792__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21376_21792__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21376_21792__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21797)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21795)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21796)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21794__$1)));


var G__21798 = seq__21370_21787;
var G__21799 = chunk__21371_21788;
var G__21800 = count__21372_21789;
var G__21801 = (i__21373_21790 + (1));
seq__21370_21787 = G__21798;
chunk__21371_21788 = G__21799;
count__21372_21789 = G__21800;
i__21373_21790 = G__21801;
continue;
} else {
var temp__5825__auto___21802 = cljs.core.seq(seq__21370_21787);
if(temp__5825__auto___21802){
var seq__21370_21804__$1 = temp__5825__auto___21802;
if(cljs.core.chunked_seq_QMARK_(seq__21370_21804__$1)){
var c__5694__auto___21805 = cljs.core.chunk_first(seq__21370_21804__$1);
var G__21806 = cljs.core.chunk_rest(seq__21370_21804__$1);
var G__21807 = c__5694__auto___21805;
var G__21808 = cljs.core.count(c__5694__auto___21805);
var G__21809 = (0);
seq__21370_21787 = G__21806;
chunk__21371_21788 = G__21807;
count__21372_21789 = G__21808;
i__21373_21790 = G__21809;
continue;
} else {
var map__21377_21810 = cljs.core.first(seq__21370_21804__$1);
var map__21377_21811__$1 = cljs.core.__destructure_map(map__21377_21810);
var w_21812 = map__21377_21811__$1;
var msg_21813__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21377_21811__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21377_21811__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21377_21811__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21377_21811__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21816)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21814)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21815)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21813__$1)));


var G__21817 = cljs.core.next(seq__21370_21804__$1);
var G__21818 = null;
var G__21819 = (0);
var G__21820 = (0);
seq__21370_21787 = G__21817;
chunk__21371_21788 = G__21818;
count__21372_21789 = G__21819;
i__21373_21790 = G__21820;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21360_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21360_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5160__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5160__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21379 = node_uri;
G__21379.setQuery(null);

G__21379.setPath(new$);

return G__21379;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21380){
var map__21381 = p__21380;
var map__21381__$1 = cljs.core.__destructure_map(map__21381);
var msg = map__21381__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21381__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21381__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21382 = cljs.core.seq(updates);
var chunk__21384 = null;
var count__21385 = (0);
var i__21386 = (0);
while(true){
if((i__21386 < count__21385)){
var path = chunk__21384.cljs$core$IIndexed$_nth$arity$2(null,i__21386);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21597_21822 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21601_21823 = null;
var count__21602_21824 = (0);
var i__21603_21825 = (0);
while(true){
if((i__21603_21825 < count__21602_21824)){
var node_21826 = chunk__21601_21823.cljs$core$IIndexed$_nth$arity$2(null,i__21603_21825);
if(cljs.core.not(node_21826.shadow$old)){
var path_match_21827 = shadow.cljs.devtools.client.browser.match_paths(node_21826.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21827)){
var new_link_21828 = (function (){var G__21636 = node_21826.cloneNode(true);
G__21636.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21827)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21636;
})();
(node_21826.shadow$old = true);

(new_link_21828.onload = ((function (seq__21597_21822,chunk__21601_21823,count__21602_21824,i__21603_21825,seq__21382,chunk__21384,count__21385,i__21386,new_link_21828,path_match_21827,node_21826,path,map__21381,map__21381__$1,msg,updates,reload_info){
return (function (e){
var seq__21637_21829 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21639_21830 = null;
var count__21640_21831 = (0);
var i__21641_21832 = (0);
while(true){
if((i__21641_21832 < count__21640_21831)){
var map__21646_21833 = chunk__21639_21830.cljs$core$IIndexed$_nth$arity$2(null,i__21641_21832);
var map__21646_21834__$1 = cljs.core.__destructure_map(map__21646_21833);
var task_21835 = map__21646_21834__$1;
var fn_str_21836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21646_21834__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21646_21834__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21838 = goog.getObjectByName(fn_str_21836,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21837)));

(fn_obj_21838.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21838.cljs$core$IFn$_invoke$arity$2(path,new_link_21828) : fn_obj_21838.call(null,path,new_link_21828));


var G__21839 = seq__21637_21829;
var G__21840 = chunk__21639_21830;
var G__21841 = count__21640_21831;
var G__21842 = (i__21641_21832 + (1));
seq__21637_21829 = G__21839;
chunk__21639_21830 = G__21840;
count__21640_21831 = G__21841;
i__21641_21832 = G__21842;
continue;
} else {
var temp__5825__auto___21843 = cljs.core.seq(seq__21637_21829);
if(temp__5825__auto___21843){
var seq__21637_21844__$1 = temp__5825__auto___21843;
if(cljs.core.chunked_seq_QMARK_(seq__21637_21844__$1)){
var c__5694__auto___21845 = cljs.core.chunk_first(seq__21637_21844__$1);
var G__21846 = cljs.core.chunk_rest(seq__21637_21844__$1);
var G__21847 = c__5694__auto___21845;
var G__21848 = cljs.core.count(c__5694__auto___21845);
var G__21849 = (0);
seq__21637_21829 = G__21846;
chunk__21639_21830 = G__21847;
count__21640_21831 = G__21848;
i__21641_21832 = G__21849;
continue;
} else {
var map__21647_21850 = cljs.core.first(seq__21637_21844__$1);
var map__21647_21851__$1 = cljs.core.__destructure_map(map__21647_21850);
var task_21852 = map__21647_21851__$1;
var fn_str_21853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21647_21851__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21647_21851__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21855 = goog.getObjectByName(fn_str_21853,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21854)));

(fn_obj_21855.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21855.cljs$core$IFn$_invoke$arity$2(path,new_link_21828) : fn_obj_21855.call(null,path,new_link_21828));


var G__21856 = cljs.core.next(seq__21637_21844__$1);
var G__21857 = null;
var G__21858 = (0);
var G__21859 = (0);
seq__21637_21829 = G__21856;
chunk__21639_21830 = G__21857;
count__21640_21831 = G__21858;
i__21641_21832 = G__21859;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21826);
});})(seq__21597_21822,chunk__21601_21823,count__21602_21824,i__21603_21825,seq__21382,chunk__21384,count__21385,i__21386,new_link_21828,path_match_21827,node_21826,path,map__21381,map__21381__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21827], 0));

goog.dom.insertSiblingAfter(new_link_21828,node_21826);


var G__21860 = seq__21597_21822;
var G__21861 = chunk__21601_21823;
var G__21862 = count__21602_21824;
var G__21863 = (i__21603_21825 + (1));
seq__21597_21822 = G__21860;
chunk__21601_21823 = G__21861;
count__21602_21824 = G__21862;
i__21603_21825 = G__21863;
continue;
} else {
var G__21864 = seq__21597_21822;
var G__21865 = chunk__21601_21823;
var G__21866 = count__21602_21824;
var G__21867 = (i__21603_21825 + (1));
seq__21597_21822 = G__21864;
chunk__21601_21823 = G__21865;
count__21602_21824 = G__21866;
i__21603_21825 = G__21867;
continue;
}
} else {
var G__21868 = seq__21597_21822;
var G__21869 = chunk__21601_21823;
var G__21870 = count__21602_21824;
var G__21871 = (i__21603_21825 + (1));
seq__21597_21822 = G__21868;
chunk__21601_21823 = G__21869;
count__21602_21824 = G__21870;
i__21603_21825 = G__21871;
continue;
}
} else {
var temp__5825__auto___21872 = cljs.core.seq(seq__21597_21822);
if(temp__5825__auto___21872){
var seq__21597_21873__$1 = temp__5825__auto___21872;
if(cljs.core.chunked_seq_QMARK_(seq__21597_21873__$1)){
var c__5694__auto___21874 = cljs.core.chunk_first(seq__21597_21873__$1);
var G__21875 = cljs.core.chunk_rest(seq__21597_21873__$1);
var G__21876 = c__5694__auto___21874;
var G__21877 = cljs.core.count(c__5694__auto___21874);
var G__21878 = (0);
seq__21597_21822 = G__21875;
chunk__21601_21823 = G__21876;
count__21602_21824 = G__21877;
i__21603_21825 = G__21878;
continue;
} else {
var node_21879 = cljs.core.first(seq__21597_21873__$1);
if(cljs.core.not(node_21879.shadow$old)){
var path_match_21880 = shadow.cljs.devtools.client.browser.match_paths(node_21879.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21880)){
var new_link_21881 = (function (){var G__21648 = node_21879.cloneNode(true);
G__21648.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21880)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21648;
})();
(node_21879.shadow$old = true);

(new_link_21881.onload = ((function (seq__21597_21822,chunk__21601_21823,count__21602_21824,i__21603_21825,seq__21382,chunk__21384,count__21385,i__21386,new_link_21881,path_match_21880,node_21879,seq__21597_21873__$1,temp__5825__auto___21872,path,map__21381,map__21381__$1,msg,updates,reload_info){
return (function (e){
var seq__21651_21882 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21653_21883 = null;
var count__21654_21884 = (0);
var i__21655_21885 = (0);
while(true){
if((i__21655_21885 < count__21654_21884)){
var map__21660_21886 = chunk__21653_21883.cljs$core$IIndexed$_nth$arity$2(null,i__21655_21885);
var map__21660_21887__$1 = cljs.core.__destructure_map(map__21660_21886);
var task_21888 = map__21660_21887__$1;
var fn_str_21889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21660_21887__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21660_21887__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21891 = goog.getObjectByName(fn_str_21889,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21890)));

(fn_obj_21891.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21891.cljs$core$IFn$_invoke$arity$2(path,new_link_21881) : fn_obj_21891.call(null,path,new_link_21881));


var G__21895 = seq__21651_21882;
var G__21896 = chunk__21653_21883;
var G__21897 = count__21654_21884;
var G__21898 = (i__21655_21885 + (1));
seq__21651_21882 = G__21895;
chunk__21653_21883 = G__21896;
count__21654_21884 = G__21897;
i__21655_21885 = G__21898;
continue;
} else {
var temp__5825__auto___21899__$1 = cljs.core.seq(seq__21651_21882);
if(temp__5825__auto___21899__$1){
var seq__21651_21900__$1 = temp__5825__auto___21899__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21651_21900__$1)){
var c__5694__auto___21901 = cljs.core.chunk_first(seq__21651_21900__$1);
var G__21902 = cljs.core.chunk_rest(seq__21651_21900__$1);
var G__21903 = c__5694__auto___21901;
var G__21904 = cljs.core.count(c__5694__auto___21901);
var G__21905 = (0);
seq__21651_21882 = G__21902;
chunk__21653_21883 = G__21903;
count__21654_21884 = G__21904;
i__21655_21885 = G__21905;
continue;
} else {
var map__21662_21906 = cljs.core.first(seq__21651_21900__$1);
var map__21662_21907__$1 = cljs.core.__destructure_map(map__21662_21906);
var task_21908 = map__21662_21907__$1;
var fn_str_21909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662_21907__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662_21907__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21911 = goog.getObjectByName(fn_str_21909,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21910)));

(fn_obj_21911.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21911.cljs$core$IFn$_invoke$arity$2(path,new_link_21881) : fn_obj_21911.call(null,path,new_link_21881));


var G__21912 = cljs.core.next(seq__21651_21900__$1);
var G__21913 = null;
var G__21914 = (0);
var G__21915 = (0);
seq__21651_21882 = G__21912;
chunk__21653_21883 = G__21913;
count__21654_21884 = G__21914;
i__21655_21885 = G__21915;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21879);
});})(seq__21597_21822,chunk__21601_21823,count__21602_21824,i__21603_21825,seq__21382,chunk__21384,count__21385,i__21386,new_link_21881,path_match_21880,node_21879,seq__21597_21873__$1,temp__5825__auto___21872,path,map__21381,map__21381__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21880], 0));

goog.dom.insertSiblingAfter(new_link_21881,node_21879);


var G__21916 = cljs.core.next(seq__21597_21873__$1);
var G__21917 = null;
var G__21918 = (0);
var G__21919 = (0);
seq__21597_21822 = G__21916;
chunk__21601_21823 = G__21917;
count__21602_21824 = G__21918;
i__21603_21825 = G__21919;
continue;
} else {
var G__21920 = cljs.core.next(seq__21597_21873__$1);
var G__21921 = null;
var G__21922 = (0);
var G__21923 = (0);
seq__21597_21822 = G__21920;
chunk__21601_21823 = G__21921;
count__21602_21824 = G__21922;
i__21603_21825 = G__21923;
continue;
}
} else {
var G__21924 = cljs.core.next(seq__21597_21873__$1);
var G__21925 = null;
var G__21926 = (0);
var G__21927 = (0);
seq__21597_21822 = G__21924;
chunk__21601_21823 = G__21925;
count__21602_21824 = G__21926;
i__21603_21825 = G__21927;
continue;
}
}
} else {
}
}
break;
}


var G__21928 = seq__21382;
var G__21929 = chunk__21384;
var G__21930 = count__21385;
var G__21931 = (i__21386 + (1));
seq__21382 = G__21928;
chunk__21384 = G__21929;
count__21385 = G__21930;
i__21386 = G__21931;
continue;
} else {
var G__21932 = seq__21382;
var G__21933 = chunk__21384;
var G__21934 = count__21385;
var G__21935 = (i__21386 + (1));
seq__21382 = G__21932;
chunk__21384 = G__21933;
count__21385 = G__21934;
i__21386 = G__21935;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21382);
if(temp__5825__auto__){
var seq__21382__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21382__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21382__$1);
var G__21936 = cljs.core.chunk_rest(seq__21382__$1);
var G__21937 = c__5694__auto__;
var G__21938 = cljs.core.count(c__5694__auto__);
var G__21939 = (0);
seq__21382 = G__21936;
chunk__21384 = G__21937;
count__21385 = G__21938;
i__21386 = G__21939;
continue;
} else {
var path = cljs.core.first(seq__21382__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21665_21940 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21669_21941 = null;
var count__21670_21942 = (0);
var i__21671_21943 = (0);
while(true){
if((i__21671_21943 < count__21670_21942)){
var node_21944 = chunk__21669_21941.cljs$core$IIndexed$_nth$arity$2(null,i__21671_21943);
if(cljs.core.not(node_21944.shadow$old)){
var path_match_21945 = shadow.cljs.devtools.client.browser.match_paths(node_21944.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21945)){
var new_link_21946 = (function (){var G__21705 = node_21944.cloneNode(true);
G__21705.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21945)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21705;
})();
(node_21944.shadow$old = true);

(new_link_21946.onload = ((function (seq__21665_21940,chunk__21669_21941,count__21670_21942,i__21671_21943,seq__21382,chunk__21384,count__21385,i__21386,new_link_21946,path_match_21945,node_21944,path,seq__21382__$1,temp__5825__auto__,map__21381,map__21381__$1,msg,updates,reload_info){
return (function (e){
var seq__21707_21947 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21709_21948 = null;
var count__21710_21949 = (0);
var i__21711_21950 = (0);
while(true){
if((i__21711_21950 < count__21710_21949)){
var map__21715_21951 = chunk__21709_21948.cljs$core$IIndexed$_nth$arity$2(null,i__21711_21950);
var map__21715_21952__$1 = cljs.core.__destructure_map(map__21715_21951);
var task_21953 = map__21715_21952__$1;
var fn_str_21954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21715_21952__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21715_21952__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21956 = goog.getObjectByName(fn_str_21954,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21955)));

(fn_obj_21956.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21956.cljs$core$IFn$_invoke$arity$2(path,new_link_21946) : fn_obj_21956.call(null,path,new_link_21946));


var G__21957 = seq__21707_21947;
var G__21958 = chunk__21709_21948;
var G__21959 = count__21710_21949;
var G__21960 = (i__21711_21950 + (1));
seq__21707_21947 = G__21957;
chunk__21709_21948 = G__21958;
count__21710_21949 = G__21959;
i__21711_21950 = G__21960;
continue;
} else {
var temp__5825__auto___21961__$1 = cljs.core.seq(seq__21707_21947);
if(temp__5825__auto___21961__$1){
var seq__21707_21962__$1 = temp__5825__auto___21961__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21707_21962__$1)){
var c__5694__auto___21963 = cljs.core.chunk_first(seq__21707_21962__$1);
var G__21964 = cljs.core.chunk_rest(seq__21707_21962__$1);
var G__21965 = c__5694__auto___21963;
var G__21966 = cljs.core.count(c__5694__auto___21963);
var G__21967 = (0);
seq__21707_21947 = G__21964;
chunk__21709_21948 = G__21965;
count__21710_21949 = G__21966;
i__21711_21950 = G__21967;
continue;
} else {
var map__21716_21968 = cljs.core.first(seq__21707_21962__$1);
var map__21716_21969__$1 = cljs.core.__destructure_map(map__21716_21968);
var task_21970 = map__21716_21969__$1;
var fn_str_21971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21716_21969__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21716_21969__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21973 = goog.getObjectByName(fn_str_21971,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21972)));

(fn_obj_21973.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21973.cljs$core$IFn$_invoke$arity$2(path,new_link_21946) : fn_obj_21973.call(null,path,new_link_21946));


var G__21974 = cljs.core.next(seq__21707_21962__$1);
var G__21975 = null;
var G__21976 = (0);
var G__21977 = (0);
seq__21707_21947 = G__21974;
chunk__21709_21948 = G__21975;
count__21710_21949 = G__21976;
i__21711_21950 = G__21977;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21944);
});})(seq__21665_21940,chunk__21669_21941,count__21670_21942,i__21671_21943,seq__21382,chunk__21384,count__21385,i__21386,new_link_21946,path_match_21945,node_21944,path,seq__21382__$1,temp__5825__auto__,map__21381,map__21381__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21945], 0));

goog.dom.insertSiblingAfter(new_link_21946,node_21944);


var G__21978 = seq__21665_21940;
var G__21979 = chunk__21669_21941;
var G__21980 = count__21670_21942;
var G__21981 = (i__21671_21943 + (1));
seq__21665_21940 = G__21978;
chunk__21669_21941 = G__21979;
count__21670_21942 = G__21980;
i__21671_21943 = G__21981;
continue;
} else {
var G__21982 = seq__21665_21940;
var G__21983 = chunk__21669_21941;
var G__21984 = count__21670_21942;
var G__21985 = (i__21671_21943 + (1));
seq__21665_21940 = G__21982;
chunk__21669_21941 = G__21983;
count__21670_21942 = G__21984;
i__21671_21943 = G__21985;
continue;
}
} else {
var G__21986 = seq__21665_21940;
var G__21987 = chunk__21669_21941;
var G__21988 = count__21670_21942;
var G__21989 = (i__21671_21943 + (1));
seq__21665_21940 = G__21986;
chunk__21669_21941 = G__21987;
count__21670_21942 = G__21988;
i__21671_21943 = G__21989;
continue;
}
} else {
var temp__5825__auto___21990__$1 = cljs.core.seq(seq__21665_21940);
if(temp__5825__auto___21990__$1){
var seq__21665_21991__$1 = temp__5825__auto___21990__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21665_21991__$1)){
var c__5694__auto___21992 = cljs.core.chunk_first(seq__21665_21991__$1);
var G__21993 = cljs.core.chunk_rest(seq__21665_21991__$1);
var G__21994 = c__5694__auto___21992;
var G__21995 = cljs.core.count(c__5694__auto___21992);
var G__21996 = (0);
seq__21665_21940 = G__21993;
chunk__21669_21941 = G__21994;
count__21670_21942 = G__21995;
i__21671_21943 = G__21996;
continue;
} else {
var node_21997 = cljs.core.first(seq__21665_21991__$1);
if(cljs.core.not(node_21997.shadow$old)){
var path_match_21998 = shadow.cljs.devtools.client.browser.match_paths(node_21997.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21998)){
var new_link_21999 = (function (){var G__21717 = node_21997.cloneNode(true);
G__21717.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21998)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21717;
})();
(node_21997.shadow$old = true);

(new_link_21999.onload = ((function (seq__21665_21940,chunk__21669_21941,count__21670_21942,i__21671_21943,seq__21382,chunk__21384,count__21385,i__21386,new_link_21999,path_match_21998,node_21997,seq__21665_21991__$1,temp__5825__auto___21990__$1,path,seq__21382__$1,temp__5825__auto__,map__21381,map__21381__$1,msg,updates,reload_info){
return (function (e){
var seq__21718_22000 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21720_22001 = null;
var count__21721_22002 = (0);
var i__21722_22003 = (0);
while(true){
if((i__21722_22003 < count__21721_22002)){
var map__21726_22004 = chunk__21720_22001.cljs$core$IIndexed$_nth$arity$2(null,i__21722_22003);
var map__21726_22005__$1 = cljs.core.__destructure_map(map__21726_22004);
var task_22006 = map__21726_22005__$1;
var fn_str_22007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21726_22005__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21726_22005__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22009 = goog.getObjectByName(fn_str_22007,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22008)));

(fn_obj_22009.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22009.cljs$core$IFn$_invoke$arity$2(path,new_link_21999) : fn_obj_22009.call(null,path,new_link_21999));


var G__22010 = seq__21718_22000;
var G__22011 = chunk__21720_22001;
var G__22012 = count__21721_22002;
var G__22013 = (i__21722_22003 + (1));
seq__21718_22000 = G__22010;
chunk__21720_22001 = G__22011;
count__21721_22002 = G__22012;
i__21722_22003 = G__22013;
continue;
} else {
var temp__5825__auto___22014__$2 = cljs.core.seq(seq__21718_22000);
if(temp__5825__auto___22014__$2){
var seq__21718_22015__$1 = temp__5825__auto___22014__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21718_22015__$1)){
var c__5694__auto___22016 = cljs.core.chunk_first(seq__21718_22015__$1);
var G__22017 = cljs.core.chunk_rest(seq__21718_22015__$1);
var G__22018 = c__5694__auto___22016;
var G__22019 = cljs.core.count(c__5694__auto___22016);
var G__22020 = (0);
seq__21718_22000 = G__22017;
chunk__21720_22001 = G__22018;
count__21721_22002 = G__22019;
i__21722_22003 = G__22020;
continue;
} else {
var map__21727_22021 = cljs.core.first(seq__21718_22015__$1);
var map__21727_22022__$1 = cljs.core.__destructure_map(map__21727_22021);
var task_22023 = map__21727_22022__$1;
var fn_str_22024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21727_22022__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21727_22022__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22026 = goog.getObjectByName(fn_str_22024,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22025)));

(fn_obj_22026.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22026.cljs$core$IFn$_invoke$arity$2(path,new_link_21999) : fn_obj_22026.call(null,path,new_link_21999));


var G__22027 = cljs.core.next(seq__21718_22015__$1);
var G__22028 = null;
var G__22029 = (0);
var G__22030 = (0);
seq__21718_22000 = G__22027;
chunk__21720_22001 = G__22028;
count__21721_22002 = G__22029;
i__21722_22003 = G__22030;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21997);
});})(seq__21665_21940,chunk__21669_21941,count__21670_21942,i__21671_21943,seq__21382,chunk__21384,count__21385,i__21386,new_link_21999,path_match_21998,node_21997,seq__21665_21991__$1,temp__5825__auto___21990__$1,path,seq__21382__$1,temp__5825__auto__,map__21381,map__21381__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21998], 0));

goog.dom.insertSiblingAfter(new_link_21999,node_21997);


var G__22031 = cljs.core.next(seq__21665_21991__$1);
var G__22032 = null;
var G__22033 = (0);
var G__22034 = (0);
seq__21665_21940 = G__22031;
chunk__21669_21941 = G__22032;
count__21670_21942 = G__22033;
i__21671_21943 = G__22034;
continue;
} else {
var G__22035 = cljs.core.next(seq__21665_21991__$1);
var G__22036 = null;
var G__22037 = (0);
var G__22038 = (0);
seq__21665_21940 = G__22035;
chunk__21669_21941 = G__22036;
count__21670_21942 = G__22037;
i__21671_21943 = G__22038;
continue;
}
} else {
var G__22039 = cljs.core.next(seq__21665_21991__$1);
var G__22040 = null;
var G__22041 = (0);
var G__22042 = (0);
seq__21665_21940 = G__22039;
chunk__21669_21941 = G__22040;
count__21670_21942 = G__22041;
i__21671_21943 = G__22042;
continue;
}
}
} else {
}
}
break;
}


var G__22043 = cljs.core.next(seq__21382__$1);
var G__22044 = null;
var G__22045 = (0);
var G__22046 = (0);
seq__21382 = G__22043;
chunk__21384 = G__22044;
count__21385 = G__22045;
i__21386 = G__22046;
continue;
} else {
var G__22047 = cljs.core.next(seq__21382__$1);
var G__22048 = null;
var G__22049 = (0);
var G__22050 = (0);
seq__21382 = G__22047;
chunk__21384 = G__22048;
count__21385 = G__22049;
i__21386 = G__22050;
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
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21729 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21729) : success.call(null,G__21729));
}catch (e21728){var e = e21728;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21730,success,fail){
var map__21731 = p__21730;
var map__21731__$1 = cljs.core.__destructure_map(map__21731);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21731__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21733 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21733) : success.call(null,G__21733));
}catch (e21732){var e = e21732;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21734,done,error){
var map__21735 = p__21734;
var map__21735__$1 = cljs.core.__destructure_map(map__21735);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21735__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21736,done,error){
var map__21737 = p__21736;
var map__21737__$1 = cljs.core.__destructure_map(map__21737);
var msg = map__21737__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21737__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21737__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21737__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21738){
var map__21739 = p__21738;
var map__21739__$1 = cljs.core.__destructure_map(map__21739);
var src = map__21739__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21739__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21740 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21740) : done.call(null,G__21740));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21741){
var map__21742 = p__21741;
var map__21742__$1 = cljs.core.__destructure_map(map__21742);
var msg__$1 = map__21742__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21743){var ex = e21743;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21744){
var map__21745 = p__21744;
var map__21745__$1 = cljs.core.__destructure_map(map__21745);
var env = map__21745__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21745__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
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

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21746){
var map__21747 = p__21746;
var map__21747__$1 = cljs.core.__destructure_map(map__21747);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21747__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21747__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21748){
var map__21749 = p__21748;
var map__21749__$1 = cljs.core.__destructure_map(map__21749);
var svc = map__21749__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21749__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
