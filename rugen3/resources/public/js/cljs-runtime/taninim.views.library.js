goog.provide('taninim.views.library');
taninim.views.library.all_tracks = (function taninim$views$library$all_tracks(album){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tracks","tracks",-326768501),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(album)], 0));
});
taninim.views.library.album_card = (function taninim$views$library$album_card(album,active_leases){
var leased_QMARK_ = cljs.core.contains_QMARK_(active_leases,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(album));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.album-card","div.album-card",-241634436),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((leased_QMARK_)?"leased":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.album-title","div.album-title",1281930490),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(album)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.album-artist","div.album-artist",1181650613),new cljs.core.Keyword(null,"artist","artist",152869709).cljs$core$IFn$_invoke$arity$1(album)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.album-tracks","div.album-tracks",906776200),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(taninim.views.library.all_tracks(album)))," tracks"].join('')], null),((leased_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lease","release","lease/release",-1431689167),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(album)], null));
})], null),"Release"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lease","acquire","lease/acquire",1466340397),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(album)], null));
})], null),"Acquire"], null)),((leased_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taninim.views.album.track_list,album], null):null)], null);
});
taninim.views.library.library_view = (function taninim$views$library$library_view(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("library","fetch","library/fetch",2039085303)], null));

return (function (){
var albums = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"albums","albums",-2017039447)], null)));
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library-loading?","library-loading?",927194100)], null)));
var active_leases = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-leases","active-leases",1444999241)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.library","div.library",1677056426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Library"], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loading","div.loading",-155515768),"Loading library..."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.album-grid","div.album-grid",1190495401),(function (){var iter__5480__auto__ = (function taninim$views$library$library_view_$_iter__12698(s__12699){
return (new cljs.core.LazySeq(null,(function (){
var s__12699__$1 = s__12699;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12699__$1);
if(temp__5804__auto__){
var s__12699__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12699__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12699__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12701 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12700 = (0);
while(true){
if((i__12700 < size__5479__auto__)){
var album = cljs.core._nth(c__5478__auto__,i__12700);
cljs.core.chunk_append(b__12701,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [taninim.views.library.album_card,album,active_leases], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(album)], null)));

var G__12702 = (i__12700 + (1));
i__12700 = G__12702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12701),taninim$views$library$library_view_$_iter__12698(cljs.core.chunk_rest(s__12699__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12701),null);
}
} else {
var album = cljs.core.first(s__12699__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [taninim.views.library.album_card,album,active_leases], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(album)], null)),taninim$views$library$library_view_$_iter__12698(cljs.core.rest(s__12699__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(albums);
})()], null))], null);
});
});

//# sourceMappingURL=taninim.views.library.js.map
