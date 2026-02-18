goog.provide('taninim.api');
taninim.api.parse_jsonl = (function taninim$api$parse_jsonl(text){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__12566_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(p1__12566_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/\n/)));
});
taninim.api.yellin_base = "http://localhost:8081";
taninim.api.kudu_base = "http://localhost:8082";
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("api","authenticate","api/authenticate",744384885),(function (p__12567,p__12568){
var map__12569 = p__12567;
var map__12569__$1 = cljs.core.__destructure_map(map__12569);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12569__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12570 = p__12568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12570,(0),null);
var ext_auth_response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12570,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[taninim.api.yellin_base,"/auth"].join(''),new cljs.core.Keyword(null,"params","params",710516235),ext_auth_response,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","success","auth/success",1884197866)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("auth","failure","auth/failure",713201887)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("api","fetch-library","api/fetch-library",1631602813),(function (p__12573,_){
var map__12574 = p__12573;
var map__12574__$1 = cljs.core.__destructure_map(map__12574);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12574__$1,new cljs.core.Keyword(null,"db","db",993250759));
var token = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"token","token",-1211463215)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[taninim.api.kudu_base,"/library.jsonl"].join(''),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"t","t",-1397832519),token], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null, )),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("api","library-fetched","api/library-fetched",-512174506)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("library","fetch-failed","library/fetch-failed",-2130490724)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("api","library-fetched","api/library-fetched",-512174506),(function (_,p__12575){
var vec__12576 = p__12575;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12576,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12576,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("library","loaded","library/loaded",-1415836728),taninim.api.parse_jsonl(response)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("api","acquire-lease","api/acquire-lease",988528083),(function (p__12579,p__12580){
var map__12581 = p__12579;
var map__12581__$1 = cljs.core.__destructure_map(map__12581);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12581__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12582 = p__12580;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12582,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12582,(1),null);
var map__12585 = new cljs.core.Keyword(null,"auth","auth",1389754926).cljs$core$IFn$_invoke$arity$1(db);
var map__12585__$1 = cljs.core.__destructure_map(map__12585);
var fb_user_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12585__$1,new cljs.core.Keyword(null,"fb-user-id","fb-user-id",-1229679807));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12585__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[taninim.api.yellin_base,"/lease"].join(''),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"userId","userId",575594135),fb_user_id,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"album","album",-1432296582),album_id], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lease","acquired","lease/acquired",-331363372),album_id], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lease","acquire-failed","lease/acquire-failed",1991955214),album_id], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("api","release-lease","api/release-lease",-110663430),(function (p__12586,p__12587){
var map__12588 = p__12586;
var map__12588__$1 = cljs.core.__destructure_map(map__12588);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12588__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12589 = p__12587;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(0),null);
var album_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(1),null);
var map__12592 = new cljs.core.Keyword(null,"auth","auth",1389754926).cljs$core$IFn$_invoke$arity$1(db);
var map__12592__$1 = cljs.core.__destructure_map(map__12592);
var fb_user_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12592__$1,new cljs.core.Keyword(null,"fb-user-id","fb-user-id",-1229679807));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12592__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),[taninim.api.yellin_base,"/lease"].join(''),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"userId","userId",575594135),fb_user_id,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"album","album",-1432296582),album_id], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lease","released","lease/released",5495925),album_id], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lease","release-failed","lease/release-failed",1244536122),album_id], null)], null)], null);
}));
taninim.api.audio_url = (function taninim$api$audio_url(track_uuid,format,token){
return [taninim.api.kudu_base,"/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(track_uuid),".",cljs.core.name(format),"?t=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});

//# sourceMappingURL=taninim.api.js.map
