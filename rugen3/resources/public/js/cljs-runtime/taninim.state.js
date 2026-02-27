goog.provide('taninim.state');
taninim.state.default_db = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"fb-user-id","fb-user-id",-1229679807),null,new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unauthenticated","unauthenticated",-2029628705)], null),new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"albums","albums",-2017039447),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], null),new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-track","current-track",483190593),null,new cljs.core.Keyword(null,"playlist","playlist",1952276871),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null)], null);
taninim.state.auth_storage_key = "taninim-auth";
taninim.state.persist_auth_BANG_ = (function taninim$state$persist_auth_BANG_(p__12416){
var map__12417 = p__12416;
var map__12417__$1 = cljs.core.__destructure_map(map__12417);
var user_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12417__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var fb_user_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12417__$1,new cljs.core.Keyword(null,"fb-user-id","fb-user-id",-1229679807));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12417__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
return localStorage.setItem(taninim.state.auth_storage_key,JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"fb-user-id","fb-user-id",-1229679807),fb_user_id,new cljs.core.Keyword(null,"token","token",-1211463215),token], null))));
});
taninim.state.clear_auth_BANG_ = (function taninim$state$clear_auth_BANG_(){
return localStorage.removeItem(taninim.state.auth_storage_key);
});
taninim.state.restore_auth = (function taninim$state$restore_auth(){
var temp__5804__auto__ = localStorage.getItem(taninim.state.auth_storage_key);
if(cljs.core.truth_(temp__5804__auto__)){
var raw = temp__5804__auto__;
var parsed = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(raw),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(parsed))){
return parsed;
} else {
return null;
}
} else {
return null;
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
var temp__5802__auto__ = taninim.state.restore_auth();
if(cljs.core.truth_(temp__5802__auto__)){
var auth = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taninim.state.default_db,new cljs.core.Keyword(null,"auth","auth",1389754926),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auth","auth",1389754926).cljs$core$IFn$_invoke$arity$1(taninim.state.default_db),auth,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"authenticated","authenticated",1282954211)], null)], 0))),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("library","fetch","library/fetch",2039085303)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),taninim.state.default_db], null);
}
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"auth","auth",1389754926),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"auth","auth",1389754926).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"auth-status","auth-status",1815459849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"status","status",-1997798413)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"auth-token","auth-token",30990976),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"token","token",-1211463215)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"library","library",467978288),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"library","library",467978288).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"albums","albums",-2017039447),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"albums","albums",-2017039447)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"library-loading?","library-loading?",927194100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"leases","leases",1110965193),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"leases","leases",1110965193).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"active-leases","active-leases",1444999241),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"active","active",1895962068)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"player-state","player-state",-337228580),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-track","current-track",483190593),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"current-track","current-track",483190593)], null));
})], 0));

//# sourceMappingURL=taninim.state.js.map
