goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14621 = (function (f,blockable,meta14622){
this.f = f;
this.blockable = blockable;
this.meta14622 = meta14622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14623,meta14622__$1){
var self__ = this;
var _14623__$1 = this;
return (new cljs.core.async.t_cljs$core$async14621(self__.f,self__.blockable,meta14622__$1));
}));

(cljs.core.async.t_cljs$core$async14621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14623){
var self__ = this;
var _14623__$1 = this;
return self__.meta14622;
}));

(cljs.core.async.t_cljs$core$async14621.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14621.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14622","meta14622",-1365043910,null)], null);
}));

(cljs.core.async.t_cljs$core$async14621.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14621");

(cljs.core.async.t_cljs$core$async14621.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14621");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14621.
 */
cljs.core.async.__GT_t_cljs$core$async14621 = (function cljs$core$async$__GT_t_cljs$core$async14621(f,blockable,meta14622){
return (new cljs.core.async.t_cljs$core$async14621(f,blockable,meta14622));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14616 = arguments.length;
switch (G__14616) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14621(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14748 = arguments.length;
switch (G__14748) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14775 = arguments.length;
switch (G__14775) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14780 = arguments.length;
switch (G__14780) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18040 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18040) : fn1.call(null, val_18040));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18040) : fn1.call(null, val_18040));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14784 = arguments.length;
switch (G__14784) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___18052 = n;
var x_18053 = (0);
while(true){
if((x_18053 < n__5593__auto___18052)){
(a[x_18053] = x_18053);

var G__18054 = (x_18053 + (1));
x_18053 = G__18054;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14800 = (function (flag,meta14801){
this.flag = flag;
this.meta14801 = meta14801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14802,meta14801__$1){
var self__ = this;
var _14802__$1 = this;
return (new cljs.core.async.t_cljs$core$async14800(self__.flag,meta14801__$1));
}));

(cljs.core.async.t_cljs$core$async14800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14802){
var self__ = this;
var _14802__$1 = this;
return self__.meta14801;
}));

(cljs.core.async.t_cljs$core$async14800.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14800.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14801","meta14801",-721371747,null)], null);
}));

(cljs.core.async.t_cljs$core$async14800.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14800");

(cljs.core.async.t_cljs$core$async14800.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14800");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14800.
 */
cljs.core.async.__GT_t_cljs$core$async14800 = (function cljs$core$async$__GT_t_cljs$core$async14800(flag,meta14801){
return (new cljs.core.async.t_cljs$core$async14800(flag,meta14801));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14800(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14812 = (function (flag,cb,meta14813){
this.flag = flag;
this.cb = cb;
this.meta14813 = meta14813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14814,meta14813__$1){
var self__ = this;
var _14814__$1 = this;
return (new cljs.core.async.t_cljs$core$async14812(self__.flag,self__.cb,meta14813__$1));
}));

(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14814){
var self__ = this;
var _14814__$1 = this;
return self__.meta14813;
}));

(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14813","meta14813",-1531790323,null)], null);
}));

(cljs.core.async.t_cljs$core$async14812.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14812");

(cljs.core.async.t_cljs$core$async14812.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14812");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14812.
 */
cljs.core.async.__GT_t_cljs$core$async14812 = (function cljs$core$async$__GT_t_cljs$core$async14812(flag,cb,meta14813){
return (new cljs.core.async.t_cljs$core$async14812(flag,cb,meta14813));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14812(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14819_SHARP_){
var G__14831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14819_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14831) : fret.call(null, G__14831));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14820_SHARP_){
var G__14832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14820_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14832) : fret.call(null, G__14832));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18061 = (i + (1));
i = G__18061;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18068 = arguments.length;
var i__5727__auto___18069 = (0);
while(true){
if((i__5727__auto___18069 < len__5726__auto___18068)){
args__5732__auto__.push((arguments[i__5727__auto___18069]));

var G__18070 = (i__5727__auto___18069 + (1));
i__5727__auto___18069 = G__18070;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14845){
var map__14846 = p__14845;
var map__14846__$1 = cljs.core.__destructure_map(map__14846);
var opts = map__14846__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14842){
var G__14843 = cljs.core.first(seq14842);
var seq14842__$1 = cljs.core.next(seq14842);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14843,seq14842__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14860 = arguments.length;
switch (G__14860) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14468__auto___18077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_14896){
var state_val_14897 = (state_14896[(1)]);
if((state_val_14897 === (7))){
var inst_14890 = (state_14896[(2)]);
var state_14896__$1 = state_14896;
var statearr_14904_18085 = state_14896__$1;
(statearr_14904_18085[(2)] = inst_14890);

(statearr_14904_18085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (1))){
var state_14896__$1 = state_14896;
var statearr_14905_18086 = state_14896__$1;
(statearr_14905_18086[(2)] = null);

(statearr_14905_18086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (4))){
var inst_14868 = (state_14896[(7)]);
var inst_14868__$1 = (state_14896[(2)]);
var inst_14870 = (inst_14868__$1 == null);
var state_14896__$1 = (function (){var statearr_14907 = state_14896;
(statearr_14907[(7)] = inst_14868__$1);

return statearr_14907;
})();
if(cljs.core.truth_(inst_14870)){
var statearr_14909_18087 = state_14896__$1;
(statearr_14909_18087[(1)] = (5));

} else {
var statearr_14910_18088 = state_14896__$1;
(statearr_14910_18088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (13))){
var state_14896__$1 = state_14896;
var statearr_14913_18091 = state_14896__$1;
(statearr_14913_18091[(2)] = null);

(statearr_14913_18091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (6))){
var inst_14868 = (state_14896[(7)]);
var state_14896__$1 = state_14896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14896__$1,(11),to,inst_14868);
} else {
if((state_val_14897 === (3))){
var inst_14892 = (state_14896[(2)]);
var state_14896__$1 = state_14896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14896__$1,inst_14892);
} else {
if((state_val_14897 === (12))){
var state_14896__$1 = state_14896;
var statearr_14915_18094 = state_14896__$1;
(statearr_14915_18094[(2)] = null);

(statearr_14915_18094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (2))){
var state_14896__$1 = state_14896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14896__$1,(4),from);
} else {
if((state_val_14897 === (11))){
var inst_14882 = (state_14896[(2)]);
var state_14896__$1 = state_14896;
if(cljs.core.truth_(inst_14882)){
var statearr_14919_18095 = state_14896__$1;
(statearr_14919_18095[(1)] = (12));

} else {
var statearr_14920_18096 = state_14896__$1;
(statearr_14920_18096[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (9))){
var state_14896__$1 = state_14896;
var statearr_14922_18101 = state_14896__$1;
(statearr_14922_18101[(2)] = null);

(statearr_14922_18101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (5))){
var state_14896__$1 = state_14896;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14923_18103 = state_14896__$1;
(statearr_14923_18103[(1)] = (8));

} else {
var statearr_14924_18104 = state_14896__$1;
(statearr_14924_18104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (14))){
var inst_14888 = (state_14896[(2)]);
var state_14896__$1 = state_14896;
var statearr_14926_18109 = state_14896__$1;
(statearr_14926_18109[(2)] = inst_14888);

(statearr_14926_18109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (10))){
var inst_14879 = (state_14896[(2)]);
var state_14896__$1 = state_14896;
var statearr_14927_18110 = state_14896__$1;
(statearr_14927_18110[(2)] = inst_14879);

(statearr_14927_18110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (8))){
var inst_14875 = cljs.core.async.close_BANG_(to);
var state_14896__$1 = state_14896;
var statearr_14935_18111 = state_14896__$1;
(statearr_14935_18111[(2)] = inst_14875);

(statearr_14935_18111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13801__auto__ = null;
var cljs$core$async$state_machine__13801__auto____0 = (function (){
var statearr_14936 = [null,null,null,null,null,null,null,null];
(statearr_14936[(0)] = cljs$core$async$state_machine__13801__auto__);

(statearr_14936[(1)] = (1));

return statearr_14936;
});
var cljs$core$async$state_machine__13801__auto____1 = (function (state_14896){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_14896);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e14937){var ex__13804__auto__ = e14937;
var statearr_14939_18114 = state_14896;
(statearr_14939_18114[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_14896[(4)]))){
var statearr_14940_18115 = state_14896;
(statearr_14940_18115[(1)] = cljs.core.first((state_14896[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18116 = state_14896;
state_14896 = G__18116;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$state_machine__13801__auto__ = function(state_14896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13801__auto____1.call(this,state_14896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13801__auto____0;
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13801__auto____1;
return cljs$core$async$state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_14942 = f__14469__auto__();
(statearr_14942[(6)] = c__14468__auto___18077);

return statearr_14942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14951){
var vec__14953 = p__14951;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14953,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14953,(1),null);
var job = vec__14953;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14468__auto___18120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_14964){
var state_val_14965 = (state_14964[(1)]);
if((state_val_14965 === (1))){
var state_14964__$1 = state_14964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14964__$1,(2),res,v);
} else {
if((state_val_14965 === (2))){
var inst_14961 = (state_14964[(2)]);
var inst_14962 = cljs.core.async.close_BANG_(res);
var state_14964__$1 = (function (){var statearr_14967 = state_14964;
(statearr_14967[(7)] = inst_14961);

return statearr_14967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14964__$1,inst_14962);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0 = (function (){
var statearr_14971 = [null,null,null,null,null,null,null,null];
(statearr_14971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__);

(statearr_14971[(1)] = (1));

return statearr_14971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1 = (function (state_14964){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_14964);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e14972){var ex__13804__auto__ = e14972;
var statearr_14973_18128 = state_14964;
(statearr_14973_18128[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_14964[(4)]))){
var statearr_14974_18129 = state_14964;
(statearr_14974_18129[(1)] = cljs.core.first((state_14964[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18130 = state_14964;
state_14964 = G__18130;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__ = function(state_14964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1.call(this,state_14964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_14980 = f__14469__auto__();
(statearr_14980[(6)] = c__14468__auto___18120);

return statearr_14980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14981){
var vec__14982 = p__14981;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14982,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14982,(1),null);
var job = vec__14982;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18133 = n;
var __18135 = (0);
while(true){
if((__18135 < n__5593__auto___18133)){
var G__14988_18138 = type;
var G__14988_18140__$1 = (((G__14988_18138 instanceof cljs.core.Keyword))?G__14988_18138.fqn:null);
switch (G__14988_18140__$1) {
case "compute":
var c__14468__auto___18142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18135,c__14468__auto___18142,G__14988_18138,G__14988_18140__$1,n__5593__auto___18133,jobs,results,process__$1,async){
return (function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = ((function (__18135,c__14468__auto___18142,G__14988_18138,G__14988_18140__$1,n__5593__auto___18133,jobs,results,process__$1,async){
return (function (state_15002){
var state_val_15003 = (state_15002[(1)]);
if((state_val_15003 === (1))){
var state_15002__$1 = state_15002;
var statearr_15006_18144 = state_15002__$1;
(statearr_15006_18144[(2)] = null);

(statearr_15006_18144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (2))){
var state_15002__$1 = state_15002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15002__$1,(4),jobs);
} else {
if((state_val_15003 === (3))){
var inst_15000 = (state_15002[(2)]);
var state_15002__$1 = state_15002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15002__$1,inst_15000);
} else {
if((state_val_15003 === (4))){
var inst_14992 = (state_15002[(2)]);
var inst_14993 = process__$1(inst_14992);
var state_15002__$1 = state_15002;
if(cljs.core.truth_(inst_14993)){
var statearr_15011_18145 = state_15002__$1;
(statearr_15011_18145[(1)] = (5));

} else {
var statearr_15015_18146 = state_15002__$1;
(statearr_15015_18146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (5))){
var state_15002__$1 = state_15002;
var statearr_15019_18148 = state_15002__$1;
(statearr_15019_18148[(2)] = null);

(statearr_15019_18148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (6))){
var state_15002__$1 = state_15002;
var statearr_15020_18150 = state_15002__$1;
(statearr_15020_18150[(2)] = null);

(statearr_15020_18150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (7))){
var inst_14998 = (state_15002[(2)]);
var state_15002__$1 = state_15002;
var statearr_15022_18151 = state_15002__$1;
(statearr_15022_18151[(2)] = inst_14998);

(statearr_15022_18151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18135,c__14468__auto___18142,G__14988_18138,G__14988_18140__$1,n__5593__auto___18133,jobs,results,process__$1,async))
;
return ((function (__18135,switch__13800__auto__,c__14468__auto___18142,G__14988_18138,G__14988_18140__$1,n__5593__auto___18133,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0 = (function (){
var statearr_15026 = [null,null,null,null,null,null,null];
(statearr_15026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__);

(statearr_15026[(1)] = (1));

return statearr_15026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1 = (function (state_15002){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_15002);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e15028){var ex__13804__auto__ = e15028;
var statearr_15029_18159 = state_15002;
(statearr_15029_18159[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_15002[(4)]))){
var statearr_15030_18160 = state_15002;
(statearr_15030_18160[(1)] = cljs.core.first((state_15002[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18161 = state_15002;
state_15002 = G__18161;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__ = function(state_15002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1.call(this,state_15002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__;
})()
;})(__18135,switch__13800__auto__,c__14468__auto___18142,G__14988_18138,G__14988_18140__$1,n__5593__auto___18133,jobs,results,process__$1,async))
})();
var state__14470__auto__ = (function (){var statearr_15034 = f__14469__auto__();
(statearr_15034[(6)] = c__14468__auto___18142);

return statearr_15034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
});})(__18135,c__14468__auto___18142,G__14988_18138,G__14988_18140__$1,n__5593__auto___18133,jobs,results,process__$1,async))
);


break;
case "async":
var c__14468__auto___18162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18135,c__14468__auto___18162,G__14988_18138,G__14988_18140__$1,n__5593__auto___18133,jobs,results,process__$1,async){
return (function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = ((function (__18135,c__14468__auto___18162,G__14988_18138,G__14988_18140__$1,n__5593__auto___18133,jobs,results,process__$1,async){
return (function (state_15050){
var state_val_15051 = (state_15050[(1)]);
if((state_val_15051 === (1))){
var state_15050__$1 = state_15050;
var statearr_15054_18163 = state_15050__$1;
(statearr_15054_18163[(2)] = null);

(statearr_15054_18163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15051 === (2))){
var state_15050__$1 = state_15050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15050__$1,(4),jobs);
} else {
if((state_val_15051 === (3))){
var inst_15047 = (state_15050[(2)]);
var state_15050__$1 = state_15050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15050__$1,inst_15047);
} else {
if((state_val_15051 === (4))){
var inst_15038 = (state_15050[(2)]);
var inst_15039 = async(inst_15038);
var state_15050__$1 = state_15050;
if(cljs.core.truth_(inst_15039)){
var statearr_15059_18164 = state_15050__$1;
(statearr_15059_18164[(1)] = (5));

} else {
var statearr_15060_18165 = state_15050__$1;
(statearr_15060_18165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15051 === (5))){
var state_15050__$1 = state_15050;
var statearr_15065_18166 = state_15050__$1;
(statearr_15065_18166[(2)] = null);

(statearr_15065_18166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15051 === (6))){
var state_15050__$1 = state_15050;
var statearr_15067_18169 = state_15050__$1;
(statearr_15067_18169[(2)] = null);

(statearr_15067_18169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15051 === (7))){
var inst_15044 = (state_15050[(2)]);
var state_15050__$1 = state_15050;
var statearr_15069_18173 = state_15050__$1;
(statearr_15069_18173[(2)] = inst_15044);

(statearr_15069_18173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18135,c__14468__auto___18162,G__14988_18138,G__14988_18140__$1,n__5593__auto___18133,jobs,results,process__$1,async))
;
return ((function (__18135,switch__13800__auto__,c__14468__auto___18162,G__14988_18138,G__14988_18140__$1,n__5593__auto___18133,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0 = (function (){
var statearr_15072 = [null,null,null,null,null,null,null];
(statearr_15072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__);

(statearr_15072[(1)] = (1));

return statearr_15072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1 = (function (state_15050){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_15050);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e15074){var ex__13804__auto__ = e15074;
var statearr_15076_18174 = state_15050;
(statearr_15076_18174[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_15050[(4)]))){
var statearr_15077_18175 = state_15050;
(statearr_15077_18175[(1)] = cljs.core.first((state_15050[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18176 = state_15050;
state_15050 = G__18176;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__ = function(state_15050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1.call(this,state_15050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__;
})()
;})(__18135,switch__13800__auto__,c__14468__auto___18162,G__14988_18138,G__14988_18140__$1,n__5593__auto___18133,jobs,results,process__$1,async))
})();
var state__14470__auto__ = (function (){var statearr_15079 = f__14469__auto__();
(statearr_15079[(6)] = c__14468__auto___18162);

return statearr_15079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
});})(__18135,c__14468__auto___18162,G__14988_18138,G__14988_18140__$1,n__5593__auto___18133,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14988_18140__$1)].join('')));

}

var G__18180 = (__18135 + (1));
__18135 = G__18180;
continue;
} else {
}
break;
}

var c__14468__auto___18181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_15113){
var state_val_15114 = (state_15113[(1)]);
if((state_val_15114 === (7))){
var inst_15108 = (state_15113[(2)]);
var state_15113__$1 = state_15113;
var statearr_15119_18183 = state_15113__$1;
(statearr_15119_18183[(2)] = inst_15108);

(statearr_15119_18183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (1))){
var state_15113__$1 = state_15113;
var statearr_15120_18184 = state_15113__$1;
(statearr_15120_18184[(2)] = null);

(statearr_15120_18184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (4))){
var inst_15089 = (state_15113[(7)]);
var inst_15089__$1 = (state_15113[(2)]);
var inst_15090 = (inst_15089__$1 == null);
var state_15113__$1 = (function (){var statearr_15121 = state_15113;
(statearr_15121[(7)] = inst_15089__$1);

return statearr_15121;
})();
if(cljs.core.truth_(inst_15090)){
var statearr_15122_18186 = state_15113__$1;
(statearr_15122_18186[(1)] = (5));

} else {
var statearr_15123_18187 = state_15113__$1;
(statearr_15123_18187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (6))){
var inst_15095 = (state_15113[(8)]);
var inst_15089 = (state_15113[(7)]);
var inst_15095__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15098 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15100 = [inst_15089,inst_15095__$1];
var inst_15101 = (new cljs.core.PersistentVector(null,2,(5),inst_15098,inst_15100,null));
var state_15113__$1 = (function (){var statearr_15125 = state_15113;
(statearr_15125[(8)] = inst_15095__$1);

return statearr_15125;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15113__$1,(8),jobs,inst_15101);
} else {
if((state_val_15114 === (3))){
var inst_15111 = (state_15113[(2)]);
var state_15113__$1 = state_15113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15113__$1,inst_15111);
} else {
if((state_val_15114 === (2))){
var state_15113__$1 = state_15113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15113__$1,(4),from);
} else {
if((state_val_15114 === (9))){
var inst_15105 = (state_15113[(2)]);
var state_15113__$1 = (function (){var statearr_15130 = state_15113;
(statearr_15130[(9)] = inst_15105);

return statearr_15130;
})();
var statearr_15131_18192 = state_15113__$1;
(statearr_15131_18192[(2)] = null);

(statearr_15131_18192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (5))){
var inst_15092 = cljs.core.async.close_BANG_(jobs);
var state_15113__$1 = state_15113;
var statearr_15132_18193 = state_15113__$1;
(statearr_15132_18193[(2)] = inst_15092);

(statearr_15132_18193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (8))){
var inst_15095 = (state_15113[(8)]);
var inst_15103 = (state_15113[(2)]);
var state_15113__$1 = (function (){var statearr_15136 = state_15113;
(statearr_15136[(10)] = inst_15103);

return statearr_15136;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15113__$1,(9),results,inst_15095);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0 = (function (){
var statearr_15139 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__);

(statearr_15139[(1)] = (1));

return statearr_15139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1 = (function (state_15113){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_15113);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e15140){var ex__13804__auto__ = e15140;
var statearr_15141_18199 = state_15113;
(statearr_15141_18199[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_15113[(4)]))){
var statearr_15142_18200 = state_15113;
(statearr_15142_18200[(1)] = cljs.core.first((state_15113[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18201 = state_15113;
state_15113 = G__18201;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__ = function(state_15113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1.call(this,state_15113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_15151 = f__14469__auto__();
(statearr_15151[(6)] = c__14468__auto___18181);

return statearr_15151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


var c__14468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_15193){
var state_val_15194 = (state_15193[(1)]);
if((state_val_15194 === (7))){
var inst_15189 = (state_15193[(2)]);
var state_15193__$1 = state_15193;
var statearr_15196_18202 = state_15193__$1;
(statearr_15196_18202[(2)] = inst_15189);

(statearr_15196_18202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (20))){
var state_15193__$1 = state_15193;
var statearr_15200_18203 = state_15193__$1;
(statearr_15200_18203[(2)] = null);

(statearr_15200_18203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (1))){
var state_15193__$1 = state_15193;
var statearr_15202_18204 = state_15193__$1;
(statearr_15202_18204[(2)] = null);

(statearr_15202_18204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (4))){
var inst_15154 = (state_15193[(7)]);
var inst_15154__$1 = (state_15193[(2)]);
var inst_15155 = (inst_15154__$1 == null);
var state_15193__$1 = (function (){var statearr_15204 = state_15193;
(statearr_15204[(7)] = inst_15154__$1);

return statearr_15204;
})();
if(cljs.core.truth_(inst_15155)){
var statearr_15205_18206 = state_15193__$1;
(statearr_15205_18206[(1)] = (5));

} else {
var statearr_15206_18207 = state_15193__$1;
(statearr_15206_18207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (15))){
var inst_15168 = (state_15193[(8)]);
var state_15193__$1 = state_15193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15193__$1,(18),to,inst_15168);
} else {
if((state_val_15194 === (21))){
var inst_15184 = (state_15193[(2)]);
var state_15193__$1 = state_15193;
var statearr_15208_18208 = state_15193__$1;
(statearr_15208_18208[(2)] = inst_15184);

(statearr_15208_18208[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (13))){
var inst_15186 = (state_15193[(2)]);
var state_15193__$1 = (function (){var statearr_15211 = state_15193;
(statearr_15211[(9)] = inst_15186);

return statearr_15211;
})();
var statearr_15213_18217 = state_15193__$1;
(statearr_15213_18217[(2)] = null);

(statearr_15213_18217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (6))){
var inst_15154 = (state_15193[(7)]);
var state_15193__$1 = state_15193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15193__$1,(11),inst_15154);
} else {
if((state_val_15194 === (17))){
var inst_15179 = (state_15193[(2)]);
var state_15193__$1 = state_15193;
if(cljs.core.truth_(inst_15179)){
var statearr_15215_18220 = state_15193__$1;
(statearr_15215_18220[(1)] = (19));

} else {
var statearr_15216_18221 = state_15193__$1;
(statearr_15216_18221[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (3))){
var inst_15191 = (state_15193[(2)]);
var state_15193__$1 = state_15193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15193__$1,inst_15191);
} else {
if((state_val_15194 === (12))){
var inst_15164 = (state_15193[(10)]);
var state_15193__$1 = state_15193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15193__$1,(14),inst_15164);
} else {
if((state_val_15194 === (2))){
var state_15193__$1 = state_15193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15193__$1,(4),results);
} else {
if((state_val_15194 === (19))){
var state_15193__$1 = state_15193;
var statearr_15225_18223 = state_15193__$1;
(statearr_15225_18223[(2)] = null);

(statearr_15225_18223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (11))){
var inst_15164 = (state_15193[(2)]);
var state_15193__$1 = (function (){var statearr_15227 = state_15193;
(statearr_15227[(10)] = inst_15164);

return statearr_15227;
})();
var statearr_15228_18229 = state_15193__$1;
(statearr_15228_18229[(2)] = null);

(statearr_15228_18229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (9))){
var state_15193__$1 = state_15193;
var statearr_15230_18230 = state_15193__$1;
(statearr_15230_18230[(2)] = null);

(statearr_15230_18230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (5))){
var state_15193__$1 = state_15193;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15231_18231 = state_15193__$1;
(statearr_15231_18231[(1)] = (8));

} else {
var statearr_15232_18232 = state_15193__$1;
(statearr_15232_18232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (14))){
var inst_15171 = (state_15193[(11)]);
var inst_15168 = (state_15193[(8)]);
var inst_15168__$1 = (state_15193[(2)]);
var inst_15170 = (inst_15168__$1 == null);
var inst_15171__$1 = cljs.core.not(inst_15170);
var state_15193__$1 = (function (){var statearr_15233 = state_15193;
(statearr_15233[(11)] = inst_15171__$1);

(statearr_15233[(8)] = inst_15168__$1);

return statearr_15233;
})();
if(inst_15171__$1){
var statearr_15234_18233 = state_15193__$1;
(statearr_15234_18233[(1)] = (15));

} else {
var statearr_15235_18234 = state_15193__$1;
(statearr_15235_18234[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (16))){
var inst_15171 = (state_15193[(11)]);
var state_15193__$1 = state_15193;
var statearr_15237_18235 = state_15193__$1;
(statearr_15237_18235[(2)] = inst_15171);

(statearr_15237_18235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (10))){
var inst_15161 = (state_15193[(2)]);
var state_15193__$1 = state_15193;
var statearr_15243_18236 = state_15193__$1;
(statearr_15243_18236[(2)] = inst_15161);

(statearr_15243_18236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (18))){
var inst_15175 = (state_15193[(2)]);
var state_15193__$1 = state_15193;
var statearr_15245_18240 = state_15193__$1;
(statearr_15245_18240[(2)] = inst_15175);

(statearr_15245_18240[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15194 === (8))){
var inst_15158 = cljs.core.async.close_BANG_(to);
var state_15193__$1 = state_15193;
var statearr_15250_18250 = state_15193__$1;
(statearr_15250_18250[(2)] = inst_15158);

(statearr_15250_18250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0 = (function (){
var statearr_15254 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__);

(statearr_15254[(1)] = (1));

return statearr_15254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1 = (function (state_15193){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_15193);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e15255){var ex__13804__auto__ = e15255;
var statearr_15256_18254 = state_15193;
(statearr_15256_18254[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_15193[(4)]))){
var statearr_15261_18258 = state_15193;
(statearr_15261_18258[(1)] = cljs.core.first((state_15193[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18259 = state_15193;
state_15193 = G__18259;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__ = function(state_15193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1.call(this,state_15193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_15263 = f__14469__auto__();
(statearr_15263[(6)] = c__14468__auto__);

return statearr_15263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));

return c__14468__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15269 = arguments.length;
switch (G__15269) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15276 = arguments.length;
switch (G__15276) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15298 = arguments.length;
switch (G__15298) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14468__auto___18281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_15365){
var state_val_15366 = (state_15365[(1)]);
if((state_val_15366 === (7))){
var inst_15357 = (state_15365[(2)]);
var state_15365__$1 = state_15365;
var statearr_15368_18283 = state_15365__$1;
(statearr_15368_18283[(2)] = inst_15357);

(statearr_15368_18283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (1))){
var state_15365__$1 = state_15365;
var statearr_15370_18285 = state_15365__$1;
(statearr_15370_18285[(2)] = null);

(statearr_15370_18285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (4))){
var inst_15327 = (state_15365[(7)]);
var inst_15327__$1 = (state_15365[(2)]);
var inst_15330 = (inst_15327__$1 == null);
var state_15365__$1 = (function (){var statearr_15372 = state_15365;
(statearr_15372[(7)] = inst_15327__$1);

return statearr_15372;
})();
if(cljs.core.truth_(inst_15330)){
var statearr_15373_18286 = state_15365__$1;
(statearr_15373_18286[(1)] = (5));

} else {
var statearr_15374_18287 = state_15365__$1;
(statearr_15374_18287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (13))){
var state_15365__$1 = state_15365;
var statearr_15381_18288 = state_15365__$1;
(statearr_15381_18288[(2)] = null);

(statearr_15381_18288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (6))){
var inst_15327 = (state_15365[(7)]);
var inst_15342 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15327) : p.call(null, inst_15327));
var state_15365__$1 = state_15365;
if(cljs.core.truth_(inst_15342)){
var statearr_15382_18292 = state_15365__$1;
(statearr_15382_18292[(1)] = (9));

} else {
var statearr_15383_18293 = state_15365__$1;
(statearr_15383_18293[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (3))){
var inst_15359 = (state_15365[(2)]);
var state_15365__$1 = state_15365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15365__$1,inst_15359);
} else {
if((state_val_15366 === (12))){
var state_15365__$1 = state_15365;
var statearr_15384_18298 = state_15365__$1;
(statearr_15384_18298[(2)] = null);

(statearr_15384_18298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (2))){
var state_15365__$1 = state_15365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15365__$1,(4),ch);
} else {
if((state_val_15366 === (11))){
var inst_15327 = (state_15365[(7)]);
var inst_15346 = (state_15365[(2)]);
var state_15365__$1 = state_15365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15365__$1,(8),inst_15346,inst_15327);
} else {
if((state_val_15366 === (9))){
var state_15365__$1 = state_15365;
var statearr_15386_18303 = state_15365__$1;
(statearr_15386_18303[(2)] = tc);

(statearr_15386_18303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (5))){
var inst_15336 = cljs.core.async.close_BANG_(tc);
var inst_15337 = cljs.core.async.close_BANG_(fc);
var state_15365__$1 = (function (){var statearr_15388 = state_15365;
(statearr_15388[(8)] = inst_15336);

return statearr_15388;
})();
var statearr_15389_18308 = state_15365__$1;
(statearr_15389_18308[(2)] = inst_15337);

(statearr_15389_18308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (14))){
var inst_15355 = (state_15365[(2)]);
var state_15365__$1 = state_15365;
var statearr_15390_18309 = state_15365__$1;
(statearr_15390_18309[(2)] = inst_15355);

(statearr_15390_18309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (10))){
var state_15365__$1 = state_15365;
var statearr_15391_18310 = state_15365__$1;
(statearr_15391_18310[(2)] = fc);

(statearr_15391_18310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15366 === (8))){
var inst_15349 = (state_15365[(2)]);
var state_15365__$1 = state_15365;
if(cljs.core.truth_(inst_15349)){
var statearr_15392_18311 = state_15365__$1;
(statearr_15392_18311[(1)] = (12));

} else {
var statearr_15393_18312 = state_15365__$1;
(statearr_15393_18312[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13801__auto__ = null;
var cljs$core$async$state_machine__13801__auto____0 = (function (){
var statearr_15394 = [null,null,null,null,null,null,null,null,null];
(statearr_15394[(0)] = cljs$core$async$state_machine__13801__auto__);

(statearr_15394[(1)] = (1));

return statearr_15394;
});
var cljs$core$async$state_machine__13801__auto____1 = (function (state_15365){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_15365);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e15395){var ex__13804__auto__ = e15395;
var statearr_15396_18319 = state_15365;
(statearr_15396_18319[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_15365[(4)]))){
var statearr_15399_18320 = state_15365;
(statearr_15399_18320[(1)] = cljs.core.first((state_15365[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18321 = state_15365;
state_15365 = G__18321;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$state_machine__13801__auto__ = function(state_15365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13801__auto____1.call(this,state_15365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13801__auto____0;
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13801__auto____1;
return cljs$core$async$state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_15401 = f__14469__auto__();
(statearr_15401[(6)] = c__14468__auto___18281);

return statearr_15401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_15441){
var state_val_15442 = (state_15441[(1)]);
if((state_val_15442 === (7))){
var inst_15436 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
var statearr_15444_18326 = state_15441__$1;
(statearr_15444_18326[(2)] = inst_15436);

(statearr_15444_18326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (1))){
var inst_15415 = init;
var inst_15416 = inst_15415;
var state_15441__$1 = (function (){var statearr_15445 = state_15441;
(statearr_15445[(7)] = inst_15416);

return statearr_15445;
})();
var statearr_15447_18327 = state_15441__$1;
(statearr_15447_18327[(2)] = null);

(statearr_15447_18327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (4))){
var inst_15419 = (state_15441[(8)]);
var inst_15419__$1 = (state_15441[(2)]);
var inst_15420 = (inst_15419__$1 == null);
var state_15441__$1 = (function (){var statearr_15450 = state_15441;
(statearr_15450[(8)] = inst_15419__$1);

return statearr_15450;
})();
if(cljs.core.truth_(inst_15420)){
var statearr_15451_18338 = state_15441__$1;
(statearr_15451_18338[(1)] = (5));

} else {
var statearr_15452_18341 = state_15441__$1;
(statearr_15452_18341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (6))){
var inst_15427 = (state_15441[(9)]);
var inst_15416 = (state_15441[(7)]);
var inst_15419 = (state_15441[(8)]);
var inst_15427__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15416,inst_15419) : f.call(null, inst_15416,inst_15419));
var inst_15428 = cljs.core.reduced_QMARK_(inst_15427__$1);
var state_15441__$1 = (function (){var statearr_15454 = state_15441;
(statearr_15454[(9)] = inst_15427__$1);

return statearr_15454;
})();
if(inst_15428){
var statearr_15456_18347 = state_15441__$1;
(statearr_15456_18347[(1)] = (8));

} else {
var statearr_15459_18348 = state_15441__$1;
(statearr_15459_18348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (3))){
var inst_15439 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15441__$1,inst_15439);
} else {
if((state_val_15442 === (2))){
var state_15441__$1 = state_15441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15441__$1,(4),ch);
} else {
if((state_val_15442 === (9))){
var inst_15427 = (state_15441[(9)]);
var inst_15416 = inst_15427;
var state_15441__$1 = (function (){var statearr_15462 = state_15441;
(statearr_15462[(7)] = inst_15416);

return statearr_15462;
})();
var statearr_15463_18353 = state_15441__$1;
(statearr_15463_18353[(2)] = null);

(statearr_15463_18353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (5))){
var inst_15416 = (state_15441[(7)]);
var state_15441__$1 = state_15441;
var statearr_15466_18355 = state_15441__$1;
(statearr_15466_18355[(2)] = inst_15416);

(statearr_15466_18355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (10))){
var inst_15434 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
var statearr_15468_18357 = state_15441__$1;
(statearr_15468_18357[(2)] = inst_15434);

(statearr_15468_18357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (8))){
var inst_15427 = (state_15441[(9)]);
var inst_15430 = cljs.core.deref(inst_15427);
var state_15441__$1 = state_15441;
var statearr_15472_18363 = state_15441__$1;
(statearr_15472_18363[(2)] = inst_15430);

(statearr_15472_18363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13801__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13801__auto____0 = (function (){
var statearr_15477 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15477[(0)] = cljs$core$async$reduce_$_state_machine__13801__auto__);

(statearr_15477[(1)] = (1));

return statearr_15477;
});
var cljs$core$async$reduce_$_state_machine__13801__auto____1 = (function (state_15441){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_15441);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e15481){var ex__13804__auto__ = e15481;
var statearr_15482_18370 = state_15441;
(statearr_15482_18370[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_15441[(4)]))){
var statearr_15483_18375 = state_15441;
(statearr_15483_18375[(1)] = cljs.core.first((state_15441[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18379 = state_15441;
state_15441 = G__18379;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13801__auto__ = function(state_15441){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13801__auto____1.call(this,state_15441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13801__auto____0;
cljs$core$async$reduce_$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13801__auto____1;
return cljs$core$async$reduce_$_state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_15485 = f__14469__auto__();
(statearr_15485[(6)] = c__14468__auto__);

return statearr_15485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));

return c__14468__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_15502){
var state_val_15503 = (state_15502[(1)]);
if((state_val_15503 === (1))){
var inst_15495 = cljs.core.async.reduce(f__$1,init,ch);
var state_15502__$1 = state_15502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15502__$1,(2),inst_15495);
} else {
if((state_val_15503 === (2))){
var inst_15497 = (state_15502[(2)]);
var inst_15499 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15497) : f__$1.call(null, inst_15497));
var state_15502__$1 = state_15502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15502__$1,inst_15499);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13801__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13801__auto____0 = (function (){
var statearr_15509 = [null,null,null,null,null,null,null];
(statearr_15509[(0)] = cljs$core$async$transduce_$_state_machine__13801__auto__);

(statearr_15509[(1)] = (1));

return statearr_15509;
});
var cljs$core$async$transduce_$_state_machine__13801__auto____1 = (function (state_15502){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_15502);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e15510){var ex__13804__auto__ = e15510;
var statearr_15512_18382 = state_15502;
(statearr_15512_18382[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_15502[(4)]))){
var statearr_15514_18383 = state_15502;
(statearr_15514_18383[(1)] = cljs.core.first((state_15502[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18384 = state_15502;
state_15502 = G__18384;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13801__auto__ = function(state_15502){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13801__auto____1.call(this,state_15502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13801__auto____0;
cljs$core$async$transduce_$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13801__auto____1;
return cljs$core$async$transduce_$_state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_15518 = f__14469__auto__();
(statearr_15518[(6)] = c__14468__auto__);

return statearr_15518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));

return c__14468__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15521 = arguments.length;
switch (G__15521) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_15556){
var state_val_15557 = (state_15556[(1)]);
if((state_val_15557 === (7))){
var inst_15536 = (state_15556[(2)]);
var state_15556__$1 = state_15556;
var statearr_15567_18390 = state_15556__$1;
(statearr_15567_18390[(2)] = inst_15536);

(statearr_15567_18390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (1))){
var inst_15528 = cljs.core.seq(coll);
var inst_15529 = inst_15528;
var state_15556__$1 = (function (){var statearr_15572 = state_15556;
(statearr_15572[(7)] = inst_15529);

return statearr_15572;
})();
var statearr_15573_18392 = state_15556__$1;
(statearr_15573_18392[(2)] = null);

(statearr_15573_18392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (4))){
var inst_15529 = (state_15556[(7)]);
var inst_15534 = cljs.core.first(inst_15529);
var state_15556__$1 = state_15556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15556__$1,(7),ch,inst_15534);
} else {
if((state_val_15557 === (13))){
var inst_15550 = (state_15556[(2)]);
var state_15556__$1 = state_15556;
var statearr_15577_18393 = state_15556__$1;
(statearr_15577_18393[(2)] = inst_15550);

(statearr_15577_18393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (6))){
var inst_15539 = (state_15556[(2)]);
var state_15556__$1 = state_15556;
if(cljs.core.truth_(inst_15539)){
var statearr_15579_18394 = state_15556__$1;
(statearr_15579_18394[(1)] = (8));

} else {
var statearr_15580_18395 = state_15556__$1;
(statearr_15580_18395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (3))){
var inst_15554 = (state_15556[(2)]);
var state_15556__$1 = state_15556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15556__$1,inst_15554);
} else {
if((state_val_15557 === (12))){
var state_15556__$1 = state_15556;
var statearr_15584_18401 = state_15556__$1;
(statearr_15584_18401[(2)] = null);

(statearr_15584_18401[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (2))){
var inst_15529 = (state_15556[(7)]);
var state_15556__$1 = state_15556;
if(cljs.core.truth_(inst_15529)){
var statearr_15585_18402 = state_15556__$1;
(statearr_15585_18402[(1)] = (4));

} else {
var statearr_15586_18403 = state_15556__$1;
(statearr_15586_18403[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (11))){
var inst_15547 = cljs.core.async.close_BANG_(ch);
var state_15556__$1 = state_15556;
var statearr_15590_18404 = state_15556__$1;
(statearr_15590_18404[(2)] = inst_15547);

(statearr_15590_18404[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (9))){
var state_15556__$1 = state_15556;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15593_18405 = state_15556__$1;
(statearr_15593_18405[(1)] = (11));

} else {
var statearr_15595_18406 = state_15556__$1;
(statearr_15595_18406[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (5))){
var inst_15529 = (state_15556[(7)]);
var state_15556__$1 = state_15556;
var statearr_15600_18412 = state_15556__$1;
(statearr_15600_18412[(2)] = inst_15529);

(statearr_15600_18412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (10))){
var inst_15552 = (state_15556[(2)]);
var state_15556__$1 = state_15556;
var statearr_15604_18416 = state_15556__$1;
(statearr_15604_18416[(2)] = inst_15552);

(statearr_15604_18416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (8))){
var inst_15529 = (state_15556[(7)]);
var inst_15542 = cljs.core.next(inst_15529);
var inst_15529__$1 = inst_15542;
var state_15556__$1 = (function (){var statearr_15611 = state_15556;
(statearr_15611[(7)] = inst_15529__$1);

return statearr_15611;
})();
var statearr_15612_18419 = state_15556__$1;
(statearr_15612_18419[(2)] = null);

(statearr_15612_18419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13801__auto__ = null;
var cljs$core$async$state_machine__13801__auto____0 = (function (){
var statearr_15619 = [null,null,null,null,null,null,null,null];
(statearr_15619[(0)] = cljs$core$async$state_machine__13801__auto__);

(statearr_15619[(1)] = (1));

return statearr_15619;
});
var cljs$core$async$state_machine__13801__auto____1 = (function (state_15556){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_15556);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e15622){var ex__13804__auto__ = e15622;
var statearr_15624_18423 = state_15556;
(statearr_15624_18423[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_15556[(4)]))){
var statearr_15627_18425 = state_15556;
(statearr_15627_18425[(1)] = cljs.core.first((state_15556[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18426 = state_15556;
state_15556 = G__18426;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$state_machine__13801__auto__ = function(state_15556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13801__auto____1.call(this,state_15556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13801__auto____0;
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13801__auto____1;
return cljs$core$async$state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_15635 = f__14469__auto__();
(statearr_15635[(6)] = c__14468__auto__);

return statearr_15635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));

return c__14468__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15669 = arguments.length;
switch (G__15669) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18428 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18428(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18435 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18435(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18436 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18436(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18437 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18437(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15751 = (function (ch,cs,meta15752){
this.ch = ch;
this.cs = cs;
this.meta15752 = meta15752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15753,meta15752__$1){
var self__ = this;
var _15753__$1 = this;
return (new cljs.core.async.t_cljs$core$async15751(self__.ch,self__.cs,meta15752__$1));
}));

(cljs.core.async.t_cljs$core$async15751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15753){
var self__ = this;
var _15753__$1 = this;
return self__.meta15752;
}));

(cljs.core.async.t_cljs$core$async15751.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15751.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15751.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15751.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15751.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15752","meta15752",1437996606,null)], null);
}));

(cljs.core.async.t_cljs$core$async15751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15751");

(cljs.core.async.t_cljs$core$async15751.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15751.
 */
cljs.core.async.__GT_t_cljs$core$async15751 = (function cljs$core$async$__GT_t_cljs$core$async15751(ch,cs,meta15752){
return (new cljs.core.async.t_cljs$core$async15751(ch,cs,meta15752));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15751(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14468__auto___18444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_15950){
var state_val_15951 = (state_15950[(1)]);
if((state_val_15951 === (7))){
var inst_15943 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_15958_18445 = state_15950__$1;
(statearr_15958_18445[(2)] = inst_15943);

(statearr_15958_18445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (20))){
var inst_15829 = (state_15950[(7)]);
var inst_15843 = cljs.core.first(inst_15829);
var inst_15844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15843,(0),null);
var inst_15845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15843,(1),null);
var state_15950__$1 = (function (){var statearr_15963 = state_15950;
(statearr_15963[(8)] = inst_15844);

return statearr_15963;
})();
if(cljs.core.truth_(inst_15845)){
var statearr_15965_18447 = state_15950__$1;
(statearr_15965_18447[(1)] = (22));

} else {
var statearr_15967_18448 = state_15950__$1;
(statearr_15967_18448[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (27))){
var inst_15882 = (state_15950[(9)]);
var inst_15880 = (state_15950[(10)]);
var inst_15890 = (state_15950[(11)]);
var inst_15794 = (state_15950[(12)]);
var inst_15890__$1 = cljs.core._nth(inst_15880,inst_15882);
var inst_15892 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15890__$1,inst_15794,done);
var state_15950__$1 = (function (){var statearr_15968 = state_15950;
(statearr_15968[(11)] = inst_15890__$1);

return statearr_15968;
})();
if(cljs.core.truth_(inst_15892)){
var statearr_15969_18450 = state_15950__$1;
(statearr_15969_18450[(1)] = (30));

} else {
var statearr_15974_18451 = state_15950__$1;
(statearr_15974_18451[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (1))){
var state_15950__$1 = state_15950;
var statearr_15979_18456 = state_15950__$1;
(statearr_15979_18456[(2)] = null);

(statearr_15979_18456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (24))){
var inst_15829 = (state_15950[(7)]);
var inst_15850 = (state_15950[(2)]);
var inst_15853 = cljs.core.next(inst_15829);
var inst_15804 = inst_15853;
var inst_15805 = null;
var inst_15806 = (0);
var inst_15807 = (0);
var state_15950__$1 = (function (){var statearr_15983 = state_15950;
(statearr_15983[(13)] = inst_15806);

(statearr_15983[(14)] = inst_15804);

(statearr_15983[(15)] = inst_15807);

(statearr_15983[(16)] = inst_15850);

(statearr_15983[(17)] = inst_15805);

return statearr_15983;
})();
var statearr_15985_18460 = state_15950__$1;
(statearr_15985_18460[(2)] = null);

(statearr_15985_18460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (39))){
var state_15950__$1 = state_15950;
var statearr_15989_18462 = state_15950__$1;
(statearr_15989_18462[(2)] = null);

(statearr_15989_18462[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (4))){
var inst_15794 = (state_15950[(12)]);
var inst_15794__$1 = (state_15950[(2)]);
var inst_15795 = (inst_15794__$1 == null);
var state_15950__$1 = (function (){var statearr_15993 = state_15950;
(statearr_15993[(12)] = inst_15794__$1);

return statearr_15993;
})();
if(cljs.core.truth_(inst_15795)){
var statearr_15994_18465 = state_15950__$1;
(statearr_15994_18465[(1)] = (5));

} else {
var statearr_15996_18466 = state_15950__$1;
(statearr_15996_18466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (15))){
var inst_15806 = (state_15950[(13)]);
var inst_15804 = (state_15950[(14)]);
var inst_15807 = (state_15950[(15)]);
var inst_15805 = (state_15950[(17)]);
var inst_15824 = (state_15950[(2)]);
var inst_15826 = (inst_15807 + (1));
var tmp15986 = inst_15806;
var tmp15987 = inst_15804;
var tmp15988 = inst_15805;
var inst_15804__$1 = tmp15987;
var inst_15805__$1 = tmp15988;
var inst_15806__$1 = tmp15986;
var inst_15807__$1 = inst_15826;
var state_15950__$1 = (function (){var statearr_15997 = state_15950;
(statearr_15997[(13)] = inst_15806__$1);

(statearr_15997[(14)] = inst_15804__$1);

(statearr_15997[(15)] = inst_15807__$1);

(statearr_15997[(18)] = inst_15824);

(statearr_15997[(17)] = inst_15805__$1);

return statearr_15997;
})();
var statearr_15998_18468 = state_15950__$1;
(statearr_15998_18468[(2)] = null);

(statearr_15998_18468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (21))){
var inst_15856 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16005_18470 = state_15950__$1;
(statearr_16005_18470[(2)] = inst_15856);

(statearr_16005_18470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (31))){
var inst_15890 = (state_15950[(11)]);
var inst_15896 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15890);
var state_15950__$1 = state_15950;
var statearr_16007_18472 = state_15950__$1;
(statearr_16007_18472[(2)] = inst_15896);

(statearr_16007_18472[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (32))){
var inst_15881 = (state_15950[(19)]);
var inst_15882 = (state_15950[(9)]);
var inst_15880 = (state_15950[(10)]);
var inst_15879 = (state_15950[(20)]);
var inst_15898 = (state_15950[(2)]);
var inst_15900 = (inst_15882 + (1));
var tmp16002 = inst_15881;
var tmp16003 = inst_15880;
var tmp16004 = inst_15879;
var inst_15879__$1 = tmp16004;
var inst_15880__$1 = tmp16003;
var inst_15881__$1 = tmp16002;
var inst_15882__$1 = inst_15900;
var state_15950__$1 = (function (){var statearr_16008 = state_15950;
(statearr_16008[(19)] = inst_15881__$1);

(statearr_16008[(9)] = inst_15882__$1);

(statearr_16008[(10)] = inst_15880__$1);

(statearr_16008[(20)] = inst_15879__$1);

(statearr_16008[(21)] = inst_15898);

return statearr_16008;
})();
var statearr_16012_18473 = state_15950__$1;
(statearr_16012_18473[(2)] = null);

(statearr_16012_18473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (40))){
var inst_15913 = (state_15950[(22)]);
var inst_15919 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15913);
var state_15950__$1 = state_15950;
var statearr_16014_18474 = state_15950__$1;
(statearr_16014_18474[(2)] = inst_15919);

(statearr_16014_18474[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (33))){
var inst_15903 = (state_15950[(23)]);
var inst_15906 = cljs.core.chunked_seq_QMARK_(inst_15903);
var state_15950__$1 = state_15950;
if(inst_15906){
var statearr_16015_18475 = state_15950__$1;
(statearr_16015_18475[(1)] = (36));

} else {
var statearr_16016_18476 = state_15950__$1;
(statearr_16016_18476[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (13))){
var inst_15816 = (state_15950[(24)]);
var inst_15821 = cljs.core.async.close_BANG_(inst_15816);
var state_15950__$1 = state_15950;
var statearr_16017_18477 = state_15950__$1;
(statearr_16017_18477[(2)] = inst_15821);

(statearr_16017_18477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (22))){
var inst_15844 = (state_15950[(8)]);
var inst_15847 = cljs.core.async.close_BANG_(inst_15844);
var state_15950__$1 = state_15950;
var statearr_16019_18481 = state_15950__$1;
(statearr_16019_18481[(2)] = inst_15847);

(statearr_16019_18481[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (36))){
var inst_15903 = (state_15950[(23)]);
var inst_15908 = cljs.core.chunk_first(inst_15903);
var inst_15909 = cljs.core.chunk_rest(inst_15903);
var inst_15910 = cljs.core.count(inst_15908);
var inst_15879 = inst_15909;
var inst_15880 = inst_15908;
var inst_15881 = inst_15910;
var inst_15882 = (0);
var state_15950__$1 = (function (){var statearr_16022 = state_15950;
(statearr_16022[(19)] = inst_15881);

(statearr_16022[(9)] = inst_15882);

(statearr_16022[(10)] = inst_15880);

(statearr_16022[(20)] = inst_15879);

return statearr_16022;
})();
var statearr_16027_18484 = state_15950__$1;
(statearr_16027_18484[(2)] = null);

(statearr_16027_18484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (41))){
var inst_15903 = (state_15950[(23)]);
var inst_15921 = (state_15950[(2)]);
var inst_15923 = cljs.core.next(inst_15903);
var inst_15879 = inst_15923;
var inst_15880 = null;
var inst_15881 = (0);
var inst_15882 = (0);
var state_15950__$1 = (function (){var statearr_16028 = state_15950;
(statearr_16028[(19)] = inst_15881);

(statearr_16028[(9)] = inst_15882);

(statearr_16028[(25)] = inst_15921);

(statearr_16028[(10)] = inst_15880);

(statearr_16028[(20)] = inst_15879);

return statearr_16028;
})();
var statearr_16031_18492 = state_15950__$1;
(statearr_16031_18492[(2)] = null);

(statearr_16031_18492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (43))){
var state_15950__$1 = state_15950;
var statearr_16033_18493 = state_15950__$1;
(statearr_16033_18493[(2)] = null);

(statearr_16033_18493[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (29))){
var inst_15931 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16034_18495 = state_15950__$1;
(statearr_16034_18495[(2)] = inst_15931);

(statearr_16034_18495[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (44))){
var inst_15940 = (state_15950[(2)]);
var state_15950__$1 = (function (){var statearr_16042 = state_15950;
(statearr_16042[(26)] = inst_15940);

return statearr_16042;
})();
var statearr_16046_18497 = state_15950__$1;
(statearr_16046_18497[(2)] = null);

(statearr_16046_18497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (6))){
var inst_15867 = (state_15950[(27)]);
var inst_15866 = cljs.core.deref(cs);
var inst_15867__$1 = cljs.core.keys(inst_15866);
var inst_15868 = cljs.core.count(inst_15867__$1);
var inst_15869 = cljs.core.reset_BANG_(dctr,inst_15868);
var inst_15874 = cljs.core.seq(inst_15867__$1);
var inst_15879 = inst_15874;
var inst_15880 = null;
var inst_15881 = (0);
var inst_15882 = (0);
var state_15950__$1 = (function (){var statearr_16048 = state_15950;
(statearr_16048[(19)] = inst_15881);

(statearr_16048[(9)] = inst_15882);

(statearr_16048[(10)] = inst_15880);

(statearr_16048[(27)] = inst_15867__$1);

(statearr_16048[(28)] = inst_15869);

(statearr_16048[(20)] = inst_15879);

return statearr_16048;
})();
var statearr_16049_18499 = state_15950__$1;
(statearr_16049_18499[(2)] = null);

(statearr_16049_18499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (28))){
var inst_15879 = (state_15950[(20)]);
var inst_15903 = (state_15950[(23)]);
var inst_15903__$1 = cljs.core.seq(inst_15879);
var state_15950__$1 = (function (){var statearr_16053 = state_15950;
(statearr_16053[(23)] = inst_15903__$1);

return statearr_16053;
})();
if(inst_15903__$1){
var statearr_16055_18500 = state_15950__$1;
(statearr_16055_18500[(1)] = (33));

} else {
var statearr_16056_18501 = state_15950__$1;
(statearr_16056_18501[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (25))){
var inst_15881 = (state_15950[(19)]);
var inst_15882 = (state_15950[(9)]);
var inst_15884 = (inst_15882 < inst_15881);
var inst_15885 = inst_15884;
var state_15950__$1 = state_15950;
if(cljs.core.truth_(inst_15885)){
var statearr_16057_18504 = state_15950__$1;
(statearr_16057_18504[(1)] = (27));

} else {
var statearr_16061_18506 = state_15950__$1;
(statearr_16061_18506[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (34))){
var state_15950__$1 = state_15950;
var statearr_16063_18507 = state_15950__$1;
(statearr_16063_18507[(2)] = null);

(statearr_16063_18507[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (17))){
var state_15950__$1 = state_15950;
var statearr_16064_18509 = state_15950__$1;
(statearr_16064_18509[(2)] = null);

(statearr_16064_18509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (3))){
var inst_15945 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15950__$1,inst_15945);
} else {
if((state_val_15951 === (12))){
var inst_15862 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16066_18518 = state_15950__$1;
(statearr_16066_18518[(2)] = inst_15862);

(statearr_16066_18518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (2))){
var state_15950__$1 = state_15950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15950__$1,(4),ch);
} else {
if((state_val_15951 === (23))){
var state_15950__$1 = state_15950;
var statearr_16073_18519 = state_15950__$1;
(statearr_16073_18519[(2)] = null);

(statearr_16073_18519[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (35))){
var inst_15929 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16075_18521 = state_15950__$1;
(statearr_16075_18521[(2)] = inst_15929);

(statearr_16075_18521[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (19))){
var inst_15829 = (state_15950[(7)]);
var inst_15833 = cljs.core.chunk_first(inst_15829);
var inst_15835 = cljs.core.chunk_rest(inst_15829);
var inst_15836 = cljs.core.count(inst_15833);
var inst_15804 = inst_15835;
var inst_15805 = inst_15833;
var inst_15806 = inst_15836;
var inst_15807 = (0);
var state_15950__$1 = (function (){var statearr_16077 = state_15950;
(statearr_16077[(13)] = inst_15806);

(statearr_16077[(14)] = inst_15804);

(statearr_16077[(15)] = inst_15807);

(statearr_16077[(17)] = inst_15805);

return statearr_16077;
})();
var statearr_16078_18524 = state_15950__$1;
(statearr_16078_18524[(2)] = null);

(statearr_16078_18524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (11))){
var inst_15804 = (state_15950[(14)]);
var inst_15829 = (state_15950[(7)]);
var inst_15829__$1 = cljs.core.seq(inst_15804);
var state_15950__$1 = (function (){var statearr_16079 = state_15950;
(statearr_16079[(7)] = inst_15829__$1);

return statearr_16079;
})();
if(inst_15829__$1){
var statearr_16080_18525 = state_15950__$1;
(statearr_16080_18525[(1)] = (16));

} else {
var statearr_16081_18527 = state_15950__$1;
(statearr_16081_18527[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (9))){
var inst_15864 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16082_18528 = state_15950__$1;
(statearr_16082_18528[(2)] = inst_15864);

(statearr_16082_18528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (5))){
var inst_15802 = cljs.core.deref(cs);
var inst_15803 = cljs.core.seq(inst_15802);
var inst_15804 = inst_15803;
var inst_15805 = null;
var inst_15806 = (0);
var inst_15807 = (0);
var state_15950__$1 = (function (){var statearr_16087 = state_15950;
(statearr_16087[(13)] = inst_15806);

(statearr_16087[(14)] = inst_15804);

(statearr_16087[(15)] = inst_15807);

(statearr_16087[(17)] = inst_15805);

return statearr_16087;
})();
var statearr_16091_18533 = state_15950__$1;
(statearr_16091_18533[(2)] = null);

(statearr_16091_18533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (14))){
var state_15950__$1 = state_15950;
var statearr_16094_18534 = state_15950__$1;
(statearr_16094_18534[(2)] = null);

(statearr_16094_18534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (45))){
var inst_15937 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16098_18535 = state_15950__$1;
(statearr_16098_18535[(2)] = inst_15937);

(statearr_16098_18535[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (26))){
var inst_15867 = (state_15950[(27)]);
var inst_15933 = (state_15950[(2)]);
var inst_15934 = cljs.core.seq(inst_15867);
var state_15950__$1 = (function (){var statearr_16099 = state_15950;
(statearr_16099[(29)] = inst_15933);

return statearr_16099;
})();
if(inst_15934){
var statearr_16103_18536 = state_15950__$1;
(statearr_16103_18536[(1)] = (42));

} else {
var statearr_16104_18541 = state_15950__$1;
(statearr_16104_18541[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (16))){
var inst_15829 = (state_15950[(7)]);
var inst_15831 = cljs.core.chunked_seq_QMARK_(inst_15829);
var state_15950__$1 = state_15950;
if(inst_15831){
var statearr_16106_18542 = state_15950__$1;
(statearr_16106_18542[(1)] = (19));

} else {
var statearr_16107_18543 = state_15950__$1;
(statearr_16107_18543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (38))){
var inst_15926 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16108_18545 = state_15950__$1;
(statearr_16108_18545[(2)] = inst_15926);

(statearr_16108_18545[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (30))){
var state_15950__$1 = state_15950;
var statearr_16109_18546 = state_15950__$1;
(statearr_16109_18546[(2)] = null);

(statearr_16109_18546[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (10))){
var inst_15807 = (state_15950[(15)]);
var inst_15805 = (state_15950[(17)]);
var inst_15815 = cljs.core._nth(inst_15805,inst_15807);
var inst_15816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15815,(0),null);
var inst_15818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15815,(1),null);
var state_15950__$1 = (function (){var statearr_16114 = state_15950;
(statearr_16114[(24)] = inst_15816);

return statearr_16114;
})();
if(cljs.core.truth_(inst_15818)){
var statearr_16115_18551 = state_15950__$1;
(statearr_16115_18551[(1)] = (13));

} else {
var statearr_16116_18552 = state_15950__$1;
(statearr_16116_18552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (18))){
var inst_15859 = (state_15950[(2)]);
var state_15950__$1 = state_15950;
var statearr_16117_18557 = state_15950__$1;
(statearr_16117_18557[(2)] = inst_15859);

(statearr_16117_18557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (42))){
var state_15950__$1 = state_15950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15950__$1,(45),dchan);
} else {
if((state_val_15951 === (37))){
var inst_15913 = (state_15950[(22)]);
var inst_15794 = (state_15950[(12)]);
var inst_15903 = (state_15950[(23)]);
var inst_15913__$1 = cljs.core.first(inst_15903);
var inst_15916 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15913__$1,inst_15794,done);
var state_15950__$1 = (function (){var statearr_16118 = state_15950;
(statearr_16118[(22)] = inst_15913__$1);

return statearr_16118;
})();
if(cljs.core.truth_(inst_15916)){
var statearr_16119_18571 = state_15950__$1;
(statearr_16119_18571[(1)] = (39));

} else {
var statearr_16123_18572 = state_15950__$1;
(statearr_16123_18572[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15951 === (8))){
var inst_15806 = (state_15950[(13)]);
var inst_15807 = (state_15950[(15)]);
var inst_15809 = (inst_15807 < inst_15806);
var inst_15810 = inst_15809;
var state_15950__$1 = state_15950;
if(cljs.core.truth_(inst_15810)){
var statearr_16125_18574 = state_15950__$1;
(statearr_16125_18574[(1)] = (10));

} else {
var statearr_16126_18575 = state_15950__$1;
(statearr_16126_18575[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13801__auto__ = null;
var cljs$core$async$mult_$_state_machine__13801__auto____0 = (function (){
var statearr_16128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16128[(0)] = cljs$core$async$mult_$_state_machine__13801__auto__);

(statearr_16128[(1)] = (1));

return statearr_16128;
});
var cljs$core$async$mult_$_state_machine__13801__auto____1 = (function (state_15950){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_15950);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e16129){var ex__13804__auto__ = e16129;
var statearr_16130_18587 = state_15950;
(statearr_16130_18587[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_15950[(4)]))){
var statearr_16131_18588 = state_15950;
(statearr_16131_18588[(1)] = cljs.core.first((state_15950[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18589 = state_15950;
state_15950 = G__18589;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13801__auto__ = function(state_15950){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13801__auto____1.call(this,state_15950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13801__auto____0;
cljs$core$async$mult_$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13801__auto____1;
return cljs$core$async$mult_$_state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_16132 = f__14469__auto__();
(statearr_16132[(6)] = c__14468__auto___18444);

return statearr_16132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16144 = arguments.length;
switch (G__16144) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18617 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18617(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18638 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18638(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18640 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18640(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18652 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18652(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18668 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18668(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18684 = arguments.length;
var i__5727__auto___18686 = (0);
while(true){
if((i__5727__auto___18686 < len__5726__auto___18684)){
args__5732__auto__.push((arguments[i__5727__auto___18686]));

var G__18687 = (i__5727__auto___18686 + (1));
i__5727__auto___18686 = G__18687;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16218){
var map__16220 = p__16218;
var map__16220__$1 = cljs.core.__destructure_map(map__16220);
var opts = map__16220__$1;
var statearr_16221_18688 = state;
(statearr_16221_18688[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16225_18698 = state;
(statearr_16225_18698[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16227_18699 = state;
(statearr_16227_18699[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16186){
var G__16187 = cljs.core.first(seq16186);
var seq16186__$1 = cljs.core.next(seq16186);
var G__16188 = cljs.core.first(seq16186__$1);
var seq16186__$2 = cljs.core.next(seq16186__$1);
var G__16189 = cljs.core.first(seq16186__$2);
var seq16186__$3 = cljs.core.next(seq16186__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16187,G__16188,G__16189,seq16186__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16257 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16258){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16258 = meta16258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16259,meta16258__$1){
var self__ = this;
var _16259__$1 = this;
return (new cljs.core.async.t_cljs$core$async16257(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16258__$1));
}));

(cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16259){
var self__ = this;
var _16259__$1 = this;
return self__.meta16258;
}));

(cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16257.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16258","meta16258",1067134720,null)], null);
}));

(cljs.core.async.t_cljs$core$async16257.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16257");

(cljs.core.async.t_cljs$core$async16257.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16257");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16257.
 */
cljs.core.async.__GT_t_cljs$core$async16257 = (function cljs$core$async$__GT_t_cljs$core$async16257(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16258){
return (new cljs.core.async.t_cljs$core$async16257(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16258));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16257(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14468__auto___18722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_16366){
var state_val_16368 = (state_16366[(1)]);
if((state_val_16368 === (7))){
var inst_16320 = (state_16366[(2)]);
var state_16366__$1 = state_16366;
if(cljs.core.truth_(inst_16320)){
var statearr_16376_18723 = state_16366__$1;
(statearr_16376_18723[(1)] = (8));

} else {
var statearr_16378_18725 = state_16366__$1;
(statearr_16378_18725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (20))){
var inst_16311 = (state_16366[(7)]);
var state_16366__$1 = state_16366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16366__$1,(23),out,inst_16311);
} else {
if((state_val_16368 === (1))){
var inst_16293 = calc_state();
var inst_16295 = cljs.core.__destructure_map(inst_16293);
var inst_16296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16295,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16295,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16295,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16299 = inst_16293;
var state_16366__$1 = (function (){var statearr_16385 = state_16366;
(statearr_16385[(8)] = inst_16297);

(statearr_16385[(9)] = inst_16298);

(statearr_16385[(10)] = inst_16299);

(statearr_16385[(11)] = inst_16296);

return statearr_16385;
})();
var statearr_16388_18726 = state_16366__$1;
(statearr_16388_18726[(2)] = null);

(statearr_16388_18726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (24))){
var inst_16302 = (state_16366[(12)]);
var inst_16299 = inst_16302;
var state_16366__$1 = (function (){var statearr_16390 = state_16366;
(statearr_16390[(10)] = inst_16299);

return statearr_16390;
})();
var statearr_16391_18728 = state_16366__$1;
(statearr_16391_18728[(2)] = null);

(statearr_16391_18728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (4))){
var inst_16314 = (state_16366[(13)]);
var inst_16311 = (state_16366[(7)]);
var inst_16310 = (state_16366[(2)]);
var inst_16311__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16310,(0),null);
var inst_16313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16310,(1),null);
var inst_16314__$1 = (inst_16311__$1 == null);
var state_16366__$1 = (function (){var statearr_16393 = state_16366;
(statearr_16393[(13)] = inst_16314__$1);

(statearr_16393[(7)] = inst_16311__$1);

(statearr_16393[(14)] = inst_16313);

return statearr_16393;
})();
if(cljs.core.truth_(inst_16314__$1)){
var statearr_16396_18739 = state_16366__$1;
(statearr_16396_18739[(1)] = (5));

} else {
var statearr_16397_18740 = state_16366__$1;
(statearr_16397_18740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (15))){
var inst_16303 = (state_16366[(15)]);
var inst_16338 = (state_16366[(16)]);
var inst_16338__$1 = cljs.core.empty_QMARK_(inst_16303);
var state_16366__$1 = (function (){var statearr_16403 = state_16366;
(statearr_16403[(16)] = inst_16338__$1);

return statearr_16403;
})();
if(inst_16338__$1){
var statearr_16404_18742 = state_16366__$1;
(statearr_16404_18742[(1)] = (17));

} else {
var statearr_16406_18743 = state_16366__$1;
(statearr_16406_18743[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (21))){
var inst_16302 = (state_16366[(12)]);
var inst_16299 = inst_16302;
var state_16366__$1 = (function (){var statearr_16408 = state_16366;
(statearr_16408[(10)] = inst_16299);

return statearr_16408;
})();
var statearr_16409_18747 = state_16366__$1;
(statearr_16409_18747[(2)] = null);

(statearr_16409_18747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (13))){
var inst_16328 = (state_16366[(2)]);
var inst_16331 = calc_state();
var inst_16299 = inst_16331;
var state_16366__$1 = (function (){var statearr_16411 = state_16366;
(statearr_16411[(17)] = inst_16328);

(statearr_16411[(10)] = inst_16299);

return statearr_16411;
})();
var statearr_16415_18750 = state_16366__$1;
(statearr_16415_18750[(2)] = null);

(statearr_16415_18750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (22))){
var inst_16358 = (state_16366[(2)]);
var state_16366__$1 = state_16366;
var statearr_16418_18754 = state_16366__$1;
(statearr_16418_18754[(2)] = inst_16358);

(statearr_16418_18754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (6))){
var inst_16313 = (state_16366[(14)]);
var inst_16318 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16313,change);
var state_16366__$1 = state_16366;
var statearr_16419_18761 = state_16366__$1;
(statearr_16419_18761[(2)] = inst_16318);

(statearr_16419_18761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (25))){
var state_16366__$1 = state_16366;
var statearr_16420_18762 = state_16366__$1;
(statearr_16420_18762[(2)] = null);

(statearr_16420_18762[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (17))){
var inst_16304 = (state_16366[(18)]);
var inst_16313 = (state_16366[(14)]);
var inst_16340 = (inst_16304.cljs$core$IFn$_invoke$arity$1 ? inst_16304.cljs$core$IFn$_invoke$arity$1(inst_16313) : inst_16304.call(null, inst_16313));
var inst_16341 = cljs.core.not(inst_16340);
var state_16366__$1 = state_16366;
var statearr_16421_18765 = state_16366__$1;
(statearr_16421_18765[(2)] = inst_16341);

(statearr_16421_18765[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (3))){
var inst_16362 = (state_16366[(2)]);
var state_16366__$1 = state_16366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16366__$1,inst_16362);
} else {
if((state_val_16368 === (12))){
var state_16366__$1 = state_16366;
var statearr_16422_18768 = state_16366__$1;
(statearr_16422_18768[(2)] = null);

(statearr_16422_18768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (2))){
var inst_16302 = (state_16366[(12)]);
var inst_16299 = (state_16366[(10)]);
var inst_16302__$1 = cljs.core.__destructure_map(inst_16299);
var inst_16303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16302__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16302__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16302__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16366__$1 = (function (){var statearr_16437 = state_16366;
(statearr_16437[(15)] = inst_16303);

(statearr_16437[(12)] = inst_16302__$1);

(statearr_16437[(18)] = inst_16304);

return statearr_16437;
})();
return cljs.core.async.ioc_alts_BANG_(state_16366__$1,(4),inst_16305);
} else {
if((state_val_16368 === (23))){
var inst_16349 = (state_16366[(2)]);
var state_16366__$1 = state_16366;
if(cljs.core.truth_(inst_16349)){
var statearr_16438_18774 = state_16366__$1;
(statearr_16438_18774[(1)] = (24));

} else {
var statearr_16439_18775 = state_16366__$1;
(statearr_16439_18775[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (19))){
var inst_16344 = (state_16366[(2)]);
var state_16366__$1 = state_16366;
var statearr_16440_18777 = state_16366__$1;
(statearr_16440_18777[(2)] = inst_16344);

(statearr_16440_18777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (11))){
var inst_16313 = (state_16366[(14)]);
var inst_16325 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16313);
var state_16366__$1 = state_16366;
var statearr_16446_18789 = state_16366__$1;
(statearr_16446_18789[(2)] = inst_16325);

(statearr_16446_18789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (9))){
var inst_16303 = (state_16366[(15)]);
var inst_16334 = (state_16366[(19)]);
var inst_16313 = (state_16366[(14)]);
var inst_16334__$1 = (inst_16303.cljs$core$IFn$_invoke$arity$1 ? inst_16303.cljs$core$IFn$_invoke$arity$1(inst_16313) : inst_16303.call(null, inst_16313));
var state_16366__$1 = (function (){var statearr_16450 = state_16366;
(statearr_16450[(19)] = inst_16334__$1);

return statearr_16450;
})();
if(cljs.core.truth_(inst_16334__$1)){
var statearr_16451_18798 = state_16366__$1;
(statearr_16451_18798[(1)] = (14));

} else {
var statearr_16452_18800 = state_16366__$1;
(statearr_16452_18800[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (5))){
var inst_16314 = (state_16366[(13)]);
var state_16366__$1 = state_16366;
var statearr_16453_18805 = state_16366__$1;
(statearr_16453_18805[(2)] = inst_16314);

(statearr_16453_18805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (14))){
var inst_16334 = (state_16366[(19)]);
var state_16366__$1 = state_16366;
var statearr_16454_18809 = state_16366__$1;
(statearr_16454_18809[(2)] = inst_16334);

(statearr_16454_18809[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (26))){
var inst_16354 = (state_16366[(2)]);
var state_16366__$1 = state_16366;
var statearr_16455_18814 = state_16366__$1;
(statearr_16455_18814[(2)] = inst_16354);

(statearr_16455_18814[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (16))){
var inst_16346 = (state_16366[(2)]);
var state_16366__$1 = state_16366;
if(cljs.core.truth_(inst_16346)){
var statearr_16456_18816 = state_16366__$1;
(statearr_16456_18816[(1)] = (20));

} else {
var statearr_16457_18817 = state_16366__$1;
(statearr_16457_18817[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (10))){
var inst_16360 = (state_16366[(2)]);
var state_16366__$1 = state_16366;
var statearr_16458_18819 = state_16366__$1;
(statearr_16458_18819[(2)] = inst_16360);

(statearr_16458_18819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (18))){
var inst_16338 = (state_16366[(16)]);
var state_16366__$1 = state_16366;
var statearr_16459_18822 = state_16366__$1;
(statearr_16459_18822[(2)] = inst_16338);

(statearr_16459_18822[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16368 === (8))){
var inst_16311 = (state_16366[(7)]);
var inst_16323 = (inst_16311 == null);
var state_16366__$1 = state_16366;
if(cljs.core.truth_(inst_16323)){
var statearr_16460_18823 = state_16366__$1;
(statearr_16460_18823[(1)] = (11));

} else {
var statearr_16462_18824 = state_16366__$1;
(statearr_16462_18824[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13801__auto__ = null;
var cljs$core$async$mix_$_state_machine__13801__auto____0 = (function (){
var statearr_16469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16469[(0)] = cljs$core$async$mix_$_state_machine__13801__auto__);

(statearr_16469[(1)] = (1));

return statearr_16469;
});
var cljs$core$async$mix_$_state_machine__13801__auto____1 = (function (state_16366){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_16366);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e16470){var ex__13804__auto__ = e16470;
var statearr_16471_18832 = state_16366;
(statearr_16471_18832[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_16366[(4)]))){
var statearr_16472_18840 = state_16366;
(statearr_16472_18840[(1)] = cljs.core.first((state_16366[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18843 = state_16366;
state_16366 = G__18843;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13801__auto__ = function(state_16366){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13801__auto____1.call(this,state_16366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13801__auto____0;
cljs$core$async$mix_$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13801__auto____1;
return cljs$core$async$mix_$_state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_16477 = f__14469__auto__();
(statearr_16477[(6)] = c__14468__auto___18722);

return statearr_16477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18851 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18851(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18855 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18855(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18859 = (function() {
var G__18860 = null;
var G__18860__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18860__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18860 = function(p,v){
switch(arguments.length){
case 1:
return G__18860__1.call(this,p);
case 2:
return G__18860__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18860.cljs$core$IFn$_invoke$arity$1 = G__18860__1;
G__18860.cljs$core$IFn$_invoke$arity$2 = G__18860__2;
return G__18860;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16531 = arguments.length;
switch (G__16531) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18859(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18859(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16563 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16564){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16564 = meta16564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16565,meta16564__$1){
var self__ = this;
var _16565__$1 = this;
return (new cljs.core.async.t_cljs$core$async16563(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16564__$1));
}));

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16565){
var self__ = this;
var _16565__$1 = this;
return self__.meta16564;
}));

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16564","meta16564",-933527749,null)], null);
}));

(cljs.core.async.t_cljs$core$async16563.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16563");

(cljs.core.async.t_cljs$core$async16563.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16563");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16563.
 */
cljs.core.async.__GT_t_cljs$core$async16563 = (function cljs$core$async$__GT_t_cljs$core$async16563(ch,topic_fn,buf_fn,mults,ensure_mult,meta16564){
return (new cljs.core.async.t_cljs$core$async16563(ch,topic_fn,buf_fn,mults,ensure_mult,meta16564));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16556 = arguments.length;
switch (G__16556) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16552_SHARP_){
if(cljs.core.truth_((p1__16552_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16552_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16552_SHARP_.call(null, topic)))){
return p1__16552_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16552_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16563(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14468__auto___18895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_16682){
var state_val_16683 = (state_16682[(1)]);
if((state_val_16683 === (7))){
var inst_16676 = (state_16682[(2)]);
var state_16682__$1 = state_16682;
var statearr_16689_18901 = state_16682__$1;
(statearr_16689_18901[(2)] = inst_16676);

(statearr_16689_18901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (20))){
var state_16682__$1 = state_16682;
var statearr_16691_18907 = state_16682__$1;
(statearr_16691_18907[(2)] = null);

(statearr_16691_18907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (1))){
var state_16682__$1 = state_16682;
var statearr_16700_18916 = state_16682__$1;
(statearr_16700_18916[(2)] = null);

(statearr_16700_18916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (24))){
var inst_16656 = (state_16682[(7)]);
var inst_16668 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16656);
var state_16682__$1 = state_16682;
var statearr_16705_18921 = state_16682__$1;
(statearr_16705_18921[(2)] = inst_16668);

(statearr_16705_18921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (4))){
var inst_16587 = (state_16682[(8)]);
var inst_16587__$1 = (state_16682[(2)]);
var inst_16589 = (inst_16587__$1 == null);
var state_16682__$1 = (function (){var statearr_16706 = state_16682;
(statearr_16706[(8)] = inst_16587__$1);

return statearr_16706;
})();
if(cljs.core.truth_(inst_16589)){
var statearr_16707_18927 = state_16682__$1;
(statearr_16707_18927[(1)] = (5));

} else {
var statearr_16708_18928 = state_16682__$1;
(statearr_16708_18928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (15))){
var inst_16646 = (state_16682[(2)]);
var state_16682__$1 = state_16682;
var statearr_16710_18929 = state_16682__$1;
(statearr_16710_18929[(2)] = inst_16646);

(statearr_16710_18929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (21))){
var inst_16673 = (state_16682[(2)]);
var state_16682__$1 = (function (){var statearr_16712 = state_16682;
(statearr_16712[(9)] = inst_16673);

return statearr_16712;
})();
var statearr_16713_18935 = state_16682__$1;
(statearr_16713_18935[(2)] = null);

(statearr_16713_18935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (13))){
var inst_16624 = (state_16682[(10)]);
var inst_16628 = cljs.core.chunked_seq_QMARK_(inst_16624);
var state_16682__$1 = state_16682;
if(inst_16628){
var statearr_16719_18936 = state_16682__$1;
(statearr_16719_18936[(1)] = (16));

} else {
var statearr_16720_18937 = state_16682__$1;
(statearr_16720_18937[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (22))){
var inst_16664 = (state_16682[(2)]);
var state_16682__$1 = state_16682;
if(cljs.core.truth_(inst_16664)){
var statearr_16721_18938 = state_16682__$1;
(statearr_16721_18938[(1)] = (23));

} else {
var statearr_16722_18939 = state_16682__$1;
(statearr_16722_18939[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (6))){
var inst_16658 = (state_16682[(11)]);
var inst_16656 = (state_16682[(7)]);
var inst_16587 = (state_16682[(8)]);
var inst_16656__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16587) : topic_fn.call(null, inst_16587));
var inst_16657 = cljs.core.deref(mults);
var inst_16658__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16657,inst_16656__$1);
var state_16682__$1 = (function (){var statearr_16728 = state_16682;
(statearr_16728[(11)] = inst_16658__$1);

(statearr_16728[(7)] = inst_16656__$1);

return statearr_16728;
})();
if(cljs.core.truth_(inst_16658__$1)){
var statearr_16731_18941 = state_16682__$1;
(statearr_16731_18941[(1)] = (19));

} else {
var statearr_16735_18942 = state_16682__$1;
(statearr_16735_18942[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (25))){
var inst_16670 = (state_16682[(2)]);
var state_16682__$1 = state_16682;
var statearr_16738_18943 = state_16682__$1;
(statearr_16738_18943[(2)] = inst_16670);

(statearr_16738_18943[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (17))){
var inst_16624 = (state_16682[(10)]);
var inst_16637 = cljs.core.first(inst_16624);
var inst_16638 = cljs.core.async.muxch_STAR_(inst_16637);
var inst_16639 = cljs.core.async.close_BANG_(inst_16638);
var inst_16640 = cljs.core.next(inst_16624);
var inst_16599 = inst_16640;
var inst_16600 = null;
var inst_16601 = (0);
var inst_16602 = (0);
var state_16682__$1 = (function (){var statearr_16743 = state_16682;
(statearr_16743[(12)] = inst_16600);

(statearr_16743[(13)] = inst_16599);

(statearr_16743[(14)] = inst_16639);

(statearr_16743[(15)] = inst_16601);

(statearr_16743[(16)] = inst_16602);

return statearr_16743;
})();
var statearr_16748_18958 = state_16682__$1;
(statearr_16748_18958[(2)] = null);

(statearr_16748_18958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (3))){
var inst_16678 = (state_16682[(2)]);
var state_16682__$1 = state_16682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16682__$1,inst_16678);
} else {
if((state_val_16683 === (12))){
var inst_16648 = (state_16682[(2)]);
var state_16682__$1 = state_16682;
var statearr_16758_18967 = state_16682__$1;
(statearr_16758_18967[(2)] = inst_16648);

(statearr_16758_18967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (2))){
var state_16682__$1 = state_16682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16682__$1,(4),ch);
} else {
if((state_val_16683 === (23))){
var state_16682__$1 = state_16682;
var statearr_16760_18979 = state_16682__$1;
(statearr_16760_18979[(2)] = null);

(statearr_16760_18979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (19))){
var inst_16658 = (state_16682[(11)]);
var inst_16587 = (state_16682[(8)]);
var inst_16662 = cljs.core.async.muxch_STAR_(inst_16658);
var state_16682__$1 = state_16682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16682__$1,(22),inst_16662,inst_16587);
} else {
if((state_val_16683 === (11))){
var inst_16599 = (state_16682[(13)]);
var inst_16624 = (state_16682[(10)]);
var inst_16624__$1 = cljs.core.seq(inst_16599);
var state_16682__$1 = (function (){var statearr_16765 = state_16682;
(statearr_16765[(10)] = inst_16624__$1);

return statearr_16765;
})();
if(inst_16624__$1){
var statearr_16766_18988 = state_16682__$1;
(statearr_16766_18988[(1)] = (13));

} else {
var statearr_16767_18989 = state_16682__$1;
(statearr_16767_18989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (9))){
var inst_16650 = (state_16682[(2)]);
var state_16682__$1 = state_16682;
var statearr_16769_18990 = state_16682__$1;
(statearr_16769_18990[(2)] = inst_16650);

(statearr_16769_18990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (5))){
var inst_16596 = cljs.core.deref(mults);
var inst_16597 = cljs.core.vals(inst_16596);
var inst_16598 = cljs.core.seq(inst_16597);
var inst_16599 = inst_16598;
var inst_16600 = null;
var inst_16601 = (0);
var inst_16602 = (0);
var state_16682__$1 = (function (){var statearr_16771 = state_16682;
(statearr_16771[(12)] = inst_16600);

(statearr_16771[(13)] = inst_16599);

(statearr_16771[(15)] = inst_16601);

(statearr_16771[(16)] = inst_16602);

return statearr_16771;
})();
var statearr_16772_19003 = state_16682__$1;
(statearr_16772_19003[(2)] = null);

(statearr_16772_19003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (14))){
var state_16682__$1 = state_16682;
var statearr_16776_19014 = state_16682__$1;
(statearr_16776_19014[(2)] = null);

(statearr_16776_19014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (16))){
var inst_16624 = (state_16682[(10)]);
var inst_16632 = cljs.core.chunk_first(inst_16624);
var inst_16633 = cljs.core.chunk_rest(inst_16624);
var inst_16634 = cljs.core.count(inst_16632);
var inst_16599 = inst_16633;
var inst_16600 = inst_16632;
var inst_16601 = inst_16634;
var inst_16602 = (0);
var state_16682__$1 = (function (){var statearr_16778 = state_16682;
(statearr_16778[(12)] = inst_16600);

(statearr_16778[(13)] = inst_16599);

(statearr_16778[(15)] = inst_16601);

(statearr_16778[(16)] = inst_16602);

return statearr_16778;
})();
var statearr_16780_19022 = state_16682__$1;
(statearr_16780_19022[(2)] = null);

(statearr_16780_19022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (10))){
var inst_16600 = (state_16682[(12)]);
var inst_16599 = (state_16682[(13)]);
var inst_16601 = (state_16682[(15)]);
var inst_16602 = (state_16682[(16)]);
var inst_16614 = cljs.core._nth(inst_16600,inst_16602);
var inst_16615 = cljs.core.async.muxch_STAR_(inst_16614);
var inst_16616 = cljs.core.async.close_BANG_(inst_16615);
var inst_16617 = (inst_16602 + (1));
var tmp16773 = inst_16600;
var tmp16774 = inst_16599;
var tmp16775 = inst_16601;
var inst_16599__$1 = tmp16774;
var inst_16600__$1 = tmp16773;
var inst_16601__$1 = tmp16775;
var inst_16602__$1 = inst_16617;
var state_16682__$1 = (function (){var statearr_16781 = state_16682;
(statearr_16781[(12)] = inst_16600__$1);

(statearr_16781[(13)] = inst_16599__$1);

(statearr_16781[(17)] = inst_16616);

(statearr_16781[(15)] = inst_16601__$1);

(statearr_16781[(16)] = inst_16602__$1);

return statearr_16781;
})();
var statearr_16788_19042 = state_16682__$1;
(statearr_16788_19042[(2)] = null);

(statearr_16788_19042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (18))){
var inst_16643 = (state_16682[(2)]);
var state_16682__$1 = state_16682;
var statearr_16790_19047 = state_16682__$1;
(statearr_16790_19047[(2)] = inst_16643);

(statearr_16790_19047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16683 === (8))){
var inst_16601 = (state_16682[(15)]);
var inst_16602 = (state_16682[(16)]);
var inst_16605 = (inst_16602 < inst_16601);
var inst_16606 = inst_16605;
var state_16682__$1 = state_16682;
if(cljs.core.truth_(inst_16606)){
var statearr_16791_19049 = state_16682__$1;
(statearr_16791_19049[(1)] = (10));

} else {
var statearr_16792_19050 = state_16682__$1;
(statearr_16792_19050[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13801__auto__ = null;
var cljs$core$async$state_machine__13801__auto____0 = (function (){
var statearr_16801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16801[(0)] = cljs$core$async$state_machine__13801__auto__);

(statearr_16801[(1)] = (1));

return statearr_16801;
});
var cljs$core$async$state_machine__13801__auto____1 = (function (state_16682){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_16682);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e16802){var ex__13804__auto__ = e16802;
var statearr_16803_19066 = state_16682;
(statearr_16803_19066[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_16682[(4)]))){
var statearr_16804_19071 = state_16682;
(statearr_16804_19071[(1)] = cljs.core.first((state_16682[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19082 = state_16682;
state_16682 = G__19082;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$state_machine__13801__auto__ = function(state_16682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13801__auto____1.call(this,state_16682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13801__auto____0;
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13801__auto____1;
return cljs$core$async$state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_16807 = f__14469__auto__();
(statearr_16807[(6)] = c__14468__auto___18895);

return statearr_16807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16813 = arguments.length;
switch (G__16813) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16817 = arguments.length;
switch (G__16817) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16825 = arguments.length;
switch (G__16825) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14468__auto___19108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_16878){
var state_val_16879 = (state_16878[(1)]);
if((state_val_16879 === (7))){
var state_16878__$1 = state_16878;
var statearr_16881_19110 = state_16878__$1;
(statearr_16881_19110[(2)] = null);

(statearr_16881_19110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16879 === (1))){
var state_16878__$1 = state_16878;
var statearr_16882_19111 = state_16878__$1;
(statearr_16882_19111[(2)] = null);

(statearr_16882_19111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16879 === (4))){
var inst_16829 = (state_16878[(7)]);
var inst_16830 = (state_16878[(8)]);
var inst_16832 = (inst_16830 < inst_16829);
var state_16878__$1 = state_16878;
if(cljs.core.truth_(inst_16832)){
var statearr_16884_19112 = state_16878__$1;
(statearr_16884_19112[(1)] = (6));

} else {
var statearr_16885_19113 = state_16878__$1;
(statearr_16885_19113[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16879 === (15))){
var inst_16864 = (state_16878[(9)]);
var inst_16869 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16864);
var state_16878__$1 = state_16878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16878__$1,(17),out,inst_16869);
} else {
if((state_val_16879 === (13))){
var inst_16864 = (state_16878[(9)]);
var inst_16864__$1 = (state_16878[(2)]);
var inst_16865 = cljs.core.some(cljs.core.nil_QMARK_,inst_16864__$1);
var state_16878__$1 = (function (){var statearr_16886 = state_16878;
(statearr_16886[(9)] = inst_16864__$1);

return statearr_16886;
})();
if(cljs.core.truth_(inst_16865)){
var statearr_16887_19115 = state_16878__$1;
(statearr_16887_19115[(1)] = (14));

} else {
var statearr_16888_19116 = state_16878__$1;
(statearr_16888_19116[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16879 === (6))){
var state_16878__$1 = state_16878;
var statearr_16891_19117 = state_16878__$1;
(statearr_16891_19117[(2)] = null);

(statearr_16891_19117[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16879 === (17))){
var inst_16871 = (state_16878[(2)]);
var state_16878__$1 = (function (){var statearr_16895 = state_16878;
(statearr_16895[(10)] = inst_16871);

return statearr_16895;
})();
var statearr_16897_19120 = state_16878__$1;
(statearr_16897_19120[(2)] = null);

(statearr_16897_19120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16879 === (3))){
var inst_16876 = (state_16878[(2)]);
var state_16878__$1 = state_16878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16878__$1,inst_16876);
} else {
if((state_val_16879 === (12))){
var _ = (function (){var statearr_16901 = state_16878;
(statearr_16901[(4)] = cljs.core.rest((state_16878[(4)])));

return statearr_16901;
})();
var state_16878__$1 = state_16878;
var ex16894 = (state_16878__$1[(2)]);
var statearr_16902_19128 = state_16878__$1;
(statearr_16902_19128[(5)] = ex16894);


if((ex16894 instanceof Object)){
var statearr_16903_19132 = state_16878__$1;
(statearr_16903_19132[(1)] = (11));

(statearr_16903_19132[(5)] = null);

} else {
throw ex16894;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16879 === (2))){
var inst_16828 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16829 = cnt;
var inst_16830 = (0);
var state_16878__$1 = (function (){var statearr_16906 = state_16878;
(statearr_16906[(7)] = inst_16829);

(statearr_16906[(11)] = inst_16828);

(statearr_16906[(8)] = inst_16830);

return statearr_16906;
})();
var statearr_16910_19138 = state_16878__$1;
(statearr_16910_19138[(2)] = null);

(statearr_16910_19138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16879 === (11))){
var inst_16838 = (state_16878[(2)]);
var inst_16839 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16878__$1 = (function (){var statearr_16912 = state_16878;
(statearr_16912[(12)] = inst_16838);

return statearr_16912;
})();
var statearr_16913_19144 = state_16878__$1;
(statearr_16913_19144[(2)] = inst_16839);

(statearr_16913_19144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16879 === (9))){
var inst_16830 = (state_16878[(8)]);
var _ = (function (){var statearr_16915 = state_16878;
(statearr_16915[(4)] = cljs.core.cons((12),(state_16878[(4)])));

return statearr_16915;
})();
var inst_16847 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16830) : chs__$1.call(null, inst_16830));
var inst_16848 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16830) : done.call(null, inst_16830));
var inst_16849 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16847,inst_16848);
var ___$1 = (function (){var statearr_16919 = state_16878;
(statearr_16919[(4)] = cljs.core.rest((state_16878[(4)])));

return statearr_16919;
})();
var state_16878__$1 = state_16878;
var statearr_16920_19149 = state_16878__$1;
(statearr_16920_19149[(2)] = inst_16849);

(statearr_16920_19149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16879 === (5))){
var inst_16862 = (state_16878[(2)]);
var state_16878__$1 = (function (){var statearr_16923 = state_16878;
(statearr_16923[(13)] = inst_16862);

return statearr_16923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16878__$1,(13),dchan);
} else {
if((state_val_16879 === (14))){
var inst_16867 = cljs.core.async.close_BANG_(out);
var state_16878__$1 = state_16878;
var statearr_16927_19155 = state_16878__$1;
(statearr_16927_19155[(2)] = inst_16867);

(statearr_16927_19155[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16879 === (16))){
var inst_16874 = (state_16878[(2)]);
var state_16878__$1 = state_16878;
var statearr_16931_19157 = state_16878__$1;
(statearr_16931_19157[(2)] = inst_16874);

(statearr_16931_19157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16879 === (10))){
var inst_16830 = (state_16878[(8)]);
var inst_16852 = (state_16878[(2)]);
var inst_16853 = (inst_16830 + (1));
var inst_16830__$1 = inst_16853;
var state_16878__$1 = (function (){var statearr_16933 = state_16878;
(statearr_16933[(14)] = inst_16852);

(statearr_16933[(8)] = inst_16830__$1);

return statearr_16933;
})();
var statearr_16934_19163 = state_16878__$1;
(statearr_16934_19163[(2)] = null);

(statearr_16934_19163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16879 === (8))){
var inst_16860 = (state_16878[(2)]);
var state_16878__$1 = state_16878;
var statearr_16938_19164 = state_16878__$1;
(statearr_16938_19164[(2)] = inst_16860);

(statearr_16938_19164[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13801__auto__ = null;
var cljs$core$async$state_machine__13801__auto____0 = (function (){
var statearr_16944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16944[(0)] = cljs$core$async$state_machine__13801__auto__);

(statearr_16944[(1)] = (1));

return statearr_16944;
});
var cljs$core$async$state_machine__13801__auto____1 = (function (state_16878){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_16878);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e16945){var ex__13804__auto__ = e16945;
var statearr_16947_19175 = state_16878;
(statearr_16947_19175[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_16878[(4)]))){
var statearr_16948_19176 = state_16878;
(statearr_16948_19176[(1)] = cljs.core.first((state_16878[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19177 = state_16878;
state_16878 = G__19177;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$state_machine__13801__auto__ = function(state_16878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13801__auto____1.call(this,state_16878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13801__auto____0;
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13801__auto____1;
return cljs$core$async$state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_16953 = f__14469__auto__();
(statearr_16953[(6)] = c__14468__auto___19108);

return statearr_16953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16960 = arguments.length;
switch (G__16960) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14468__auto___19180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_17035){
var state_val_17036 = (state_17035[(1)]);
if((state_val_17036 === (7))){
var inst_16999 = (state_17035[(7)]);
var inst_17000 = (state_17035[(8)]);
var inst_16999__$1 = (state_17035[(2)]);
var inst_17000__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16999__$1,(0),null);
var inst_17001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16999__$1,(1),null);
var inst_17004 = (inst_17000__$1 == null);
var state_17035__$1 = (function (){var statearr_17057 = state_17035;
(statearr_17057[(9)] = inst_17001);

(statearr_17057[(7)] = inst_16999__$1);

(statearr_17057[(8)] = inst_17000__$1);

return statearr_17057;
})();
if(cljs.core.truth_(inst_17004)){
var statearr_17058_19196 = state_17035__$1;
(statearr_17058_19196[(1)] = (8));

} else {
var statearr_17059_19197 = state_17035__$1;
(statearr_17059_19197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17036 === (1))){
var inst_16973 = cljs.core.vec(chs);
var inst_16976 = inst_16973;
var state_17035__$1 = (function (){var statearr_17060 = state_17035;
(statearr_17060[(10)] = inst_16976);

return statearr_17060;
})();
var statearr_17067_19198 = state_17035__$1;
(statearr_17067_19198[(2)] = null);

(statearr_17067_19198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17036 === (4))){
var inst_16976 = (state_17035[(10)]);
var state_17035__$1 = state_17035;
return cljs.core.async.ioc_alts_BANG_(state_17035__$1,(7),inst_16976);
} else {
if((state_val_17036 === (6))){
var inst_17025 = (state_17035[(2)]);
var state_17035__$1 = state_17035;
var statearr_17070_19204 = state_17035__$1;
(statearr_17070_19204[(2)] = inst_17025);

(statearr_17070_19204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17036 === (3))){
var inst_17028 = (state_17035[(2)]);
var state_17035__$1 = state_17035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17035__$1,inst_17028);
} else {
if((state_val_17036 === (2))){
var inst_16976 = (state_17035[(10)]);
var inst_16984 = cljs.core.count(inst_16976);
var inst_16988 = (inst_16984 > (0));
var state_17035__$1 = state_17035;
if(cljs.core.truth_(inst_16988)){
var statearr_17072_19209 = state_17035__$1;
(statearr_17072_19209[(1)] = (4));

} else {
var statearr_17074_19210 = state_17035__$1;
(statearr_17074_19210[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17036 === (11))){
var inst_16976 = (state_17035[(10)]);
var inst_17018 = (state_17035[(2)]);
var tmp17071 = inst_16976;
var inst_16976__$1 = tmp17071;
var state_17035__$1 = (function (){var statearr_17076 = state_17035;
(statearr_17076[(10)] = inst_16976__$1);

(statearr_17076[(11)] = inst_17018);

return statearr_17076;
})();
var statearr_17077_19213 = state_17035__$1;
(statearr_17077_19213[(2)] = null);

(statearr_17077_19213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17036 === (9))){
var inst_17000 = (state_17035[(8)]);
var state_17035__$1 = state_17035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17035__$1,(11),out,inst_17000);
} else {
if((state_val_17036 === (5))){
var inst_17023 = cljs.core.async.close_BANG_(out);
var state_17035__$1 = state_17035;
var statearr_17084_19217 = state_17035__$1;
(statearr_17084_19217[(2)] = inst_17023);

(statearr_17084_19217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17036 === (10))){
var inst_17021 = (state_17035[(2)]);
var state_17035__$1 = state_17035;
var statearr_17085_19218 = state_17035__$1;
(statearr_17085_19218[(2)] = inst_17021);

(statearr_17085_19218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17036 === (8))){
var inst_17001 = (state_17035[(9)]);
var inst_16976 = (state_17035[(10)]);
var inst_16999 = (state_17035[(7)]);
var inst_17000 = (state_17035[(8)]);
var inst_17013 = (function (){var cs = inst_16976;
var vec__16993 = inst_16999;
var v = inst_17000;
var c = inst_17001;
return (function (p1__16954_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16954_SHARP_);
});
})();
var inst_17014 = cljs.core.filterv(inst_17013,inst_16976);
var inst_16976__$1 = inst_17014;
var state_17035__$1 = (function (){var statearr_17089 = state_17035;
(statearr_17089[(10)] = inst_16976__$1);

return statearr_17089;
})();
var statearr_17090_19221 = state_17035__$1;
(statearr_17090_19221[(2)] = null);

(statearr_17090_19221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13801__auto__ = null;
var cljs$core$async$state_machine__13801__auto____0 = (function (){
var statearr_17091 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17091[(0)] = cljs$core$async$state_machine__13801__auto__);

(statearr_17091[(1)] = (1));

return statearr_17091;
});
var cljs$core$async$state_machine__13801__auto____1 = (function (state_17035){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_17035);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e17092){var ex__13804__auto__ = e17092;
var statearr_17093_19225 = state_17035;
(statearr_17093_19225[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_17035[(4)]))){
var statearr_17094_19226 = state_17035;
(statearr_17094_19226[(1)] = cljs.core.first((state_17035[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19227 = state_17035;
state_17035 = G__19227;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$state_machine__13801__auto__ = function(state_17035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13801__auto____1.call(this,state_17035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13801__auto____0;
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13801__auto____1;
return cljs$core$async$state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_17097 = f__14469__auto__();
(statearr_17097[(6)] = c__14468__auto___19180);

return statearr_17097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17106 = arguments.length;
switch (G__17106) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14468__auto___19230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_17134){
var state_val_17135 = (state_17134[(1)]);
if((state_val_17135 === (7))){
var inst_17113 = (state_17134[(7)]);
var inst_17113__$1 = (state_17134[(2)]);
var inst_17114 = (inst_17113__$1 == null);
var inst_17116 = cljs.core.not(inst_17114);
var state_17134__$1 = (function (){var statearr_17139 = state_17134;
(statearr_17139[(7)] = inst_17113__$1);

return statearr_17139;
})();
if(inst_17116){
var statearr_17140_19232 = state_17134__$1;
(statearr_17140_19232[(1)] = (8));

} else {
var statearr_17142_19233 = state_17134__$1;
(statearr_17142_19233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17135 === (1))){
var inst_17107 = (0);
var state_17134__$1 = (function (){var statearr_17144 = state_17134;
(statearr_17144[(8)] = inst_17107);

return statearr_17144;
})();
var statearr_17147_19234 = state_17134__$1;
(statearr_17147_19234[(2)] = null);

(statearr_17147_19234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17135 === (4))){
var state_17134__$1 = state_17134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17134__$1,(7),ch);
} else {
if((state_val_17135 === (6))){
var inst_17129 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
var statearr_17154_19235 = state_17134__$1;
(statearr_17154_19235[(2)] = inst_17129);

(statearr_17154_19235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17135 === (3))){
var inst_17131 = (state_17134[(2)]);
var inst_17132 = cljs.core.async.close_BANG_(out);
var state_17134__$1 = (function (){var statearr_17162 = state_17134;
(statearr_17162[(9)] = inst_17131);

return statearr_17162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17134__$1,inst_17132);
} else {
if((state_val_17135 === (2))){
var inst_17107 = (state_17134[(8)]);
var inst_17109 = (inst_17107 < n);
var state_17134__$1 = state_17134;
if(cljs.core.truth_(inst_17109)){
var statearr_17163_19244 = state_17134__$1;
(statearr_17163_19244[(1)] = (4));

} else {
var statearr_17164_19249 = state_17134__$1;
(statearr_17164_19249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17135 === (11))){
var inst_17107 = (state_17134[(8)]);
var inst_17121 = (state_17134[(2)]);
var inst_17122 = (inst_17107 + (1));
var inst_17107__$1 = inst_17122;
var state_17134__$1 = (function (){var statearr_17165 = state_17134;
(statearr_17165[(8)] = inst_17107__$1);

(statearr_17165[(10)] = inst_17121);

return statearr_17165;
})();
var statearr_17166_19252 = state_17134__$1;
(statearr_17166_19252[(2)] = null);

(statearr_17166_19252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17135 === (9))){
var state_17134__$1 = state_17134;
var statearr_17179_19253 = state_17134__$1;
(statearr_17179_19253[(2)] = null);

(statearr_17179_19253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17135 === (5))){
var state_17134__$1 = state_17134;
var statearr_17180_19262 = state_17134__$1;
(statearr_17180_19262[(2)] = null);

(statearr_17180_19262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17135 === (10))){
var inst_17126 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
var statearr_17181_19264 = state_17134__$1;
(statearr_17181_19264[(2)] = inst_17126);

(statearr_17181_19264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17135 === (8))){
var inst_17113 = (state_17134[(7)]);
var state_17134__$1 = state_17134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17134__$1,(11),out,inst_17113);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13801__auto__ = null;
var cljs$core$async$state_machine__13801__auto____0 = (function (){
var statearr_17182 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17182[(0)] = cljs$core$async$state_machine__13801__auto__);

(statearr_17182[(1)] = (1));

return statearr_17182;
});
var cljs$core$async$state_machine__13801__auto____1 = (function (state_17134){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_17134);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e17183){var ex__13804__auto__ = e17183;
var statearr_17184_19275 = state_17134;
(statearr_17184_19275[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_17134[(4)]))){
var statearr_17185_19276 = state_17134;
(statearr_17185_19276[(1)] = cljs.core.first((state_17134[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19277 = state_17134;
state_17134 = G__19277;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$state_machine__13801__auto__ = function(state_17134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13801__auto____1.call(this,state_17134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13801__auto____0;
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13801__auto____1;
return cljs$core$async$state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_17190 = f__14469__auto__();
(statearr_17190[(6)] = c__14468__auto___19230);

return statearr_17190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17201 = (function (f,ch,meta17197,_,fn1,meta17202){
this.f = f;
this.ch = ch;
this.meta17197 = meta17197;
this._ = _;
this.fn1 = fn1;
this.meta17202 = meta17202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17203,meta17202__$1){
var self__ = this;
var _17203__$1 = this;
return (new cljs.core.async.t_cljs$core$async17201(self__.f,self__.ch,self__.meta17197,self__._,self__.fn1,meta17202__$1));
}));

(cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17203){
var self__ = this;
var _17203__$1 = this;
return self__.meta17202;
}));

(cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17191_SHARP_){
var G__17207 = (((p1__17191_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17191_SHARP_) : self__.f.call(null, p1__17191_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17207) : f1.call(null, G__17207));
});
}));

(cljs.core.async.t_cljs$core$async17201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17197","meta17197",512835304,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17196","cljs.core.async/t_cljs$core$async17196",316206065,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17202","meta17202",-892712162,null)], null);
}));

(cljs.core.async.t_cljs$core$async17201.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17201");

(cljs.core.async.t_cljs$core$async17201.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17201");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17201.
 */
cljs.core.async.__GT_t_cljs$core$async17201 = (function cljs$core$async$__GT_t_cljs$core$async17201(f,ch,meta17197,_,fn1,meta17202){
return (new cljs.core.async.t_cljs$core$async17201(f,ch,meta17197,_,fn1,meta17202));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17196 = (function (f,ch,meta17197){
this.f = f;
this.ch = ch;
this.meta17197 = meta17197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17198,meta17197__$1){
var self__ = this;
var _17198__$1 = this;
return (new cljs.core.async.t_cljs$core$async17196(self__.f,self__.ch,meta17197__$1));
}));

(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17198){
var self__ = this;
var _17198__$1 = this;
return self__.meta17197;
}));

(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17201(self__.f,self__.ch,self__.meta17197,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17233 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17233) : self__.f.call(null, G__17233));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17197","meta17197",512835304,null)], null);
}));

(cljs.core.async.t_cljs$core$async17196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17196");

(cljs.core.async.t_cljs$core$async17196.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17196.
 */
cljs.core.async.__GT_t_cljs$core$async17196 = (function cljs$core$async$__GT_t_cljs$core$async17196(f,ch,meta17197){
return (new cljs.core.async.t_cljs$core$async17196(f,ch,meta17197));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17196(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17235 = (function (f,ch,meta17236){
this.f = f;
this.ch = ch;
this.meta17236 = meta17236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17237,meta17236__$1){
var self__ = this;
var _17237__$1 = this;
return (new cljs.core.async.t_cljs$core$async17235(self__.f,self__.ch,meta17236__$1));
}));

(cljs.core.async.t_cljs$core$async17235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17237){
var self__ = this;
var _17237__$1 = this;
return self__.meta17236;
}));

(cljs.core.async.t_cljs$core$async17235.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17235.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17235.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17236","meta17236",1332257062,null)], null);
}));

(cljs.core.async.t_cljs$core$async17235.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17235");

(cljs.core.async.t_cljs$core$async17235.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17235");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17235.
 */
cljs.core.async.__GT_t_cljs$core$async17235 = (function cljs$core$async$__GT_t_cljs$core$async17235(f,ch,meta17236){
return (new cljs.core.async.t_cljs$core$async17235(f,ch,meta17236));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17235(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17248 = (function (p,ch,meta17249){
this.p = p;
this.ch = ch;
this.meta17249 = meta17249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17250,meta17249__$1){
var self__ = this;
var _17250__$1 = this;
return (new cljs.core.async.t_cljs$core$async17248(self__.p,self__.ch,meta17249__$1));
}));

(cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17250){
var self__ = this;
var _17250__$1 = this;
return self__.meta17249;
}));

(cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17249","meta17249",441407198,null)], null);
}));

(cljs.core.async.t_cljs$core$async17248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17248");

(cljs.core.async.t_cljs$core$async17248.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17248.
 */
cljs.core.async.__GT_t_cljs$core$async17248 = (function cljs$core$async$__GT_t_cljs$core$async17248(p,ch,meta17249){
return (new cljs.core.async.t_cljs$core$async17248(p,ch,meta17249));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17248(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17292 = arguments.length;
switch (G__17292) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14468__auto___19328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_17327){
var state_val_17328 = (state_17327[(1)]);
if((state_val_17328 === (7))){
var inst_17323 = (state_17327[(2)]);
var state_17327__$1 = state_17327;
var statearr_17329_19330 = state_17327__$1;
(statearr_17329_19330[(2)] = inst_17323);

(statearr_17329_19330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17328 === (1))){
var state_17327__$1 = state_17327;
var statearr_17332_19332 = state_17327__$1;
(statearr_17332_19332[(2)] = null);

(statearr_17332_19332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17328 === (4))){
var inst_17309 = (state_17327[(7)]);
var inst_17309__$1 = (state_17327[(2)]);
var inst_17310 = (inst_17309__$1 == null);
var state_17327__$1 = (function (){var statearr_17336 = state_17327;
(statearr_17336[(7)] = inst_17309__$1);

return statearr_17336;
})();
if(cljs.core.truth_(inst_17310)){
var statearr_17337_19338 = state_17327__$1;
(statearr_17337_19338[(1)] = (5));

} else {
var statearr_17338_19339 = state_17327__$1;
(statearr_17338_19339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17328 === (6))){
var inst_17309 = (state_17327[(7)]);
var inst_17314 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17309) : p.call(null, inst_17309));
var state_17327__$1 = state_17327;
if(cljs.core.truth_(inst_17314)){
var statearr_17340_19340 = state_17327__$1;
(statearr_17340_19340[(1)] = (8));

} else {
var statearr_17341_19341 = state_17327__$1;
(statearr_17341_19341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17328 === (3))){
var inst_17325 = (state_17327[(2)]);
var state_17327__$1 = state_17327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17327__$1,inst_17325);
} else {
if((state_val_17328 === (2))){
var state_17327__$1 = state_17327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17327__$1,(4),ch);
} else {
if((state_val_17328 === (11))){
var inst_17317 = (state_17327[(2)]);
var state_17327__$1 = state_17327;
var statearr_17345_19342 = state_17327__$1;
(statearr_17345_19342[(2)] = inst_17317);

(statearr_17345_19342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17328 === (9))){
var state_17327__$1 = state_17327;
var statearr_17346_19343 = state_17327__$1;
(statearr_17346_19343[(2)] = null);

(statearr_17346_19343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17328 === (5))){
var inst_17312 = cljs.core.async.close_BANG_(out);
var state_17327__$1 = state_17327;
var statearr_17355_19347 = state_17327__$1;
(statearr_17355_19347[(2)] = inst_17312);

(statearr_17355_19347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17328 === (10))){
var inst_17320 = (state_17327[(2)]);
var state_17327__$1 = (function (){var statearr_17356 = state_17327;
(statearr_17356[(8)] = inst_17320);

return statearr_17356;
})();
var statearr_17358_19348 = state_17327__$1;
(statearr_17358_19348[(2)] = null);

(statearr_17358_19348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17328 === (8))){
var inst_17309 = (state_17327[(7)]);
var state_17327__$1 = state_17327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17327__$1,(11),out,inst_17309);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13801__auto__ = null;
var cljs$core$async$state_machine__13801__auto____0 = (function (){
var statearr_17359 = [null,null,null,null,null,null,null,null,null];
(statearr_17359[(0)] = cljs$core$async$state_machine__13801__auto__);

(statearr_17359[(1)] = (1));

return statearr_17359;
});
var cljs$core$async$state_machine__13801__auto____1 = (function (state_17327){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_17327);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e17366){var ex__13804__auto__ = e17366;
var statearr_17367_19349 = state_17327;
(statearr_17367_19349[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_17327[(4)]))){
var statearr_17368_19350 = state_17327;
(statearr_17368_19350[(1)] = cljs.core.first((state_17327[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19351 = state_17327;
state_17327 = G__19351;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$state_machine__13801__auto__ = function(state_17327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13801__auto____1.call(this,state_17327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13801__auto____0;
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13801__auto____1;
return cljs$core$async$state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_17369 = f__14469__auto__();
(statearr_17369[(6)] = c__14468__auto___19328);

return statearr_17369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17371 = arguments.length;
switch (G__17371) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_17437){
var state_val_17438 = (state_17437[(1)]);
if((state_val_17438 === (7))){
var inst_17433 = (state_17437[(2)]);
var state_17437__$1 = state_17437;
var statearr_17456_19355 = state_17437__$1;
(statearr_17456_19355[(2)] = inst_17433);

(statearr_17456_19355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (20))){
var inst_17403 = (state_17437[(7)]);
var inst_17414 = (state_17437[(2)]);
var inst_17415 = cljs.core.next(inst_17403);
var inst_17387 = inst_17415;
var inst_17388 = null;
var inst_17389 = (0);
var inst_17390 = (0);
var state_17437__$1 = (function (){var statearr_17457 = state_17437;
(statearr_17457[(8)] = inst_17387);

(statearr_17457[(9)] = inst_17390);

(statearr_17457[(10)] = inst_17388);

(statearr_17457[(11)] = inst_17414);

(statearr_17457[(12)] = inst_17389);

return statearr_17457;
})();
var statearr_17458_19356 = state_17437__$1;
(statearr_17458_19356[(2)] = null);

(statearr_17458_19356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (1))){
var state_17437__$1 = state_17437;
var statearr_17460_19357 = state_17437__$1;
(statearr_17460_19357[(2)] = null);

(statearr_17460_19357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (4))){
var inst_17376 = (state_17437[(13)]);
var inst_17376__$1 = (state_17437[(2)]);
var inst_17377 = (inst_17376__$1 == null);
var state_17437__$1 = (function (){var statearr_17461 = state_17437;
(statearr_17461[(13)] = inst_17376__$1);

return statearr_17461;
})();
if(cljs.core.truth_(inst_17377)){
var statearr_17463_19359 = state_17437__$1;
(statearr_17463_19359[(1)] = (5));

} else {
var statearr_17464_19360 = state_17437__$1;
(statearr_17464_19360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (15))){
var state_17437__$1 = state_17437;
var statearr_17468_19361 = state_17437__$1;
(statearr_17468_19361[(2)] = null);

(statearr_17468_19361[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (21))){
var state_17437__$1 = state_17437;
var statearr_17470_19362 = state_17437__$1;
(statearr_17470_19362[(2)] = null);

(statearr_17470_19362[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (13))){
var inst_17387 = (state_17437[(8)]);
var inst_17390 = (state_17437[(9)]);
var inst_17388 = (state_17437[(10)]);
var inst_17389 = (state_17437[(12)]);
var inst_17399 = (state_17437[(2)]);
var inst_17400 = (inst_17390 + (1));
var tmp17465 = inst_17387;
var tmp17466 = inst_17388;
var tmp17467 = inst_17389;
var inst_17387__$1 = tmp17465;
var inst_17388__$1 = tmp17466;
var inst_17389__$1 = tmp17467;
var inst_17390__$1 = inst_17400;
var state_17437__$1 = (function (){var statearr_17471 = state_17437;
(statearr_17471[(8)] = inst_17387__$1);

(statearr_17471[(9)] = inst_17390__$1);

(statearr_17471[(10)] = inst_17388__$1);

(statearr_17471[(12)] = inst_17389__$1);

(statearr_17471[(14)] = inst_17399);

return statearr_17471;
})();
var statearr_17472_19364 = state_17437__$1;
(statearr_17472_19364[(2)] = null);

(statearr_17472_19364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (22))){
var state_17437__$1 = state_17437;
var statearr_17473_19365 = state_17437__$1;
(statearr_17473_19365[(2)] = null);

(statearr_17473_19365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (6))){
var inst_17376 = (state_17437[(13)]);
var inst_17385 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17376) : f.call(null, inst_17376));
var inst_17386 = cljs.core.seq(inst_17385);
var inst_17387 = inst_17386;
var inst_17388 = null;
var inst_17389 = (0);
var inst_17390 = (0);
var state_17437__$1 = (function (){var statearr_17475 = state_17437;
(statearr_17475[(8)] = inst_17387);

(statearr_17475[(9)] = inst_17390);

(statearr_17475[(10)] = inst_17388);

(statearr_17475[(12)] = inst_17389);

return statearr_17475;
})();
var statearr_17476_19369 = state_17437__$1;
(statearr_17476_19369[(2)] = null);

(statearr_17476_19369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (17))){
var inst_17403 = (state_17437[(7)]);
var inst_17407 = cljs.core.chunk_first(inst_17403);
var inst_17408 = cljs.core.chunk_rest(inst_17403);
var inst_17409 = cljs.core.count(inst_17407);
var inst_17387 = inst_17408;
var inst_17388 = inst_17407;
var inst_17389 = inst_17409;
var inst_17390 = (0);
var state_17437__$1 = (function (){var statearr_17478 = state_17437;
(statearr_17478[(8)] = inst_17387);

(statearr_17478[(9)] = inst_17390);

(statearr_17478[(10)] = inst_17388);

(statearr_17478[(12)] = inst_17389);

return statearr_17478;
})();
var statearr_17479_19371 = state_17437__$1;
(statearr_17479_19371[(2)] = null);

(statearr_17479_19371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (3))){
var inst_17435 = (state_17437[(2)]);
var state_17437__$1 = state_17437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17437__$1,inst_17435);
} else {
if((state_val_17438 === (12))){
var inst_17423 = (state_17437[(2)]);
var state_17437__$1 = state_17437;
var statearr_17483_19373 = state_17437__$1;
(statearr_17483_19373[(2)] = inst_17423);

(statearr_17483_19373[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (2))){
var state_17437__$1 = state_17437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17437__$1,(4),in$);
} else {
if((state_val_17438 === (23))){
var inst_17431 = (state_17437[(2)]);
var state_17437__$1 = state_17437;
var statearr_17484_19376 = state_17437__$1;
(statearr_17484_19376[(2)] = inst_17431);

(statearr_17484_19376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (19))){
var inst_17418 = (state_17437[(2)]);
var state_17437__$1 = state_17437;
var statearr_17485_19377 = state_17437__$1;
(statearr_17485_19377[(2)] = inst_17418);

(statearr_17485_19377[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (11))){
var inst_17387 = (state_17437[(8)]);
var inst_17403 = (state_17437[(7)]);
var inst_17403__$1 = cljs.core.seq(inst_17387);
var state_17437__$1 = (function (){var statearr_17486 = state_17437;
(statearr_17486[(7)] = inst_17403__$1);

return statearr_17486;
})();
if(inst_17403__$1){
var statearr_17487_19379 = state_17437__$1;
(statearr_17487_19379[(1)] = (14));

} else {
var statearr_17488_19380 = state_17437__$1;
(statearr_17488_19380[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (9))){
var inst_17425 = (state_17437[(2)]);
var inst_17426 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17437__$1 = (function (){var statearr_17491 = state_17437;
(statearr_17491[(15)] = inst_17425);

return statearr_17491;
})();
if(cljs.core.truth_(inst_17426)){
var statearr_17492_19382 = state_17437__$1;
(statearr_17492_19382[(1)] = (21));

} else {
var statearr_17493_19383 = state_17437__$1;
(statearr_17493_19383[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (5))){
var inst_17379 = cljs.core.async.close_BANG_(out);
var state_17437__$1 = state_17437;
var statearr_17495_19385 = state_17437__$1;
(statearr_17495_19385[(2)] = inst_17379);

(statearr_17495_19385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (14))){
var inst_17403 = (state_17437[(7)]);
var inst_17405 = cljs.core.chunked_seq_QMARK_(inst_17403);
var state_17437__$1 = state_17437;
if(inst_17405){
var statearr_17497_19387 = state_17437__$1;
(statearr_17497_19387[(1)] = (17));

} else {
var statearr_17499_19388 = state_17437__$1;
(statearr_17499_19388[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (16))){
var inst_17421 = (state_17437[(2)]);
var state_17437__$1 = state_17437;
var statearr_17503_19389 = state_17437__$1;
(statearr_17503_19389[(2)] = inst_17421);

(statearr_17503_19389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17438 === (10))){
var inst_17390 = (state_17437[(9)]);
var inst_17388 = (state_17437[(10)]);
var inst_17396 = cljs.core._nth(inst_17388,inst_17390);
var state_17437__$1 = state_17437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17437__$1,(13),out,inst_17396);
} else {
if((state_val_17438 === (18))){
var inst_17403 = (state_17437[(7)]);
var inst_17412 = cljs.core.first(inst_17403);
var state_17437__$1 = state_17437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17437__$1,(20),out,inst_17412);
} else {
if((state_val_17438 === (8))){
var inst_17390 = (state_17437[(9)]);
var inst_17389 = (state_17437[(12)]);
var inst_17392 = (inst_17390 < inst_17389);
var inst_17393 = inst_17392;
var state_17437__$1 = state_17437;
if(cljs.core.truth_(inst_17393)){
var statearr_17516_19390 = state_17437__$1;
(statearr_17516_19390[(1)] = (10));

} else {
var statearr_17517_19391 = state_17437__$1;
(statearr_17517_19391[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13801__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13801__auto____0 = (function (){
var statearr_17519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17519[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13801__auto__);

(statearr_17519[(1)] = (1));

return statearr_17519;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13801__auto____1 = (function (state_17437){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_17437);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e17520){var ex__13804__auto__ = e17520;
var statearr_17524_19393 = state_17437;
(statearr_17524_19393[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_17437[(4)]))){
var statearr_17525_19394 = state_17437;
(statearr_17525_19394[(1)] = cljs.core.first((state_17437[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19395 = state_17437;
state_17437 = G__19395;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13801__auto__ = function(state_17437){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13801__auto____1.call(this,state_17437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13801__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13801__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_17526 = f__14469__auto__();
(statearr_17526[(6)] = c__14468__auto__);

return statearr_17526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));

return c__14468__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17528 = arguments.length;
switch (G__17528) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17543 = arguments.length;
switch (G__17543) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17554 = arguments.length;
switch (G__17554) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14468__auto___19404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_17598){
var state_val_17599 = (state_17598[(1)]);
if((state_val_17599 === (7))){
var inst_17593 = (state_17598[(2)]);
var state_17598__$1 = state_17598;
var statearr_17601_19406 = state_17598__$1;
(statearr_17601_19406[(2)] = inst_17593);

(statearr_17601_19406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17599 === (1))){
var inst_17575 = null;
var state_17598__$1 = (function (){var statearr_17602 = state_17598;
(statearr_17602[(7)] = inst_17575);

return statearr_17602;
})();
var statearr_17609_19407 = state_17598__$1;
(statearr_17609_19407[(2)] = null);

(statearr_17609_19407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17599 === (4))){
var inst_17578 = (state_17598[(8)]);
var inst_17578__$1 = (state_17598[(2)]);
var inst_17579 = (inst_17578__$1 == null);
var inst_17580 = cljs.core.not(inst_17579);
var state_17598__$1 = (function (){var statearr_17613 = state_17598;
(statearr_17613[(8)] = inst_17578__$1);

return statearr_17613;
})();
if(inst_17580){
var statearr_17614_19408 = state_17598__$1;
(statearr_17614_19408[(1)] = (5));

} else {
var statearr_17615_19409 = state_17598__$1;
(statearr_17615_19409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17599 === (6))){
var state_17598__$1 = state_17598;
var statearr_17616_19410 = state_17598__$1;
(statearr_17616_19410[(2)] = null);

(statearr_17616_19410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17599 === (3))){
var inst_17595 = (state_17598[(2)]);
var inst_17596 = cljs.core.async.close_BANG_(out);
var state_17598__$1 = (function (){var statearr_17617 = state_17598;
(statearr_17617[(9)] = inst_17595);

return statearr_17617;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17598__$1,inst_17596);
} else {
if((state_val_17599 === (2))){
var state_17598__$1 = state_17598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17598__$1,(4),ch);
} else {
if((state_val_17599 === (11))){
var inst_17578 = (state_17598[(8)]);
var inst_17587 = (state_17598[(2)]);
var inst_17575 = inst_17578;
var state_17598__$1 = (function (){var statearr_17622 = state_17598;
(statearr_17622[(7)] = inst_17575);

(statearr_17622[(10)] = inst_17587);

return statearr_17622;
})();
var statearr_17623_19417 = state_17598__$1;
(statearr_17623_19417[(2)] = null);

(statearr_17623_19417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17599 === (9))){
var inst_17578 = (state_17598[(8)]);
var state_17598__$1 = state_17598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17598__$1,(11),out,inst_17578);
} else {
if((state_val_17599 === (5))){
var inst_17575 = (state_17598[(7)]);
var inst_17578 = (state_17598[(8)]);
var inst_17582 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17578,inst_17575);
var state_17598__$1 = state_17598;
if(inst_17582){
var statearr_17634_19418 = state_17598__$1;
(statearr_17634_19418[(1)] = (8));

} else {
var statearr_17635_19419 = state_17598__$1;
(statearr_17635_19419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17599 === (10))){
var inst_17590 = (state_17598[(2)]);
var state_17598__$1 = state_17598;
var statearr_17637_19424 = state_17598__$1;
(statearr_17637_19424[(2)] = inst_17590);

(statearr_17637_19424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17599 === (8))){
var inst_17575 = (state_17598[(7)]);
var tmp17625 = inst_17575;
var inst_17575__$1 = tmp17625;
var state_17598__$1 = (function (){var statearr_17639 = state_17598;
(statearr_17639[(7)] = inst_17575__$1);

return statearr_17639;
})();
var statearr_17640_19430 = state_17598__$1;
(statearr_17640_19430[(2)] = null);

(statearr_17640_19430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13801__auto__ = null;
var cljs$core$async$state_machine__13801__auto____0 = (function (){
var statearr_17643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17643[(0)] = cljs$core$async$state_machine__13801__auto__);

(statearr_17643[(1)] = (1));

return statearr_17643;
});
var cljs$core$async$state_machine__13801__auto____1 = (function (state_17598){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_17598);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e17645){var ex__13804__auto__ = e17645;
var statearr_17646_19437 = state_17598;
(statearr_17646_19437[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_17598[(4)]))){
var statearr_17648_19441 = state_17598;
(statearr_17648_19441[(1)] = cljs.core.first((state_17598[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19444 = state_17598;
state_17598 = G__19444;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$state_machine__13801__auto__ = function(state_17598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13801__auto____1.call(this,state_17598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13801__auto____0;
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13801__auto____1;
return cljs$core$async$state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_17653 = f__14469__auto__();
(statearr_17653[(6)] = c__14468__auto___19404);

return statearr_17653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17659 = arguments.length;
switch (G__17659) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14468__auto___19467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_17706){
var state_val_17708 = (state_17706[(1)]);
if((state_val_17708 === (7))){
var inst_17702 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17715_19470 = state_17706__$1;
(statearr_17715_19470[(2)] = inst_17702);

(statearr_17715_19470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17708 === (1))){
var inst_17668 = (new Array(n));
var inst_17669 = inst_17668;
var inst_17670 = (0);
var state_17706__$1 = (function (){var statearr_17717 = state_17706;
(statearr_17717[(7)] = inst_17670);

(statearr_17717[(8)] = inst_17669);

return statearr_17717;
})();
var statearr_17718_19474 = state_17706__$1;
(statearr_17718_19474[(2)] = null);

(statearr_17718_19474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17708 === (4))){
var inst_17673 = (state_17706[(9)]);
var inst_17673__$1 = (state_17706[(2)]);
var inst_17674 = (inst_17673__$1 == null);
var inst_17675 = cljs.core.not(inst_17674);
var state_17706__$1 = (function (){var statearr_17719 = state_17706;
(statearr_17719[(9)] = inst_17673__$1);

return statearr_17719;
})();
if(inst_17675){
var statearr_17720_19476 = state_17706__$1;
(statearr_17720_19476[(1)] = (5));

} else {
var statearr_17721_19478 = state_17706__$1;
(statearr_17721_19478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17708 === (15))){
var inst_17696 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17722_19480 = state_17706__$1;
(statearr_17722_19480[(2)] = inst_17696);

(statearr_17722_19480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17708 === (13))){
var state_17706__$1 = state_17706;
var statearr_17727_19481 = state_17706__$1;
(statearr_17727_19481[(2)] = null);

(statearr_17727_19481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17708 === (6))){
var inst_17670 = (state_17706[(7)]);
var inst_17692 = (inst_17670 > (0));
var state_17706__$1 = state_17706;
if(cljs.core.truth_(inst_17692)){
var statearr_17729_19483 = state_17706__$1;
(statearr_17729_19483[(1)] = (12));

} else {
var statearr_17730_19484 = state_17706__$1;
(statearr_17730_19484[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17708 === (3))){
var inst_17704 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17706__$1,inst_17704);
} else {
if((state_val_17708 === (12))){
var inst_17669 = (state_17706[(8)]);
var inst_17694 = cljs.core.vec(inst_17669);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17706__$1,(15),out,inst_17694);
} else {
if((state_val_17708 === (2))){
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17706__$1,(4),ch);
} else {
if((state_val_17708 === (11))){
var inst_17685 = (state_17706[(2)]);
var inst_17687 = (new Array(n));
var inst_17669 = inst_17687;
var inst_17670 = (0);
var state_17706__$1 = (function (){var statearr_17739 = state_17706;
(statearr_17739[(7)] = inst_17670);

(statearr_17739[(10)] = inst_17685);

(statearr_17739[(8)] = inst_17669);

return statearr_17739;
})();
var statearr_17741_19488 = state_17706__$1;
(statearr_17741_19488[(2)] = null);

(statearr_17741_19488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17708 === (9))){
var inst_17669 = (state_17706[(8)]);
var inst_17683 = cljs.core.vec(inst_17669);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17706__$1,(11),out,inst_17683);
} else {
if((state_val_17708 === (5))){
var inst_17678 = (state_17706[(11)]);
var inst_17670 = (state_17706[(7)]);
var inst_17673 = (state_17706[(9)]);
var inst_17669 = (state_17706[(8)]);
var inst_17677 = (inst_17669[inst_17670] = inst_17673);
var inst_17678__$1 = (inst_17670 + (1));
var inst_17679 = (inst_17678__$1 < n);
var state_17706__$1 = (function (){var statearr_17742 = state_17706;
(statearr_17742[(11)] = inst_17678__$1);

(statearr_17742[(12)] = inst_17677);

return statearr_17742;
})();
if(cljs.core.truth_(inst_17679)){
var statearr_17743_19489 = state_17706__$1;
(statearr_17743_19489[(1)] = (8));

} else {
var statearr_17744_19490 = state_17706__$1;
(statearr_17744_19490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17708 === (14))){
var inst_17699 = (state_17706[(2)]);
var inst_17700 = cljs.core.async.close_BANG_(out);
var state_17706__$1 = (function (){var statearr_17748 = state_17706;
(statearr_17748[(13)] = inst_17699);

return statearr_17748;
})();
var statearr_17749_19491 = state_17706__$1;
(statearr_17749_19491[(2)] = inst_17700);

(statearr_17749_19491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17708 === (10))){
var inst_17690 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17750_19492 = state_17706__$1;
(statearr_17750_19492[(2)] = inst_17690);

(statearr_17750_19492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17708 === (8))){
var inst_17678 = (state_17706[(11)]);
var inst_17669 = (state_17706[(8)]);
var tmp17745 = inst_17669;
var inst_17669__$1 = tmp17745;
var inst_17670 = inst_17678;
var state_17706__$1 = (function (){var statearr_17751 = state_17706;
(statearr_17751[(7)] = inst_17670);

(statearr_17751[(8)] = inst_17669__$1);

return statearr_17751;
})();
var statearr_17754_19498 = state_17706__$1;
(statearr_17754_19498[(2)] = null);

(statearr_17754_19498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13801__auto__ = null;
var cljs$core$async$state_machine__13801__auto____0 = (function (){
var statearr_17755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17755[(0)] = cljs$core$async$state_machine__13801__auto__);

(statearr_17755[(1)] = (1));

return statearr_17755;
});
var cljs$core$async$state_machine__13801__auto____1 = (function (state_17706){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_17706);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e17756){var ex__13804__auto__ = e17756;
var statearr_17757_19499 = state_17706;
(statearr_17757_19499[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_17706[(4)]))){
var statearr_17758_19500 = state_17706;
(statearr_17758_19500[(1)] = cljs.core.first((state_17706[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19501 = state_17706;
state_17706 = G__19501;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$state_machine__13801__auto__ = function(state_17706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13801__auto____1.call(this,state_17706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13801__auto____0;
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13801__auto____1;
return cljs$core$async$state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_17760 = f__14469__auto__();
(statearr_17760[(6)] = c__14468__auto___19467);

return statearr_17760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17775 = arguments.length;
switch (G__17775) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14468__auto___19511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14469__auto__ = (function (){var switch__13800__auto__ = (function (state_17833){
var state_val_17834 = (state_17833[(1)]);
if((state_val_17834 === (7))){
var inst_17829 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_17840_19516 = state_17833__$1;
(statearr_17840_19516[(2)] = inst_17829);

(statearr_17840_19516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (1))){
var inst_17781 = [];
var inst_17782 = inst_17781;
var inst_17783 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17833__$1 = (function (){var statearr_17841 = state_17833;
(statearr_17841[(7)] = inst_17783);

(statearr_17841[(8)] = inst_17782);

return statearr_17841;
})();
var statearr_17842_19521 = state_17833__$1;
(statearr_17842_19521[(2)] = null);

(statearr_17842_19521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (4))){
var inst_17786 = (state_17833[(9)]);
var inst_17786__$1 = (state_17833[(2)]);
var inst_17787 = (inst_17786__$1 == null);
var inst_17788 = cljs.core.not(inst_17787);
var state_17833__$1 = (function (){var statearr_17849 = state_17833;
(statearr_17849[(9)] = inst_17786__$1);

return statearr_17849;
})();
if(inst_17788){
var statearr_17850_19526 = state_17833__$1;
(statearr_17850_19526[(1)] = (5));

} else {
var statearr_17851_19527 = state_17833__$1;
(statearr_17851_19527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (15))){
var inst_17782 = (state_17833[(8)]);
var inst_17821 = cljs.core.vec(inst_17782);
var state_17833__$1 = state_17833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17833__$1,(18),out,inst_17821);
} else {
if((state_val_17834 === (13))){
var inst_17816 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_17858_19533 = state_17833__$1;
(statearr_17858_19533[(2)] = inst_17816);

(statearr_17858_19533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (6))){
var inst_17782 = (state_17833[(8)]);
var inst_17818 = inst_17782.length;
var inst_17819 = (inst_17818 > (0));
var state_17833__$1 = state_17833;
if(cljs.core.truth_(inst_17819)){
var statearr_17859_19539 = state_17833__$1;
(statearr_17859_19539[(1)] = (15));

} else {
var statearr_17861_19541 = state_17833__$1;
(statearr_17861_19541[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (17))){
var inst_17826 = (state_17833[(2)]);
var inst_17827 = cljs.core.async.close_BANG_(out);
var state_17833__$1 = (function (){var statearr_17865 = state_17833;
(statearr_17865[(10)] = inst_17826);

return statearr_17865;
})();
var statearr_17869_19549 = state_17833__$1;
(statearr_17869_19549[(2)] = inst_17827);

(statearr_17869_19549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (3))){
var inst_17831 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17833__$1,inst_17831);
} else {
if((state_val_17834 === (12))){
var inst_17782 = (state_17833[(8)]);
var inst_17806 = cljs.core.vec(inst_17782);
var state_17833__$1 = state_17833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17833__$1,(14),out,inst_17806);
} else {
if((state_val_17834 === (2))){
var state_17833__$1 = state_17833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17833__$1,(4),ch);
} else {
if((state_val_17834 === (11))){
var inst_17794 = (state_17833[(11)]);
var inst_17782 = (state_17833[(8)]);
var inst_17786 = (state_17833[(9)]);
var inst_17803 = inst_17782.push(inst_17786);
var tmp17870 = inst_17782;
var inst_17782__$1 = tmp17870;
var inst_17783 = inst_17794;
var state_17833__$1 = (function (){var statearr_17883 = state_17833;
(statearr_17883[(12)] = inst_17803);

(statearr_17883[(7)] = inst_17783);

(statearr_17883[(8)] = inst_17782__$1);

return statearr_17883;
})();
var statearr_17891_19563 = state_17833__$1;
(statearr_17891_19563[(2)] = null);

(statearr_17891_19563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (9))){
var inst_17783 = (state_17833[(7)]);
var inst_17799 = cljs.core.keyword_identical_QMARK_(inst_17783,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17833__$1 = state_17833;
var statearr_17893_19569 = state_17833__$1;
(statearr_17893_19569[(2)] = inst_17799);

(statearr_17893_19569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (5))){
var inst_17794 = (state_17833[(11)]);
var inst_17783 = (state_17833[(7)]);
var inst_17786 = (state_17833[(9)]);
var inst_17796 = (state_17833[(13)]);
var inst_17794__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17786) : f.call(null, inst_17786));
var inst_17796__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17794__$1,inst_17783);
var state_17833__$1 = (function (){var statearr_17901 = state_17833;
(statearr_17901[(11)] = inst_17794__$1);

(statearr_17901[(13)] = inst_17796__$1);

return statearr_17901;
})();
if(inst_17796__$1){
var statearr_17903_19572 = state_17833__$1;
(statearr_17903_19572[(1)] = (8));

} else {
var statearr_17904_19574 = state_17833__$1;
(statearr_17904_19574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (14))){
var inst_17794 = (state_17833[(11)]);
var inst_17786 = (state_17833[(9)]);
var inst_17808 = (state_17833[(2)]);
var inst_17812 = [];
var inst_17813 = inst_17812.push(inst_17786);
var inst_17782 = inst_17812;
var inst_17783 = inst_17794;
var state_17833__$1 = (function (){var statearr_17908 = state_17833;
(statearr_17908[(14)] = inst_17808);

(statearr_17908[(7)] = inst_17783);

(statearr_17908[(8)] = inst_17782);

(statearr_17908[(15)] = inst_17813);

return statearr_17908;
})();
var statearr_17910_19576 = state_17833__$1;
(statearr_17910_19576[(2)] = null);

(statearr_17910_19576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (16))){
var state_17833__$1 = state_17833;
var statearr_17913_19579 = state_17833__$1;
(statearr_17913_19579[(2)] = null);

(statearr_17913_19579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (10))){
var inst_17801 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
if(cljs.core.truth_(inst_17801)){
var statearr_17915_19585 = state_17833__$1;
(statearr_17915_19585[(1)] = (11));

} else {
var statearr_17916_19586 = state_17833__$1;
(statearr_17916_19586[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (18))){
var inst_17823 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_17917_19587 = state_17833__$1;
(statearr_17917_19587[(2)] = inst_17823);

(statearr_17917_19587[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (8))){
var inst_17796 = (state_17833[(13)]);
var state_17833__$1 = state_17833;
var statearr_17921_19588 = state_17833__$1;
(statearr_17921_19588[(2)] = inst_17796);

(statearr_17921_19588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13801__auto__ = null;
var cljs$core$async$state_machine__13801__auto____0 = (function (){
var statearr_17931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17931[(0)] = cljs$core$async$state_machine__13801__auto__);

(statearr_17931[(1)] = (1));

return statearr_17931;
});
var cljs$core$async$state_machine__13801__auto____1 = (function (state_17833){
while(true){
var ret_value__13802__auto__ = (function (){try{while(true){
var result__13803__auto__ = switch__13800__auto__(state_17833);
if(cljs.core.keyword_identical_QMARK_(result__13803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13803__auto__;
}
break;
}
}catch (e17932){var ex__13804__auto__ = e17932;
var statearr_17933_19591 = state_17833;
(statearr_17933_19591[(2)] = ex__13804__auto__);


if(cljs.core.seq((state_17833[(4)]))){
var statearr_17939_19593 = state_17833;
(statearr_17939_19593[(1)] = cljs.core.first((state_17833[(4)])));

} else {
throw ex__13804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19596 = state_17833;
state_17833 = G__19596;
continue;
} else {
return ret_value__13802__auto__;
}
break;
}
});
cljs$core$async$state_machine__13801__auto__ = function(state_17833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13801__auto____1.call(this,state_17833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13801__auto____0;
cljs$core$async$state_machine__13801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13801__auto____1;
return cljs$core$async$state_machine__13801__auto__;
})()
})();
var state__14470__auto__ = (function (){var statearr_17945 = f__14469__auto__();
(statearr_17945[(6)] = c__14468__auto___19511);

return statearr_17945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14470__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
