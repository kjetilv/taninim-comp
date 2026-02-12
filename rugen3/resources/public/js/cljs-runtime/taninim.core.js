goog.provide('taninim.core');
if((typeof taninim !== 'undefined') && (typeof taninim.core !== 'undefined') && (typeof taninim.core.root !== 'undefined')){
} else {
taninim.core.root = reagent.dom.client.create_root(document.getElementById("app"));
}
taninim.core.mount_root = (function taninim$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(taninim.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taninim.views.shell.app], null));
});
taninim.core.init = (function taninim$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

(window.fbAsyncInit = taninim.fb.init);

return taninim.core.mount_root();
});

//# sourceMappingURL=taninim.core.js.map
