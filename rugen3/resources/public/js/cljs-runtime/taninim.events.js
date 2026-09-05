goog.provide('taninim.events');
taninim.events.unauthorized_QMARK_ = (function taninim$events$unauthorized_QMARK_(error){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((401),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(error));
});
taninim.events.error_message = (function taninim$events$error_message(error){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(error);
var detail = (function (){var or__5162__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"error","error",-978969032)], null));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
var or__5162__auto____$2 = new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__5162__auto____$2)){
return or__5162__auto____$2;
} else {
return "Unknown error";
}
}
}
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = status;
if(cljs.core.truth_(and__5160__auto__)){
return (status > (0));
} else {
return and__5160__auto__;
}
})())){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(detail));
} else {
return detail;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("error","show","error/show",-789848873),(function (db,p__24058){
var vec__24059 = p__24058;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24059,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24059,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),message);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("error","dismiss","error/dismiss",467369425),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","login","auth/login",49867479),(function (p__24062,p__24063){
var map__24064 = p__24062;
var map__24064__$1 = cljs.core.__destructure_map(map__24064);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24064__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24065 = p__24063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24065,(0),null);
var ext_auth_response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24065,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"authenticating","authenticating",-1022679476)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"fb-user-id","fb-user-id",-1229679807)], null),new cljs.core.Keyword(null,"userID","userID",-1853227209).cljs$core$IFn$_invoke$arity$1(ext_auth_response)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","authenticate","api/authenticate",744384885),ext_auth_response], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","success","auth/success",1884197866),(function (db,p__24074){
var vec__24075 = p__24074;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24075,(0),null);
var map__24078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24075,(1),null);
var map__24078__$1 = cljs.core.__destructure_map(map__24078);
var user_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24078__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24078__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var fb_user_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"fb-user-id","fb-user-id",-1229679807)], null));
taninim.state.persist_auth_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"fb-user-id","fb-user-id",-1229679807),fb_user_id,new cljs.core.Keyword(null,"token","token",-1211463215),token], null));

return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"user-id","user-id",-206822291)], null),user_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"token","token",-1211463215)], null),token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"authenticated","authenticated",1282954211));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","failure","auth/failure",713201887),(function (p__24079,p__24080){
var map__24081 = p__24079;
var map__24081__$1 = cljs.core.__destructure_map(map__24081);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24081__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24082 = p__24080;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24082,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24082,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"unauthenticated","unauthenticated",-2029628705)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","show","error/show",-789848873),(""+"Authentication failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taninim.events.error_message(error)))], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","logout","auth/logout",1413182625),(function (_db,_){
taninim.state.clear_auth_BANG_();

return taninim.state.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("library","fetch","library/fetch",2039085303),(function (p__24085,_){
var map__24086 = p__24085;
var map__24086__$1 = cljs.core.__destructure_map(map__24086);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24086__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","fetch-library","api/fetch-library",1631602813)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("library","loaded","library/loaded",-1415836728),(function (db,p__24089){
var vec__24090 = p__24089;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24090,(0),null);
var albums = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24090,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"albums","albums",-2017039447)], null),albums),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("library","fetch-failed","library/fetch-failed",-2130490724),(function (p__24093,p__24094){
var map__24095 = p__24093;
var map__24095__$1 = cljs.core.__destructure_map(map__24095);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24095__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24096 = p__24094;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24096,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24096,(1),null);
if(taninim.events.unauthorized_QMARK_(error)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","logout","auth/logout",1413182625)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","show","error/show",-789848873),(""+"Failed to load library: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taninim.events.error_message(error)))], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","acquire","lease/acquire",1466340397),(function (p__24099,p__24100){
var map__24101 = p__24099;
var map__24101__$1 = cljs.core.__destructure_map(map__24101);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24101__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24102 = p__24100;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24102,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24102,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.conj,album_id),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","acquire-lease","api/acquire-lease",988528083),album_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","acquired","lease/acquired",-331363372),(function (db,p__24107){
var vec__24108 = p__24107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24108,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24108,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.disj,album_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.conj,album_id);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","release","lease/release",-1431689167),(function (p__24111,p__24112){
var map__24113 = p__24111;
var map__24113__$1 = cljs.core.__destructure_map(map__24113);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24113__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24114 = p__24112;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24114,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24114,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.disj,album_id),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","release-lease","api/release-lease",-110663430),album_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","released","lease/released",5495925),(function (db,p__24117){
var vec__24118 = p__24117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24118,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24118,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.disj,album_id);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","acquire-failed","lease/acquire-failed",1991955214),(function (p__24121,p__24122){
var map__24123 = p__24121;
var map__24123__$1 = cljs.core.__destructure_map(map__24123);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24123__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24124 = p__24122;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24124,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24124,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24124,(2),null);
if(taninim.events.unauthorized_QMARK_(error)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","logout","auth/logout",1413182625)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.disj,album_id),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","show","error/show",-789848873),(""+"Failed to acquire lease: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taninim.events.error_message(error)))], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","release-failed","lease/release-failed",1244536122),(function (p__24129,p__24130){
var map__24131 = p__24129;
var map__24131__$1 = cljs.core.__destructure_map(map__24131);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24131__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24132 = p__24130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24132,(0),null);
var _album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24132,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24132,(2),null);
if(taninim.events.unauthorized_QMARK_(error)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","logout","auth/logout",1413182625)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","show","error/show",-789848873),(""+"Failed to release lease: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(taninim.events.error_message(error)))], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","play","player/play",-1572447489),(function (p__24135,p__24136){
var map__24137 = p__24135;
var map__24137__$1 = cljs.core.__destructure_map(map__24137);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24137__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24138 = p__24136;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24138,(0),null);
var track = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24138,(1),null);
console.log("player/play",cljs.core.clj__GT_js(track));

var token = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"token","token",-1211463215)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"current-track","current-track",483190593)], null),track),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"playing","playing",70013335)),new cljs.core.Keyword("audio","play","audio/play",-470328828),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track","track",195787487),track,new cljs.core.Keyword(null,"token","token",-1211463215),token], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","pause","player/pause",-1050709257),(function (p__24141,_){
var map__24142 = p__24141;
var map__24142__$1 = cljs.core.__destructure_map(map__24142);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24142__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"paused","paused",-1710376127)),new cljs.core.Keyword("audio","pause","audio/pause",-2119274046),true], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","stop","player/stop",1296737267),(function (p__24143,_){
var map__24144 = p__24143;
var map__24144__$1 = cljs.core.__destructure_map(map__24144);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24144__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"current-track","current-track",483190593)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"position","position",-2011731912)], null),(0)),new cljs.core.Keyword("audio","stop","audio/stop",-2032556824),true], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","lease-expired","player/lease-expired",1529825097),(function (p__24145,_){
var map__24146 = p__24145;
var map__24146__$1 = cljs.core.__destructure_map(map__24146);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24146__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"current-track","current-track",483190593)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"lease-expired","lease-expired",367843946)),new cljs.core.Keyword("audio","stop","audio/stop",-2032556824),true], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","set-playlist","player/set-playlist",2046529511),(function (db,p__24147){
var vec__24148 = p__24147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24148,(0),null);
var tracks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24148,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"playlist","playlist",1952276871)], null),tracks);
}));

//# sourceMappingURL=taninim.events.js.map
