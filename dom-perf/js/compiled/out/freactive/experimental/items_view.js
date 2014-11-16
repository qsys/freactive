// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.experimental.items_view');
goog.require('cljs.core');
goog.require('freactive.experimental.observable_collection');
goog.require('freactive.core');
goog.require('freactive.experimental.observable_collection');
goog.require('freactive.experimental.dom');
goog.require('freactive.experimental.dom');
goog.require('freactive.core');
freactive.experimental.items_view.IItemsView = (function (){var obj36093 = {};return obj36093;
})();
freactive.experimental.items_view._sort_BANG_ = (function _sort_BANG_(view,compare_fn){if((function (){var and__11486__auto__ = view;if(and__11486__auto__)
{return view.freactive$experimental$items_view$IItemsView$_sort_BANG_$arity$2;
} else
{return and__11486__auto__;
}
})())
{return view.freactive$experimental$items_view$IItemsView$_sort_BANG_$arity$2(view,compare_fn);
} else
{var x__12135__auto__ = (((view == null))?null:view);return (function (){var or__11498__auto__ = (freactive.experimental.items_view._sort_BANG_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.experimental.items_view._sort_BANG_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IItemsView.-sort!",view);
}
}
})().call(null,view,compare_fn);
}
});
freactive.experimental.items_view._apply_filter_BANG_ = (function _apply_filter_BANG_(view,f){if((function (){var and__11486__auto__ = view;if(and__11486__auto__)
{return view.freactive$experimental$items_view$IItemsView$_apply_filter_BANG_$arity$2;
} else
{return and__11486__auto__;
}
})())
{return view.freactive$experimental$items_view$IItemsView$_apply_filter_BANG_$arity$2(view,f);
} else
{var x__12135__auto__ = (((view == null))?null:view);return (function (){var or__11498__auto__ = (freactive.experimental.items_view._apply_filter_BANG_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.experimental.items_view._apply_filter_BANG_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IItemsView.-apply-filter!",view);
}
}
})().call(null,view,f);
}
});
freactive.experimental.items_view._remove_filter_BANG_ = (function _remove_filter_BANG_(view,f){if((function (){var and__11486__auto__ = view;if(and__11486__auto__)
{return view.freactive$experimental$items_view$IItemsView$_remove_filter_BANG_$arity$2;
} else
{return and__11486__auto__;
}
})())
{return view.freactive$experimental$items_view$IItemsView$_remove_filter_BANG_$arity$2(view,f);
} else
{var x__12135__auto__ = (((view == null))?null:view);return (function (){var or__11498__auto__ = (freactive.experimental.items_view._remove_filter_BANG_[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.experimental.items_view._remove_filter_BANG_["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IItemsView.-remove-filter!",view);
}
}
})().call(null,view,f);
}
});
freactive.experimental.items_view._reset_view = (function _reset_view(view){if((function (){var and__11486__auto__ = view;if(and__11486__auto__)
{return view.freactive$experimental$items_view$IItemsView$_reset_view$arity$1;
} else
{return and__11486__auto__;
}
})())
{return view.freactive$experimental$items_view$IItemsView$_reset_view$arity$1(view);
} else
{var x__12135__auto__ = (((view == null))?null:view);return (function (){var or__11498__auto__ = (freactive.experimental.items_view._reset_view[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.experimental.items_view._reset_view["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IItemsView.-reset-view",view);
}
}
})().call(null,view);
}
});
freactive.experimental.items_view._set_view_range = (function _set_view_range(view,start,end){if((function (){var and__11486__auto__ = view;if(and__11486__auto__)
{return view.freactive$experimental$items_view$IItemsView$_set_view_range$arity$3;
} else
{return and__11486__auto__;
}
})())
{return view.freactive$experimental$items_view$IItemsView$_set_view_range$arity$3(view,start,end);
} else
{var x__12135__auto__ = (((view == null))?null:view);return (function (){var or__11498__auto__ = (freactive.experimental.items_view._set_view_range[goog.typeOf(x__12135__auto__)]);if(or__11498__auto__)
{return or__11498__auto__;
} else
{var or__11498__auto____$1 = (freactive.experimental.items_view._set_view_range["_"]);if(or__11498__auto____$1)
{return or__11498__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IItemsView.-set-view-range",view);
}
}
})().call(null,view,start,end);
}
});

/**
* @constructor
* @param {*} element
* @param {*} coll
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
freactive.experimental.items_view.ItemsView = (function (element,coll,__meta,__extmap){
this.element = element;
this.coll = coll;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
freactive.experimental.items_view.ItemsView.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12094__auto__,k__12095__auto__){var self__ = this;
var this__12094__auto____$1 = this;return cljs.core._lookup.call(null,this__12094__auto____$1,k__12095__auto__,null);
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12096__auto__,k36095,else__12097__auto__){var self__ = this;
var this__12096__auto____$1 = this;var G__36097 = (((k36095 instanceof cljs.core.Keyword))?k36095.fqn:null);switch (G__36097) {
case "coll":
return self__.coll;

break;
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36095,else__12097__auto__);

}
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12108__auto__,writer__12109__auto__,opts__12110__auto__){var self__ = this;
var this__12108__auto____$1 = this;var pr_pair__12111__auto__ = ((function (this__12108__auto____$1){
return (function (keyval__12112__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12109__auto__,cljs.core.pr_writer,""," ","",opts__12110__auto__,keyval__12112__auto__);
});})(this__12108__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12109__auto__,pr_pair__12111__auto__,"#freactive.experimental.items-view.ItemsView{",", ","}",opts__12110__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coll","coll",1647737163),self__.coll],null))], null),self__.__extmap));
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12092__auto__){var self__ = this;
var this__12092__auto____$1 = this;return self__.__meta;
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12088__auto__){var self__ = this;
var this__12088__auto____$1 = this;return (new freactive.experimental.items_view.ItemsView(self__.element,self__.coll,self__.__meta,self__.__extmap,self__.__hash));
});
freactive.experimental.items_view.ItemsView.prototype.freactive$experimental$dom$IRemove$ = true;
freactive.experimental.items_view.ItemsView.prototype.freactive$experimental$dom$IRemove$_remove$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return freactive.experimental.dom._remove.call(null,self__.element);
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12098__auto__){var self__ = this;
var this__12098__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
freactive.experimental.items_view.ItemsView.prototype.freactive$experimental$dom$IHasElement$ = true;
freactive.experimental.items_view.ItemsView.prototype.freactive$experimental$dom$IHasElement$_get_element$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.element;
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12089__auto__){var self__ = this;
var this__12089__auto____$1 = this;var h__11909__auto__ = self__.__hash;if(!((h__11909__auto__ == null)))
{return h__11909__auto__;
} else
{var h__11909__auto____$1 = cljs.core.hash_imap.call(null,this__12089__auto____$1);self__.__hash = h__11909__auto____$1;
return h__11909__auto____$1;
}
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12090__auto__,other__12091__auto__){var self__ = this;
var this__12090__auto____$1 = this;if(cljs.core.truth_((function (){var and__11486__auto__ = other__12091__auto__;if(cljs.core.truth_(and__11486__auto__))
{return ((this__12090__auto____$1.constructor === other__12091__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__12090__auto____$1,other__12091__auto__));
} else
{return and__11486__auto__;
}
})()))
{return true;
} else
{return false;
}
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12103__auto__,k__12104__auto__){var self__ = this;
var this__12103__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),null,new cljs.core.Keyword(null,"coll","coll",1647737163),null], null), null),k__12104__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12103__auto____$1),self__.__meta),k__12104__auto__);
} else
{return (new freactive.experimental.items_view.ItemsView(self__.element,self__.coll,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12104__auto__)),null));
}
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12101__auto__,k__12102__auto__,G__36094){var self__ = this;
var this__12101__auto____$1 = this;var pred__36098 = cljs.core.keyword_identical_QMARK_;var expr__36099 = k__12102__auto__;if(cljs.core.truth_(pred__36098.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__36099)))
{return (new freactive.experimental.items_view.ItemsView(G__36094,self__.coll,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__36098.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),expr__36099)))
{return (new freactive.experimental.items_view.ItemsView(self__.element,G__36094,self__.__meta,self__.__extmap,null));
} else
{return (new freactive.experimental.items_view.ItemsView(self__.element,self__.coll,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12102__auto__,G__36094),null));
}
}
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12106__auto__){var self__ = this;
var this__12106__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coll","coll",1647737163),self__.coll],null))], null),self__.__extmap));
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12093__auto__,G__36094){var self__ = this;
var this__12093__auto____$1 = this;return (new freactive.experimental.items_view.ItemsView(self__.element,self__.coll,G__36094,self__.__extmap,self__.__hash));
});
freactive.experimental.items_view.ItemsView.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12099__auto__,entry__12100__auto__){var self__ = this;
var this__12099__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12100__auto__))
{return cljs.core._assoc.call(null,this__12099__auto____$1,cljs.core._nth.call(null,entry__12100__auto__,(0)),cljs.core._nth.call(null,entry__12100__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12099__auto____$1,entry__12100__auto__);
}
});
freactive.experimental.items_view.ItemsView.cljs$lang$type = true;
freactive.experimental.items_view.ItemsView.cljs$lang$ctorPrSeq = (function (this__12128__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"freactive.experimental.items-view/ItemsView");
});
freactive.experimental.items_view.ItemsView.cljs$lang$ctorPrWriter = (function (this__12128__auto__,writer__12129__auto__){return cljs.core._write.call(null,writer__12129__auto__,"freactive.experimental.items-view/ItemsView");
});
freactive.experimental.items_view.__GT_ItemsView = (function __GT_ItemsView(element,coll){return (new freactive.experimental.items_view.ItemsView(element,coll));
});
freactive.experimental.items_view.map__GT_ItemsView = (function map__GT_ItemsView(G__36096){return (new freactive.experimental.items_view.ItemsView(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__36096),new cljs.core.Keyword(null,"coll","coll",1647737163).cljs$core$IFn$_invoke$arity$1(G__36096),null,cljs.core.dissoc.call(null,G__36096,new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"coll","coll",1647737163))));
});

/**
* @constructor
*/
freactive.experimental.items_view.ItemContainer = (function (elem,state){
this.elem = elem;
this.state = state;
})
freactive.experimental.items_view.ItemContainer.cljs$lang$type = true;
freactive.experimental.items_view.ItemContainer.cljs$lang$ctorStr = "freactive.experimental.items-view/ItemContainer";
freactive.experimental.items_view.ItemContainer.cljs$lang$ctorPrWriter = (function (this__12078__auto__,writer__12079__auto__,opts__12080__auto__){return cljs.core._write.call(null,writer__12079__auto__,"freactive.experimental.items-view/ItemContainer");
});
freactive.experimental.items_view.__GT_ItemContainer = (function __GT_ItemContainer(elem,state){return (new freactive.experimental.items_view.ItemContainer(elem,state));
});
freactive.experimental.items_view.items_view = (function items_view(container,template_fn,items){var coll = (((items instanceof freactive.experimental.observable_collection.ObservableCollection))?items:freactive.experimental.observable_collection.observable_collection.call(null,items)
);var container__$1 = (((container instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [container], null):container
);var element = freactive.experimental.dom.build_element.call(null,container__$1);var elem_mappings = freactive.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var view = (new freactive.experimental.items_view.ItemsView(element,coll));var update_fn = ((function (coll,container__$1,element,elem_mappings,view){
return (function (view__$1,coll__$1,changes){var seq__36108 = cljs.core.seq.call(null,changes);var chunk__36109 = null;var count__36110 = (0);var i__36111 = (0);while(true){
if((i__36111 < count__36110))
{var vec__36112 = cljs.core._nth.call(null,chunk__36109,i__36111);var k = cljs.core.nth.call(null,vec__36112,(0),null);var v = cljs.core.nth.call(null,vec__36112,(1),null);var elem_container_36114 = cljs.core.get.call(null,cljs.core.deref.call(null,elem_mappings),k);if(cljs.core.truth_(elem_container_36114))
{if(cljs.core.truth_(v))
{cljs.core.reset_BANG_.call(null,elem_container_36114.state,v);
} else
{freactive.experimental.dom._remove.call(null,elem_container_36114.elem);
cljs.core.swap_BANG_.call(null,elem_mappings,cljs.core.dissoc,k);
}
} else
{if(cljs.core.truth_(v))
{var state_36115 = freactive.core.atom.call(null,v);var elem_36116 = freactive.experimental.dom.append_child_BANG_.call(null,view__$1.element,template_fn.call(null,state_36115));cljs.core.swap_BANG_.call(null,elem_mappings,cljs.core.assoc,k,(new freactive.experimental.items_view.ItemContainer(elem_36116,state_36115)));
} else
{}
}
{
var G__36117 = seq__36108;
var G__36118 = chunk__36109;
var G__36119 = count__36110;
var G__36120 = (i__36111 + (1));
seq__36108 = G__36117;
chunk__36109 = G__36118;
count__36110 = G__36119;
i__36111 = G__36120;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__36108);if(temp__4388__auto__)
{var seq__36108__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36108__$1))
{var c__12268__auto__ = cljs.core.chunk_first.call(null,seq__36108__$1);{
var G__36121 = cljs.core.chunk_rest.call(null,seq__36108__$1);
var G__36122 = c__12268__auto__;
var G__36123 = cljs.core.count.call(null,c__12268__auto__);
var G__36124 = (0);
seq__36108 = G__36121;
chunk__36109 = G__36122;
count__36110 = G__36123;
i__36111 = G__36124;
continue;
}
} else
{var vec__36113 = cljs.core.first.call(null,seq__36108__$1);var k = cljs.core.nth.call(null,vec__36113,(0),null);var v = cljs.core.nth.call(null,vec__36113,(1),null);var elem_container_36125 = cljs.core.get.call(null,cljs.core.deref.call(null,elem_mappings),k);if(cljs.core.truth_(elem_container_36125))
{if(cljs.core.truth_(v))
{cljs.core.reset_BANG_.call(null,elem_container_36125.state,v);
} else
{freactive.experimental.dom._remove.call(null,elem_container_36125.elem);
cljs.core.swap_BANG_.call(null,elem_mappings,cljs.core.dissoc,k);
}
} else
{if(cljs.core.truth_(v))
{var state_36126 = freactive.core.atom.call(null,v);var elem_36127 = freactive.experimental.dom.append_child_BANG_.call(null,view__$1.element,template_fn.call(null,state_36126));cljs.core.swap_BANG_.call(null,elem_mappings,cljs.core.assoc,k,(new freactive.experimental.items_view.ItemContainer(elem_36127,state_36126)));
} else
{}
}
{
var G__36128 = cljs.core.next.call(null,seq__36108__$1);
var G__36129 = null;
var G__36130 = (0);
var G__36131 = (0);
seq__36108 = G__36128;
chunk__36109 = G__36129;
count__36110 = G__36130;
i__36111 = G__36131;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(coll,container__$1,element,elem_mappings,view))
;update_fn.call(null,view,coll,cljs.core.deref.call(null,coll.state));
freactive.experimental.observable_collection.observe_changes.call(null,coll,view,update_fn);
return view;
});

//# sourceMappingURL=items_view.js.map