goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18579){
var map__18584 = p__18579;
var map__18584__$1 = cljs.core.__destructure_map(map__18584);
var m = map__18584__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18584__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18584__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18600_19030 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18602_19031 = null;
var count__18603_19032 = (0);
var i__18604_19033 = (0);
while(true){
if((i__18604_19033 < count__18603_19032)){
var f_19034 = chunk__18602_19031.cljs$core$IIndexed$_nth$arity$2(null,i__18604_19033);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19034], 0));


var G__19035 = seq__18600_19030;
var G__19036 = chunk__18602_19031;
var G__19037 = count__18603_19032;
var G__19038 = (i__18604_19033 + (1));
seq__18600_19030 = G__19035;
chunk__18602_19031 = G__19036;
count__18603_19032 = G__19037;
i__18604_19033 = G__19038;
continue;
} else {
var temp__5825__auto___19039 = cljs.core.seq(seq__18600_19030);
if(temp__5825__auto___19039){
var seq__18600_19040__$1 = temp__5825__auto___19039;
if(cljs.core.chunked_seq_QMARK_(seq__18600_19040__$1)){
var c__5694__auto___19041 = cljs.core.chunk_first(seq__18600_19040__$1);
var G__19042 = cljs.core.chunk_rest(seq__18600_19040__$1);
var G__19043 = c__5694__auto___19041;
var G__19044 = cljs.core.count(c__5694__auto___19041);
var G__19045 = (0);
seq__18600_19030 = G__19042;
chunk__18602_19031 = G__19043;
count__18603_19032 = G__19044;
i__18604_19033 = G__19045;
continue;
} else {
var f_19047 = cljs.core.first(seq__18600_19040__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19047], 0));


var G__19048 = cljs.core.next(seq__18600_19040__$1);
var G__19049 = null;
var G__19050 = (0);
var G__19051 = (0);
seq__18600_19030 = G__19048;
chunk__18602_19031 = G__19049;
count__18603_19032 = G__19050;
i__18604_19033 = G__19051;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19053 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19053], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19053)))?cljs.core.second(arglists_19053):arglists_19053)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
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
var seq__18624_19059 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18625_19060 = null;
var count__18626_19061 = (0);
var i__18627_19062 = (0);
while(true){
if((i__18627_19062 < count__18626_19061)){
var vec__18655_19065 = chunk__18625_19060.cljs$core$IIndexed$_nth$arity$2(null,i__18627_19062);
var name_19066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18655_19065,(0),null);
var map__18658_19067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18655_19065,(1),null);
var map__18658_19068__$1 = cljs.core.__destructure_map(map__18658_19067);
var doc_19069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18658_19068__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18658_19068__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19066], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19070], 0));

if(cljs.core.truth_(doc_19069)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19069], 0));
} else {
}


var G__19086 = seq__18624_19059;
var G__19087 = chunk__18625_19060;
var G__19088 = count__18626_19061;
var G__19089 = (i__18627_19062 + (1));
seq__18624_19059 = G__19086;
chunk__18625_19060 = G__19087;
count__18626_19061 = G__19088;
i__18627_19062 = G__19089;
continue;
} else {
var temp__5825__auto___19090 = cljs.core.seq(seq__18624_19059);
if(temp__5825__auto___19090){
var seq__18624_19092__$1 = temp__5825__auto___19090;
if(cljs.core.chunked_seq_QMARK_(seq__18624_19092__$1)){
var c__5694__auto___19093 = cljs.core.chunk_first(seq__18624_19092__$1);
var G__19094 = cljs.core.chunk_rest(seq__18624_19092__$1);
var G__19095 = c__5694__auto___19093;
var G__19096 = cljs.core.count(c__5694__auto___19093);
var G__19097 = (0);
seq__18624_19059 = G__19094;
chunk__18625_19060 = G__19095;
count__18626_19061 = G__19096;
i__18627_19062 = G__19097;
continue;
} else {
var vec__18684_19098 = cljs.core.first(seq__18624_19092__$1);
var name_19099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18684_19098,(0),null);
var map__18687_19100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18684_19098,(1),null);
var map__18687_19101__$1 = cljs.core.__destructure_map(map__18687_19100);
var doc_19102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687_19101__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687_19101__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19099], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19103], 0));

if(cljs.core.truth_(doc_19102)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19102], 0));
} else {
}


var G__19111 = cljs.core.next(seq__18624_19092__$1);
var G__19112 = null;
var G__19113 = (0);
var G__19114 = (0);
seq__18624_19059 = G__19111;
chunk__18625_19060 = G__19112;
count__18626_19061 = G__19113;
i__18627_19062 = G__19114;
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
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18701 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18704 = null;
var count__18706 = (0);
var i__18708 = (0);
while(true){
if((i__18708 < count__18706)){
var role = chunk__18704.cljs$core$IIndexed$_nth$arity$2(null,i__18708);
var temp__5825__auto___19119__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___19119__$1)){
var spec_19120 = temp__5825__auto___19119__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19120)], 0));
} else {
}


var G__19121 = seq__18701;
var G__19122 = chunk__18704;
var G__19123 = count__18706;
var G__19124 = (i__18708 + (1));
seq__18701 = G__19121;
chunk__18704 = G__19122;
count__18706 = G__19123;
i__18708 = G__19124;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__18701);
if(temp__5825__auto____$1){
var seq__18701__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18701__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__18701__$1);
var G__19128 = cljs.core.chunk_rest(seq__18701__$1);
var G__19129 = c__5694__auto__;
var G__19130 = cljs.core.count(c__5694__auto__);
var G__19131 = (0);
seq__18701 = G__19128;
chunk__18704 = G__19129;
count__18706 = G__19130;
i__18708 = G__19131;
continue;
} else {
var role = cljs.core.first(seq__18701__$1);
var temp__5825__auto___19133__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___19133__$2)){
var spec_19134 = temp__5825__auto___19133__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19134)], 0));
} else {
}


var G__19136 = cljs.core.next(seq__18701__$1);
var G__19137 = null;
var G__19138 = (0);
var G__19139 = (0);
seq__18701 = G__19136;
chunk__18704 = G__19137;
count__18706 = G__19138;
i__18708 = G__19139;
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
var map__18829 = datafied_throwable;
var map__18829__$1 = cljs.core.__destructure_map(map__18829);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18829__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18829__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18829__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18831 = cljs.core.last(via);
var map__18831__$1 = cljs.core.__destructure_map(map__18831);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18831__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18831__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18831__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18832 = data;
var map__18832__$1 = cljs.core.__destructure_map(map__18832);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18832__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18832__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18832__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18834 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18834__$1 = cljs.core.__destructure_map(map__18834);
var top_data = map__18834__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18834__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18852 = phase;
var G__18852__$1 = (((G__18852 instanceof cljs.core.Keyword))?G__18852.fqn:null);
switch (G__18852__$1) {
case "read-source":
var map__18858 = data;
var map__18858__$1 = cljs.core.__destructure_map(map__18858);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18858__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18858__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18861 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18861__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18861,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18861);
var G__18861__$2 = (cljs.core.truth_((function (){var fexpr__18865 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18865.cljs$core$IFn$_invoke$arity$1 ? fexpr__18865.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18865.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18861__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18861__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18861__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18861__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18868 = top_data;
var G__18868__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18868,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18868);
var G__18868__$2 = (cljs.core.truth_((function (){var fexpr__18870 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18870.cljs$core$IFn$_invoke$arity$1 ? fexpr__18870.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18870.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18868__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18868__$1);
var G__18868__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18868__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18868__$2);
var G__18868__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18868__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18868__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18868__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18868__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18879 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18879,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18879,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18879,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18879,(3),null);
var G__18884 = top_data;
var G__18884__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18884,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18884);
var G__18884__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18884__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18884__$1);
var G__18884__$3 = (cljs.core.truth_((function (){var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18884__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18884__$2);
var G__18884__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18884__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18884__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18884__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18884__$4;
}

break;
case "execution":
var vec__18906 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18906,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18906,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18906,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18906,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18807_SHARP_){
var or__5162__auto__ = (p1__18807_SHARP_ == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var fexpr__18918 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18918.cljs$core$IFn$_invoke$arity$1 ? fexpr__18918.cljs$core$IFn$_invoke$arity$1(p1__18807_SHARP_) : fexpr__18918.call(null,p1__18807_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return line;
}
})();
var G__18925 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18925__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18925,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18925);
var G__18925__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18925__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18925__$1);
var G__18925__$3 = (cljs.core.truth_((function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18925__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18925__$2);
var G__18925__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18925__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18925__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18925__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18925__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18852__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18941){
var map__18942 = p__18941;
var map__18942__$1 = cljs.core.__destructure_map(map__18942);
var triage_data = map__18942__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18942__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18942__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18942__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18942__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18942__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18942__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18942__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18942__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = source;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = line;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5162__auto__ = class$;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__18954 = phase;
var G__18954__$1 = (((G__18954 instanceof cljs.core.Keyword))?G__18954.fqn:null);
switch (G__18954__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18964 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18965 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18966 = loc;
var G__18967 = (cljs.core.truth_(spec)?(function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18970_19236 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18971_19237 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18972_19238 = true;
var _STAR_print_fn_STAR__temp_val__18973_19239 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18972_19238);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18973_19239);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18938_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18938_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18971_19237);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18970_19236);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18964,G__18965,G__18966,G__18967) : format.call(null,G__18964,G__18965,G__18966,G__18967));

break;
case "macroexpansion":
var G__18992 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18993 = cause_type;
var G__18994 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18995 = loc;
var G__18996 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18992,G__18993,G__18994,G__18995,G__18996) : format.call(null,G__18992,G__18993,G__18994,G__18995,G__18996));

break;
case "compile-syntax-check":
var G__18999 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19000 = cause_type;
var G__19001 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19002 = loc;
var G__19003 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18999,G__19000,G__19001,G__19002,G__19003) : format.call(null,G__18999,G__19000,G__19001,G__19002,G__19003));

break;
case "compilation":
var G__19004 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19005 = cause_type;
var G__19006 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19007 = loc;
var G__19008 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19004,G__19005,G__19006,G__19007,G__19008) : format.call(null,G__19004,G__19005,G__19006,G__19007,G__19008));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19009 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19010 = symbol;
var G__19011 = loc;
var G__19012 = (function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19013_19256 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19014_19257 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19015_19258 = true;
var _STAR_print_fn_STAR__temp_val__19016_19260 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19015_19258);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19016_19260);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18940_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18940_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19014_19257);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19013_19256);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19009,G__19010,G__19011,G__19012) : format.call(null,G__19009,G__19010,G__19011,G__19012));
} else {
var G__19018 = "Execution error%s at %s(%s).\n%s\n";
var G__19019 = cause_type;
var G__19020 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19021 = loc;
var G__19022 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19018,G__19019,G__19020,G__19021,G__19022) : format.call(null,G__19018,G__19019,G__19020,G__19021,G__19022));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18954__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
