if (self.CavalryLogger) { CavalryLogger.start_js(["dRx+d"]); }

__d("ProfileCometAppCollectionMediaActionsMenuQuery.graphql",["relay-runtime"],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"feed_location"},{defaultValue:null,kind:"LocalArgument",name:"id"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"id",variableName:"id"}],c=[{kind:"Variable",name:"feed_location",variableName:"feed_location"}],d={kind:"InlineFragment",selections:[{documentName:"ProfileCometAppCollectionMediaActionsMenuQuery",fragmentName:"CometMediaViewerAltTextMenuItem_storyMenuItem",fragmentPropName:"storyMenuItem",kind:"ModuleImport"}],type:"MediaChangeAltTextMenuItem",abstractKey:null},e={kind:"InlineFragment",selections:[{documentName:"ProfileCometAppCollectionMediaActionsMenuQuery",fragmentName:"CometMediaViewerDeleteMenuItem_storyMenuItem",fragmentPropName:"storyMenuItem",kind:"ModuleImport"}],type:"MediaDeleteMenuItem",abstractKey:null},f={kind:"InlineFragment",selections:[{documentName:"ProfileCometAppCollectionMediaActionsMenuQuery",fragmentName:"CometMediaViewerDownloadPhotoMenuItem_storyMenuItem",fragmentPropName:"storyMenuItem",kind:"ModuleImport"}],type:"PhotoDownloadMenuItem",abstractKey:null},g={kind:"InlineFragment",selections:[{documentName:"ProfileCometAppCollectionMediaActionsMenuQuery",fragmentName:"CometMediaViewerDownloadVideoMenuItem_storyMenuItem",fragmentPropName:"storyMenuItem",kind:"ModuleImport"}],type:"VideoDownloadMenuItem",abstractKey:null},h={kind:"InlineFragment",selections:[{documentName:"ProfileCometAppCollectionMediaActionsMenuQuery",fragmentName:"CometMediaViewerEditLocationMenuItem_storyMenuItem",fragmentPropName:"storyMenuItem",kind:"ModuleImport"}],type:"MediaLocationMenuItem",abstractKey:null},i={kind:"InlineFragment",selections:[{documentName:"ProfileCometAppCollectionMediaActionsMenuQuery",fragmentName:"CometMediaViewerReportMenuItem_storyMenuItem",fragmentPropName:"storyMenuItem",kind:"ModuleImport"}],type:"MediaReportMenuItem",abstractKey:null},j={kind:"InlineFragment",selections:[{documentName:"ProfileCometAppCollectionMediaActionsMenuQuery",fragmentName:"CometPhotoViewerRemoveTagMenuItem_storyMenuItem",fragmentPropName:"storyMenuItem",kind:"ModuleImport"}],type:"PhotoRemoveTagMenuItem",abstractKey:null},k={kind:"InlineFragment",selections:[{documentName:"ProfileCometAppCollectionMediaActionsMenuQuery",fragmentName:"CometVideoViewerRemoveTagMenuItem_storyMenuItem",fragmentPropName:"storyMenuItem",kind:"ModuleImport"}],type:"VideoRemoveTagMenuItem",abstractKey:null},l={kind:"InlineFragment",selections:[{documentName:"ProfileCometAppCollectionMediaActionsMenuQuery",fragmentName:"ProfileCometMakeProfilePictureMenuItem_storyMenuItem",fragmentPropName:"storyMenuItem",kind:"ModuleImport"}],type:"PhotoMakeProfilePictureMenuItem",abstractKey:null},m={kind:"InlineFragment",selections:[{documentName:"ProfileCometAppCollectionMediaActionsMenuQuery",fragmentName:"ProfileCometMakeCoverPhotoMenuItem_storyMenuItem",fragmentPropName:"storyMenuItem",kind:"ModuleImport"}],type:"PhotoMakeCoverPhotoMenuItem",abstractKey:null},n={kind:"InlineFragment",selections:[{documentName:"ProfileCometAppCollectionMediaActionsMenuQuery",fragmentName:"CometPhotoMoveToOtherAlbumMenuItem_storyMenuItem",fragmentPropName:"storyMenuItem",kind:"ModuleImport"}],type:"PhotoMoveToOtherAlbumMenuItem",abstractKey:null},o={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"ProfileCometAppCollectionMediaActionsMenuQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"nfx_action_menu_items",plural:!0,selections:[d,e,f,g,h,i,j,k,l,m,n],storageKey:null}],type:"FeedUnitWithNFXActions",abstractKey:"__isFeedUnitWithNFXActions"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"ProfileCometAppCollectionMediaActionsMenuQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[o,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"nfx_action_menu_items",plural:!0,selections:[o,d,e,f,g,h,i,j,k,l,m,n],storageKey:null}],type:"FeedUnitWithNFXActions",abstractKey:"__isFeedUnitWithNFXActions"}],storageKey:null}]},params:{id:"3277354052286107",metadata:{relayPreloadable:!0},name:"ProfileCometAppCollectionMediaActionsMenuQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a},null);
__d("BillingCenterSection.react",["React","TetraTextPairing.react","stylex","useBillingWizardComponents"],function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={image:{marginBottom:"sjgh65i0"},section:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t",paddingTop:"discj3wi",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a"},textWrapper:{marginBottom:"qzhwtbm6",marginTop:"knvmm38d"}},j={1:{marginBottom:"px9k8yfb",marginTop:"hk9dxy2p"},2:{marginBottom:"w0hvl6rk",marginTop:"qjjbsfad"}};function a(a){var c=a.body,d=a.bodyLinkText,e=a.bodyLinkUrl,f=a.children,k=a.headline,l=a.icon,m=a.level;m=m===void 0?3:m;a=a.meta;var n=b("useBillingWizardComponents")();n=n.Link;n=d!=null&&e!=null?h.jsx(n,{href:e,inline:!0,label:d}):null;e=c!=null?h.jsxs(h.Fragment,{children:[c," ",n]}):null;return h.jsxs("div",{className:(g||(g=b("stylex")))(i.section),children:[h.jsx("div",{className:g(i.image),children:l}),h.jsx("div",{className:g(i.textWrapper,j[m]),children:h.jsx(b("TetraTextPairing.react"),{body:e,headline:k,level:m,meta:a,textAlign:"center"})}),f]})}e.exports=a},null);
__d("ProfileCometAppCollectionMediaActionsMenu.react",["CometMenu.react","CometRelay","React","orEmptyArray","ProfileCometAppCollectionMediaActionsMenuQuery.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").MatchContainer;b("CometRelay").graphql;var i=b("CometRelay").usePreloadedQuery,j=b("React");function a(a){a=a.queries;a=i(g!==void 0?g:g=b("ProfileCometAppCollectionMediaActionsMenuQuery.graphql"),a.menuQueryReference);a=b("orEmptyArray")(a==null?void 0:(a=a.node)==null?void 0:a.nfx_action_menu_items).map(function(a,b){return j.jsx(h,{match:a},b)});return a.length===0?null:j.jsx(b("CometMenu.react"),{withArrow:!0,children:a})}e.exports=a},null);