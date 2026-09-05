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
cljs.core.async.t_cljs$core$async14715 = (function (f,blockable,meta14716){
this.f = f;
this.blockable = blockable;
this.meta14716 = meta14716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14717,meta14716__$1){
var self__ = this;
var _14717__$1 = this;
return (new cljs.core.async.t_cljs$core$async14715(self__.f,self__.blockable,meta14716__$1));
}));

(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14717){
var self__ = this;
var _14717__$1 = this;
return self__.meta14716;
}));

(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14716","meta14716",-707433743,null)], null);
}));

(cljs.core.async.t_cljs$core$async14715.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14715");

(cljs.core.async.t_cljs$core$async14715.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async14715");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14715.
 */
cljs.core.async.__GT_t_cljs$core$async14715 = (function cljs$core$async$__GT_t_cljs$core$async14715(f,blockable,meta14716){
return (new cljs.core.async.t_cljs$core$async14715(f,blockable,meta14716));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14710 = arguments.length;
switch (G__14710) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14715(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14765 = arguments.length;
switch (G__14765) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
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
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14777 = arguments.length;
switch (G__14777) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__14785 = arguments.length;
switch (G__14785) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18235 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18235) : fn1.call(null,val_18235));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18235) : fn1.call(null,val_18235));
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
var G__14797 = arguments.length;
switch (G__14797) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
var n__5762__auto___18242 = n;
var x_18243 = (0);
while(true){
if((x_18243 < n__5762__auto___18242)){
(a[x_18243] = x_18243);

var G__18244 = (x_18243 + (1));
x_18243 = G__18244;
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
cljs.core.async.t_cljs$core$async14833 = (function (flag,meta14834){
this.flag = flag;
this.meta14834 = meta14834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14835,meta14834__$1){
var self__ = this;
var _14835__$1 = this;
return (new cljs.core.async.t_cljs$core$async14833(self__.flag,meta14834__$1));
}));

(cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14835){
var self__ = this;
var _14835__$1 = this;
return self__.meta14834;
}));

(cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14834","meta14834",619545371,null)], null);
}));

(cljs.core.async.t_cljs$core$async14833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14833");

(cljs.core.async.t_cljs$core$async14833.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async14833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14833.
 */
cljs.core.async.__GT_t_cljs$core$async14833 = (function cljs$core$async$__GT_t_cljs$core$async14833(flag,meta14834){
return (new cljs.core.async.t_cljs$core$async14833(flag,meta14834));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14833(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14864 = (function (flag,cb,meta14865){
this.flag = flag;
this.cb = cb;
this.meta14865 = meta14865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14866,meta14865__$1){
var self__ = this;
var _14866__$1 = this;
return (new cljs.core.async.t_cljs$core$async14864(self__.flag,self__.cb,meta14865__$1));
}));

(cljs.core.async.t_cljs$core$async14864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14866){
var self__ = this;
var _14866__$1 = this;
return self__.meta14865;
}));

(cljs.core.async.t_cljs$core$async14864.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14864.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14864.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14864.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14865","meta14865",-197058803,null)], null);
}));

(cljs.core.async.t_cljs$core$async14864.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14864");

(cljs.core.async.t_cljs$core$async14864.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async14864");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14864.
 */
cljs.core.async.__GT_t_cljs$core$async14864 = (function cljs$core$async$__GT_t_cljs$core$async14864(flag,cb,meta14865){
return (new cljs.core.async.t_cljs$core$async14864(flag,cb,meta14865));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14864(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_18245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_18245)){
if((!(((port_18245.cljs$core$IFn$_invoke$arity$1 ? port_18245.cljs$core$IFn$_invoke$arity$1((1)) : port_18245.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__18247 = (i + (1));
i = G__18247;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14875_SHARP_){
var G__14880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14875_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14880) : fret.call(null,G__14880));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14876_SHARP_){
var G__14881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14876_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14881) : fret.call(null,G__14881));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18254 = (i + (1));
i = G__18254;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
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
var args__5903__auto__ = [];
var len__5897__auto___18257 = arguments.length;
var i__5898__auto___18258 = (0);
while(true){
if((i__5898__auto___18258 < len__5897__auto___18257)){
args__5903__auto__.push((arguments[i__5898__auto___18258]));

var G__18259 = (i__5898__auto___18258 + (1));
i__5898__auto___18258 = G__18259;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14891){
var map__14893 = p__14891;
var map__14893__$1 = cljs.core.__destructure_map(map__14893);
var opts = map__14893__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14889){
var G__14890 = cljs.core.first(seq14889);
var seq14889__$1 = cljs.core.next(seq14889);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14890,seq14889__$1);
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
var G__14908 = arguments.length;
switch (G__14908) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14562__auto___18269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_15031){
var state_val_15032 = (state_15031[(1)]);
if((state_val_15032 === (7))){
var inst_15016 = (state_15031[(2)]);
var state_15031__$1 = state_15031;
var statearr_15037_18270 = state_15031__$1;
(statearr_15037_18270[(2)] = inst_15016);

(statearr_15037_18270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15032 === (1))){
var state_15031__$1 = state_15031;
var statearr_15038_18271 = state_15031__$1;
(statearr_15038_18271[(2)] = null);

(statearr_15038_18271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15032 === (4))){
var inst_14995 = (state_15031[(7)]);
var inst_14995__$1 = (state_15031[(2)]);
var inst_14996 = (inst_14995__$1 == null);
var state_15031__$1 = (function (){var statearr_15045 = state_15031;
(statearr_15045[(7)] = inst_14995__$1);

return statearr_15045;
})();
if(cljs.core.truth_(inst_14996)){
var statearr_15047_18272 = state_15031__$1;
(statearr_15047_18272[(1)] = (5));

} else {
var statearr_15048_18273 = state_15031__$1;
(statearr_15048_18273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15032 === (13))){
var state_15031__$1 = state_15031;
var statearr_15053_18280 = state_15031__$1;
(statearr_15053_18280[(2)] = null);

(statearr_15053_18280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15032 === (6))){
var inst_14995 = (state_15031[(7)]);
var state_15031__$1 = state_15031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15031__$1,(11),to,inst_14995);
} else {
if((state_val_15032 === (3))){
var inst_15023 = (state_15031[(2)]);
var state_15031__$1 = state_15031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15031__$1,inst_15023);
} else {
if((state_val_15032 === (12))){
var state_15031__$1 = state_15031;
var statearr_15070_18284 = state_15031__$1;
(statearr_15070_18284[(2)] = null);

(statearr_15070_18284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15032 === (2))){
var state_15031__$1 = state_15031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15031__$1,(4),from);
} else {
if((state_val_15032 === (11))){
var inst_15005 = (state_15031[(2)]);
var state_15031__$1 = state_15031;
if(cljs.core.truth_(inst_15005)){
var statearr_15078_18291 = state_15031__$1;
(statearr_15078_18291[(1)] = (12));

} else {
var statearr_15080_18292 = state_15031__$1;
(statearr_15080_18292[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15032 === (9))){
var state_15031__$1 = state_15031;
var statearr_15085_18293 = state_15031__$1;
(statearr_15085_18293[(2)] = null);

(statearr_15085_18293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15032 === (5))){
var state_15031__$1 = state_15031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15086_18294 = state_15031__$1;
(statearr_15086_18294[(1)] = (8));

} else {
var statearr_15091_18295 = state_15031__$1;
(statearr_15091_18295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15032 === (14))){
var inst_15014 = (state_15031[(2)]);
var state_15031__$1 = state_15031;
var statearr_15096_18296 = state_15031__$1;
(statearr_15096_18296[(2)] = inst_15014);

(statearr_15096_18296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15032 === (10))){
var inst_15002 = (state_15031[(2)]);
var state_15031__$1 = state_15031;
var statearr_15102_18297 = state_15031__$1;
(statearr_15102_18297[(2)] = inst_15002);

(statearr_15102_18297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15032 === (8))){
var inst_14999 = cljs.core.async.close_BANG_(to);
var state_15031__$1 = state_15031;
var statearr_15109_18298 = state_15031__$1;
(statearr_15109_18298[(2)] = inst_14999);

(statearr_15109_18298[(1)] = (10));


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
var cljs$core$async$state_machine__13411__auto__ = null;
var cljs$core$async$state_machine__13411__auto____0 = (function (){
var statearr_15117 = [null,null,null,null,null,null,null,null];
(statearr_15117[(0)] = cljs$core$async$state_machine__13411__auto__);

(statearr_15117[(1)] = (1));

return statearr_15117;
});
var cljs$core$async$state_machine__13411__auto____1 = (function (state_15031){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_15031);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e15118){var ex__13414__auto__ = e15118;
var statearr_15119_18299 = state_15031;
(statearr_15119_18299[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_15031[(4)]))){
var statearr_15120_18300 = state_15031;
(statearr_15120_18300[(1)] = cljs.core.first((state_15031[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18314 = state_15031;
state_15031 = G__18314;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$state_machine__13411__auto__ = function(state_15031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13411__auto____1.call(this,state_15031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13411__auto____0;
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13411__auto____1;
return cljs$core$async$state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_15123 = f__14564__auto__();
(statearr_15123[(6)] = c__14562__auto___18269);

return statearr_15123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
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
var process__$1 = (function (p__15147){
var vec__15148 = p__15147;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15148,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15148,(1),null);
var job = vec__15148;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14562__auto___18315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_15159){
var state_val_15160 = (state_15159[(1)]);
if((state_val_15160 === (1))){
var state_15159__$1 = state_15159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15159__$1,(2),res,v);
} else {
if((state_val_15160 === (2))){
var inst_15156 = (state_15159[(2)]);
var inst_15157 = cljs.core.async.close_BANG_(res);
var state_15159__$1 = (function (){var statearr_15165 = state_15159;
(statearr_15165[(7)] = inst_15156);

return statearr_15165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15159__$1,inst_15157);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0 = (function (){
var statearr_15166 = [null,null,null,null,null,null,null,null];
(statearr_15166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__);

(statearr_15166[(1)] = (1));

return statearr_15166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1 = (function (state_15159){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_15159);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e15167){var ex__13414__auto__ = e15167;
var statearr_15171_18319 = state_15159;
(statearr_15171_18319[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_15159[(4)]))){
var statearr_15174_18320 = state_15159;
(statearr_15174_18320[(1)] = cljs.core.first((state_15159[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18321 = state_15159;
state_15159 = G__18321;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__ = function(state_15159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1.call(this,state_15159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_15178 = f__14564__auto__();
(statearr_15178[(6)] = c__14562__auto___18315);

return statearr_15178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15180){
var vec__15181 = p__15180;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15181,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15181,(1),null);
var job = vec__15181;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5762__auto___18323 = n;
var __18324 = (0);
while(true){
if((__18324 < n__5762__auto___18323)){
var G__15184_18325 = type;
var G__15184_18326__$1 = (((G__15184_18325 instanceof cljs.core.Keyword))?G__15184_18325.fqn:null);
switch (G__15184_18326__$1) {
case "compute":
var c__14562__auto___18328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18324,c__14562__auto___18328,G__15184_18325,G__15184_18326__$1,n__5762__auto___18323,jobs,results,process__$1,async){
return (function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = ((function (__18324,c__14562__auto___18328,G__15184_18325,G__15184_18326__$1,n__5762__auto___18323,jobs,results,process__$1,async){
return (function (state_15206){
var state_val_15208 = (state_15206[(1)]);
if((state_val_15208 === (1))){
var state_15206__$1 = state_15206;
var statearr_15212_18329 = state_15206__$1;
(statearr_15212_18329[(2)] = null);

(statearr_15212_18329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15208 === (2))){
var state_15206__$1 = state_15206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15206__$1,(4),jobs);
} else {
if((state_val_15208 === (3))){
var inst_15204 = (state_15206[(2)]);
var state_15206__$1 = state_15206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15206__$1,inst_15204);
} else {
if((state_val_15208 === (4))){
var inst_15194 = (state_15206[(2)]);
var inst_15196 = process__$1(inst_15194);
var state_15206__$1 = state_15206;
if(cljs.core.truth_(inst_15196)){
var statearr_15214_18330 = state_15206__$1;
(statearr_15214_18330[(1)] = (5));

} else {
var statearr_15215_18331 = state_15206__$1;
(statearr_15215_18331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15208 === (5))){
var state_15206__$1 = state_15206;
var statearr_15219_18332 = state_15206__$1;
(statearr_15219_18332[(2)] = null);

(statearr_15219_18332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15208 === (6))){
var state_15206__$1 = state_15206;
var statearr_15220_18333 = state_15206__$1;
(statearr_15220_18333[(2)] = null);

(statearr_15220_18333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15208 === (7))){
var inst_15202 = (state_15206[(2)]);
var state_15206__$1 = state_15206;
var statearr_15223_18334 = state_15206__$1;
(statearr_15223_18334[(2)] = inst_15202);

(statearr_15223_18334[(1)] = (3));


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
});})(__18324,c__14562__auto___18328,G__15184_18325,G__15184_18326__$1,n__5762__auto___18323,jobs,results,process__$1,async))
;
return ((function (__18324,switch__13410__auto__,c__14562__auto___18328,G__15184_18325,G__15184_18326__$1,n__5762__auto___18323,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0 = (function (){
var statearr_15229 = [null,null,null,null,null,null,null];
(statearr_15229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__);

(statearr_15229[(1)] = (1));

return statearr_15229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1 = (function (state_15206){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_15206);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e15230){var ex__13414__auto__ = e15230;
var statearr_15231_18335 = state_15206;
(statearr_15231_18335[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_15206[(4)]))){
var statearr_15232_18336 = state_15206;
(statearr_15232_18336[(1)] = cljs.core.first((state_15206[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18337 = state_15206;
state_15206 = G__18337;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__ = function(state_15206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1.call(this,state_15206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__;
})()
;})(__18324,switch__13410__auto__,c__14562__auto___18328,G__15184_18325,G__15184_18326__$1,n__5762__auto___18323,jobs,results,process__$1,async))
})();
var state__14565__auto__ = (function (){var statearr_15235 = f__14564__auto__();
(statearr_15235[(6)] = c__14562__auto___18328);

return statearr_15235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
});})(__18324,c__14562__auto___18328,G__15184_18325,G__15184_18326__$1,n__5762__auto___18323,jobs,results,process__$1,async))
);


break;
case "async":
var c__14562__auto___18341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18324,c__14562__auto___18341,G__15184_18325,G__15184_18326__$1,n__5762__auto___18323,jobs,results,process__$1,async){
return (function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = ((function (__18324,c__14562__auto___18341,G__15184_18325,G__15184_18326__$1,n__5762__auto___18323,jobs,results,process__$1,async){
return (function (state_15248){
var state_val_15249 = (state_15248[(1)]);
if((state_val_15249 === (1))){
var state_15248__$1 = state_15248;
var statearr_15253_18346 = state_15248__$1;
(statearr_15253_18346[(2)] = null);

(statearr_15253_18346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15249 === (2))){
var state_15248__$1 = state_15248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15248__$1,(4),jobs);
} else {
if((state_val_15249 === (3))){
var inst_15246 = (state_15248[(2)]);
var state_15248__$1 = state_15248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15248__$1,inst_15246);
} else {
if((state_val_15249 === (4))){
var inst_15238 = (state_15248[(2)]);
var inst_15239 = async(inst_15238);
var state_15248__$1 = state_15248;
if(cljs.core.truth_(inst_15239)){
var statearr_15256_18347 = state_15248__$1;
(statearr_15256_18347[(1)] = (5));

} else {
var statearr_15258_18348 = state_15248__$1;
(statearr_15258_18348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15249 === (5))){
var state_15248__$1 = state_15248;
var statearr_15259_18349 = state_15248__$1;
(statearr_15259_18349[(2)] = null);

(statearr_15259_18349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15249 === (6))){
var state_15248__$1 = state_15248;
var statearr_15260_18350 = state_15248__$1;
(statearr_15260_18350[(2)] = null);

(statearr_15260_18350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15249 === (7))){
var inst_15244 = (state_15248[(2)]);
var state_15248__$1 = state_15248;
var statearr_15262_18352 = state_15248__$1;
(statearr_15262_18352[(2)] = inst_15244);

(statearr_15262_18352[(1)] = (3));


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
});})(__18324,c__14562__auto___18341,G__15184_18325,G__15184_18326__$1,n__5762__auto___18323,jobs,results,process__$1,async))
;
return ((function (__18324,switch__13410__auto__,c__14562__auto___18341,G__15184_18325,G__15184_18326__$1,n__5762__auto___18323,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0 = (function (){
var statearr_15263 = [null,null,null,null,null,null,null];
(statearr_15263[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__);

(statearr_15263[(1)] = (1));

return statearr_15263;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1 = (function (state_15248){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_15248);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e15264){var ex__13414__auto__ = e15264;
var statearr_15265_18362 = state_15248;
(statearr_15265_18362[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_15248[(4)]))){
var statearr_15266_18367 = state_15248;
(statearr_15266_18367[(1)] = cljs.core.first((state_15248[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18368 = state_15248;
state_15248 = G__18368;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__ = function(state_15248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1.call(this,state_15248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__;
})()
;})(__18324,switch__13410__auto__,c__14562__auto___18341,G__15184_18325,G__15184_18326__$1,n__5762__auto___18323,jobs,results,process__$1,async))
})();
var state__14565__auto__ = (function (){var statearr_15267 = f__14564__auto__();
(statearr_15267[(6)] = c__14562__auto___18341);

return statearr_15267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
});})(__18324,c__14562__auto___18341,G__15184_18325,G__15184_18326__$1,n__5762__auto___18323,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15184_18326__$1))));

}

var G__18369 = (__18324 + (1));
__18324 = G__18369;
continue;
} else {
}
break;
}

var c__14562__auto___18371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_15297){
var state_val_15298 = (state_15297[(1)]);
if((state_val_15298 === (7))){
var inst_15293 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
var statearr_15299_18375 = state_15297__$1;
(statearr_15299_18375[(2)] = inst_15293);

(statearr_15299_18375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (1))){
var state_15297__$1 = state_15297;
var statearr_15301_18382 = state_15297__$1;
(statearr_15301_18382[(2)] = null);

(statearr_15301_18382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (4))){
var inst_15271 = (state_15297[(7)]);
var inst_15271__$1 = (state_15297[(2)]);
var inst_15272 = (inst_15271__$1 == null);
var state_15297__$1 = (function (){var statearr_15303 = state_15297;
(statearr_15303[(7)] = inst_15271__$1);

return statearr_15303;
})();
if(cljs.core.truth_(inst_15272)){
var statearr_15306_18385 = state_15297__$1;
(statearr_15306_18385[(1)] = (5));

} else {
var statearr_15309_18386 = state_15297__$1;
(statearr_15309_18386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (6))){
var inst_15271 = (state_15297[(7)]);
var inst_15277 = (state_15297[(8)]);
var inst_15277__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15282 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15285 = [inst_15271,inst_15277__$1];
var inst_15286 = (new cljs.core.PersistentVector(null,2,(5),inst_15282,inst_15285,null));
var state_15297__$1 = (function (){var statearr_15313 = state_15297;
(statearr_15313[(8)] = inst_15277__$1);

return statearr_15313;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15297__$1,(8),jobs,inst_15286);
} else {
if((state_val_15298 === (3))){
var inst_15295 = (state_15297[(2)]);
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15297__$1,inst_15295);
} else {
if((state_val_15298 === (2))){
var state_15297__$1 = state_15297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15297__$1,(4),from);
} else {
if((state_val_15298 === (9))){
var inst_15290 = (state_15297[(2)]);
var state_15297__$1 = (function (){var statearr_15319 = state_15297;
(statearr_15319[(9)] = inst_15290);

return statearr_15319;
})();
var statearr_15321_18387 = state_15297__$1;
(statearr_15321_18387[(2)] = null);

(statearr_15321_18387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (5))){
var inst_15274 = cljs.core.async.close_BANG_(jobs);
var state_15297__$1 = state_15297;
var statearr_15326_18389 = state_15297__$1;
(statearr_15326_18389[(2)] = inst_15274);

(statearr_15326_18389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15298 === (8))){
var inst_15277 = (state_15297[(8)]);
var inst_15288 = (state_15297[(2)]);
var state_15297__$1 = (function (){var statearr_15327 = state_15297;
(statearr_15327[(10)] = inst_15288);

return statearr_15327;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15297__$1,(9),results,inst_15277);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0 = (function (){
var statearr_15334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__);

(statearr_15334[(1)] = (1));

return statearr_15334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1 = (function (state_15297){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_15297);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e15337){var ex__13414__auto__ = e15337;
var statearr_15338_18390 = state_15297;
(statearr_15338_18390[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_15297[(4)]))){
var statearr_15339_18391 = state_15297;
(statearr_15339_18391[(1)] = cljs.core.first((state_15297[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18392 = state_15297;
state_15297 = G__18392;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__ = function(state_15297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1.call(this,state_15297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_15340 = f__14564__auto__();
(statearr_15340[(6)] = c__14562__auto___18371);

return statearr_15340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
}));


var c__14562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_15401){
var state_val_15402 = (state_15401[(1)]);
if((state_val_15402 === (7))){
var inst_15393 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
var statearr_15411_18395 = state_15401__$1;
(statearr_15411_18395[(2)] = inst_15393);

(statearr_15411_18395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (20))){
var state_15401__$1 = state_15401;
var statearr_15413_18396 = state_15401__$1;
(statearr_15413_18396[(2)] = null);

(statearr_15413_18396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (1))){
var state_15401__$1 = state_15401;
var statearr_15419_18397 = state_15401__$1;
(statearr_15419_18397[(2)] = null);

(statearr_15419_18397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (4))){
var inst_15348 = (state_15401[(7)]);
var inst_15348__$1 = (state_15401[(2)]);
var inst_15349 = (inst_15348__$1 == null);
var state_15401__$1 = (function (){var statearr_15423 = state_15401;
(statearr_15423[(7)] = inst_15348__$1);

return statearr_15423;
})();
if(cljs.core.truth_(inst_15349)){
var statearr_15424_18399 = state_15401__$1;
(statearr_15424_18399[(1)] = (5));

} else {
var statearr_15426_18401 = state_15401__$1;
(statearr_15426_18401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (15))){
var inst_15366 = (state_15401[(8)]);
var state_15401__$1 = state_15401;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15401__$1,(18),to,inst_15366);
} else {
if((state_val_15402 === (21))){
var inst_15388 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
var statearr_15429_18405 = state_15401__$1;
(statearr_15429_18405[(2)] = inst_15388);

(statearr_15429_18405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (13))){
var inst_15390 = (state_15401[(2)]);
var state_15401__$1 = (function (){var statearr_15431 = state_15401;
(statearr_15431[(9)] = inst_15390);

return statearr_15431;
})();
var statearr_15436_18409 = state_15401__$1;
(statearr_15436_18409[(2)] = null);

(statearr_15436_18409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (6))){
var inst_15348 = (state_15401[(7)]);
var state_15401__$1 = state_15401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15401__$1,(11),inst_15348);
} else {
if((state_val_15402 === (17))){
var inst_15382 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
if(cljs.core.truth_(inst_15382)){
var statearr_15447_18411 = state_15401__$1;
(statearr_15447_18411[(1)] = (19));

} else {
var statearr_15450_18412 = state_15401__$1;
(statearr_15450_18412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (3))){
var inst_15395 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15401__$1,inst_15395);
} else {
if((state_val_15402 === (12))){
var inst_15358 = (state_15401[(10)]);
var state_15401__$1 = state_15401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15401__$1,(14),inst_15358);
} else {
if((state_val_15402 === (2))){
var state_15401__$1 = state_15401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15401__$1,(4),results);
} else {
if((state_val_15402 === (19))){
var state_15401__$1 = state_15401;
var statearr_15466_18417 = state_15401__$1;
(statearr_15466_18417[(2)] = null);

(statearr_15466_18417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (11))){
var inst_15358 = (state_15401[(2)]);
var state_15401__$1 = (function (){var statearr_15469 = state_15401;
(statearr_15469[(10)] = inst_15358);

return statearr_15469;
})();
var statearr_15470_18418 = state_15401__$1;
(statearr_15470_18418[(2)] = null);

(statearr_15470_18418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (9))){
var state_15401__$1 = state_15401;
var statearr_15477_18423 = state_15401__$1;
(statearr_15477_18423[(2)] = null);

(statearr_15477_18423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (5))){
var state_15401__$1 = state_15401;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15481_18428 = state_15401__$1;
(statearr_15481_18428[(1)] = (8));

} else {
var statearr_15487_18429 = state_15401__$1;
(statearr_15487_18429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (14))){
var inst_15366 = (state_15401[(8)]);
var inst_15371 = (state_15401[(11)]);
var inst_15366__$1 = (state_15401[(2)]);
var inst_15370 = (inst_15366__$1 == null);
var inst_15371__$1 = cljs.core.not(inst_15370);
var state_15401__$1 = (function (){var statearr_15502 = state_15401;
(statearr_15502[(8)] = inst_15366__$1);

(statearr_15502[(11)] = inst_15371__$1);

return statearr_15502;
})();
if(inst_15371__$1){
var statearr_15511_18432 = state_15401__$1;
(statearr_15511_18432[(1)] = (15));

} else {
var statearr_15513_18433 = state_15401__$1;
(statearr_15513_18433[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (16))){
var inst_15371 = (state_15401[(11)]);
var state_15401__$1 = state_15401;
var statearr_15528_18434 = state_15401__$1;
(statearr_15528_18434[(2)] = inst_15371);

(statearr_15528_18434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (10))){
var inst_15355 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
var statearr_15543_18437 = state_15401__$1;
(statearr_15543_18437[(2)] = inst_15355);

(statearr_15543_18437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (18))){
var inst_15378 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
var statearr_15550_18439 = state_15401__$1;
(statearr_15550_18439[(2)] = inst_15378);

(statearr_15550_18439[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (8))){
var inst_15352 = cljs.core.async.close_BANG_(to);
var state_15401__$1 = state_15401;
var statearr_15559_18441 = state_15401__$1;
(statearr_15559_18441[(2)] = inst_15352);

(statearr_15559_18441[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0 = (function (){
var statearr_15581 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15581[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__);

(statearr_15581[(1)] = (1));

return statearr_15581;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1 = (function (state_15401){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_15401);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e15593){var ex__13414__auto__ = e15593;
var statearr_15594_18447 = state_15401;
(statearr_15594_18447[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_15401[(4)]))){
var statearr_15597_18449 = state_15401;
(statearr_15597_18449[(1)] = cljs.core.first((state_15401[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18451 = state_15401;
state_15401 = G__18451;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__ = function(state_15401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1.call(this,state_15401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13411__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_15604 = f__14564__auto__();
(statearr_15604[(6)] = c__14562__auto__);

return statearr_15604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
}));

return c__14562__auto__;
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
var G__15613 = arguments.length;
switch (G__15613) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__15622 = arguments.length;
switch (G__15622) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__15633 = arguments.length;
switch (G__15633) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14562__auto___18469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_15667){
var state_val_15668 = (state_15667[(1)]);
if((state_val_15668 === (7))){
var inst_15663 = (state_15667[(2)]);
var state_15667__$1 = state_15667;
var statearr_15671_18476 = state_15667__$1;
(statearr_15671_18476[(2)] = inst_15663);

(statearr_15671_18476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (1))){
var state_15667__$1 = state_15667;
var statearr_15677_18480 = state_15667__$1;
(statearr_15677_18480[(2)] = null);

(statearr_15677_18480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (4))){
var inst_15640 = (state_15667[(7)]);
var inst_15640__$1 = (state_15667[(2)]);
var inst_15641 = (inst_15640__$1 == null);
var state_15667__$1 = (function (){var statearr_15678 = state_15667;
(statearr_15678[(7)] = inst_15640__$1);

return statearr_15678;
})();
if(cljs.core.truth_(inst_15641)){
var statearr_15680_18487 = state_15667__$1;
(statearr_15680_18487[(1)] = (5));

} else {
var statearr_15681_18488 = state_15667__$1;
(statearr_15681_18488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (13))){
var state_15667__$1 = state_15667;
var statearr_15683_18489 = state_15667__$1;
(statearr_15683_18489[(2)] = null);

(statearr_15683_18489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (6))){
var inst_15640 = (state_15667[(7)]);
var inst_15647 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15640) : p.call(null,inst_15640));
var state_15667__$1 = state_15667;
if(cljs.core.truth_(inst_15647)){
var statearr_15686_18490 = state_15667__$1;
(statearr_15686_18490[(1)] = (9));

} else {
var statearr_15687_18495 = state_15667__$1;
(statearr_15687_18495[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (3))){
var inst_15665 = (state_15667[(2)]);
var state_15667__$1 = state_15667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15667__$1,inst_15665);
} else {
if((state_val_15668 === (12))){
var state_15667__$1 = state_15667;
var statearr_15702_18496 = state_15667__$1;
(statearr_15702_18496[(2)] = null);

(statearr_15702_18496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (2))){
var state_15667__$1 = state_15667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15667__$1,(4),ch);
} else {
if((state_val_15668 === (11))){
var inst_15640 = (state_15667[(7)]);
var inst_15652 = (state_15667[(2)]);
var state_15667__$1 = state_15667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15667__$1,(8),inst_15652,inst_15640);
} else {
if((state_val_15668 === (9))){
var state_15667__$1 = state_15667;
var statearr_15709_18497 = state_15667__$1;
(statearr_15709_18497[(2)] = tc);

(statearr_15709_18497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (5))){
var inst_15643 = cljs.core.async.close_BANG_(tc);
var inst_15644 = cljs.core.async.close_BANG_(fc);
var state_15667__$1 = (function (){var statearr_15711 = state_15667;
(statearr_15711[(8)] = inst_15643);

return statearr_15711;
})();
var statearr_15712_18498 = state_15667__$1;
(statearr_15712_18498[(2)] = inst_15644);

(statearr_15712_18498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (14))){
var inst_15661 = (state_15667[(2)]);
var state_15667__$1 = state_15667;
var statearr_15716_18499 = state_15667__$1;
(statearr_15716_18499[(2)] = inst_15661);

(statearr_15716_18499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (10))){
var state_15667__$1 = state_15667;
var statearr_15717_18500 = state_15667__$1;
(statearr_15717_18500[(2)] = fc);

(statearr_15717_18500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (8))){
var inst_15654 = (state_15667[(2)]);
var state_15667__$1 = state_15667;
if(cljs.core.truth_(inst_15654)){
var statearr_15719_18502 = state_15667__$1;
(statearr_15719_18502[(1)] = (12));

} else {
var statearr_15721_18503 = state_15667__$1;
(statearr_15721_18503[(1)] = (13));

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
var cljs$core$async$state_machine__13411__auto__ = null;
var cljs$core$async$state_machine__13411__auto____0 = (function (){
var statearr_15725 = [null,null,null,null,null,null,null,null,null];
(statearr_15725[(0)] = cljs$core$async$state_machine__13411__auto__);

(statearr_15725[(1)] = (1));

return statearr_15725;
});
var cljs$core$async$state_machine__13411__auto____1 = (function (state_15667){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_15667);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e15730){var ex__13414__auto__ = e15730;
var statearr_15732_18505 = state_15667;
(statearr_15732_18505[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_15667[(4)]))){
var statearr_15733_18506 = state_15667;
(statearr_15733_18506[(1)] = cljs.core.first((state_15667[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18508 = state_15667;
state_15667 = G__18508;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$state_machine__13411__auto__ = function(state_15667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13411__auto____1.call(this,state_15667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13411__auto____0;
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13411__auto____1;
return cljs$core$async$state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_15740 = f__14564__auto__();
(statearr_15740[(6)] = c__14562__auto___18469);

return statearr_15740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
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
var c__14562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_15777){
var state_val_15779 = (state_15777[(1)]);
if((state_val_15779 === (7))){
var inst_15771 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15786_18514 = state_15777__$1;
(statearr_15786_18514[(2)] = inst_15771);

(statearr_15786_18514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (1))){
var inst_15748 = init;
var inst_15750 = inst_15748;
var state_15777__$1 = (function (){var statearr_15788 = state_15777;
(statearr_15788[(7)] = inst_15750);

return statearr_15788;
})();
var statearr_15789_18519 = state_15777__$1;
(statearr_15789_18519[(2)] = null);

(statearr_15789_18519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (4))){
var inst_15753 = (state_15777[(8)]);
var inst_15753__$1 = (state_15777[(2)]);
var inst_15755 = (inst_15753__$1 == null);
var state_15777__$1 = (function (){var statearr_15792 = state_15777;
(statearr_15792[(8)] = inst_15753__$1);

return statearr_15792;
})();
if(cljs.core.truth_(inst_15755)){
var statearr_15794_18520 = state_15777__$1;
(statearr_15794_18520[(1)] = (5));

} else {
var statearr_15795_18521 = state_15777__$1;
(statearr_15795_18521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (6))){
var inst_15750 = (state_15777[(7)]);
var inst_15753 = (state_15777[(8)]);
var inst_15758 = (state_15777[(9)]);
var inst_15758__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15750,inst_15753) : f.call(null,inst_15750,inst_15753));
var inst_15761 = cljs.core.reduced_QMARK_(inst_15758__$1);
var state_15777__$1 = (function (){var statearr_15797 = state_15777;
(statearr_15797[(9)] = inst_15758__$1);

return statearr_15797;
})();
if(inst_15761){
var statearr_15798_18523 = state_15777__$1;
(statearr_15798_18523[(1)] = (8));

} else {
var statearr_15800_18524 = state_15777__$1;
(statearr_15800_18524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (3))){
var inst_15773 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15777__$1,inst_15773);
} else {
if((state_val_15779 === (2))){
var state_15777__$1 = state_15777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15777__$1,(4),ch);
} else {
if((state_val_15779 === (9))){
var inst_15758 = (state_15777[(9)]);
var inst_15750 = inst_15758;
var state_15777__$1 = (function (){var statearr_15804 = state_15777;
(statearr_15804[(7)] = inst_15750);

return statearr_15804;
})();
var statearr_15805_18526 = state_15777__$1;
(statearr_15805_18526[(2)] = null);

(statearr_15805_18526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (5))){
var inst_15750 = (state_15777[(7)]);
var state_15777__$1 = state_15777;
var statearr_15808_18530 = state_15777__$1;
(statearr_15808_18530[(2)] = inst_15750);

(statearr_15808_18530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (10))){
var inst_15769 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15810_18532 = state_15777__$1;
(statearr_15810_18532[(2)] = inst_15769);

(statearr_15810_18532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (8))){
var inst_15758 = (state_15777[(9)]);
var inst_15765 = cljs.core.deref(inst_15758);
var state_15777__$1 = state_15777;
var statearr_15812_18538 = state_15777__$1;
(statearr_15812_18538[(2)] = inst_15765);

(statearr_15812_18538[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13411__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13411__auto____0 = (function (){
var statearr_15817 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15817[(0)] = cljs$core$async$reduce_$_state_machine__13411__auto__);

(statearr_15817[(1)] = (1));

return statearr_15817;
});
var cljs$core$async$reduce_$_state_machine__13411__auto____1 = (function (state_15777){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_15777);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e15818){var ex__13414__auto__ = e15818;
var statearr_15819_18547 = state_15777;
(statearr_15819_18547[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_15777[(4)]))){
var statearr_15821_18548 = state_15777;
(statearr_15821_18548[(1)] = cljs.core.first((state_15777[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18549 = state_15777;
state_15777 = G__18549;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13411__auto__ = function(state_15777){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13411__auto____1.call(this,state_15777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13411__auto____0;
cljs$core$async$reduce_$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13411__auto____1;
return cljs$core$async$reduce_$_state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_15822 = f__14564__auto__();
(statearr_15822[(6)] = c__14562__auto__);

return statearr_15822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
}));

return c__14562__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_15831){
var state_val_15832 = (state_15831[(1)]);
if((state_val_15832 === (1))){
var inst_15826 = cljs.core.async.reduce(f__$1,init,ch);
var state_15831__$1 = state_15831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15831__$1,(2),inst_15826);
} else {
if((state_val_15832 === (2))){
var inst_15828 = (state_15831[(2)]);
var inst_15829 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15828) : f__$1.call(null,inst_15828));
var state_15831__$1 = state_15831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15831__$1,inst_15829);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13411__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13411__auto____0 = (function (){
var statearr_15835 = [null,null,null,null,null,null,null];
(statearr_15835[(0)] = cljs$core$async$transduce_$_state_machine__13411__auto__);

(statearr_15835[(1)] = (1));

return statearr_15835;
});
var cljs$core$async$transduce_$_state_machine__13411__auto____1 = (function (state_15831){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_15831);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e15838){var ex__13414__auto__ = e15838;
var statearr_15839_18560 = state_15831;
(statearr_15839_18560[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_15831[(4)]))){
var statearr_15840_18561 = state_15831;
(statearr_15840_18561[(1)] = cljs.core.first((state_15831[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18562 = state_15831;
state_15831 = G__18562;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13411__auto__ = function(state_15831){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13411__auto____1.call(this,state_15831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13411__auto____0;
cljs$core$async$transduce_$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13411__auto____1;
return cljs$core$async$transduce_$_state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_15842 = f__14564__auto__();
(statearr_15842[(6)] = c__14562__auto__);

return statearr_15842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
}));

return c__14562__auto__;
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
var G__15847 = arguments.length;
switch (G__15847) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_15879){
var state_val_15880 = (state_15879[(1)]);
if((state_val_15880 === (7))){
var inst_15859 = (state_15879[(2)]);
var state_15879__$1 = state_15879;
var statearr_15884_18577 = state_15879__$1;
(statearr_15884_18577[(2)] = inst_15859);

(statearr_15884_18577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15880 === (1))){
var inst_15850 = cljs.core.seq(coll);
var inst_15852 = inst_15850;
var state_15879__$1 = (function (){var statearr_15886 = state_15879;
(statearr_15886[(7)] = inst_15852);

return statearr_15886;
})();
var statearr_15891_18578 = state_15879__$1;
(statearr_15891_18578[(2)] = null);

(statearr_15891_18578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15880 === (4))){
var inst_15852 = (state_15879[(7)]);
var inst_15857 = cljs.core.first(inst_15852);
var state_15879__$1 = state_15879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15879__$1,(7),ch,inst_15857);
} else {
if((state_val_15880 === (13))){
var inst_15873 = (state_15879[(2)]);
var state_15879__$1 = state_15879;
var statearr_15897_18585 = state_15879__$1;
(statearr_15897_18585[(2)] = inst_15873);

(statearr_15897_18585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15880 === (6))){
var inst_15862 = (state_15879[(2)]);
var state_15879__$1 = state_15879;
if(cljs.core.truth_(inst_15862)){
var statearr_15901_18592 = state_15879__$1;
(statearr_15901_18592[(1)] = (8));

} else {
var statearr_15903_18593 = state_15879__$1;
(statearr_15903_18593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15880 === (3))){
var inst_15877 = (state_15879[(2)]);
var state_15879__$1 = state_15879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15879__$1,inst_15877);
} else {
if((state_val_15880 === (12))){
var state_15879__$1 = state_15879;
var statearr_15904_18594 = state_15879__$1;
(statearr_15904_18594[(2)] = null);

(statearr_15904_18594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15880 === (2))){
var inst_15852 = (state_15879[(7)]);
var state_15879__$1 = state_15879;
if(cljs.core.truth_(inst_15852)){
var statearr_15906_18599 = state_15879__$1;
(statearr_15906_18599[(1)] = (4));

} else {
var statearr_15907_18601 = state_15879__$1;
(statearr_15907_18601[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15880 === (11))){
var inst_15870 = cljs.core.async.close_BANG_(ch);
var state_15879__$1 = state_15879;
var statearr_15909_18605 = state_15879__$1;
(statearr_15909_18605[(2)] = inst_15870);

(statearr_15909_18605[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15880 === (9))){
var state_15879__$1 = state_15879;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15912_18607 = state_15879__$1;
(statearr_15912_18607[(1)] = (11));

} else {
var statearr_15918_18608 = state_15879__$1;
(statearr_15918_18608[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15880 === (5))){
var inst_15852 = (state_15879[(7)]);
var state_15879__$1 = state_15879;
var statearr_15922_18609 = state_15879__$1;
(statearr_15922_18609[(2)] = inst_15852);

(statearr_15922_18609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15880 === (10))){
var inst_15875 = (state_15879[(2)]);
var state_15879__$1 = state_15879;
var statearr_15925_18610 = state_15879__$1;
(statearr_15925_18610[(2)] = inst_15875);

(statearr_15925_18610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15880 === (8))){
var inst_15852 = (state_15879[(7)]);
var inst_15864 = cljs.core.next(inst_15852);
var inst_15852__$1 = inst_15864;
var state_15879__$1 = (function (){var statearr_15926 = state_15879;
(statearr_15926[(7)] = inst_15852__$1);

return statearr_15926;
})();
var statearr_15927_18611 = state_15879__$1;
(statearr_15927_18611[(2)] = null);

(statearr_15927_18611[(1)] = (2));


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
var cljs$core$async$state_machine__13411__auto__ = null;
var cljs$core$async$state_machine__13411__auto____0 = (function (){
var statearr_15935 = [null,null,null,null,null,null,null,null];
(statearr_15935[(0)] = cljs$core$async$state_machine__13411__auto__);

(statearr_15935[(1)] = (1));

return statearr_15935;
});
var cljs$core$async$state_machine__13411__auto____1 = (function (state_15879){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_15879);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e15936){var ex__13414__auto__ = e15936;
var statearr_15937_18613 = state_15879;
(statearr_15937_18613[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_15879[(4)]))){
var statearr_15939_18614 = state_15879;
(statearr_15939_18614[(1)] = cljs.core.first((state_15879[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18615 = state_15879;
state_15879 = G__18615;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$state_machine__13411__auto__ = function(state_15879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13411__auto____1.call(this,state_15879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13411__auto____0;
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13411__auto____1;
return cljs$core$async$state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_15940 = f__14564__auto__();
(statearr_15940[(6)] = c__14562__auto__);

return statearr_15940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
}));

return c__14562__auto__;
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
var G__15955 = arguments.length;
switch (G__15955) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

var cljs$core$async$Mux$muxch_STAR_$dyn_18621 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18621(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18628 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18628(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18639 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18639(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18648 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18648(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16003 = (function (ch,cs,meta16004){
this.ch = ch;
this.cs = cs;
this.meta16004 = meta16004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16005,meta16004__$1){
var self__ = this;
var _16005__$1 = this;
return (new cljs.core.async.t_cljs$core$async16003(self__.ch,self__.cs,meta16004__$1));
}));

(cljs.core.async.t_cljs$core$async16003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16005){
var self__ = this;
var _16005__$1 = this;
return self__.meta16004;
}));

(cljs.core.async.t_cljs$core$async16003.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16003.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16003.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16003.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16003.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16004","meta16004",-1707273797,null)], null);
}));

(cljs.core.async.t_cljs$core$async16003.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16003");

(cljs.core.async.t_cljs$core$async16003.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16003");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16003.
 */
cljs.core.async.__GT_t_cljs$core$async16003 = (function cljs$core$async$__GT_t_cljs$core$async16003(ch,cs,meta16004){
return (new cljs.core.async.t_cljs$core$async16003(ch,cs,meta16004));
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
var m = (new cljs.core.async.t_cljs$core$async16003(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14562__auto___18683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_16199){
var state_val_16200 = (state_16199[(1)]);
if((state_val_16200 === (7))){
var inst_16191 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
var statearr_16214_18688 = state_16199__$1;
(statearr_16214_18688[(2)] = inst_16191);

(statearr_16214_18688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (20))){
var inst_16069 = (state_16199[(7)]);
var inst_16085 = cljs.core.first(inst_16069);
var inst_16086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16085,(0),null);
var inst_16087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16085,(1),null);
var state_16199__$1 = (function (){var statearr_16216 = state_16199;
(statearr_16216[(8)] = inst_16086);

return statearr_16216;
})();
if(cljs.core.truth_(inst_16087)){
var statearr_16217_18694 = state_16199__$1;
(statearr_16217_18694[(1)] = (22));

} else {
var statearr_16219_18695 = state_16199__$1;
(statearr_16219_18695[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (27))){
var inst_16123 = (state_16199[(9)]);
var inst_16125 = (state_16199[(10)]);
var inst_16132 = (state_16199[(11)]);
var inst_16032 = (state_16199[(12)]);
var inst_16132__$1 = cljs.core._nth(inst_16123,inst_16125);
var inst_16133 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16132__$1,inst_16032,done);
var state_16199__$1 = (function (){var statearr_16224 = state_16199;
(statearr_16224[(11)] = inst_16132__$1);

return statearr_16224;
})();
if(cljs.core.truth_(inst_16133)){
var statearr_16225_18699 = state_16199__$1;
(statearr_16225_18699[(1)] = (30));

} else {
var statearr_16227_18700 = state_16199__$1;
(statearr_16227_18700[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (1))){
var state_16199__$1 = state_16199;
var statearr_16230_18709 = state_16199__$1;
(statearr_16230_18709[(2)] = null);

(statearr_16230_18709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (24))){
var inst_16069 = (state_16199[(7)]);
var inst_16095 = (state_16199[(2)]);
var inst_16098 = cljs.core.next(inst_16069);
var inst_16045 = inst_16098;
var inst_16046 = null;
var inst_16047 = (0);
var inst_16048 = (0);
var state_16199__$1 = (function (){var statearr_16235 = state_16199;
(statearr_16235[(13)] = inst_16095);

(statearr_16235[(14)] = inst_16045);

(statearr_16235[(15)] = inst_16046);

(statearr_16235[(16)] = inst_16047);

(statearr_16235[(17)] = inst_16048);

return statearr_16235;
})();
var statearr_16236_18721 = state_16199__$1;
(statearr_16236_18721[(2)] = null);

(statearr_16236_18721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (39))){
var state_16199__$1 = state_16199;
var statearr_16245_18726 = state_16199__$1;
(statearr_16245_18726[(2)] = null);

(statearr_16245_18726[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (4))){
var inst_16032 = (state_16199[(12)]);
var inst_16032__$1 = (state_16199[(2)]);
var inst_16036 = (inst_16032__$1 == null);
var state_16199__$1 = (function (){var statearr_16247 = state_16199;
(statearr_16247[(12)] = inst_16032__$1);

return statearr_16247;
})();
if(cljs.core.truth_(inst_16036)){
var statearr_16248_18734 = state_16199__$1;
(statearr_16248_18734[(1)] = (5));

} else {
var statearr_16250_18738 = state_16199__$1;
(statearr_16250_18738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (15))){
var inst_16048 = (state_16199[(17)]);
var inst_16045 = (state_16199[(14)]);
var inst_16046 = (state_16199[(15)]);
var inst_16047 = (state_16199[(16)]);
var inst_16064 = (state_16199[(2)]);
var inst_16065 = (inst_16048 + (1));
var tmp16241 = inst_16047;
var tmp16242 = inst_16045;
var tmp16243 = inst_16046;
var inst_16045__$1 = tmp16242;
var inst_16046__$1 = tmp16243;
var inst_16047__$1 = tmp16241;
var inst_16048__$1 = inst_16065;
var state_16199__$1 = (function (){var statearr_16259 = state_16199;
(statearr_16259[(18)] = inst_16064);

(statearr_16259[(14)] = inst_16045__$1);

(statearr_16259[(15)] = inst_16046__$1);

(statearr_16259[(16)] = inst_16047__$1);

(statearr_16259[(17)] = inst_16048__$1);

return statearr_16259;
})();
var statearr_16268_18749 = state_16199__$1;
(statearr_16268_18749[(2)] = null);

(statearr_16268_18749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (21))){
var inst_16101 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
var statearr_16278_18759 = state_16199__$1;
(statearr_16278_18759[(2)] = inst_16101);

(statearr_16278_18759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (31))){
var inst_16132 = (state_16199[(11)]);
var inst_16137 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16132);
var state_16199__$1 = state_16199;
var statearr_16285_18769 = state_16199__$1;
(statearr_16285_18769[(2)] = inst_16137);

(statearr_16285_18769[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (32))){
var inst_16125 = (state_16199[(10)]);
var inst_16122 = (state_16199[(19)]);
var inst_16123 = (state_16199[(9)]);
var inst_16124 = (state_16199[(20)]);
var inst_16139 = (state_16199[(2)]);
var inst_16141 = (inst_16125 + (1));
var tmp16272 = inst_16123;
var tmp16273 = inst_16122;
var tmp16274 = inst_16124;
var inst_16122__$1 = tmp16273;
var inst_16123__$1 = tmp16272;
var inst_16124__$1 = tmp16274;
var inst_16125__$1 = inst_16141;
var state_16199__$1 = (function (){var statearr_16287 = state_16199;
(statearr_16287[(21)] = inst_16139);

(statearr_16287[(19)] = inst_16122__$1);

(statearr_16287[(9)] = inst_16123__$1);

(statearr_16287[(20)] = inst_16124__$1);

(statearr_16287[(10)] = inst_16125__$1);

return statearr_16287;
})();
var statearr_16288_18770 = state_16199__$1;
(statearr_16288_18770[(2)] = null);

(statearr_16288_18770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (40))){
var inst_16155 = (state_16199[(22)]);
var inst_16159 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16155);
var state_16199__$1 = state_16199;
var statearr_16289_18778 = state_16199__$1;
(statearr_16289_18778[(2)] = inst_16159);

(statearr_16289_18778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (33))){
var inst_16145 = (state_16199[(23)]);
var inst_16147 = cljs.core.chunked_seq_QMARK_(inst_16145);
var state_16199__$1 = state_16199;
if(inst_16147){
var statearr_16291_18780 = state_16199__$1;
(statearr_16291_18780[(1)] = (36));

} else {
var statearr_16292_18781 = state_16199__$1;
(statearr_16292_18781[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (13))){
var inst_16058 = (state_16199[(24)]);
var inst_16061 = cljs.core.async.close_BANG_(inst_16058);
var state_16199__$1 = state_16199;
var statearr_16293_18785 = state_16199__$1;
(statearr_16293_18785[(2)] = inst_16061);

(statearr_16293_18785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (22))){
var inst_16086 = (state_16199[(8)]);
var inst_16092 = cljs.core.async.close_BANG_(inst_16086);
var state_16199__$1 = state_16199;
var statearr_16295_18786 = state_16199__$1;
(statearr_16295_18786[(2)] = inst_16092);

(statearr_16295_18786[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (36))){
var inst_16145 = (state_16199[(23)]);
var inst_16149 = cljs.core.chunk_first(inst_16145);
var inst_16151 = cljs.core.chunk_rest(inst_16145);
var inst_16152 = cljs.core.count(inst_16149);
var inst_16122 = inst_16151;
var inst_16123 = inst_16149;
var inst_16124 = inst_16152;
var inst_16125 = (0);
var state_16199__$1 = (function (){var statearr_16298 = state_16199;
(statearr_16298[(19)] = inst_16122);

(statearr_16298[(9)] = inst_16123);

(statearr_16298[(20)] = inst_16124);

(statearr_16298[(10)] = inst_16125);

return statearr_16298;
})();
var statearr_16299_18801 = state_16199__$1;
(statearr_16299_18801[(2)] = null);

(statearr_16299_18801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (41))){
var inst_16145 = (state_16199[(23)]);
var inst_16164 = (state_16199[(2)]);
var inst_16165 = cljs.core.next(inst_16145);
var inst_16122 = inst_16165;
var inst_16123 = null;
var inst_16124 = (0);
var inst_16125 = (0);
var state_16199__$1 = (function (){var statearr_16304 = state_16199;
(statearr_16304[(25)] = inst_16164);

(statearr_16304[(19)] = inst_16122);

(statearr_16304[(9)] = inst_16123);

(statearr_16304[(20)] = inst_16124);

(statearr_16304[(10)] = inst_16125);

return statearr_16304;
})();
var statearr_16305_18805 = state_16199__$1;
(statearr_16305_18805[(2)] = null);

(statearr_16305_18805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (43))){
var state_16199__$1 = state_16199;
var statearr_16307_18817 = state_16199__$1;
(statearr_16307_18817[(2)] = null);

(statearr_16307_18817[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (29))){
var inst_16174 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
var statearr_16310_18826 = state_16199__$1;
(statearr_16310_18826[(2)] = inst_16174);

(statearr_16310_18826[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (44))){
var inst_16188 = (state_16199[(2)]);
var state_16199__$1 = (function (){var statearr_16311 = state_16199;
(statearr_16311[(26)] = inst_16188);

return statearr_16311;
})();
var statearr_16312_18830 = state_16199__$1;
(statearr_16312_18830[(2)] = null);

(statearr_16312_18830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (6))){
var inst_16114 = (state_16199[(27)]);
var inst_16110 = cljs.core.deref(cs);
var inst_16114__$1 = cljs.core.keys(inst_16110);
var inst_16115 = cljs.core.count(inst_16114__$1);
var inst_16116 = cljs.core.reset_BANG_(dctr,inst_16115);
var inst_16121 = cljs.core.seq(inst_16114__$1);
var inst_16122 = inst_16121;
var inst_16123 = null;
var inst_16124 = (0);
var inst_16125 = (0);
var state_16199__$1 = (function (){var statearr_16315 = state_16199;
(statearr_16315[(27)] = inst_16114__$1);

(statearr_16315[(28)] = inst_16116);

(statearr_16315[(19)] = inst_16122);

(statearr_16315[(9)] = inst_16123);

(statearr_16315[(20)] = inst_16124);

(statearr_16315[(10)] = inst_16125);

return statearr_16315;
})();
var statearr_16317_18842 = state_16199__$1;
(statearr_16317_18842[(2)] = null);

(statearr_16317_18842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (28))){
var inst_16122 = (state_16199[(19)]);
var inst_16145 = (state_16199[(23)]);
var inst_16145__$1 = cljs.core.seq(inst_16122);
var state_16199__$1 = (function (){var statearr_16322 = state_16199;
(statearr_16322[(23)] = inst_16145__$1);

return statearr_16322;
})();
if(inst_16145__$1){
var statearr_16323_18849 = state_16199__$1;
(statearr_16323_18849[(1)] = (33));

} else {
var statearr_16324_18851 = state_16199__$1;
(statearr_16324_18851[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (25))){
var inst_16125 = (state_16199[(10)]);
var inst_16124 = (state_16199[(20)]);
var inst_16128 = (inst_16125 < inst_16124);
var inst_16129 = inst_16128;
var state_16199__$1 = state_16199;
if(cljs.core.truth_(inst_16129)){
var statearr_16325_18853 = state_16199__$1;
(statearr_16325_18853[(1)] = (27));

} else {
var statearr_16326_18854 = state_16199__$1;
(statearr_16326_18854[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (34))){
var state_16199__$1 = state_16199;
var statearr_16328_18856 = state_16199__$1;
(statearr_16328_18856[(2)] = null);

(statearr_16328_18856[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (17))){
var state_16199__$1 = state_16199;
var statearr_16330_18860 = state_16199__$1;
(statearr_16330_18860[(2)] = null);

(statearr_16330_18860[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (3))){
var inst_16194 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16199__$1,inst_16194);
} else {
if((state_val_16200 === (12))){
var inst_16106 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
var statearr_16339_18863 = state_16199__$1;
(statearr_16339_18863[(2)] = inst_16106);

(statearr_16339_18863[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (2))){
var state_16199__$1 = state_16199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16199__$1,(4),ch);
} else {
if((state_val_16200 === (23))){
var state_16199__$1 = state_16199;
var statearr_16344_18864 = state_16199__$1;
(statearr_16344_18864[(2)] = null);

(statearr_16344_18864[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (35))){
var inst_16172 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
var statearr_16345_18867 = state_16199__$1;
(statearr_16345_18867[(2)] = inst_16172);

(statearr_16345_18867[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (19))){
var inst_16069 = (state_16199[(7)]);
var inst_16075 = cljs.core.chunk_first(inst_16069);
var inst_16076 = cljs.core.chunk_rest(inst_16069);
var inst_16077 = cljs.core.count(inst_16075);
var inst_16045 = inst_16076;
var inst_16046 = inst_16075;
var inst_16047 = inst_16077;
var inst_16048 = (0);
var state_16199__$1 = (function (){var statearr_16346 = state_16199;
(statearr_16346[(14)] = inst_16045);

(statearr_16346[(15)] = inst_16046);

(statearr_16346[(16)] = inst_16047);

(statearr_16346[(17)] = inst_16048);

return statearr_16346;
})();
var statearr_16351_18869 = state_16199__$1;
(statearr_16351_18869[(2)] = null);

(statearr_16351_18869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (11))){
var inst_16045 = (state_16199[(14)]);
var inst_16069 = (state_16199[(7)]);
var inst_16069__$1 = cljs.core.seq(inst_16045);
var state_16199__$1 = (function (){var statearr_16353 = state_16199;
(statearr_16353[(7)] = inst_16069__$1);

return statearr_16353;
})();
if(inst_16069__$1){
var statearr_16354_18872 = state_16199__$1;
(statearr_16354_18872[(1)] = (16));

} else {
var statearr_16355_18873 = state_16199__$1;
(statearr_16355_18873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (9))){
var inst_16108 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
var statearr_16356_18878 = state_16199__$1;
(statearr_16356_18878[(2)] = inst_16108);

(statearr_16356_18878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (5))){
var inst_16043 = cljs.core.deref(cs);
var inst_16044 = cljs.core.seq(inst_16043);
var inst_16045 = inst_16044;
var inst_16046 = null;
var inst_16047 = (0);
var inst_16048 = (0);
var state_16199__$1 = (function (){var statearr_16358 = state_16199;
(statearr_16358[(14)] = inst_16045);

(statearr_16358[(15)] = inst_16046);

(statearr_16358[(16)] = inst_16047);

(statearr_16358[(17)] = inst_16048);

return statearr_16358;
})();
var statearr_16359_18883 = state_16199__$1;
(statearr_16359_18883[(2)] = null);

(statearr_16359_18883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (14))){
var state_16199__$1 = state_16199;
var statearr_16360_18889 = state_16199__$1;
(statearr_16360_18889[(2)] = null);

(statearr_16360_18889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (45))){
var inst_16185 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
var statearr_16361_18892 = state_16199__$1;
(statearr_16361_18892[(2)] = inst_16185);

(statearr_16361_18892[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (26))){
var inst_16114 = (state_16199[(27)]);
var inst_16176 = (state_16199[(2)]);
var inst_16177 = cljs.core.seq(inst_16114);
var state_16199__$1 = (function (){var statearr_16363 = state_16199;
(statearr_16363[(29)] = inst_16176);

return statearr_16363;
})();
if(inst_16177){
var statearr_16366_18895 = state_16199__$1;
(statearr_16366_18895[(1)] = (42));

} else {
var statearr_16368_18896 = state_16199__$1;
(statearr_16368_18896[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (16))){
var inst_16069 = (state_16199[(7)]);
var inst_16073 = cljs.core.chunked_seq_QMARK_(inst_16069);
var state_16199__$1 = state_16199;
if(inst_16073){
var statearr_16369_18898 = state_16199__$1;
(statearr_16369_18898[(1)] = (19));

} else {
var statearr_16370_18899 = state_16199__$1;
(statearr_16370_18899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (38))){
var inst_16169 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
var statearr_16371_18902 = state_16199__$1;
(statearr_16371_18902[(2)] = inst_16169);

(statearr_16371_18902[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (30))){
var state_16199__$1 = state_16199;
var statearr_16372_18909 = state_16199__$1;
(statearr_16372_18909[(2)] = null);

(statearr_16372_18909[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (10))){
var inst_16046 = (state_16199[(15)]);
var inst_16048 = (state_16199[(17)]);
var inst_16057 = cljs.core._nth(inst_16046,inst_16048);
var inst_16058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16057,(0),null);
var inst_16059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16057,(1),null);
var state_16199__$1 = (function (){var statearr_16373 = state_16199;
(statearr_16373[(24)] = inst_16058);

return statearr_16373;
})();
if(cljs.core.truth_(inst_16059)){
var statearr_16374_18913 = state_16199__$1;
(statearr_16374_18913[(1)] = (13));

} else {
var statearr_16375_18914 = state_16199__$1;
(statearr_16375_18914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (18))){
var inst_16104 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
var statearr_16378_18917 = state_16199__$1;
(statearr_16378_18917[(2)] = inst_16104);

(statearr_16378_18917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (42))){
var state_16199__$1 = state_16199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16199__$1,(45),dchan);
} else {
if((state_val_16200 === (37))){
var inst_16145 = (state_16199[(23)]);
var inst_16155 = (state_16199[(22)]);
var inst_16032 = (state_16199[(12)]);
var inst_16155__$1 = cljs.core.first(inst_16145);
var inst_16156 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16155__$1,inst_16032,done);
var state_16199__$1 = (function (){var statearr_16383 = state_16199;
(statearr_16383[(22)] = inst_16155__$1);

return statearr_16383;
})();
if(cljs.core.truth_(inst_16156)){
var statearr_16384_18924 = state_16199__$1;
(statearr_16384_18924[(1)] = (39));

} else {
var statearr_16385_18926 = state_16199__$1;
(statearr_16385_18926[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16200 === (8))){
var inst_16048 = (state_16199[(17)]);
var inst_16047 = (state_16199[(16)]);
var inst_16050 = (inst_16048 < inst_16047);
var inst_16051 = inst_16050;
var state_16199__$1 = state_16199;
if(cljs.core.truth_(inst_16051)){
var statearr_16386_18927 = state_16199__$1;
(statearr_16386_18927[(1)] = (10));

} else {
var statearr_16387_18928 = state_16199__$1;
(statearr_16387_18928[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13411__auto__ = null;
var cljs$core$async$mult_$_state_machine__13411__auto____0 = (function (){
var statearr_16412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16412[(0)] = cljs$core$async$mult_$_state_machine__13411__auto__);

(statearr_16412[(1)] = (1));

return statearr_16412;
});
var cljs$core$async$mult_$_state_machine__13411__auto____1 = (function (state_16199){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_16199);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e16414){var ex__13414__auto__ = e16414;
var statearr_16415_18931 = state_16199;
(statearr_16415_18931[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_16199[(4)]))){
var statearr_16417_18933 = state_16199;
(statearr_16417_18933[(1)] = cljs.core.first((state_16199[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18935 = state_16199;
state_16199 = G__18935;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13411__auto__ = function(state_16199){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13411__auto____1.call(this,state_16199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13411__auto____0;
cljs$core$async$mult_$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13411__auto____1;
return cljs$core$async$mult_$_state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_16418 = f__14564__auto__();
(statearr_16418[(6)] = c__14562__auto___18683);

return statearr_16418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
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
var G__16422 = arguments.length;
switch (G__16422) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

var cljs$core$async$Mix$admix_STAR_$dyn_18939 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18939(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18943 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18943(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18947 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18947(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18951 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18951(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18968 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18968(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___18978 = arguments.length;
var i__5898__auto___18979 = (0);
while(true){
if((i__5898__auto___18979 < len__5897__auto___18978)){
args__5903__auto__.push((arguments[i__5898__auto___18979]));

var G__18980 = (i__5898__auto___18979 + (1));
i__5898__auto___18979 = G__18980;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16472){
var map__16473 = p__16472;
var map__16473__$1 = cljs.core.__destructure_map(map__16473);
var opts = map__16473__$1;
var statearr_16474_18986 = state;
(statearr_16474_18986[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16476_18991 = state;
(statearr_16476_18991[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_16478_18997 = state;
(statearr_16478_18997[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16466){
var G__16467 = cljs.core.first(seq16466);
var seq16466__$1 = cljs.core.next(seq16466);
var G__16468 = cljs.core.first(seq16466__$1);
var seq16466__$2 = cljs.core.next(seq16466__$1);
var G__16469 = cljs.core.first(seq16466__$2);
var seq16466__$3 = cljs.core.next(seq16466__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16467,G__16468,G__16469,seq16466__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16502 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16503){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16503 = meta16503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16504,meta16503__$1){
var self__ = this;
var _16504__$1 = this;
return (new cljs.core.async.t_cljs$core$async16502(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16503__$1));
}));

(cljs.core.async.t_cljs$core$async16502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16504){
var self__ = this;
var _16504__$1 = this;
return self__.meta16503;
}));

(cljs.core.async.t_cljs$core$async16502.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16502.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16502.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16502.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16502.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16502.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16502.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16502.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16503","meta16503",-2073081185,null)], null);
}));

(cljs.core.async.t_cljs$core$async16502.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16502");

(cljs.core.async.t_cljs$core$async16502.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16502");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16502.
 */
cljs.core.async.__GT_t_cljs$core$async16502 = (function cljs$core$async$__GT_t_cljs$core$async16502(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16503){
return (new cljs.core.async.t_cljs$core$async16502(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16503));
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
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16502(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14562__auto___19046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_16627){
var state_val_16631 = (state_16627[(1)]);
if((state_val_16631 === (7))){
var inst_16583 = (state_16627[(2)]);
var state_16627__$1 = state_16627;
if(cljs.core.truth_(inst_16583)){
var statearr_16635_19052 = state_16627__$1;
(statearr_16635_19052[(1)] = (8));

} else {
var statearr_16636_19054 = state_16627__$1;
(statearr_16636_19054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (20))){
var inst_16576 = (state_16627[(7)]);
var state_16627__$1 = state_16627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16627__$1,(23),out,inst_16576);
} else {
if((state_val_16631 === (1))){
var inst_16555 = calc_state();
var inst_16556 = cljs.core.__destructure_map(inst_16555);
var inst_16557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16556,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16556,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16556,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16560 = inst_16555;
var state_16627__$1 = (function (){var statearr_16646 = state_16627;
(statearr_16646[(8)] = inst_16557);

(statearr_16646[(9)] = inst_16558);

(statearr_16646[(10)] = inst_16559);

(statearr_16646[(11)] = inst_16560);

return statearr_16646;
})();
var statearr_16647_19056 = state_16627__$1;
(statearr_16647_19056[(2)] = null);

(statearr_16647_19056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (24))){
var inst_16564 = (state_16627[(12)]);
var inst_16560 = inst_16564;
var state_16627__$1 = (function (){var statearr_16651 = state_16627;
(statearr_16651[(11)] = inst_16560);

return statearr_16651;
})();
var statearr_16655_19057 = state_16627__$1;
(statearr_16655_19057[(2)] = null);

(statearr_16655_19057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (4))){
var inst_16576 = (state_16627[(7)]);
var inst_16578 = (state_16627[(13)]);
var inst_16575 = (state_16627[(2)]);
var inst_16576__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16575,(0),null);
var inst_16577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16575,(1),null);
var inst_16578__$1 = (inst_16576__$1 == null);
var state_16627__$1 = (function (){var statearr_16658 = state_16627;
(statearr_16658[(7)] = inst_16576__$1);

(statearr_16658[(14)] = inst_16577);

(statearr_16658[(13)] = inst_16578__$1);

return statearr_16658;
})();
if(cljs.core.truth_(inst_16578__$1)){
var statearr_16661_19063 = state_16627__$1;
(statearr_16661_19063[(1)] = (5));

} else {
var statearr_16662_19064 = state_16627__$1;
(statearr_16662_19064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (15))){
var inst_16568 = (state_16627[(15)]);
var inst_16597 = (state_16627[(16)]);
var inst_16597__$1 = cljs.core.empty_QMARK_(inst_16568);
var state_16627__$1 = (function (){var statearr_16666 = state_16627;
(statearr_16666[(16)] = inst_16597__$1);

return statearr_16666;
})();
if(inst_16597__$1){
var statearr_16669_19084 = state_16627__$1;
(statearr_16669_19084[(1)] = (17));

} else {
var statearr_16670_19085 = state_16627__$1;
(statearr_16670_19085[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (21))){
var inst_16564 = (state_16627[(12)]);
var inst_16560 = inst_16564;
var state_16627__$1 = (function (){var statearr_16673 = state_16627;
(statearr_16673[(11)] = inst_16560);

return statearr_16673;
})();
var statearr_16674_19091 = state_16627__$1;
(statearr_16674_19091[(2)] = null);

(statearr_16674_19091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (13))){
var inst_16590 = (state_16627[(2)]);
var inst_16591 = calc_state();
var inst_16560 = inst_16591;
var state_16627__$1 = (function (){var statearr_16675 = state_16627;
(statearr_16675[(17)] = inst_16590);

(statearr_16675[(11)] = inst_16560);

return statearr_16675;
})();
var statearr_16676_19104 = state_16627__$1;
(statearr_16676_19104[(2)] = null);

(statearr_16676_19104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (22))){
var inst_16619 = (state_16627[(2)]);
var state_16627__$1 = state_16627;
var statearr_16677_19105 = state_16627__$1;
(statearr_16677_19105[(2)] = inst_16619);

(statearr_16677_19105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (6))){
var inst_16577 = (state_16627[(14)]);
var inst_16581 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16577,change);
var state_16627__$1 = state_16627;
var statearr_16681_19109 = state_16627__$1;
(statearr_16681_19109[(2)] = inst_16581);

(statearr_16681_19109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (25))){
var state_16627__$1 = state_16627;
var statearr_16682_19115 = state_16627__$1;
(statearr_16682_19115[(2)] = null);

(statearr_16682_19115[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (17))){
var inst_16569 = (state_16627[(18)]);
var inst_16577 = (state_16627[(14)]);
var inst_16600 = (inst_16569.cljs$core$IFn$_invoke$arity$1 ? inst_16569.cljs$core$IFn$_invoke$arity$1(inst_16577) : inst_16569.call(null,inst_16577));
var inst_16601 = cljs.core.not(inst_16600);
var state_16627__$1 = state_16627;
var statearr_16685_19117 = state_16627__$1;
(statearr_16685_19117[(2)] = inst_16601);

(statearr_16685_19117[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (3))){
var inst_16623 = (state_16627[(2)]);
var state_16627__$1 = state_16627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16627__$1,inst_16623);
} else {
if((state_val_16631 === (12))){
var state_16627__$1 = state_16627;
var statearr_16688_19118 = state_16627__$1;
(statearr_16688_19118[(2)] = null);

(statearr_16688_19118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (2))){
var inst_16560 = (state_16627[(11)]);
var inst_16564 = (state_16627[(12)]);
var inst_16564__$1 = cljs.core.__destructure_map(inst_16560);
var inst_16568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16564__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16564__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16564__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16627__$1 = (function (){var statearr_16693 = state_16627;
(statearr_16693[(12)] = inst_16564__$1);

(statearr_16693[(15)] = inst_16568);

(statearr_16693[(18)] = inst_16569);

return statearr_16693;
})();
return cljs.core.async.ioc_alts_BANG_(state_16627__$1,(4),inst_16570);
} else {
if((state_val_16631 === (23))){
var inst_16610 = (state_16627[(2)]);
var state_16627__$1 = state_16627;
if(cljs.core.truth_(inst_16610)){
var statearr_16696_19125 = state_16627__$1;
(statearr_16696_19125[(1)] = (24));

} else {
var statearr_16698_19126 = state_16627__$1;
(statearr_16698_19126[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (19))){
var inst_16604 = (state_16627[(2)]);
var state_16627__$1 = state_16627;
var statearr_16700_19132 = state_16627__$1;
(statearr_16700_19132[(2)] = inst_16604);

(statearr_16700_19132[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (11))){
var inst_16577 = (state_16627[(14)]);
var inst_16587 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16577);
var state_16627__$1 = state_16627;
var statearr_16705_19135 = state_16627__$1;
(statearr_16705_19135[(2)] = inst_16587);

(statearr_16705_19135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (9))){
var inst_16568 = (state_16627[(15)]);
var inst_16577 = (state_16627[(14)]);
var inst_16594 = (state_16627[(19)]);
var inst_16594__$1 = (inst_16568.cljs$core$IFn$_invoke$arity$1 ? inst_16568.cljs$core$IFn$_invoke$arity$1(inst_16577) : inst_16568.call(null,inst_16577));
var state_16627__$1 = (function (){var statearr_16711 = state_16627;
(statearr_16711[(19)] = inst_16594__$1);

return statearr_16711;
})();
if(cljs.core.truth_(inst_16594__$1)){
var statearr_16712_19140 = state_16627__$1;
(statearr_16712_19140[(1)] = (14));

} else {
var statearr_16713_19141 = state_16627__$1;
(statearr_16713_19141[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (5))){
var inst_16578 = (state_16627[(13)]);
var state_16627__$1 = state_16627;
var statearr_16715_19143 = state_16627__$1;
(statearr_16715_19143[(2)] = inst_16578);

(statearr_16715_19143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (14))){
var inst_16594 = (state_16627[(19)]);
var state_16627__$1 = state_16627;
var statearr_16717_19145 = state_16627__$1;
(statearr_16717_19145[(2)] = inst_16594);

(statearr_16717_19145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (26))){
var inst_16615 = (state_16627[(2)]);
var state_16627__$1 = state_16627;
var statearr_16718_19147 = state_16627__$1;
(statearr_16718_19147[(2)] = inst_16615);

(statearr_16718_19147[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (16))){
var inst_16606 = (state_16627[(2)]);
var state_16627__$1 = state_16627;
if(cljs.core.truth_(inst_16606)){
var statearr_16719_19148 = state_16627__$1;
(statearr_16719_19148[(1)] = (20));

} else {
var statearr_16720_19149 = state_16627__$1;
(statearr_16720_19149[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (10))){
var inst_16621 = (state_16627[(2)]);
var state_16627__$1 = state_16627;
var statearr_16723_19154 = state_16627__$1;
(statearr_16723_19154[(2)] = inst_16621);

(statearr_16723_19154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (18))){
var inst_16597 = (state_16627[(16)]);
var state_16627__$1 = state_16627;
var statearr_16725_19156 = state_16627__$1;
(statearr_16725_19156[(2)] = inst_16597);

(statearr_16725_19156[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (8))){
var inst_16576 = (state_16627[(7)]);
var inst_16585 = (inst_16576 == null);
var state_16627__$1 = state_16627;
if(cljs.core.truth_(inst_16585)){
var statearr_16726_19161 = state_16627__$1;
(statearr_16726_19161[(1)] = (11));

} else {
var statearr_16727_19162 = state_16627__$1;
(statearr_16727_19162[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__13411__auto__ = null;
var cljs$core$async$mix_$_state_machine__13411__auto____0 = (function (){
var statearr_16732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16732[(0)] = cljs$core$async$mix_$_state_machine__13411__auto__);

(statearr_16732[(1)] = (1));

return statearr_16732;
});
var cljs$core$async$mix_$_state_machine__13411__auto____1 = (function (state_16627){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_16627);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e16733){var ex__13414__auto__ = e16733;
var statearr_16734_19164 = state_16627;
(statearr_16734_19164[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_16627[(4)]))){
var statearr_16735_19165 = state_16627;
(statearr_16735_19165[(1)] = cljs.core.first((state_16627[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19166 = state_16627;
state_16627 = G__19166;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13411__auto__ = function(state_16627){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13411__auto____1.call(this,state_16627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13411__auto____0;
cljs$core$async$mix_$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13411__auto____1;
return cljs$core$async$mix_$_state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_16740 = f__14564__auto__();
(statearr_16740[(6)] = c__14562__auto___19046);

return statearr_16740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19168 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19168(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19171 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19171(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19176 = (function() {
var G__19177 = null;
var G__19177__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19177__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19177 = function(p,v){
switch(arguments.length){
case 1:
return G__19177__1.call(this,p);
case 2:
return G__19177__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19177.cljs$core$IFn$_invoke$arity$1 = G__19177__1;
G__19177.cljs$core$IFn$_invoke$arity$2 = G__19177__2;
return G__19177;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16781 = arguments.length;
switch (G__16781) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19176(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19176(p,v);
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
cljs.core.async.t_cljs$core$async16807 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16808){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16808 = meta16808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16809,meta16808__$1){
var self__ = this;
var _16809__$1 = this;
return (new cljs.core.async.t_cljs$core$async16807(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16808__$1));
}));

(cljs.core.async.t_cljs$core$async16807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16809){
var self__ = this;
var _16809__$1 = this;
return self__.meta16808;
}));

(cljs.core.async.t_cljs$core$async16807.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16807.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16807.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16807.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16807.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16807.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16808","meta16808",2100699873,null)], null);
}));

(cljs.core.async.t_cljs$core$async16807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16807");

(cljs.core.async.t_cljs$core$async16807.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16807.
 */
cljs.core.async.__GT_t_cljs$core$async16807 = (function cljs$core$async$__GT_t_cljs$core$async16807(ch,topic_fn,buf_fn,mults,ensure_mult,meta16808){
return (new cljs.core.async.t_cljs$core$async16807(ch,topic_fn,buf_fn,mults,ensure_mult,meta16808));
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
var G__16802 = arguments.length;
switch (G__16802) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16791_SHARP_){
if(cljs.core.truth_((p1__16791_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16791_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16791_SHARP_.call(null,topic)))){
return p1__16791_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16791_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16807(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14562__auto___19203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_16904){
var state_val_16905 = (state_16904[(1)]);
if((state_val_16905 === (7))){
var inst_16898 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16907_19204 = state_16904__$1;
(statearr_16907_19204[(2)] = inst_16898);

(statearr_16907_19204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (20))){
var state_16904__$1 = state_16904;
var statearr_16908_19206 = state_16904__$1;
(statearr_16908_19206[(2)] = null);

(statearr_16908_19206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (1))){
var state_16904__$1 = state_16904;
var statearr_16910_19208 = state_16904__$1;
(statearr_16910_19208[(2)] = null);

(statearr_16910_19208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (24))){
var inst_16881 = (state_16904[(7)]);
var inst_16890 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16881);
var state_16904__$1 = state_16904;
var statearr_16911_19211 = state_16904__$1;
(statearr_16911_19211[(2)] = inst_16890);

(statearr_16911_19211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (4))){
var inst_16825 = (state_16904[(8)]);
var inst_16825__$1 = (state_16904[(2)]);
var inst_16826 = (inst_16825__$1 == null);
var state_16904__$1 = (function (){var statearr_16912 = state_16904;
(statearr_16912[(8)] = inst_16825__$1);

return statearr_16912;
})();
if(cljs.core.truth_(inst_16826)){
var statearr_16913_19212 = state_16904__$1;
(statearr_16913_19212[(1)] = (5));

} else {
var statearr_16914_19213 = state_16904__$1;
(statearr_16914_19213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (15))){
var inst_16875 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16915_19219 = state_16904__$1;
(statearr_16915_19219[(2)] = inst_16875);

(statearr_16915_19219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (21))){
var inst_16895 = (state_16904[(2)]);
var state_16904__$1 = (function (){var statearr_16917 = state_16904;
(statearr_16917[(9)] = inst_16895);

return statearr_16917;
})();
var statearr_16918_19220 = state_16904__$1;
(statearr_16918_19220[(2)] = null);

(statearr_16918_19220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (13))){
var inst_16856 = (state_16904[(10)]);
var inst_16858 = cljs.core.chunked_seq_QMARK_(inst_16856);
var state_16904__$1 = state_16904;
if(inst_16858){
var statearr_16919_19221 = state_16904__$1;
(statearr_16919_19221[(1)] = (16));

} else {
var statearr_16920_19223 = state_16904__$1;
(statearr_16920_19223[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (22))){
var inst_16887 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
if(cljs.core.truth_(inst_16887)){
var statearr_16921_19229 = state_16904__$1;
(statearr_16921_19229[(1)] = (23));

} else {
var statearr_16922_19230 = state_16904__$1;
(statearr_16922_19230[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (6))){
var inst_16825 = (state_16904[(8)]);
var inst_16881 = (state_16904[(7)]);
var inst_16883 = (state_16904[(11)]);
var inst_16881__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16825) : topic_fn.call(null,inst_16825));
var inst_16882 = cljs.core.deref(mults);
var inst_16883__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16882,inst_16881__$1);
var state_16904__$1 = (function (){var statearr_16923 = state_16904;
(statearr_16923[(7)] = inst_16881__$1);

(statearr_16923[(11)] = inst_16883__$1);

return statearr_16923;
})();
if(cljs.core.truth_(inst_16883__$1)){
var statearr_16925_19240 = state_16904__$1;
(statearr_16925_19240[(1)] = (19));

} else {
var statearr_16926_19241 = state_16904__$1;
(statearr_16926_19241[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (25))){
var inst_16892 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16927_19242 = state_16904__$1;
(statearr_16927_19242[(2)] = inst_16892);

(statearr_16927_19242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (17))){
var inst_16856 = (state_16904[(10)]);
var inst_16866 = cljs.core.first(inst_16856);
var inst_16867 = cljs.core.async.muxch_STAR_(inst_16866);
var inst_16868 = cljs.core.async.close_BANG_(inst_16867);
var inst_16869 = cljs.core.next(inst_16856);
var inst_16836 = inst_16869;
var inst_16837 = null;
var inst_16838 = (0);
var inst_16839 = (0);
var state_16904__$1 = (function (){var statearr_16929 = state_16904;
(statearr_16929[(12)] = inst_16868);

(statearr_16929[(13)] = inst_16836);

(statearr_16929[(14)] = inst_16837);

(statearr_16929[(15)] = inst_16838);

(statearr_16929[(16)] = inst_16839);

return statearr_16929;
})();
var statearr_16930_19243 = state_16904__$1;
(statearr_16930_19243[(2)] = null);

(statearr_16930_19243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (3))){
var inst_16900 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16904__$1,inst_16900);
} else {
if((state_val_16905 === (12))){
var inst_16877 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16934_19245 = state_16904__$1;
(statearr_16934_19245[(2)] = inst_16877);

(statearr_16934_19245[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (2))){
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16904__$1,(4),ch);
} else {
if((state_val_16905 === (23))){
var state_16904__$1 = state_16904;
var statearr_16935_19246 = state_16904__$1;
(statearr_16935_19246[(2)] = null);

(statearr_16935_19246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (19))){
var inst_16883 = (state_16904[(11)]);
var inst_16825 = (state_16904[(8)]);
var inst_16885 = cljs.core.async.muxch_STAR_(inst_16883);
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16904__$1,(22),inst_16885,inst_16825);
} else {
if((state_val_16905 === (11))){
var inst_16836 = (state_16904[(13)]);
var inst_16856 = (state_16904[(10)]);
var inst_16856__$1 = cljs.core.seq(inst_16836);
var state_16904__$1 = (function (){var statearr_16939 = state_16904;
(statearr_16939[(10)] = inst_16856__$1);

return statearr_16939;
})();
if(inst_16856__$1){
var statearr_16940_19251 = state_16904__$1;
(statearr_16940_19251[(1)] = (13));

} else {
var statearr_16941_19252 = state_16904__$1;
(statearr_16941_19252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (9))){
var inst_16879 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16942_19253 = state_16904__$1;
(statearr_16942_19253[(2)] = inst_16879);

(statearr_16942_19253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (5))){
var inst_16832 = cljs.core.deref(mults);
var inst_16833 = cljs.core.vals(inst_16832);
var inst_16835 = cljs.core.seq(inst_16833);
var inst_16836 = inst_16835;
var inst_16837 = null;
var inst_16838 = (0);
var inst_16839 = (0);
var state_16904__$1 = (function (){var statearr_16943 = state_16904;
(statearr_16943[(13)] = inst_16836);

(statearr_16943[(14)] = inst_16837);

(statearr_16943[(15)] = inst_16838);

(statearr_16943[(16)] = inst_16839);

return statearr_16943;
})();
var statearr_16945_19259 = state_16904__$1;
(statearr_16945_19259[(2)] = null);

(statearr_16945_19259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (14))){
var state_16904__$1 = state_16904;
var statearr_16949_19262 = state_16904__$1;
(statearr_16949_19262[(2)] = null);

(statearr_16949_19262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (16))){
var inst_16856 = (state_16904[(10)]);
var inst_16860 = cljs.core.chunk_first(inst_16856);
var inst_16861 = cljs.core.chunk_rest(inst_16856);
var inst_16862 = cljs.core.count(inst_16860);
var inst_16836 = inst_16861;
var inst_16837 = inst_16860;
var inst_16838 = inst_16862;
var inst_16839 = (0);
var state_16904__$1 = (function (){var statearr_16951 = state_16904;
(statearr_16951[(13)] = inst_16836);

(statearr_16951[(14)] = inst_16837);

(statearr_16951[(15)] = inst_16838);

(statearr_16951[(16)] = inst_16839);

return statearr_16951;
})();
var statearr_16952_19265 = state_16904__$1;
(statearr_16952_19265[(2)] = null);

(statearr_16952_19265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (10))){
var inst_16837 = (state_16904[(14)]);
var inst_16839 = (state_16904[(16)]);
var inst_16836 = (state_16904[(13)]);
var inst_16838 = (state_16904[(15)]);
var inst_16847 = cljs.core._nth(inst_16837,inst_16839);
var inst_16848 = cljs.core.async.muxch_STAR_(inst_16847);
var inst_16849 = cljs.core.async.close_BANG_(inst_16848);
var inst_16850 = (inst_16839 + (1));
var tmp16946 = inst_16838;
var tmp16947 = inst_16836;
var tmp16948 = inst_16837;
var inst_16836__$1 = tmp16947;
var inst_16837__$1 = tmp16948;
var inst_16838__$1 = tmp16946;
var inst_16839__$1 = inst_16850;
var state_16904__$1 = (function (){var statearr_16953 = state_16904;
(statearr_16953[(17)] = inst_16849);

(statearr_16953[(13)] = inst_16836__$1);

(statearr_16953[(14)] = inst_16837__$1);

(statearr_16953[(15)] = inst_16838__$1);

(statearr_16953[(16)] = inst_16839__$1);

return statearr_16953;
})();
var statearr_16954_19268 = state_16904__$1;
(statearr_16954_19268[(2)] = null);

(statearr_16954_19268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (18))){
var inst_16872 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16955_19269 = state_16904__$1;
(statearr_16955_19269[(2)] = inst_16872);

(statearr_16955_19269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (8))){
var inst_16839 = (state_16904[(16)]);
var inst_16838 = (state_16904[(15)]);
var inst_16844 = (inst_16839 < inst_16838);
var inst_16845 = inst_16844;
var state_16904__$1 = state_16904;
if(cljs.core.truth_(inst_16845)){
var statearr_16959_19273 = state_16904__$1;
(statearr_16959_19273[(1)] = (10));

} else {
var statearr_16960_19274 = state_16904__$1;
(statearr_16960_19274[(1)] = (11));

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
var cljs$core$async$state_machine__13411__auto__ = null;
var cljs$core$async$state_machine__13411__auto____0 = (function (){
var statearr_16964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16964[(0)] = cljs$core$async$state_machine__13411__auto__);

(statearr_16964[(1)] = (1));

return statearr_16964;
});
var cljs$core$async$state_machine__13411__auto____1 = (function (state_16904){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_16904);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e16965){var ex__13414__auto__ = e16965;
var statearr_16966_19280 = state_16904;
(statearr_16966_19280[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_16904[(4)]))){
var statearr_16970_19281 = state_16904;
(statearr_16970_19281[(1)] = cljs.core.first((state_16904[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19282 = state_16904;
state_16904 = G__19282;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$state_machine__13411__auto__ = function(state_16904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13411__auto____1.call(this,state_16904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13411__auto____0;
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13411__auto____1;
return cljs$core$async$state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_16975 = f__14564__auto__();
(statearr_16975[(6)] = c__14562__auto___19203);

return statearr_16975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
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
var G__16984 = arguments.length;
switch (G__16984) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__16986 = arguments.length;
switch (G__16986) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__17003 = arguments.length;
switch (G__17003) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var c__14562__auto___19306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_17087){
var state_val_17088 = (state_17087[(1)]);
if((state_val_17088 === (7))){
var state_17087__$1 = state_17087;
var statearr_17089_19307 = state_17087__$1;
(statearr_17089_19307[(2)] = null);

(statearr_17089_19307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (1))){
var state_17087__$1 = state_17087;
var statearr_17093_19309 = state_17087__$1;
(statearr_17093_19309[(2)] = null);

(statearr_17093_19309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (4))){
var inst_17027 = (state_17087[(7)]);
var inst_17026 = (state_17087[(8)]);
var inst_17035 = (inst_17027 < inst_17026);
var state_17087__$1 = state_17087;
if(cljs.core.truth_(inst_17035)){
var statearr_17097_19311 = state_17087__$1;
(statearr_17097_19311[(1)] = (6));

} else {
var statearr_17098_19312 = state_17087__$1;
(statearr_17098_19312[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (15))){
var inst_17068 = (state_17087[(9)]);
var inst_17075 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17068);
var state_17087__$1 = state_17087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17087__$1,(17),out,inst_17075);
} else {
if((state_val_17088 === (13))){
var inst_17068 = (state_17087[(9)]);
var inst_17068__$1 = (state_17087[(2)]);
var inst_17069 = cljs.core.some(cljs.core.nil_QMARK_,inst_17068__$1);
var state_17087__$1 = (function (){var statearr_17100 = state_17087;
(statearr_17100[(9)] = inst_17068__$1);

return statearr_17100;
})();
if(cljs.core.truth_(inst_17069)){
var statearr_17101_19316 = state_17087__$1;
(statearr_17101_19316[(1)] = (14));

} else {
var statearr_17102_19317 = state_17087__$1;
(statearr_17102_19317[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (6))){
var state_17087__$1 = state_17087;
var statearr_17106_19318 = state_17087__$1;
(statearr_17106_19318[(2)] = null);

(statearr_17106_19318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (17))){
var inst_17077 = (state_17087[(2)]);
var state_17087__$1 = (function (){var statearr_17120 = state_17087;
(statearr_17120[(10)] = inst_17077);

return statearr_17120;
})();
var statearr_17121_19319 = state_17087__$1;
(statearr_17121_19319[(2)] = null);

(statearr_17121_19319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (3))){
var inst_17083 = (state_17087[(2)]);
var state_17087__$1 = state_17087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17087__$1,inst_17083);
} else {
if((state_val_17088 === (12))){
var _ = (function (){var statearr_17122 = state_17087;
(statearr_17122[(4)] = cljs.core.rest((state_17087[(4)])));

return statearr_17122;
})();
var state_17087__$1 = state_17087;
var ex17116 = (state_17087__$1[(2)]);
var statearr_17128_19321 = state_17087__$1;
(statearr_17128_19321[(5)] = ex17116);


if((ex17116 instanceof Object)){
var statearr_17131_19324 = state_17087__$1;
(statearr_17131_19324[(1)] = (11));

(statearr_17131_19324[(5)] = null);

} else {
throw ex17116;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (2))){
var inst_17024 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17026 = cnt;
var inst_17027 = (0);
var state_17087__$1 = (function (){var statearr_17132 = state_17087;
(statearr_17132[(11)] = inst_17024);

(statearr_17132[(8)] = inst_17026);

(statearr_17132[(7)] = inst_17027);

return statearr_17132;
})();
var statearr_17133_19328 = state_17087__$1;
(statearr_17133_19328[(2)] = null);

(statearr_17133_19328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (11))){
var inst_17045 = (state_17087[(2)]);
var inst_17047 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17087__$1 = (function (){var statearr_17140 = state_17087;
(statearr_17140[(12)] = inst_17045);

return statearr_17140;
})();
var statearr_17141_19333 = state_17087__$1;
(statearr_17141_19333[(2)] = inst_17047);

(statearr_17141_19333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (9))){
var inst_17027 = (state_17087[(7)]);
var _ = (function (){var statearr_17142 = state_17087;
(statearr_17142[(4)] = cljs.core.cons((12),(state_17087[(4)])));

return statearr_17142;
})();
var inst_17054 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17027) : chs__$1.call(null,inst_17027));
var inst_17055 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17027) : done.call(null,inst_17027));
var inst_17056 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17054,inst_17055);
var ___$1 = (function (){var statearr_17143 = state_17087;
(statearr_17143[(4)] = cljs.core.rest((state_17087[(4)])));

return statearr_17143;
})();
var state_17087__$1 = state_17087;
var statearr_17144_19340 = state_17087__$1;
(statearr_17144_19340[(2)] = inst_17056);

(statearr_17144_19340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (5))){
var inst_17066 = (state_17087[(2)]);
var state_17087__$1 = (function (){var statearr_17145 = state_17087;
(statearr_17145[(13)] = inst_17066);

return statearr_17145;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17087__$1,(13),dchan);
} else {
if((state_val_17088 === (14))){
var inst_17073 = cljs.core.async.close_BANG_(out);
var state_17087__$1 = state_17087;
var statearr_17146_19344 = state_17087__$1;
(statearr_17146_19344[(2)] = inst_17073);

(statearr_17146_19344[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (16))){
var inst_17080 = (state_17087[(2)]);
var state_17087__$1 = state_17087;
var statearr_17147_19345 = state_17087__$1;
(statearr_17147_19345[(2)] = inst_17080);

(statearr_17147_19345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (10))){
var inst_17027 = (state_17087[(7)]);
var inst_17059 = (state_17087[(2)]);
var inst_17060 = (inst_17027 + (1));
var inst_17027__$1 = inst_17060;
var state_17087__$1 = (function (){var statearr_17148 = state_17087;
(statearr_17148[(14)] = inst_17059);

(statearr_17148[(7)] = inst_17027__$1);

return statearr_17148;
})();
var statearr_17149_19346 = state_17087__$1;
(statearr_17149_19346[(2)] = null);

(statearr_17149_19346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17088 === (8))){
var inst_17064 = (state_17087[(2)]);
var state_17087__$1 = state_17087;
var statearr_17152_19348 = state_17087__$1;
(statearr_17152_19348[(2)] = inst_17064);

(statearr_17152_19348[(1)] = (5));


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
var cljs$core$async$state_machine__13411__auto__ = null;
var cljs$core$async$state_machine__13411__auto____0 = (function (){
var statearr_17158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17158[(0)] = cljs$core$async$state_machine__13411__auto__);

(statearr_17158[(1)] = (1));

return statearr_17158;
});
var cljs$core$async$state_machine__13411__auto____1 = (function (state_17087){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_17087);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e17159){var ex__13414__auto__ = e17159;
var statearr_17160_19353 = state_17087;
(statearr_17160_19353[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_17087[(4)]))){
var statearr_17161_19354 = state_17087;
(statearr_17161_19354[(1)] = cljs.core.first((state_17087[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19355 = state_17087;
state_17087 = G__19355;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$state_machine__13411__auto__ = function(state_17087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13411__auto____1.call(this,state_17087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13411__auto____0;
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13411__auto____1;
return cljs$core$async$state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_17165 = f__14564__auto__();
(statearr_17165[(6)] = c__14562__auto___19306);

return statearr_17165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
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
var G__17169 = arguments.length;
switch (G__17169) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14562__auto___19363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_17225){
var state_val_17226 = (state_17225[(1)]);
if((state_val_17226 === (7))){
var inst_17199 = (state_17225[(7)]);
var inst_17200 = (state_17225[(8)]);
var inst_17199__$1 = (state_17225[(2)]);
var inst_17200__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17199__$1,(0),null);
var inst_17201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17199__$1,(1),null);
var inst_17203 = (inst_17200__$1 == null);
var state_17225__$1 = (function (){var statearr_17227 = state_17225;
(statearr_17227[(7)] = inst_17199__$1);

(statearr_17227[(8)] = inst_17200__$1);

(statearr_17227[(9)] = inst_17201);

return statearr_17227;
})();
if(cljs.core.truth_(inst_17203)){
var statearr_17228_19368 = state_17225__$1;
(statearr_17228_19368[(1)] = (8));

} else {
var statearr_17229_19369 = state_17225__$1;
(statearr_17229_19369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (1))){
var inst_17186 = cljs.core.vec(chs);
var inst_17187 = inst_17186;
var state_17225__$1 = (function (){var statearr_17230 = state_17225;
(statearr_17230[(10)] = inst_17187);

return statearr_17230;
})();
var statearr_17231_19370 = state_17225__$1;
(statearr_17231_19370[(2)] = null);

(statearr_17231_19370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (4))){
var inst_17187 = (state_17225[(10)]);
var state_17225__$1 = state_17225;
return cljs.core.async.ioc_alts_BANG_(state_17225__$1,(7),inst_17187);
} else {
if((state_val_17226 === (6))){
var inst_17221 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
var statearr_17232_19374 = state_17225__$1;
(statearr_17232_19374[(2)] = inst_17221);

(statearr_17232_19374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (3))){
var inst_17223 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17225__$1,inst_17223);
} else {
if((state_val_17226 === (2))){
var inst_17187 = (state_17225[(10)]);
var inst_17192 = cljs.core.count(inst_17187);
var inst_17193 = (inst_17192 > (0));
var state_17225__$1 = state_17225;
if(cljs.core.truth_(inst_17193)){
var statearr_17235_19375 = state_17225__$1;
(statearr_17235_19375[(1)] = (4));

} else {
var statearr_17236_19376 = state_17225__$1;
(statearr_17236_19376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (11))){
var inst_17187 = (state_17225[(10)]);
var inst_17214 = (state_17225[(2)]);
var tmp17233 = inst_17187;
var inst_17187__$1 = tmp17233;
var state_17225__$1 = (function (){var statearr_17237 = state_17225;
(statearr_17237[(11)] = inst_17214);

(statearr_17237[(10)] = inst_17187__$1);

return statearr_17237;
})();
var statearr_17239_19383 = state_17225__$1;
(statearr_17239_19383[(2)] = null);

(statearr_17239_19383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (9))){
var inst_17200 = (state_17225[(8)]);
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17225__$1,(11),out,inst_17200);
} else {
if((state_val_17226 === (5))){
var inst_17219 = cljs.core.async.close_BANG_(out);
var state_17225__$1 = state_17225;
var statearr_17257_19385 = state_17225__$1;
(statearr_17257_19385[(2)] = inst_17219);

(statearr_17257_19385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (10))){
var inst_17217 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
var statearr_17261_19386 = state_17225__$1;
(statearr_17261_19386[(2)] = inst_17217);

(statearr_17261_19386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (8))){
var inst_17187 = (state_17225[(10)]);
var inst_17199 = (state_17225[(7)]);
var inst_17200 = (state_17225[(8)]);
var inst_17201 = (state_17225[(9)]);
var inst_17209 = (function (){var cs = inst_17187;
var vec__17195 = inst_17199;
var v = inst_17200;
var c = inst_17201;
return (function (p1__17167_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17167_SHARP_);
});
})();
var inst_17210 = cljs.core.filterv(inst_17209,inst_17187);
var inst_17187__$1 = inst_17210;
var state_17225__$1 = (function (){var statearr_17264 = state_17225;
(statearr_17264[(10)] = inst_17187__$1);

return statearr_17264;
})();
var statearr_17265_19401 = state_17225__$1;
(statearr_17265_19401[(2)] = null);

(statearr_17265_19401[(1)] = (2));


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
var cljs$core$async$state_machine__13411__auto__ = null;
var cljs$core$async$state_machine__13411__auto____0 = (function (){
var statearr_17268 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17268[(0)] = cljs$core$async$state_machine__13411__auto__);

(statearr_17268[(1)] = (1));

return statearr_17268;
});
var cljs$core$async$state_machine__13411__auto____1 = (function (state_17225){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_17225);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e17269){var ex__13414__auto__ = e17269;
var statearr_17270_19413 = state_17225;
(statearr_17270_19413[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_17225[(4)]))){
var statearr_17271_19414 = state_17225;
(statearr_17271_19414[(1)] = cljs.core.first((state_17225[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19416 = state_17225;
state_17225 = G__19416;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$state_machine__13411__auto__ = function(state_17225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13411__auto____1.call(this,state_17225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13411__auto____0;
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13411__auto____1;
return cljs$core$async$state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_17272 = f__14564__auto__();
(statearr_17272[(6)] = c__14562__auto___19363);

return statearr_17272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
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
var G__17290 = arguments.length;
switch (G__17290) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14562__auto___19426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_17321){
var state_val_17322 = (state_17321[(1)]);
if((state_val_17322 === (7))){
var inst_17302 = (state_17321[(7)]);
var inst_17302__$1 = (state_17321[(2)]);
var inst_17303 = (inst_17302__$1 == null);
var inst_17304 = cljs.core.not(inst_17303);
var state_17321__$1 = (function (){var statearr_17326 = state_17321;
(statearr_17326[(7)] = inst_17302__$1);

return statearr_17326;
})();
if(inst_17304){
var statearr_17327_19430 = state_17321__$1;
(statearr_17327_19430[(1)] = (8));

} else {
var statearr_17328_19431 = state_17321__$1;
(statearr_17328_19431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (1))){
var inst_17297 = (0);
var state_17321__$1 = (function (){var statearr_17329 = state_17321;
(statearr_17329[(8)] = inst_17297);

return statearr_17329;
})();
var statearr_17330_19432 = state_17321__$1;
(statearr_17330_19432[(2)] = null);

(statearr_17330_19432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (4))){
var state_17321__$1 = state_17321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17321__$1,(7),ch);
} else {
if((state_val_17322 === (6))){
var inst_17316 = (state_17321[(2)]);
var state_17321__$1 = state_17321;
var statearr_17331_19433 = state_17321__$1;
(statearr_17331_19433[(2)] = inst_17316);

(statearr_17331_19433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (3))){
var inst_17318 = (state_17321[(2)]);
var inst_17319 = cljs.core.async.close_BANG_(out);
var state_17321__$1 = (function (){var statearr_17332 = state_17321;
(statearr_17332[(9)] = inst_17318);

return statearr_17332;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17321__$1,inst_17319);
} else {
if((state_val_17322 === (2))){
var inst_17297 = (state_17321[(8)]);
var inst_17299 = (inst_17297 < n);
var state_17321__$1 = state_17321;
if(cljs.core.truth_(inst_17299)){
var statearr_17335_19439 = state_17321__$1;
(statearr_17335_19439[(1)] = (4));

} else {
var statearr_17336_19440 = state_17321__$1;
(statearr_17336_19440[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (11))){
var inst_17297 = (state_17321[(8)]);
var inst_17308 = (state_17321[(2)]);
var inst_17309 = (inst_17297 + (1));
var inst_17297__$1 = inst_17309;
var state_17321__$1 = (function (){var statearr_17337 = state_17321;
(statearr_17337[(10)] = inst_17308);

(statearr_17337[(8)] = inst_17297__$1);

return statearr_17337;
})();
var statearr_17338_19442 = state_17321__$1;
(statearr_17338_19442[(2)] = null);

(statearr_17338_19442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (9))){
var state_17321__$1 = state_17321;
var statearr_17339_19444 = state_17321__$1;
(statearr_17339_19444[(2)] = null);

(statearr_17339_19444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (5))){
var state_17321__$1 = state_17321;
var statearr_17349_19448 = state_17321__$1;
(statearr_17349_19448[(2)] = null);

(statearr_17349_19448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (10))){
var inst_17313 = (state_17321[(2)]);
var state_17321__$1 = state_17321;
var statearr_17354_19449 = state_17321__$1;
(statearr_17354_19449[(2)] = inst_17313);

(statearr_17354_19449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17322 === (8))){
var inst_17302 = (state_17321[(7)]);
var state_17321__$1 = state_17321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17321__$1,(11),out,inst_17302);
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
var cljs$core$async$state_machine__13411__auto__ = null;
var cljs$core$async$state_machine__13411__auto____0 = (function (){
var statearr_17361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17361[(0)] = cljs$core$async$state_machine__13411__auto__);

(statearr_17361[(1)] = (1));

return statearr_17361;
});
var cljs$core$async$state_machine__13411__auto____1 = (function (state_17321){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_17321);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e17362){var ex__13414__auto__ = e17362;
var statearr_17363_19453 = state_17321;
(statearr_17363_19453[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_17321[(4)]))){
var statearr_17364_19454 = state_17321;
(statearr_17364_19454[(1)] = cljs.core.first((state_17321[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19460 = state_17321;
state_17321 = G__19460;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$state_machine__13411__auto__ = function(state_17321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13411__auto____1.call(this,state_17321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13411__auto____0;
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13411__auto____1;
return cljs$core$async$state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_17365 = f__14564__auto__();
(statearr_17365[(6)] = c__14562__auto___19426);

return statearr_17365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
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
cljs.core.async.t_cljs$core$async17407 = (function (f,ch,meta17387,_,fn1,meta17408){
this.f = f;
this.ch = ch;
this.meta17387 = meta17387;
this._ = _;
this.fn1 = fn1;
this.meta17408 = meta17408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17409,meta17408__$1){
var self__ = this;
var _17409__$1 = this;
return (new cljs.core.async.t_cljs$core$async17407(self__.f,self__.ch,self__.meta17387,self__._,self__.fn1,meta17408__$1));
}));

(cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17409){
var self__ = this;
var _17409__$1 = this;
return self__.meta17408;
}));

(cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17385_SHARP_){
var G__17420 = (((p1__17385_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17385_SHARP_) : self__.f.call(null,p1__17385_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17420) : f1.call(null,G__17420));
});
}));

(cljs.core.async.t_cljs$core$async17407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17387","meta17387",-1340022937,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17386","cljs.core.async/t_cljs$core$async17386",528354327,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17408","meta17408",-843726120,null)], null);
}));

(cljs.core.async.t_cljs$core$async17407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17407");

(cljs.core.async.t_cljs$core$async17407.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async17407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17407.
 */
cljs.core.async.__GT_t_cljs$core$async17407 = (function cljs$core$async$__GT_t_cljs$core$async17407(f,ch,meta17387,_,fn1,meta17408){
return (new cljs.core.async.t_cljs$core$async17407(f,ch,meta17387,_,fn1,meta17408));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17386 = (function (f,ch,meta17387){
this.f = f;
this.ch = ch;
this.meta17387 = meta17387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17388,meta17387__$1){
var self__ = this;
var _17388__$1 = this;
return (new cljs.core.async.t_cljs$core$async17386(self__.f,self__.ch,meta17387__$1));
}));

(cljs.core.async.t_cljs$core$async17386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17388){
var self__ = this;
var _17388__$1 = this;
return self__.meta17387;
}));

(cljs.core.async.t_cljs$core$async17386.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17386.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17386.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17407(self__.f,self__.ch,self__.meta17387,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17432 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17432) : self__.f.call(null,G__17432));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17386.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17387","meta17387",-1340022937,null)], null);
}));

(cljs.core.async.t_cljs$core$async17386.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17386");

(cljs.core.async.t_cljs$core$async17386.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async17386");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17386.
 */
cljs.core.async.__GT_t_cljs$core$async17386 = (function cljs$core$async$__GT_t_cljs$core$async17386(f,ch,meta17387){
return (new cljs.core.async.t_cljs$core$async17386(f,ch,meta17387));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17386(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17433 = (function (f,ch,meta17434){
this.f = f;
this.ch = ch;
this.meta17434 = meta17434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17435,meta17434__$1){
var self__ = this;
var _17435__$1 = this;
return (new cljs.core.async.t_cljs$core$async17433(self__.f,self__.ch,meta17434__$1));
}));

(cljs.core.async.t_cljs$core$async17433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17435){
var self__ = this;
var _17435__$1 = this;
return self__.meta17434;
}));

(cljs.core.async.t_cljs$core$async17433.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17433.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17433.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17433.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17433.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17433.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17434","meta17434",-86650090,null)], null);
}));

(cljs.core.async.t_cljs$core$async17433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17433");

(cljs.core.async.t_cljs$core$async17433.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async17433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17433.
 */
cljs.core.async.__GT_t_cljs$core$async17433 = (function cljs$core$async$__GT_t_cljs$core$async17433(f,ch,meta17434){
return (new cljs.core.async.t_cljs$core$async17433(f,ch,meta17434));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17433(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17456 = (function (p,ch,meta17457){
this.p = p;
this.ch = ch;
this.meta17457 = meta17457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17458,meta17457__$1){
var self__ = this;
var _17458__$1 = this;
return (new cljs.core.async.t_cljs$core$async17456(self__.p,self__.ch,meta17457__$1));
}));

(cljs.core.async.t_cljs$core$async17456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17458){
var self__ = this;
var _17458__$1 = this;
return self__.meta17457;
}));

(cljs.core.async.t_cljs$core$async17456.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17456.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17456.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17456.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17456.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17456.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17456.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17457","meta17457",1970422534,null)], null);
}));

(cljs.core.async.t_cljs$core$async17456.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17456");

(cljs.core.async.t_cljs$core$async17456.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async17456");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17456.
 */
cljs.core.async.__GT_t_cljs$core$async17456 = (function cljs$core$async$__GT_t_cljs$core$async17456(p,ch,meta17457){
return (new cljs.core.async.t_cljs$core$async17456(p,ch,meta17457));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17456(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17476 = arguments.length;
switch (G__17476) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14562__auto___19518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_17504){
var state_val_17505 = (state_17504[(1)]);
if((state_val_17505 === (7))){
var inst_17500 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17510_19520 = state_17504__$1;
(statearr_17510_19520[(2)] = inst_17500);

(statearr_17510_19520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (1))){
var state_17504__$1 = state_17504;
var statearr_17513_19522 = state_17504__$1;
(statearr_17513_19522[(2)] = null);

(statearr_17513_19522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (4))){
var inst_17486 = (state_17504[(7)]);
var inst_17486__$1 = (state_17504[(2)]);
var inst_17487 = (inst_17486__$1 == null);
var state_17504__$1 = (function (){var statearr_17517 = state_17504;
(statearr_17517[(7)] = inst_17486__$1);

return statearr_17517;
})();
if(cljs.core.truth_(inst_17487)){
var statearr_17527_19527 = state_17504__$1;
(statearr_17527_19527[(1)] = (5));

} else {
var statearr_17528_19532 = state_17504__$1;
(statearr_17528_19532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (6))){
var inst_17486 = (state_17504[(7)]);
var inst_17491 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17486) : p.call(null,inst_17486));
var state_17504__$1 = state_17504;
if(cljs.core.truth_(inst_17491)){
var statearr_17529_19536 = state_17504__$1;
(statearr_17529_19536[(1)] = (8));

} else {
var statearr_17530_19538 = state_17504__$1;
(statearr_17530_19538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (3))){
var inst_17502 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17504__$1,inst_17502);
} else {
if((state_val_17505 === (2))){
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17504__$1,(4),ch);
} else {
if((state_val_17505 === (11))){
var inst_17494 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17535_19540 = state_17504__$1;
(statearr_17535_19540[(2)] = inst_17494);

(statearr_17535_19540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (9))){
var state_17504__$1 = state_17504;
var statearr_17538_19545 = state_17504__$1;
(statearr_17538_19545[(2)] = null);

(statearr_17538_19545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (5))){
var inst_17489 = cljs.core.async.close_BANG_(out);
var state_17504__$1 = state_17504;
var statearr_17539_19546 = state_17504__$1;
(statearr_17539_19546[(2)] = inst_17489);

(statearr_17539_19546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (10))){
var inst_17497 = (state_17504[(2)]);
var state_17504__$1 = (function (){var statearr_17540 = state_17504;
(statearr_17540[(8)] = inst_17497);

return statearr_17540;
})();
var statearr_17544_19547 = state_17504__$1;
(statearr_17544_19547[(2)] = null);

(statearr_17544_19547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (8))){
var inst_17486 = (state_17504[(7)]);
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17504__$1,(11),out,inst_17486);
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
var cljs$core$async$state_machine__13411__auto__ = null;
var cljs$core$async$state_machine__13411__auto____0 = (function (){
var statearr_17547 = [null,null,null,null,null,null,null,null,null];
(statearr_17547[(0)] = cljs$core$async$state_machine__13411__auto__);

(statearr_17547[(1)] = (1));

return statearr_17547;
});
var cljs$core$async$state_machine__13411__auto____1 = (function (state_17504){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_17504);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e17552){var ex__13414__auto__ = e17552;
var statearr_17553_19557 = state_17504;
(statearr_17553_19557[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_17504[(4)]))){
var statearr_17558_19559 = state_17504;
(statearr_17558_19559[(1)] = cljs.core.first((state_17504[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19560 = state_17504;
state_17504 = G__19560;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$state_machine__13411__auto__ = function(state_17504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13411__auto____1.call(this,state_17504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13411__auto____0;
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13411__auto____1;
return cljs$core$async$state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_17563 = f__14564__auto__();
(statearr_17563[(6)] = c__14562__auto___19518);

return statearr_17563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17581 = arguments.length;
switch (G__17581) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var c__14562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_17702){
var state_val_17703 = (state_17702[(1)]);
if((state_val_17703 === (7))){
var inst_17698 = (state_17702[(2)]);
var state_17702__$1 = state_17702;
var statearr_17709_19566 = state_17702__$1;
(statearr_17709_19566[(2)] = inst_17698);

(statearr_17709_19566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (20))){
var inst_17664 = (state_17702[(7)]);
var inst_17679 = (state_17702[(2)]);
var inst_17680 = cljs.core.next(inst_17664);
var inst_17602 = inst_17680;
var inst_17603 = null;
var inst_17604 = (0);
var inst_17646 = (0);
var state_17702__$1 = (function (){var statearr_17710 = state_17702;
(statearr_17710[(8)] = inst_17679);

(statearr_17710[(9)] = inst_17602);

(statearr_17710[(10)] = inst_17603);

(statearr_17710[(11)] = inst_17604);

(statearr_17710[(12)] = inst_17646);

return statearr_17710;
})();
var statearr_17720_19573 = state_17702__$1;
(statearr_17720_19573[(2)] = null);

(statearr_17720_19573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (1))){
var state_17702__$1 = state_17702;
var statearr_17721_19576 = state_17702__$1;
(statearr_17721_19576[(2)] = null);

(statearr_17721_19576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (4))){
var inst_17591 = (state_17702[(13)]);
var inst_17591__$1 = (state_17702[(2)]);
var inst_17592 = (inst_17591__$1 == null);
var state_17702__$1 = (function (){var statearr_17726 = state_17702;
(statearr_17726[(13)] = inst_17591__$1);

return statearr_17726;
})();
if(cljs.core.truth_(inst_17592)){
var statearr_17727_19578 = state_17702__$1;
(statearr_17727_19578[(1)] = (5));

} else {
var statearr_17728_19579 = state_17702__$1;
(statearr_17728_19579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (15))){
var state_17702__$1 = state_17702;
var statearr_17734_19584 = state_17702__$1;
(statearr_17734_19584[(2)] = null);

(statearr_17734_19584[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (21))){
var state_17702__$1 = state_17702;
var statearr_17735_19588 = state_17702__$1;
(statearr_17735_19588[(2)] = null);

(statearr_17735_19588[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (13))){
var inst_17646 = (state_17702[(12)]);
var inst_17602 = (state_17702[(9)]);
var inst_17603 = (state_17702[(10)]);
var inst_17604 = (state_17702[(11)]);
var inst_17658 = (state_17702[(2)]);
var inst_17659 = (inst_17646 + (1));
var tmp17731 = inst_17603;
var tmp17732 = inst_17604;
var tmp17733 = inst_17602;
var inst_17602__$1 = tmp17733;
var inst_17603__$1 = tmp17731;
var inst_17604__$1 = tmp17732;
var inst_17646__$1 = inst_17659;
var state_17702__$1 = (function (){var statearr_17739 = state_17702;
(statearr_17739[(14)] = inst_17658);

(statearr_17739[(9)] = inst_17602__$1);

(statearr_17739[(10)] = inst_17603__$1);

(statearr_17739[(11)] = inst_17604__$1);

(statearr_17739[(12)] = inst_17646__$1);

return statearr_17739;
})();
var statearr_17743_19592 = state_17702__$1;
(statearr_17743_19592[(2)] = null);

(statearr_17743_19592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (22))){
var state_17702__$1 = state_17702;
var statearr_17746_19599 = state_17702__$1;
(statearr_17746_19599[(2)] = null);

(statearr_17746_19599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (6))){
var inst_17591 = (state_17702[(13)]);
var inst_17600 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17591) : f.call(null,inst_17591));
var inst_17601 = cljs.core.seq(inst_17600);
var inst_17602 = inst_17601;
var inst_17603 = null;
var inst_17604 = (0);
var inst_17646 = (0);
var state_17702__$1 = (function (){var statearr_17750 = state_17702;
(statearr_17750[(9)] = inst_17602);

(statearr_17750[(10)] = inst_17603);

(statearr_17750[(11)] = inst_17604);

(statearr_17750[(12)] = inst_17646);

return statearr_17750;
})();
var statearr_17751_19610 = state_17702__$1;
(statearr_17751_19610[(2)] = null);

(statearr_17751_19610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (17))){
var inst_17664 = (state_17702[(7)]);
var inst_17672 = cljs.core.chunk_first(inst_17664);
var inst_17673 = cljs.core.chunk_rest(inst_17664);
var inst_17674 = cljs.core.count(inst_17672);
var inst_17602 = inst_17673;
var inst_17603 = inst_17672;
var inst_17604 = inst_17674;
var inst_17646 = (0);
var state_17702__$1 = (function (){var statearr_17753 = state_17702;
(statearr_17753[(9)] = inst_17602);

(statearr_17753[(10)] = inst_17603);

(statearr_17753[(11)] = inst_17604);

(statearr_17753[(12)] = inst_17646);

return statearr_17753;
})();
var statearr_17755_19616 = state_17702__$1;
(statearr_17755_19616[(2)] = null);

(statearr_17755_19616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (3))){
var inst_17700 = (state_17702[(2)]);
var state_17702__$1 = state_17702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17702__$1,inst_17700);
} else {
if((state_val_17703 === (12))){
var inst_17688 = (state_17702[(2)]);
var state_17702__$1 = state_17702;
var statearr_17763_19620 = state_17702__$1;
(statearr_17763_19620[(2)] = inst_17688);

(statearr_17763_19620[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (2))){
var state_17702__$1 = state_17702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17702__$1,(4),in$);
} else {
if((state_val_17703 === (23))){
var inst_17696 = (state_17702[(2)]);
var state_17702__$1 = state_17702;
var statearr_17764_19629 = state_17702__$1;
(statearr_17764_19629[(2)] = inst_17696);

(statearr_17764_19629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (19))){
var inst_17683 = (state_17702[(2)]);
var state_17702__$1 = state_17702;
var statearr_17765_19632 = state_17702__$1;
(statearr_17765_19632[(2)] = inst_17683);

(statearr_17765_19632[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (11))){
var inst_17602 = (state_17702[(9)]);
var inst_17664 = (state_17702[(7)]);
var inst_17664__$1 = cljs.core.seq(inst_17602);
var state_17702__$1 = (function (){var statearr_17766 = state_17702;
(statearr_17766[(7)] = inst_17664__$1);

return statearr_17766;
})();
if(inst_17664__$1){
var statearr_17767_19633 = state_17702__$1;
(statearr_17767_19633[(1)] = (14));

} else {
var statearr_17768_19637 = state_17702__$1;
(statearr_17768_19637[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (9))){
var inst_17690 = (state_17702[(2)]);
var inst_17691 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17702__$1 = (function (){var statearr_17771 = state_17702;
(statearr_17771[(15)] = inst_17690);

return statearr_17771;
})();
if(cljs.core.truth_(inst_17691)){
var statearr_17772_19644 = state_17702__$1;
(statearr_17772_19644[(1)] = (21));

} else {
var statearr_17774_19645 = state_17702__$1;
(statearr_17774_19645[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (5))){
var inst_17594 = cljs.core.async.close_BANG_(out);
var state_17702__$1 = state_17702;
var statearr_17775_19647 = state_17702__$1;
(statearr_17775_19647[(2)] = inst_17594);

(statearr_17775_19647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (14))){
var inst_17664 = (state_17702[(7)]);
var inst_17668 = cljs.core.chunked_seq_QMARK_(inst_17664);
var state_17702__$1 = state_17702;
if(inst_17668){
var statearr_17776_19648 = state_17702__$1;
(statearr_17776_19648[(1)] = (17));

} else {
var statearr_17777_19649 = state_17702__$1;
(statearr_17777_19649[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (16))){
var inst_17686 = (state_17702[(2)]);
var state_17702__$1 = state_17702;
var statearr_17785_19652 = state_17702__$1;
(statearr_17785_19652[(2)] = inst_17686);

(statearr_17785_19652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17703 === (10))){
var inst_17603 = (state_17702[(10)]);
var inst_17646 = (state_17702[(12)]);
var inst_17655 = cljs.core._nth(inst_17603,inst_17646);
var state_17702__$1 = state_17702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17702__$1,(13),out,inst_17655);
} else {
if((state_val_17703 === (18))){
var inst_17664 = (state_17702[(7)]);
var inst_17677 = cljs.core.first(inst_17664);
var state_17702__$1 = state_17702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17702__$1,(20),out,inst_17677);
} else {
if((state_val_17703 === (8))){
var inst_17646 = (state_17702[(12)]);
var inst_17604 = (state_17702[(11)]);
var inst_17651 = (inst_17646 < inst_17604);
var inst_17652 = inst_17651;
var state_17702__$1 = state_17702;
if(cljs.core.truth_(inst_17652)){
var statearr_17786_19663 = state_17702__$1;
(statearr_17786_19663[(1)] = (10));

} else {
var statearr_17787_19665 = state_17702__$1;
(statearr_17787_19665[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13411__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13411__auto____0 = (function (){
var statearr_17792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17792[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13411__auto__);

(statearr_17792[(1)] = (1));

return statearr_17792;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13411__auto____1 = (function (state_17702){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_17702);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e17793){var ex__13414__auto__ = e17793;
var statearr_17794_19667 = state_17702;
(statearr_17794_19667[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_17702[(4)]))){
var statearr_17795_19668 = state_17702;
(statearr_17795_19668[(1)] = cljs.core.first((state_17702[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19669 = state_17702;
state_17702 = G__19669;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13411__auto__ = function(state_17702){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13411__auto____1.call(this,state_17702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13411__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13411__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_17796 = f__14564__auto__();
(statearr_17796[(6)] = c__14562__auto__);

return statearr_17796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
}));

return c__14562__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17801 = arguments.length;
switch (G__17801) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__17811 = arguments.length;
switch (G__17811) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__17824 = arguments.length;
switch (G__17824) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14562__auto___19686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_17853){
var state_val_17854 = (state_17853[(1)]);
if((state_val_17854 === (7))){
var inst_17848 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
var statearr_17855_19687 = state_17853__$1;
(statearr_17855_19687[(2)] = inst_17848);

(statearr_17855_19687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (1))){
var inst_17830 = null;
var state_17853__$1 = (function (){var statearr_17856 = state_17853;
(statearr_17856[(7)] = inst_17830);

return statearr_17856;
})();
var statearr_17857_19689 = state_17853__$1;
(statearr_17857_19689[(2)] = null);

(statearr_17857_19689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (4))){
var inst_17833 = (state_17853[(8)]);
var inst_17833__$1 = (state_17853[(2)]);
var inst_17834 = (inst_17833__$1 == null);
var inst_17835 = cljs.core.not(inst_17834);
var state_17853__$1 = (function (){var statearr_17866 = state_17853;
(statearr_17866[(8)] = inst_17833__$1);

return statearr_17866;
})();
if(inst_17835){
var statearr_17867_19692 = state_17853__$1;
(statearr_17867_19692[(1)] = (5));

} else {
var statearr_17868_19693 = state_17853__$1;
(statearr_17868_19693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (6))){
var state_17853__$1 = state_17853;
var statearr_17869_19695 = state_17853__$1;
(statearr_17869_19695[(2)] = null);

(statearr_17869_19695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (3))){
var inst_17850 = (state_17853[(2)]);
var inst_17851 = cljs.core.async.close_BANG_(out);
var state_17853__$1 = (function (){var statearr_17874 = state_17853;
(statearr_17874[(9)] = inst_17850);

return statearr_17874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17853__$1,inst_17851);
} else {
if((state_val_17854 === (2))){
var state_17853__$1 = state_17853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17853__$1,(4),ch);
} else {
if((state_val_17854 === (11))){
var inst_17833 = (state_17853[(8)]);
var inst_17842 = (state_17853[(2)]);
var inst_17830 = inst_17833;
var state_17853__$1 = (function (){var statearr_17876 = state_17853;
(statearr_17876[(10)] = inst_17842);

(statearr_17876[(7)] = inst_17830);

return statearr_17876;
})();
var statearr_17877_19698 = state_17853__$1;
(statearr_17877_19698[(2)] = null);

(statearr_17877_19698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (9))){
var inst_17833 = (state_17853[(8)]);
var state_17853__$1 = state_17853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17853__$1,(11),out,inst_17833);
} else {
if((state_val_17854 === (5))){
var inst_17833 = (state_17853[(8)]);
var inst_17830 = (state_17853[(7)]);
var inst_17837 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17833,inst_17830);
var state_17853__$1 = state_17853;
if(inst_17837){
var statearr_17880_19701 = state_17853__$1;
(statearr_17880_19701[(1)] = (8));

} else {
var statearr_17881_19702 = state_17853__$1;
(statearr_17881_19702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (10))){
var inst_17845 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
var statearr_17882_19705 = state_17853__$1;
(statearr_17882_19705[(2)] = inst_17845);

(statearr_17882_19705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (8))){
var inst_17830 = (state_17853[(7)]);
var tmp17879 = inst_17830;
var inst_17830__$1 = tmp17879;
var state_17853__$1 = (function (){var statearr_17884 = state_17853;
(statearr_17884[(7)] = inst_17830__$1);

return statearr_17884;
})();
var statearr_17890_19710 = state_17853__$1;
(statearr_17890_19710[(2)] = null);

(statearr_17890_19710[(1)] = (2));


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
var cljs$core$async$state_machine__13411__auto__ = null;
var cljs$core$async$state_machine__13411__auto____0 = (function (){
var statearr_17898 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17898[(0)] = cljs$core$async$state_machine__13411__auto__);

(statearr_17898[(1)] = (1));

return statearr_17898;
});
var cljs$core$async$state_machine__13411__auto____1 = (function (state_17853){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_17853);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e17899){var ex__13414__auto__ = e17899;
var statearr_17900_19714 = state_17853;
(statearr_17900_19714[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_17853[(4)]))){
var statearr_17902_19715 = state_17853;
(statearr_17902_19715[(1)] = cljs.core.first((state_17853[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19716 = state_17853;
state_17853 = G__19716;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$state_machine__13411__auto__ = function(state_17853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13411__auto____1.call(this,state_17853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13411__auto____0;
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13411__auto____1;
return cljs$core$async$state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_17906 = f__14564__auto__();
(statearr_17906[(6)] = c__14562__auto___19686);

return statearr_17906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17917 = arguments.length;
switch (G__17917) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14562__auto___19726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_17986){
var state_val_17987 = (state_17986[(1)]);
if((state_val_17987 === (7))){
var inst_17976 = (state_17986[(2)]);
var state_17986__$1 = state_17986;
var statearr_18008_19727 = state_17986__$1;
(statearr_18008_19727[(2)] = inst_17976);

(statearr_18008_19727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (1))){
var inst_17929 = (new Array(n));
var inst_17930 = inst_17929;
var inst_17931 = (0);
var state_17986__$1 = (function (){var statearr_18020 = state_17986;
(statearr_18020[(7)] = inst_17930);

(statearr_18020[(8)] = inst_17931);

return statearr_18020;
})();
var statearr_18024_19730 = state_17986__$1;
(statearr_18024_19730[(2)] = null);

(statearr_18024_19730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (4))){
var inst_17934 = (state_17986[(9)]);
var inst_17934__$1 = (state_17986[(2)]);
var inst_17935 = (inst_17934__$1 == null);
var inst_17936 = cljs.core.not(inst_17935);
var state_17986__$1 = (function (){var statearr_18025 = state_17986;
(statearr_18025[(9)] = inst_17934__$1);

return statearr_18025;
})();
if(inst_17936){
var statearr_18026_19735 = state_17986__$1;
(statearr_18026_19735[(1)] = (5));

} else {
var statearr_18027_19736 = state_17986__$1;
(statearr_18027_19736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (15))){
var inst_17967 = (state_17986[(2)]);
var state_17986__$1 = state_17986;
var statearr_18029_19737 = state_17986__$1;
(statearr_18029_19737[(2)] = inst_17967);

(statearr_18029_19737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (13))){
var state_17986__$1 = state_17986;
var statearr_18031_19738 = state_17986__$1;
(statearr_18031_19738[(2)] = null);

(statearr_18031_19738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (6))){
var inst_17931 = (state_17986[(8)]);
var inst_17960 = (inst_17931 > (0));
var state_17986__$1 = state_17986;
if(cljs.core.truth_(inst_17960)){
var statearr_18032_19740 = state_17986__$1;
(statearr_18032_19740[(1)] = (12));

} else {
var statearr_18033_19741 = state_17986__$1;
(statearr_18033_19741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (3))){
var inst_17978 = (state_17986[(2)]);
var state_17986__$1 = state_17986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17986__$1,inst_17978);
} else {
if((state_val_17987 === (12))){
var inst_17930 = (state_17986[(7)]);
var inst_17965 = cljs.core.vec(inst_17930);
var state_17986__$1 = state_17986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17986__$1,(15),out,inst_17965);
} else {
if((state_val_17987 === (2))){
var state_17986__$1 = state_17986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17986__$1,(4),ch);
} else {
if((state_val_17987 === (11))){
var inst_17947 = (state_17986[(2)]);
var inst_17952 = (new Array(n));
var inst_17930 = inst_17952;
var inst_17931 = (0);
var state_17986__$1 = (function (){var statearr_18042 = state_17986;
(statearr_18042[(10)] = inst_17947);

(statearr_18042[(7)] = inst_17930);

(statearr_18042[(8)] = inst_17931);

return statearr_18042;
})();
var statearr_18043_19748 = state_17986__$1;
(statearr_18043_19748[(2)] = null);

(statearr_18043_19748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (9))){
var inst_17930 = (state_17986[(7)]);
var inst_17945 = cljs.core.vec(inst_17930);
var state_17986__$1 = state_17986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17986__$1,(11),out,inst_17945);
} else {
if((state_val_17987 === (5))){
var inst_17930 = (state_17986[(7)]);
var inst_17931 = (state_17986[(8)]);
var inst_17934 = (state_17986[(9)]);
var inst_17940 = (state_17986[(11)]);
var inst_17938 = (inst_17930[inst_17931] = inst_17934);
var inst_17940__$1 = (inst_17931 + (1));
var inst_17941 = (inst_17940__$1 < n);
var state_17986__$1 = (function (){var statearr_18044 = state_17986;
(statearr_18044[(12)] = inst_17938);

(statearr_18044[(11)] = inst_17940__$1);

return statearr_18044;
})();
if(cljs.core.truth_(inst_17941)){
var statearr_18045_19752 = state_17986__$1;
(statearr_18045_19752[(1)] = (8));

} else {
var statearr_18046_19753 = state_17986__$1;
(statearr_18046_19753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (14))){
var inst_17970 = (state_17986[(2)]);
var inst_17973 = cljs.core.async.close_BANG_(out);
var state_17986__$1 = (function (){var statearr_18048 = state_17986;
(statearr_18048[(13)] = inst_17970);

return statearr_18048;
})();
var statearr_18050_19756 = state_17986__$1;
(statearr_18050_19756[(2)] = inst_17973);

(statearr_18050_19756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (10))){
var inst_17955 = (state_17986[(2)]);
var state_17986__$1 = state_17986;
var statearr_18055_19760 = state_17986__$1;
(statearr_18055_19760[(2)] = inst_17955);

(statearr_18055_19760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17987 === (8))){
var inst_17930 = (state_17986[(7)]);
var inst_17940 = (state_17986[(11)]);
var tmp18047 = inst_17930;
var inst_17930__$1 = tmp18047;
var inst_17931 = inst_17940;
var state_17986__$1 = (function (){var statearr_18056 = state_17986;
(statearr_18056[(7)] = inst_17930__$1);

(statearr_18056[(8)] = inst_17931);

return statearr_18056;
})();
var statearr_18059_19762 = state_17986__$1;
(statearr_18059_19762[(2)] = null);

(statearr_18059_19762[(1)] = (2));


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
var cljs$core$async$state_machine__13411__auto__ = null;
var cljs$core$async$state_machine__13411__auto____0 = (function (){
var statearr_18066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18066[(0)] = cljs$core$async$state_machine__13411__auto__);

(statearr_18066[(1)] = (1));

return statearr_18066;
});
var cljs$core$async$state_machine__13411__auto____1 = (function (state_17986){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_17986);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e18070){var ex__13414__auto__ = e18070;
var statearr_18077_19764 = state_17986;
(statearr_18077_19764[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_17986[(4)]))){
var statearr_18078_19766 = state_17986;
(statearr_18078_19766[(1)] = cljs.core.first((state_17986[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19769 = state_17986;
state_17986 = G__19769;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$state_machine__13411__auto__ = function(state_17986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13411__auto____1.call(this,state_17986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13411__auto____0;
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13411__auto____1;
return cljs$core$async$state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_18079 = f__14564__auto__();
(statearr_18079[(6)] = c__14562__auto___19726);

return statearr_18079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18082 = arguments.length;
switch (G__18082) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14562__auto___19777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14564__auto__ = (function (){var switch__13410__auto__ = (function (state_18144){
var state_val_18145 = (state_18144[(1)]);
if((state_val_18145 === (7))){
var inst_18140 = (state_18144[(2)]);
var state_18144__$1 = state_18144;
var statearr_18146_19783 = state_18144__$1;
(statearr_18146_19783[(2)] = inst_18140);

(statearr_18146_19783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (1))){
var inst_18088 = [];
var inst_18089 = inst_18088;
var inst_18090 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18144__$1 = (function (){var statearr_18147 = state_18144;
(statearr_18147[(7)] = inst_18089);

(statearr_18147[(8)] = inst_18090);

return statearr_18147;
})();
var statearr_18148_19787 = state_18144__$1;
(statearr_18148_19787[(2)] = null);

(statearr_18148_19787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (4))){
var inst_18093 = (state_18144[(9)]);
var inst_18093__$1 = (state_18144[(2)]);
var inst_18094 = (inst_18093__$1 == null);
var inst_18095 = cljs.core.not(inst_18094);
var state_18144__$1 = (function (){var statearr_18149 = state_18144;
(statearr_18149[(9)] = inst_18093__$1);

return statearr_18149;
})();
if(inst_18095){
var statearr_18150_19790 = state_18144__$1;
(statearr_18150_19790[(1)] = (5));

} else {
var statearr_18151_19791 = state_18144__$1;
(statearr_18151_19791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (15))){
var inst_18089 = (state_18144[(7)]);
var inst_18132 = cljs.core.vec(inst_18089);
var state_18144__$1 = state_18144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18144__$1,(18),out,inst_18132);
} else {
if((state_val_18145 === (13))){
var inst_18127 = (state_18144[(2)]);
var state_18144__$1 = state_18144;
var statearr_18152_19796 = state_18144__$1;
(statearr_18152_19796[(2)] = inst_18127);

(statearr_18152_19796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (6))){
var inst_18089 = (state_18144[(7)]);
var inst_18129 = inst_18089.length;
var inst_18130 = (inst_18129 > (0));
var state_18144__$1 = state_18144;
if(cljs.core.truth_(inst_18130)){
var statearr_18156_19802 = state_18144__$1;
(statearr_18156_19802[(1)] = (15));

} else {
var statearr_18157_19803 = state_18144__$1;
(statearr_18157_19803[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (17))){
var inst_18137 = (state_18144[(2)]);
var inst_18138 = cljs.core.async.close_BANG_(out);
var state_18144__$1 = (function (){var statearr_18166 = state_18144;
(statearr_18166[(10)] = inst_18137);

return statearr_18166;
})();
var statearr_18167_19808 = state_18144__$1;
(statearr_18167_19808[(2)] = inst_18138);

(statearr_18167_19808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (3))){
var inst_18142 = (state_18144[(2)]);
var state_18144__$1 = state_18144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18144__$1,inst_18142);
} else {
if((state_val_18145 === (12))){
var inst_18089 = (state_18144[(7)]);
var inst_18116 = cljs.core.vec(inst_18089);
var state_18144__$1 = state_18144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18144__$1,(14),out,inst_18116);
} else {
if((state_val_18145 === (2))){
var state_18144__$1 = state_18144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18144__$1,(4),ch);
} else {
if((state_val_18145 === (11))){
var inst_18089 = (state_18144[(7)]);
var inst_18093 = (state_18144[(9)]);
var inst_18097 = (state_18144[(11)]);
var inst_18113 = inst_18089.push(inst_18093);
var tmp18169 = inst_18089;
var inst_18089__$1 = tmp18169;
var inst_18090 = inst_18097;
var state_18144__$1 = (function (){var statearr_18170 = state_18144;
(statearr_18170[(12)] = inst_18113);

(statearr_18170[(7)] = inst_18089__$1);

(statearr_18170[(8)] = inst_18090);

return statearr_18170;
})();
var statearr_18172_19830 = state_18144__$1;
(statearr_18172_19830[(2)] = null);

(statearr_18172_19830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (9))){
var inst_18090 = (state_18144[(8)]);
var inst_18105 = cljs.core.keyword_identical_QMARK_(inst_18090,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18144__$1 = state_18144;
var statearr_18175_19837 = state_18144__$1;
(statearr_18175_19837[(2)] = inst_18105);

(statearr_18175_19837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (5))){
var inst_18093 = (state_18144[(9)]);
var inst_18097 = (state_18144[(11)]);
var inst_18090 = (state_18144[(8)]);
var inst_18102 = (state_18144[(13)]);
var inst_18097__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18093) : f.call(null,inst_18093));
var inst_18102__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18097__$1,inst_18090);
var state_18144__$1 = (function (){var statearr_18179 = state_18144;
(statearr_18179[(11)] = inst_18097__$1);

(statearr_18179[(13)] = inst_18102__$1);

return statearr_18179;
})();
if(inst_18102__$1){
var statearr_18184_19844 = state_18144__$1;
(statearr_18184_19844[(1)] = (8));

} else {
var statearr_18185_19845 = state_18144__$1;
(statearr_18185_19845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (14))){
var inst_18093 = (state_18144[(9)]);
var inst_18097 = (state_18144[(11)]);
var inst_18118 = (state_18144[(2)]);
var inst_18123 = [];
var inst_18124 = inst_18123.push(inst_18093);
var inst_18089 = inst_18123;
var inst_18090 = inst_18097;
var state_18144__$1 = (function (){var statearr_18186 = state_18144;
(statearr_18186[(14)] = inst_18118);

(statearr_18186[(15)] = inst_18124);

(statearr_18186[(7)] = inst_18089);

(statearr_18186[(8)] = inst_18090);

return statearr_18186;
})();
var statearr_18187_19849 = state_18144__$1;
(statearr_18187_19849[(2)] = null);

(statearr_18187_19849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (16))){
var state_18144__$1 = state_18144;
var statearr_18190_19853 = state_18144__$1;
(statearr_18190_19853[(2)] = null);

(statearr_18190_19853[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (10))){
var inst_18108 = (state_18144[(2)]);
var state_18144__$1 = state_18144;
if(cljs.core.truth_(inst_18108)){
var statearr_18194_19854 = state_18144__$1;
(statearr_18194_19854[(1)] = (11));

} else {
var statearr_18195_19855 = state_18144__$1;
(statearr_18195_19855[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (18))){
var inst_18134 = (state_18144[(2)]);
var state_18144__$1 = state_18144;
var statearr_18196_19858 = state_18144__$1;
(statearr_18196_19858[(2)] = inst_18134);

(statearr_18196_19858[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (8))){
var inst_18102 = (state_18144[(13)]);
var state_18144__$1 = state_18144;
var statearr_18197_19862 = state_18144__$1;
(statearr_18197_19862[(2)] = inst_18102);

(statearr_18197_19862[(1)] = (10));


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
var cljs$core$async$state_machine__13411__auto__ = null;
var cljs$core$async$state_machine__13411__auto____0 = (function (){
var statearr_18198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18198[(0)] = cljs$core$async$state_machine__13411__auto__);

(statearr_18198[(1)] = (1));

return statearr_18198;
});
var cljs$core$async$state_machine__13411__auto____1 = (function (state_18144){
while(true){
var ret_value__13412__auto__ = (function (){try{while(true){
var result__13413__auto__ = switch__13410__auto__(state_18144);
if(cljs.core.keyword_identical_QMARK_(result__13413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13413__auto__;
}
break;
}
}catch (e18199){var ex__13414__auto__ = e18199;
var statearr_18200_19869 = state_18144;
(statearr_18200_19869[(2)] = ex__13414__auto__);


if(cljs.core.seq((state_18144[(4)]))){
var statearr_18201_19870 = state_18144;
(statearr_18201_19870[(1)] = cljs.core.first((state_18144[(4)])));

} else {
throw ex__13414__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19871 = state_18144;
state_18144 = G__19871;
continue;
} else {
return ret_value__13412__auto__;
}
break;
}
});
cljs$core$async$state_machine__13411__auto__ = function(state_18144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13411__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13411__auto____1.call(this,state_18144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13411__auto____0;
cljs$core$async$state_machine__13411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13411__auto____1;
return cljs$core$async$state_machine__13411__auto__;
})()
})();
var state__14565__auto__ = (function (){var statearr_18202 = f__14564__auto__();
(statearr_18202[(6)] = c__14562__auto___19777);

return statearr_18202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14565__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
