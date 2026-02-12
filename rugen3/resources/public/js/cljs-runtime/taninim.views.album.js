goog.provide('taninim.views.album');
taninim.views.album.track_item = (function taninim$views$album$track_item(track){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.track-item","div.track-item",-1770427348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("player","play","player/play",-1572447489),track], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.track-number","span.track-number",-1029395443),new cljs.core.Keyword(null,"no","no",-390373634).cljs$core$IFn$_invoke$arity$1(track)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.track-title","span.track-title",844615584),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(track)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.track-duration","span.track-duration",1106031667),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(track)], null)], null);
});
taninim.views.album.track_list = (function taninim$views$album$track_list(album){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.track-list","div.track-list",-567258581),(function (){var iter__5480__auto__ = (function taninim$views$album$track_list_$_iter__12690(s__12691){
return (new cljs.core.LazySeq(null,(function (){
var s__12691__$1 = s__12691;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12691__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var section = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__12691__$1,section,xs__6360__auto__,temp__5804__auto__){
return (function taninim$views$album$track_list_$_iter__12690_$_iter__12692(s__12693){
return (new cljs.core.LazySeq(null,((function (s__12691__$1,section,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__12693__$1 = s__12693;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12693__$1);
if(temp__5804__auto____$1){
var s__12693__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12693__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12693__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12695 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12694 = (0);
while(true){
if((i__12694 < size__5479__auto__)){
var track = cljs.core._nth(c__5478__auto__,i__12694);
cljs.core.chunk_append(b__12695,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taninim.views.album.track_item,track], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(track)], null)));

var G__12696 = (i__12694 + (1));
i__12694 = G__12696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12695),taninim$views$album$track_list_$_iter__12690_$_iter__12692(cljs.core.chunk_rest(s__12693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12695),null);
}
} else {
var track = cljs.core.first(s__12693__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taninim.views.album.track_item,track], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(track)], null)),taninim$views$album$track_list_$_iter__12690_$_iter__12692(cljs.core.rest(s__12693__$2)));
}
} else {
return null;
}
break;
}
});})(s__12691__$1,section,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__12691__$1,section,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(new cljs.core.Keyword(null,"tracks","tracks",-326768501).cljs$core$IFn$_invoke$arity$1(section)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,taninim$views$album$track_list_$_iter__12690(cljs.core.rest(s__12691__$1)));
} else {
var G__12697 = cljs.core.rest(s__12691__$1);
s__12691__$1 = G__12697;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(album));
})()], null);
});

//# sourceMappingURL=taninim.views.album.js.map
