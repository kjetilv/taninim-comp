goog.provide('taninim.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","login","auth/login",49867479),(function (p__12515,p__12516){
var map__12517 = p__12515;
var map__12517__$1 = cljs.core.__destructure_map(map__12517);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12517__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12518 = p__12516;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12518,(0),null);
var ext_auth_response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12518,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"authenticating","authenticating",-1022679476)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"fb-user-id","fb-user-id",-1229679807)], null),new cljs.core.Keyword(null,"userID","userID",-1853227209).cljs$core$IFn$_invoke$arity$1(ext_auth_response)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","authenticate","api/authenticate",744384885),ext_auth_response], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","success","auth/success",1884197866),(function (db,p__12521){
var vec__12522 = p__12521;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12522,(0),null);
var map__12525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12522,(1),null);
var map__12525__$1 = cljs.core.__destructure_map(map__12525);
var user_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12525__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12525__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"user-id","user-id",-206822291)], null),user_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"token","token",-1211463215)], null),token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"authenticated","authenticated",1282954211));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","failure","auth/failure",713201887),(function (db,p__12526){
var vec__12527 = p__12526;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12527,(0),null);
var _error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12527,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"unauthenticated","unauthenticated",-2029628705));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("library","fetch","library/fetch",2039085303),(function (p__12530,_){
var map__12531 = p__12530;
var map__12531__$1 = cljs.core.__destructure_map(map__12531);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12531__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","fetch-library","api/fetch-library",1631602813)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("library","loaded","library/loaded",-1415836728),(function (db,p__12532){
var vec__12533 = p__12532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12533,(0),null);
var albums = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12533,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"albums","albums",-2017039447)], null),albums),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("library","fetch-failed","library/fetch-failed",-2130490724),(function (db,p__12536){
var vec__12537 = p__12536;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12537,(0),null);
var _error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12537,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"error","error",-978969032)], null),true);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","acquire","lease/acquire",1466340397),(function (p__12540,p__12541){
var map__12542 = p__12540;
var map__12542__$1 = cljs.core.__destructure_map(map__12542);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12542__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12543 = p__12541;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12543,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12543,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.conj,album_id),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","acquire-lease","api/acquire-lease",988528083),album_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","acquired","lease/acquired",-331363372),(function (db,p__12546){
var vec__12547 = p__12546;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12547,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12547,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.disj,album_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.conj,album_id);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","release","lease/release",-1431689167),(function (p__12550,p__12551){
var map__12552 = p__12550;
var map__12552__$1 = cljs.core.__destructure_map(map__12552);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12552__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12553 = p__12551;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12553,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12553,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.disj,album_id),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","release-lease","api/release-lease",-110663430),album_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","released","lease/released",5495925),(function (db,p__12556){
var vec__12557 = p__12556;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12557,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12557,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.disj,album_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","acquire-failed","lease/acquire-failed",1991955214),(function (db,p__12560){
var vec__12561 = p__12560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561,(1),null);
var _error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.disj,album_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","release-failed","lease/release-failed",1244536122),(function (db,p__12564){
var vec__12565 = p__12564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12565,(0),null);
var _album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12565,(1),null);
var _error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12565,(2),null);
return db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","play","player/play",-1572447489),(function (p__12568,p__12569){
var map__12570 = p__12568;
var map__12570__$1 = cljs.core.__destructure_map(map__12570);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12570__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12571 = p__12569;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12571,(0),null);
var track = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12571,(1),null);
console.log("player/play",cljs.core.clj__GT_js(track));

var token = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"token","token",-1211463215)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"current-track","current-track",483190593)], null),track),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"playing","playing",70013335)),new cljs.core.Keyword("audio","play","audio/play",-470328828),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track","track",195787487),track,new cljs.core.Keyword(null,"token","token",-1211463215),token], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","pause","player/pause",-1050709257),(function (p__12574,_){
var map__12575 = p__12574;
var map__12575__$1 = cljs.core.__destructure_map(map__12575);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12575__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"paused","paused",-1710376127)),new cljs.core.Keyword("audio","pause","audio/pause",-2119274046),true], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","stop","player/stop",1296737267),(function (p__12576,_){
var map__12577 = p__12576;
var map__12577__$1 = cljs.core.__destructure_map(map__12577);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12577__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"current-track","current-track",483190593)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"position","position",-2011731912)], null),(0)),new cljs.core.Keyword("audio","stop","audio/stop",-2032556824),true], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","set-playlist","player/set-playlist",2046529511),(function (db,p__12578){
var vec__12579 = p__12578;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12579,(0),null);
var tracks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12579,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"playlist","playlist",1952276871)], null),tracks);
}));

//# sourceMappingURL=taninim.events.js.map
