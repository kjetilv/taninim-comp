goog.provide('taninim.views.shell');
taninim.views.shell.app = (function taninim$views$shell$app(){
var auth_status = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth-status","auth-status",1815459849)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),(function (){var G__12415 = auth_status;
var G__12415__$1 = (((G__12415 instanceof cljs.core.Keyword))?G__12415.fqn:null);
switch (G__12415__$1) {
case "unauthenticated":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taninim.views.auth.login_view], null);

break;
case "authenticating":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loading","div.loading",-155515768),"Authenticating..."], null);

break;
case "authenticated":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taninim.views.library.library_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taninim.views.player.player_bar], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12415__$1)].join('')));

}
})()], null);
});

//# sourceMappingURL=taninim.views.shell.js.map
