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
var G__19846__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19846 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19856__i = 0, G__19856__a = new Array(arguments.length -  0);
while (G__19856__i < G__19856__a.length) {G__19856__a[G__19856__i] = arguments[G__19856__i + 0]; ++G__19856__i;}
  args = new cljs.core.IndexedSeq(G__19856__a,0,null);
} 
return G__19846__delegate.call(this,args);};
G__19846.cljs$lang$maxFixedArity = 0;
G__19846.cljs$lang$applyTo = (function (arglist__19859){
var args = cljs.core.seq(arglist__19859);
return G__19846__delegate(args);
});
G__19846.cljs$core$IFn$_invoke$arity$variadic = G__19846__delegate;
return G__19846;
})()
);

(o.error = (function() { 
var G__19865__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19873__i = 0, G__19873__a = new Array(arguments.length -  0);
while (G__19873__i < G__19873__a.length) {G__19873__a[G__19873__i] = arguments[G__19873__i + 0]; ++G__19873__i;}
  args = new cljs.core.IndexedSeq(G__19873__a,0,null);
} 
return G__19865__delegate.call(this,args);};
G__19865.cljs$lang$maxFixedArity = 0;
G__19865.cljs$lang$applyTo = (function (arglist__19874){
var args = cljs.core.seq(arglist__19874);
return G__19865__delegate(args);
});
G__19865.cljs$core$IFn$_invoke$arity$variadic = G__19865__delegate;
return G__19865;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
