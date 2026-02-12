goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__20002__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20009__i = 0, G__20009__a = new Array(arguments.length -  0);
while (G__20009__i < G__20009__a.length) {G__20009__a[G__20009__i] = arguments[G__20009__i + 0]; ++G__20009__i;}
  args = new cljs.core.IndexedSeq(G__20009__a,0,null);
} 
return G__20002__delegate.call(this,args);};
G__20002.cljs$lang$maxFixedArity = 0;
G__20002.cljs$lang$applyTo = (function (arglist__20010){
var args = cljs.core.seq(arglist__20010);
return G__20002__delegate(args);
});
G__20002.cljs$core$IFn$_invoke$arity$variadic = G__20002__delegate;
return G__20002;
})()
);

(o.error = (function() { 
var G__20016__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20017__i = 0, G__20017__a = new Array(arguments.length -  0);
while (G__20017__i < G__20017__a.length) {G__20017__a[G__20017__i] = arguments[G__20017__i + 0]; ++G__20017__i;}
  args = new cljs.core.IndexedSeq(G__20017__a,0,null);
} 
return G__20016__delegate.call(this,args);};
G__20016.cljs$lang$maxFixedArity = 0;
G__20016.cljs$lang$applyTo = (function (arglist__20018){
var args = cljs.core.seq(arglist__20018);
return G__20016__delegate(args);
});
G__20016.cljs$core$IFn$_invoke$arity$variadic = G__20016__delegate;
return G__20016;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
