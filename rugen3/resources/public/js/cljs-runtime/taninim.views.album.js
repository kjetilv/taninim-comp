goog.provide('taninim.views.album');
taninim.views.album.format_duration = (function taninim$views$album$format_duration(seconds){
var s = (seconds | 0);
var m = cljs.core.quot(s,(60));
var ss = cljs.core.rem(s,(60));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ss < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ss));
});
taninim.views.album.track_item = (function taninim$views$album$track_item(track){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.track-item","div.track-item",-1770427348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","play","player/play",-1572447489),track], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.track-number","span.track-number",-1029395443),new cljs.core.Keyword(null,"no","no",-390373634).cljs$core$IFn$_invoke$arity$1(track)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.track-title","span.track-title",844615584),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(track)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.track-duration","span.track-duration",1106031667),taninim.views.album.format_duration(new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(track))], null)], null);
});
taninim.views.album.track_list = (function taninim$views$album$track_list(album){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.track-list","div.track-list",-567258581),(function (){var iter__5649__auto__ = (function taninim$views$album$track_list_$_iter__24068(s__24069){
return (new cljs.core.LazySeq(null,(function (){
var s__24069__$1 = s__24069;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__24069__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var section = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__24069__$1,section,xs__6385__auto__,temp__5825__auto__){
return (function taninim$views$album$track_list_$_iter__24068_$_iter__24070(s__24071){
return (new cljs.core.LazySeq(null,((function (s__24069__$1,section,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__24071__$1 = s__24071;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__24071__$1);
if(temp__5825__auto____$1){
var s__24071__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24071__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__24071__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__24073 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__24072 = (0);
while(true){
if((i__24072 < size__5648__auto__)){
var track = cljs.core._nth(c__5647__auto__,i__24072);
cljs.core.chunk_append(b__24073,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taninim.views.album.track_item,track], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(track)], null)));

var G__24105 = (i__24072 + (1));
i__24072 = G__24105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24073),taninim$views$album$track_list_$_iter__24068_$_iter__24070(cljs.core.chunk_rest(s__24071__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24073),null);
}
} else {
var track = cljs.core.first(s__24071__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taninim.views.album.track_item,track], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(track)], null)),taninim$views$album$track_list_$_iter__24068_$_iter__24070(cljs.core.rest(s__24071__$2)));
}
} else {
return null;
}
break;
}
});})(s__24069__$1,section,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__24069__$1,section,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(new cljs.core.Keyword(null,"tracks","tracks",-326768501).cljs$core$IFn$_invoke$arity$1(section)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,taninim$views$album$track_list_$_iter__24068(cljs.core.rest(s__24069__$1)));
} else {
var G__24106 = cljs.core.rest(s__24069__$1);
s__24069__$1 = G__24106;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(album));
})()], null);
});

//# sourceMappingURL=taninim.views.album.js.map
