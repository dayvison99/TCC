if (self.CavalryLogger) { CavalryLogger.start_js(["GL5LO"]); }

__d("mediaAttachmentAreaTransform",["Promise","promiseDone","qex"],function(a,b,c,d,e,f){"use strict";var g=b("qex")._("1221850")===!0;function h(a){if(a.fileType==="PHOTO"){var b;b=j(a==null?void 0:(b=a.data)==null?void 0:b.tags);return{photo:babelHelpers["extends"]({},a.data,{tags:b})}}else if(a.fileType==="VIDEO")return{video:{id:a.data.id,notify_when_processed:!0}};return null}function a(a,c,d){if(g){var e=[];for(var f in a.mediaUploadStatuses)e.push(a.mediaUploadStatuses[f].onFileComplete);b("promiseDone")(b("Promise").all(e).then(function(b){d(babelHelpers["extends"]({},c,{attachments:b.map(function(b){var c=b.attachmentID;if(b.attachmentType==="PHOTO")return{photo:babelHelpers["extends"]({id:c},i(c,a.mediaAttachments))};if(b.attachmentType==="VIDEO")return{video:{id:c,notify_when_processed:!0}}})}))}));return}if(a.mediaAttachments==null){d(c);return}d(babelHelpers["extends"]({},c,{attachments:a.mediaAttachments.map(function(a){return a.state==="UPLOADED"||a.state==="PREEXISTING"?h(a):null}).filter(Boolean)}))}function i(a,b){b=((b=b)!=null?b:[]).find(function(b){var c;return(b==null?void 0:(c=b.data)==null?void 0:c.id)===a||(b==null?void 0:b.state)==="UPLOADED"&&(b==null?void 0:b.fileType)==="PHOTO"&&(b==null?void 0:b.originalEntID)===a});if(b!=null&&b.fileType==="PHOTO"&&((b==null?void 0:b.state)==="UPLOADED"||(b==null?void 0:b.state)==="PREEXISTING")){var c;c=j(b==null?void 0:(c=b.data)==null?void 0:c.tags);return babelHelpers["extends"]({},b.data,{tags:c})}else return null}function j(a){if(a==null)return;return a.map(function(a){if(a!=null){return babelHelpers["extends"]({},a,{taggee:{id:(a=a.taggee)==null?void 0:a.id}})}})}e.exports=a},null);
__d("LWICometTooltip.react",["fbt","CometLink.react","CometPopover.react","React","TetraText.react","TetraTextPairing.react","stylex"],function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){var c=a.body,d=a.headline;a=a.learnMoreURL;return h.jsx(b("CometPopover.react"),{withArrow:!0,children:h.jsxs("div",{className:"k4urcfbm tw6a2znq f10w8fjw d1544ag0 pybr56ya lyse4a7x",children:[h.jsx(b("TetraTextPairing.react"),{body:c,headline:d,level:4}),a!=null&&h.jsx("div",{className:"n1l5q3vz",children:h.jsx(b("CometLink.react"),{href:a,target:"_blank",children:h.jsx(b("TetraText.react"),{color:"blueLink",type:"bodyLink4",children:g._("Saiba mais")})})})]})})}e.exports=a},null);
__d("castStringToEnumValue",[],function(a,b,c,d,e,f){"use strict";function a(a,b){if(b==null)return null;var c=Object.keys(a);for(var d=0;d<c.length;d++){var e=c[d];e=a[e];if(e===b)return e}return null}e.exports=a},null);