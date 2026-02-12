goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18522){
var map__18523 = p__18522;
var map__18523__$1 = cljs.core.__destructure_map(map__18523);
var m = map__18523__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18523__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18523__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18529_18954 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18530_18955 = null;
var count__18531_18956 = (0);
var i__18532_18957 = (0);
while(true){
if((i__18532_18957 < count__18531_18956)){
var f_18959 = chunk__18530_18955.cljs$core$IIndexed$_nth$arity$2(null, i__18532_18957);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18959], 0));


var G__18960 = seq__18529_18954;
var G__18961 = chunk__18530_18955;
var G__18962 = count__18531_18956;
var G__18963 = (i__18532_18957 + (1));
seq__18529_18954 = G__18960;
chunk__18530_18955 = G__18961;
count__18531_18956 = G__18962;
i__18532_18957 = G__18963;
continue;
} else {
var temp__5804__auto___18964 = cljs.core.seq(seq__18529_18954);
if(temp__5804__auto___18964){
var seq__18529_18970__$1 = temp__5804__auto___18964;
if(cljs.core.chunked_seq_QMARK_(seq__18529_18970__$1)){
var c__5525__auto___18972 = cljs.core.chunk_first(seq__18529_18970__$1);
var G__18973 = cljs.core.chunk_rest(seq__18529_18970__$1);
var G__18974 = c__5525__auto___18972;
var G__18975 = cljs.core.count(c__5525__auto___18972);
var G__18976 = (0);
seq__18529_18954 = G__18973;
chunk__18530_18955 = G__18974;
count__18531_18956 = G__18975;
i__18532_18957 = G__18976;
continue;
} else {
var f_18978 = cljs.core.first(seq__18529_18970__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18978], 0));


var G__18980 = cljs.core.next(seq__18529_18970__$1);
var G__18981 = null;
var G__18982 = (0);
var G__18983 = (0);
seq__18529_18954 = G__18980;
chunk__18530_18955 = G__18981;
count__18531_18956 = G__18982;
i__18532_18957 = G__18983;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18984 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18984], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18984)))?cljs.core.second(arglists_18984):arglists_18984)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18602_19006 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18603_19007 = null;
var count__18604_19008 = (0);
var i__18605_19009 = (0);
while(true){
if((i__18605_19009 < count__18604_19008)){
var vec__18660_19015 = chunk__18603_19007.cljs$core$IIndexed$_nth$arity$2(null, i__18605_19009);
var name_19016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18660_19015,(0),null);
var map__18663_19017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18660_19015,(1),null);
var map__18663_19018__$1 = cljs.core.__destructure_map(map__18663_19017);
var doc_19019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18663_19018__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18663_19018__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19016], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19020], 0));

if(cljs.core.truth_(doc_19019)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19019], 0));
} else {
}


var G__19023 = seq__18602_19006;
var G__19024 = chunk__18603_19007;
var G__19025 = count__18604_19008;
var G__19026 = (i__18605_19009 + (1));
seq__18602_19006 = G__19023;
chunk__18603_19007 = G__19024;
count__18604_19008 = G__19025;
i__18605_19009 = G__19026;
continue;
} else {
var temp__5804__auto___19028 = cljs.core.seq(seq__18602_19006);
if(temp__5804__auto___19028){
var seq__18602_19029__$1 = temp__5804__auto___19028;
if(cljs.core.chunked_seq_QMARK_(seq__18602_19029__$1)){
var c__5525__auto___19030 = cljs.core.chunk_first(seq__18602_19029__$1);
var G__19032 = cljs.core.chunk_rest(seq__18602_19029__$1);
var G__19033 = c__5525__auto___19030;
var G__19034 = cljs.core.count(c__5525__auto___19030);
var G__19035 = (0);
seq__18602_19006 = G__19032;
chunk__18603_19007 = G__19033;
count__18604_19008 = G__19034;
i__18605_19009 = G__19035;
continue;
} else {
var vec__18689_19036 = cljs.core.first(seq__18602_19029__$1);
var name_19037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18689_19036,(0),null);
var map__18692_19038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18689_19036,(1),null);
var map__18692_19039__$1 = cljs.core.__destructure_map(map__18692_19038);
var doc_19040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18692_19039__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18692_19039__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19037], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19041], 0));

if(cljs.core.truth_(doc_19040)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19040], 0));
} else {
}


var G__19043 = cljs.core.next(seq__18602_19029__$1);
var G__19044 = null;
var G__19045 = (0);
var G__19046 = (0);
seq__18602_19006 = G__19043;
chunk__18603_19007 = G__19044;
count__18604_19008 = G__19045;
i__18605_19009 = G__19046;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18709 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18710 = null;
var count__18711 = (0);
var i__18712 = (0);
while(true){
if((i__18712 < count__18711)){
var role = chunk__18710.cljs$core$IIndexed$_nth$arity$2(null, i__18712);
var temp__5804__auto___19051__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19051__$1)){
var spec_19052 = temp__5804__auto___19051__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19052)], 0));
} else {
}


var G__19058 = seq__18709;
var G__19059 = chunk__18710;
var G__19060 = count__18711;
var G__19061 = (i__18712 + (1));
seq__18709 = G__19058;
chunk__18710 = G__19059;
count__18711 = G__19060;
i__18712 = G__19061;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18709);
if(temp__5804__auto____$1){
var seq__18709__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18709__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18709__$1);
var G__19067 = cljs.core.chunk_rest(seq__18709__$1);
var G__19068 = c__5525__auto__;
var G__19069 = cljs.core.count(c__5525__auto__);
var G__19070 = (0);
seq__18709 = G__19067;
chunk__18710 = G__19068;
count__18711 = G__19069;
i__18712 = G__19070;
continue;
} else {
var role = cljs.core.first(seq__18709__$1);
var temp__5804__auto___19076__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19076__$2)){
var spec_19077 = temp__5804__auto___19076__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19077)], 0));
} else {
}


var G__19083 = cljs.core.next(seq__18709__$1);
var G__19084 = null;
var G__19085 = (0);
var G__19086 = (0);
seq__18709 = G__19083;
chunk__18710 = G__19084;
count__18711 = G__19085;
i__18712 = G__19086;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18744 = datafied_throwable;
var map__18744__$1 = cljs.core.__destructure_map(map__18744);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18744__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18744__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18744__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18745 = cljs.core.last(via);
var map__18745__$1 = cljs.core.__destructure_map(map__18745);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18745__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18745__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18745__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18746 = data;
var map__18746__$1 = cljs.core.__destructure_map(map__18746);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18746__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18746__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18746__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18748 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18748__$1 = cljs.core.__destructure_map(map__18748);
var top_data = map__18748__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18748__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18763 = phase;
var G__18763__$1 = (((G__18763 instanceof cljs.core.Keyword))?G__18763.fqn:null);
switch (G__18763__$1) {
case "read-source":
var map__18766 = data;
var map__18766__$1 = cljs.core.__destructure_map(map__18766);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18766__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18766__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18767 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18767__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18767,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18767);
var G__18767__$2 = (cljs.core.truth_((function (){var fexpr__18771 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18771.cljs$core$IFn$_invoke$arity$1 ? fexpr__18771.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18771.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18767__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18767__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18767__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18767__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18776 = top_data;
var G__18776__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18776,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18776);
var G__18776__$2 = (cljs.core.truth_((function (){var fexpr__18788 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18788.cljs$core$IFn$_invoke$arity$1 ? fexpr__18788.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18788.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18776__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18776__$1);
var G__18776__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18776__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18776__$2);
var G__18776__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18776__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18776__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18776__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18776__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18806 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18806,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18806,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18806,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18806,(3),null);
var G__18815 = top_data;
var G__18815__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18815,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18815);
var G__18815__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18815__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18815__$1);
var G__18815__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18815__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18815__$2);
var G__18815__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18815__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18815__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18815__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18815__$4;
}

break;
case "execution":
var vec__18837 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18837,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18837,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18837,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18837,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18737_SHARP_){
var or__5002__auto__ = (p1__18737_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18847 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18847.cljs$core$IFn$_invoke$arity$1 ? fexpr__18847.cljs$core$IFn$_invoke$arity$1(p1__18737_SHARP_) : fexpr__18847.call(null, p1__18737_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18854 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18854__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18854,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18854);
var G__18854__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18854__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18854__$1);
var G__18854__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18854__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18854__$2);
var G__18854__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18854__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18854__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18854__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18854__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18763__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18866){
var map__18868 = p__18866;
var map__18868__$1 = cljs.core.__destructure_map(map__18868);
var triage_data = map__18868__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18879 = phase;
var G__18879__$1 = (((G__18879 instanceof cljs.core.Keyword))?G__18879.fqn:null);
switch (G__18879__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18881 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18882 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18883 = loc;
var G__18884 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18886_19165 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18887_19166 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18888_19167 = true;
var _STAR_print_fn_STAR__temp_val__18889_19168 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18888_19167);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18889_19168);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18863_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18863_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18887_19166);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18886_19165);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18881,G__18882,G__18883,G__18884) : format.call(null, G__18881,G__18882,G__18883,G__18884));

break;
case "macroexpansion":
var G__18896 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18897 = cause_type;
var G__18898 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18899 = loc;
var G__18900 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18896,G__18897,G__18898,G__18899,G__18900) : format.call(null, G__18896,G__18897,G__18898,G__18899,G__18900));

break;
case "compile-syntax-check":
var G__18902 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18903 = cause_type;
var G__18904 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18905 = loc;
var G__18906 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18902,G__18903,G__18904,G__18905,G__18906) : format.call(null, G__18902,G__18903,G__18904,G__18905,G__18906));

break;
case "compilation":
var G__18908 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18909 = cause_type;
var G__18910 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18911 = loc;
var G__18912 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18908,G__18909,G__18910,G__18911,G__18912) : format.call(null, G__18908,G__18909,G__18910,G__18911,G__18912));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18917 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18918 = symbol;
var G__18919 = loc;
var G__18920 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18922_19181 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18923_19182 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18924_19183 = true;
var _STAR_print_fn_STAR__temp_val__18925_19184 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18924_19183);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18925_19184);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18864_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18864_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18923_19182);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18922_19181);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18917,G__18918,G__18919,G__18920) : format.call(null, G__18917,G__18918,G__18919,G__18920));
} else {
var G__18930 = "Execution error%s at %s(%s).\n%s\n";
var G__18931 = cause_type;
var G__18932 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18933 = loc;
var G__18934 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18930,G__18931,G__18932,G__18933,G__18934) : format.call(null, G__18930,G__18931,G__18932,G__18933,G__18934));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18879__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
