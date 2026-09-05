goog.provide('ajax.protocols');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 * @interface
 */
ajax.protocols.AjaxImpl = function(){};

var ajax$protocols$AjaxImpl$_js_ajax_request$dyn_23093 = (function (this$,request,handler){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (ajax.protocols._js_ajax_request[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,request,handler) : m__5520__auto__.call(null,this$,request,handler));
} else {
var m__5518__auto__ = (ajax.protocols._js_ajax_request["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,request,handler) : m__5518__auto__.call(null,this$,request,handler));
} else {
throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
});
/**
 * Makes an actual ajax request.  All parameters except opts
 *   are in JS format.  Should return an AjaxRequest.
 */
ajax.protocols._js_ajax_request = (function ajax$protocols$_js_ajax_request(this$,request,handler){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 == null)))))){
return this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3(this$,request,handler);
} else {
return ajax$protocols$AjaxImpl$_js_ajax_request$dyn_23093(this$,request,handler);
}
});


/**
 * An abstraction for a running ajax request.
 * @interface
 */
ajax.protocols.AjaxRequest = function(){};

var ajax$protocols$AjaxRequest$_abort$dyn_23099 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (ajax.protocols._abort[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (ajax.protocols._abort["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxRequest.-abort",this$);
}
}
});
/**
 * Aborts a running ajax request, if possible.
 */
ajax.protocols._abort = (function ajax$protocols$_abort(this$){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxRequest$_abort$arity$1 == null)))))){
return this$.ajax$protocols$AjaxRequest$_abort$arity$1(this$);
} else {
return ajax$protocols$AjaxRequest$_abort$dyn_23099(this$);
}
});


/**
 * An abstraction for an ajax response.
 * @interface
 */
ajax.protocols.AjaxResponse = function(){};

var ajax$protocols$AjaxResponse$_status$dyn_23104 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (ajax.protocols._status[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (ajax.protocols._status["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status",this$);
}
}
});
/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.protocols._status = (function ajax$protocols$_status(this$){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxResponse$_status$arity$1 == null)))))){
return this$.ajax$protocols$AjaxResponse$_status$arity$1(this$);
} else {
return ajax$protocols$AjaxResponse$_status$dyn_23104(this$);
}
});

var ajax$protocols$AjaxResponse$_status_text$dyn_23107 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (ajax.protocols._status_text[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (ajax.protocols._status_text["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status-text",this$);
}
}
});
/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.protocols._status_text = (function ajax$protocols$_status_text(this$){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxResponse$_status_text$arity$1 == null)))))){
return this$.ajax$protocols$AjaxResponse$_status_text$arity$1(this$);
} else {
return ajax$protocols$AjaxResponse$_status_text$dyn_23107(this$);
}
});

var ajax$protocols$AjaxResponse$_get_all_headers$dyn_23108 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (ajax.protocols._get_all_headers[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (ajax.protocols._get_all_headers["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-get-all-headers",this$);
}
}
});
/**
 * Returns all headers as a map.
 */
ajax.protocols._get_all_headers = (function ajax$protocols$_get_all_headers(this$){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 == null)))))){
return this$.ajax$protocols$AjaxResponse$_get_all_headers$arity$1(this$);
} else {
return ajax$protocols$AjaxResponse$_get_all_headers$dyn_23108(this$);
}
});

var ajax$protocols$AjaxResponse$_body$dyn_23112 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (ajax.protocols._body[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (ajax.protocols._body["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-body",this$);
}
}
});
/**
 * Returns the response body as a string or as type specified in response-format such as a blob or arraybuffer.
 */
ajax.protocols._body = (function ajax$protocols$_body(this$){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxResponse$_body$arity$1 == null)))))){
return this$.ajax$protocols$AjaxResponse$_body$arity$1(this$);
} else {
return ajax$protocols$AjaxResponse$_body$dyn_23112(this$);
}
});

var ajax$protocols$AjaxResponse$_get_response_header$dyn_23116 = (function (this$,header){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (ajax.protocols._get_response_header[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,header) : m__5520__auto__.call(null,this$,header));
} else {
var m__5518__auto__ = (ajax.protocols._get_response_header["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,header) : m__5518__auto__.call(null,this$,header));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-get-response-header",this$);
}
}
});
/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.protocols._get_response_header = (function ajax$protocols$_get_response_header(this$,header){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2 == null)))))){
return this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
return ajax$protocols$AjaxResponse$_get_response_header$dyn_23116(this$,header);
}
});

var ajax$protocols$AjaxResponse$_was_aborted$dyn_23124 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (ajax.protocols._was_aborted[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (ajax.protocols._was_aborted["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-was-aborted",this$);
}
}
});
/**
 * Was the response aborted.
 */
ajax.protocols._was_aborted = (function ajax$protocols$_was_aborted(this$){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1 == null)))))){
return this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1(this$);
} else {
return ajax$protocols$AjaxResponse$_was_aborted$dyn_23124(this$);
}
});


/**
 * An abstraction for something that processes requests and responses.
 * @interface
 */
ajax.protocols.Interceptor = function(){};

var ajax$protocols$Interceptor$_process_request$dyn_23132 = (function (this$,request){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (ajax.protocols._process_request[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,request) : m__5520__auto__.call(null,this$,request));
} else {
var m__5518__auto__ = (ajax.protocols._process_request["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,request) : m__5518__auto__.call(null,this$,request));
} else {
throw cljs.core.missing_protocol("Interceptor.-process-request",this$);
}
}
});
/**
 * Transforms the opts
 */
ajax.protocols._process_request = (function ajax$protocols$_process_request(this$,request){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$Interceptor$_process_request$arity$2 == null)))))){
return this$.ajax$protocols$Interceptor$_process_request$arity$2(this$,request);
} else {
return ajax$protocols$Interceptor$_process_request$dyn_23132(this$,request);
}
});

var ajax$protocols$Interceptor$_process_response$dyn_23138 = (function (this$,response){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (ajax.protocols._process_response[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,response) : m__5520__auto__.call(null,this$,response));
} else {
var m__5518__auto__ = (ajax.protocols._process_response["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,response) : m__5518__auto__.call(null,this$,response));
} else {
throw cljs.core.missing_protocol("Interceptor.-process-response",this$);
}
}
});
/**
 * Transforms the raw response (an implementation of AjaxResponse)
 */
ajax.protocols._process_response = (function ajax$protocols$_process_response(this$,response){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$Interceptor$_process_response$arity$2 == null)))))){
return this$.ajax$protocols$Interceptor$_process_response$arity$2(this$,response);
} else {
return ajax$protocols$Interceptor$_process_response$dyn_23138(this$,response);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.AjaxResponse}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.protocols.Response = (function (status,body,status_text,headers,was_aborted,__meta,__extmap,__hash){
this.status = status;
this.body = body;
this.status_text = status_text;
this.headers = headers;
this.was_aborted = was_aborted;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k23013,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__23023 = k23013;
var G__23023__$1 = (((G__23023 instanceof cljs.core.Keyword))?G__23023.fqn:null);
switch (G__23023__$1) {
case "status":
return self__.status;

break;
case "body":
return self__.body;

break;
case "status-text":
return self__.status_text;

break;
case "headers":
return self__.headers;

break;
case "was-aborted":
return self__.was_aborted;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23013,else__5472__auto__);

}
}));

(ajax.protocols.Response.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__23027){
var vec__23028 = p__23027;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23028,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23028,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(ajax.protocols.Response.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#ajax.protocols.Response{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",-1997798413),self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted],null))], null),self__.__extmap));
}));

(ajax.protocols.Response.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23012){
var self__ = this;
var G__23012__$1 = this;
return (new cljs.core.RecordIter((0),G__23012__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.protocols.Response.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(ajax.protocols.Response.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.protocols.Response.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(ajax.protocols.Response.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-473222333 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(ajax.protocols.Response.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23014,other23015){
var self__ = this;
var this23014__$1 = this;
return (((!((other23015 == null)))) && ((((this23014__$1.constructor === other23015.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23014__$1.status,other23015.status)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23014__$1.body,other23015.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23014__$1.status_text,other23015.status_text)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23014__$1.headers,other23015.headers)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23014__$1.was_aborted,other23015.was_aborted)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23014__$1.__extmap,other23015.__extmap)))))))))))))));
}));

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(this$__$1),header);
}));

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(ajax.protocols.Response.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(ajax.protocols.Response.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k23013){
var self__ = this;
var this__5476__auto____$1 = this;
var G__23064 = k23013;
var G__23064__$1 = (((G__23064 instanceof cljs.core.Keyword))?G__23064.fqn:null);
switch (G__23064__$1) {
case "status":
case "body":
case "status-text":
case "headers":
case "was-aborted":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k23013);

}
}));

(ajax.protocols.Response.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__23012){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__23069 = cljs.core.keyword_identical_QMARK_;
var expr__23070 = k__5478__auto__;
if(cljs.core.truth_((pred__23069.cljs$core$IFn$_invoke$arity$2 ? pred__23069.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413),expr__23070) : pred__23069.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),expr__23070)))){
return (new ajax.protocols.Response(G__23012,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23069.cljs$core$IFn$_invoke$arity$2 ? pred__23069.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__23070) : pred__23069.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__23070)))){
return (new ajax.protocols.Response(self__.status,G__23012,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23069.cljs$core$IFn$_invoke$arity$2 ? pred__23069.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status-text","status-text",-1834235478),expr__23070) : pred__23069.call(null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),expr__23070)))){
return (new ajax.protocols.Response(self__.status,self__.body,G__23012,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23069.cljs$core$IFn$_invoke$arity$2 ? pred__23069.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"headers","headers",-835030129),expr__23070) : pred__23069.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__23070)))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,G__23012,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23069.cljs$core$IFn$_invoke$arity$2 ? pred__23069.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),expr__23070) : pred__23069.call(null,new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),expr__23070)))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,G__23012,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__23012),null));
}
}
}
}
}
}));

(ajax.protocols.Response.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"status","status",-1997798413),self__.status,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted,null))], null),self__.__extmap));
}));

(ajax.protocols.Response.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__23012){
var self__ = this;
var this__5468__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,G__23012,self__.__extmap,self__.__hash));
}));

(ajax.protocols.Response.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(ajax.protocols.Response.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",-357266886,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"status-text","status-text",-193703951,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"was-aborted","was-aborted",-479553301,null)], null);
}));

(ajax.protocols.Response.cljs$lang$type = true);

(ajax.protocols.Response.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"ajax.protocols/Response",null,(1),null));
}));

(ajax.protocols.Response.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"ajax.protocols/Response");
}));

/**
 * Positional factory function for ajax.protocols/Response.
 */
ajax.protocols.__GT_Response = (function ajax$protocols$__GT_Response(status,body,status_text,headers,was_aborted){
return (new ajax.protocols.Response(status,body,status_text,headers,was_aborted,null,null,null));
});

/**
 * Factory function for ajax.protocols/Response, taking a map of keywords to field values.
 */
ajax.protocols.map__GT_Response = (function ajax$protocols$map__GT_Response(G__23022){
var extmap__5511__auto__ = (function (){var G__23083 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23022,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828)], 0));
if(cljs.core.record_QMARK_(G__23022)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23083);
} else {
return G__23083;
}
})();
return (new ajax.protocols.Response(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(G__23022),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__23022),new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(G__23022),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__23022),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(G__23022),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


//# sourceMappingURL=ajax.protocols.js.map
