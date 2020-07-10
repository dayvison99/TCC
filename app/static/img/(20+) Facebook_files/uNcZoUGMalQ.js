if (self.CavalryLogger) { CavalryLogger.start_js(["4LwJ1"]); }

__d("CometGamingVideoFollowButton_page.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGamingVideoFollowButton_page",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"does_viewer_follow",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"live_video_subscription_status",storageKey:null}],type:"Page",abstractKey:null};e.exports=a},null);
__d("CometGamingVideoMutationsFollowMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"does_viewer_follow",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometGamingVideoMutationsFollowMutation",selections:[{alias:null,args:b,concreteType:"ActorSubscribeResponsePayload",kind:"LinkedField",name:"actor_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"subscribee",plural:!1,selections:[c,d,{kind:"InlineFragment",selections:[e,{args:null,kind:"FragmentSpread",name:"CometGamingLeftRailStreamerItem_page"}],type:"Page",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometGamingVideoMutationsFollowMutation",selections:[{alias:null,args:b,concreteType:"ActorSubscribeResponsePayload",kind:"LinkedField",name:"actor_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"subscribee",plural:!1,selections:[c,d,{kind:"InlineFragment",selections:[e,f,{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"currently_live_video",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"permalink_url",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"live_viewer_count_read_only",storageKey:null},{alias:null,args:null,concreteType:"Game",kind:"LinkedField",name:"attributed_game",plural:!1,selections:[d,f],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[c,d],storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"profile_picture(height:60,width:60)"},{alias:null,args:null,kind:"ScalarField",name:"streamer_hub_uri",storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"GamesPlayedConnection",kind:"LinkedField",name:"games_played",plural:!1,selections:[{alias:null,args:null,concreteType:"GamesPlayedEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Game",kind:"LinkedField",name:"node",plural:!1,selections:[f,d],storageKey:null}],storageKey:null}],storageKey:"games_played(first:1)"}],type:"Page",abstractKey:null}],storageKey:null}],storageKey:null}]},params:{id:"2873508256005856",metadata:{},name:"CometGamingVideoMutationsFollowMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("CometGamingVideoMutationsLiveVideoSubscriptionStatusMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"LiveVideoSubscriptionStatusResponse",kind:"LinkedField",name:"live_video_set_subscription_status",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"does_viewer_follow",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"live_video_subscription_status",storageKey:null}],type:"Page",abstractKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometGamingVideoMutationsLiveVideoSubscriptionStatusMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometGamingVideoMutationsLiveVideoSubscriptionStatusMutation",selections:b},params:{id:"2824292917635450",metadata:{},name:"CometGamingVideoMutationsLiveVideoSubscriptionStatusMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("CometGamingVideoMutationsUnfollowMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"ActorUnsubscribeResponsePayload",kind:"LinkedField",name:"actor_unsubscribe",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"unsubscribee",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"does_viewer_follow",storageKey:null}],type:"Page",abstractKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometGamingVideoMutationsUnfollowMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometGamingVideoMutationsUnfollowMutation",selections:b},params:{id:"2548778075244116",metadata:{},name:"CometGamingVideoMutationsUnfollowMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("CometTahoeUpNextOverlay_video.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTahoeUpNextOverlay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null},{alias:null,args:null,concreteType:"VideoThumbnail",kind:"LinkedField",name:"preferred_thumbnail",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"height",value:145},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:257}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:'image(height:145,sizing:"cover-fill-cropped",width:257)'}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometTahoeVideoOwner_actor"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"LiveVideoCometBadge_video"}],type:"Video",abstractKey:null};e.exports=a},null);
__d("useConfiguredMutation",["CometRelay","React"],function(a,b,c,d,e,f){"use strict";var g=b("CometRelay").useMutation;c=b("React");var h=c.useCallback;function a(a,b){a=g(a);var c=a[0];a=a[1];var d=h(function(a){if(a==null)return c(b);else if(typeof a==="function")return c(babelHelpers["extends"]({},b,a(b)));else return c(babelHelpers["extends"]({},b,a))},[c,b]);return[d,a]}e.exports=a},null);
__d("CometGamingVideoMutations",["CometRelay","React","recoverableViolation","useConfiguredMutation","CometGamingVideoMutationsFollowMutation.graphql","CometGamingVideoMutationsUnfollowMutation.graphql","CometGamingVideoMutationsLiveVideoSubscriptionStatusMutation.graphql"],function(a,b,c,d,e,f){"use strict";var g,h,i,j=b("CometRelay").ConnectionHandler;b("CometRelay").graphql;f=b("React");var k=f.useMemo;function l(a){return function(c){b("recoverableViolation")("Mutation "+a+" failed","gaming_video",{error:c})}}var m=g!==void 0?g:g=b("CometGamingVideoMutationsFollowMutation.graphql"),n=h!==void 0?h:h=b("CometGamingVideoMutationsUnfollowMutation.graphql"),o=i!==void 0?i:i=b("CometGamingVideoMutationsLiveVideoSubscriptionStatusMutation.graphql");function a(a,c,d){var e=k(function(){var b=function(b){var c=b.get(a);if(c==null)return;c=j.getConnection(c,"Gaming_followed_streamers");if(c==null)return;var d=b.getRootField("actor_subscribe");if(d==null)return;d=d.getLinkedRecord("subscribee");if(d==null)return;b=j.createEdge(b,c,d,"UserFollowedStreamersEdge");j.insertEdgeBefore(c,b)};return{onError:l("CometGamingVideoMutationsFollowMutation"),optimisticResponse:{actor_subscribe:{subscribee:{__typename:"Page",does_viewer_follow:!0,id:c}}},updater:b,variables:{input:{subscribe_location:d,subscribee_id:c}}}},[a,d,c]);return b("useConfiguredMutation")(m,e)}function c(a,c,d){var e=k(function(){var b=function(b){var c=b.get(a);if(c==null)return;c=j.getConnection(c,"Gaming_followed_streamers");if(c==null)return;b=b.getRootField("actor_unsubscribe");if(b==null)return;b=b.getLinkedRecord("unsubscribee");if(b==null)return;j.deleteNode(c,b.getDataID())};return{onError:l("CometGamingVideoMutationsUnfollowMutation"),optimisticResponse:{actor_unsubscribe:{unsubscribee:{__typename:"Page",does_viewer_follow:!1,id:c}}},updater:b,variables:{input:{subscribe_location:d,unsubscribee_id:c}}}},[a,d,c]);return b("useConfiguredMutation")(n,e)}function d(a,c,d,e){var f=k(function(){return{onError:l("CometGamingVideoMutationsLiveVideoSubscriptionStatusMutation"),optimisticResponse:{live_video_set_subscription_status:{actor:{__typename:"Page",does_viewer_follow:c||d==="ALL",id:a,live_video_subscription_status:d}}},variables:{input:{subscription_status:d,surface:e,target_actor_id:a}}}},[c,a,d,e]);return b("useConfiguredMutation")(o,f)}e.exports={useFollowMutation:a,useLiveVideoSubscriptionMutation:d,useUnfollowMutation:c}},null);
__d("GamingDestinationTypedLoggerLite",["Banzai","generateLiteTypedLogger"],function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:GamingDestinationLoggerConfig")},null);
__d("GamingVideoDestinationLoggingContext",["React"],function(a,b,c,d,e,f){"use strict";a=b("React");c={externalEntrypoint:"unknown",surface:"unknown"};e.exports=a.createContext(c)},null);
__d("useGamingVideoDestinationLoggingContext",["GamingVideoDestinationLoggingContext","React","useShallowEqualMemo"],function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useContext;function a(a){var c=g(b("GamingVideoDestinationLoggingContext")),d=c.externalEntrypoint;c=c.surface;return b("useShallowEqualMemo")(babelHelpers["extends"]({external_entrypoint:d,surface:c},a))}e.exports=a},null);
__d("CometGamingVideoFollowButton.react",["ix","fbt","Actor","CometGamingVideoMutations","CometRelay","GamingDestinationTypedLoggerLite","React","TetraButton.react","TetraButtonGroup.react","fbicon","recoverableViolation","useGamingVideoDestinationLoggingContext","CometGamingVideoFollowButton_page.graphql"],function(a,b,c,d,e,f,g,h){"use strict";var i,j=b("Actor").useActor,k=b("CometGamingVideoMutations").useFollowMutation,l=b("CometGamingVideoMutations").useLiveVideoSubscriptionMutation,m=b("CometGamingVideoMutations").useUnfollowMutation;b("CometRelay").graphql;var n=b("CometRelay").useFragment,o=b("GamingDestinationTypedLoggerLite").log,p=b("React"),q=i!==void 0?i:i=b("CometGamingVideoFollowButton_page.graphql");function a(a){var c=a.followLocation,d=a.logDestinationEvents;d=d===void 0?!0:d;var e=a.page,f=a.showBell;f=f===void 0?!1:f;a=babelHelpers.objectWithoutPropertiesLoose(a,["followLocation","logDestinationEvents","page","showBell"]);e=n(q,e);var g=e.does_viewer_follow,h=e.id;e=e.live_video_subscription_status;g=!!g;if(h==null){b("recoverableViolation")("Cannot have null pageID for follow button","gaming_video");return null}return p.jsx(r,{buttonProps:a,followLocation:c,hardFollowStatus:e,isFollowing:g,logDestinationEvents:d,pageID:h,showBell:f})}function r(a){var c=a.buttonProps,d=a.followLocation,e=a.hardFollowStatus,f=a.isFollowing,i=a.logDestinationEvents,n=a.pageID;a=a.showBell;var q=j();q=q[0];var r=k(q,n,d),s=r[0];r=r[1];q=m(q,n,d);var t=q[0];d=q[1];q=l(n,f,"ALL","UNKNOWN");var u=q[0];q=q[1];var v=l(n,f,"SOME","UNKNOWN"),w=v[0];v=v[1];var x=b("useGamingVideoDestinationLoggingContext")({page_id:n});n=function(a){f?t():s(),i&&o(babelHelpers["extends"]({},x,{event:f?"unfollow_streamer":"follow_streamer"})),c.onPress&&c.onPress(a)};var y=function(a){e==="ALL"?w():u()};if(!f||!a)return p.jsx(b("TetraButton.react"),babelHelpers["extends"]({disabled:r||d,icon:f?b("fbicon")._(g("602176"),16):b("fbicon")._(g("618352"),16),label:f?h._("Seguindo"):h._("Seguir"),type:f?"secondary":"primary"},c,{onPress:n}));else return p.jsx(b("TetraButtonGroup.react"),{paddingHorizontal:0,paddingTop:0,primary:{disabled:r||d,icon:b("fbicon")._(g("602176"),16),label:h._("Seguindo"),onPress:n,type:"secondary"},secondaryIcon:{disabled:q||v,icon:e===null||e==="SOME"?b("fbicon")._(g("532355"),16):e==="ALL"?b("fbicon")._(g("508240"),16):b("fbicon")._(g("569284"),16),label:"bell",onPress:y},size:"medium"})}e.exports=a},null);
__d("useVideoPlayerPlayFromBeginning",["React","VideoPlayerHooks"],function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=b("VideoPlayerHooks").useController;function a(a){var b=h(),c=g(function(){b.seek(0),b.play(a)},[b,a]);return c}e.exports=a},null);
__d("CometTahoeEndScreenProgressCircle.react",["CometImage.react","React","stylex","useInterval"],function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useEffect,j=c.useRef,k=c.useState,l={circlesContainer:{overflowX:"hihg3u9x",overflowY:"ggxiycxj",transform:"hgltlino"},playButton:{display:"a8c37x1j",height:"k7cz35w2",marginTop:"km676qkl",marginEnd:"ad2k81qe",marginBottom:"myj7ivm5",marginStart:"f9o22wc5",position:"pmk7jnqg",width:"bsnbvmp4"},progressCircleContainer:{alignItems:"bp9cbjyn",display:"j83agx80",justifyContent:"taijpn5t",marginBottom:"ama3r5zh"}};function a(a){var c=a.circleDiameter;c=c===void 0?52:c;var d=a.isMakingProgress,e=a.onProgressDone;a=a.timeoutSec;var f=c/2,m=f*2*Math.PI,n=m/100,o=k(m),p=o[0],q=o[1];o=k(!1);var r=o[0],s=o[1];b("useInterval")(!d||r?null:function(){if(p<=2){q(0);s(!0);return}q(p-n)},a*10,[d,r]);var t=j(e);i(function(){t.current=e},[e]);i(function(){if(r){var a=t.current;a()}},[r]);return h.jsxs("div",{className:(g||(g=b("stylex")))(l.progressCircleContainer),children:[h.jsxs("svg",{className:g(l.circlesContainer),style:{height:c,width:c},children:[h.jsx("circle",{cx:f,cy:f,fill:"var(--fds-black-alpha-40)",r:f}),h.jsx("circle",{cx:f,cy:f,fill:"transparent",r:f,stroke:"var(--always-white)",strokeDasharray:m,strokeDashoffset:p,strokeWidth:4})]}),h.jsx(b("CometImage.react"),{src:"/images/video/player/embedded_controls/icons/play.png",xstyle:l.playButton})]})}e.exports=a},null);
__d("CometTahoeUpNextOverlay.react",["ix","fbt","CometImage.react","CometLink.react","FBLogger","CometRelay","CometResponsiveColumns.react","CometTahoeEndScreenProgressCircle.react","CometTahoeVideoOwner.react","CometTextWithEntitiesRelay.react","LiveVideoCometBadge.react","React","TetraText.react","TetraTextPairing.react","VideoPlayerLoggingExternalLogContext","useRoutePassthroughProps","asset","formatDurationSeconds","gkx","requireCond","stylex","useCometRouterDispatcher","useInnerMostTrackingCode","useCometTahoeChainingDepth","cr:793833","CometTahoeUpNextOverlay_video.graphql"],function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=b("FBLogger")("watch_www_bug_rotation");b("CometRelay").graphql;var l=b("CometRelay").useFragment,m=b("React");c=b("React");var n=c.useContext,o=c.useState,p=b("useCometTahoeChainingDepth").useChainingDepthContext,q={backgroundThumbnail:{backgroundPosition:"skiu6z9h",backgroundSize:"r4lidvzm",borderBottomStartRadius:"qttc61fc",borderTopStartRadius:"jk6sbkaj",height:"m1bnnib3",width:"kfpcsd3p"},cancelLink:{alignItems:"bp9cbjyn",bottom:"d2iitwg3",color:"ljqsnud1",display:"j83agx80",end:"swmj3c3o",paddingBottom:"e5nlhep0",position:"pmk7jnqg",":hover":{textDecoration:"gpro0wi8"}},cancelLinkIcon:{marginEnd:"cgat1ltu"},centeredContainer:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t",height:"datstx6m",justifyContent:"taijpn5t",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"k4urcfbm"},durationOverlay:{backgroundColor:"d6rk862h",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",bottom:"irdul1xz",end:"qpq5lcxm",marginTop:"f43gzcya",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"bnywmjdh",paddingTop:"fdg1wqfs",paddingEnd:"jxrgncrl",paddingBottom:"ae35evdt",paddingStart:"qnrpqo6b",position:"pmk7jnqg"},headerLink:{color:"ljqsnud1"},liveOverlay:{position:"pmk7jnqg",start:"hnlv2pgd",top:"plgsh5y4"},metaColumn:{flexBasis:"ovwxwvn6"},metadataContainer:{display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"taijpn5t",marginTop:"n1l5q3vz",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"fop5sh7t"},thumbnailColumn:{flexBasis:"hwwcs9y8"},upNextOverlay:{animationDuration:"ipxafjjy",animationFillMode:"j1l0snac",animationIterationCount:"h9pa7xm5",animationName:"sbevj9st",backgroundColor:"by8nzva6",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",bottom:"cdjodzko",end:"swmj3c3o",height:"m1bnnib3",lineHeight:"soycq5t1",opacity:"pedkr2u6",position:"pmk7jnqg",width:"eezhb0co"},upNextText:{textShadow:"osv5lhw2"}};function a(a){var c,d=a.initialTracePolicy,e=a.isMakingProgress,f=a.logTahoeEvent,r=a.navigateToNextVideo,s=a.nextVideoURL,t=a.onCancelCallback,u=a.onProgressDone,v=a.reactionVideoChannelType,w=a.subOrigin,x=a.timeoutSec,y=a.video;a=a.visible;var z=o(!1),A=z[0];z=z[1];y=l(i!==void 0?i:i=b("CometTahoeUpNextOverlay_video.graphql"),y);var B=n(b("VideoPlayerLoggingExternalLogContext")),C=B.externalLogID;B=B.externalLogType;var D=p(),E=D.chainingDepthDispatch;D=b("useInnerMostTrackingCode")();var F=b("useRoutePassthroughProps")();c=(c=y.preferred_thumbnail)==null?void 0:(c=c.image)==null?void 0:c.uri;c=c!=null?{backgroundImage:"url("+c+")"}:{backgroundColor:"var(--disabled-icon)"};c=m.jsx("div",{className:(j||(j=b("stylex")))(q.backgroundThumbnail),style:c});var G=!!y.is_live_streaming,H=G?m.jsx("div",{className:(j||(j=b("stylex")))(q.liveOverlay),children:m.jsx(b("LiveVideoCometBadge.react"),{pulse:!0,size:"small",video:y})}):null,I=y.playable_duration;G=!G&&I!=null?m.jsx("div",{className:(j||(j=b("stylex")))(q.durationOverlay),children:m.jsx(b("TetraText.react"),{color:"white",type:"body4",children:b("formatDurationSeconds")(I)})}):null;I=(I=y.owner)==null?void 0:I.name;var J=y.title,K=null;J!=null&&J.text!=null&&J.text!==""?K=m.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:J}):I!=null&&(K=h._("V\u00eddeo de {name}",[h._param("name",I)]));J=y.owner!=null?m.jsx(b("CometTahoeVideoOwner.react"),{owner:y.owner}):null;var L=b("useCometRouterDispatcher")(),M=babelHelpers["extends"]({channelEntryPoint:F==null?void 0:F.channelEntryPoint,channelID:F==null?void 0:F.channelID,externalLogID:C,externalLogType:B,initialTracePolicy:d,playerOriginOverride:F==null?void 0:F.playerOriginOverride,playerSubOrigin:w,reactionVideoChannelType:v},b("gkx")("1369260")?{trackingCode:D}:{});I=u!=null?u:function(){if(L==null){k.warn("Route dispatcher is null, unable to navigate to next video.");return}if(s===""||s==null){k.warn("Cannot use Comet Router to navigate to an empty URL.");return}f&&f("up_next_overlay_redirect_on_countdown_finished");E&&E({type:"INCREMENT"});L.go(s,{passthroughProps:M,target:"self"})};y=r||function(){b("cr:793833")!=null&&b("cr:793833").go(s),L==null?k.warn("Route dispatcher is null, unable to navigate to next video."):s===""?k.warn("Cannot use Comet Router to navigate to an empty URL."):(f&&f("up_next_overlay_redirect_on_click"),E&&E({type:"INCREMENT"}),L.go(s,{passthroughProps:M,target:"self"}))};C=m.jsx(b("CometLink.react"),{onClick:y,xstyle:q.headerLink,children:K});a&&!A&&(z(!0),f&&f("up_next_overlay_shown"));return a?m.jsx("div",{className:(j||(j=b("stylex")))(q.upNextOverlay),children:m.jsxs(b("CometResponsiveColumns.react").Container,{children:[m.jsx(b("CometResponsiveColumns.react").Column,{xstyle:q.thumbnailColumn,children:m.jsxs(b("CometLink.react"),{onClick:y,children:[c,m.jsxs("div",{className:(j||(j=b("stylex")))(q.centeredContainer),children:[m.jsx(b("CometTahoeEndScreenProgressCircle.react"),{circleDiameter:52,isMakingProgress:e,onProgressDone:I,timeoutSec:x}),m.jsx("div",{className:(j||(j=b("stylex")))(q.upNextText),children:m.jsx(b("TetraText.react"),{color:"white",type:"headlineEmphasized3",children:h._("A SEGUIR")})})]}),G,H]})}),m.jsxs(b("CometResponsiveColumns.react").Column,{xstyle:q.metaColumn,children:[m.jsx("div",{className:(j||(j=b("stylex")))(q.metadataContainer),children:m.jsx(b("TetraTextPairing.react"),{body:J,bodyColor:"disabled",bodyLineLimit:1,headline:C,headlineColor:"white",headlineLineLimit:3,level:4})}),m.jsx(b("CometLink.react"),{onClick:t,children:m.jsxs("div",{className:(j||(j=b("stylex")))(q.cancelLink),children:[m.jsx(b("CometImage.react"),{src:g("368787")}),m.jsx("div",{className:(j||(j=b("stylex")))(q.cancelLinkIcon)}),m.jsx(b("TetraText.react"),{color:"white",type:"headline3",children:h._("Cancelar")})]})})]})]})}):null}e.exports=a},null);
__d("GamingArenaFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","gaming_arena");c=b("FalcoLoggerInternal").create(a);e.exports=c},null);