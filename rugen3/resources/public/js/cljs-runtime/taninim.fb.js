goog.provide('taninim.fb');
taninim.fb.app_id = "398404340829160";
if((typeof taninim !== 'undefined') && (typeof taninim.fb !== 'undefined') && (typeof taninim.fb.initialized_QMARK_ !== 'undefined')){
} else {
taninim.fb.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
taninim.fb.auth_response__GT_map = (function taninim$fb$auth_response__GT_map(auth_response){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"userID","userID",-1853227209),auth_response.userID,new cljs.core.Keyword(null,"accessToken","accessToken",1833707055),auth_response.accessToken,new cljs.core.Keyword(null,"signedRequest","signedRequest",-1484612225),auth_response.signedRequest,new cljs.core.Keyword(null,"expiresIn","expiresIn",2043460502),auth_response.expiresIn,new cljs.core.Keyword(null,"data_access_expiration_time","data_access_expiration_time",867054747),auth_response.data_access_expiration_time], null);
});
taninim.fb.handle_login_response = (function taninim$fb$handle_login_response(response){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("connected",response.status)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","login","auth/login",49867479),taninim.fb.auth_response__GT_map(response.authResponse)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","failure","auth/failure",713201887),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reason","reason",-2070751759),response.status], null)], null));
}
});
taninim.fb.ensure_init = (function taninim$fb$ensure_init(){
if((((typeof FB !== 'undefined')) && (cljs.core.not(cljs.core.deref(taninim.fb.initialized_QMARK_))))){
FB.init(({"appId": taninim.fb.app_id, "cookie": true, "xfbml": true, "version": "v19.0"}));

return cljs.core.reset_BANG_(taninim.fb.initialized_QMARK_,true);
} else {
return null;
}
});
taninim.fb.login = (function taninim$fb$login(){
taninim.fb.ensure_init();

return FB.login(taninim.fb.handle_login_response,({"scope": "public_profile,email"}));
});
taninim.fb.init = (function taninim$fb$init(){
return taninim.fb.ensure_init();
});

//# sourceMappingURL=taninim.fb.js.map
