if (self.CavalryLogger) { CavalryLogger.start_js(["gJqJK"]); }

__d("CometSaveToggle_savable.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometSaveToggle_savable",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_saved_state",storageKey:null}],type:"Savable",abstractKey:"__isSavable"};e.exports=a},null);
__d("CometSaveAddToCollectionDialogQuery$Parameters",[],function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4128391823867685",metadata:{relayPreloadable:!0},name:"CometSaveAddToCollectionDialogQuery",operationKind:"query",text:null}};e.exports=a},null);
__d("useContentCollectionAddSavablesMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"collection_title",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useContentCollectionAddSavablesMutation",selections:[{alias:null,args:b,concreteType:"ContentCollectionAddSavablesResponsePayload",kind:"LinkedField",name:"content_collection_add_savables",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"added_content_collection_items",plural:!0,selections:[c],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"content_collection",plural:!1,selections:[c,d,{args:null,kind:"FragmentSpread",name:"CometSaveLeftRailListItem_collection"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useContentCollectionAddSavablesMutation",selections:[{alias:null,args:b,concreteType:"ContentCollectionAddSavablesResponsePayload",kind:"LinkedField",name:"content_collection_add_savables",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"added_content_collection_items",plural:!0,selections:[e,c],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"content_collection",plural:!1,selections:[e,c,d,{kind:"TypeDiscriminator",abstractKey:"__isContentCollection"},{alias:null,args:[{kind:"Literal",name:"height",value:48},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:48}],concreteType:"Image",kind:"LinkedField",name:"collection_thumbnail_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"3074286695993733",metadata:{},name:"useContentCollectionAddSavablesMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("CometSaveAddToCollectionDialog.entrypoint",["CometSaveAddToCollectionDialogQuery$Parameters","JSResource","WebPixelRatio"],function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.collectionItemID;return{queries:{dialogViewerQueryRef:{parameters:b("CometSaveAddToCollectionDialogQuery$Parameters"),variables:{collectionItemID:a,scale:b("WebPixelRatio").get()}}}}},root:b("JSResource")("CometSaveAddToCollectionDialog.react").__setRef("CometSaveAddToCollectionDialog.entrypoint")};e.exports=a},null);
__d("useAddToCollectionFlow",["CometSaveAddToCollectionDialog.entrypoint","React","useCometEntryPointDialog"],function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback;function a(a){a=b("useCometEntryPointDialog")(b("CometSaveAddToCollectionDialog.entrypoint"),{collectionItemID:a});var c=a[0];a=a[1];var d=g(function(a,b){c(a,b)},[c]);return[d,a]}e.exports=a},null);
__d("CometSaveMutationHelper",["CometRelay"],function(a,b,c,d,e,f){"use strict";var g=b("CometRelay").ConnectionHandler,h="CometSaveCollectionAllItems_collection_items",i="CometSaveGroupCollectionAllItems_items",j=["CometSaveLeftRail_saver_content_collections","CometSaveSelectCollectionList_saver_content_collections"];function a(a,b,c){b=a.get(b);if(!b)return;var d=g.getConnection(b,h);if(!d)return;c.forEach(function(b){if(b){b=g.createEdge(a,d,b,"SaverInfoSaverContentCollectionsEdge");g.insertEdgeBefore(d,b)}})}function c(a,b,c){b=a.get(b);if(!b)return;b=g.getConnection(b,i);if(!b)return;a=g.createEdge(a,b,c,"ContentCollectionItemsEdge");g.insertEdgeBefore(b,a)}function d(a,b){a=(a=a.getLinkedRecords("edges"))!=null?a:[];for(var c=0;c<a.length;c++){var d=a[c];d=d&&d.getLinkedRecord("node");var e=d&&d.getLinkedRecord("savable");e=e&&e.getDataID();d=d&&d.getDataID();if(b===e)return d}}function f(a,b,c){j.forEach(function(d){d=g.getConnection(c,d,{use_case:"SAVE_DEFAULT"});if(d==null)return;g.insertEdgeBefore(d,g.createEdge(a,d,b,"SaverInfoSaverContentCollectionsEdge"))})}function k(a,b){j.forEach(function(c){c=g.getConnection(a,c);if(c==null)return;g.deleteNode(c,b)})}e.exports={addCollectionToConnections:f,addToCollection:a,addToGroupCollection:c,findNodeIDForSavable:d,removeCollectionFromConnections:k}},null);
__d("useContentCollectionAddSavablesMutation",["CometRelay","CometSaveMutationHelper","CometSaveStoryMutationHelper","React","WebPixelRatio","createUseMutation","promiseDone","unrecoverableViolation","useCometSaveLoggingContext","useContentCollectionAddSavablesMutation.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").VIEWER_ID;b("CometRelay").graphql;var i=b("CometSaveMutationHelper").addCollectionToConnections,j=b("CometSaveStoryMutationHelper").updateSavablesSaveState;c=b("React");var k=c.useCallback;d=g!==void 0?g:g=b("useContentCollectionAddSavablesMutation.graphql");f=function(a){return function(b){var c=a.savable_ids;j(b,c,"SAVED");c=b.getRootField("content_collection_add_savables");if(c==null)return;c=c.getLinkedRecord("content_collection");if(c==null)return;if(a.content_collection_id!==c.getValue("id")){var d=b.get(h);if(d==null)return;d=d.getLinkedRecord("saver_info");if(d==null)return;i(b,c,d)}}};var l=b("createUseMutation")(d,void 0,f,f);function a(a){a=a||{};var c=a.onError,d=a.onSuccess,e=b("useCometSaveLoggingContext")().surfaceGraphQL,f=l();return k(function(a){var g=a.collectionID,h=a.collectionTitle,i=a.mechanism;a=a.savableIDs;if(a==null)throw b("unrecoverableViolation")("savableIDs not provided to add savables mutation","saved_for_later");b("promiseDone")(f({collection_title:h,content_collection_id:g,savable_ids:a,save_mechanism:i,save_surface:e},{scale:b("WebPixelRatio").get()}),function(a){a=(a=a.content_collection_add_savables)==null?void 0:a.content_collection;d&&d(a==null?void 0:a.id,a==null?void 0:a.collection_title)},c)},[f,e,d,c])}e.exports=a},null);
__d("useSaveMutation",["JSResource","React","promiseDone","useCometSaveLoggingContext","unrecoverableViolation"],function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=b("JSResource")("CometSaveMutation").__setRef("useSaveMutation");function a(a,c){var d=a.mechanism,e=a.savableID;a=a.surface;var f=b("useCometSaveLoggingContext")().surfaceGraphQL_legacy,i=(a=a)!=null?a:f;a=c||{};var j=a.onFailure,k=a.onSuccess;return g(function(){if(e==null)throw b("unrecoverableViolation")("savableID not provided to save mutation","saved_for_later");b("promiseDone")(h.load().then(function(a){a({mechanism:d,node_id:e,surface:i},{onFailure:j,onSuccess:k})}))},[d,e,i,k,j])}e.exports=a},null);
__d("useUnsaveMutation",["JSResource","React","promiseDone","unrecoverableViolation","useCometSaveLoggingContext"],function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=b("JSResource")("CometUnsaveMutation").__setRef("useUnsaveMutation");function a(a,c){var d=a.mechanism,e=a.savableID;a=a.surface;var f=b("useCometSaveLoggingContext")().surfaceGraphQL_legacy,i=(a=a)!=null?a:f;a=c||{};var j=a.onFailure,k=a.onSuccess;return g(function(){if(e==null)throw b("unrecoverableViolation")("savableID not provided to unsave mutation","saved_for_later");b("promiseDone")(h.load().then(function(a){a({mechanism:d,node_id:e,surface:i},{onFailure:j,onSuccess:k})}))},[e,d,i,j,k])}e.exports=a},null);
__d("CometSaveToggle.react",["fbt","requireDeferred","CometMenuItem.react","CometRelay","CometSaveToastUtil","React","useAddToCollectionFlow","useContentCollectionAddSavablesMutation","useSaveMutation","useUnsaveMutation","CometSaveToggle_savable.graphql"],function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("CometSaveToastUtil").getAddToCollectionToast;b("React");c=b("React");var k=c.useCallback,l=b("requireDeferred")("cometPushToast"),m=h!==void 0?h:h=b("CometSaveToggle_savable.graphql");function a(a){var c=a.SaveComponent,d=a.UnsaveComponent,e=a.mechanism,f=a.onUnsaveCallback,h=a.savable,j=a.saveToCollectionID;a=a.surface;h=i(m,h);var o=h.id,p=b("useAddToCollectionFlow")(),q=p[0],r=b("useSaveMutation")({mechanism:e,savableID:o,surface:a});p=k(function(a,b){n(b,a)},[]);var s=b("useContentCollectionAddSavablesMutation")({onSuccess:p});p=b("useUnsaveMutation")({mechanism:e,savableID:o,surface:a});f=(a=f)!=null?a:p;var t=k(function(a){if(a===!0)return;l.onReady(function(a){a.cometPushSimpleToast(g._("Salvo"))})},[]);if(o==null)return null;switch(h.viewer_saved_state){case"SAVED":return d(f);case"NOT_SAVED":return c(function(){j!=null?s({collectionID:j,mechanism:e,savableIDs:[o]}):(r(),q({mechanism:e,onClose:t,savableID:o},t))});case"NOT_SAVABLE":default:return null}}function n(a,b){l.onReady(function(c){c.cometPushSimpleToast(j(b,a),4e3)})}e.exports=a},null);