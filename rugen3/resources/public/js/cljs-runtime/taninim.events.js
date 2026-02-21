goog.provide('taninim.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","login","auth/login",49867479),(function (p__12642,p__12643){
var map__12644 = p__12642;
var map__12644__$1 = cljs.core.__destructure_map(map__12644);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12644__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12645 = p__12643;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12645,(0),null);
var ext_auth_response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12645,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"authenticating","authenticating",-1022679476)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"fb-user-id","fb-user-id",-1229679807)], null),new cljs.core.Keyword(null,"userID","userID",-1853227209).cljs$core$IFn$_invoke$arity$1(ext_auth_response)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","authenticate","api/authenticate",744384885),ext_auth_response], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","success","auth/success",1884197866),(function (db,p__12650){
var vec__12651 = p__12650;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12651,(0),null);
var map__12654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12651,(1),null);
var map__12654__$1 = cljs.core.__destructure_map(map__12654);
var user_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12654__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12654__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"user-id","user-id",-206822291)], null),user_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"token","token",-1211463215)], null),token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"authenticated","authenticated",1282954211));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("auth","failure","auth/failure",713201887),(function (db,p__12656){
var vec__12657 = p__12656;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12657,(0),null);
var _error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12657,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"unauthenticated","unauthenticated",-2029628705));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("library","fetch","library/fetch",2039085303),(function (p__12660,_){
var map__12661 = p__12660;
var map__12661__$1 = cljs.core.__destructure_map(map__12661);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12661__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","fetch-library","api/fetch-library",1631602813)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("library","loaded","library/loaded",-1415836728),(function (db,p__12663){
var vec__12664 = p__12663;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12664,(0),null);
var albums = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12664,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"albums","albums",-2017039447)], null),albums),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("library","fetch-failed","library/fetch-failed",-2130490724),(function (db,p__12669){
var vec__12670 = p__12669;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12670,(0),null);
var _error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12670,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),new cljs.core.Keyword(null,"error","error",-978969032)], null),true);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","acquire","lease/acquire",1466340397),(function (p__12673,p__12674){
var map__12675 = p__12673;
var map__12675__$1 = cljs.core.__destructure_map(map__12675);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12675__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12676 = p__12674;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12676,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12676,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.conj,album_id),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","acquire-lease","api/acquire-lease",988528083),album_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","acquired","lease/acquired",-331363372),(function (db,p__12679){
var vec__12680 = p__12679;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12680,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12680,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.disj,album_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.conj,album_id);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","release","lease/release",-1431689167),(function (p__12683,p__12684){
var map__12685 = p__12683;
var map__12685__$1 = cljs.core.__destructure_map(map__12685);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12685__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12686 = p__12684;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12686,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12686,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.disj,album_id),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","release-lease","api/release-lease",-110663430),album_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","released","lease/released",5495925),(function (db,p__12689){
var vec__12690 = p__12689;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12690,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12690,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.disj,album_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","acquire-failed","lease/acquire-failed",1991955214),(function (db,p__12693){
var vec__12694 = p__12693;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12694,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12694,(1),null);
var _error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12694,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leases","leases",1110965193),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.disj,album_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lease","release-failed","lease/release-failed",1244536122),(function (db,p__12697){
var vec__12698 = p__12697;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12698,(0),null);
var _album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12698,(1),null);
var _error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12698,(2),null);
return db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","play","player/play",-1572447489),(function (p__12701,p__12702){
var map__12703 = p__12701;
var map__12703__$1 = cljs.core.__destructure_map(map__12703);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12703__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12704 = p__12702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12704,(0),null);
var track = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12704,(1),null);
console.log("player/play",cljs.core.clj__GT_js(track));

var token = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"token","token",-1211463215)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"current-track","current-track",483190593)], null),track),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"playing","playing",70013335)),new cljs.core.Keyword("audio","play","audio/play",-470328828),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track","track",195787487),track,new cljs.core.Keyword(null,"token","token",-1211463215),token], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","pause","player/pause",-1050709257),(function (p__12707,_){
var map__12708 = p__12707;
var map__12708__$1 = cljs.core.__destructure_map(map__12708);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12708__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"paused","paused",-1710376127)),new cljs.core.Keyword("audio","pause","audio/pause",-2119274046),true], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","stop","player/stop",1296737267),(function (p__12709,_){
var map__12710 = p__12709;
var map__12710__$1 = cljs.core.__destructure_map(map__12710);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12710__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"current-track","current-track",483190593)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"position","position",-2011731912)], null),(0)),new cljs.core.Keyword("audio","stop","audio/stop",-2032556824),true], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("player","set-playlist","player/set-playlist",2046529511),(function (db,p__12711){
var vec__12712 = p__12711;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12712,(0),null);
var tracks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12712,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"playlist","playlist",1952276871)], null),tracks);
}));

//# sourceMappingURL=taninim.events.js.map
