if (self.CavalryLogger) { CavalryLogger.start_js(["\/rlH6"]); }

__d("CometCrossGroupFeedPaginationQuery.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"UFI2CommentsProvider_commentsKey"},{defaultValue:5,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextEnableComment"},{defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAdPreview"},{defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAggregatedShare"},{defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsStorySet"},{defaultValue:null,kind:"LocalArgument",name:"displayCommentsFeedbackContext"},{defaultValue:null,kind:"LocalArgument",name:"feedLocation"},{defaultValue:null,kind:"LocalArgument",name:"feedbackSource"},{defaultValue:null,kind:"LocalArgument",name:"focusCommentID"},{defaultValue:null,kind:"LocalArgument",name:"isComet"},{defaultValue:null,kind:"LocalArgument",name:"privacySelectorRenderLocation"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"scale"},{defaultValue:null,kind:"LocalArgument",name:"useDefaultActor"}],b=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Literal",name:"badge_entry_point",value:"TAB_STORIES"},{kind:"Literal",name:"environment",value:"DESKTOP"},{kind:"Variable",name:"first",variableName:"count"},{kind:"Literal",name:"tab_visit_source",value:"GROUPS_ENGAGE_TAB"}],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e=[d],f={alias:null,args:null,concreteType:"QuickPromotionFeedUnitItem",kind:"LinkedField",name:"quick_promotion_items",plural:!0,selections:[{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"quick_promotion",plural:!1,selections:e,storageKey:null}],storageKey:null};f={kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"debug_info",storageKey:null},{alias:null,args:null,concreteType:"SponsoredData",kind:"LinkedField",name:"sponsored_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ad_id",storageKey:null},c],storageKey:null},{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometFeedUnitStoryStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"Story",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometFeedUnitGoodwillMemoryStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"GoodwillCometStory",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometPYMKQPFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"PaginatedPeopleYouMayKnowFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometFriendRequestsFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"FriendRequestsFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[f,{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometFeedUnitQuickPromotionStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"QuickPromotionNativeTemplateFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"GroupsCometGYSJFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"GroupsYouShouldJoinFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometGroupsSuggestionFeedUnitStrategy_unit",fragmentPropName:"unit",kind:"ModuleImport"}],type:"GroupsSuggestionUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometPYMIQPFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"PaginatedGroupsPeopleYouMayInviteFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometPYMAQPFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"PagesYouMayAdvertiseFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"GeminiPYSFQPFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"PeopleYouShouldFollowAtWorkFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometSPFFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"SuggestedPublicEntitiesToFollowFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CoronavirusCommunityHelpFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"CoronavirusCommunityHelpFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[f],type:"QuickPromotionFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"TrackingData",kind:"LinkedField",name:"trackingdata",plural:!1,selections:e,storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"viewability_config",storageKey:null},{alias:null,args:null,concreteType:"CometClientViewConfig",kind:"LinkedField",name:"client_view_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_delay_log_impression",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_signal_imp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_vital_imp",storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}],type:"TrackableFeedUnit",abstractKey:"__isTrackableFeedUnit"}],type:"FeedUnit",abstractKey:"__isFeedUnit"};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometCrossGroupFeedPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"}],kind:"FragmentSpread",name:"CometCrossGroupFeed_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometCrossGroupFeedPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{alias:null,args:b,concreteType:"CrossGroupFeedConnection",kind:"LinkedField",name:"cross_group_feed",plural:!1,selections:[{alias:null,args:null,concreteType:"CrossGroupFeedEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,{kind:"InlineFragment",selections:[d,f],type:"Story",abstractKey:null},{kind:"InlineFragment",selections:[f],type:"GroupsSuggestionUnit",abstractKey:null},{kind:"InlineFragment",selections:e,type:"Node",abstractKey:"__isNode"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:b,filters:["environment","badge_entry_point","tab_visit_source"],handle:"connection",key:"CometCrossGroupFeed_viewer_groups_tab_cross_group_feed",kind:"LinkedHandle",name:"cross_group_feed"}],storageKey:null}],storageKey:null}]},params:{id:"4619161584776119",metadata:{},name:"CometCrossGroupFeedPaginationQuery",operationKind:"query",text:null}}}();e.exports=a},null);
__d("CometCrossGroupFeedRootQuery.graphql",["relay-runtime"],function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"UFI2CommentsProvider_commentsKey"},b={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextEnableComment"},c={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAdPreview"},d={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAggregatedShare"},e={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsStorySet"},f={defaultValue:null,kind:"LocalArgument",name:"displayCommentsFeedbackContext"},g={defaultValue:"GROUP",kind:"LocalArgument",name:"feedLocation"},h={defaultValue:null,kind:"LocalArgument",name:"feedbackSource"},i={defaultValue:null,kind:"LocalArgument",name:"focusCommentID"},j={defaultValue:null,kind:"LocalArgument",name:"isComet"},k={defaultValue:null,kind:"LocalArgument",name:"privacySelectorRenderLocation"},l={defaultValue:null,kind:"LocalArgument",name:"renderLocation"},m={defaultValue:null,kind:"LocalArgument",name:"scale"},n={defaultValue:!1,kind:"LocalArgument",name:"useDefaultActor"},o=[{kind:"Literal",name:"badge_entry_point",value:"TAB_STORIES"},{kind:"Literal",name:"environment",value:"DESKTOP"},{kind:"Literal",name:"first",value:5},{kind:"Literal",name:"tab_visit_source",value:"GROUPS_ENGAGE_TAB"}],p={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},r=[q],s={alias:null,args:null,concreteType:"QuickPromotionFeedUnitItem",kind:"LinkedField",name:"quick_promotion_items",plural:!0,selections:[{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"quick_promotion",plural:!1,selections:r,storageKey:null}],storageKey:null};s={kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"debug_info",storageKey:null},{alias:null,args:null,concreteType:"SponsoredData",kind:"LinkedField",name:"sponsored_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ad_id",storageKey:null},p],storageKey:null},{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometFeedUnitStoryStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"Story",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometFeedUnitGoodwillMemoryStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"GoodwillCometStory",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometPYMKQPFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"PaginatedPeopleYouMayKnowFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometFriendRequestsFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"FriendRequestsFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[s,{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometFeedUnitQuickPromotionStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"QuickPromotionNativeTemplateFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"GroupsCometGYSJFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"GroupsYouShouldJoinFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometGroupsSuggestionFeedUnitStrategy_unit",fragmentPropName:"unit",kind:"ModuleImport"}],type:"GroupsSuggestionUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometPYMIQPFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"PaginatedGroupsPeopleYouMayInviteFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometPYMAQPFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"PagesYouMayAdvertiseFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"GeminiPYSFQPFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"PeopleYouShouldFollowAtWorkFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometSPFFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"SuggestedPublicEntitiesToFollowFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CoronavirusCommunityHelpFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"CoronavirusCommunityHelpFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[s],type:"QuickPromotionFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"TrackingData",kind:"LinkedField",name:"trackingdata",plural:!1,selections:r,storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"viewability_config",storageKey:null},{alias:null,args:null,concreteType:"CometClientViewConfig",kind:"LinkedField",name:"client_view_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_delay_log_impression",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_signal_imp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_vital_imp",storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}],type:"TrackableFeedUnit",abstractKey:"__isTrackableFeedUnit"}],type:"FeedUnit",abstractKey:"__isFeedUnit"};return{fragment:{argumentDefinitions:[a,b,c,d,e,f,g,h,i,j,k,l,m,n],kind:"Fragment",metadata:null,name:"CometCrossGroupFeedRootQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometCrossGroupFeed_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[f,b,c,d,e,g,h,i,k,m,j,n,l,a],kind:"Operation",name:"CometCrossGroupFeedRootQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{alias:null,args:o,concreteType:"CrossGroupFeedConnection",kind:"LinkedField",name:"cross_group_feed",plural:!1,selections:[{alias:null,args:null,concreteType:"CrossGroupFeedEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[p,{kind:"InlineFragment",selections:[q,s],type:"Story",abstractKey:null},{kind:"InlineFragment",selections:[s],type:"GroupsSuggestionUnit",abstractKey:null},{kind:"InlineFragment",selections:r,type:"Node",abstractKey:"__isNode"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:'cross_group_feed(badge_entry_point:"TAB_STORIES",environment:"DESKTOP",first:5,tab_visit_source:"GROUPS_ENGAGE_TAB")'},{alias:null,args:o,filters:["environment","badge_entry_point","tab_visit_source"],handle:"connection",key:"CometCrossGroupFeed_viewer_groups_tab_cross_group_feed",kind:"LinkedHandle",name:"cross_group_feed"}],storageKey:null}],storageKey:null}]},params:{id:"3302650656446643",metadata:{relayPreloadable:!0},name:"CometCrossGroupFeedRootQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a},null);
__d("CometCrossGroupFeed_viewer.graphql",["CometCrossGroupFeedPaginationQuery.graphql"],function(a,b,c,d,e,f){"use strict";a=function(){var a=["groups_tab","cross_group_feed"],c={args:null,kind:"FragmentSpread",name:"CometFeedUnit_feedUnit"};return{argumentDefinitions:[{kind:"RootArgument",name:"UFI2CommentsProvider_commentsKey"},{defaultValue:5,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{kind:"RootArgument",name:"displayCommentsContextEnableComment"},{kind:"RootArgument",name:"displayCommentsContextIsAdPreview"},{kind:"RootArgument",name:"displayCommentsContextIsAggregatedShare"},{kind:"RootArgument",name:"displayCommentsContextIsStorySet"},{kind:"RootArgument",name:"displayCommentsFeedbackContext"},{kind:"RootArgument",name:"feedLocation"},{kind:"RootArgument",name:"feedbackSource"},{kind:"RootArgument",name:"focusCommentID"},{kind:"RootArgument",name:"isComet"},{kind:"RootArgument",name:"privacySelectorRenderLocation"},{kind:"RootArgument",name:"renderLocation"},{kind:"RootArgument",name:"scale"},{kind:"RootArgument",name:"useDefaultActor"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["viewer"],operation:b("CometCrossGroupFeedPaginationQuery.graphql")}},name:"CometCrossGroupFeed_viewer",selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{alias:"cross_group_feed",args:[{kind:"Literal",name:"badge_entry_point",value:"TAB_STORIES"},{kind:"Literal",name:"environment",value:"DESKTOP"},{kind:"Literal",name:"tab_visit_source",value:"GROUPS_ENGAGE_TAB"}],concreteType:"CrossGroupFeedConnection",kind:"LinkedField",name:"__CometCrossGroupFeed_viewer_groups_tab_cross_group_feed_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"CrossGroupFeedEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c],type:"Story",abstractKey:null},{kind:"InlineFragment",selections:[c],type:"GroupsSuggestionUnit",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:'__CometCrossGroupFeed_viewer_groups_tab_cross_group_feed_connection(badge_entry_point:"TAB_STORIES",environment:"DESKTOP",tab_visit_source:"GROUPS_ENGAGE_TAB")'}],storageKey:null}],type:"Viewer",abstractKey:null}}();e.exports=a},null);
__d("CometCrossGroupFeedEndOfFeed.react",["fbt","CometCard.react","NullStateMedia","React","TetraButton.react","TetraNullState.react","XCometGroupsTabDiscoverControllerRouteBuilder","stylex"],function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=b("XCometGroupsTabDiscoverControllerRouteBuilder").buildURL({});function a(){return h.jsx("div",{className:"sjgh65i0",role:"article",children:h.jsx(b("CometCard.react"),{background:"white",dropShadow:1,children:h.jsx(b("TetraNullState.react"),{action:h.jsx(b("TetraButton.react"),{label:g._("Discover More Groups"),linkProps:{url:i}}),body:g._("Check back later for more updates"),headline:g._("You're All Caught Up"),icon:b("NullStateMedia")})})})}e.exports=a},null);
__d("CometCrossGroupFeed.react",["fbt","CometCrossGroupFeedEndOfFeed.react","CometFeedInfiniteScrollSuspenseList.react","CometFeedSection.react","CometFeedUnit.react","CometHeroFeedItem.react","CometRelay","React","VideoAutoplayLocalScopeProvider.react","VideoPlayerAutoplayRulesProvider","gkx","logCometFunnelEvent","recoverableViolation","CometCrossGroupFeed_viewer.graphql"],function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("CometRelay").usePaginationFragment,j=b("React");c=b("React");var k=c.useCallback,l=b("logCometFunnelEvent").logCometFunnelEvent,m=b("logCometFunnelEvent").useLogCometFunnelImpressionEvent,n=5;function a(a){m("GroupsCometTabWebFunnelDefinition","[impression][tab][x-group feed tab]");var c=i(h!==void 0?h:h=b("CometCrossGroupFeed_viewer.graphql"),a.viewer),d=c.data,e=c.hasNext,f=c.isLoadingNext,o=c.loadNext;d=d==null?void 0:(c=d.groups_tab)==null?void 0:c.cross_group_feed;c=(d==null?void 0:d.edges)||[];d=(d==null?void 0:(d=d.page_info)==null?void 0:d.has_next_page)||!1;var p=a.feedVariables;a=k(function(){l("GroupsCometTabWebFunnelDefinition","[scroll][tab][x-group feed tab][see more]");if(!e||f)return;o(n)},[e,f,o]);var q=0;c=c.map(function(a){return a==null?void 0:a.node}).map(function(a,c){var d;if(a==null)return null;d=(d=a==null?void 0:a.id)!=null?d:c;return j.jsx(b("CometHeroFeedItem.react"),{position:q,children:j.jsx(b("CometFeedUnit.react"),{"data-testid":void 0,feedUnit:a,position:q++,variables:p})},d)}).filter(Boolean);c.length===0&&b("recoverableViolation")("No feed stories are available to render in cross-group feed","groups_comet");!f&&!e&&c.push(j.jsx(b("CometCrossGroupFeedEndOfFeed.react"),{},"endOfFeed"));var r=b("VideoPlayerAutoplayRulesProvider").provideAutoplayRules(b("gkx")("1336948")?"default_feed":"basic");return j.jsx(b("VideoAutoplayLocalScopeProvider.react"),{autoplayLocalRules:r,children:j.jsx(b("CometFeedSection.react"),{sectionContents:j.jsx(b("CometFeedInfiniteScrollSuspenseList.react"),{hasMore:d,interactionSource:53,isLoading:f,onLoadMore:a,pageletName:"GroupsFeed",children:c}),title:g._("ATIVIDADE RECENTE")})})}e.exports=a},null);
__d("CometCrossGroupFeedRoot.react",["requireDeferredForDisplay","CometContentArea.react","CometCrossGroupFeedRoot.Loading.react","CometErrorBoundary.react","CometFeedWidthStyles","CometPlaceholder.react","CometRelay","React","RelayUFI2CommentsKeyContext","deferredLoadComponent","stylex","CometCrossGroupFeedRootQuery.graphql"],function(a,b,c,d,e,f){"use strict";var g,h;c=b("CometFeedWidthStyles").getFeedWidthStyles;b("CometRelay").graphql;var i=b("CometRelay").usePreloadedQuery,j=b("React"),k={container:{marginEnd:"tvfksri0",marginStart:"ozuftl9m",marginTop:"tr9rh885"},feedContainer:{maxWidth:"d2edcug0",minHeight:"h3gjbzrl",width:"oh7imozk"}},l=c(),m=g!==void 0?g:g=b("CometCrossGroupFeedRootQuery.graphql"),n=b("deferredLoadComponent")(b("requireDeferredForDisplay")("CometCrossGroupFeed.react"));function o(a){a=a.feedQueryReference;var b=i(m,a);return j.jsx(n,{feedVariables:a.variables,viewer:b==null?void 0:b.viewer})}function a(a){a=a.queries;return j.jsx(b("CometPlaceholder.react"),{fallback:j.jsx(b("CometCrossGroupFeedRoot.Loading.react"),{}),children:j.jsx(b("CometErrorBoundary.react"),{fallback:null,children:j.jsx("div",{className:(h||(h=b("stylex")))(k.container),children:j.jsx(b("CometContentArea.react"),{verticalAlign:"middle",children:j.jsx(b("RelayUFI2CommentsKeyContext").Provider,{value:"CometCrossGroupFeedRootQuery",children:j.jsx("div",{className:h(k.feedContainer,l.feedContainer),children:j.jsx(o,{feedQueryReference:a.feedQueryReference})})})})})})})}e.exports=a},null);