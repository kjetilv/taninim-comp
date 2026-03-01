goog.provide('taninim.events');
taninim.events.unauthorized_QMARK_ = (function taninim$events$unauthorized_QMARK_(error){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((401),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(error));
});
taninim.events.error_message = (function taninim$events$error_message(error){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(error);
var detail = (function (){var or__5002__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"error","error",-978969032)], null));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return "Unknown error";
}
}
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = status;
if(cljs.core.truth_(and__5000__auto__)){
return (status > (0));
} else {
return and__5000__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(detail)].join('');
} else {
return detail;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("error","show","error/show",-789848873),(function (db,p__12731){
var vec__12732 = p__12731;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12732,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12732,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),message);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("error","dismiss","error/dismiss",467369425),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","login","auth/login",49867479),(function (p__12735,p__12736){
var map__12737 = p__12735;
var map__12737__$1 = cljs.core.__destructure_map(map__12737);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12737__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12738 = p__12736;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12738,(0),null);
var ext_auth_response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12738,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"authenticating","authenticating",-1022679476)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"fb-user-id","fb-user-id",-1229679807)], null),new cljs.core.Keyword(null,"userID","userID",-1853227209).cljs$core$IFn$_invoke$arity$1(ext_auth_response)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","authenticate","api/authenticate",744384885),ext_auth_response], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","success","auth/success",1884197866),(function (db,p__12741){
var vec__12742 = p__12741;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12742,(0),null);
var map__12745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12742,(1),null);
var map__12745__$1 = cljs.core.__destructure_map(map__12745);
var user_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12745__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12745__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var fb_user_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"fb-user-id","fb-user-id",-1229679807)], null));
taninim.state.persist_auth_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"fb-user-id","fb-user-id",-1229679807),fb_user_id,new cljs.core.Keyword(null,"token","token",-1211463215),token], null));

return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"user-id","user-id",-206822291)], null),user_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"token","token",-1211463215)], null),token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"authenticated","authenticated",1282954211));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","failure","auth/failure",713201887),(function (p__12746,p__12747){
var map__12748 = p__12746;
var map__12748__$1 = cljs.core.__destructure_map(map__12748);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12748__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12749 = p__12747;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12749,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12749,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"unauthenticated","unauthenticated",-2029628705)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","show","error/show",-789848873),["Authentication failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taninim.events.error_message(error))].join('')], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","logout","auth/logout",1413182625),(function (_db,_){
taninim.state.clear_auth_BANG_();

return taninim.state.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("library","fetch","library/fetch",2039085303),(function (p__12752,_){
var map__12753 = p__12752;
var map__12753__$1 = cljs.core.__destructure_map(map__12753);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12753__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","fetch-library","api/fetch-library",1631602813)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("library","loaded","library/loaded",-1415836728),(function (db,p__12754){
var vec__12755 = p__12754;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12755,(0),null);
var albums = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12755,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"albums","albums",-2017039447)], null),albums),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("library","fetch-failed","library/fetch-failed",-2130490724),(function (p__12758,p__12759){
var map__12760 = p__12758;
var map__12760__$1 = cljs.core.__destructure_map(map__12760);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12760__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12761 = p__12759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(1),null);
if(taninim.events.unauthorized_QMARK_(error)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","logout","auth/logout",1413182625)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","show","error/show",-789848873),["Failed to load library: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taninim.events.error_message(error))].join('')], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","acquire","lease/acquire",1466340397),(function (p__12764,p__12765){
var map__12766 = p__12764;
var map__12766__$1 = cljs.core.__destructure_map(map__12766);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12766__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12767 = p__12765;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12767,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12767,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.conj,album_id),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","acquire-lease","api/acquire-lease",988528083),album_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","acquired","lease/acquired",-331363372),(function (db,p__12770){
var vec__12771 = p__12770;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12771,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12771,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.disj,album_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.conj,album_id);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","release","lease/release",-1431689167),(function (p__12774,p__12775){
var map__12776 = p__12774;
var map__12776__$1 = cljs.core.__destructure_map(map__12776);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12776__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12777 = p__12775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12777,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12777,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.disj,album_id),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","release-lease","api/release-lease",-110663430),album_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","released","lease/released",5495925),(function (db,p__12780){
var vec__12781 = p__12780;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12781,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12781,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.disj,album_id);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","acquire-failed","lease/acquire-failed",1991955214),(function (p__12784,p__12785){
var map__12786 = p__12784;
var map__12786__$1 = cljs.core.__destructure_map(map__12786);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12786__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12787 = p__12785;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12787,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12787,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12787,(2),null);
if(taninim.events.unauthorized_QMARK_(error)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","logout","auth/logout",1413182625)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.disj,album_id),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","show","error/show",-789848873),["Failed to acquire lease: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taninim.events.error_message(error))].join('')], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","release-failed","lease/release-failed",1244536122),(function (p__12790,p__12791){
var map__12792 = p__12790;
var map__12792__$1 = cljs.core.__destructure_map(map__12792);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12792__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12793 = p__12791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12793,(0),null);
var _album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12793,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12793,(2),null);
if(taninim.events.unauthorized_QMARK_(error)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","logout","auth/logout",1413182625)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","show","error/show",-789848873),["Failed to release lease: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taninim.events.error_message(error))].join('')], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","play","player/play",-1572447489),(function (p__12796,p__12797){
var map__12798 = p__12796;
var map__12798__$1 = cljs.core.__destructure_map(map__12798);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12798__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12799 = p__12797;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12799,(0),null);
var track = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12799,(1),null);
console.log("player/play",cljs.core.clj__GT_js(track));

var token = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"token","token",-1211463215)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"current-track","current-track",483190593)], null),track),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"playing","playing",70013335)),new cljs.core.Keyword("audio","play","audio/play",-470328828),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track","track",195787487),track,new cljs.core.Keyword(null,"token","token",-1211463215),token], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","pause","player/pause",-1050709257),(function (p__12802,_){
var map__12803 = p__12802;
var map__12803__$1 = cljs.core.__destructure_map(map__12803);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12803__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"paused","paused",-1710376127)),new cljs.core.Keyword("audio","pause","audio/pause",-2119274046),true], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","stop","player/stop",1296737267),(function (p__12804,_){
var map__12805 = p__12804;
var map__12805__$1 = cljs.core.__destructure_map(map__12805);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12805__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"current-track","current-track",483190593)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"position","position",-2011731912)], null),(0)),new cljs.core.Keyword("audio","stop","audio/stop",-2032556824),true], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","set-playlist","player/set-playlist",2046529511),(function (db,p__12806){
var vec__12807 = p__12806;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12807,(0),null);
var tracks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12807,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"playlist","playlist",1952276871)], null),tracks);
}));

//# sourceMappingURL=taninim.events.js.map
