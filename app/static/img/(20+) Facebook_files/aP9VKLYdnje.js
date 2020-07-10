if (self.CavalryLogger) { CavalryLogger.start_js(["R4Wfx"]); }

__d("PagesLoggerEventEnum",[],function(a,b,c,d,e,f){e.exports={CLICK:"click",CREATE:"create",DELETE:"delete",DRAG:"drag",HOVER:"hover",IMPRESSION:"impression",RECEIVE_REQUEST:"receive_request",RECEIVE_RESPONSE:"receive_response",SAVE:"save",SCROLL:"scroll",SEND_REQUEST:"send_request",SEND_RESPONSE:"send_response",UNSAVE:"unsave",UPDATE:"update"}},null);
__d("CometPageContext",["React"],function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({isAdminViewAsPublic:!1,isSelfView:!1,pageID:"",setShouldShowLikeChaining:function(a){},shouldShowLikeChaining:!1});e.exports=c},null);
__d("PagesTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setConnectionClass=function(a){this.$1.connection_class=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setEventLocation=function(a){this.$1.event_location=a;return this};c.setEventTarget=function(a){this.$1.event_target=a;return this};c.setLogSource=function(a){this.$1.log_source=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setRawClientTime=function(a){this.$1.raw_client_time=a;return this};c.setSessionid=function(a){this.$1.sessionid=a;return this};c.setTags=function(a){this.$1.tags=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={connection_class:!0,event:!0,event_location:!0,event_target:!0,log_source:!0,page_id:!0,raw_client_time:!0,sessionid:!0,tags:!0,time:!0,weight:!0};e.exports=a},null);
__d("PagesPermalinkImpressionFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","pages_permalink_impression");c=b("FalcoLoggerInternal").create(a);e.exports=c},null);
__d("PagesLogger",["PagesLoggerEventEnum","PagesTypedLogger"],function(a,b,c,d,e,f){var g="extra_data_";a={log:function(a,c,d,e,f,h){e===void 0&&(e=null);f===void 0&&(f=[]);var i={},j=h||{};Object.keys(j||{}).forEach(function(a){var b=j[a];(b instanceof Array||b instanceof Object)&&(b=JSON.stringify(b));i[g+a]=b});new(b("PagesTypedLogger"))().setPageID(a).setEvent(c).setEventTarget(d).setEventLocation(e).setLogSource("pages_logger").setTags(f).updateExtraData(i).log()},registerLogOnClick:function(a,c,d,e,f,g){var h=this;e===void 0&&(e=null);f===void 0&&(f=[]);g===void 0&&(g={});a.addEventListener("click",function(){h.log(c,b("PagesLoggerEventEnum").CLICK,d,e,f,g)})}};e.exports=a},null);