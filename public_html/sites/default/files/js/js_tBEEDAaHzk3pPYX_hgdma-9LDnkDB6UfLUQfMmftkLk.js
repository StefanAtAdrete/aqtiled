!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Insert code block":"Insert code block","Plain text":"Plain text"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={67:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(609),i=n.n(o)()((function(e){return e[1]}));i.push([e.id,".ck-content pre{background:hsla(0,0%,78%,.3);border:1px solid #c4c4c4;border-radius:2px;color:#353535;direction:ltr;font-style:normal;min-width:200px;padding:1em;tab-size:4;text-align:left;white-space:pre-wrap}.ck-content pre code{background:unset;border-radius:0;padding:0}.ck.ck-editor__editable pre{position:relative}.ck.ck-editor__editable pre[data-language]:after{content:attr(data-language);position:absolute}:root{--ck-color-code-block-label-background:#757575}.ck.ck-editor__editable pre[data-language]:after{background:var(--ck-color-code-block-label-background);color:#fff;font-family:var(--ck-font-face);font-size:10px;line-height:16px;padding:var(--ck-spacing-tiny) var(--ck-spacing-medium);right:10px;top:-1px;white-space:nowrap}.ck.ck-code-block-dropdown .ck-dropdown__panel{max-height:250px;overflow-x:hidden;overflow-y:auto}",""]);const r=i},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},62:(e,t,n)=>{"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],s=t.base?r[0]+t.base:r[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=c(d),g={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(g)):a.push({identifier:d,updater:h(g,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function g(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,p=0;function h(e,t){var n,o,i;if(t.singleton){var r=p++;n=m||(m=l(t)),o=g.bind(null,n,r,!1),i=g.bind(null,n,r,!0)}else n=l(t),o=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=c(n[o]);a[i].references--}for(var r=s(e,t),l=0;l<n.length;l++){var d=c(n[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=r}}}},704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},492:(e,t,n)=>{e.exports=n(79)("./src/engine.js")},331:(e,t,n)=>{e.exports=n(79)("./src/enter.js")},273:(e,t,n)=>{e.exports=n(79)("./src/ui.js")},209:(e,t,n)=>{e.exports=n(79)("./src/utils.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var o={};(()=>{"use strict";n.r(o),n.d(o,{CodeBlock:()=>E,CodeBlockEditing:()=>v,CodeBlockUI:()=>A});var e=n(704),t=n(331),i=n(492),r=n(209);function a(e){const t=e.t,n=e.config.get("codeBlock.languages");for(const e of n)"Plain text"===e.label&&(e.label=t("Plain text")),void 0===e.class&&(e.class=`language-${e.language}`);return n}function c(e,t,n){const o={};for(const i of e)"class"===t?o[i[t].split(" ").shift()]=i[n]:o[i[t]]=i[n];return o}function s(e){return e.data.match(/^(\s*)/)[0]}function l(e){const t=e.document.selection,n=[];if(t.isCollapsed)n.push(t.anchor);else{const o=t.getFirstRange().getWalker({ignoreElementEnd:!0,direction:"backward"});for(const{item:t}of o)if(t.is("$textProxy")&&t.parent.is("element","codeBlock")){const o=s(t.textNode),{parent:i,startOffset:r}=t.textNode,a=e.createPositionAt(i,r+o.length);n.push(a)}}return n}function d(e){const t=(0,r.first)(e.getSelectedBlocks());return t&&t.is("element","codeBlock")}function u(e,t){return!t.is("rootElement")&&!e.isLimit(t)&&e.checkChild(t.parent,"codeBlock")}class g extends e.Command{constructor(e){super(e),this._lastLanguage=null}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor,n=t.model,o=n.document.selection,i=a(t)[0],r=Array.from(o.getSelectedBlocks()),c=void 0===e.forceValue?!this.value:e.forceValue,s=function(e,t,n){if(e.language)return e.language;if(e.usePreviousLanguageChoice&&t)return t;return n}(e,this._lastLanguage,i.language);n.change((e=>{c?this._applyCodeBlock(e,r,s):this._removeCodeBlock(e,r)}))}_getValue(){const e=this.editor.model.document.selection,t=(0,r.first)(e.getSelectedBlocks());return!!!(!t||!t.is("element","codeBlock"))&&t.getAttribute("language")}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,n=(0,r.first)(e.getSelectedBlocks());return!!n&&u(t,n)}_applyCodeBlock(e,t,n){this._lastLanguage=n;const o=this.editor.model.schema,i=t.filter((e=>u(o,e)));for(const t of i)e.rename(t,"codeBlock"),e.setAttribute("language",n,t),o.removeDisallowedAttributes([t],e),Array.from(t.getChildren()).filter((e=>!o.checkChild(t,e))).forEach((t=>e.remove(t)));i.reverse().forEach(((t,n)=>{const o=i[n+1];t.previousSibling===o&&(e.appendElement("softBreak",o),e.merge(e.createPositionBefore(t)))}))}_removeCodeBlock(e,t){const n=t.filter((e=>e.is("element","codeBlock")));for(const t of n){const n=e.createRangeOn(t);for(const t of Array.from(n.getItems()).reverse())if(t.is("element","softBreak")&&t.parent.is("element","codeBlock")){const{position:n}=e.split(e.createPositionBefore(t));e.rename(n.nodeAfter,"paragraph"),e.removeAttribute("language",n.nodeAfter),e.remove(t)}e.rename(t,"paragraph"),e.removeAttribute("language",t)}}}class f extends e.Command{constructor(e){super(e),this._indentSequence=e.config.get("codeBlock.indentSequence")}refresh(){this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.model;e.change((t=>{const n=l(e);for(const o of n){const n=t.createText(this._indentSequence);e.insertContent(n,o)}}))}_checkEnabled(){return!!this._indentSequence&&d(this.editor.model.document.selection)}}class m extends e.Command{constructor(e){super(e),this._indentSequence=e.config.get("codeBlock.indentSequence")}refresh(){this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.model;e.change((()=>{const t=l(e);for(const n of t){const t=p(e,n,this._indentSequence);t&&e.deleteContent(e.createSelection(t))}}))}_checkEnabled(){if(!this._indentSequence)return!1;const e=this.editor.model;return!!d(e.document.selection)&&l(e).some((t=>p(e,t,this._indentSequence)))}}function p(e,t,n){const o=function(e){let t=e.parent.getChild(e.index);t&&!t.is("element","softBreak")||(t=e.nodeBefore);if(!t||t.is("element","softBreak"))return null;return t}(t);if(!o)return null;const i=s(o),r=i.lastIndexOf(n);if(r+n.length!==i.length)return null;if(-1===r)return null;const{parent:a,startOffset:c}=o;return e.createRange(e.createPositionAt(a,c+r),e.createPositionAt(a,c+r+n.length))}function h(e,t,n=!1){const o=c(t,"language","class"),i=c(t,"language","label");return(t,r,a)=>{const{writer:c,mapper:s,consumable:l}=a;if(!l.consume(r.item,"insert"))return;const d=r.item.getAttribute("language"),u=s.toViewPosition(e.createPositionBefore(r.item)),g={};n&&(g["data-language"]=i[d],g.spellcheck="false");const f=c.createContainerElement("code",{class:o[d]||null}),m=c.createContainerElement("pre",g,f);c.insert(u,m),s.bindElements(r.item,f)}}const b="paragraph";class v extends e.Plugin{static get pluginName(){return"CodeBlockEditing"}static get requires(){return[t.ShiftEnter]}constructor(e){super(e),e.config.define("codeBlock",{languages:[{language:"plaintext",label:"Plain text"},{language:"c",label:"C"},{language:"cs",label:"C#"},{language:"cpp",label:"C++"},{language:"css",label:"CSS"},{language:"diff",label:"Diff"},{language:"html",label:"HTML"},{language:"java",label:"Java"},{language:"javascript",label:"JavaScript"},{language:"php",label:"PHP"},{language:"python",label:"Python"},{language:"ruby",label:"Ruby"},{language:"typescript",label:"TypeScript"},{language:"xml",label:"XML"}],indentSequence:"\t"})}init(){const e=this.editor,t=e.model.schema,n=e.model,o=e.editing.view,r=e.plugins.has("DocumentListEditing"),s=a(e);e.commands.add("codeBlock",new g(e)),e.commands.add("indentCodeBlock",new f(e)),e.commands.add("outdentCodeBlock",new m(e)),this.listenTo(o.document,"tab",((t,n)=>{const o=n.shiftKey?"outdentCodeBlock":"indentCodeBlock";e.commands.get(o).isEnabled&&(e.execute(o),n.stopPropagation(),n.preventDefault(),t.stop())}),{context:"pre"}),t.register("codeBlock",{allowWhere:"$block",allowChildren:"$text",isBlock:!0,allowAttributes:["language"]}),t.addAttributeCheck(((e,t)=>{const n=e.endsWith("codeBlock")&&t.startsWith("list")&&"list"!==t;return!(!r||!n)||!e.endsWith("codeBlock $text")&&void 0})),e.model.schema.addChildCheck(((e,t)=>{if(e.endsWith("codeBlock")&&t.isObject)return!1})),e.editing.downcastDispatcher.on("insert:codeBlock",h(n,s,!0)),e.data.downcastDispatcher.on("insert:codeBlock",h(n,s)),e.data.downcastDispatcher.on("insert:softBreak",function(e){return(t,n,o)=>{if("codeBlock"!==n.item.parent.name)return;const{writer:i,mapper:r,consumable:a}=o;if(!a.consume(n.item,"insert"))return;const c=r.toViewPosition(e.createPositionBefore(n.item));i.insert(c,i.createText("\n"))}}(n),{priority:"high"}),e.data.upcastDispatcher.on("element:code",function(e,t){const n=c(t,"class","language"),o=t[0].language;return(e,t,i)=>{const r=t.viewItem,a=r.parent;if(!a||!a.is("element","pre"))return;if(t.modelCursor.findAncestor("codeBlock"))return;const{consumable:c,writer:s}=i;if(!c.test(r,{name:!0}))return;const l=s.createElement("codeBlock"),d=[...r.getClassNames()];d.length||d.push("");for(const e of d){const t=n[e];if(t){s.setAttribute("language",t,l);break}}l.hasAttribute("language")||s.setAttribute("language",o,l),i.convertChildren(r,l),i.safeInsert(l,t.modelCursor)&&(c.consume(r,{name:!0}),i.updateConversionResult(l,t))}}(0,s)),e.data.upcastDispatcher.on("text",((e,t,{consumable:n,writer:o})=>{let i=t.modelCursor;if(!n.test(t.viewItem))return;if(!i.findAncestor("codeBlock"))return;n.consume(t.viewItem);const r=t.viewItem.data.split("\n").map((e=>o.createText(e))),a=r[r.length-1];for(const e of r)if(o.insert(e,i),i=i.getShiftedBy(e.offsetSize),e!==a){const e=o.createElement("softBreak");o.insert(e,i),i=o.createPositionAfter(e)}t.modelRange=o.createRange(t.modelCursor,i),t.modelCursor=i})),e.data.upcastDispatcher.on("element:pre",((e,t,{consumable:n})=>{const o=t.viewItem;if(o.findAncestor("pre"))return;const i=Array.from(o.getChildren()),r=i.find((e=>e.is("element","code")));if(r)for(const e of i)e!==r&&e.is("$text")&&n.consume(e,{name:!0})}),{priority:"high"}),this.listenTo(e.editing.view.document,"clipboardInput",((t,o)=>{let r=n.createRange(n.document.selection.anchor);if(o.targetRanges&&(r=e.editing.mapper.toModelRange(o.targetRanges[0])),!r.start.parent.is("element","codeBlock"))return;const a=o.dataTransfer.getData("text/plain"),c=new i.UpcastWriter(e.editing.view.document);o.content=function(e,t){const n=e.createDocumentFragment(),o=t.split("\n"),i=o.reduce(((t,n,i)=>(t.push(n),i<o.length-1&&t.push(e.createElement("br")),t)),[]);return e.appendChild(i,n),n}(c,a)})),this.listenTo(n,"getSelectedContent",((e,[o])=>{const i=o.anchor;!o.isCollapsed&&i.parent.is("element","codeBlock")&&i.hasSameParentAs(o.focus)&&n.change((n=>{const r=e.return;if(r.childCount>1||o.containsEntireContent(i.parent)){const t=n.createElement("codeBlock",i.parent.getAttributes());n.append(r,t);const o=n.createDocumentFragment();n.append(t,o),e.return=o}else{const e=r.getChild(0);t.checkAttribute(e,"code")&&n.setAttribute("code",!0,e)}}))}))}afterInit(){const e=this.editor,t=e.commands,n=t.get("indent"),o=t.get("outdent");n&&n.registerChildCommand(t.get("indentCodeBlock"),{priority:"highest"}),o&&o.registerChildCommand(t.get("outdentCodeBlock")),this.listenTo(e.editing.view.document,"enter",((t,n)=>{e.model.document.selection.getLastPosition().parent.is("element","codeBlock")&&(function(e,t){const n=e.model,o=n.document,i=e.editing.view,r=o.selection.getLastPosition(),a=r.nodeAfter;if(t||!o.selection.isCollapsed||!r.isAtStart)return!1;if(!B(a))return!1;return e.model.change((t=>{e.execute("enter");const n=o.selection.anchor.parent.previousSibling;t.rename(n,b),t.setSelection(n,"in"),e.model.schema.removeDisallowedAttributes([n],t),t.remove(a)})),i.scrollToTheSelection(),!0}(e,n.isSoft)||function(e,t){const n=e.model,o=n.document,i=e.editing.view,r=o.selection.getLastPosition(),a=r.nodeBefore;let c;if(t||!o.selection.isCollapsed||!r.isAtEnd||!a||!a.previousSibling)return!1;if(B(a)&&B(a.previousSibling))c=n.createRange(n.createPositionBefore(a.previousSibling),n.createPositionAfter(a));else if(k(a)&&B(a.previousSibling)&&B(a.previousSibling.previousSibling))c=n.createRange(n.createPositionBefore(a.previousSibling.previousSibling),n.createPositionAfter(a));else{if(!(k(a)&&B(a.previousSibling)&&k(a.previousSibling.previousSibling)&&B(a.previousSibling.previousSibling.previousSibling)))return!1;c=n.createRange(n.createPositionBefore(a.previousSibling.previousSibling.previousSibling),n.createPositionAfter(a))}return e.model.change((t=>{t.remove(c),e.execute("enter");const n=o.selection.anchor.parent;t.rename(n,b),e.model.schema.removeDisallowedAttributes([n],t)})),i.scrollToTheSelection(),!0}(e,n.isSoft)||function(e){const t=e.model,n=t.document,o=n.selection.getLastPosition(),i=o.nodeBefore||o.textNode;let r;i&&i.is("$text")&&(r=s(i));e.model.change((t=>{e.execute("shiftEnter"),r&&t.insertText(r,n.selection.anchor)}))}(e),n.preventDefault(),t.stop())}),{context:"pre"})}}function k(e){return e&&e.is("$text")&&!e.data.match(/\S/)}function B(e){return e&&e.is("element","softBreak")}var C=n(273);var w=n(62),x=n.n(w),S=n(67),y={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};x()(S.Z,y);S.Z.locals;class A extends e.Plugin{static get pluginName(){return"CodeBlockUI"}init(){const e=this.editor,t=e.t,n=e.ui.componentFactory,o=a(e);n.add("codeBlock",(n=>{const i=e.commands.get("codeBlock"),r=(0,C.createDropdown)(n,C.SplitButtonView),a=r.buttonView;return a.set({label:t("Insert code block"),tooltip:!0,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.87 12.61a.75.75 0 0 1-.089.976l-.085.07-3.154 2.254 3.412 2.414a.75.75 0 0 1 .237.95l-.057.095a.75.75 0 0 1-.95.237l-.096-.058-4.272-3.022-.003-1.223 4.01-2.867a.75.75 0 0 1 1.047.174zm2.795-.231.095.057 4.011 2.867-.003 1.223-4.272 3.022-.095.058a.75.75 0 0 1-.88-.151l-.07-.086-.058-.095a.75.75 0 0 1 .15-.88l.087-.07 3.412-2.414-3.154-2.253-.085-.071a.75.75 0 0 1 .862-1.207zM16 0a2 2 0 0 1 2 2v9.354l-.663-.492-.837-.001V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3.118L7.156 19H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h14zM5.009 15l.003 1H3v-1h2.009zm2.188-2-1.471 1H5v-1h2.197zM10 11v.095L8.668 12H7v-1h3zm4-2v1H7V9h7zm0-2v1H7V7h7zm-4-2v1H5V5h5zM6 3v1H3V3h3z"/></svg>',isToggleable:!0}),a.bind("isOn").to(i,"value",(e=>!!e)),a.on("execute",(()=>{e.execute("codeBlock",{usePreviousLanguageChoice:!0}),e.editing.view.focus()})),r.on("execute",(t=>{e.execute("codeBlock",{language:t.source._codeBlockLanguage,forceValue:!0}),e.editing.view.focus()})),r.class="ck-code-block-dropdown",r.bind("isEnabled").to(i),(0,C.addListToDropdown)(r,this._getLanguageListItemDefinitions(o)),r}))}_getLanguageListItemDefinitions(e){const t=this.editor.commands.get("codeBlock"),n=new r.Collection;for(const o of e){const e={type:"button",model:new C.Model({_codeBlockLanguage:o.language,label:o.label,withText:!0})};e.model.bind("isOn").to(t,"value",(t=>t===e.model._codeBlockLanguage)),n.add(e)}return n}}class E extends e.Plugin{static get requires(){return[v,A]}static get pluginName(){return"CodeBlock"}}})(),(window.CKEditor5=window.CKEditor5||{}).codeBlock=o})();;
!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Horizontal line":"Horizontal line"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={73:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(609),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".ck-editor__editable .ck-horizontal-line{display:flow-root}.ck-content hr{background:#dedede;border:0;height:4px;margin:15px 0}",""]);const i=o},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},62:(e,t,n)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=s(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:v(f,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,p=0;function v(e,t){var n,r,o;if(t.singleton){var i=p++;n=m||(m=l(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(t),r=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=c(e,t),l=0;l<n.length;l++){var d=s(n[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},273:(e,t,n)=>{e.exports=n(79)("./src/ui.js")},995:(e,t,n)=>{e.exports=n(79)("./src/widget.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r={};(()=>{"use strict";n.r(r),n.d(r,{HorizontalLine:()=>f,HorizontalLineEditing:()=>l,HorizontalLineUI:()=>u});var e=n(704),t=n(995);class o extends e.Command{refresh(){const e=this.editor.model,n=e.schema,r=e.document.selection;this.isEnabled=function(e,n,r){const o=function(e,n){const r=(0,t.findOptimalInsertionRange)(e,n),o=r.start.parent;if(o.isEmpty&&!o.is("element","$root"))return o.parent;return o}(e,r);return n.checkChild(o,"horizontalLine")}(r,n,e)}execute(){const e=this.editor.model;e.change((t=>{const n=t.createElement("horizontalLine");e.insertObject(n,null,null,{setSelection:"after"})}))}}var i=n(62),a=n.n(i),s=n(73),c={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};a()(s.Z,c);s.Z.locals;class l extends e.Plugin{static get pluginName(){return"HorizontalLineEditing"}init(){const e=this.editor,n=e.model.schema,r=e.t,i=e.conversion;n.register("horizontalLine",{inheritAllFrom:"$blockObject"}),i.for("dataDowncast").elementToElement({model:"horizontalLine",view:(e,{writer:t})=>t.createEmptyElement("hr")}),i.for("editingDowncast").elementToStructure({model:"horizontalLine",view:(e,{writer:n})=>{const o=r("Horizontal line"),i=n.createContainerElement("div",null,n.createEmptyElement("hr"));return n.addClass("ck-horizontal-line",i),n.setCustomProperty("hr",!0,i),function(e,n,r){return n.setCustomProperty("horizontalLine",!0,e),(0,t.toWidget)(e,n,{label:r})}(i,n,o)}}),i.for("upcast").elementToElement({view:"hr",model:"horizontalLine"}),e.commands.add("horizontalLine",new o(e))}}var d=n(273);class u extends e.Plugin{static get pluginName(){return"HorizontalLineUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("horizontalLine",(n=>{const r=e.commands.get("horizontalLine"),o=new d.ButtonView(n);return o.set({label:t("Horizontal line"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9h16v2H2z"/></svg>',tooltip:!0}),o.bind("isEnabled").to(r,"isEnabled"),this.listenTo(o,"execute",(()=>{e.execute("horizontalLine"),e.editing.view.focus()})),o}))}}class f extends e.Plugin{static get requires(){return[l,u,t.Widget]}static get pluginName(){return"HorizontalLine"}}})(),(window.CKEditor5=window.CKEditor5||{}).horizontalLine=r})();;
!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{"Remove Format":"Remove Format"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={704:(t,e,o)=>{t.exports=o(79)("./src/core.js")},273:(t,e,o)=>{t.exports=o(79)("./src/ui.js")},209:(t,e,o)=>{t.exports=o(79)("./src/utils.js")},79:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,o),s.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";o.r(r),o.d(r,{RemoveFormat:()=>m,RemoveFormatEditing:()=>c,RemoveFormatUI:()=>s});var t=o(704),e=o(273);const i="removeFormat";class s extends t.Plugin{static get pluginName(){return"RemoveFormatUI"}init(){const t=this.editor,o=t.t;t.ui.componentFactory.add(i,(r=>{const s=t.commands.get(i),n=new e.ButtonView(r);return n.set({label:o("Remove Format"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.69 14.915c.053.052.173.083.36.093a.366.366 0 0 1 .345.485l-.003.01a.738.738 0 0 1-.697.497h-2.67a.374.374 0 0 1-.353-.496l.013-.038a.681.681 0 0 1 .644-.458c.197-.012.325-.043.386-.093a.28.28 0 0 0 .072-.11L9.592 4.5H6.269c-.359-.017-.609.013-.75.09-.142.078-.289.265-.442.563-.192.29-.516.464-.864.464H4.17a.43.43 0 0 1-.407-.569L4.46 3h13.08l-.62 2.043a.81.81 0 0 1-.775.574h-.114a.486.486 0 0 1-.486-.486c.001-.284-.054-.464-.167-.54-.112-.076-.367-.106-.766-.091h-3.28l-2.68 10.257c-.006.074.007.127.038.158zM3 17h8a.5.5 0 1 1 0 1H3a.5.5 0 1 1 0-1zm11.299 1.17a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.06-1.06l1.415 1.414 1.414-1.415a.75.75 0 1 1 1.06 1.06l-1.413 1.415 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414-1.414 1.414z"/></svg>',tooltip:!0}),n.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(n,"execute",(()=>{t.execute(i),t.editing.view.focus()})),n}))}}var n=o(209);class a extends t.Command{refresh(){const t=this.editor.model;this.isEnabled=!!(0,n.first)(this._getFormattingItems(t.document.selection,t.schema))}execute(){const t=this.editor.model,e=t.schema;t.change((o=>{for(const r of this._getFormattingItems(t.document.selection,e))if(r.is("selection"))for(const t of this._getFormattingAttributes(r,e))o.removeSelectionAttribute(t);else{const t=o.createRangeOn(r);for(const i of this._getFormattingAttributes(r,e))o.removeAttribute(i,t)}}))}*_getFormattingItems(t,e){const o=t=>!!(0,n.first)(this._getFormattingAttributes(t,e));for(const r of t.getRanges())for(const t of r.getItems())!e.isBlock(t)&&o(t)&&(yield t);for(const e of t.getSelectedBlocks())o(e)&&(yield e);o(t)&&(yield t)}*_getFormattingAttributes(t,e){for(const[o]of t.getAttributes()){const t=e.getAttributeProperties(o);t&&t.isFormatting&&(yield o)}}}class c extends t.Plugin{static get pluginName(){return"RemoveFormatEditing"}init(){const t=this.editor;t.commands.add("removeFormat",new a(t))}}class m extends t.Plugin{static get requires(){return[c,s]}static get pluginName(){return"RemoveFormat"}}})(),(window.CKEditor5=window.CKEditor5||{}).removeFormat=r})();;
!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Background:"Background",Border:"Border","Cell properties":"Cell properties","Center table":"Center table",Color:"Color","Color picker":"Color picker",Column:"Column",Dashed:"Dashed","Delete column":"Delete column","Delete row":"Delete row",Dimensions:"Dimensions",Dotted:"Dotted",Double:"Double","Enter table caption":"Enter table caption",Groove:"Groove","Header column":"Header column","Header row":"Header row",Height:"Height","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table",Inset:"Inset","Justify cell text":"Justify cell text","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",None:"None",Outset:"Outset",Padding:"Padding",Ridge:"Ridge",Row:"Row","Select column":"Select column","Select row":"Select row",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Style:"Style","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".','The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Vertical text alignment toolbar":"Vertical text alignment toolbar",Width:"Width"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={252:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}",""]);const l=i},934:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}",""]);const l=i},333:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}",""]);const l=i},272:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}",""]);const l=i},660:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}",""]);const l=i},665:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,":root{--ck-color-table-caption-background:#f7f7f7;--ck-color-table-caption-text:#333;--ck-color-table-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-table-caption-background);caption-side:top;color:var(--ck-color-table-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-table-caption-highlighted-background)}to{background-color:var(--ck-color-table-caption-background)}}",""]);const l=i},773:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}",""]);const l=i},975:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,":root{--ck-color-table-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:-999999px;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:-999999px;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-table-column-resizer-hover);opacity:.25}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}",""]);const l=i},482:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}",""]);const l=i},686:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',""]);const l=i},99:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}",""]);const l=i},475:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',""]);const l=i},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var l=0;l<this.length;l++){var r=this[l][0];null!=r&&(i[r]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);n&&i[a[0]]||(o&&(a[2]?a[2]="".concat(o," and ").concat(a[2]):a[2]=o),t.push(a))}},t}},62:(e,t,o)=>{"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},l=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),r=[];function s(e){for(var t=-1,o=0;o<r.length;o++)if(r[o].identifier===e){t=o;break}return t}function a(e,t){for(var o={},n=[],i=0;i<e.length;i++){var l=e[i],a=t.base?l[0]+t.base:l[0],c=o[a]||0,d="".concat(a," ").concat(c);o[a]=c+1;var u=s(d),h={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(r[u].references++,r[u].updater(h)):r.push({identifier:d,updater:p(h,t),references:1}),n.push(d)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=o.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var r=l(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,o,n){var i=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var l=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(l,r[t]):e.appendChild(l)}}function b(e,t,o){var n=o.css,i=o.media,l=o.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),l&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,g=0;function p(e,t){var o,n,i;if(t.singleton){var l=g++;o=m||(m=c(t)),n=h.bind(null,o,l,!1),i=h.bind(null,o,l,!0)}else o=c(t),n=b.bind(null,o,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var o=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var i=s(o[n]);r[i].references--}for(var l=a(e,t),c=0;c<o.length;c++){var d=s(o[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}o=l}}}},704:(e,t,o)=>{e.exports=o(79)("./src/core.js")},492:(e,t,o)=>{e.exports=o(79)("./src/engine.js")},273:(e,t,o)=>{e.exports=o(79)("./src/ui.js")},209:(e,t,o)=>{e.exports=o(79)("./src/utils.js")},995:(e,t,o)=>{e.exports=o(79)("./src/widget.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={id:n,exports:{}};return e[n](l,l.exports,o),l.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var n={};(()=>{"use strict";o.r(n),o.d(n,{PlainTableOutput:()=>De,Table:()=>Fe,TableCaption:()=>Xo,TableCaptionEditing:()=>Ko,TableCaptionUI:()=>qo,TableCellProperties:()=>_o,TableCellPropertiesEditing:()=>ko,TableCellPropertiesUI:()=>io,TableCellWidthEditing:()=>so,TableClipboard:()=>xe,TableColumnResize:()=>gn,TableColumnResizeEditing:()=>hn,TableEditing:()=>ge,TableKeyboard:()=>Pe,TableMouse:()=>Be,TableProperties:()=>Ho,TablePropertiesEditing:()=>Po,TablePropertiesUI:()=>Do,TableSelection:()=>Ae,TableToolbar:()=>Ue,TableUI:()=>ve,TableUtils:()=>U});var e=o(704),t=o(995);function i(e,t){const{viewElement:o,defaultValue:n,modelAttribute:i,styleName:l,reduceBoxSides:r=!1,shouldUpcast:s=(()=>!0)}=t;e.for("upcast").attributeToAttribute({view:{name:o,styles:{[l]:/[\s\S]+/}},model:{key:i,value:e=>{if(!s(e))return;const t=e.getNormalizedStyle(l),o=r?a(t):t;return n!==o?o:void 0}}})}function l(e,t,o,n){e.for("upcast").add((e=>e.on("element:"+t,((e,t,i)=>{if(!t.modelRange)return;const l=["border-top-width","border-top-color","border-top-style","border-bottom-width","border-bottom-color","border-bottom-style","border-right-width","border-right-color","border-right-style","border-left-width","border-left-color","border-left-style"].filter((e=>t.viewItem.hasStyle(e)));if(!l.length)return;const r={styles:l};if(!i.consumable.test(t.viewItem,r))return;const s=[...t.modelRange.getItems({shallow:!0})].pop();i.consumable.consume(t.viewItem,r);const c={style:t.viewItem.getNormalizedStyle("border-style"),color:t.viewItem.getNormalizedStyle("border-color"),width:t.viewItem.getNormalizedStyle("border-width")},d={style:a(c.style),color:a(c.color),width:a(c.width)};d.style!==n.style&&i.writer.setAttribute(o.style,d.style,s),d.color!==n.color&&i.writer.setAttribute(o.color,d.color,s),d.width!==n.width&&i.writer.setAttribute(o.width,d.width,s)}))))}function r(e,{modelElement:t,modelAttribute:o,styleName:n}){e.for("downcast").attributeToAttribute({model:{name:t,key:o},view:e=>({key:"style",value:{[n]:e}})})}function s(e,{modelAttribute:t,styleName:o}){e.for("downcast").add((e=>e.on(`attribute:${t}:table`,((e,t,n)=>{const{item:i,attributeNewValue:l}=t,{mapper:r,writer:s}=n;if(!n.consumable.consume(t.item,e.name))return;const a=[...r.toViewElement(i).getChildren()].find((e=>e.is("element","table")));l?s.setStyle(o,l,a):s.removeStyle(o,a)}))))}function a(e){if(!e)return;return["top","right","bottom","left"].map((t=>e[t])).reduce(((e,t)=>e==t?e:null))||e}function c(e,t,o,n,i=1){t>i?n.setAttribute(e,t,o):n.removeAttribute(e,o)}function d(e,t,o={}){const n=e.createElement("tableCell",o);return e.insertElement("paragraph",n),e.insert(n,t),n}function u(e,t){const o=t.parent.parent,n=parseInt(o.getAttribute("headingColumns")||0),{column:i}=e.getCellLocation(t);return!!n&&i<n}function h(e,t,o){const{modelAttribute:n}=o;e.extend("tableCell",{allowAttributes:[n]}),i(t,{viewElement:/^(td|th)$/,...o}),r(t,{modelElement:"tableCell",...o})}var b=o(209);function m(){return e=>{e.on("element:table",((e,t,o)=>{const n=t.viewItem;if(!o.consumable.test(n,{name:!0}))return;const{rows:i,headingRows:l,headingColumns:r}=function(e){const t={headingRows:0,headingColumns:0},o=[],n=[];let i;for(const l of Array.from(e.getChildren()))if("tbody"===l.name||"thead"===l.name||"tfoot"===l.name){"thead"!==l.name||i||(i=l);const e=Array.from(l.getChildren()).filter((e=>e.is("element","tr")));for(const l of e)if("thead"===l.parent.name&&l.parent===i)t.headingRows++,o.push(l);else{n.push(l);const e=p(l);e>t.headingColumns&&(t.headingColumns=e)}}return t.rows=[...o,...n],t}(n),s={};r&&(s.headingColumns=r),l&&(s.headingRows=l);const a=o.writer.createElement("table",s);if(o.safeInsert(a,t.modelCursor)){if(o.consumable.consume(n,{name:!0}),i.forEach((e=>o.convertItem(e,o.writer.createPositionAt(a,"end")))),o.convertChildren(n,o.writer.createPositionAt(a,"end")),a.isEmpty){const e=o.writer.createElement("tableRow");o.writer.insert(e,o.writer.createPositionAt(a,"end")),d(o.writer,o.writer.createPositionAt(e,"end"))}o.updateConversionResult(a,t)}}))}}function g(e){return t=>{t.on(`element:${e}`,((e,t,o)=>{if(t.modelRange&&t.viewItem.isEmpty){const e=t.modelRange.start.nodeAfter,n=o.writer.createPositionAt(e,0);o.writer.insertElement("paragraph",n)}}),{priority:"low"})}}function p(e){let t=0,o=0;const n=Array.from(e.getChildren()).filter((e=>"th"===e.name||"td"===e.name));for(;o<n.length&&"th"===n[o].name;){const e=n[o];t+=parseInt(e.getAttribute("colspan")||1),o++}return t}class f{constructor(e,t={}){this._table=e,this._startRow=void 0!==t.row?t.row:t.startRow||0,this._endRow=void 0!==t.row?t.row:t.endRow,this._startColumn=void 0!==t.column?t.column:t.startColumn||0,this._endColumn=void 0!==t.column?t.column:t.endColumn,this._includeAllSlots=!!t.includeAllSlots,this._skipRows=new Set,this._row=0,this._rowIndex=0,this._column=0,this._cellIndex=0,this._spannedCells=new Map,this._nextCellAtColumn=-1}[Symbol.iterator](){return this}next(){const e=this._table.getChild(this._rowIndex);if(!e||this._isOverEndRow())return{done:!0};if(!e.is("element","tableRow"))return this._rowIndex++,this.next();if(this._isOverEndColumn())return this._advanceToNextRow();let t=null;const o=this._getSpanned();if(o)this._includeAllSlots&&!this._shouldSkipSlot()&&(t=this._formatOutValue(o.cell,o.row,o.column));else{const o=e.getChild(this._cellIndex);if(!o)return this._advanceToNextRow();const n=parseInt(o.getAttribute("colspan")||1),i=parseInt(o.getAttribute("rowspan")||1);(n>1||i>1)&&this._recordSpans(o,i,n),this._shouldSkipSlot()||(t=this._formatOutValue(o)),this._nextCellAtColumn=this._column+n}return this._column++,this._column==this._nextCellAtColumn&&this._cellIndex++,t||this.next()}skipRow(e){this._skipRows.add(e)}_advanceToNextRow(){return this._row++,this._rowIndex++,this._column=0,this._cellIndex=0,this._nextCellAtColumn=-1,this.next()}_isOverEndRow(){return void 0!==this._endRow&&this._row>this._endRow}_isOverEndColumn(){return void 0!==this._endColumn&&this._column>this._endColumn}_formatOutValue(e,t=this._row,o=this._column){return{done:!1,value:new w(this,e,t,o)}}_shouldSkipSlot(){const e=this._skipRows.has(this._row),t=this._row<this._startRow,o=this._column<this._startColumn,n=void 0!==this._endColumn&&this._column>this._endColumn;return e||t||o||n}_getSpanned(){const e=this._spannedCells.get(this._row);return e&&e.get(this._column)||null}_recordSpans(e,t,o){const n={cell:e,row:this._row,column:this._column};for(let e=this._row;e<this._row+t;e++)for(let t=this._column;t<this._column+o;t++)e==this._row&&t==this._column||this._markSpannedCell(e,t,n)}_markSpannedCell(e,t,o){this._spannedCells.has(e)||this._spannedCells.set(e,new Map);this._spannedCells.get(e).set(t,o)}}class w{constructor(e,t,o,n){this.cell=t,this.row=e._row,this.column=e._column,this.cellAnchorRow=o,this.cellAnchorColumn=n,this._cellIndex=e._cellIndex,this._rowIndex=e._rowIndex,this._table=e._table}get isAnchor(){return this.row===this.cellAnchorRow&&this.column===this.cellAnchorColumn}get cellWidth(){return parseInt(this.cell.getAttribute("colspan")||1)}get cellHeight(){return parseInt(this.cell.getAttribute("rowspan")||1)}get rowIndex(){return this._rowIndex}getPositionBefore(){return this._table.root.document.model.createPositionAt(this._table.getChild(this.row),this._cellIndex)}}function k(e,o={}){return(n,{writer:i})=>{const l=n.getAttribute("headingRows")||0,r=[];l>0&&r.push(i.createContainerElement("thead",null,i.createSlot((e=>e.is("element","tableRow")&&e.index<l)))),l<e.getRows(n)&&r.push(i.createContainerElement("tbody",null,i.createSlot((e=>e.is("element","tableRow")&&e.index>=l))));const s=i.createContainerElement("figure",{class:"table"},[i.createContainerElement("table",null,r),i.createSlot((e=>!e.is("element","tableRow")))]);return o.asWidget?function(e,o){return o.setCustomProperty("table",!0,e),(0,t.toWidget)(e,o,{hasSelectionHandle:!0})}(s,i):s}}function _(e={}){return(o,{writer:n})=>{const i=o.parent,l=i.parent,r=l.getChildIndex(i),s=new f(l,{row:r}),a=l.getAttribute("headingRows")||0,c=l.getAttribute("headingColumns")||0;for(const i of s)if(i.cell==o){const o=i.row<a||i.column<c?"th":"td";return e.asWidget?(0,t.toWidgetEditable)(n.createEditableElement(o),n):n.createContainerElement(o)}}}function v(e={}){return(t,{writer:o,consumable:n,mapper:i})=>{if(t.parent.is("element","tableCell")&&C(t))return e.asWidget?o.createContainerElement("span",{class:"ck-table-bogus-paragraph"}):(n.consume(t,"insert"),void i.bindElements(t,i.toViewElement(t.parent)))}}function C(e){return 1==e.parent.childCount&&![...e.getAttributeKeys()].length}class y extends e.Command{refresh(){const e=this.editor.model,t=e.document.selection,o=e.schema;this.isEnabled=function(e,t){const o=e.getFirstPosition().parent,n=o===o.root?o:o.parent;return t.checkChild(n,"table")}(t,o)}execute(e={}){const t=this.editor.model,o=this.editor.plugins.get("TableUtils"),n=this.editor.config.get("table"),i=n.defaultHeadings.rows,l=n.defaultHeadings.columns;void 0===e.headingRows&&i&&(e.headingRows=i),void 0===e.headingColumns&&l&&(e.headingColumns=l),t.change((n=>{const i=o.createTable(n,e);t.insertObject(i,null,null,{findOptimalPosition:"auto"}),n.setSelection(n.createPositionAt(i.getNodeByPath([0,0,0]),0))}))}}class T extends e.Command{constructor(e,t={}){super(e),this.order=t.order||"below"}refresh(){const e=this.editor.model.document.selection,t=!!this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(e).length;this.isEnabled=t}execute(){const e=this.editor,t=e.model.document.selection,o=e.plugins.get("TableUtils"),n="above"===this.order,i=o.getSelectionAffectedTableCells(t),l=o.getRowIndexes(i),r=n?l.first:l.last,s=i[0].findAncestor("table");o.insertRows(s,{at:n?r:r+1,copyStructureFromAbove:!n})}}class A extends e.Command{constructor(e,t={}){super(e),this.order=t.order||"right"}refresh(){const e=this.editor.model.document.selection,t=!!this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(e).length;this.isEnabled=t}execute(){const e=this.editor,t=e.model.document.selection,o=e.plugins.get("TableUtils"),n="left"===this.order,i=o.getSelectionAffectedTableCells(t),l=o.getColumnIndexes(i),r=n?l.first:l.last,s=i[0].findAncestor("table");o.insertColumns(s,{columns:1,at:n?r:r+1})}}class x extends e.Command{constructor(e,t={}){super(e),this.direction=t.direction||"horizontally"}refresh(){const e=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=1===e.length}execute(){const e=this.editor.plugins.get("TableUtils"),t=e.getSelectionAffectedTableCells(this.editor.model.document.selection)[0];"horizontally"===this.direction?e.splitCellHorizontally(t,2):e.splitCellVertically(t,2)}}function V(e,t,o){const{startRow:n,startColumn:i,endRow:l,endColumn:r}=t,s=o.createElement("table"),a=l-n+1;for(let e=0;e<a;e++)o.insertElement("tableRow",s,"end");const u=[...new f(e,{startRow:n,endRow:l,startColumn:i,endColumn:r,includeAllSlots:!0})];for(const{row:e,column:t,cell:a,isAnchor:c,cellAnchorRow:h,cellAnchorColumn:b}of u){const u=e-n,m=s.getChild(u);if(c){const n=o.cloneElement(a);o.append(n,m),E(n,e,t,l,r,o)}else(h<n||b<i)&&d(o,o.createPositionAt(m,"end"))}return function(e,t,o,n,i){const l=parseInt(t.getAttribute("headingRows")||0);if(l>0){c("headingRows",l-o,e,i,0)}const r=parseInt(t.getAttribute("headingColumns")||0);if(r>0){c("headingColumns",r-n,e,i,0)}}(s,e,n,i,o),s}function S(e,t,o=0){const n=[],i=new f(e,{startRow:o,endRow:t-1});for(const e of i){const{row:o,cellHeight:i}=e;o<t&&t<=o+i-1&&n.push(e)}return n}function R(e,t,o){const n=e.parent,i=n.parent,l=n.index,r=t-l,s={},a=parseInt(e.getAttribute("rowspan"))-r;a>1&&(s.rowspan=a);const u=parseInt(e.getAttribute("colspan")||1);u>1&&(s.colspan=u);const h=l+r,b=[...new f(i,{startRow:l,endRow:h,includeAllSlots:!0})];let m,g=null;for(const t of b){const{row:n,column:i,cell:l}=t;l===e&&void 0===m&&(m=i),void 0!==m&&m===i&&n===h&&(g=d(o,t.getPositionBefore(),s))}return c("rowspan",r,e,o),g}function I(e,t){const o=[],n=new f(e);for(const e of n){const{column:n,cellWidth:i}=e;n<t&&t<=n+i-1&&o.push(e)}return o}function P(e,t,o,n){const i=o-t,l={},r=parseInt(e.getAttribute("colspan"))-i;r>1&&(l.colspan=r);const s=parseInt(e.getAttribute("rowspan")||1);s>1&&(l.rowspan=s);const a=d(n,n.createPositionAfter(e),l);return c("colspan",i,e,n),a}function E(e,t,o,n,i,l){const r=parseInt(e.getAttribute("colspan")||1),s=parseInt(e.getAttribute("rowspan")||1);if(o+r-1>i){c("colspan",i-o+1,e,l,1)}if(t+s-1>n){c("rowspan",n-t+1,e,l,1)}}function z(e,t){const o=t.getColumns(e),n=new Array(o).fill(0);for(const{column:t}of new f(e))n[t]++;const i=n.reduce(((e,t,o)=>t?e:[...e,o]),[]);if(i.length>0){const o=i[i.length-1];return t.removeColumns(e,{at:o}),!0}return!1}function B(e,t){const o=[],n=t.getRows(e);for(let t=0;t<n;t++){e.getChild(t).isEmpty&&o.push(t)}if(o.length>0){const n=o[o.length-1];return t.removeRows(e,{at:n}),!0}return!1}function W(e,t){z(e,t)||B(e,t)}function L(e,t){const o=Array.from(new f(e,{startColumn:t.firstColumn,endColumn:t.lastColumn,row:t.lastRow}));if(o.every((({cellHeight:e})=>1===e)))return t.lastRow;const n=o[0].cellHeight-1;return t.lastRow+n}function N(e,t){const o=Array.from(new f(e,{startRow:t.firstRow,endRow:t.lastRow,column:t.lastColumn}));if(o.every((({cellWidth:e})=>1===e)))return t.lastColumn;const n=o[0].cellWidth-1;return t.lastColumn+n}class F extends e.Command{constructor(e,t){super(e),this.direction=t.direction,this.isHorizontal="right"==this.direction||"left"==this.direction}refresh(){const e=this._getMergeableCell();this.value=e,this.isEnabled=!!e}execute(){const e=this.editor.model,t=e.document,o=this.editor.plugins.get("TableUtils").getTableCellsContainingSelection(t.selection)[0],n=this.value,i=this.direction;e.change((e=>{const t="right"==i||"down"==i,l=t?o:n,r=t?n:o,s=r.parent;!function(e,t,o){D(e)||(D(t)&&o.remove(o.createRangeIn(t)),o.move(o.createRangeIn(e),o.createPositionAt(t,"end")));o.remove(e)}(r,l,e);const a=this.isHorizontal?"colspan":"rowspan",c=parseInt(o.getAttribute(a)||1),d=parseInt(n.getAttribute(a)||1);e.setAttribute(a,c+d,l),e.setSelection(e.createRangeIn(l));const u=this.editor.plugins.get("TableUtils");W(s.findAncestor("table"),u)}))}_getMergeableCell(){const e=this.editor.model.document,t=this.editor.plugins.get("TableUtils"),o=t.getTableCellsContainingSelection(e.selection)[0];if(!o)return;const n=this.isHorizontal?function(e,t,o){const n=e.parent,i=n.parent,l="right"==t?e.nextSibling:e.previousSibling,r=(i.getAttribute("headingColumns")||0)>0;if(!l)return;const s="right"==t?e:l,a="right"==t?l:e,{column:c}=o.getCellLocation(s),{column:d}=o.getCellLocation(a),h=parseInt(s.getAttribute("colspan")||1),b=u(o,s),m=u(o,a);if(r&&b!=m)return;return c+h===d?l:void 0}(o,this.direction,t):function(e,t,o){const n=e.parent,i=n.parent,l=i.getChildIndex(n);if("down"==t&&l===o.getRows(i)-1||"up"==t&&0===l)return;const r=parseInt(e.getAttribute("rowspan")||1),s=i.getAttribute("headingRows")||0,a="down"==t&&l+r===s,c="up"==t&&l===s;if(s&&(a||c))return;const d=parseInt(e.getAttribute("rowspan")||1),u="down"==t?l+d:l,h=[...new f(i,{endRow:u})],b=h.find((t=>t.cell===e)),m=b.column,g=h.find((({row:e,cellHeight:o,column:n})=>n===m&&("down"==t?e===u:u===e+o)));return g&&g.cell}(o,this.direction,t);if(!n)return;const i=this.isHorizontal?"rowspan":"colspan",l=parseInt(o.getAttribute(i)||1);return parseInt(n.getAttribute(i)||1)===l?n:void 0}}function D(e){return 1==e.childCount&&e.getChild(0).is("element","paragraph")&&e.getChild(0).isEmpty}class H extends e.Command{refresh(){const e=this.editor.plugins.get("TableUtils"),t=e.getSelectionAffectedTableCells(this.editor.model.document.selection),o=t[0];if(o){const n=o.findAncestor("table"),i=this.editor.plugins.get("TableUtils").getRows(n)-1,l=e.getRowIndexes(t),r=0===l.first&&l.last===i;this.isEnabled=!r}else this.isEnabled=!1}execute(){const e=this.editor.model,t=this.editor.plugins.get("TableUtils"),o=t.getSelectionAffectedTableCells(e.document.selection),n=t.getRowIndexes(o),i=o[0],l=i.findAncestor("table"),r=t.getCellLocation(i).column;e.change((e=>{const o=n.last-n.first+1;t.removeRows(l,{at:n.first,rows:o});const i=function(e,t,o,n){const i=e.getChild(Math.min(t,n-1));let l=i.getChild(0),r=0;for(const e of i.getChildren()){if(r>o)return l;l=e,r+=parseInt(e.getAttribute("colspan")||1)}return l}(l,n.first,r,t.getRows(l));e.setSelection(e.createPositionAt(i,0))}))}}class M extends e.Command{refresh(){const e=this.editor.plugins.get("TableUtils"),t=e.getSelectionAffectedTableCells(this.editor.model.document.selection),o=t[0];if(o){const n=o.findAncestor("table"),i=e.getColumns(n),{first:l,last:r}=e.getColumnIndexes(t);this.isEnabled=r-l<i-1}else this.isEnabled=!1}execute(){const e=this.editor.plugins.get("TableUtils"),[t,o]=function(e,t){const o=t.getSelectionAffectedTableCells(e),n=o[0],i=o.pop(),l=[n,i];return n.isBefore(i)?l:l.reverse()}(this.editor.model.document.selection,e),n=t.parent.parent,i=[...new f(n)],l={first:i.find((e=>e.cell===t)).column,last:i.find((e=>e.cell===o)).column},r=function(e,t,o,n){const i=parseInt(o.getAttribute("colspan")||1);return i>1?o:t.previousSibling||o.nextSibling?o.nextSibling||t.previousSibling:n.first?e.reverse().find((({column:e})=>e<n.first)).cell:e.reverse().find((({column:e})=>e>n.last)).cell}(i,t,o,l);this.editor.model.change((e=>{const t=l.last-l.first+1;this.editor.plugins.get("TableUtils").removeColumns(n,{at:l.first,columns:t}),e.setSelection(e.createPositionAt(r,0))}))}}class O extends e.Command{refresh(){const e=this.editor.plugins.get("TableUtils"),t=this.editor.model,o=e.getSelectionAffectedTableCells(t.document.selection),n=o.length>0;this.isEnabled=n,this.value=n&&o.every((e=>this._isInHeading(e,e.parent.parent)))}execute(e={}){if(e.forceValue===this.value)return;const t=this.editor.plugins.get("TableUtils"),o=this.editor.model,n=t.getSelectionAffectedTableCells(o.document.selection),i=n[0].findAncestor("table"),{first:l,last:r}=t.getRowIndexes(n),s=this.value?l:r+1,a=i.getAttribute("headingRows")||0;o.change((e=>{if(s){const t=S(i,s,s>a?a:0);for(const{cell:o}of t)R(o,s,e)}c("headingRows",s,i,e,0)}))}_isInHeading(e,t){const o=parseInt(t.getAttribute("headingRows")||0);return!!o&&e.parent.index<o}}class j extends e.Command{refresh(){const e=this.editor.model,t=this.editor.plugins.get("TableUtils"),o=t.getSelectionAffectedTableCells(e.document.selection),n=o.length>0;this.isEnabled=n,this.value=n&&o.every((e=>u(t,e)))}execute(e={}){if(e.forceValue===this.value)return;const t=this.editor.plugins.get("TableUtils"),o=this.editor.model,n=t.getSelectionAffectedTableCells(o.document.selection),i=n[0].findAncestor("table"),{first:l,last:r}=t.getColumnIndexes(n),s=this.value?l:r+1;o.change((e=>{if(s){const t=I(i,s);for(const{cell:o,column:n}of t)P(o,n,s,e)}c("headingColumns",s,i,e,0)}))}}class U extends e.Plugin{static get pluginName(){return"TableUtils"}init(){this.decorate("insertColumns"),this.decorate("insertRows")}getCellLocation(e){const t=e.parent,o=t.parent,n=o.getChildIndex(t),i=new f(o,{row:n});for(const{cell:t,row:o,column:n}of i)if(t===e)return{row:o,column:n}}createTable(e,t){const o=e.createElement("table"),n=parseInt(t.rows)||2,i=parseInt(t.columns)||2;return $(e,o,0,n,i),t.headingRows&&c("headingRows",Math.min(t.headingRows,n),o,e,0),t.headingColumns&&c("headingColumns",Math.min(t.headingColumns,i),o,e,0),o}insertRows(e,t={}){const o=this.editor.model,n=t.at||0,i=t.rows||1,l=void 0!==t.copyStructureFromAbove,r=t.copyStructureFromAbove?n-1:n,s=this.getRows(e),a=this.getColumns(e);if(n>s)throw new b.CKEditorError("tableutils-insertrows-insert-out-of-range",this,{options:t});o.change((t=>{const o=e.getAttribute("headingRows")||0;if(o>n&&c("headingRows",o+i,e,t,0),!l&&(0===n||n===s))return void $(t,e,n,i,a);const u=l?Math.max(n,r):n,h=new f(e,{endRow:u}),b=new Array(a).fill(1);for(const{row:e,column:o,cellHeight:s,cellWidth:a,cell:c}of h){const d=e+s-1,u=e<=r&&r<=d;e<n&&n<=d?(t.setAttribute("rowspan",s+i,c),b[o]=-a):l&&u&&(b[o]=a)}for(let o=0;o<i;o++){const o=t.createElement("tableRow");t.insert(o,e,n);for(let e=0;e<b.length;e++){const n=b[e],i=t.createPositionAt(o,"end");n>0&&d(t,i,n>1?{colspan:n}:null),e+=Math.abs(n)-1}}}))}insertColumns(e,t={}){const o=this.editor.model,n=t.at||0,i=t.columns||1;o.change((t=>{const o=e.getAttribute("headingColumns");n<o&&t.setAttribute("headingColumns",o+i,e);const l=this.getColumns(e);if(0===n||l===n){for(const o of e.getChildren())o.is("element","tableRow")&&Z(i,t,t.createPositionAt(o,n?"end":0));return}const r=new f(e,{column:n,includeAllSlots:!0});for(const e of r){const{row:o,cell:l,cellAnchorColumn:s,cellAnchorRow:a,cellWidth:c,cellHeight:d}=e;if(s<n){t.setAttribute("colspan",c+i,l);const e=a+d-1;for(let t=o;t<=e;t++)r.skipRow(t)}else Z(i,t,e.getPositionBefore())}}))}removeRows(e,t){const o=this.editor.model,n=t.rows||1,i=this.getRows(e),l=t.at,r=l+n-1;if(r>i-1)throw new b.CKEditorError("tableutils-removerows-row-index-out-of-range",this,{table:e,options:t});o.change((t=>{const{cellsToMove:o,cellsToTrim:n}=function(e,t,o){const n=new Map,i=[];for(const{row:l,column:r,cellHeight:s,cell:a}of new f(e,{endRow:o})){const e=l+s-1;if(l>=t&&l<=o&&e>o){const e=s-(o-l+1);n.set(r,{cell:a,rowspan:e})}if(l<t&&e>=t){let n;n=e>=o?o-t+1:e-t+1,i.push({cell:a,rowspan:s-n})}}return{cellsToMove:n,cellsToTrim:i}}(e,l,r);if(o.size){!function(e,t,o,n){const i=new f(e,{includeAllSlots:!0,row:t}),l=[...i],r=e.getChild(t);let s;for(const{column:e,cell:t,isAnchor:i}of l)if(o.has(e)){const{cell:t,rowspan:i}=o.get(e),l=s?n.createPositionAfter(s):n.createPositionAt(r,0);n.move(n.createRangeOn(t),l),c("rowspan",i,t,n),s=t}else i&&(s=t)}(e,r+1,o,t)}for(let o=r;o>=l;o--)t.remove(e.getChild(o));for(const{rowspan:e,cell:o}of n)c("rowspan",e,o,t);!function(e,t,o,n){const i=e.getAttribute("headingRows")||0;if(t<i){c("headingRows",o<i?i-(o-t+1):t,e,n,0)}}(e,l,r,t),z(e,this)||B(e,this)}))}removeColumns(e,t){const o=this.editor.model,n=t.at,i=t.columns||1,l=t.at+i-1;o.change((t=>{!function(e,t,o){const n=e.getAttribute("headingColumns")||0;if(n&&t.first<n){const i=Math.min(n-1,t.last)-t.first+1;o.setAttribute("headingColumns",n-i,e)}}(e,{first:n,last:l},t);for(let o=l;o>=n;o--)for(const{cell:n,column:i,cellWidth:l}of[...new f(e)])i<=o&&l>1&&i+l>o?c("colspan",l-1,n,t):i===o&&t.remove(n);B(e,this)||z(e,this)}))}splitCellVertically(e,t=2){const o=this.editor.model,n=e.parent.parent,i=parseInt(e.getAttribute("rowspan")||1),l=parseInt(e.getAttribute("colspan")||1);o.change((o=>{if(l>1){const{newCellsSpan:n,updatedSpan:r}=K(l,t);c("colspan",r,e,o);const s={};n>1&&(s.colspan=n),i>1&&(s.rowspan=i);Z(l>t?t-1:l-1,o,o.createPositionAfter(e),s)}if(l<t){const r=t-l,s=[...new f(n)],{column:a}=s.find((({cell:t})=>t===e)),d=s.filter((({cell:t,cellWidth:o,column:n})=>t!==e&&n===a||n<a&&n+o>a));for(const{cell:e,cellWidth:t}of d)o.setAttribute("colspan",t+r,e);const u={};i>1&&(u.rowspan=i),Z(r,o,o.createPositionAfter(e),u);const h=n.getAttribute("headingColumns")||0;h>a&&c("headingColumns",h+r,n,o)}}))}splitCellHorizontally(e,t=2){const o=this.editor.model,n=e.parent,i=n.parent,l=i.getChildIndex(n),r=parseInt(e.getAttribute("rowspan")||1),s=parseInt(e.getAttribute("colspan")||1);o.change((o=>{if(r>1){const n=[...new f(i,{startRow:l,endRow:l+r-1,includeAllSlots:!0})],{newCellsSpan:a,updatedSpan:d}=K(r,t);c("rowspan",d,e,o);const{column:u}=n.find((({cell:t})=>t===e)),h={};a>1&&(h.rowspan=a),s>1&&(h.colspan=s);for(const e of n){const{column:t,row:n}=e;n>=l+d&&t===u&&(n+l+d)%a==0&&Z(1,o,e.getPositionBefore(),h)}}if(r<t){const n=t-r,a=[...new f(i,{startRow:0,endRow:l})];for(const{cell:t,cellHeight:i,row:r}of a)if(t!==e&&r+i>l){const e=i+n;o.setAttribute("rowspan",e,t)}const d={};s>1&&(d.colspan=s),$(o,i,l+1,n,1,d);const u=i.getAttribute("headingRows")||0;u>l&&c("headingRows",u+n,i,o)}}))}getColumns(e){return[...e.getChild(0).getChildren()].reduce(((e,t)=>e+parseInt(t.getAttribute("colspan")||1)),0)}getRows(e){return Array.from(e.getChildren()).reduce(((e,t)=>t.is("element","tableRow")?e+1:e),0)}createTableWalker(e,t={}){return new f(e,t)}getSelectedTableCells(e){const t=[];for(const o of this.sortRanges(e.getRanges())){const e=o.getContainedElement();e&&e.is("element","tableCell")&&t.push(e)}return t}getTableCellsContainingSelection(e){const t=[];for(const o of e.getRanges()){const e=o.start.findAncestor("tableCell");e&&t.push(e)}return t}getSelectionAffectedTableCells(e){const t=this.getSelectedTableCells(e);return t.length?t:this.getTableCellsContainingSelection(e)}getRowIndexes(e){const t=e.map((e=>e.parent.index));return this._getFirstLastIndexesObject(t)}getColumnIndexes(e){const t=e[0].findAncestor("table"),o=[...new f(t)].filter((t=>e.includes(t.cell))).map((e=>e.column));return this._getFirstLastIndexesObject(o)}isSelectionRectangular(e){if(e.length<2||!this._areCellInTheSameTableSection(e))return!1;const t=new Set,o=new Set;let n=0;for(const i of e){const{row:e,column:l}=this.getCellLocation(i),r=parseInt(i.getAttribute("rowspan")||1),s=parseInt(i.getAttribute("colspan")||1);t.add(e),o.add(l),r>1&&t.add(e+r-1),s>1&&o.add(l+s-1),n+=r*s}const i=function(e,t){const o=Array.from(e.values()),n=Array.from(t.values()),i=Math.max(...o),l=Math.min(...o),r=Math.max(...n),s=Math.min(...n);return(i-l+1)*(r-s+1)}(t,o);return i==n}sortRanges(e){return Array.from(e).sort(q)}_getFirstLastIndexesObject(e){const t=e.sort(((e,t)=>e-t));return{first:t[0],last:t[t.length-1]}}_areCellInTheSameTableSection(e){const t=e[0].findAncestor("table"),o=this.getRowIndexes(e),n=parseInt(t.getAttribute("headingRows")||0);if(!this._areIndexesInSameSection(o,n))return!1;const i=parseInt(t.getAttribute("headingColumns")||0),l=this.getColumnIndexes(e);return this._areIndexesInSameSection(l,i)}_areIndexesInSameSection({first:e,last:t},o){return e<o===t<o}}function $(e,t,o,n,i,l={}){for(let r=0;r<n;r++){const n=e.createElement("tableRow");e.insert(n,t,o),Z(i,e,e.createPositionAt(n,"end"),l)}}function Z(e,t,o,n={}){for(let i=0;i<e;i++)d(t,o,n)}function K(e,t){if(e<t)return{newCellsSpan:1,updatedSpan:1};const o=Math.floor(e/t);return{newCellsSpan:o,updatedSpan:e-o*t+o}}function q(e,t){const o=e.start,n=t.start;return o.isBefore(n)?-1:1}class G extends e.Command{refresh(){const e=this.editor.plugins.get(U),t=e.getSelectedTableCells(this.editor.model.document.selection);this.isEnabled=e.isSelectionRectangular(t,this.editor.plugins.get(U))}execute(){const e=this.editor.model,t=this.editor.plugins.get(U);e.change((o=>{const n=t.getSelectedTableCells(e.document.selection),i=n.shift(),{mergeWidth:l,mergeHeight:r}=function(e,t,o){let n=0,i=0;for(const e of t){const{row:t,column:l}=o.getCellLocation(e);n=Y(e,l,n,"colspan"),i=Y(e,t,i,"rowspan")}const{row:l,column:r}=o.getCellLocation(e),s=n-r,a=i-l;return{mergeWidth:s,mergeHeight:a}}(i,n,t);c("colspan",l,i,o),c("rowspan",r,i,o);for(const e of n)J(e,i,o);W(i.findAncestor("table"),t),o.setSelection(i,"in")}))}}function J(e,t,o){X(e)||(X(t)&&o.remove(o.createRangeIn(t)),o.move(o.createRangeIn(e),o.createPositionAt(t,"end"))),o.remove(e)}function X(e){return 1==e.childCount&&e.getChild(0).is("element","paragraph")&&e.getChild(0).isEmpty}function Y(e,t,o,n){const i=parseInt(e.getAttribute(n)||1);return Math.max(o,t+i)}class Q extends e.Command{constructor(e){super(e),this.affectsData=!1}refresh(){const e=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=e.length>0}execute(){const e=this.editor.model,t=this.editor.plugins.get("TableUtils"),o=t.getSelectionAffectedTableCells(e.document.selection),n=t.getRowIndexes(o),i=o[0].findAncestor("table"),l=[];for(let t=n.first;t<=n.last;t++)for(const o of i.getChild(t).getChildren())l.push(e.createRangeOn(o));e.change((e=>{e.setSelection(l)}))}}class ee extends e.Command{constructor(e){super(e),this.affectsData=!1}refresh(){const e=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=e.length>0}execute(){const e=this.editor.plugins.get("TableUtils"),t=this.editor.model,o=e.getSelectionAffectedTableCells(t.document.selection),n=o[0],i=o.pop(),l=n.findAncestor("table"),r=e.getCellLocation(n),s=e.getCellLocation(i),a=Math.min(r.column,s.column),c=Math.max(r.column,s.column),d=[];for(const e of new f(l,{startColumn:a,endColumn:c}))d.push(t.createRangeOn(e.cell));t.change((e=>{e.setSelection(d)}))}}function te(e){e.document.registerPostFixer((t=>function(e,t){const o=t.document.differ.getChanges();let n=!1;const i=new Set;for(const t of o){let o;"table"==t.name&&"insert"==t.type&&(o=t.position.nodeAfter),"tableRow"!=t.name&&"tableCell"!=t.name||(o=t.position.findAncestor("table")),ie(t)&&(o=t.range.start.findAncestor("table")),o&&!i.has(o)&&(n=oe(o,e)||n,n=ne(o,e)||n,i.add(o))}return n}(t,e)))}function oe(e,t){let o=!1;const n=function(e){const t=parseInt(e.getAttribute("headingRows")||0),o=Array.from(e.getChildren()).reduce(((e,t)=>t.is("element","tableRow")?e+1:e),0),n=[];for(const{row:i,cell:l,cellHeight:r}of new f(e)){if(r<2)continue;const e=i<t?t:o;if(i+r>e){const t=e-i;n.push({cell:l,rowspan:t})}}return n}(e);if(n.length){o=!0;for(const e of n)c("rowspan",e.rowspan,e.cell,t,1)}return o}function ne(e,t){let o=!1;const n=function(e){const t=new Array(e.childCount).fill(0);for(const{rowIndex:o}of new f(e,{includeAllSlots:!0}))t[o]++;return t}(e),i=[];for(const[t,o]of n.entries())!o&&e.getChild(t).is("element","tableRow")&&i.push(t);if(i.length){o=!0;for(const o of i.reverse())t.remove(e.getChild(o)),n.splice(o,1)}const l=n.filter(((t,o)=>e.getChild(o).is("element","tableRow"))),r=l[0];if(!l.every((e=>e===r))){const n=l.reduce(((e,t)=>t>e?t:e),0);for(const[i,r]of l.entries()){const l=n-r;if(l){for(let o=0;o<l;o++)d(t,t.createPositionAt(e.getChild(i),"end"));o=!0}}}return o}function ie(e){const t="attribute"===e.type,o=e.attributeKey;return t&&("headingRows"===o||"colspan"===o||"rowspan"===o)}function le(e){e.document.registerPostFixer((t=>function(e,t){const o=t.document.differ.getChanges();let n=!1;for(const t of o)"insert"==t.type&&"table"==t.name&&(n=re(t.position.nodeAfter,e)||n),"insert"==t.type&&"tableRow"==t.name&&(n=se(t.position.nodeAfter,e)||n),"insert"==t.type&&"tableCell"==t.name&&(n=ae(t.position.nodeAfter,e)||n),ce(t)&&(n=ae(t.position.parent,e)||n);return n}(t,e)))}function re(e,t){let o=!1;for(const n of e.getChildren())n.is("element","tableRow")&&(o=se(n,t)||o);return o}function se(e,t){let o=!1;for(const n of e.getChildren())o=ae(n,t)||o;return o}function ae(e,t){if(0==e.childCount)return t.insertElement("paragraph",e),!0;const o=Array.from(e.getChildren()).filter((e=>e.is("$text")));for(const e of o)t.wrap(t.createRangeOn(e),"paragraph");return!!o.length}function ce(e){return!(!e.position||!e.position.parent.is("element","tableCell"))&&("insert"==e.type&&"$text"==e.name||"remove"==e.type)}function de(e,t){if(!e.is("element","paragraph"))return!1;const o=t.toViewElement(e);return!!o&&C(e)!==o.is("element","span")}var ue=o(62),he=o.n(ue),be=o(482),me={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(be.Z,me);be.Z.locals;class ge extends e.Plugin{static get pluginName(){return"TableEditing"}static get requires(){return[U]}init(){const e=this.editor,t=e.model,o=t.schema,n=e.conversion,i=e.plugins.get(U);o.register("table",{inheritAllFrom:"$blockObject",allowAttributes:["headingRows","headingColumns"]}),o.register("tableRow",{allowIn:"table",isLimit:!0}),o.register("tableCell",{allowContentOf:"$container",allowIn:"tableRow",allowAttributes:["colspan","rowspan"],isLimit:!0,isSelectable:!0}),n.for("upcast").add((e=>{e.on("element:figure",((e,t,o)=>{if(!o.consumable.test(t.viewItem,{name:!0,classes:"table"}))return;const n=function(e){for(const t of e.getChildren())if(t.is("element","table"))return t}(t.viewItem);if(!n||!o.consumable.test(n,{name:!0}))return;o.consumable.consume(t.viewItem,{name:!0,classes:"table"});const i=o.convertItem(n,t.modelCursor),l=(0,b.first)(i.modelRange.getItems());l?(o.convertChildren(t.viewItem,o.writer.createPositionAt(l,"end")),o.updateConversionResult(l,t)):o.consumable.revert(t.viewItem,{name:!0,classes:"table"})}))})),n.for("upcast").add(m()),n.for("editingDowncast").elementToStructure({model:{name:"table",attributes:["headingRows"]},view:k(i,{asWidget:!0})}),n.for("dataDowncast").elementToStructure({model:{name:"table",attributes:["headingRows"]},view:k(i)}),n.for("upcast").elementToElement({model:"tableRow",view:"tr"}),n.for("upcast").add((e=>{e.on("element:tr",((e,t)=>{t.viewItem.isEmpty&&0==t.modelCursor.index&&e.stop()}),{priority:"high"})})),n.for("downcast").elementToElement({model:"tableRow",view:(e,{writer:t})=>e.isEmpty?t.createEmptyElement("tr"):t.createContainerElement("tr")}),n.for("upcast").elementToElement({model:"tableCell",view:"td"}),n.for("upcast").elementToElement({model:"tableCell",view:"th"}),n.for("upcast").add(g("td")),n.for("upcast").add(g("th")),n.for("editingDowncast").elementToElement({model:"tableCell",view:_({asWidget:!0})}),n.for("dataDowncast").elementToElement({model:"tableCell",view:_()}),n.for("editingDowncast").elementToElement({model:"paragraph",view:v({asWidget:!0}),converterPriority:"high"}),n.for("dataDowncast").elementToElement({model:"paragraph",view:v(),converterPriority:"high"}),n.for("downcast").attributeToAttribute({model:"colspan",view:"colspan"}),n.for("upcast").attributeToAttribute({model:{key:"colspan",value:pe("colspan")},view:"colspan"}),n.for("downcast").attributeToAttribute({model:"rowspan",view:"rowspan"}),n.for("upcast").attributeToAttribute({model:{key:"rowspan",value:pe("rowspan")},view:"rowspan"}),e.data.mapper.on("modelToViewPosition",((e,t)=>{const o=t.modelPosition.parent,n=t.modelPosition.nodeBefore;if(!o.is("element","tableCell"))return;if(!n||!n.is("element","paragraph"))return;const i=t.mapper.toViewElement(n),l=t.mapper.toViewElement(o);i===l&&(t.viewPosition=t.mapper.findPositionIn(l,n.maxOffset))})),e.config.define("table.defaultHeadings.rows",0),e.config.define("table.defaultHeadings.columns",0),e.commands.add("insertTable",new y(e)),e.commands.add("insertTableRowAbove",new T(e,{order:"above"})),e.commands.add("insertTableRowBelow",new T(e,{order:"below"})),e.commands.add("insertTableColumnLeft",new A(e,{order:"left"})),e.commands.add("insertTableColumnRight",new A(e,{order:"right"})),e.commands.add("removeTableRow",new H(e)),e.commands.add("removeTableColumn",new M(e)),e.commands.add("splitTableCellVertically",new x(e,{direction:"vertically"})),e.commands.add("splitTableCellHorizontally",new x(e,{direction:"horizontally"})),e.commands.add("mergeTableCells",new G(e)),e.commands.add("mergeTableCellRight",new F(e,{direction:"right"})),e.commands.add("mergeTableCellLeft",new F(e,{direction:"left"})),e.commands.add("mergeTableCellDown",new F(e,{direction:"down"})),e.commands.add("mergeTableCellUp",new F(e,{direction:"up"})),e.commands.add("setTableColumnHeader",new j(e)),e.commands.add("setTableRowHeader",new O(e)),e.commands.add("selectTableRow",new Q(e)),e.commands.add("selectTableColumn",new ee(e)),te(t),le(t),this.listenTo(t.document,"change:data",(()=>{!function(e,t){const o=e.document.differ;for(const e of o.getChanges()){let o,n=!1;if("attribute"==e.type){const t=e.range.start.nodeAfter;if(!t||!t.is("element","table"))continue;if("headingRows"!=e.attributeKey&&"headingColumns"!=e.attributeKey)continue;o=t,n="headingRows"==e.attributeKey}else"tableRow"!=e.name&&"tableCell"!=e.name||(o=e.position.findAncestor("table"),n="tableRow"==e.name);if(!o)continue;const i=o.getAttribute("headingRows")||0,l=o.getAttribute("headingColumns")||0,r=new f(o);for(const e of r){const o=e.row<i||e.column<l?"th":"td",r=t.mapper.toViewElement(e.cell);r&&r.is("element")&&r.name!=o&&t.reconvertItem(n?e.cell.parent:e.cell)}}}(t,e.editing),function(e,t){const o=e.document.differ,n=new Set;for(const e of o.getChanges()){const t="attribute"==e.type?e.range.start.parent:e.position.parent;t.is("element","tableCell")&&n.add(t)}for(const e of n.values()){const o=Array.from(e.getChildren()).filter((e=>de(e,t.mapper)));for(const e of o)t.reconvertItem(e)}}(t,e.editing)}))}}function pe(e){return t=>{const o=parseInt(t.getAttribute(e));return Number.isNaN(o)||o<=0?null:o}}var fe=o(273),we=o(272),ke={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(we.Z,ke);we.Z.locals;class _e extends fe.View{constructor(e){super(e);const t=this.bindTemplate;this.items=this._createGridCollection(),this.keystrokes=new b.KeystrokeHandler,this.focusTracker=new b.FocusTracker,this.set("rows",0),this.set("columns",0),this.bind("label").to(this,"columns",this,"rows",((e,t)=>`${t} × ${e}`)),this.setTemplate({tag:"div",attributes:{class:["ck"]},children:[{tag:"div",attributes:{class:["ck-insert-table-dropdown__grid"]},on:{"mouseover@.ck-insert-table-dropdown-grid-box":t.to("boxover")},children:this.items},{tag:"div",attributes:{class:["ck","ck-insert-table-dropdown__label"],"aria-hidden":!0},children:[{text:t.to("label")}]}],on:{mousedown:t.to((e=>{e.preventDefault()})),click:t.to((()=>{this.fire("execute")}))}}),this.on("boxover",((e,t)=>{const{row:o,column:n}=t.target.dataset;this.items.get(10*(parseInt(o,10)-1)+(parseInt(n,10)-1)).focus()})),this.focusTracker.on("change:focusedElement",((e,t,o)=>{if(!o)return;const{row:n,column:i}=o.dataset;this.set({rows:parseInt(n),columns:parseInt(i)})})),this.on("change:columns",(()=>this._highlightGridBoxes())),this.on("change:rows",(()=>this._highlightGridBoxes()))}render(){super.render(),(0,fe.addKeyboardHandlingForGrid)({keystrokeHandler:this.keystrokes,focusTracker:this.focusTracker,gridItems:this.items,numberOfColumns:10,uiLanguageDirection:this.locale&&this.locale.uiLanguageDirection});for(const e of this.items)this.focusTracker.add(e.element);this.keystrokes.listenTo(this.element)}focus(){this.items.get(0).focus()}focusLast(){this.items.get(0).focus()}_highlightGridBoxes(){const e=this.rows,t=this.columns;this.items.map(((o,n)=>{const i=Math.floor(n/10)<e&&n%10<t;o.set("isOn",i)}))}_createGridButton(e,t,o,n){const i=new fe.ButtonView(e);return i.set({label:n,class:"ck-insert-table-dropdown-grid-box"}),i.extendTemplate({attributes:{"data-row":t,"data-column":o}}),i}_createGridCollection(){const e=[];for(let t=0;t<100;t++){const o=Math.floor(t/10),n=t%10,i=`${o+1} × ${n+1}`;e.push(this._createGridButton(this.locale,o+1,n+1,i))}return this.createCollection(e)}}class ve extends e.Plugin{static get pluginName(){return"TableUI"}init(){const e=this.editor,t=this.editor.t,o="ltr"===e.locale.contentLanguageDirection;e.ui.componentFactory.add("insertTable",(o=>{const n=e.commands.get("insertTable"),i=(0,fe.createDropdown)(o);let l;return i.bind("isEnabled").to(n),i.buttonView.set({icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>',label:t("Insert table"),tooltip:!0}),i.on("change:isOpen",(()=>{l||(l=new _e(o),i.panelView.children.add(l),l.delegate("execute").to(i),i.on("execute",(()=>{e.execute("insertTable",{rows:l.rows,columns:l.columns}),e.editing.view.focus()})))})),i})),e.ui.componentFactory.add("tableColumn",(e=>{const n=[{type:"switchbutton",model:{commandName:"setTableColumnHeader",label:t("Header column"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:o?"insertTableColumnLeft":"insertTableColumnRight",label:t("Insert column left")}},{type:"button",model:{commandName:o?"insertTableColumnRight":"insertTableColumnLeft",label:t("Insert column right")}},{type:"button",model:{commandName:"removeTableColumn",label:t("Delete column")}},{type:"button",model:{commandName:"selectTableColumn",label:t("Select column")}}];return this._prepareDropdown(t("Column"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>',n,e)})),e.ui.componentFactory.add("tableRow",(e=>{const o=[{type:"switchbutton",model:{commandName:"setTableRowHeader",label:t("Header row"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableRowAbove",label:t("Insert row above")}},{type:"button",model:{commandName:"insertTableRowBelow",label:t("Insert row below")}},{type:"button",model:{commandName:"removeTableRow",label:t("Delete row")}},{type:"button",model:{commandName:"selectTableRow",label:t("Select row")}}];return this._prepareDropdown(t("Row"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>',o,e)})),e.ui.componentFactory.add("mergeTableCells",(e=>{const n=[{type:"button",model:{commandName:"mergeTableCellUp",label:t("Merge cell up")}},{type:"button",model:{commandName:o?"mergeTableCellRight":"mergeTableCellLeft",label:t("Merge cell right")}},{type:"button",model:{commandName:"mergeTableCellDown",label:t("Merge cell down")}},{type:"button",model:{commandName:o?"mergeTableCellLeft":"mergeTableCellRight",label:t("Merge cell left")}},{type:"separator"},{type:"button",model:{commandName:"splitTableCellVertically",label:t("Split cell vertically")}},{type:"button",model:{commandName:"splitTableCellHorizontally",label:t("Split cell horizontally")}}];return this._prepareMergeSplitButtonDropdown(t("Merge cells"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>',n,e)}))}_prepareDropdown(e,t,o,n){const i=this.editor,l=(0,fe.createDropdown)(n),r=this._fillDropdownWithListOptions(l,o);return l.buttonView.set({label:e,icon:t,tooltip:!0}),l.bind("isEnabled").toMany(r,"isEnabled",((...e)=>e.some((e=>e)))),this.listenTo(l,"execute",(e=>{i.execute(e.source.commandName),e.source instanceof fe.SwitchButtonView||i.editing.view.focus()})),l}_prepareMergeSplitButtonDropdown(e,t,o,n){const i=this.editor,l=(0,fe.createDropdown)(n,fe.SplitButtonView),r="mergeTableCells",s=i.commands.get(r),a=this._fillDropdownWithListOptions(l,o);return l.buttonView.set({label:e,icon:t,tooltip:!0,isEnabled:!0}),l.bind("isEnabled").toMany([s,...a],"isEnabled",((...e)=>e.some((e=>e)))),this.listenTo(l.buttonView,"execute",(()=>{i.execute(r),i.editing.view.focus()})),this.listenTo(l,"execute",(e=>{i.execute(e.source.commandName),i.editing.view.focus()})),l}_fillDropdownWithListOptions(e,t){const o=this.editor,n=[],i=new b.Collection;for(const e of t)Ce(e,o,n,i);return(0,fe.addListToDropdown)(e,i,o.ui.componentFactory),n}}function Ce(e,t,o,n){const i=e.model=new fe.Model(e.model),{commandName:l,bindIsOn:r}=e.model;if("button"===e.type||"switchbutton"===e.type){const e=t.commands.get(l);o.push(e),i.set({commandName:l}),i.bind("isEnabled").to(e),r&&i.bind("isOn").to(e,"value")}i.set({withText:!0}),n.add(e)}var ye=o(475),Te={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(ye.Z,Te);ye.Z.locals;class Ae extends e.Plugin{static get pluginName(){return"TableSelection"}static get requires(){return[U,U]}init(){const e=this.editor,t=e.model,o=e.editing.view;this.listenTo(t,"deleteContent",((e,t)=>this._handleDeleteContent(e,t)),{priority:"high"}),this.listenTo(o.document,"insertText",((e,t)=>this._handleInsertTextEvent(e,t)),{priority:"high"}),this._defineSelectionConverter(),this._enablePluginDisabling()}getSelectedTableCells(){const e=this.editor.plugins.get(U),t=this.editor.model.document.selection,o=e.getSelectedTableCells(t);return 0==o.length?null:o}getSelectionAsFragment(){const e=this.editor.plugins.get(U),t=this.getSelectedTableCells();return t?this.editor.model.change((o=>{const n=o.createDocumentFragment(),{first:i,last:l}=e.getColumnIndexes(t),{first:r,last:s}=e.getRowIndexes(t),a=t[0].findAncestor("table");let c=s,d=l;if(e.isSelectionRectangular(t)){const e={firstColumn:i,lastColumn:l,firstRow:r,lastRow:s};c=L(a,e),d=N(a,e)}const u=V(a,{startRow:r,startColumn:i,endRow:c,endColumn:d},o);return o.insert(u,n,0),n})):null}setCellSelection(e,t){const o=this._getCellsToSelect(e,t);this.editor.model.change((e=>{e.setSelection(o.cells.map((t=>e.createRangeOn(t))),{backward:o.backward})}))}getFocusCell(){const e=[...this.editor.model.document.selection.getRanges()].pop().getContainedElement();return e&&e.is("element","tableCell")?e:null}getAnchorCell(){const e=this.editor.model.document.selection,t=(0,b.first)(e.getRanges()).getContainedElement();return t&&t.is("element","tableCell")?t:null}_defineSelectionConverter(){const e=this.editor,t=new Set;e.conversion.for("editingDowncast").add((e=>e.on("selection",((e,o,n)=>{const i=n.writer;!function(e){for(const o of t)e.removeClass("ck-editor__editable_selected",o);t.clear()}(i);const l=this.getSelectedTableCells();if(!l)return;for(const e of l){const o=n.mapper.toViewElement(e);i.addClass("ck-editor__editable_selected",o),t.add(o)}const r=n.mapper.toViewElement(l[l.length-1]);i.setSelection(r,0)}),{priority:"lowest"})))}_enablePluginDisabling(){const e=this.editor;this.on("change:isEnabled",(()=>{if(!this.isEnabled){const t=this.getSelectedTableCells();if(!t)return;e.model.change((o=>{const n=o.createPositionAt(t[0],0),i=e.model.schema.getNearestSelectionRange(n);o.setSelection(i)}))}}))}_handleDeleteContent(e,t){const o=this.editor.plugins.get(U),[n,i]=t,l=this.editor.model,r=!i||"backward"==i.direction,s=o.getSelectedTableCells(n);s.length&&(e.stop(),l.change((e=>{const t=s[r?s.length-1:0];l.change((e=>{for(const t of s)l.deleteContent(e.createSelection(t,"in"))}));const o=l.schema.getNearestSelectionRange(e.createPositionAt(t,0));n.is("documentSelection")?e.setSelection(o):n.setTo(o)})))}_handleInsertTextEvent(e,t){const o=this.editor,n=o.model.document.selection,i=this.getSelectedTableCells(n);if(!i)return;const l=o.editing.view,r=o.editing.mapper,s=i.map((e=>l.createRangeOn(r.toViewElement(e))));t.selection=l.createSelection(s)}_getCellsToSelect(e,t){const o=this.editor.plugins.get("TableUtils"),n=o.getCellLocation(e),i=o.getCellLocation(t),l=Math.min(n.row,i.row),r=Math.max(n.row,i.row),s=Math.min(n.column,i.column),a=Math.max(n.column,i.column),c=new Array(r-l+1).fill(null).map((()=>[])),d={startRow:l,endRow:r,startColumn:s,endColumn:a};for(const{row:t,cell:o}of new f(e.findAncestor("table"),d))c[t-l].push(o);const u=i.row<n.row,h=i.column<n.column;return u&&c.reverse(),h&&c.forEach((e=>e.reverse())),{cells:c.flat(),backward:u||h}}}class xe extends e.Plugin{static get pluginName(){return"TableClipboard"}static get requires(){return[Ae,U]}init(){const e=this.editor,t=e.editing.view.document;this.listenTo(t,"copy",((e,t)=>this._onCopyCut(e,t))),this.listenTo(t,"cut",((e,t)=>this._onCopyCut(e,t))),this.listenTo(e.model,"insertContent",((e,t)=>this._onInsertContent(e,...t)),{priority:"high"}),this.decorate("_replaceTableSlotCell")}_onCopyCut(e,t){const o=this.editor.plugins.get(Ae);if(!o.getSelectedTableCells())return;if("cut"==e.name&&this.editor.isReadOnly)return;t.preventDefault(),e.stop();const n=this.editor.data,i=this.editor.editing.view.document,l=n.toView(o.getSelectionAsFragment());i.fire("clipboardOutput",{dataTransfer:t.dataTransfer,content:l,method:e.name})}_onInsertContent(e,t,o){if(o&&!o.is("documentSelection"))return;const n=this.editor.model,i=this.editor.plugins.get(U);let l=Ve(t,n);if(!l)return;const r=i.getSelectionAffectedTableCells(n.document.selection);r.length?(e.stop(),n.change((e=>{const t={width:i.getColumns(l),height:i.getRows(l)},o=function(e,t,o,n){const i=e[0].findAncestor("table"),l=n.getColumnIndexes(e),r=n.getRowIndexes(e),s={firstColumn:l.first,lastColumn:l.last,firstRow:r.first,lastRow:r.last},a=1===e.length;a&&(s.lastRow+=t.height-1,s.lastColumn+=t.width-1,function(e,t,o,n){const i=n.getColumns(e),l=n.getRows(e);o>i&&n.insertColumns(e,{at:i,columns:o-i});t>l&&n.insertRows(e,{at:l,rows:t-l})}(i,s.lastRow+1,s.lastColumn+1,n));a||!n.isSelectionRectangular(e)?function(e,t,o){const{firstRow:n,lastRow:i,firstColumn:l,lastColumn:r}=t,s={first:n,last:i},a={first:l,last:r};Re(e,l,s,o),Re(e,r+1,s,o),Se(e,n,a,o),Se(e,i+1,a,o,n)}(i,s,o):(s.lastRow=L(i,s),s.lastColumn=N(i,s));return s}(r,t,e,i),n=o.lastRow-o.firstRow+1,s=o.lastColumn-o.firstColumn+1,a={startRow:0,startColumn:0,endRow:Math.min(n,t.height)-1,endColumn:Math.min(s,t.width)-1};l=V(l,a,e);const c=r[0].findAncestor("table"),d=this._replaceSelectedCellsWithPasted(l,t,c,o,e);if(this.editor.plugins.get("TableSelection").isEnabled){const t=i.sortRanges(d.map((t=>e.createRangeOn(t))));e.setSelection(t)}else e.setSelection(d[0],0)}))):W(l,i)}_replaceSelectedCellsWithPasted(e,t,o,n,i){const{width:l,height:r}=t,s=function(e,t,o){const n=new Array(o).fill(null).map((()=>new Array(t).fill(null)));for(const{column:t,row:o,cell:i}of new f(e))n[o][t]=i;return n}(e,l,r),a=[...new f(o,{startRow:n.firstRow,endRow:n.lastRow,startColumn:n.firstColumn,endColumn:n.lastColumn,includeAllSlots:!0})],c=[];let d;for(const e of a){const{row:t,column:o}=e;o===n.firstColumn&&(d=e.getPositionBefore());const a=t-n.firstRow,u=o-n.firstColumn,h=s[a%r][u%l],b=h?i.cloneElement(h):null,m=this._replaceTableSlotCell(e,b,d,i);m&&(E(m,t,o,n.lastRow,n.lastColumn,i),c.push(m),d=i.createPositionAfter(m))}const u=parseInt(o.getAttribute("headingRows")||0),h=parseInt(o.getAttribute("headingColumns")||0),b=n.firstRow<u&&u<=n.lastRow,m=n.firstColumn<h&&h<=n.lastColumn;if(b){const e=Se(o,u,{first:n.firstColumn,last:n.lastColumn},i,n.firstRow);c.push(...e)}if(m){const e=Re(o,h,{first:n.firstRow,last:n.lastRow},i);c.push(...e)}return c}_replaceTableSlotCell(e,t,o,n){const{cell:i,isAnchor:l}=e;return l&&n.remove(i),t?(n.insert(t,o),t):null}getTableIfOnlyTableInContent(e,t){return Ve(e,t)}}function Ve(e,t){if(!e.is("documentFragment")&&!e.is("element"))return null;if(e.is("element","table"))return e;if(1==e.childCount&&e.getChild(0).is("element","table"))return e.getChild(0);const o=t.createRangeIn(e);for(const e of o.getItems())if(e.is("element","table")){const n=t.createRange(o.start,t.createPositionBefore(e));if(t.hasContent(n,{ignoreWhitespaces:!0}))return null;const i=t.createRange(t.createPositionAfter(e),o.end);return t.hasContent(i,{ignoreWhitespaces:!0})?null:e}return null}function Se(e,t,o,n,i=0){if(t<1)return;return S(e,t,i).filter((({column:e,cellWidth:t})=>Ie(e,t,o))).map((({cell:e})=>R(e,t,n)))}function Re(e,t,o,n){if(t<1)return;return I(e,t).filter((({row:e,cellHeight:t})=>Ie(e,t,o))).map((({cell:e,column:o})=>P(e,o,t,n)))}function Ie(e,t,o){const n=e+t-1,{first:i,last:l}=o;return e>=i&&e<=l||e<i&&n>=i}class Pe extends e.Plugin{static get pluginName(){return"TableKeyboard"}static get requires(){return[Ae,U]}init(){const e=this.editor.editing.view.document;this.listenTo(e,"arrowKey",((...e)=>this._onArrowKey(...e)),{context:"table"}),this.listenTo(e,"tab",((...e)=>this._handleTabOnSelectedTable(...e)),{context:"figure"}),this.listenTo(e,"tab",((...e)=>this._handleTab(...e)),{context:["th","td"]})}_handleTabOnSelectedTable(e,t){const o=this.editor,n=o.model.document.selection.getSelectedElement();n&&n.is("element","table")&&(t.preventDefault(),t.stopPropagation(),e.stop(),o.model.change((e=>{e.setSelection(e.createRangeIn(n.getChild(0).getChild(0)))})))}_handleTab(e,t){const o=this.editor,n=this.editor.plugins.get(U),i=o.model.document.selection,l=!t.shiftKey;let r=n.getTableCellsContainingSelection(i)[0];if(r||(r=this.editor.plugins.get("TableSelection").getFocusCell()),!r)return;t.preventDefault(),t.stopPropagation(),e.stop();const s=r.parent,a=s.parent,c=a.getChildIndex(s),d=s.getChildIndex(r),u=0===d;if(!l&&u&&0===c)return void o.model.change((e=>{e.setSelection(e.createRangeOn(a))}));const h=d===s.childCount-1,b=c===n.getRows(a)-1;if(l&&b&&h&&(o.execute("insertTableRowBelow"),c===n.getRows(a)-1))return void o.model.change((e=>{e.setSelection(e.createRangeOn(a))}));let m;if(l&&h){const e=a.getChild(c+1);m=e.getChild(0)}else if(!l&&u){const e=a.getChild(c-1);m=e.getChild(e.childCount-1)}else m=s.getChild(d+(l?1:-1));o.model.change((e=>{e.setSelection(e.createRangeIn(m))}))}_onArrowKey(e,t){const o=this.editor,n=t.keyCode,i=(0,b.getLocalizedArrowKeyCodeDirection)(n,o.locale.contentLanguageDirection);this._handleArrowKeys(i,t.shiftKey)&&(t.preventDefault(),t.stopPropagation(),e.stop())}_handleArrowKeys(e,t){const o=this.editor.plugins.get(U),n=this.editor.model,i=n.document.selection,l=["right","down"].includes(e),r=o.getSelectedTableCells(i);if(r.length){let o;return o=t?this.editor.plugins.get("TableSelection").getFocusCell():l?r[r.length-1]:r[0],this._navigateFromCellInDirection(o,e,t),!0}const s=i.focus.findAncestor("tableCell");if(!s)return!1;if(!i.isCollapsed)if(t){if(i.isBackward==l&&!i.containsEntireContent(s))return!1}else{const e=i.getSelectedElement();if(!e||!n.schema.isObject(e))return!1}return!!this._isSelectionAtCellEdge(i,s,l)&&(this._navigateFromCellInDirection(s,e,t),!0)}_isSelectionAtCellEdge(e,t,o){const n=this.editor.model,i=this.editor.model.schema,l=o?e.getLastPosition():e.getFirstPosition();if(!i.getLimitElement(l).is("element","tableCell")){return n.createPositionAt(t,o?"end":0).isTouching(l)}const r=n.createSelection(l);return n.modifySelection(r,{direction:o?"forward":"backward"}),l.isEqual(r.focus)}_navigateFromCellInDirection(e,t,o=!1){const n=this.editor.model,i=e.findAncestor("table"),l=[...new f(i,{includeAllSlots:!0})],{row:r,column:s}=l[l.length-1],a=l.find((({cell:t})=>t==e));let{row:c,column:d}=a;switch(t){case"left":d--;break;case"up":c--;break;case"right":d+=a.cellWidth;break;case"down":c+=a.cellHeight}if(c<0||c>r||d<0&&c<=0||d>s&&c>=r)return void n.change((e=>{e.setSelection(e.createRangeOn(i))}));d<0?(d=o?0:s,c--):d>s&&(d=o?s:0,c++);const u=l.find((e=>e.row==c&&e.column==d)).cell,h=["right","down"].includes(t),b=this.editor.plugins.get("TableSelection");if(o&&b.isEnabled){const t=b.getAnchorCell()||e;b.setCellSelection(t,u)}else{const e=n.createPositionAt(u,h?0:"end");n.change((t=>{t.setSelection(e)}))}}}var Ee=o(492);class ze extends Ee.DomEventObserver{constructor(e){super(e),this.domEventType=["mousemove","mouseleave"]}onDomEvent(e){this.fire(e.type,e)}}class Be extends e.Plugin{static get pluginName(){return"TableMouse"}static get requires(){return[Ae,U]}init(){this.editor.editing.view.addObserver(ze),this._enableShiftClickSelection(),this._enableMouseDragSelection()}_enableShiftClickSelection(){const e=this.editor,t=e.plugins.get(U);let o=!1;const n=e.plugins.get(Ae);this.listenTo(e.editing.view.document,"mousedown",((i,l)=>{const r=e.model.document.selection;if(!this.isEnabled||!n.isEnabled)return;if(!l.domEvent.shiftKey)return;const s=n.getAnchorCell()||t.getTableCellsContainingSelection(r)[0];if(!s)return;const a=this._getModelTableCellFromDomEvent(l);a&&We(s,a)&&(o=!0,n.setCellSelection(s,a),l.preventDefault())})),this.listenTo(e.editing.view.document,"mouseup",(()=>{o=!1})),this.listenTo(e.editing.view.document,"selectionChange",(e=>{o&&e.stop()}),{priority:"highest"})}_enableMouseDragSelection(){const e=this.editor;let t,o,n=!1,i=!1;const l=e.plugins.get(Ae);this.listenTo(e.editing.view.document,"mousedown",((e,o)=>{this.isEnabled&&l.isEnabled&&(o.domEvent.shiftKey||o.domEvent.ctrlKey||o.domEvent.altKey||(t=this._getModelTableCellFromDomEvent(o)))})),this.listenTo(e.editing.view.document,"mousemove",((e,r)=>{if(!r.domEvent.buttons)return;if(!t)return;const s=this._getModelTableCellFromDomEvent(r);s&&We(t,s)&&(o=s,n||o==t||(n=!0)),n&&(i=!0,l.setCellSelection(t,o),r.preventDefault())})),this.listenTo(e.editing.view.document,"mouseup",(()=>{n=!1,i=!1,t=null,o=null})),this.listenTo(e.editing.view.document,"selectionChange",(e=>{i&&e.stop()}),{priority:"highest"})}_getModelTableCellFromDomEvent(e){const t=e.target,o=this.editor.editing.view.createPositionAt(t,0);return this.editor.editing.mapper.toModelPosition(o).parent.findAncestor("tableCell",{includeSelf:!0})}}function We(e,t){return e.parent.parent==t.parent.parent}var Le=o(660),Ne={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(Le.Z,Ne);Le.Z.locals;class Fe extends e.Plugin{static get requires(){return[ge,ve,Ae,Be,Pe,xe,t.Widget]}static get pluginName(){return"Table"}}class De extends e.Plugin{static get pluginName(){return"PlainTableOutput"}static get requires(){return[Fe]}init(){const e=this.editor;e.conversion.for("dataDowncast").elementToStructure({model:"table",view:He,converterPriority:"high"}),e.plugins.has("TableCaption")&&e.conversion.for("dataDowncast").elementToElement({model:"caption",view:(e,{writer:t})=>{if("table"===e.parent.name)return t.createContainerElement("caption")},converterPriority:"high"}),e.plugins.has("TableProperties")&&function(e){const t={"border-width":"tableBorderWidth","border-color":"tableBorderColor","border-style":"tableBorderStyle","background-color":"tableBackgroundColor"};for(const[o,n]of Object.entries(t))e.conversion.for("dataDowncast").add((e=>e.on(`attribute:${n}:table`,((e,t,n)=>{const{item:i,attributeNewValue:l}=t,{mapper:r,writer:s}=n;if(!n.consumable.consume(i,e.name))return;const a=r.toViewElement(i);l?s.setStyle(o,l,a):s.removeStyle(o,a)}),{priority:"high"})))}(e)}}function He(e,{writer:t}){const o=e.getAttribute("headingRows")||0,n=t.createSlot((e=>e.is("element","tableRow")&&e.index<o)),i=t.createSlot((e=>e.is("element","tableRow")&&e.index>=o)),l=t.createSlot((e=>!e.is("element","tableRow"))),r=t.createContainerElement("thead",null,n),s=t.createContainerElement("tbody",null,i),a=[];return o&&a.push(r),o<e.childCount&&a.push(s),t.createContainerElement("table",null,[l,...a])}function Me(e){const t=e.getSelectedElement();return t&&je(t)?t:null}function Oe(e){const t=e.getFirstPosition();if(!t)return null;let o=t.parent;for(;o;){if(o.is("element")&&je(o))return o;o=o.parent}return null}function je(e){return!!e.getCustomProperty("table")&&(0,t.isWidget)(e)}class Ue extends e.Plugin{static get requires(){return[t.WidgetToolbarRepository]}static get pluginName(){return"TableToolbar"}afterInit(){const e=this.editor,o=e.t,n=e.plugins.get(t.WidgetToolbarRepository),i=e.config.get("table.contentToolbar"),l=e.config.get("table.tableToolbar");i&&n.register("tableContent",{ariaLabel:o("Table toolbar"),items:i,getRelatedElement:Oe}),l&&n.register("table",{ariaLabel:o("Table toolbar"),items:l,getRelatedElement:Me})}}var $e=o(252),Ze={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()($e.Z,Ze);$e.Z.locals;class Ke extends fe.View{constructor(e,t){super(e),this.set("value",""),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isEmpty",!0),this.options=t,this.focusTracker=new b.FocusTracker,this._focusables=new fe.ViewCollection,this.dropdownView=this._createDropdownView(),this.inputView=this._createInputTextView(),this.keystrokes=new b.KeystrokeHandler,this._stillTyping=!1,this._focusCycler=new fe.FocusCycler({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-input-color"]},children:[this.dropdownView,this.inputView]}),this.on("change:value",((e,t,o)=>this._setInputValue(o)))}render(){super.render(),this.keystrokes.listenTo(this.dropdownView.panelView.element)}focus(){this.inputView.focus()}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}_createDropdownView(){const e=this.locale,t=e.t,o=this.bindTemplate,n=this._createColorGrid(e),i=(0,fe.createDropdown)(e),l=new fe.View,r=this._createRemoveColorButton();return l.setTemplate({tag:"span",attributes:{class:["ck","ck-input-color__button__preview"],style:{backgroundColor:o.to("value")}},children:[{tag:"span",attributes:{class:["ck","ck-input-color__button__preview__no-color-indicator",o.if("value","ck-hidden",(e=>""!=e))]}}]}),i.buttonView.extendTemplate({attributes:{class:"ck-input-color__button"}}),i.buttonView.children.add(l),i.buttonView.label=t("Color picker"),i.buttonView.tooltip=!0,i.panelPosition="rtl"===e.uiLanguageDirection?"se":"sw",i.panelView.children.add(r),i.panelView.children.add(n),i.bind("isEnabled").to(this,"isReadOnly",(e=>!e)),this._focusables.add(r),this._focusables.add(n),this.focusTracker.add(r.element),this.focusTracker.add(n.element),i}_createInputTextView(){const e=this.locale,t=new fe.InputTextView(e);return t.extendTemplate({on:{blur:t.bindTemplate.to("blur")}}),t.value=this.value,t.bind("isReadOnly","hasError").to(this),this.bind("isFocused","isEmpty").to(t),t.on("input",(()=>{const e=t.element.value,o=this.options.colorDefinitions.find((t=>e===t.label));this._stillTyping=!0,this.value=o&&o.color||e})),t.on("blur",(()=>{this._stillTyping=!1,this._setInputValue(t.element.value)})),t.delegate("input").to(this),t}_createRemoveColorButton(){const t=this.locale,o=t.t,n=new fe.ButtonView(t),i=this.options.defaultColorValue||"",l=o(i?"Restore default":"Remove color");return n.class="ck-input-color__remove-color",n.withText=!0,n.icon=e.icons.eraser,n.label=l,n.on("execute",(()=>{this.value=i,this.dropdownView.isOpen=!1,this.fire("input")})),n}_createColorGrid(e){const t=new fe.ColorGridView(e,{colorDefinitions:this.options.colorDefinitions,columns:this.options.columns});return t.on("execute",((e,t)=>{this.value=t.value,this.dropdownView.isOpen=!1,this.fire("input")})),t.bind("selectedColor").to(this,"value"),t}_setInputValue(e){if(!this._stillTyping){const t=qe(e),o=this.options.colorDefinitions.find((e=>t===qe(e.color)));this.inputView.value=o?o.label:e||""}}}function qe(e){return e.replace(/([(,])\s+/g,"$1").replace(/^\s+|\s+(?=[),\s]|$)/g,"").replace(/,|\s/g," ")}const Ge=e=>""===e;function Je(e){return{none:e("None"),solid:e("Solid"),dotted:e("Dotted"),dashed:e("Dashed"),double:e("Double"),groove:e("Groove"),ridge:e("Ridge"),inset:e("Inset"),outset:e("Outset")}}function Xe(e){return e('The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".')}function Ye(e){return e('The value is invalid. Try "10px" or "2em" or simply "2".')}function Qe(e){return e=e.trim(),Ge(e)||(0,Ee.isColor)(e)}function et(e){return e=e.trim(),Ge(e)||rt(e)||(0,Ee.isLength)(e)||(0,Ee.isPercentage)(e)}function tt(e){return e=e.trim(),Ge(e)||rt(e)||(0,Ee.isLength)(e)}function ot(e,t){const o=new b.Collection,n=Je(e.t);for(const i in n){const l={type:"button",model:new fe.Model({_borderStyleValue:i,label:n[i],withText:!0})};"none"===i?l.model.bind("isOn").to(e,"borderStyle",(e=>"none"===t?!e:e===i)):l.model.bind("isOn").to(e,"borderStyle",(e=>e===i)),o.add(l)}return o}function nt(e){const{view:t,icons:o,toolbar:n,labels:i,propertyName:l,nameToValue:r,defaultValue:s}=e;for(const e in i){const a=new fe.ButtonView(t.locale);a.set({label:i[e],icon:o[e],tooltip:i[e]});const c=r?r(e):e;a.bind("isOn").to(t,l,(e=>{let t=e;return""===e&&s&&(t=s),c===t})),a.on("execute",(()=>{t[l]=c})),n.items.add(a)}}const it=[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"Red"},{color:"hsl(30, 75%, 60%)",label:"Orange"},{color:"hsl(60, 75%, 60%)",label:"Yellow"},{color:"hsl(90, 75%, 60%)",label:"Light green"},{color:"hsl(120, 75%, 60%)",label:"Green"},{color:"hsl(150, 75%, 60%)",label:"Aquamarine"},{color:"hsl(180, 75%, 60%)",label:"Turquoise"},{color:"hsl(210, 75%, 60%)",label:"Light blue"},{color:"hsl(240, 75%, 60%)",label:"Blue"},{color:"hsl(270, 75%, 60%)",label:"Purple"}];function lt(e){return(t,o,n)=>{const i=new Ke(t.locale,{colorDefinitions:(l=e.colorConfig,l.map((e=>({color:e.model,label:e.label,options:{hasBorder:e.hasBorder}})))),columns:e.columns,defaultColorValue:e.defaultColorValue});var l;return i.inputView.set({id:o,ariaDescribedById:n}),i.bind("isReadOnly").to(t,"isEnabled",(e=>!e)),i.bind("hasError").to(t,"errorText",(e=>!!e)),i.on("input",(()=>{t.errorText=null})),t.bind("isEmpty","isFocused").to(i),i}}function rt(e){const t=parseFloat(e);return!Number.isNaN(t)&&e===String(t)}var st=o(333),at={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(st.Z,at);st.Z.locals;class ct extends fe.View{constructor(e,t={}){super(e);const o=this.bindTemplate;this.set("class",t.class||null),this.children=this.createCollection(),t.children&&t.children.forEach((e=>this.children.add(e))),this.set("_role",null),this.set("_ariaLabelledBy",null),t.labelView&&this.set({_role:"group",_ariaLabelledBy:t.labelView.id}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-form__row",o.to("class")],role:o.to("_role"),"aria-labelledby":o.to("_ariaLabelledBy")},children:this.children})}}var dt=o(934),ut={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(dt.Z,ut);dt.Z.locals;var ht=o(686),bt={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(ht.Z,bt);ht.Z.locals;var mt=o(773),gt={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(mt.Z,gt);mt.Z.locals;const pt={left:e.icons.alignLeft,center:e.icons.alignCenter,right:e.icons.alignRight,justify:e.icons.alignJustify,top:e.icons.alignTop,middle:e.icons.alignMiddle,bottom:e.icons.alignBottom};class ft extends fe.View{constructor(e,t){super(e),this.set({borderStyle:"",borderWidth:"",borderColor:"",padding:"",backgroundColor:"",width:"",height:"",horizontalAlignment:"",verticalAlignment:""}),this.options=t;const{borderStyleDropdown:o,borderWidthInput:n,borderColorInput:i,borderRowLabel:l}=this._createBorderFields(),{backgroundRowLabel:r,backgroundInput:s}=this._createBackgroundFields(),{widthInput:a,operatorLabel:c,heightInput:d,dimensionsLabel:u}=this._createDimensionFields(),{horizontalAlignmentToolbar:h,verticalAlignmentToolbar:m,alignmentLabel:g}=this._createAlignmentFields();this.focusTracker=new b.FocusTracker,this.keystrokes=new b.KeystrokeHandler,this.children=this.createCollection(),this.borderStyleDropdown=o,this.borderWidthInput=n,this.borderColorInput=i,this.backgroundInput=s,this.paddingInput=this._createPaddingField(),this.widthInput=a,this.heightInput=d,this.horizontalAlignmentToolbar=h,this.verticalAlignmentToolbar=m;const{saveButtonView:p,cancelButtonView:f}=this._createActionButtons();this.saveButtonView=p,this.cancelButtonView=f,this._focusables=new fe.ViewCollection,this._focusCycler=new fe.FocusCycler({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.children.add(new fe.FormHeaderView(e,{label:this.t("Cell properties")})),this.children.add(new ct(e,{labelView:l,children:[l,o,i,n],class:"ck-table-form__border-row"})),this.children.add(new ct(e,{labelView:r,children:[r,s],class:"ck-table-form__background-row"})),this.children.add(new ct(e,{children:[new ct(e,{labelView:u,children:[u,a,c,d],class:"ck-table-form__dimensions-row"}),new ct(e,{children:[this.paddingInput],class:"ck-table-cell-properties-form__padding-row"})]})),this.children.add(new ct(e,{labelView:g,children:[g,h,m],class:"ck-table-cell-properties-form__alignment-row"})),this.children.add(new ct(e,{children:[this.saveButtonView,this.cancelButtonView],class:"ck-table-form__action-row"})),this.setTemplate({tag:"form",attributes:{class:["ck","ck-form","ck-table-form","ck-table-cell-properties-form"],tabindex:"-1"},children:this.children})}render(){super.render(),(0,fe.submitHandler)({view:this}),[this.borderStyleDropdown,this.borderColorInput,this.borderColorInput.fieldView.dropdownView.buttonView,this.borderWidthInput,this.backgroundInput,this.backgroundInput.fieldView.dropdownView.buttonView,this.widthInput,this.heightInput,this.paddingInput,this.horizontalAlignmentToolbar,this.verticalAlignmentToolbar,this.saveButtonView,this.cancelButtonView].forEach((e=>{this._focusables.add(e),this.focusTracker.add(e.element)})),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createBorderFields(){const e=this.options.defaultTableCellProperties,t={style:e.borderStyle,width:e.borderWidth,color:e.borderColor},o=lt({colorConfig:this.options.borderColors,columns:5,defaultColorValue:t.color}),n=this.locale,i=this.t,l=new fe.LabelView(n);l.text=i("Border");const r=Je(i),s=new fe.LabeledFieldView(n,fe.createLabeledDropdown);s.set({label:i("Style"),class:"ck-table-form__border-style"}),s.fieldView.buttonView.set({isOn:!1,withText:!0,tooltip:i("Style")}),s.fieldView.buttonView.bind("label").to(this,"borderStyle",(e=>r[e||"none"])),s.fieldView.on("execute",(e=>{this.borderStyle=e.source._borderStyleValue})),s.bind("isEmpty").to(this,"borderStyle",(e=>!e)),(0,fe.addListToDropdown)(s.fieldView,ot(this,t.style));const a=new fe.LabeledFieldView(n,fe.createLabeledInputText);a.set({label:i("Width"),class:"ck-table-form__border-width"}),a.fieldView.bind("value").to(this,"borderWidth"),a.bind("isEnabled").to(this,"borderStyle",wt),a.fieldView.on("input",(()=>{this.borderWidth=a.fieldView.element.value}));const c=new fe.LabeledFieldView(n,o);return c.set({label:i("Color"),class:"ck-table-form__border-color"}),c.fieldView.bind("value").to(this,"borderColor"),c.bind("isEnabled").to(this,"borderStyle",wt),c.fieldView.on("input",(()=>{this.borderColor=c.fieldView.value})),this.on("change:borderStyle",((e,o,n,i)=>{wt(n)||(this.borderColor="",this.borderWidth=""),wt(i)||(this.borderColor=t.color,this.borderWidth=t.width)})),{borderRowLabel:l,borderStyleDropdown:s,borderColorInput:c,borderWidthInput:a}}_createBackgroundFields(){const e=this.locale,t=this.t,o=new fe.LabelView(e);o.text=t("Background");const n=lt({colorConfig:this.options.backgroundColors,columns:5,defaultColorValue:this.options.defaultTableCellProperties.backgroundColor}),i=new fe.LabeledFieldView(e,n);return i.set({label:t("Color"),class:"ck-table-cell-properties-form__background"}),i.fieldView.bind("value").to(this,"backgroundColor"),i.fieldView.on("input",(()=>{this.backgroundColor=i.fieldView.value})),{backgroundRowLabel:o,backgroundInput:i}}_createDimensionFields(){const e=this.locale,t=this.t,o=new fe.LabelView(e);o.text=t("Dimensions");const n=new fe.LabeledFieldView(e,fe.createLabeledInputText);n.set({label:t("Width"),class:"ck-table-form__dimensions-row__width"}),n.fieldView.bind("value").to(this,"width"),n.fieldView.on("input",(()=>{this.width=n.fieldView.element.value}));const i=new fe.View(e);i.setTemplate({tag:"span",attributes:{class:["ck-table-form__dimension-operator"]},children:[{text:"×"}]});const l=new fe.LabeledFieldView(e,fe.createLabeledInputText);return l.set({label:t("Height"),class:"ck-table-form__dimensions-row__height"}),l.fieldView.bind("value").to(this,"height"),l.fieldView.on("input",(()=>{this.height=l.fieldView.element.value})),{dimensionsLabel:o,widthInput:n,operatorLabel:i,heightInput:l}}_createPaddingField(){const e=this.locale,t=this.t,o=new fe.LabeledFieldView(e,fe.createLabeledInputText);return o.set({label:t("Padding"),class:"ck-table-cell-properties-form__padding"}),o.fieldView.bind("value").to(this,"padding"),o.fieldView.on("input",(()=>{this.padding=o.fieldView.element.value})),o}_createAlignmentFields(){const e=this.locale,t=this.t,o=new fe.LabelView(e);o.text=t("Table cell text alignment");const n=new fe.ToolbarView(e),i="rtl"===this.locale.contentLanguageDirection;n.set({isCompact:!0,ariaLabel:t("Horizontal text alignment toolbar")}),nt({view:this,icons:pt,toolbar:n,labels:this._horizontalAlignmentLabels,propertyName:"horizontalAlignment",nameToValue:e=>{if(i){if("left"===e)return"right";if("right"===e)return"left"}return e},defaultValue:this.options.defaultTableCellProperties.horizontalAlignment});const l=new fe.ToolbarView(e);return l.set({isCompact:!0,ariaLabel:t("Vertical text alignment toolbar")}),nt({view:this,icons:pt,toolbar:l,labels:this._verticalAlignmentLabels,propertyName:"verticalAlignment",defaultValue:this.options.defaultTableCellProperties.verticalAlignment}),{horizontalAlignmentToolbar:n,verticalAlignmentToolbar:l,alignmentLabel:o}}_createActionButtons(){const t=this.locale,o=this.t,n=new fe.ButtonView(t),i=new fe.ButtonView(t),l=[this.borderWidthInput,this.borderColorInput,this.backgroundInput,this.paddingInput];return n.set({label:o("Save"),icon:e.icons.check,class:"ck-button-save",type:"submit",withText:!0}),n.bind("isEnabled").toMany(l,"errorText",((...e)=>e.every((e=>!e)))),i.set({label:o("Cancel"),icon:e.icons.cancel,class:"ck-button-cancel",withText:!0}),i.delegate("execute").to(this,"cancel"),{saveButtonView:n,cancelButtonView:i}}get _horizontalAlignmentLabels(){const e=this.locale,t=this.t,o=t("Align cell text to the left"),n=t("Align cell text to the center"),i=t("Align cell text to the right"),l=t("Justify cell text");return"rtl"===e.uiLanguageDirection?{right:i,center:n,left:o,justify:l}:{left:o,center:n,right:i,justify:l}}get _verticalAlignmentLabels(){const e=this.t;return{top:e("Align cell text to the top"),middle:e("Align cell text to the middle"),bottom:e("Align cell text to the bottom")}}}function wt(e){return"none"!==e}const kt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};const _t="object"==typeof global&&global&&global.Object===Object&&global;var vt="object"==typeof self&&self&&self.Object===Object&&self;const Ct=_t||vt||Function("return this")();const yt=function(){return Ct.Date.now()};var Tt=/\s/;const At=function(e){for(var t=e.length;t--&&Tt.test(e.charAt(t)););return t};var xt=/^\s+/;const Vt=function(e){return e?e.slice(0,At(e)+1).replace(xt,""):e};const St=Ct.Symbol;var Rt=Object.prototype,It=Rt.hasOwnProperty,Pt=Rt.toString,Et=St?St.toStringTag:void 0;const zt=function(e){var t=It.call(e,Et),o=e[Et];try{e[Et]=void 0;var n=!0}catch(e){}var i=Pt.call(e);return n&&(t?e[Et]=o:delete e[Et]),i};var Bt=Object.prototype.toString;const Wt=function(e){return Bt.call(e)};var Lt=St?St.toStringTag:void 0;const Nt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Lt&&Lt in Object(e)?zt(e):Wt(e)};const Ft=function(e){return null!=e&&"object"==typeof e};const Dt=function(e){return"symbol"==typeof e||Ft(e)&&"[object Symbol]"==Nt(e)};var Ht=/^[-+]0x[0-9a-f]+$/i,Mt=/^0b[01]+$/i,Ot=/^0o[0-7]+$/i,jt=parseInt;const Ut=function(e){if("number"==typeof e)return e;if(Dt(e))return NaN;if(kt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=kt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Vt(e);var o=Mt.test(e);return o||Ot.test(e)?jt(e.slice(2),o?2:8):Ht.test(e)?NaN:+e};var $t=Math.max,Zt=Math.min;const Kt=function(e,t,o){var n,i,l,r,s,a,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var o=n,l=i;return n=i=void 0,c=t,r=e.apply(l,o)}function m(e){return c=e,s=setTimeout(p,t),d?b(e):r}function g(e){var o=e-a;return void 0===a||o>=t||o<0||u&&e-c>=l}function p(){var e=yt();if(g(e))return f(e);s=setTimeout(p,function(e){var o=t-(e-a);return u?Zt(o,l-(e-c)):o}(e))}function f(e){return s=void 0,h&&n?b(e):(n=i=void 0,r)}function w(){var e=yt(),o=g(e);if(n=arguments,i=this,a=e,o){if(void 0===s)return m(a);if(u)return clearTimeout(s),s=setTimeout(p,t),b(a)}return void 0===s&&(s=setTimeout(p,t)),r}return t=Ut(t)||0,kt(o)&&(d=!!o.leading,l=(u="maxWait"in o)?$t(Ut(o.maxWait)||0,t):l,h="trailing"in o?!!o.trailing:h),w.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=a=i=s=void 0},w.flush=function(){return void 0===s?r:f(yt())},w},qt=fe.BalloonPanelView.defaultPositions,Gt=[qt.northArrowSouth,qt.northArrowSouthWest,qt.northArrowSouthEast,qt.southArrowNorth,qt.southArrowNorthWest,qt.southArrowNorthEast,qt.viewportStickyNorth];function Jt(e,t){const o=e.plugins.get("ContextualBalloon");if(Oe(e.editing.view.document.selection)){let n;n="cell"===t?Yt(e):Xt(e),o.updatePosition(n)}}function Xt(e){const t=e.model.document.selection.getFirstPosition().findAncestor("table"),o=e.editing.mapper.toViewElement(t);return{target:e.editing.view.domConverter.mapViewToDom(o),positions:Gt}}function Yt(e){const t=e.editing.mapper,o=e.editing.view.domConverter,n=e.model.document.selection;if(n.rangeCount>1)return{target:()=>function(e,t){const o=t.editing.mapper,n=t.editing.view.domConverter,i=Array.from(e).map((e=>{const t=Qt(e.start),i=o.toViewElement(t);return new b.Rect(n.mapViewToDom(i))}));return b.Rect.getBoundingRect(i)}(n.getRanges(),e),positions:Gt};const i=Qt(n.getFirstPosition()),l=t.toViewElement(i);return{target:o.mapViewToDom(l),positions:Gt}}function Qt(e){return e.nodeAfter&&e.nodeAfter.is("element","tableCell")?e.nodeAfter:e.findAncestor("tableCell")}function eo(e){if(!e||!kt(e))return e;const{top:t,right:o,bottom:n,left:i}=e;return t==o&&o==n&&n==i?t:void 0}function to(e,t){const o=parseFloat(e);return Number.isNaN(o)||String(o)!==String(e)?e:`${o}${t}`}function oo(e,t={}){const o=Object.assign({borderStyle:"none",borderWidth:"",borderColor:"",backgroundColor:"",width:"",height:""},e);return t.includeAlignmentProperty&&!o.alignment&&(o.alignment="center"),t.includePaddingProperty&&!o.padding&&(o.padding=""),t.includeVerticalAlignmentProperty&&!o.verticalAlignment&&(o.verticalAlignment="middle"),t.includeHorizontalAlignmentProperty&&!o.horizontalAlignment&&(o.horizontalAlignment=t.isRightToLeftContent?"right":"left"),o}const no={borderStyle:"tableCellBorderStyle",borderColor:"tableCellBorderColor",borderWidth:"tableCellBorderWidth",height:"tableCellHeight",width:"tableCellWidth",padding:"tableCellPadding",backgroundColor:"tableCellBackgroundColor",horizontalAlignment:"tableCellHorizontalAlignment",verticalAlignment:"tableCellVerticalAlignment"};class io extends e.Plugin{static get requires(){return[fe.ContextualBalloon]}static get pluginName(){return"TableCellPropertiesUI"}constructor(e){super(e),e.config.define("table.tableCellProperties",{borderColors:it,backgroundColors:it})}init(){const e=this.editor,t=e.t;this._defaultTableCellProperties=oo(e.config.get("table.tableCellProperties.defaultProperties"),{includeVerticalAlignmentProperty:!0,includeHorizontalAlignmentProperty:!0,includePaddingProperty:!0,isRightToLeftContent:"rtl"===e.locale.contentLanguageDirection}),this._balloon=e.plugins.get(fe.ContextualBalloon),this.view=this._createPropertiesView(),this._undoStepBatch=null,e.ui.componentFactory.add("tableCellProperties",(o=>{const n=new fe.ButtonView(o);n.set({label:t("Cell properties"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.105 18-.17 1H2.5A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1h15A1.5 1.5 0 0 1 19 2.5v9.975l-.85-.124-.15-.302V8h-5v4h.021l-.172.351-1.916.28-.151.027c-.287.063-.54.182-.755.341L8 13v5h3.105zM2 12h5V8H2v4zm10-4H8v4h4V8zM2 2v5h5V2H2zm0 16h5v-5H2v5zM13 7h5V2h-5v5zM8 2v5h4V2H8z" opacity=".6"/><path d="m15.5 11.5 1.323 2.68 2.957.43-2.14 2.085.505 2.946L15.5 18.25l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L15.5 11.5zM13 6a1 1 0 0 1 1 1v3.172a2.047 2.047 0 0 0-.293.443l-.858 1.736-1.916.28-.151.027A1.976 1.976 0 0 0 9.315 14H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm-1 2H8v4h4V8z"/></svg>',tooltip:!0}),this.listenTo(n,"execute",(()=>this._showView()));const i=Object.values(no).map((t=>e.commands.get(t)));return n.bind("isEnabled").toMany(i,"isEnabled",((...e)=>e.some((e=>e)))),n}))}destroy(){super.destroy(),this.view.destroy()}_createPropertiesView(){const e=this.editor,t=e.editing.view.document,o=e.config.get("table.tableCellProperties"),n=(0,fe.normalizeColorOptions)(o.borderColors),i=(0,fe.getLocalizedColorOptions)(e.locale,n),l=(0,fe.normalizeColorOptions)(o.backgroundColors),r=(0,fe.getLocalizedColorOptions)(e.locale,l),s=new ft(e.locale,{borderColors:i,backgroundColors:r,defaultTableCellProperties:this._defaultTableCellProperties}),a=e.t;s.render(),this.listenTo(s,"submit",(()=>{this._hideView()})),this.listenTo(s,"cancel",(()=>{this._undoStepBatch.operations.length&&e.execute("undo",this._undoStepBatch),this._hideView()})),s.keystrokes.set("Esc",((e,t)=>{this._hideView(),t()})),this.listenTo(e.ui,"update",(()=>{Oe(t.selection)?this._isViewVisible&&Jt(e,"cell"):this._hideView()})),(0,fe.clickOutsideHandler)({emitter:s,activator:()=>this._isViewInBalloon,contextElements:[this._balloon.view.element],callback:()=>this._hideView()});const c=Xe(a),d=Ye(a);return s.on("change:borderStyle",this._getPropertyChangeCallback("tableCellBorderStyle",this._defaultTableCellProperties.borderStyle)),s.on("change:borderColor",this._getValidatedPropertyChangeCallback({viewField:s.borderColorInput,commandName:"tableCellBorderColor",errorText:c,validator:Qe,defaultValue:this._defaultTableCellProperties.borderColor})),s.on("change:borderWidth",this._getValidatedPropertyChangeCallback({viewField:s.borderWidthInput,commandName:"tableCellBorderWidth",errorText:d,validator:tt,defaultValue:this._defaultTableCellProperties.borderWidth})),s.on("change:padding",this._getValidatedPropertyChangeCallback({viewField:s.paddingInput,commandName:"tableCellPadding",errorText:d,validator:et,defaultValue:this._defaultTableCellProperties.padding})),s.on("change:width",this._getValidatedPropertyChangeCallback({viewField:s.widthInput,commandName:"tableCellWidth",errorText:d,validator:et,defaultValue:this._defaultTableCellProperties.width})),s.on("change:height",this._getValidatedPropertyChangeCallback({viewField:s.heightInput,commandName:"tableCellHeight",errorText:d,validator:et,defaultValue:this._defaultTableCellProperties.height})),s.on("change:backgroundColor",this._getValidatedPropertyChangeCallback({viewField:s.backgroundInput,commandName:"tableCellBackgroundColor",errorText:c,validator:Qe,defaultValue:this._defaultTableCellProperties.backgroundColor})),s.on("change:horizontalAlignment",this._getPropertyChangeCallback("tableCellHorizontalAlignment",this._defaultTableCellProperties.horizontalAlignment)),s.on("change:verticalAlignment",this._getPropertyChangeCallback("tableCellVerticalAlignment",this._defaultTableCellProperties.verticalAlignment)),s}_fillViewFormFromCommandValues(){const e=this.editor.commands,t=e.get("tableCellBorderStyle");Object.entries(no).map((([t,o])=>{const n=this._defaultTableCellProperties[t]||"";return[t,e.get(o).value||n]})).forEach((([e,o])=>{("borderColor"!==e&&"borderWidth"!==e||"none"!==t.value)&&this.view.set(e,o)}))}_showView(){const e=this.editor;this._fillViewFormFromCommandValues(),this._balloon.add({view:this.view,position:Yt(e)}),this._undoStepBatch=e.model.createBatch(),this.view.focus()}_hideView(){if(!this._isViewInBalloon)return;const e=this.editor;this.stopListening(e.ui,"update"),this.view.saveButtonView.focus(),this._balloon.remove(this.view),this.editor.editing.view.focus()}get _isViewVisible(){return this._balloon.visibleView===this.view}get _isViewInBalloon(){return this._balloon.hasView(this.view)}_getPropertyChangeCallback(e,t){return(o,n,i,l)=>{(l||t!==i)&&this.editor.execute(e,{value:i,batch:this._undoStepBatch})}}_getValidatedPropertyChangeCallback(e){const{commandName:t,viewField:o,validator:n,errorText:i,defaultValue:l}=e,r=Kt((()=>{o.errorText=i}),500);return(e,i,s,a)=>{r.cancel(),(a||l!==s)&&(n(s)?(this.editor.execute(t,{value:s,batch:this._undoStepBatch}),o.errorText=null):r())}}}class lo extends e.Command{constructor(e,t,o){super(e),this.attributeName=t,this._defaultValue=o}refresh(){const e=this.editor,t=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(e.model.document.selection);this.isEnabled=!!t.length,this.value=this._getSingleValue(t)}execute(e={}){const{value:t,batch:o}=e,n=this.editor.model,i=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(n.document.selection),l=this._getValueToSet(t);n.enqueueChange(o,(e=>{l?i.forEach((t=>e.setAttribute(this.attributeName,l,t))):i.forEach((t=>e.removeAttribute(this.attributeName,t)))}))}_getAttribute(e){if(!e)return;const t=e.getAttribute(this.attributeName);return t!==this._defaultValue?t:void 0}_getValueToSet(e){if(e!==this._defaultValue)return e}_getSingleValue(e){const t=this._getAttribute(e[0]);return e.every((e=>this._getAttribute(e)===t))?t:void 0}}class ro extends lo{constructor(e,t){super(e,"tableCellWidth",t)}_getValueToSet(e){if((e=to(e,"px"))!==this._defaultValue)return e}}class so extends e.Plugin{static get pluginName(){return"TableCellWidthEditing"}static get requires(){return[ge]}init(){const e=this.editor,t=oo(e.config.get("table.tableCellProperties.defaultProperties"));h(e.model.schema,e.conversion,{modelAttribute:"tableCellWidth",styleName:"width",defaultValue:t.width}),e.commands.add("tableCellWidth",new ro(e,t.width))}}class ao extends lo{constructor(e,t){super(e,"tableCellPadding",t)}_getAttribute(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}_getValueToSet(e){if((e=to(e,"px"))!==this._defaultValue)return e}}class co extends lo{constructor(e,t){super(e,"tableCellHeight",t)}_getValueToSet(e){return(e=to(e,"px"))===this._defaultValue?null:e}}class uo extends lo{constructor(e,t){super(e,"tableCellBackgroundColor",t)}}class ho extends lo{constructor(e,t){super(e,"tableCellVerticalAlignment",t)}}class bo extends lo{constructor(e,t){super(e,"tableCellHorizontalAlignment",t)}}class mo extends lo{constructor(e,t){super(e,"tableCellBorderStyle",t)}_getAttribute(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}}class go extends lo{constructor(e,t){super(e,"tableCellBorderColor",t)}_getAttribute(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}}class po extends lo{constructor(e,t){super(e,"tableCellBorderWidth",t)}_getAttribute(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}_getValueToSet(e){if((e=to(e,"px"))!==this._defaultValue)return e}}const fo=/^(top|middle|bottom)$/,wo=/^(left|center|right|justify)$/;class ko extends e.Plugin{static get pluginName(){return"TableCellPropertiesEditing"}static get requires(){return[ge,so]}init(){const e=this.editor,t=e.model.schema,o=e.conversion;e.config.define("table.tableCellProperties.defaultProperties",{});const n=oo(e.config.get("table.tableCellProperties.defaultProperties"),{includeVerticalAlignmentProperty:!0,includeHorizontalAlignmentProperty:!0,includePaddingProperty:!0,isRightToLeftContent:"rtl"===e.locale.contentLanguageDirection});e.data.addStyleProcessorRules(Ee.addBorderRules),function(e,t,o){const n={width:"tableCellBorderWidth",color:"tableCellBorderColor",style:"tableCellBorderStyle"};e.extend("tableCell",{allowAttributes:Object.values(n)}),l(t,"td",n,o),l(t,"th",n,o),r(t,{modelElement:"tableCell",modelAttribute:n.style,styleName:"border-style"}),r(t,{modelElement:"tableCell",modelAttribute:n.color,styleName:"border-color"}),r(t,{modelElement:"tableCell",modelAttribute:n.width,styleName:"border-width"})}(t,o,{color:n.borderColor,style:n.borderStyle,width:n.borderWidth}),e.commands.add("tableCellBorderStyle",new mo(e,n.borderStyle)),e.commands.add("tableCellBorderColor",new go(e,n.borderColor)),e.commands.add("tableCellBorderWidth",new po(e,n.borderWidth)),h(t,o,{modelAttribute:"tableCellHeight",styleName:"height",defaultValue:n.height}),e.commands.add("tableCellHeight",new co(e,n.height)),e.data.addStyleProcessorRules(Ee.addPaddingRules),h(t,o,{modelAttribute:"tableCellPadding",styleName:"padding",reduceBoxSides:!0,defaultValue:n.padding}),e.commands.add("tableCellPadding",new ao(e,n.padding)),e.data.addStyleProcessorRules(Ee.addBackgroundRules),h(t,o,{modelAttribute:"tableCellBackgroundColor",styleName:"background-color",defaultValue:n.backgroundColor}),e.commands.add("tableCellBackgroundColor",new uo(e,n.backgroundColor)),function(e,t,o){e.extend("tableCell",{allowAttributes:["tableCellHorizontalAlignment"]}),t.for("downcast").attributeToAttribute({model:{name:"tableCell",key:"tableCellHorizontalAlignment"},view:e=>({key:"style",value:{"text-align":e}})}),t.for("upcast").attributeToAttribute({view:{name:/^(td|th)$/,styles:{"text-align":wo}},model:{key:"tableCellHorizontalAlignment",value:e=>{const t=e.getStyle("text-align");return t===o?null:t}}}).attributeToAttribute({view:{name:/^(td|th)$/,attributes:{align:wo}},model:{key:"tableCellHorizontalAlignment",value:e=>{const t=e.getAttribute("align");return t===o?null:t}}})}(t,o,n.horizontalAlignment),e.commands.add("tableCellHorizontalAlignment",new bo(e,n.horizontalAlignment)),function(e,t,o){e.extend("tableCell",{allowAttributes:["tableCellVerticalAlignment"]}),t.for("downcast").attributeToAttribute({model:{name:"tableCell",key:"tableCellVerticalAlignment"},view:e=>({key:"style",value:{"vertical-align":e}})}),t.for("upcast").attributeToAttribute({view:{name:/^(td|th)$/,styles:{"vertical-align":fo}},model:{key:"tableCellVerticalAlignment",value:e=>{const t=e.getStyle("vertical-align");return t===o?null:t}}}).attributeToAttribute({view:{name:/^(td|th)$/,attributes:{valign:fo}},model:{key:"tableCellVerticalAlignment",value:e=>{const t=e.getAttribute("valign");return t===o?null:t}}})}(t,o,n.verticalAlignment),e.commands.add("tableCellVerticalAlignment",new ho(e,n.verticalAlignment))}}class _o extends e.Plugin{static get pluginName(){return"TableCellProperties"}static get requires(){return[ko,io]}}class vo extends e.Command{constructor(e,t,o){super(e),this.attributeName=t,this._defaultValue=o}refresh(){const e=this.editor.model.document.selection.getFirstPosition().findAncestor("table");this.isEnabled=!!e,this.value=this._getValue(e)}execute(e={}){const t=this.editor.model,o=t.document.selection,{value:n,batch:i}=e,l=o.getFirstPosition().findAncestor("table"),r=this._getValueToSet(n);t.enqueueChange(i,(e=>{r?e.setAttribute(this.attributeName,r,l):e.removeAttribute(this.attributeName,l)}))}_getValue(e){if(!e)return;const t=e.getAttribute(this.attributeName);return t!==this._defaultValue?t:void 0}_getValueToSet(e){if(e!==this._defaultValue)return e}}class Co extends vo{constructor(e,t){super(e,"tableBackgroundColor",t)}}class yo extends vo{constructor(e,t){super(e,"tableBorderColor",t)}_getValue(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}}class To extends vo{constructor(e,t){super(e,"tableBorderStyle",t)}_getValue(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}}class Ao extends vo{constructor(e,t){super(e,"tableBorderWidth",t)}_getValue(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}_getValueToSet(e){if((e=to(e,"px"))!==this._defaultValue)return e}}class xo extends vo{constructor(e,t){super(e,"tableWidth",t)}_getValueToSet(e){if((e=to(e,"px"))!==this._defaultValue)return e}}class Vo extends vo{constructor(e,t){super(e,"tableHeight",t)}_getValueToSet(e){return(e=to(e,"px"))===this._defaultValue?null:e}}class So extends vo{constructor(e,t){super(e,"tableAlignment",t)}}const Ro=/^(left|center|right)$/,Io=/^(left|none|right)$/;class Po extends e.Plugin{static get pluginName(){return"TablePropertiesEditing"}static get requires(){return[ge]}init(){const e=this.editor,t=e.model.schema,o=e.conversion;e.config.define("table.tableProperties.defaultProperties",{});const n=oo(e.config.get("table.tableProperties.defaultProperties"),{includeAlignmentProperty:!0});e.data.addStyleProcessorRules(Ee.addBorderRules),function(e,t,o){const n={width:"tableBorderWidth",color:"tableBorderColor",style:"tableBorderStyle"};e.extend("table",{allowAttributes:Object.values(n)}),l(t,"table",n,o),s(t,{modelAttribute:n.color,styleName:"border-color"}),s(t,{modelAttribute:n.style,styleName:"border-style"}),s(t,{modelAttribute:n.width,styleName:"border-width"})}(t,o,{color:n.borderColor,style:n.borderStyle,width:n.borderWidth}),e.commands.add("tableBorderColor",new yo(e,n.borderColor)),e.commands.add("tableBorderStyle",new To(e,n.borderStyle)),e.commands.add("tableBorderWidth",new Ao(e,n.borderWidth)),function(e,t,o){e.extend("table",{allowAttributes:["tableAlignment"]}),t.for("downcast").attributeToAttribute({model:{name:"table",key:"tableAlignment"},view:e=>({key:"style",value:{float:"center"===e?"none":e}}),converterPriority:"high"}),t.for("upcast").attributeToAttribute({view:{name:/^(table|figure)$/,styles:{float:Io}},model:{key:"tableAlignment",value:e=>{let t=e.getStyle("float");return"none"===t&&(t="center"),t===o?null:t}}}).attributeToAttribute({view:{attributes:{align:Ro}},model:{name:"table",key:"tableAlignment",value:e=>{const t=e.getAttribute("align");return t===o?null:t}}})}(t,o,n.alignment),e.commands.add("tableAlignment",new So(e,n.alignment)),Eo(t,o,{modelAttribute:"tableWidth",styleName:"width",defaultValue:n.width}),e.commands.add("tableWidth",new xo(e,n.width)),Eo(t,o,{modelAttribute:"tableHeight",styleName:"height",defaultValue:n.height}),e.commands.add("tableHeight",new Vo(e,n.height)),e.data.addStyleProcessorRules(Ee.addBackgroundRules),function(e,t,o){const{modelAttribute:n}=o;e.extend("table",{allowAttributes:[n]}),i(t,{viewElement:"table",...o}),s(t,o)}(t,o,{modelAttribute:"tableBackgroundColor",styleName:"background-color",defaultValue:n.backgroundColor}),e.commands.add("tableBackgroundColor",new Co(e,n.backgroundColor))}}function Eo(e,t,o){const{modelAttribute:n}=o;e.extend("table",{allowAttributes:[n]}),i(t,{viewElement:/^(table|figure)$/,shouldUpcast:e=>!("table"==e.name&&"figure"==e.parent.name),...o}),r(t,{modelElement:"table",...o})}var zo=o(99),Bo={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(zo.Z,Bo);zo.Z.locals;const Wo={left:e.icons.objectLeft,center:e.icons.objectCenter,right:e.icons.objectRight};class Lo extends fe.View{constructor(e,t){super(e),this.set({borderStyle:"",borderWidth:"",borderColor:"",backgroundColor:"",width:"",height:"",alignment:""}),this.options=t;const{borderStyleDropdown:o,borderWidthInput:n,borderColorInput:i,borderRowLabel:l}=this._createBorderFields(),{backgroundRowLabel:r,backgroundInput:s}=this._createBackgroundFields(),{widthInput:a,operatorLabel:c,heightInput:d,dimensionsLabel:u}=this._createDimensionFields(),{alignmentToolbar:h,alignmentLabel:m}=this._createAlignmentFields();this.focusTracker=new b.FocusTracker,this.keystrokes=new b.KeystrokeHandler,this.children=this.createCollection(),this.borderStyleDropdown=o,this.borderWidthInput=n,this.borderColorInput=i,this.backgroundInput=s,this.widthInput=a,this.heightInput=d,this.alignmentToolbar=h;const{saveButtonView:g,cancelButtonView:p}=this._createActionButtons();this.saveButtonView=g,this.cancelButtonView=p,this._focusables=new fe.ViewCollection,this._focusCycler=new fe.FocusCycler({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.children.add(new fe.FormHeaderView(e,{label:this.t("Table properties")})),this.children.add(new ct(e,{labelView:l,children:[l,o,i,n],class:"ck-table-form__border-row"})),this.children.add(new ct(e,{labelView:r,children:[r,s],class:"ck-table-form__background-row"})),this.children.add(new ct(e,{children:[new ct(e,{labelView:u,children:[u,a,c,d],class:"ck-table-form__dimensions-row"}),new ct(e,{labelView:m,children:[m,h],class:"ck-table-properties-form__alignment-row"})]})),this.children.add(new ct(e,{children:[this.saveButtonView,this.cancelButtonView],class:"ck-table-form__action-row"})),this.setTemplate({tag:"form",attributes:{class:["ck","ck-form","ck-table-form","ck-table-properties-form"],tabindex:"-1"},children:this.children})}render(){super.render(),(0,fe.submitHandler)({view:this}),[this.borderStyleDropdown,this.borderColorInput,this.borderColorInput.fieldView.dropdownView.buttonView,this.borderWidthInput,this.backgroundInput,this.backgroundInput.fieldView.dropdownView.buttonView,this.widthInput,this.heightInput,this.alignmentToolbar,this.saveButtonView,this.cancelButtonView].forEach((e=>{this._focusables.add(e),this.focusTracker.add(e.element)})),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createBorderFields(){const e=this.options.defaultTableProperties,t={style:e.borderStyle,width:e.borderWidth,color:e.borderColor},o=lt({colorConfig:this.options.borderColors,columns:5,defaultColorValue:t.color}),n=this.locale,i=this.t,l=new fe.LabelView(n);l.text=i("Border");const r=Je(this.t),s=new fe.LabeledFieldView(n,fe.createLabeledDropdown);s.set({label:i("Style"),class:"ck-table-form__border-style"}),s.fieldView.buttonView.set({isOn:!1,withText:!0,tooltip:i("Style")}),s.fieldView.buttonView.bind("label").to(this,"borderStyle",(e=>r[e||"none"])),s.fieldView.on("execute",(e=>{this.borderStyle=e.source._borderStyleValue})),s.bind("isEmpty").to(this,"borderStyle",(e=>!e)),(0,fe.addListToDropdown)(s.fieldView,ot(this,t.style));const a=new fe.LabeledFieldView(n,fe.createLabeledInputText);a.set({label:i("Width"),class:"ck-table-form__border-width"}),a.fieldView.bind("value").to(this,"borderWidth"),a.bind("isEnabled").to(this,"borderStyle",No),a.fieldView.on("input",(()=>{this.borderWidth=a.fieldView.element.value}));const c=new fe.LabeledFieldView(n,o);return c.set({label:i("Color"),class:"ck-table-form__border-color"}),c.fieldView.bind("value").to(this,"borderColor"),c.bind("isEnabled").to(this,"borderStyle",No),c.fieldView.on("input",(()=>{this.borderColor=c.fieldView.value})),this.on("change:borderStyle",((e,o,n,i)=>{No(n)||(this.borderColor="",this.borderWidth=""),No(i)||(this.borderColor=t.color,this.borderWidth=t.width)})),{borderRowLabel:l,borderStyleDropdown:s,borderColorInput:c,borderWidthInput:a}}_createBackgroundFields(){const e=this.locale,t=this.t,o=new fe.LabelView(e);o.text=t("Background");const n=lt({colorConfig:this.options.backgroundColors,columns:5,defaultColorValue:this.options.defaultTableProperties.backgroundColor}),i=new fe.LabeledFieldView(e,n);return i.set({label:t("Color"),class:"ck-table-properties-form__background"}),i.fieldView.bind("value").to(this,"backgroundColor"),i.fieldView.on("input",(()=>{this.backgroundColor=i.fieldView.value})),{backgroundRowLabel:o,backgroundInput:i}}_createDimensionFields(){const e=this.locale,t=this.t,o=new fe.LabelView(e);o.text=t("Dimensions");const n=new fe.LabeledFieldView(e,fe.createLabeledInputText);n.set({label:t("Width"),class:"ck-table-form__dimensions-row__width"}),n.fieldView.bind("value").to(this,"width"),n.fieldView.on("input",(()=>{this.width=n.fieldView.element.value}));const i=new fe.View(e);i.setTemplate({tag:"span",attributes:{class:["ck-table-form__dimension-operator"]},children:[{text:"×"}]});const l=new fe.LabeledFieldView(e,fe.createLabeledInputText);return l.set({label:t("Height"),class:"ck-table-form__dimensions-row__height"}),l.fieldView.bind("value").to(this,"height"),l.fieldView.on("input",(()=>{this.height=l.fieldView.element.value})),{dimensionsLabel:o,widthInput:n,operatorLabel:i,heightInput:l}}_createAlignmentFields(){const e=this.locale,t=this.t,o=new fe.LabelView(e);o.text=t("Alignment");const n=new fe.ToolbarView(e);return n.set({isCompact:!0,ariaLabel:t("Table alignment toolbar")}),nt({view:this,icons:Wo,toolbar:n,labels:this._alignmentLabels,propertyName:"alignment",defaultValue:this.options.defaultTableProperties.alignment}),{alignmentLabel:o,alignmentToolbar:n}}_createActionButtons(){const t=this.locale,o=this.t,n=new fe.ButtonView(t),i=new fe.ButtonView(t),l=[this.borderWidthInput,this.borderColorInput,this.backgroundInput,this.widthInput,this.heightInput];return n.set({label:o("Save"),icon:e.icons.check,class:"ck-button-save",type:"submit",withText:!0}),n.bind("isEnabled").toMany(l,"errorText",((...e)=>e.every((e=>!e)))),i.set({label:o("Cancel"),icon:e.icons.cancel,class:"ck-button-cancel",withText:!0}),i.delegate("execute").to(this,"cancel"),{saveButtonView:n,cancelButtonView:i}}get _alignmentLabels(){const e=this.locale,t=this.t,o=t("Align table to the left"),n=t("Center table"),i=t("Align table to the right");return"rtl"===e.uiLanguageDirection?{right:i,center:n,left:o}:{left:o,center:n,right:i}}}function No(e){return"none"!==e}const Fo={borderStyle:"tableBorderStyle",borderColor:"tableBorderColor",borderWidth:"tableBorderWidth",backgroundColor:"tableBackgroundColor",width:"tableWidth",height:"tableHeight",alignment:"tableAlignment"};class Do extends e.Plugin{static get requires(){return[fe.ContextualBalloon]}static get pluginName(){return"TablePropertiesUI"}constructor(e){super(e),e.config.define("table.tableProperties",{borderColors:it,backgroundColors:it})}init(){const e=this.editor,t=e.t;this._defaultTableProperties=oo(e.config.get("table.tableProperties.defaultProperties"),{includeAlignmentProperty:!0}),this._balloon=e.plugins.get(fe.ContextualBalloon),this.view=this._createPropertiesView(),this._undoStepBatch=null,e.ui.componentFactory.add("tableProperties",(o=>{const n=new fe.ButtonView(o);n.set({label:t("Table properties"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v5h4V2h1v5h5v1h-5v4h.021l-.172.351-1.916.28-.151.027c-.287.063-.54.182-.755.341L8 13v5H7v-5H2v-1h5V8H2V7h5V2h1zm4 6H8v4h4V8z" opacity=".6"/><path d="m15.5 11.5 1.323 2.68 2.957.43-2.14 2.085.505 2.946L15.5 18.25l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L15.5 11.5zM17 1a2 2 0 0 1 2 2v9.475l-.85-.124-.857-1.736a2.048 2.048 0 0 0-.292-.44L17 3H3v14h7.808l.402.392L10.935 19H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14z"/></svg>',tooltip:!0}),this.listenTo(n,"execute",(()=>this._showView()));const i=Object.values(Fo).map((t=>e.commands.get(t)));return n.bind("isEnabled").toMany(i,"isEnabled",((...e)=>e.some((e=>e)))),n}))}destroy(){super.destroy(),this.view.destroy()}_createPropertiesView(){const e=this.editor,t=e.config.get("table.tableProperties"),o=(0,fe.normalizeColorOptions)(t.borderColors),n=(0,fe.getLocalizedColorOptions)(e.locale,o),i=(0,fe.normalizeColorOptions)(t.backgroundColors),l=(0,fe.getLocalizedColorOptions)(e.locale,i),r=new Lo(e.locale,{borderColors:n,backgroundColors:l,defaultTableProperties:this._defaultTableProperties}),s=e.t;r.render(),this.listenTo(r,"submit",(()=>{this._hideView()})),this.listenTo(r,"cancel",(()=>{this._undoStepBatch.operations.length&&e.execute("undo",this._undoStepBatch),this._hideView()})),r.keystrokes.set("Esc",((e,t)=>{this._hideView(),t()})),(0,fe.clickOutsideHandler)({emitter:r,activator:()=>this._isViewInBalloon,contextElements:[this._balloon.view.element],callback:()=>this._hideView()});const a=Xe(s),c=Ye(s);return r.on("change:borderStyle",this._getPropertyChangeCallback("tableBorderStyle",this._defaultTableProperties.borderStyle)),r.on("change:borderColor",this._getValidatedPropertyChangeCallback({viewField:r.borderColorInput,commandName:"tableBorderColor",errorText:a,validator:Qe,defaultValue:this._defaultTableProperties.borderColor})),r.on("change:borderWidth",this._getValidatedPropertyChangeCallback({viewField:r.borderWidthInput,commandName:"tableBorderWidth",errorText:c,validator:tt,defaultValue:this._defaultTableProperties.borderWidth})),r.on("change:backgroundColor",this._getValidatedPropertyChangeCallback({viewField:r.backgroundInput,commandName:"tableBackgroundColor",errorText:a,validator:Qe,defaultValue:this._defaultTableProperties.backgroundColor})),r.on("change:width",this._getValidatedPropertyChangeCallback({viewField:r.widthInput,commandName:"tableWidth",errorText:c,validator:et,defaultValue:this._defaultTableProperties.width})),r.on("change:height",this._getValidatedPropertyChangeCallback({viewField:r.heightInput,commandName:"tableHeight",errorText:c,validator:et,defaultValue:this._defaultTableProperties.height})),r.on("change:alignment",this._getPropertyChangeCallback("tableAlignment",this._defaultTableProperties.alignment)),r}_fillViewFormFromCommandValues(){const e=this.editor.commands,t=e.get("tableBorderStyle");Object.entries(Fo).map((([t,o])=>{const n=this._defaultTableProperties[t]||"";return[t,e.get(o).value||n]})).forEach((([e,o])=>{("borderColor"!==e&&"borderWidth"!==e||"none"!==t.value)&&this.view.set(e,o)}))}_showView(){const e=this.editor;this.listenTo(e.ui,"update",(()=>{this._updateView()})),this._fillViewFormFromCommandValues(),this._balloon.add({view:this.view,position:Xt(e)}),this._undoStepBatch=e.model.createBatch(),this.view.focus()}_hideView(){const e=this.editor;this.stopListening(e.ui,"update"),this.view.saveButtonView.focus(),this._balloon.remove(this.view),this.editor.editing.view.focus()}_updateView(){const e=this.editor;Oe(e.editing.view.document.selection)?this._isViewVisible&&Jt(e,"table"):this._hideView()}get _isViewVisible(){return this._balloon.visibleView===this.view}get _isViewInBalloon(){return this._balloon.hasView(this.view)}_getPropertyChangeCallback(e,t){return(o,n,i,l)=>{(l||t!==i)&&this.editor.execute(e,{value:i,batch:this._undoStepBatch})}}_getValidatedPropertyChangeCallback(e){const{commandName:t,viewField:o,validator:n,errorText:i,defaultValue:l}=e,r=Kt((()=>{o.errorText=i}),500);return(e,i,s,a)=>{r.cancel(),(a||l!==s)&&(n(s)?(this.editor.execute(t,{value:s,batch:this._undoStepBatch}),o.errorText=null):r())}}}class Ho extends e.Plugin{static get pluginName(){return"TableProperties"}static get requires(){return[Po,Do]}}function Mo(e){e.document.registerPostFixer((t=>function(e,t){const o=t.document.differ.getChanges();let n=!1;for(const t of o){if("insert"!=t.type)continue;if(t.position.parent.is("element","table")||"table"==t.name){const o="table"==t.name?t.position.nodeAfter:t.position.parent,i=Array.from(o.getChildren()).filter((e=>e.is("element","caption"))),l=i.shift();if(!l)continue;for(const t of i)e.move(e.createRangeIn(t),l,"end"),e.remove(t);l.nextSibling&&(e.move(e.createRangeOn(l),o,"end"),n=!0),n=!!i.length||n}}return n}(t,e)))}function Oo(e){return!!e&&e.is("element","table")}function jo(e){for(const t of e.getChildren())if(t.is("element","caption"))return t;return null}function Uo(e){const t=e.parent;return"figcaption"==e.name&&t&&"figure"==t.name&&t.hasClass("table")||"caption"==e.name&&t&&"table"==t.name?{name:!0}:null}function $o(e){const t=e.getSelectedElement();return t&&t.is("element","table")?t:e.getFirstPosition().findAncestor("table")}class Zo extends e.Command{refresh(){const e=$o(this.editor.model.document.selection);this.isEnabled=!!e,this.isEnabled?this.value=!!jo(e):this.value=!1}execute(e={}){const{focusCaptionOnShow:t}=e;this.editor.model.change((e=>{this.value?this._hideTableCaption(e):this._showTableCaption(e,t)}))}_showTableCaption(e,t){const o=this.editor.model,n=$o(o.document.selection),i=this.editor.plugins.get("TableCaptionEditing")._getSavedCaption(n)||e.createElement("caption");o.insertContent(i,n,"end"),t&&e.setSelection(i,"in")}_hideTableCaption(e){const t=this.editor.model,o=$o(t.document.selection),n=this.editor.plugins.get("TableCaptionEditing"),i=jo(o);n._saveCaption(o,i),t.deleteContent(e.createSelection(i,"on"))}}class Ko extends e.Plugin{static get pluginName(){return"TableCaptionEditing"}constructor(e){super(e),this._savedCaptionsMap=new WeakMap}init(){const e=this.editor,o=e.model.schema,n=e.editing.view,i=e.t;o.isRegistered("caption")?o.extend("caption",{allowIn:"table"}):o.register("caption",{allowIn:"table",allowContentOf:"$block",isLimit:!0}),e.commands.add("toggleTableCaption",new Zo(this.editor)),e.conversion.for("upcast").elementToElement({view:Uo,model:"caption"}),e.conversion.for("dataDowncast").elementToElement({model:"caption",view:(e,{writer:t})=>Oo(e.parent)?t.createContainerElement("figcaption"):null}),e.conversion.for("editingDowncast").elementToElement({model:"caption",view:(e,{writer:o})=>{if(!Oo(e.parent))return null;const l=o.createEditableElement("figcaption");return o.setCustomProperty("tableCaption",!0,l),(0,Ee.enablePlaceholder)({view:n,element:l,text:i("Enter table caption"),keepOnFocus:!0}),(0,t.toWidgetEditable)(l,o)}}),Mo(e.model)}_getSavedCaption(e){const t=this._savedCaptionsMap.get(e);return t?Ee.Element.fromJSON(t):null}_saveCaption(e,t){this._savedCaptionsMap.set(e,t.toJSON())}}class qo extends e.Plugin{static get pluginName(){return"TableCaptionUI"}init(){const t=this.editor,o=t.editing.view,n=t.t;t.ui.componentFactory.add("toggleTableCaption",(i=>{const l=t.commands.get("toggleTableCaption"),r=new fe.ButtonView(i);return r.set({icon:e.icons.caption,tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(l,"value","isEnabled"),r.bind("label").to(l,"value",(e=>n(e?"Toggle caption off":"Toggle caption on"))),this.listenTo(r,"execute",(()=>{if(t.execute("toggleTableCaption",{focusCaptionOnShow:!0}),l.value){const e=function(e){const t=$o(e);return t?jo(t):null}(t.model.document.selection),n=t.editing.mapper.toViewElement(e);if(!n)return;o.scrollToTheSelection(),o.change((e=>{e.addClass("table__caption_highlighted",n)}))}t.editing.view.focus()})),r}))}}var Go=o(665),Jo={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(Go.Z,Jo);Go.Z.locals;class Xo extends e.Plugin{static get pluginName(){return"TableCaption"}static get requires(){return[Ko,qo]}}const Yo=function(e,t,o){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return kt(o)&&(n="leading"in o?!!o.leading:n,i="trailing"in o?!!o.trailing:i),Kt(e,t,{leading:n,maxWait:t,trailing:i})};class Qo extends vo{constructor(e,t){super(e,"tableWidth",t)}refresh(){this.isEnabled=!0}execute(e={}){const t=this.editor.model,o=e.table||t.document.selection.getSelectedElement(),{tableWidth:n,columnWidths:i}=e;t.change((e=>{n?e.setAttribute(this.attributeName,n,o):e.removeAttribute(this.attributeName,o),i?e.setAttribute("columnWidths",i,o):e.removeAttribute("columnWidths",o)}))}}class en extends vo{constructor(e,t){super(e,"columnWidths",t)}refresh(){this.isEnabled=!0}execute(e={}){const t=this.editor.model,o=e.table||t.document.selection.getSelectedElement(),{columnWidths:n}=e;t.change((e=>{n?e.setAttribute(this.attributeName,n,o):e.removeAttribute(this.attributeName,o)}))}}function tn(e,t){return 4e3/on(e,t)}function on(e,t){const o=nn(e,"tbody",t)||nn(e,"thead",t);return ln(t.editing.view.domConverter.mapViewToDom(o))}function nn(e,t,o){return[...[...o.editing.mapper.toViewElement(e).getChildren()].find((e=>e.is("element","table"))).getChildren()].find((e=>e.is("element",t)))}function ln(e){const t=b.global.window.getComputedStyle(e);return"border-box"===t.boxSizing?parseFloat(t.width)-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth):parseFloat(t.width)}function rn(e){const t=Math.pow(10,2),o=parseFloat(e);return Math.round(o*t)/t}function sn(e){return e.map((e=>parseFloat(e))).filter((e=>!Number.isNaN(e))).reduce(((e,t)=>e+t),0)}function an(e){e=function(e){const t=e.filter((e=>"auto"===e)).length;if(0===t)return e.map((e=>rn(e)));const o=sn(e),n=Math.max((100-o)/t,5);return e.map((e=>"auto"===e?n:e)).map((e=>rn(e)))}(e);const t=sn(e);return 100===t?e:e.map((e=>rn(100*e/t))).map(((e,t,o)=>{if(!(t===o.length-1))return e;return rn(e+100-sn(o))}))}function cn(e,t){let o=[...t.getChildren()].find((e=>e.hasClass("ck-table-column-resizer")));o||(o=e.createUIElement("div",{class:"ck-table-column-resizer"}),e.insert(e.createPositionAt(t,"end"),o))}function dn(e){const t=b.global.window.getComputedStyle(e);return"border-box"===t.boxSizing?parseInt(t.width):parseFloat(t.width)+parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderWidth)}function un(){return e=>e.on("attribute:columnWidths:table",((e,t,o)=>{const n=o.writer,i=t.item,l=[...o.mapper.toViewElement(i).getChildren()].find((e=>e.is("element","table")));t.attributeNewValue?(!function(e,t,o){const n=o.split(",");let i=[...t.getChildren()].find((e=>e.is("element","colgroup")));if(i)for(const t of[...i.getChildren()])e.remove(t);else i=e.createContainerElement("colgroup");for(const t of Array(n.length).keys()){const o=e.createEmptyElement("col");e.setStyle("width",n[t],o),e.insert(e.createPositionAt(i,"end"),o)}e.insert(e.createPositionAt(t,"start"),i)}(n,l,t.attributeNewValue),n.addClass("ck-table-resized",l)):(!function(e,t){const o=[...t.getChildren()].find((e=>e.is("element","colgroup")));e.remove(o)}(n,l),n.removeClass("ck-table-resized",l))}))}class hn extends e.Plugin{static get requires(){return[ge,U]}static get pluginName(){return"TableColumnResizeEditing"}constructor(e){super(e),this._isResizingActive=!1,this.set("_isResizingAllowed",!0),this._resizingData=null,this._domEmitter=Object.create(b.DomEmitterMixin),this._tableUtilsPlugin=e.plugins.get("TableUtils"),this.on("change:_isResizingAllowed",((t,o,n)=>{e.editing.view.change((t=>{t[n?"removeClass":"addClass"]("ck-column-resize_disabled",e.editing.view.document.getRoot())}))}))}init(){this._extendSchema(),this._registerPostFixer(),this._registerConverters(),this._registerResizingListeners(),this._registerColgroupFixer(),this._registerResizerInserter();const e=this.editor,t=e.plugins.get("TableColumnResize");e.commands.add("resizeTableWidth",new Qo(e)),e.commands.add("resizeColumnWidths",new en(e));const o=e.commands.get("resizeTableWidth"),n=e.commands.get("resizeColumnWidths");this.bind("_isResizingAllowed").to(e,"isReadOnly",t,"isEnabled",o,"isEnabled",n,"isEnabled",((e,t,o,n)=>!e&&t&&o&&n))}destroy(){this._domEmitter.stopListening(),super.destroy()}_extendSchema(){this.editor.model.schema.extend("table",{allowAttributes:["tableWidth","columnWidths"]})}_registerPostFixer(){const e=this.editor.model;function t(e,t,o){const n=o._tableUtilsPlugin.getColumns(t);if(0===n-e.length)return;const i=function(e,t){const o=new Set;for(const n of e.getChanges())if("insert"==n.type&&n.position.nodeAfter&&"tableCell"==n.position.nodeAfter.name&&n.position.nodeAfter.getAncestors().includes(t))o.add(n.position.nodeAfter);else if("remove"==n.type){const e=n.position.nodeBefore||n.position.nodeAfter;"tableCell"==e.name&&e.getAncestors().includes(t)&&o.add(e)}return o}(o.editor.model.document.differ,t);for(const r of i){const i=n-e.length;if(0===i)continue;const s=i>0,a=o._tableUtilsPlugin.getCellLocation(r).column;if(s){const n=tn(t,o.editor),r=(l=n,Array(i).fill(l));e.splice(a,0,...r)}else{const t=e.splice(a,Math.abs(i));e[a]+=sn(t)}}var l}e.document.registerPostFixer((o=>{let n=!1;for(const i of function(e){const t=new Set;for(const o of e.document.differ.getChanges()){let n=null;switch(o.type){case"insert":n=["table","tableRow","tableCell"].includes(o.name)?o.position:null;break;case"remove":n=["tableRow","tableCell"].includes(o.name)?o.position:null;break;case"attribute":o.range.start.nodeAfter&&(n=["table","tableRow","tableCell"].includes(o.range.start.nodeAfter.name)?o.range.start:null)}if(!n)continue;const i=n.nodeAfter&&"table"===n.nodeAfter.name?n.nodeAfter:n.findAncestor("table");for(const o of e.createRangeOn(i).getItems())o.is("element")&&"table"===o.name&&o.hasAttribute("columnWidths")&&t.add(o)}return t}(e)){const e=an(i.getAttribute("columnWidths").split(","));t(e,i,this);const l=e.map((e=>`${e}%`)).join(",");i.getAttribute("columnWidths")!==l&&(o.setAttribute("columnWidths",l,i),n=!0)}return n}))}_registerConverters(){const e=this.editor.conversion;var t;e.for("upcast").attributeToAttribute({view:{name:"figure",key:"style",value:{width:/[\s\S]+/}},model:{name:"table",key:"tableWidth",value:e=>e.getStyle("width")}}),e.for("upcast").add((t=this._tableUtilsPlugin,e=>e.on("element:colgroup",((e,o,n)=>{const i=o.viewItem;if(!n.consumable.test(i,{name:!0}))return;n.consumable.consume(i,{name:!0});const l=o.modelCursor.findAncestor("table"),r=t.getColumns(l);let s=[...Array(r).keys()].map((e=>{const t=i.getChild(e);if(!t||!t.is("element","col"))return"auto";const o=t.getStyle("width");return o&&o.endsWith("%")?o:"auto"}));s.includes("auto")&&(s=an(s).map((e=>e+"%"))),n.writer.setAttribute("columnWidths",s.join(","),l)})))),e.for("downcast").attributeToAttribute({model:{name:"table",key:"tableWidth"},view:e=>({name:"figure",key:"style",value:{width:e}})}),e.for("downcast").add(un())}_registerResizingListeners(){const e=this.editor.editing.view;e.addObserver(ze),e.document.on("mousedown",this._onMouseDownHandler.bind(this),{priority:"high"}),this._domEmitter.listenTo(b.global.window.document,"mousemove",Yo(this._onMouseMoveHandler.bind(this),50)),this._domEmitter.listenTo(b.global.window.document,"mouseup",this._onMouseUpHandler.bind(this))}_onMouseDownHandler(e,t){const o=t.target;if(!o.hasClass("ck-table-column-resizer"))return;if(!this._isResizingAllowed)return;t.preventDefault(),e.stop();const n=this.editor,i=function(e,t,o){const n=Array(t.getColumns(e)),i=new f(e);for(const e of i){const t=o.editing.mapper.toViewElement(e.cell),i=dn(o.editing.view.domConverter.mapViewToDom(t));(!n[e.column]||i<n[e.column])&&(n[e.column]=rn(i))}return n}(n.editing.mapper.toModelElement(o.findAncestor("figure")),this._tableUtilsPlugin,n),l=o.findAncestor("table"),r=n.editing.view;[...l.getChildren()].find((e=>e.is("element","colgroup")))||r.change((e=>{!function(e,t,o){const n=e.createContainerElement("colgroup");for(let o=0;o<t.length;o++){const i=e.createEmptyElement("col"),l=`${rn(t[o]/sn(t)*100)}%`;e.setStyle("width",l,i),e.insert(e.createPositionAt(n,"end"),i)}e.insert(e.createPositionAt(o,"start"),n)}(e,i,l)})),this._isResizingActive=!0,this._resizingData=this._getResizingData(t,i),r.change((e=>function(e,t,o){const n=o.widths.viewFigureWidth/o.widths.viewFigureParentWidth;e.addClass("ck-table-resized",t),e.addClass("ck-table-column-resizer__active",o.elements.viewResizer),e.setStyle("width",`${rn(100*n)}%`,t.findAncestor("figure"))}(e,l,this._resizingData)))}_onMouseMoveHandler(e,t){if(!this._isResizingActive)return;if(!this._isResizingAllowed)return void this._onMouseUpHandler();const{columnPosition:o,flags:{isRightEdge:n,isTableCentered:i,isLtrContent:l},elements:{viewFigure:r,viewLeftColumn:s,viewRightColumn:a},widths:{viewFigureParentWidth:c,tableWidth:d,leftColumnWidth:u,rightColumnWidth:h}}=this._resizingData,b=40-u,m=n?c-d:h-40,g=(l?1:-1)*(n&&i?2:1),p=(f=(t.clientX-o)*g,w=Math.min(b,0),k=Math.max(m,0),rn(f<=w?w:f>=k?k:f));var f,w,k;0!==p&&this.editor.editing.view.change((e=>{const t=rn(100*(u+p)/d);if(e.setStyle("width",`${t}%`,s),n){const t=rn(100*(d+p)/c);e.setStyle("width",`${t}%`,r)}else{const t=rn(100*(h-p)/d);e.setStyle("width",`${t}%`,a)}}))}_onMouseUpHandler(){if(!this._isResizingActive)return;const{viewResizer:e,modelTable:t,viewFigure:o,viewColgroup:n}=this._resizingData.elements,i=this.editor,l=i.editing.view,r=t.getAttribute("columnWidths"),s=[...n.getChildren()].map((e=>e.getStyle("width"))).join(","),a=r!==s,c=t.getAttribute("tableWidth"),d=o.getStyle("width"),u=c!==d;(a||u)&&(this._isResizingAllowed?u?i.execute("resizeTableWidth",{table:t,tableWidth:`${rn(d)}%`,columnWidths:s}):i.execute("resizeColumnWidths",{columnWidths:s,table:t}):l.change((e=>{if(r){const t=r.split(",");for(const o of n.getChildren())e.setStyle("width",t.shift(),o)}else e.remove(n);u&&(c?e.setStyle("width",c,o):e.removeStyle("width",o)),r||c||e.removeClass("ck-table-resized",[...o.getChildren()].find((e=>"table"===e.name)))}))),l.change((t=>{t.removeClass("ck-table-column-resizer__active",e)})),this._isResizingActive=!1,this._resizingData=null}_getResizingData(e,t){const o=this.editor,n=e.domEvent.clientX,i=e.target,l=i.findAncestor("td")||i.findAncestor("th"),r=o.editing.mapper.toModelElement(l),s=r.findAncestor("table"),a=function(e,t){const o=t.getCellLocation(e).column;return{leftEdge:o,rightEdge:o+(e.getAttribute("colspan")||1)-1}}(r,this._tableUtilsPlugin).rightEdge,c=a===this._tableUtilsPlugin.getColumns(s)-1,d=!s.hasAttribute("tableAlignment"),u="rtl"!==o.locale.contentLanguageDirection,h=l.findAncestor("table"),b=h.findAncestor("figure"),m=[...h.getChildren()].find((e=>e.is("element","colgroup"))),g=m.getChild(a),p=c?void 0:m.getChild(a+1);return{columnPosition:n,flags:{isRightEdge:c,isTableCentered:d,isLtrContent:u},elements:{viewResizer:i,modelTable:s,viewFigure:b,viewColgroup:m,viewLeftColumn:g,viewRightColumn:p},widths:{viewFigureParentWidth:ln(o.editing.view.domConverter.mapViewToDom(b.parent)),viewFigureWidth:ln(o.editing.view.domConverter.mapViewToDom(b)),tableWidth:on(s,o),leftColumnWidth:t[a],rightColumnWidth:c?void 0:t[a+1]}}}_registerColgroupFixer(){const e=this.editor;this.listenTo(e.editing.view.document,"layoutChanged",(()=>{const t=e.editing.view.document.selection.getFirstPosition().getAncestors().reverse().find((e=>"table"===e.name)),o=t&&[...t.getChildren()].find((e=>e.is("element","colgroup"))),n=e.model.document.selection.getFirstPosition().findAncestor("table");n&&n.hasAttribute("columnWidths")&&t&&!o&&e.editing.reconvertItem(n)}),{priority:"low"})}_registerResizerInserter(){const e=this.editor.editing.view;e.on("render",(()=>{for(const t of e.createRangeIn(e.document.getRoot()))["td","th"].includes(t.item.name)&&e.change((e=>{cn(e,t.item)}))}),{priority:"lowest"})}}var bn=o(975),mn={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(bn.Z,mn);bn.Z.locals;class gn extends e.Plugin{static get requires(){return[hn,so]}static get pluginName(){return"TableColumnResize"}}})(),(window.CKEditor5=window.CKEditor5||{}).table=n})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.behaviors.textSummary = {
    attach: function attach(context, settings) {
      once('text-summary', '.js-text-summary', context).forEach(function (summary) {
        var $widget = $(summary).closest('.js-text-format-wrapper');
        var $summary = $widget.find('.js-text-summary-wrapper');
        var $summaryLabel = $summary.find('label').eq(0);
        var $full = $widget.children('.js-form-type-textarea');
        var $fullLabel = $full.find('label').eq(0);
        if ($fullLabel.length === 0) {
          $fullLabel = $('<label></label>').prependTo($full);
        }
        if ($fullLabel.hasClass('visually-hidden')) {
          $fullLabel.html(function (index, oldHtml) {
            return "<span class=\"visually-hidden\">".concat(oldHtml, "</span>");
          });
          $fullLabel.removeClass('visually-hidden');
        }
        var $link = $("<span class=\"field-edit-link\"> (<button type=\"button\" class=\"link link-edit-summary\">".concat(Drupal.t('Hide summary'), "</button>)</span>"));
        var $button = $link.find('button');
        var toggleClick = true;
        $link.on('click', function (e) {
          if (toggleClick) {
            $summary.hide();
            $button.html(Drupal.t('Edit summary'));
            $link.appendTo($fullLabel);
          } else {
            $summary.show();
            $button.html(Drupal.t('Hide summary'));
            $link.appendTo($summaryLabel);
          }
          e.preventDefault();
          toggleClick = !toggleClick;
        }).appendTo($summaryLabel);
        if (summary.value === '') {
          $link.trigger('click');
        }
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.behaviors.dialog = {
    attach: function attach(context, settings) {
      var $context = $(context);
      if (!$('#drupal-modal').length) {
        $('<div id="drupal-modal" class="ui-front"></div>').hide().appendTo('body');
      }
      var $dialog = $context.closest('.ui-dialog-content');
      if ($dialog.length) {
        if ($dialog.dialog('option', 'drupalAutoButtons')) {
          $dialog.trigger('dialogButtonsChange');
        }
        $dialog.dialog('widget').trigger('focus');
      }
      var originalClose = settings.dialog.close;
      settings.dialog.close = function (event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        originalClose.apply(settings.dialog, [event].concat(args));
        $(event.target).remove();
      };
    },
    prepareDialogButtons: function prepareDialogButtons($dialog) {
      var buttons = [];
      var $buttons = $dialog.find('.form-actions input[type=submit], .form-actions a.button');
      $buttons.each(function () {
        var $originalButton = $(this).css({
          display: 'none'
        });
        buttons.push({
          text: $originalButton.html() || $originalButton.attr('value'),
          class: $originalButton.attr('class'),
          click: function click(e) {
            if ($originalButton.is('a')) {
              $originalButton[0].click();
            } else {
              $originalButton.trigger('mousedown').trigger('mouseup').trigger('click');
              e.preventDefault();
            }
          }
        });
      });
      return buttons;
    }
  };
  Drupal.AjaxCommands.prototype.openDialog = function (ajax, response, status) {
    if (!response.selector) {
      return false;
    }
    var $dialog = $(response.selector);
    if (!$dialog.length) {
      $dialog = $("<div id=\"".concat(response.selector.replace(/^#/, ''), "\" class=\"ui-front\"></div>")).appendTo('body');
    }
    if (!ajax.wrapper) {
      ajax.wrapper = $dialog.attr('id');
    }
    response.command = 'insert';
    response.method = 'html';
    ajax.commands.insert(ajax, response, status);
    if (!response.dialogOptions.buttons) {
      response.dialogOptions.drupalAutoButtons = true;
      response.dialogOptions.buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
    }
    $dialog.on('dialogButtonsChange', function () {
      var buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
      $dialog.dialog('option', 'buttons', buttons);
    });
    response.dialogOptions = response.dialogOptions || {};
    var dialog = Drupal.dialog($dialog.get(0), response.dialogOptions);
    if (response.dialogOptions.modal) {
      dialog.showModal();
    } else {
      dialog.show();
    }
    $dialog.parent().find('.ui-dialog-buttonset').addClass('form-actions');
  };
  Drupal.AjaxCommands.prototype.closeDialog = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      Drupal.dialog($dialog.get(0)).close();
      if (!response.persist) {
        $dialog.remove();
      }
    }
    $dialog.off('dialogButtonsChange');
  };
  Drupal.AjaxCommands.prototype.setDialogOption = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      $dialog.dialog('option', response.optionName, response.optionValue);
    }
  };
  $(window).on('dialog:aftercreate', function (e, dialog, $element, settings) {
    $element.on('click.dialog', '.dialog-cancel', function (e) {
      dialog.close('cancel');
      e.preventDefault();
      e.stopPropagation();
    });
  });
  $(window).on('dialog:beforeclose', function (e, dialog, $element) {
    $element.off('.dialog');
  });
})(jQuery, Drupal);;
/*
 * jQuery treetable Plugin 3.2.0
 * http://ludo.cubicphuse.nl/jquery-treetable
 *
 * Copyright 2013, Ludo van den Boom
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function($) {
  var Node, Tree, methods;

  Node = (function() {
    function Node(row, tree, settings) {
      var parentId;

      this.row = row;
      this.tree = tree;
      this.settings = settings;

      // TODO Ensure id/parentId is always a string (not int)
      this.id = this.row.data(this.settings.nodeIdAttr);

      // TODO Move this to a setParentId function?
      parentId = this.row.data(this.settings.parentIdAttr);
      if (parentId != null && parentId !== "") {
        this.parentId = parentId;
      }

      this.treeCell = $(this.row.children(this.settings.columnElType)[this.settings.column]);
      this.expander = $(this.settings.expanderTemplate);
      this.indenter = $(this.settings.indenterTemplate);
      this.children = [];
      this.initialized = false;
      this.treeCell.prepend(this.indenter);
    }

    Node.prototype.addChild = function(child) {
      return this.children.push(child);
    };

    Node.prototype.ancestors = function() {
      var ancestors, node;
      node = this;
      ancestors = [];
      while (node = node.parentNode()) {
        ancestors.push(node);
      }
      return ancestors;
    };

    Node.prototype.collapse = function() {
      if (this.collapsed()) {
        return this;
      }

      this.row.removeClass("expanded").addClass("collapsed");

      this._hideChildren();
      this.expander.attr("title", this.settings.stringExpand);

      if (this.initialized && this.settings.onNodeCollapse != null) {
        this.settings.onNodeCollapse.apply(this);
      }

      return this;
    };

    Node.prototype.collapsed = function() {
      return this.row.hasClass("collapsed");
    };

    // TODO destroy: remove event handlers, expander, indenter, etc.

    Node.prototype.expand = function() {
      if (this.expanded()) {
        return this;
      }

      this.row.removeClass("collapsed").addClass("expanded");

      if (this.initialized && this.settings.onNodeExpand != null) {
        this.settings.onNodeExpand.apply(this);
      }

      if ($(this.row).is(":visible")) {
        this._showChildren();
      }

      this.expander.attr("title", this.settings.stringCollapse);

      return this;
    };

    Node.prototype.expanded = function() {
      return this.row.hasClass("expanded");
    };

    Node.prototype.hide = function() {
      this._hideChildren();
      this.row.hide();
      return this;
    };

    Node.prototype.isBranchNode = function() {
      if(this.children.length > 0 || this.row.data(this.settings.branchAttr) === true) {
        return true;
      } else {
        return false;
      }
    };

    Node.prototype.updateBranchLeafClass = function(){
      this.row.removeClass('branch');
      this.row.removeClass('leaf');
      this.row.addClass(this.isBranchNode() ? 'branch' : 'leaf');
    };

    Node.prototype.level = function() {
      return this.ancestors().length;
    };

    Node.prototype.parentNode = function() {
      if (this.parentId != null) {
        return this.tree[this.parentId];
      } else {
        return null;
      }
    };

    Node.prototype.removeChild = function(child) {
      var i = $.inArray(child, this.children);
      return this.children.splice(i, 1)
    };

    Node.prototype.render = function() {
      var handler,
          settings = this.settings,
          target;

      if (settings.expandable === true && this.isBranchNode()) {
        handler = function(e) {
          $(this).parents("table").treetable("node", $(this).parents("tr").data(settings.nodeIdAttr)).toggle();
          return e.preventDefault();
        };

        this.indenter.html(this.expander);
        target = settings.clickableNodeNames === true ? this.treeCell : this.expander;

        target.off("click.treetable").on("click.treetable", handler);
        target.off("keydown.treetable").on("keydown.treetable", function(e) {
          if (e.keyCode == 13) {
            handler.apply(this, [e]);
          }
        });
      }

      this.indenter[0].style.paddingLeft = "" + (this.level() * settings.indent) + "px";

      return this;
    };

    Node.prototype.reveal = function() {
      if (this.parentId != null) {
        this.parentNode().reveal();
      }
      return this.expand();
    };

    Node.prototype.setParent = function(node) {
      if (this.parentId != null) {
        this.tree[this.parentId].removeChild(this);
      }
      this.parentId = node.id;
      this.row.data(this.settings.parentIdAttr, node.id);
      return node.addChild(this);
    };

    Node.prototype.show = function() {
      if (!this.initialized) {
        this._initialize();
      }
      this.row.show();
      if (this.expanded()) {
        this._showChildren();
      }
      return this;
    };

    Node.prototype.toggle = function() {
      if (this.expanded()) {
        this.collapse();
      } else {
        this.expand();
      }
      return this;
    };

    Node.prototype._hideChildren = function() {
      var child, _i, _len, _ref, _results;
      _ref = this.children;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        _results.push(child.hide());
      }
      return _results;
    };

    Node.prototype._initialize = function() {
      var settings = this.settings;

      this.render();

      if (settings.expandable === true && settings.initialState === "collapsed") {
        this.collapse();
      } else {
        this.expand();
      }

      if (settings.onNodeInitialized != null) {
        settings.onNodeInitialized.apply(this);
      }

      return this.initialized = true;
    };

    Node.prototype._showChildren = function() {
      var child, _i, _len, _ref, _results;
      _ref = this.children;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        _results.push(child.show());
      }
      return _results;
    };

    return Node;
  })();

  Tree = (function() {
    function Tree(table, settings) {
      this.table = table;
      this.settings = settings;
      this.tree = {};

      // Cache the nodes and roots in simple arrays for quick access/iteration
      this.nodes = [];
      this.roots = [];
    }

    Tree.prototype.collapseAll = function() {
      var node, _i, _len, _ref, _results;
      _ref = this.nodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        _results.push(node.collapse());
      }
      return _results;
    };

    Tree.prototype.expandAll = function() {
      var node, _i, _len, _ref, _results;
      _ref = this.nodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        _results.push(node.expand());
      }
      return _results;
    };

    Tree.prototype.findLastNode = function (node) {
      if (node.children.length > 0) {
        return this.findLastNode(node.children[node.children.length - 1]);
      } else {
        return node;
      }
    };

    Tree.prototype.loadRows = function(rows) {
      var node, row, i;

      if (rows != null) {
        for (i = 0; i < rows.length; i++) {
          row = $(rows[i]);

          if (row.data(this.settings.nodeIdAttr) != null) {
            node = new Node(row, this.tree, this.settings);
            this.nodes.push(node);
            this.tree[node.id] = node;

            if (node.parentId != null && this.tree[node.parentId]) {
              this.tree[node.parentId].addChild(node);
            } else {
              this.roots.push(node);
            }
          }
        }
      }

      for (i = 0; i < this.nodes.length; i++) {
        node = this.nodes[i].updateBranchLeafClass();
      }

      return this;
    };

    Tree.prototype.move = function(node, destination) {
      // Conditions:
      // 1: +node+ should not be inserted as a child of +node+ itself.
      // 2: +destination+ should not be the same as +node+'s current parent (this
      //    prevents +node+ from being moved to the same location where it already
      //    is).
      // 3: +node+ should not be inserted in a location in a branch if this would
      //    result in +node+ being an ancestor of itself.
      var nodeParent = node.parentNode();
      if (node !== destination && destination.id !== node.parentId && $.inArray(node, destination.ancestors()) === -1) {
        node.setParent(destination);
        this._moveRows(node, destination);

        // Re-render parentNode if this is its first child node, and therefore
        // doesn't have the expander yet.
        if (node.parentNode().children.length === 1) {
          node.parentNode().render();
        }
      }

      if(nodeParent){
        nodeParent.updateBranchLeafClass();
      }
      if(node.parentNode()){
        node.parentNode().updateBranchLeafClass();
      }
      node.updateBranchLeafClass();
      return this;
    };

    Tree.prototype.removeNode = function(node) {
      // Recursively remove all descendants of +node+
      this.unloadBranch(node);

      // Remove node from DOM (<tr>)
      node.row.remove();

      // Remove node from parent children list
      if (node.parentId != null) {
        node.parentNode().removeChild(node);
      }

      // Clean up Tree object (so Node objects are GC-ed)
      delete this.tree[node.id];
      this.nodes.splice($.inArray(node, this.nodes), 1);

      return this;
    }

    Tree.prototype.render = function() {
      var root, _i, _len, _ref;
      _ref = this.roots;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        root = _ref[_i];

        // Naming is confusing (show/render). I do not call render on node from
        // here.
        root.show();
      }
      return this;
    };

    Tree.prototype.sortBranch = function(node, sortFun) {
      // First sort internal array of children
      node.children.sort(sortFun);

      // Next render rows in correct order on page
      this._sortChildRows(node);

      return this;
    };

    Tree.prototype.unloadBranch = function(node) {
      // Use a copy of the children array to not have other functions interfere
      // with this function if they manipulate the children array
      // (eg removeNode).
      var children = node.children.slice(0),
          i;

      for (i = 0; i < children.length; i++) {
        this.removeNode(children[i]);
      }

      // Reset node's collection of children
      node.children = [];

      node.updateBranchLeafClass();

      return this;
    };

    Tree.prototype._moveRows = function(node, destination) {
      var children = node.children, i;

      node.row.insertAfter(destination.row);
      node.render();

      // Loop backwards through children to have them end up on UI in correct
      // order (see #112)
      for (i = children.length - 1; i >= 0; i--) {
        this._moveRows(children[i], node);
      }
    };

    // Special _moveRows case, move children to itself to force sorting
    Tree.prototype._sortChildRows = function(parentNode) {
      return this._moveRows(parentNode, parentNode);
    };

    return Tree;
  })();

  // jQuery Plugin
  methods = {
    init: function(options, force) {
      var settings;

      settings = $.extend({
        branchAttr: "ttBranch",
        clickableNodeNames: false,
        column: 0,
        columnElType: "td", // i.e. 'td', 'th' or 'td,th'
        expandable: false,
        expanderTemplate: "<a href='#'>&nbsp;</a>",
        indent: 19,
        indenterTemplate: "<span class='indenter'></span>",
        initialState: "collapsed",
        nodeIdAttr: "ttId", // maps to data-tt-id
        parentIdAttr: "ttParentId", // maps to data-tt-parent-id
        stringExpand: "Expand",
        stringCollapse: "Collapse",

        // Events
        onInitialized: null,
        onNodeCollapse: null,
        onNodeExpand: null,
        onNodeInitialized: null
      }, options);

      return this.each(function() {
        var el = $(this), tree;

        if (force || el.data("treetable") === undefined) {
          tree = new Tree(this, settings);
          tree.loadRows(this.rows).render();

          el.addClass("treetable").data("treetable", tree);

          if (settings.onInitialized != null) {
            settings.onInitialized.apply(tree);
          }
        }

        return el;
      });
    },

    destroy: function() {
      return this.each(function() {
        return $(this).removeData("treetable").removeClass("treetable");
      });
    },

    collapseAll: function() {
      this.data("treetable").collapseAll();
      return this;
    },

    collapseNode: function(id) {
      var node = this.data("treetable").tree[id];

      if (node) {
        node.collapse();
      } else {
        throw new Error("Unknown node '" + id + "'");
      }

      return this;
    },

    expandAll: function() {
      this.data("treetable").expandAll();
      return this;
    },

    expandNode: function(id) {
      var node = this.data("treetable").tree[id];

      if (node) {
        if (!node.initialized) {
          node._initialize();
        }

        node.expand();
      } else {
        throw new Error("Unknown node '" + id + "'");
      }

      return this;
    },

    loadBranch: function(node, rows) {
      var settings = this.data("treetable").settings,
          tree = this.data("treetable").tree;

      // TODO Switch to $.parseHTML
      rows = $(rows);

      if (node == null) { // Inserting new root nodes
        this.append(rows);
      } else {
        var lastNode = this.data("treetable").findLastNode(node);
        rows.insertAfter(lastNode.row);
      }

      this.data("treetable").loadRows(rows);

      // Make sure nodes are properly initialized
      rows.filter("tr").each(function() {
        tree[$(this).data(settings.nodeIdAttr)].show();
      });

      if (node != null) {
        // Re-render parent to ensure expander icon is shown (#79)
        node.render().expand();
      }

      return this;
    },

    move: function(nodeId, destinationId) {
      var destination, node;

      node = this.data("treetable").tree[nodeId];
      destination = this.data("treetable").tree[destinationId];
      this.data("treetable").move(node, destination);

      return this;
    },

    node: function(id) {
      return this.data("treetable").tree[id];
    },

    removeNode: function(id) {
      var node = this.data("treetable").tree[id];

      if (node) {
        this.data("treetable").removeNode(node);
      } else {
        throw new Error("Unknown node '" + id + "'");
      }

      return this;
    },

    reveal: function(id) {
      var node = this.data("treetable").tree[id];

      if (node) {
        node.reveal();
      } else {
        throw new Error("Unknown node '" + id + "'");
      }

      return this;
    },

    sortBranch: function(node, columnOrFunction) {
      var settings = this.data("treetable").settings,
          prepValue,
          sortFun;

      columnOrFunction = columnOrFunction || settings.column;
      sortFun = columnOrFunction;

      if ($.isNumeric(columnOrFunction)) {
        sortFun = function(a, b) {
          var extractValue, valA, valB;

          extractValue = function(node) {
            var val = node.row.find("td:eq(" + columnOrFunction + ")").text();
            // Ignore trailing/leading whitespace and use uppercase values for
            // case insensitive ordering
            return $.trim(val).toUpperCase();
          }

          valA = extractValue(a);
          valB = extractValue(b);

          if (valA < valB) return -1;
          if (valA > valB) return 1;
          return 0;
        };
      }

      this.data("treetable").sortBranch(node, sortFun);
      return this;
    },

    unloadBranch: function(node) {
      this.data("treetable").unloadBranch(node);
      return this;
    }
  };

  $.fn.treetable = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      return $.error("Method " + method + " does not exist on jQuery.treetable");
    }
  };

  // Expose classes to world
  this.TreeTable || (this.TreeTable = {});
  this.TreeTable.Node = Node;
  this.TreeTable.Tree = Tree;
})(jQuery);
;

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.tokenTree = {
    attach: function (context, settings) {
      $(once('token-tree', 'table.token-tree', context)).treetable({ expandable: true});
    }
  };

  Drupal.behaviors.tokenInsert = {
    attach: function (context, settings) {
      // Keep track of which textfield was last selected/focused.
      $('textarea, input[type="text"]', context).focus(function () {
        drupalSettings.tokenFocusedField = this;
      });

      once('token-click-insert', '.token-click-insert .token-key', context).forEach(function (token) {
        var newThis = $('<a href="javascript:void(0);" title="' + Drupal.t('Insert this token into your form') + '">' + $(token).html() + '</a>').click(function () {
          var content = this.text;

          // Always work in normal text areas that currently have focus.
          if (drupalSettings.tokenFocusedField && (drupalSettings.tokenFocusedField.tokenDialogFocus || drupalSettings.tokenFocusedField.tokenHasFocus)) {
            insertAtCursor(drupalSettings.tokenFocusedField, content);
          }
          // Direct tinyMCE support.
          else if (typeof(tinyMCE) != 'undefined' && tinyMCE.activeEditor) {
            tinyMCE.activeEditor.execCommand('mceInsertContent', false, content);
          }
          // Direct CKEditor support. Only works if the field currently has focus,
          // which is unusual since the dialog is open.
          else if (typeof(CKEDITOR) != 'undefined' && CKEDITOR.currentInstance) {
            CKEDITOR.currentInstance.insertHtml(content);
          }
          // Direct CodeMirror support.
          else if (typeof(CodeMirror) != 'undefined' && drupalSettings.tokenFocusedField && $(drupalSettings.tokenFocusedField).parents('.CodeMirror').length) {
            var editor = $(drupalSettings.tokenFocusedField).parents('.CodeMirror')[0].CodeMirror;
            editor.replaceSelection(content);
            editor.focus();
          }
          // WYSIWYG support, should work in all editors if available.
          else if (Drupal.wysiwyg && Drupal.wysiwyg.activeId) {
            Drupal.wysiwyg.instances[Drupal.wysiwyg.activeId].insert(content)
          }
          // CKeditor module support.
          else if (typeof(CKEDITOR) != 'undefined' && typeof(Drupal.ckeditorActiveId) != 'undefined') {
            CKEDITOR.instances[Drupal.ckeditorActiveId].insertHtml(content);
          }
          else if (drupalSettings.tokenFocusedField) {
            insertAtCursor(drupalSettings.tokenFocusedField, content);
          }
          else {
            alert(Drupal.t('First click a text field to insert your tokens into.'));
          }

          return false;
        });
        $(token).html(newThis);
      });

      function insertAtCursor(editor, content) {
        // Record the current scroll position.
        var scroll = editor.scrollTop;

        // IE support.
        if (document.selection) {
          editor.focus();
          var sel = document.selection.createRange();
          sel.text = content;
        }

        // Mozilla/Firefox/Netscape 7+ support.
        else if (editor.selectionStart || editor.selectionStart == '0') {
          var startPos = editor.selectionStart;
          var endPos = editor.selectionEnd;
          editor.value = editor.value.substring(0, startPos) + content + editor.value.substring(endPos, editor.value.length);
        }

        // Fallback, just add to the end of the content.
        else {
          editor.value += content;
        }

        // Ensure the textarea does not unexpectedly scroll.
        editor.scrollTop = scroll;
      }
    }
  };

})(jQuery, Drupal, drupalSettings);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  function init(tab) {
    var $tab = $(tab);
    var $target = $tab.find('[data-drupal-nav-tabs-target]');
    var $active = $target.find('.js-active-tab');
    var openMenu = function openMenu() {
      $target.toggleClass('is-open');
    };
    var toggleOrder = function toggleOrder(reset) {
      var current = $active.index();
      var original = $active.data('original-order');
      if (original === 0 || reset === (current === original)) {
        return;
      }
      var siblings = {
        first: '[data-original-order="0"]',
        previous: "[data-original-order=\"".concat(original - 1, "\"]")
      };
      var $first = $target.find(siblings.first);
      var $previous = $target.find(siblings.previous);
      if (reset && current !== original) {
        $active.insertAfter($previous);
      } else if (!reset && current === original) {
        $active.insertBefore($first);
      }
    };
    var toggleCollapsed = function toggleCollapsed() {
      if (window.matchMedia('(min-width: 48em)').matches) {
        if ($tab.hasClass('is-horizontal') && !$tab.attr('data-width')) {
          var width = 0;
          $target.find('.js-tabs-link').each(function (index, value) {
            width += $(value).outerWidth();
          });
          $tab.attr('data-width', width);
        }
        var isHorizontal = $tab.attr('data-width') <= $tab.outerWidth();
        $tab.toggleClass('is-horizontal', isHorizontal);
        toggleOrder(isHorizontal);
      } else {
        toggleOrder(false);
      }
    };
    $tab.addClass('position-container is-horizontal-enabled');
    $target.find('.js-tab').each(function (index, element) {
      var $item = $(element);
      $item.attr('data-original-order', $item.index());
    });
    $tab.on('click.tabs', '[data-drupal-nav-tabs-trigger]', openMenu);
    $(window).on('resize.tabs', Drupal.debounce(toggleCollapsed, 150)).trigger('resize.tabs');
  }
  Drupal.behaviors.navTabs = {
    attach: function attach(context) {
      once('nav-tabs', '[data-drupal-nav-tabs].is-collapsible', context).forEach(init);
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);
  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };
    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');
      $item.toggleClass('open', switcher);
      $toggle.toggleClass('open', switcher);
      $toggle.find('.action').each(function (index, element) {
        element.textContent = switcher ? ui.handleClose : ui.handleOpen;
      });
    }
    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');
      toggleList($item);
      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }
    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }
      event.stopPropagation();
    }
    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          var $link = $box.find('a');
          options.text = Drupal.t('@label', {
            '@label': $link.length ? $link[0].textContent : ''
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }
    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass("level-".concat(level));
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }
    function openActiveItem($menu) {
      var pathItem = $menu.find("a[href=\"".concat(window.location.pathname, "\"]"));
      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find("a[href=\"".concat(activeItem, "\"]")).addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }
    return this.each(function (selector) {
      var menu = once('toolbar-menu', this);
      if (menu.length) {
        var $menu = $(menu);
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);
        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        openActiveItem($menu);
      }
    });
  };
  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return "<button class=\"".concat(options.class, "\"><span class=\"action\">").concat(options.action, "</span> <span class=\"label\">").concat(options.text, "</span></button>");
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });
  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }
      once('toolbar', '#toolbar-administration', context).forEach(function (toolbar) {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });
        Drupal.toolbar.models.toolbarModel = model;
        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;
          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));
          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });
        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: toolbar,
          model: model
        });
        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));
        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(toolbar).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });
        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem("Drupal.toolbar.subtrees.".concat(theme), JSON.stringify(subtrees));
          model.set('areSubtreesLoaded', true);
        });
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();
        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });
        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });
        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }
        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');
            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', "".concat(height, "px"));
              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', "".concat(newHeight, "px"));
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };
  Drupal.toolbar = {
    views: {},
    models: {},
    mql: {},
    setSubtrees: new $.Deferred(),
    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });
          if (!mql.matches || !model.get('orientation')) {
            model.set({
              orientation: 'vertical'
            }, {
              validate: true
            });
          }
          break;
        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;
        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, {
            validate: true
          });
          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;
        default:
          break;
      }
    }
  };
  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };
  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,
      activeTray: null,
      isOriented: false,
      isFixed: false,
      areSubtreesLoaded: false,
      isViewportOverflowConstrained: false,
      orientation: 'horizontal',
      locked: false,
      isTrayToggleVisible: true,
      height: null,
      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;
      var subtrees = this.model.get('subtrees');
      Object.keys(subtrees || {}).forEach(function (id) {
        $(once('toolbar-subtrees', _this.$el.find("#toolbar-link-".concat(id)))).after(subtrees[id]);
      });
      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;
      if (!relevantTray) {
        return;
      }
      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', {
          '@action': action
        });
      }
      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);
      this.$el.find('.toolbar-tray .toolbar-lining').has('.toolbar-menu').append(Drupal.theme('toolbarOrientationToggle'));
      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);
      $('body').css({
        'padding-top': this.model.get('height')
      });
      $('html').css({
        'scroll-padding-top': this.model.get('height')
      });
      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();
      $('body').removeClass('toolbar-loading');
      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }
      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;
        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';
      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }
      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });
      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));
      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);
      $(this.model.previous('activeTray')).removeClass('is-active');
      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');
        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }
        var $tray = this.$el.find("[data-toolbar-tray=\"".concat(name, "\"].toolbar-tray"));
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }
      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');
      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass("toolbar-tray-".concat(orientation));
      var iconClass = "toolbar-icon-toggle-".concat(orientation);
      var iconAntiClass = "toolbar-icon-toggle-".concat(antiOrientation);
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      var $orientationToggleButton = $orientationToggle.find('button');
      $orientationToggleButton[0].value = antiOrientation;
      $orientationToggleButton.attr('title', this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);
      $orientationToggleButton[0].textContent = this.strings[antiOrientation];
      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';
      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
      $trays.filter('.toolbar-tray-vertical.is-active').attr("data-offset-".concat(edge), '');
      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');
      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url("toolbar/subtrees/".concat(subtreesHash));
        var cachedSubtreesHash = localStorage.getItem("Drupal.toolbar.subtreesHash.".concat(theme));
        var cachedSubtrees = JSON.parse(localStorage.getItem("Drupal.toolbar.subtrees.".concat(theme)));
        var isVertical = this.model.get('orientation') === 'vertical';
        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
          localStorage.removeItem("Drupal.toolbar.subtreesHash.".concat(theme));
          localStorage.removeItem("Drupal.toolbar.subtrees.".concat(theme));
          Drupal.ajax({
            url: endpoint
          }).execute();
          localStorage.setItem("Drupal.toolbar.subtreesHash.".concat(theme), subtreesHash);
        }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, once) {
  Drupal.behaviors.claroAutoCompete = {
    attach: function attach(context) {
      once('claroAutoComplete', 'input.form-autocomplete', context).forEach(function (value) {
        var $input = $(value);
        var timeout = 400;
        var classRemoveTimeout;
        var classRemove = function classRemove($autoCompleteElem) {
          $autoCompleteElem.removeClass('is-autocompleting');
          $autoCompleteElem.siblings('[data-drupal-selector="autocomplete-message"]').addClass('hidden');
        };
        $input.on('input autocompletesearch autocompleteresponses', function (event) {
          if (event && event.type && event.type === 'autocompletesearch') {
            $(event.target).addClass('is-autocompleting');
            $(event.target).siblings('[data-drupal-selector="autocomplete-message"]').removeClass('hidden');
          }
          clearTimeout(classRemoveTimeout);
          classRemoveTimeout = setTimeout(classRemove, timeout, $(event.target));
        });
      });
    }
  };
})(jQuery, Drupal, once);;
/**
 * @file
 * Behaviors for the search widget in the admin toolbar.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.adminToolbarSearch = {

    // If extra links have been fetched.
    extraFetched: false,

    attach: function (context) {
      if (context != document) {
        return;
      }

      var $self = this;

      const elements = once('admin-toolbar-search', '#toolbar-bar', context);
      $(elements).each(function () {
        $self.links = [];

        var $searchTab = $(this).find('#admin-toolbar-search-tab')
        var $searchInput = $searchTab.find('#admin-toolbar-search-input');

        if ($searchInput.length === 0) {
          return;
        }

        $searchInput.autocomplete({
          minLength: 2,
          position: { collision : 'fit' },
          source: function (request, response) {
            var data = $self.handleAutocomplete(request.term);
            if (!$self.extraFetched && drupalSettings.adminToolbarSearch.loadExtraLinks) {
              $.getJSON( Drupal.url('admin/admin-toolbar-search'), function ( data ) {
                $(data).each(function () {
                  var item = this;
                  item.label = this.labelRaw + ' ' + this.value;
                  $self.links.push(item);
                });

                $self.extraFetched = true;

                var results = $self.handleAutocomplete(request.term);
                response(results);
              });
            }
            else {
              response(data);
            }
          },
          open: function () {
            var zIndex = $('#toolbar-item-administration-tray')
              .css('z-index') + 1;
            $(this).autocomplete('widget').css('z-index', zIndex);

            return false;
          },
          select: function (event, ui) {
            if (ui.item.value) {
              location.href = ui.item.value;
              return false;
            }
          }
        }).data('ui-autocomplete')._renderItem = (function (ul, item) {
          ul.addClass('admin-toolbar-search-autocomplete-list');
          return $('<li>')
            .append('<div ><a href="' + item.value + '" onclick="window.open(this.href); return false;" >' + item.labelRaw + ' <span class="admin-toolbar-search-url">' + item.value + '</span></a></div>')
            .appendTo(ul);
        });

        // Populate the links for search results when the input is pressed.
        $searchInput.focus(function () {
          Drupal.behaviors.adminToolbarSearch.populateLinks($self);
        });

        // Show/hide search input field when mobile tab item is pressed.
        $('#admin-toolbar-mobile-search-tab .toolbar-item', context).click(function (e) {
          e.preventDefault();
          $(this).toggleClass('is-active');
          $searchTab.toggleClass('visible');
          $searchInput.focus();
        });
      });
    },
    getItemLabel: function (item) {
      var breadcrumbs = [];
      $(item).parents().each(function () {
        if ($(this).hasClass('menu-item')) {
          var $link = $(this).find('a:first');
          if ($link.length && !$link.hasClass('admin-toolbar-search-ignore')) {
            breadcrumbs.unshift($link.text());
          }
        }
      });
      return breadcrumbs.join(' > ');
    },
    handleAutocomplete: function (term) {
      var $self = this;
      var keywords = term.split(" "); // Split search terms into list.

      var suggestions = [];
      $self.links.forEach(function (element) {
        var label = element.label.toLowerCase();

        // Add exact matches.
        if (label.indexOf(term.toLowerCase()) >= 0) {
          suggestions.push(element);
        }
        else {
          // Add suggestions where it matches all search terms.
          var matchCount = 0;
          keywords.forEach(function (keyword) {
            if (label.indexOf(keyword.toLowerCase()) >= 0) {
              matchCount++;
            }
          });
          if (matchCount == keywords.length) {
            suggestions.push(element);
          }
        }
      });
      return suggestions;
    },
    /**
     * Populates the links in admin toolbar search.
     */
    populateLinks: function ($self) {
      // Populate only when links array is empty (only the first time).
      if ($self.links.length === 0) {
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
        $('.toolbar-tray a[data-drupal-link-system-path]').each(function () {
          if (this.href !== baseUrl) {
            var label = $self.getItemLabel(this);
            $self.links.push({
              'value': this.href,
              'label': label + ' ' + this.href,
              'labelRaw': Drupal.checkPlain(label)
            });
          }
        });
      }
    },
  };

})(jQuery, Drupal);
;
/*! shepherd.js 9.1.1 */

'use strict';(function(O,pa){"object"===typeof exports&&"undefined"!==typeof module?module.exports=pa():"function"===typeof define&&define.amd?define(pa):(O="undefined"!==typeof globalThis?globalThis:O||self,O.Shepherd=pa())})(this,function(){function O(a,b){return!1!==b.clone&&b.isMergeableObject(a)?da(Array.isArray(a)?[]:{},a,b):a}function pa(a,b,c){return a.concat(b).map(function(d){return O(d,c)})}function Db(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(b){return a.propertyIsEnumerable(b)}):
[]}function Ta(a){return Object.keys(a).concat(Db(a))}function Ua(a,b){try{return b in a}catch(c){return!1}}function Eb(a,b,c){var d={};c.isMergeableObject(a)&&Ta(a).forEach(function(e){d[e]=O(a[e],c)});Ta(b).forEach(function(e){if(!Ua(a,e)||Object.hasOwnProperty.call(a,e)&&Object.propertyIsEnumerable.call(a,e))if(Ua(a,e)&&c.isMergeableObject(b[e])){if(c.customMerge){var f=c.customMerge(e);f="function"===typeof f?f:da}else f=da;d[e]=f(a[e],b[e],c)}else d[e]=O(b[e],c)});return d}function da(a,b,c){c=
c||{};c.arrayMerge=c.arrayMerge||pa;c.isMergeableObject=c.isMergeableObject||Fb;c.cloneUnlessOtherwiseSpecified=O;var d=Array.isArray(b),e=Array.isArray(a);return d!==e?O(b,c):d?c.arrayMerge(a,b,c):Eb(a,b,c)}function ea(a){return"function"===typeof a}function qa(a){return"string"===typeof a}function Va(a){let b=Object.getOwnPropertyNames(a.constructor.prototype);for(let c=0;c<b.length;c++){let d=b[c],e=a[d];"constructor"!==d&&"function"===typeof e&&(a[d]=e.bind(a))}return a}function Gb(a,b){return c=>
{if(b.isOpen()){let d=b.el&&c.currentTarget===b.el;(void 0!==a&&c.currentTarget.matches(a)||d)&&b.tour.next()}}}function Hb(a){let {event:b,selector:c}=a.options.advanceOn||{};if(b){let d=Gb(c,a),e;try{e=document.querySelector(c)}catch(f){}if(void 0===c||e)e?(e.addEventListener(b,d),a.on("destroy",()=>e.removeEventListener(b,d))):(document.body.addEventListener(b,d,!0),a.on("destroy",()=>document.body.removeEventListener(b,d,!0)));else return console.error(`No element was found for the selector supplied to advanceOn: ${c}`)}else return console.error("advanceOn was defined, but no event name was passed.")}
function M(a){return a?(a.nodeName||"").toLowerCase():null}function K(a){return null==a?window:"[object Window]"!==a.toString()?(a=a.ownerDocument)?a.defaultView||window:window:a}function fa(a){var b=K(a).Element;return a instanceof b||a instanceof Element}function F(a){var b=K(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function Ea(a){if("undefined"===typeof ShadowRoot)return!1;var b=K(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}function N(a){return a.split("-")[0]}
function ha(a,b){void 0===b&&(b=!1);var c=a.getBoundingClientRect(),d=1,e=1;F(a)&&b&&(b=a.offsetHeight,a=a.offsetWidth,0<a&&(d=ia(c.width)/a||1),0<b&&(e=ia(c.height)/b||1));return{width:c.width/d,height:c.height/e,top:c.top/e,right:c.right/d,bottom:c.bottom/e,left:c.left/d,x:c.left/d,y:c.top/e}}function Fa(a){var b=ha(a),c=a.offsetWidth,d=a.offsetHeight;1>=Math.abs(b.width-c)&&(c=b.width);1>=Math.abs(b.height-d)&&(d=b.height);return{x:a.offsetLeft,y:a.offsetTop,width:c,height:d}}function Wa(a,b){var c=
b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&Ea(c)){do{if(b&&a.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}function P(a){return K(a).getComputedStyle(a)}function U(a){return((fa(a)?a.ownerDocument:a.document)||window.document).documentElement}function wa(a){return"html"===M(a)?a:a.assignedSlot||a.parentNode||(Ea(a)?a.host:null)||U(a)}function Xa(a){return F(a)&&"fixed"!==P(a).position?a.offsetParent:null}function ra(a){for(var b=K(a),c=Xa(a);c&&0<=["table","td",
"th"].indexOf(M(c))&&"static"===P(c).position;)c=Xa(c);if(c&&("html"===M(c)||"body"===M(c)&&"static"===P(c).position))return b;if(!c)a:{c=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1===navigator.userAgent.indexOf("Trident")||!F(a)||"fixed"!==P(a).position)for(a=wa(a),Ea(a)&&(a=a.host);F(a)&&0>["html","body"].indexOf(M(a));){var d=P(a);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain||-1!==["transform","perspective"].indexOf(d.willChange)||c&&"filter"===d.willChange||
c&&d.filter&&"none"!==d.filter){c=a;break a}else a=a.parentNode}c=null}return c||b}function Ga(a){return 0<=["top","bottom"].indexOf(a)?"x":"y"}function Ya(a){return Object.assign({},{top:0,right:0,bottom:0,left:0},a)}function Za(a,b){return b.reduce(function(c,d){c[d]=a;return c},{})}function ja(a){return a.split("-")[1]}function $a(a){var b,c=a.popper,d=a.popperRect,e=a.placement,f=a.variation,g=a.offsets,l=a.position,m=a.gpuAcceleration,k=a.adaptive,p=a.roundOffsets,q=a.isFixed;a=g.x;a=void 0===
a?0:a;var n=g.y,r=void 0===n?0:n;n="function"===typeof p?p({x:a,y:r}):{x:a,y:r};a=n.x;r=n.y;n=g.hasOwnProperty("x");g=g.hasOwnProperty("y");var x="left",h="top",t=window;if(k){var v=ra(c),A="clientHeight",u="clientWidth";v===K(c)&&(v=U(c),"static"!==P(v).position&&"absolute"===l&&(A="scrollHeight",u="scrollWidth"));if("top"===e||("left"===e||"right"===e)&&"end"===f)h="bottom",r-=(q&&v===t&&t.visualViewport?t.visualViewport.height:v[A])-d.height,r*=m?1:-1;if("left"===e||("top"===e||"bottom"===e)&&
"end"===f)x="right",a-=(q&&v===t&&t.visualViewport?t.visualViewport.width:v[u])-d.width,a*=m?1:-1}c=Object.assign({position:l},k&&Ib);!0===p?(p=r,d=window.devicePixelRatio||1,a={x:ia(a*d)/d||0,y:ia(p*d)/d||0}):a={x:a,y:r};p=a;a=p.x;r=p.y;if(m){var w;return Object.assign({},c,(w={},w[h]=g?"0":"",w[x]=n?"0":"",w.transform=1>=(t.devicePixelRatio||1)?"translate("+a+"px, "+r+"px)":"translate3d("+a+"px, "+r+"px, 0)",w))}return Object.assign({},c,(b={},b[h]=g?r+"px":"",b[x]=n?a+"px":"",b.transform="",b))}
function xa(a){return a.replace(/left|right|bottom|top/g,function(b){return Jb[b]})}function ab(a){return a.replace(/start|end/g,function(b){return Kb[b]})}function Ha(a){a=K(a);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function Ia(a){return ha(U(a)).left+Ha(a).scrollLeft}function Ja(a){a=P(a);return/auto|scroll|overlay|hidden/.test(a.overflow+a.overflowY+a.overflowX)}function bb(a){return 0<=["html","body","#document"].indexOf(M(a))?a.ownerDocument.body:F(a)&&Ja(a)?a:bb(wa(a))}function sa(a,
b){var c;void 0===b&&(b=[]);var d=bb(a);a=d===(null==(c=a.ownerDocument)?void 0:c.body);c=K(d);d=a?[c].concat(c.visualViewport||[],Ja(d)?d:[]):d;b=b.concat(d);return a?b:b.concat(sa(wa(d)))}function Ka(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function cb(a,b){if("viewport"===b){b=K(a);var c=U(a);b=b.visualViewport;var d=c.clientWidth;c=c.clientHeight;var e=0,f=0;b&&(d=b.width,c=b.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(e=b.offsetLeft,
f=b.offsetTop));a={width:d,height:c,x:e+Ia(a),y:f};a=Ka(a)}else fa(b)?(a=ha(b),a.top+=b.clientTop,a.left+=b.clientLeft,a.bottom=a.top+b.clientHeight,a.right=a.left+b.clientWidth,a.width=b.clientWidth,a.height=b.clientHeight,a.x=a.left,a.y=a.top):(f=U(a),a=U(f),d=Ha(f),b=null==(c=f.ownerDocument)?void 0:c.body,c=L(a.scrollWidth,a.clientWidth,b?b.scrollWidth:0,b?b.clientWidth:0),e=L(a.scrollHeight,a.clientHeight,b?b.scrollHeight:0,b?b.clientHeight:0),f=-d.scrollLeft+Ia(f),d=-d.scrollTop,"rtl"===P(b||
a).direction&&(f+=L(a.clientWidth,b?b.clientWidth:0)-c),a=Ka({width:c,height:e,x:f,y:d}));return a}function Lb(a){var b=sa(wa(a)),c=0<=["absolute","fixed"].indexOf(P(a).position)&&F(a)?ra(a):a;return fa(c)?b.filter(function(d){return fa(d)&&Wa(d,c)&&"body"!==M(d)}):[]}function Mb(a,b,c){b="clippingParents"===b?Lb(a):[].concat(b);c=[].concat(b,[c]);c=c.reduce(function(d,e){e=cb(a,e);d.top=L(e.top,d.top);d.right=V(e.right,d.right);d.bottom=V(e.bottom,d.bottom);d.left=L(e.left,d.left);return d},cb(a,
c[0]));c.width=c.right-c.left;c.height=c.bottom-c.top;c.x=c.left;c.y=c.top;return c}function db(a){var b=a.reference,c=a.element,d=(a=a.placement)?N(a):null;a=a?ja(a):null;var e=b.x+b.width/2-c.width/2,f=b.y+b.height/2-c.height/2;switch(d){case "top":e={x:e,y:b.y-c.height};break;case "bottom":e={x:e,y:b.y+b.height};break;case "right":e={x:b.x+b.width,y:f};break;case "left":e={x:b.x-c.width,y:f};break;default:e={x:b.x,y:b.y}}d=d?Ga(d):null;if(null!=d)switch(f="y"===d?"height":"width",a){case "start":e[d]-=
b[f]/2-c[f]/2;break;case "end":e[d]+=b[f]/2-c[f]/2}return e}function ta(a,b){void 0===b&&(b={});var c=b;b=c.placement;b=void 0===b?a.placement:b;var d=c.boundary,e=void 0===d?"clippingParents":d;d=c.rootBoundary;var f=void 0===d?"viewport":d;d=c.elementContext;d=void 0===d?"popper":d;var g=c.altBoundary,l=void 0===g?!1:g;c=c.padding;c=void 0===c?0:c;c=Ya("number"!==typeof c?c:Za(c,ua));g=a.rects.popper;l=a.elements[l?"popper"===d?"reference":"popper":d];e=Mb(fa(l)?l:l.contextElement||U(a.elements.popper),
e,f);f=ha(a.elements.reference);l=db({reference:f,element:g,strategy:"absolute",placement:b});g=Ka(Object.assign({},g,l));f="popper"===d?g:f;var m={top:e.top-f.top+c.top,bottom:f.bottom-e.bottom+c.bottom,left:e.left-f.left+c.left,right:f.right-e.right+c.right};a=a.modifiersData.offset;if("popper"===d&&a){var k=a[b];Object.keys(m).forEach(function(p){var q=0<=["right","bottom"].indexOf(p)?1:-1,n=0<=["top","bottom"].indexOf(p)?"y":"x";m[p]+=k[n]*q})}return m}function Nb(a,b){void 0===b&&(b={});var c=
b.boundary,d=b.rootBoundary,e=b.padding,f=b.flipVariations,g=b.allowedAutoPlacements,l=void 0===g?eb:g,m=ja(b.placement);b=m?f?fb:fb.filter(function(p){return ja(p)===m}):ua;f=b.filter(function(p){return 0<=l.indexOf(p)});0===f.length&&(f=b);var k=f.reduce(function(p,q){p[q]=ta(a,{placement:q,boundary:c,rootBoundary:d,padding:e})[N(q)];return p},{});return Object.keys(k).sort(function(p,q){return k[p]-k[q]})}function Ob(a){if("auto"===N(a))return[];var b=xa(a);return[ab(a),b,ab(b)]}function gb(a,
b,c){void 0===c&&(c={x:0,y:0});return{top:a.top-b.height-c.y,right:a.right-b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function hb(a){return["top","right","bottom","left"].some(function(b){return 0<=a[b]})}function Pb(a,b,c){void 0===c&&(c=!1);var d=F(b),e;if(e=F(b)){var f=b.getBoundingClientRect();e=ia(f.width)/b.offsetWidth||1;f=ia(f.height)/b.offsetHeight||1;e=1!==e||1!==f}f=e;e=U(b);a=ha(a,f);f={scrollLeft:0,scrollTop:0};var g={x:0,y:0};if(d||!d&&!c){if("body"!==M(b)||Ja(e))f=
b!==K(b)&&F(b)?{scrollLeft:b.scrollLeft,scrollTop:b.scrollTop}:Ha(b);F(b)?(g=ha(b,!0),g.x+=b.clientLeft,g.y+=b.clientTop):e&&(g.x=Ia(e))}return{x:a.left+f.scrollLeft-g.x,y:a.top+f.scrollTop-g.y,width:a.width,height:a.height}}function Qb(a){function b(f){d.add(f.name);[].concat(f.requires||[],f.requiresIfExists||[]).forEach(function(g){d.has(g)||(g=c.get(g))&&b(g)});e.push(f)}var c=new Map,d=new Set,e=[];a.forEach(function(f){c.set(f.name,f)});a.forEach(function(f){d.has(f.name)||b(f)});return e}function Rb(a){var b=
Qb(a);return Sb.reduce(function(c,d){return c.concat(b.filter(function(e){return e.phase===d}))},[])}function Tb(a){var b;return function(){b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0;c(a())})}));return b}}function Ub(a){var b=a.reduce(function(c,d){var e=c[d.name];c[d.name]=e?Object.assign({},e,d,{options:Object.assign({},e.options,d.options),data:Object.assign({},e.data,d.data)}):d;return c},{});return Object.keys(b).map(function(c){return b[c]})}function ib(){for(var a=
arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(d){return!(d&&"function"===typeof d.getBoundingClientRect)})}function La(){La=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return La.apply(this,arguments)}function Vb(){return[{name:"applyStyles",fn(a){let {state:b}=a;Object.keys(b.elements).forEach(c=>{if("popper"===c){var d=b.attributes[c]||{},e=b.elements[c];
Object.assign(e.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"});Object.keys(d).forEach(f=>{let g=d[f];!1===g?e.removeAttribute(f):e.setAttribute(f,!0===g?"":g)})}})}},{name:"computeStyles",options:{adaptive:!1}}]}function Wb(a){let b=Vb(),c={placement:"top",strategy:"fixed",modifiers:[{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{a.el&&a.el.focus()},300)}}]};return c=La({},c,{modifiers:Array.from(new Set([...c.modifiers,...b]))})}function jb(a){return qa(a)&&
""!==a?"-"!==a.charAt(a.length-1)?`${a}-`:a:""}function Ma(a){a=a.options.attachTo||{};let b=Object.assign({},a);if(qa(a.element)){try{b.element=document.querySelector(a.element)}catch(c){}b.element||console.error(`The element for this Shepherd step was not found ${a.element}`)}return b}function Na(){let a=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,b=>{let c=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"==b?c:c&3|8).toString(16)})}function Xb(a,b){let c={modifiers:[{name:"preventOverflow",
options:{altAxis:!0,tether:!1}},{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{b.el&&b.el.focus()},300)}}],strategy:"absolute"};b.isCentered()?c=Wb(b):c.placement=a.on;(a=b.tour&&b.tour.options&&b.tour.options.defaultStepOptions)&&(c=kb(a,c));return c=kb(b.options,c)}function kb(a,b){if(a.popperOptions){let c=Object.assign({},b,a.popperOptions);if(a.popperOptions.modifiers&&0<a.popperOptions.modifiers.length){let d=a.popperOptions.modifiers.map(e=>e.name);b=b.modifiers.filter(e=>
!d.includes(e.name));c.modifiers=Array.from(new Set([...b,...a.popperOptions.modifiers]))}return c}return b}function G(){}function Yb(a,b){for(let c in b)a[c]=b[c];return a}function ka(a){return a()}function lb(a){return"function"===typeof a}function Q(a,b){return a!=a?b==b:a!==b||a&&"object"===typeof a||"function"===typeof a}function H(a){a.parentNode.removeChild(a)}function mb(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function ya(a,b,c,d){a.addEventListener(b,c,d);return()=>
a.removeEventListener(b,c,d)}function B(a,b,c){null==c?a.removeAttribute(b):a.getAttribute(b)!==c&&a.setAttribute(b,c)}function nb(a,b){let c=Object.getOwnPropertyDescriptors(a.__proto__);for(let d in b)null==b[d]?a.removeAttribute(d):"style"===d?a.style.cssText=b[d]:"__value"===d?a.value=a[d]=b[d]:c[d]&&c[d].set?a[d]=b[d]:B(a,d,b[d])}function la(a,b,c){a.classList[c?"add":"remove"](b)}function za(){if(!R)throw Error("Function called outside component initialization");return R}function Oa(a){Aa.push(a)}
function ob(){let a=R;do{for(;Ba<va.length;){var b=va[Ba];Ba++;R=b;b=b.$$;if(null!==b.fragment){b.update();b.before_update.forEach(ka);var c=b.dirty;b.dirty=[-1];b.fragment&&b.fragment.p(b.ctx,c);b.after_update.forEach(Oa)}}R=null;for(Ba=va.length=0;ma.length;)ma.pop()();for(b=0;b<Aa.length;b+=1)c=Aa[b],Pa.has(c)||(Pa.add(c),c());Aa.length=0}while(va.length);for(;pb.length;)pb.pop()();Qa=!1;Pa.clear();R=a}function Z(){aa={r:0,c:[],p:aa}}function ba(){aa.r||aa.c.forEach(ka);aa=aa.p}function z(a,b){a&&
a.i&&(Ca.delete(a),a.i(b))}function C(a,b,c,d){a&&a.o&&!Ca.has(a)&&(Ca.add(a),aa.c.push(()=>{Ca.delete(a);d&&(c&&a.d(1),d())}),a.o(b))}function ca(a){a&&a.c()}function W(a,b,c,d){let {fragment:e,on_mount:f,on_destroy:g,after_update:l}=a.$$;e&&e.m(b,c);d||Oa(()=>{let m=f.map(ka).filter(lb);g?g.push(...m):m.forEach(ka);a.$$.on_mount=[]});l.forEach(Oa)}function X(a,b){a=a.$$;null!==a.fragment&&(a.on_destroy.forEach(ka),a.fragment&&a.fragment.d(b),a.on_destroy=a.fragment=null,a.ctx=[])}function S(a,b,
c,d,e,f,g,l){void 0===l&&(l=[-1]);let m=R;R=a;let k=a.$$={fragment:null,ctx:null,props:f,update:G,not_equal:e,bound:Object.create(null),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(b.context||(m?m.$$.context:[])),callbacks:Object.create(null),dirty:l,skip_bound:!1,root:b.target||m.$$.root};g&&g(k.root);let p=!1;k.ctx=c?c(a,b.props||{},function(q,n){let r=(2>=arguments.length?0:arguments.length-2)?2>=arguments.length?void 0:arguments[2]:n;if(k.ctx&&e(k.ctx[q],
k.ctx[q]=r)){if(!k.skip_bound&&k.bound[q])k.bound[q](r);p&&(-1===a.$$.dirty[0]&&(va.push(a),Qa||(Qa=!0,Zb.then(ob)),a.$$.dirty.fill(0)),a.$$.dirty[q/31|0]|=1<<q%31)}return n}):[];k.update();p=!0;k.before_update.forEach(ka);k.fragment=d?d(k.ctx):!1;b.target&&(b.hydrate?(c=Array.from(b.target.childNodes),k.fragment&&k.fragment.l(c),c.forEach(H)):k.fragment&&k.fragment.c(),b.intro&&z(a.$$.fragment),W(a,b.target,b.anchor,b.customElement),ob());R=m}function $b(a){let b,c,d,e,f;return{c(){b=document.createElement("button");
B(b,"aria-label",c=a[3]?a[3]:null);B(b,"class",d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`);b.disabled=a[2];B(b,"tabindex","0")},m(g,l){g.insertBefore(b,l||null);b.innerHTML=a[5];e||(f=ya(b,"click",function(){lb(a[0])&&a[0].apply(this,arguments)}),e=!0)},p(g,l){[l]=l;a=g;l&32&&(b.innerHTML=a[5]);l&8&&c!==(c=a[3]?a[3]:null)&&B(b,"aria-label",c);l&18&&d!==(d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`)&&B(b,"class",d);l&4&&(b.disabled=a[2])},i:G,o:G,
d(g){g&&H(b);e=!1;f()}}}function ac(a,b,c){function d(n){return ea(n)?n.call(f):n}let {config:e,step:f}=b,g,l,m,k,p,q;a.$$set=n=>{"config"in n&&c(6,e=n.config);"step"in n&&c(7,f=n.step)};a.$$.update=()=>{a.$$.dirty&192&&(c(0,g=e.action?e.action.bind(f.tour):null),c(1,l=e.classes),c(2,m=e.disabled?d(e.disabled):!1),c(3,k=e.label?d(e.label):null),c(4,p=e.secondary),c(5,q=e.text?d(e.text):null))};return[g,l,m,k,p,q,e,f]}function qb(a,b,c){a=a.slice();a[2]=b[c];return a}function rb(a){let b,c,d=a[1],
e=[];for(let g=0;g<d.length;g+=1)e[g]=sb(qb(a,d,g));let f=g=>C(e[g],1,1,()=>{e[g]=null});return{c(){for(let g=0;g<e.length;g+=1)e[g].c();b=document.createTextNode("")},m(g,l){for(let m=0;m<e.length;m+=1)e[m].m(g,l);g.insertBefore(b,l||null);c=!0},p(g,l){if(l&3){d=g[1];let m;for(m=0;m<d.length;m+=1){let k=qb(g,d,m);e[m]?(e[m].p(k,l),z(e[m],1)):(e[m]=sb(k),e[m].c(),z(e[m],1),e[m].m(b.parentNode,b))}Z();for(m=d.length;m<e.length;m+=1)f(m);ba()}},i(g){if(!c){for(g=0;g<d.length;g+=1)z(e[g]);c=!0}},o(g){e=
e.filter(Boolean);for(g=0;g<e.length;g+=1)C(e[g]);c=!1},d(g){var l=e;for(let m=0;m<l.length;m+=1)l[m]&&l[m].d(g);g&&H(b)}}}function sb(a){let b,c;b=new bc({props:{config:a[2],step:a[0]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.config=d[2]);e&1&&(f.step=d[0]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function cc(a){let b,c,d=a[1]&&rb(a);return{c(){b=document.createElement("footer");d&&d.c();B(b,"class","shepherd-footer")},
m(e,f){e.insertBefore(b,f||null);d&&d.m(b,null);c=!0},p(e,f){[f]=f;e[1]?d?(d.p(e,f),f&2&&z(d,1)):(d=rb(e),d.c(),z(d,1),d.m(b,null)):d&&(Z(),C(d,1,1,()=>{d=null}),ba())},i(e){c||(z(d),c=!0)},o(e){C(d);c=!1},d(e){e&&H(b);d&&d.d()}}}function dc(a,b,c){let d,{step:e}=b;a.$$set=f=>{"step"in f&&c(0,e=f.step)};a.$$.update=()=>{a.$$.dirty&1&&c(1,d=e.options.buttons)};return[e,d]}function ec(a){let b,c,d,e,f;return{c(){b=document.createElement("button");c=document.createElement("span");c.textContent="\u00d7";
B(c,"aria-hidden","true");B(b,"aria-label",d=a[0].label?a[0].label:"Close Tour");B(b,"class","shepherd-cancel-icon");B(b,"type","button")},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);e||(f=ya(b,"click",a[1]),e=!0)},p(g,l){[l]=l;l&1&&d!==(d=g[0].label?g[0].label:"Close Tour")&&B(b,"aria-label",d)},i:G,o:G,d(g){g&&H(b);e=!1;f()}}}function fc(a,b,c){let {cancelIcon:d,step:e}=b;a.$$set=f=>{"cancelIcon"in f&&c(0,d=f.cancelIcon);"step"in f&&c(2,e=f.step)};return[d,f=>{f.preventDefault();e.cancel()},
e]}function gc(a){let b;return{c(){b=document.createElement("h3");B(b,"id",a[1]);B(b,"class","shepherd-title")},m(c,d){c.insertBefore(b,d||null);a[3](b)},p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function hc(a,b,c){let {labelId:d,element:e,title:f}=b;za().$$.after_update.push(()=>{ea(f)&&c(2,f=f());c(0,e.innerHTML=f,e)});a.$$set=g=>{"labelId"in g&&c(1,d=g.labelId);"element"in g&&c(0,e=g.element);"title"in g&&c(2,f=g.title)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>
{e=g;c(0,e)})}]}function tb(a){let b,c;b=new ic({props:{labelId:a[0],title:a[2]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.labelId=d[0]);e&4&&(f.title=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ub(a){let b,c;b=new jc({props:{cancelIcon:a[3],step:a[1]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&8&&(f.cancelIcon=d[3]);e&2&&(f.step=d[1]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),
c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function kc(a){let b,c,d,e=a[2]&&tb(a),f=a[3]&&a[3].enabled&&ub(a);return{c(){b=document.createElement("header");e&&e.c();c=document.createTextNode(" ");f&&f.c();B(b,"class","shepherd-header")},m(g,l){g.insertBefore(b,l||null);e&&e.m(b,null);b.appendChild(c);f&&f.m(b,null);d=!0},p(g,l){[l]=l;g[2]?e?(e.p(g,l),l&4&&z(e,1)):(e=tb(g),e.c(),z(e,1),e.m(b,c)):e&&(Z(),C(e,1,1,()=>{e=null}),ba());g[3]&&g[3].enabled?f?(f.p(g,l),l&8&&z(f,1)):(f=ub(g),f.c(),
z(f,1),f.m(b,null)):f&&(Z(),C(f,1,1,()=>{f=null}),ba())},i(g){d||(z(e),z(f),d=!0)},o(g){C(e);C(f);d=!1},d(g){g&&H(b);e&&e.d();f&&f.d()}}}function lc(a,b,c){let {labelId:d,step:e}=b,f,g;a.$$set=l=>{"labelId"in l&&c(0,d=l.labelId);"step"in l&&c(1,e=l.step)};a.$$.update=()=>{a.$$.dirty&2&&(c(2,f=e.options.title),c(3,g=e.options.cancelIcon))};return[d,e,f,g]}function mc(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-text");B(b,"id",a[1])},m(c,d){c.insertBefore(b,d||null);a[3](b)},
p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function nc(a,b,c){let {descriptionId:d,element:e,step:f}=b;za().$$.after_update.push(()=>{let {text:g}=f.options;ea(g)&&(g=g.call(f));g instanceof HTMLElement?e.appendChild(g):c(0,e.innerHTML=g,e)});a.$$set=g=>{"descriptionId"in g&&c(1,d=g.descriptionId);"element"in g&&c(0,e=g.element);"step"in g&&c(2,f=g.step)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>{e=g;c(0,e)})}]}function vb(a){let b,c;b=new oc({props:{labelId:a[1],
step:a[2]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.labelId=d[1]);e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function wb(a){let b,c;b=new pc({props:{descriptionId:a[0],step:a[2]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.descriptionId=d[0]);e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function xb(a){let b,
c;b=new qc({props:{step:a[2]}});return{c(){ca(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function rc(a){let b,c=void 0!==a[2].options.title||a[2].options.cancelIcon&&a[2].options.cancelIcon.enabled,d,e=void 0!==a[2].options.text,f,g=Array.isArray(a[2].options.buttons)&&a[2].options.buttons.length,l,m=c&&vb(a),k=e&&wb(a),p=g&&xb(a);return{c(){b=document.createElement("div");m&&m.c();
d=document.createTextNode(" ");k&&k.c();f=document.createTextNode(" ");p&&p.c();B(b,"class","shepherd-content")},m(q,n){q.insertBefore(b,n||null);m&&m.m(b,null);b.appendChild(d);k&&k.m(b,null);b.appendChild(f);p&&p.m(b,null);l=!0},p(q,n){[n]=n;n&4&&(c=void 0!==q[2].options.title||q[2].options.cancelIcon&&q[2].options.cancelIcon.enabled);c?m?(m.p(q,n),n&4&&z(m,1)):(m=vb(q),m.c(),z(m,1),m.m(b,d)):m&&(Z(),C(m,1,1,()=>{m=null}),ba());n&4&&(e=void 0!==q[2].options.text);e?k?(k.p(q,n),n&4&&z(k,1)):(k=wb(q),
k.c(),z(k,1),k.m(b,f)):k&&(Z(),C(k,1,1,()=>{k=null}),ba());n&4&&(g=Array.isArray(q[2].options.buttons)&&q[2].options.buttons.length);g?p?(p.p(q,n),n&4&&z(p,1)):(p=xb(q),p.c(),z(p,1),p.m(b,null)):p&&(Z(),C(p,1,1,()=>{p=null}),ba())},i(q){l||(z(m),z(k),z(p),l=!0)},o(q){C(m);C(k);C(p);l=!1},d(q){q&&H(b);m&&m.d();k&&k.d();p&&p.d()}}}function sc(a,b,c){let {descriptionId:d,labelId:e,step:f}=b;a.$$set=g=>{"descriptionId"in g&&c(0,d=g.descriptionId);"labelId"in g&&c(1,e=g.labelId);"step"in g&&c(2,f=g.step)};
return[d,e,f]}function yb(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-arrow");B(b,"data-popper-arrow","")},m(c,d){c.insertBefore(b,d||null)},d(c){c&&H(b)}}}function tc(a){let b,c,d,e,f,g,l,m,k=a[4].options.arrow&&a[4].options.attachTo&&a[4].options.attachTo.element&&a[4].options.attachTo.on&&yb();d=new uc({props:{descriptionId:a[2],labelId:a[3],step:a[4]}});let p=[{"aria-describedby":e=void 0!==a[4].options.text?a[2]:null},{"aria-labelledby":f=a[4].options.title?a[3]:
null},a[1],{role:"dialog"},{tabindex:"0"}],q={};for(let n=0;n<p.length;n+=1)q=Yb(q,p[n]);return{c(){b=document.createElement("div");k&&k.c();c=document.createTextNode(" ");ca(d.$$.fragment);nb(b,q);la(b,"shepherd-has-cancel-icon",a[5]);la(b,"shepherd-has-title",a[6]);la(b,"shepherd-element",!0)},m(n,r){n.insertBefore(b,r||null);k&&k.m(b,null);b.appendChild(c);W(d,b,null);a[13](b);g=!0;l||(m=ya(b,"keydown",a[7]),l=!0)},p(n,r){var [x]=r;n[4].options.arrow&&n[4].options.attachTo&&n[4].options.attachTo.element&&
n[4].options.attachTo.on?k||(k=yb(),k.c(),k.m(b,c)):k&&(k.d(1),k=null);r={};x&4&&(r.descriptionId=n[2]);x&8&&(r.labelId=n[3]);x&16&&(r.step=n[4]);d.$set(r);r=b;x=[(!g||x&20&&e!==(e=void 0!==n[4].options.text?n[2]:null))&&{"aria-describedby":e},(!g||x&24&&f!==(f=n[4].options.title?n[3]:null))&&{"aria-labelledby":f},x&2&&n[1],{role:"dialog"},{tabindex:"0"}];let h={},t={},v={$$scope:1},A=p.length;for(;A--;){let u=p[A],w=x[A];if(w){for(let y in u)y in w||(t[y]=1);for(let y in w)v[y]||(h[y]=w[y],v[y]=
1);p[A]=w}else for(let y in u)v[y]=1}for(let u in t)u in h||(h[u]=void 0);nb(r,q=h);la(b,"shepherd-has-cancel-icon",n[5]);la(b,"shepherd-has-title",n[6]);la(b,"shepherd-element",!0)},i(n){g||(z(d.$$.fragment,n),g=!0)},o(n){C(d.$$.fragment,n);g=!1},d(n){n&&H(b);k&&k.d();X(d);a[13](null);l=!1;m()}}}function zb(a){return a.split(" ").filter(b=>!!b.length)}function vc(a,b,c){let {classPrefix:d,element:e,descriptionId:f,firstFocusableElement:g,focusableElements:l,labelId:m,lastFocusableElement:k,step:p,
dataStepId:q}=b,n,r,x;za().$$.on_mount.push(()=>{c(1,q={[`data-${d}shepherd-step-id`]:p.id});c(9,l=e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'));c(8,g=l[0]);c(10,k=l[l.length-1])});za().$$.after_update.push(()=>{if(x!==p.options.classes){var h=x;qa(h)&&(h=zb(h),h.length&&e.classList.remove(...h));h=x=p.options.classes;qa(h)&&(h=zb(h),h.length&&e.classList.add(...h))}});a.$$set=h=>{"classPrefix"in
h&&c(11,d=h.classPrefix);"element"in h&&c(0,e=h.element);"descriptionId"in h&&c(2,f=h.descriptionId);"firstFocusableElement"in h&&c(8,g=h.firstFocusableElement);"focusableElements"in h&&c(9,l=h.focusableElements);"labelId"in h&&c(3,m=h.labelId);"lastFocusableElement"in h&&c(10,k=h.lastFocusableElement);"step"in h&&c(4,p=h.step);"dataStepId"in h&&c(1,q=h.dataStepId)};a.$$.update=()=>{a.$$.dirty&16&&(c(5,n=p.options&&p.options.cancelIcon&&p.options.cancelIcon.enabled),c(6,r=p.options&&p.options.title))};
return[e,q,f,m,p,n,r,h=>{const {tour:t}=p;switch(h.keyCode){case 9:if(0===l.length){h.preventDefault();break}if(h.shiftKey){if(document.activeElement===g||document.activeElement.classList.contains("shepherd-element"))h.preventDefault(),k.focus()}else document.activeElement===k&&(h.preventDefault(),g.focus());break;case 27:t.options.exitOnEsc&&p.cancel();break;case 37:t.options.keyboardNavigation&&t.back();break;case 39:t.options.keyboardNavigation&&t.next()}},g,l,k,d,()=>e,function(h){ma[h?"unshift":
"push"](()=>{e=h;c(0,e)})}]}function wc(a){a&&({steps:a}=a,a.forEach(b=>{b.options&&!1===b.options.canClickTarget&&b.options.attachTo&&b.target instanceof HTMLElement&&b.target.classList.remove("shepherd-target-click-disabled")}))}function xc(a){let b,c,d,e,f;return{c(){b=mb("svg");c=mb("path");B(c,"d",a[2]);B(b,"class",d=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);a[11](b);e||(f=ya(b,"touchmove",a[3]),e=!0)},p(g,l){[l]=
l;l&4&&B(c,"d",g[2]);l&2&&d!==(d=`${g[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)&&B(b,"class",d)},i:G,o:G,d(g){g&&H(b);a[11](null);e=!1;f()}}}function Ab(a){if(!a)return null;let b=a instanceof HTMLElement&&window.getComputedStyle(a).overflowY;return"hidden"!==b&&"visible"!==b&&a.scrollHeight>=a.clientHeight?a:Ab(a.parentElement)}function yc(a,b,c){function d(){c(4,p={width:0,height:0,x:0,y:0,r:0})}function e(){c(1,q=!1);l()}function f(h,t,v,A){void 0===h&&(h=0);void 0===
t&&(t=0);if(A){var u=A.getBoundingClientRect();let y=u.y||u.top;u=u.bottom||y+u.height;if(v){var w=v.getBoundingClientRect();v=w.y||w.top;w=w.bottom||v+w.height;y=Math.max(y,v);u=Math.min(u,w)}let {y:Y,height:E}={y,height:Math.max(u-y,0)},{x:I,width:D,left:na}=A.getBoundingClientRect();c(4,p={width:D+2*h,height:E+2*h,x:(I||na)-h,y:Y-h,r:t})}else d()}function g(){c(1,q=!0)}function l(){n&&(cancelAnimationFrame(n),n=void 0);window.removeEventListener("touchmove",x,{passive:!1})}function m(h){let {modalOverlayOpeningPadding:t,
modalOverlayOpeningRadius:v}=h.options,A=Ab(h.target),u=()=>{n=void 0;f(t,v,A,h.target);n=requestAnimationFrame(u)};u();window.addEventListener("touchmove",x,{passive:!1})}let {element:k,openingProperties:p}=b;Na();let q=!1,n=void 0,r;d();let x=h=>{h.preventDefault()};a.$$set=h=>{"element"in h&&c(0,k=h.element);"openingProperties"in h&&c(4,p=h.openingProperties)};a.$$.update=()=>{if(a.$$.dirty&16){let {width:h,height:t,x:v=0,y:A=0,r:u=0}=p,{innerWidth:w,innerHeight:y}=window;c(2,r=`M${w},${y}\
H0\
V0\
H${w}\
V${y}\
Z\
M${v+u},${A}\
a${u},${u},0,0,0-${u},${u}\
V${t+A-u}\
a${u},${u},0,0,0,${u},${u}\
H${h+v-u}\
a${u},${u},0,0,0,${u}-${u}\
V${A+u}\
a${u},${u},0,0,0-${u}-${u}\
Z`)}};return[k,q,r,h=>{h.stopPropagation()},p,()=>k,d,e,f,function(h){l();h.tour.options.useModalOverlay?(m(h),g()):e()},g,function(h){ma[h?"unshift":"push"](()=>{k=h;c(0,k)})}]}var Fb=function(a){var b;if(b=!!a&&"object"===typeof a)b=Object.prototype.toString.call(a),b=!("[object RegExp]"===b||"[object Date]"===b||a.$$typeof===zc);return b},zc="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;da.all=function(a,b){if(!Array.isArray(a))throw Error("first argument should be an array");
return a.reduce(function(c,d){return da(c,d,b)},{})};var Ac=da;class Ra{on(a,b,c,d){void 0===d&&(d=!1);void 0===this.bindings&&(this.bindings={});void 0===this.bindings[a]&&(this.bindings[a]=[]);this.bindings[a].push({handler:b,ctx:c,once:d});return this}once(a,b,c){return this.on(a,b,c,!0)}off(a,b){if(void 0===this.bindings||void 0===this.bindings[a])return this;void 0===b?delete this.bindings[a]:this.bindings[a].forEach((c,d)=>{c.handler===b&&this.bindings[a].splice(d,1)});return this}trigger(a){for(var b=
arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];void 0!==this.bindings&&this.bindings[a]&&this.bindings[a].forEach((e,f)=>{let {ctx:g,handler:l,once:m}=e;l.apply(g||this,c);m&&this.bindings[a].splice(f,1)});return this}}var ua=["top","bottom","right","left"],fb=ua.reduce(function(a,b){return a.concat([b+"-start",b+"-end"])},[]),eb=[].concat(ua,["auto"]).reduce(function(a,b){return a.concat([b,b+"-start",b+"-end"])},[]),Sb="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
L=Math.max,V=Math.min,ia=Math.round,Ib={top:"auto",right:"auto",bottom:"auto",left:"auto"},Da={passive:!0},Jb={left:"right",right:"left",bottom:"top",top:"bottom"},Kb={start:"end",end:"start"},Bb={placement:"bottom",modifiers:[],strategy:"absolute"},Bc=function(a){void 0===a&&(a={});var b=a.defaultModifiers,c=void 0===b?[]:b;a=a.defaultOptions;var d=void 0===a?Bb:a;return function(e,f,g){function l(){k.orderedModifiers.forEach(function(r){var x=r.name,h=r.options;h=void 0===h?{}:h;r=r.effect;"function"===
typeof r&&(x=r({state:k,name:x,instance:n,options:h}),p.push(x||function(){}))})}function m(){p.forEach(function(r){return r()});p=[]}void 0===g&&(g=d);var k={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bb,d),modifiersData:{},elements:{reference:e,popper:f},attributes:{},styles:{}},p=[],q=!1,n={state:k,setOptions:function(r){r="function"===typeof r?r(k.options):r;m();k.options=Object.assign({},d,k.options,r);k.scrollParents={reference:fa(e)?sa(e):e.contextElement?sa(e.contextElement):
[],popper:sa(f)};r=Rb(Ub([].concat(c,k.options.modifiers)));k.orderedModifiers=r.filter(function(x){return x.enabled});l();return n.update()},forceUpdate:function(){if(!q){var r=k.elements,x=r.reference;r=r.popper;if(ib(x,r))for(k.rects={reference:Pb(x,ra(r),"fixed"===k.options.strategy),popper:Fa(r)},k.reset=!1,k.placement=k.options.placement,k.orderedModifiers.forEach(function(v){return k.modifiersData[v.name]=Object.assign({},v.data)}),x=0;x<k.orderedModifiers.length;x++)if(!0===k.reset)k.reset=
!1,x=-1;else{var h=k.orderedModifiers[x];r=h.fn;var t=h.options;t=void 0===t?{}:t;h=h.name;"function"===typeof r&&(k=r({state:k,options:t,name:h,instance:n})||k)}}},update:Tb(function(){return new Promise(function(r){n.forceUpdate();r(k)})}),destroy:function(){m();q=!0}};if(!ib(e,f))return n;n.setOptions(g).then(function(r){if(!q&&g.onFirstUpdate)g.onFirstUpdate(r)});return n}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance;
a=a.options;var d=a.scroll,e=void 0===d?!0:d;a=a.resize;var f=void 0===a?!0:a,g=K(b.elements.popper),l=[].concat(b.scrollParents.reference,b.scrollParents.popper);e&&l.forEach(function(m){m.addEventListener("scroll",c.update,Da)});f&&g.addEventListener("resize",c.update,Da);return function(){e&&l.forEach(function(m){m.removeEventListener("scroll",c.update,Da)});f&&g.removeEventListener("resize",c.update,Da)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state;b.modifiersData[a.name]=
db({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options;a=c.gpuAcceleration;a=void 0===a?!0:a;var d=c.adaptive;d=void 0===d?!0:d;c=c.roundOffsets;c=void 0===c?!0:c;a={placement:N(b.placement),variation:ja(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:a,isFixed:"fixed"===b.options.strategy};null!=b.modifiersData.popperOffsets&&
(b.styles.popper=Object.assign({},b.styles.popper,$a(Object.assign({},a,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:d,roundOffsets:c}))));null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,$a(Object.assign({},a,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c}))));b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",
fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(c){var d=b.styles[c]||{},e=b.attributes[c]||{},f=b.elements[c];F(f)&&M(f)&&(Object.assign(f.style,d),Object.keys(e).forEach(function(g){var l=e[g];!1===l?f.removeAttribute(g):f.setAttribute(g,!0===l?"":l)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(b.elements.popper.style,c.popper);b.styles=c;b.elements.arrow&&
Object.assign(b.elements.arrow.style,c.arrow);return function(){Object.keys(b.elements).forEach(function(d){var e=b.elements[d],f=b.attributes[d]||{};d=Object.keys(b.styles.hasOwnProperty(d)?b.styles[d]:c[d]).reduce(function(g,l){g[l]="";return g},{});F(e)&&M(e)&&(Object.assign(e.style,d),Object.keys(f).forEach(function(g){e.removeAttribute(g)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.name;a=a.options.offset;
var d=void 0===a?[0,0]:a;a=eb.reduce(function(g,l){var m=b.rects;var k=N(l);var p=0<=["left","top"].indexOf(k)?-1:1,q="function"===typeof d?d(Object.assign({},m,{placement:l})):d;m=q[0];q=q[1];m=m||0;q=(q||0)*p;k=0<=["left","right"].indexOf(k)?{x:q,y:m}:{x:m,y:q};g[l]=k;return g},{});var e=a[b.placement],f=e.x;e=e.y;null!=b.modifiersData.popperOffsets&&(b.modifiersData.popperOffsets.x+=f,b.modifiersData.popperOffsets.y+=e);b.modifiersData[c]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(a){var b=
a.state,c=a.options;a=a.name;if(!b.modifiersData[a]._skip){var d=c.mainAxis;d=void 0===d?!0:d;var e=c.altAxis;e=void 0===e?!0:e;var f=c.fallbackPlacements,g=c.padding,l=c.boundary,m=c.rootBoundary,k=c.altBoundary,p=c.flipVariations,q=void 0===p?!0:p,n=c.allowedAutoPlacements;c=b.options.placement;p=N(c);f=f||(p!==c&&q?Ob(c):[xa(c)]);var r=[c].concat(f).reduce(function(E,I){return E.concat("auto"===N(I)?Nb(b,{placement:I,boundary:l,rootBoundary:m,padding:g,flipVariations:q,allowedAutoPlacements:n}):
I)},[]);c=b.rects.reference;f=b.rects.popper;var x=new Map;p=!0;for(var h=r[0],t=0;t<r.length;t++){var v=r[t],A=N(v),u="start"===ja(v),w=0<=["top","bottom"].indexOf(A),y=w?"width":"height",Y=ta(b,{placement:v,boundary:l,rootBoundary:m,altBoundary:k,padding:g});u=w?u?"right":"left":u?"bottom":"top";c[y]>f[y]&&(u=xa(u));y=xa(u);w=[];d&&w.push(0>=Y[A]);e&&w.push(0>=Y[u],0>=Y[y]);if(w.every(function(E){return E})){h=v;p=!1;break}x.set(v,w)}if(p)for(d=function(E){var I=r.find(function(D){if(D=x.get(D))return D.slice(0,
E).every(function(na){return na})});if(I)return h=I,"break"},e=q?3:1;0<e&&"break"!==d(e);e--);b.placement!==h&&(b.modifiersData[a]._skip=!0,b.placement=h,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options;a=a.name;var d=c.mainAxis,e=void 0===d?!0:d;d=c.altAxis;var f=void 0===d?!1:d;d=c.tether;var g=void 0===d?!0:d;d=c.tetherOffset;var l=void 0===d?0:d,m=ta(b,{boundary:c.boundary,rootBoundary:c.rootBoundary,
padding:c.padding,altBoundary:c.altBoundary}),k=N(b.placement),p=ja(b.placement),q=!p,n=Ga(k);c="x"===n?"y":"x";d=b.modifiersData.popperOffsets;var r=b.rects.reference,x=b.rects.popper;l="function"===typeof l?l(Object.assign({},b.rects,{placement:b.placement})):l;var h="number"===typeof l?{mainAxis:l,altAxis:l}:Object.assign({mainAxis:0,altAxis:0},l),t=b.modifiersData.offset?b.modifiersData.offset[b.placement]:null;l={x:0,y:0};if(d){if(e){var v,A="y"===n?"top":"left",u="y"===n?"bottom":"right",w=
"y"===n?"height":"width";e=d[n];var y=e+m[A],Y=e-m[u],E=g?-x[w]/2:0,I="start"===p?r[w]:x[w];p="start"===p?-x[w]:-r[w];var D=b.elements.arrow;D=g&&D?Fa(D):{width:0,height:0};var na=b.modifiersData["arrow#persistent"]?b.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};A=na[A];u=na[u];D=L(0,V(r[w],D[w]));I=q?r[w]/2-E-D-A-h.mainAxis:I-D-A-h.mainAxis;q=q?-r[w]/2+E+D+u+h.mainAxis:p+D+u+h.mainAxis;w=(w=b.elements.arrow&&ra(b.elements.arrow))?"y"===n?w.clientTop||0:w.clientLeft||
0:0;E=null!=(v=null==t?void 0:t[n])?v:0;v=e+q-E;y=g?V(y,e+I-E-w):y;v=g?L(Y,v):Y;v=L(y,V(e,v));d[n]=v;l[n]=v-e}if(f){var J;f=d[c];e="y"===c?"height":"width";v=f+m["x"===n?"top":"left"];m=f-m["x"===n?"bottom":"right"];k=-1!==["top","left"].indexOf(k);n=null!=(J=null==t?void 0:t[c])?J:0;J=k?v:f-r[e]-x[e]-n+h.altAxis;r=k?f+r[e]+x[e]-n-h.altAxis:m;g&&k?(J=L(J,V(f,r)),J=J>r?r:J):J=L(g?J:v,V(f,g?r:m));d[c]=J;l[c]=J-f}b.modifiersData[a]=l}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",
fn:function(a){var b,c=a.state,d=a.name,e=a.options,f=c.elements.arrow,g=c.modifiersData.popperOffsets,l=N(c.placement);a=Ga(l);l=0<=["left","right"].indexOf(l)?"height":"width";if(f&&g){e=e.padding;e="function"===typeof e?e(Object.assign({},c.rects,{placement:c.placement})):e;e=Ya("number"!==typeof e?e:Za(e,ua));var m=Fa(f),k="y"===a?"top":"left",p="y"===a?"bottom":"right",q=c.rects.reference[l]+c.rects.reference[a]-g[a]-c.rects.popper[l];g=g[a]-c.rects.reference[a];f=(f=ra(f))?"y"===a?f.clientHeight||
0:f.clientWidth||0:0;g=f/2-m[l]/2+(q/2-g/2);l=L(e[k],V(g,f-m[l]-e[p]));c.modifiersData[d]=(b={},b[a]=l,b.centerOffset=l-g,b)}},effect:function(a){var b=a.state;a=a.options.element;a=void 0===a?"[data-popper-arrow]":a;if(null!=a){if("string"===typeof a&&(a=b.elements.popper.querySelector(a),!a))return;Wa(b.elements.popper,a)&&(b.elements.arrow=a)}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=
a.state;a=a.name;var c=b.rects.reference,d=b.rects.popper,e=b.modifiersData.preventOverflow,f=ta(b,{elementContext:"reference"}),g=ta(b,{altBoundary:!0});c=gb(f,c);d=gb(g,d,e);e=hb(c);g=hb(d);b.modifiersData[a]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:e,hasPopperEscaped:g};b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":e,"data-popper-escaped":g})}}]});let R,va=[],ma=[],Aa=[],pb=[],Zb=Promise.resolve(),Qa=!1,Pa=new Set,Ba=0,Ca=new Set,
aa;class T{$destroy(){X(this,1);this.$destroy=G}$on(a,b){let c=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);c.push(b);return()=>{let d=c.indexOf(b);-1!==d&&c.splice(d,1)}}$set(a){this.$$set&&0!==Object.keys(a).length&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}class bc extends T{constructor(a){super();S(this,a,ac,$b,Q,{config:6,step:7})}}class qc extends T{constructor(a){super();S(this,a,dc,cc,Q,{step:0})}}class jc extends T{constructor(a){super();S(this,a,fc,ec,Q,{cancelIcon:0,
step:2})}}class ic extends T{constructor(a){super();S(this,a,hc,gc,Q,{labelId:1,element:0,title:2})}}class oc extends T{constructor(a){super();S(this,a,lc,kc,Q,{labelId:0,step:1})}}class pc extends T{constructor(a){super();S(this,a,nc,mc,Q,{descriptionId:1,element:0,step:2})}}class uc extends T{constructor(a){super();S(this,a,sc,rc,Q,{descriptionId:0,labelId:1,step:2})}}class Cc extends T{constructor(a){super();S(this,a,vc,tc,Q,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,
labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}var Cb=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){(function(){a.exports={polyfill:function(){function c(h,t){this.scrollLeft=h;this.scrollTop=t}function d(h){if(null===h||"object"!==typeof h||void 0===h.behavior||"auto"===h.behavior||"instant"===h.behavior)return!0;if("object"===typeof h&&"smooth"===h.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+
h.behavior+" is not a valid value for enumeration ScrollBehavior.");}function e(h,t){if("Y"===t)return h.clientHeight+x<h.scrollHeight;if("X"===t)return h.clientWidth+x<h.scrollWidth}function f(h,t){h=k.getComputedStyle(h,null)["overflow"+t];return"auto"===h||"scroll"===h}function g(h){var t=e(h,"Y")&&f(h,"Y");h=e(h,"X")&&f(h,"X");return t||h}function l(h){var t=(r()-h.startTime)/468;var v=.5*(1-Math.cos(Math.PI*(1<t?1:t)));t=h.startX+(h.x-h.startX)*v;v=h.startY+(h.y-h.startY)*v;h.method.call(h.scrollable,
t,v);t===h.x&&v===h.y||k.requestAnimationFrame(l.bind(k,h))}function m(h,t,v){var A=r();if(h===p.body){var u=k;var w=k.scrollX||k.pageXOffset;h=k.scrollY||k.pageYOffset;var y=n.scroll}else u=h,w=h.scrollLeft,h=h.scrollTop,y=c;l({scrollable:u,method:y,startTime:A,startX:w,startY:h,x:t,y:v})}var k=window,p=document;if(!("scrollBehavior"in p.documentElement.style&&!0!==k.__forceSmoothScrollPolyfill__)){var q=k.HTMLElement||k.Element,n={scroll:k.scroll||k.scrollTo,scrollBy:k.scrollBy,elementScroll:q.prototype.scroll||
c,scrollIntoView:q.prototype.scrollIntoView},r=k.performance&&k.performance.now?k.performance.now.bind(k.performance):Date.now,x=/MSIE |Trident\/|Edge\//.test(k.navigator.userAgent)?1:0;k.scroll=k.scrollTo=function(h,t){void 0!==h&&(!0===d(h)?n.scroll.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:k.scrollX||k.pageXOffset,void 0!==h.top?h.top:void 0!==t?t:k.scrollY||k.pageYOffset):m.call(k,p.body,void 0!==h.left?~~h.left:k.scrollX||k.pageXOffset,void 0!==h.top?~~h.top:k.scrollY||k.pageYOffset))};
k.scrollBy=function(h,t){void 0!==h&&(d(h)?n.scrollBy.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:0,void 0!==h.top?h.top:void 0!==t?t:0):m.call(k,p.body,~~h.left+(k.scrollX||k.pageXOffset),~~h.top+(k.scrollY||k.pageYOffset)))};q.prototype.scroll=q.prototype.scrollTo=function(h,t){if(void 0!==h)if(!0===d(h)){if("number"===typeof h&&void 0===t)throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==h.left?~~h.left:"object"!==typeof h?~~h:this.scrollLeft,void 0!==
h.top?~~h.top:void 0!==t?~~t:this.scrollTop)}else t=h.left,h=h.top,m.call(this,this,"undefined"===typeof t?this.scrollLeft:~~t,"undefined"===typeof h?this.scrollTop:~~h)};q.prototype.scrollBy=function(h,t){void 0!==h&&(!0===d(h)?n.elementScroll.call(this,void 0!==h.left?~~h.left+this.scrollLeft:~~h+this.scrollLeft,void 0!==h.top?~~h.top+this.scrollTop:~~t+this.scrollTop):this.scroll({left:~~h.left+this.scrollLeft,top:~~h.top+this.scrollTop,behavior:h.behavior}))};q.prototype.scrollIntoView=function(h){if(!0===
d(h))n.scrollIntoView.call(this,void 0===h?!0:h);else{for(h=this;h!==p.body&&!1===g(h);)h=h.parentNode||h.host;var t=h.getBoundingClientRect(),v=this.getBoundingClientRect();h!==p.body?(m.call(this,h,h.scrollLeft+v.left-t.left,h.scrollTop+v.top-t.top),"fixed"!==k.getComputedStyle(h).position&&k.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):k.scrollBy({left:v.left,top:v.top,behavior:"smooth"})}}}}}})()});Cb.polyfill;Cb.polyfill();class Sa extends Ra{constructor(a,b){void 0===b&&(b={});super(a,
b);this.tour=a;this.classPrefix=this.tour.options?jb(this.tour.options.classPrefix):"";this.styles=a.styles;Va(this);this._setOptions(b);return this}cancel(){this.tour.cancel();this.trigger("cancel")}complete(){this.tour.complete();this.trigger("complete")}destroy(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null);this.el instanceof HTMLElement&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null);this._updateStepTargetOnHide();this.trigger("destroy")}getTour(){return this.tour}hide(){this.tour.modal.hide();
this.trigger("before-hide");this.el&&(this.el.hidden=!0);this._updateStepTargetOnHide();this.trigger("hide")}isCentered(){let a=Ma(this);return!a.element||!a.on}isOpen(){return!(!this.el||this.el.hidden)}show(){if(ea(this.options.beforeShowPromise)){let a=this.options.beforeShowPromise();if(void 0!==a)return a.then(()=>this._show())}this._show()}updateStepOptions(a){Object.assign(this.options,a);this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){this.shepherdElementComponent=
new Cc({target:this.tour.options.stepsContainer||document.body,props:{classPrefix:this.classPrefix,descriptionId:`${this.id}-description`,labelId:`${this.id}-label`,step:this,styles:this.styles}});return this.shepherdElementComponent.getElement()}_scrollTo(a){let {element:b}=Ma(this);ea(this.options.scrollToHandler)?this.options.scrollToHandler(b):b instanceof Element&&"function"===typeof b.scrollIntoView&&b.scrollIntoView(a)}_getClassOptions(a){var b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;
b=b&&b.classes?b.classes:"";a=[...(a.classes?a.classes:"").split(" "),...b.split(" ")];a=new Set(a);return Array.from(a).join(" ").trim()}_setOptions(a){void 0===a&&(a={});let b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=Ac({},b||{});this.options=Object.assign({arrow:!0},b,a);let {when:c}=this.options;this.options.classes=this._getClassOptions(a);this.destroy();this.id=this.options.id||`step-${Na()}`;c&&Object.keys(c).forEach(d=>{this.on(d,c[d],this)})}_setupElements(){void 0!==
this.el&&this.destroy();this.el=this._createTooltipContent();this.options.advanceOn&&Hb(this);this.tooltip&&this.tooltip.destroy();let a=Ma(this),b=a.element,c=Xb(a,this);this.isCentered()&&(b=document.body,this.shepherdElementComponent.getElement().classList.add("shepherd-centered"));this.tooltip=Bc(b,this.el,c);this.target=a.element}_show(){this.trigger("before-show");this._setupElements();this.tour.modal||this.tour._setupModal();this.tour.modal.setupForStep(this);this._styleTargetElementForStep(this);
this.el.hidden=!1;this.options.scrollTo&&setTimeout(()=>{this._scrollTo(this.options.scrollTo)});this.el.hidden=!1;let a=this.shepherdElementComponent.getElement(),b=this.target||document.body;b.classList.add(`${this.classPrefix}shepherd-enabled`);b.classList.add(`${this.classPrefix}shepherd-target`);a.classList.add("shepherd-enabled");this.trigger("show")}_styleTargetElementForStep(a){let b=a.target;b&&(a.options.highlightClass&&b.classList.add(a.options.highlightClass),b.classList.remove("shepherd-target-click-disabled"),
!1===a.options.canClickTarget&&b.classList.add("shepherd-target-click-disabled"))}_updateStepTargetOnHide(){let a=this.target||document.body;this.options.highlightClass&&a.classList.remove(this.options.highlightClass);a.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}}class Dc extends T{constructor(a){super();S(this,a,yc,xc,Q,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,
show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}let oa=new Ra;class Ec extends Ra{constructor(a){void 0===a&&(a={});super(a);Va(this);this.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},a);this.classPrefix=jb(this.options.classPrefix);this.steps=[];this.addSteps(this.options.steps);"active cancel complete inactive show start".split(" ").map(b=>
{(c=>{this.on(c,d=>{d=d||{};d.tour=this;oa.trigger(c,d)})})(b)});this._setTourID();return this}addStep(a,b){a instanceof Sa?a.tour=this:a=new Sa(this,a);void 0!==b?this.steps.splice(b,0,a):this.steps.push(a);return a}addSteps(a){Array.isArray(a)&&a.forEach(b=>{this.addStep(b)});return this}back(){let a=this.steps.indexOf(this.currentStep);this.show(a-1,!1)}cancel(){this.options.confirmCancel?window.confirm(this.options.confirmCancelMessage||"Are you sure you want to stop the tour?")&&this._done("cancel"):
this._done("cancel")}complete(){this._done("complete")}getById(a){return this.steps.find(b=>b.id===a)}getCurrentStep(){return this.currentStep}hide(){let a=this.getCurrentStep();if(a)return a.hide()}isActive(){return oa.activeTour===this}next(){let a=this.steps.indexOf(this.currentStep);a===this.steps.length-1?this.complete():this.show(a+1,!0)}removeStep(a){let b=this.getCurrentStep();this.steps.some((c,d)=>{if(c.id===a)return c.isOpen()&&c.hide(),c.destroy(),this.steps.splice(d,1),!0});b&&b.id===
a&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(a,b){void 0===a&&(a=0);void 0===b&&(b=!0);if(a=qa(a)?this.getById(a):this.steps[a])this._updateStateBeforeShow(),ea(a.options.showOn)&&!a.options.showOn()?this._skipStep(a,b):(this.trigger("show",{step:a,previous:this.currentStep}),this.currentStep=a,a.show())}start(){this.trigger("start");this.focusedElBeforeOpen=document.activeElement;this.currentStep=null;this._setupModal();this._setupActiveTour();this.next()}_done(a){let b=
this.steps.indexOf(this.currentStep);Array.isArray(this.steps)&&this.steps.forEach(c=>c.destroy());wc(this);this.trigger(a,{index:b});oa.activeTour=null;this.trigger("inactive",{tour:this});this.modal&&this.modal.hide();"cancel"!==a&&"complete"!==a||!this.modal||(a=document.querySelector(".shepherd-modal-overlay-container"))&&a.remove();this.focusedElBeforeOpen instanceof HTMLElement&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this});oa.activeTour=this}_setupModal(){this.modal=
new Dc({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}_skipStep(a,b){a=this.steps.indexOf(a);a===this.steps.length-1?this.complete():this.show(b?a+1:a-1,b)}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide();this.isActive()||this._setupActiveTour()}_setTourID(){this.id=`${this.options.tourName||"tour"}--${Na()}`}}Object.assign(oa,{Tour:Ec,Step:Sa});return oa})

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Backbone, Drupal, settings, document, Shepherd) {
  var queryString = decodeURI(window.location.search);
  Drupal.behaviors.tour = {
    attach: function attach(context) {
      once('tour', 'body').forEach(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });
        model.on('change:isActive', function (tourModel, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        });
        if (settings._tour_internal) {
          model.set('tour', settings._tour_internal);
        }
        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };
  Drupal.tour = Drupal.tour || {
    models: {},
    views: {}
  };
  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],
      isActive: false,
      activeTour: []
    }
  });
  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: {
      click: 'onClick'
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);
      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).attr('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        this._removeIrrelevantTourItems(this._getTour());
        var tourItems = this.model.get('tour');
        var that = this;
        if (tourItems.length) {
          settings.tourShepherdConfig.defaultStepOptions.popperOptions.modifiers.push({
            name: 'moveArrowJoyridePosition',
            enabled: true,
            phase: 'write',
            fn: function fn(_ref) {
              var state = _ref.state;
              var arrow = state.elements.arrow;
              var placement = state.placement;
              if (arrow && /^top|bottom/.test(placement) && /-start|-end$/.test(placement)) {
                var horizontalPosition = placement.split('-')[1];
                var offset = horizontalPosition === 'start' ? 28 : state.elements.popper.clientWidth - 56;
                arrow.style.transform = "translate3d(".concat(offset, "px, 0px, 0px)");
              }
            }
          });
          var shepherdTour = new Shepherd.Tour(settings.tourShepherdConfig);
          shepherdTour.on('cancel', function () {
            that.model.set('isActive', false);
          });
          shepherdTour.on('complete', function () {
            that.model.set('isActive', false);
          });
          tourItems.forEach(function (tourStepConfig, index) {
            var tourItemOptions = {
              title: tourStepConfig.title ? Drupal.checkPlain(tourStepConfig.title) : null,
              text: function text() {
                return Drupal.theme('tourItemContent', tourStepConfig);
              },
              attachTo: tourStepConfig.attachTo,
              buttons: [Drupal.tour.nextButton(shepherdTour, tourStepConfig)],
              classes: tourStepConfig.classes,
              index: index
            };
            tourItemOptions.when = {
              show: function show() {
                var nextButton = shepherdTour.currentStep.el.querySelector('footer button');
                nextButton.focus();
                if (Drupal.tour.hasOwnProperty('convertToJoyrideMarkup')) {
                  Drupal.tour.convertToJoyrideMarkup(shepherdTour);
                }
              }
            };
            shepherdTour.addStep(tourItemOptions);
          });
          shepherdTour.start();
          this.model.set({
            isActive: true,
            activeTour: shepherdTour
          });
        }
      } else {
        this.model.get('activeTour').cancel();
        this.model.set({
          isActive: false,
          activeTour: []
        });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems(tourItems) {
      var tips = /tips=([^&]+)/.exec(queryString);
      var filteredTour = tourItems.filter(function (tourItem) {
        if (tips && tourItem.hasOwnProperty('classes') && tourItem.classes.indexOf(tips[1]) === -1) {
          return false;
        }
        return !(tourItem.selector && !document.querySelector(tourItem.selector));
      });
      if (tourItems.length !== filteredTour.length) {
        filteredTour.forEach(function (filteredTourItem, filteredTourItemId) {
          filteredTour[filteredTourItemId].counter = Drupal.t('!tour_item of !total', {
            '!tour_item': filteredTourItemId + 1,
            '!total': filteredTour.length
          });
          if (filteredTourItemId === filteredTour.length - 1) {
            filteredTour[filteredTourItemId].cancelText = Drupal.t('End tour');
          }
        });
        this.model.set('tour', filteredTour);
      }
    }
  });
  Drupal.tour.nextButton = function (shepherdTour, tourStepConfig) {
    return {
      classes: 'button button--primary',
      text: tourStepConfig.cancelText ? tourStepConfig.cancelText : Drupal.t('Next'),
      action: tourStepConfig.cancelText ? shepherdTour.cancel : shepherdTour.next
    };
  };
  Drupal.theme.tourItemContent = function (tourStepConfig) {
    return "".concat(tourStepConfig.body, "<div class=\"tour-progress\">").concat(tourStepConfig.counter, "</div>");
  };
})(jQuery, Backbone, Drupal, drupalSettings, document, window.Shepherd);;
(function ($, Drupal) {
  Drupal.behaviors.adminToolbar = {
    attach: function (context, settings) {

      $('a.toolbar-icon', context).removeAttr('title');

      // Make the toolbar menu navigable with keyboard.
      $('ul.toolbar-menu li.menu-item--expanded a', context).on('focusin', function () {
        $('li.menu-item--expanded', context).removeClass('hover-intent');
        $(this).parents('li.menu-item--expanded').addClass('hover-intent');
      });

      $('ul.toolbar-menu li.menu-item a', context).keydown(function (e) {
        if ((e.shiftKey && (e.keyCode || e.which) == 9)) {
          if ($(this).parent('.menu-item').prev().hasClass('menu-item--expanded')) {
            $(this).parent('.menu-item').prev().addClass('hover-intent');
          }
        }
      });

      $('.toolbar-menu:first-child > .menu-item:not(.menu-item--expanded) a, .toolbar-tab > a', context).on('focusin', function () {
        $('.menu-item--expanded').removeClass('hover-intent');
      });

      $('.toolbar-menu:first-child > .menu-item', context).on('hover', function () {
        $(this, 'a').css("background: #fff;");
      });

      $('ul:not(.toolbar-menu)', context).on({
        mousemove: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        },
        hover: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        }
      });

      // Always hide the dropdown menu on mobile.
      if (window.matchMedia("(max-width: 767px)").matches && $('body').hasClass('toolbar-tray-open')) {
        $('body').removeClass('toolbar-tray-open');
        $('#toolbar-item-administration').removeClass('is-active');
        $('#toolbar-item-administration-tray').removeClass('is-active');
      };

    }
  };
})(jQuery, Drupal);
;
;/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */

/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (jQuery && !jQuery.fn.hoverIntent) {
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  // default configuration values
  var _cfg = {
    interval: 100,
    sensitivity: 6,
    timeout: 0
  };

  // counter used to generate an ID for each instance
  var INSTANCE_COUNT = 0;

  // current X and Y position of mouse, updated during mousemove tracking (shared across instances)
  var cX, cY;

  // saves the current pointer position coordinates based on the given mousemove event
  var track = function (ev) {
    cX = ev.pageX;
    cY = ev.pageY;
  };

  // compares current and previous mouse positions
  var compare = function (ev,$el,s,cfg) {
    // compare mouse positions to see if pointer has slowed enough to trigger `over` function
    if ( Math.sqrt( (s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY) ) < cfg.sensitivity ) {
      $el.off(s.event,track);
      delete s.timeoutId;
      // set hoverIntent state as active for this element (permits `out` handler to trigger)
      s.isActive = true;
      // overwrite old mouseenter event coordinates with most recent pointer position
      ev.pageX = cX; ev.pageY = cY;
      // clear coordinate data from state object
      delete s.pX; delete s.pY;
      return cfg.over.apply($el[0],[ev]);
    } else {
      // set previous coordinates for next comparison
      s.pX = cX; s.pY = cY;
      // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
      s.timeoutId = setTimeout( function () {compare(ev, $el, s, cfg);} , cfg.interval );
    }
  };

  // triggers given `out` function at configured `timeout` after a mouseleave and clears state
  var delay = function (ev,$el,s,out) {
    delete $el.data('hoverIntent')[s.id];
    return out.apply($el[0],[ev]);
  };

  $.fn.hoverIntent = function (handlerIn,handlerOut,selector) {
    // instance ID, used as a key to store and retrieve state information on an element
    var instanceId = INSTANCE_COUNT++;

    // extend the default configuration and parse parameters
    var cfg = $.extend({}, _cfg);
    if ( $.isPlainObject(handlerIn) ) {
      cfg = $.extend(cfg, handlerIn);
      if ( !$.isFunction(cfg.out) ) {
        cfg.out = cfg.over;
      }
    } else if ( $.isFunction(handlerOut) ) {
      cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
    } else {
      cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
    }

    // A private function for handling mouse 'hovering'
    var handleHover = function (e) {
      // cloned event to pass to handlers (copy required for event object to be passed in IE)
      var ev = $.extend({},e);

      // the current target of the mouse event, wrapped in a jQuery object
      var $el = $(this);

      // read hoverIntent data from element (or initialize if not present)
      var hoverIntentData = $el.data('hoverIntent');
      if (!hoverIntentData) { $el.data('hoverIntent', (hoverIntentData = {})); }

      // read per-instance state from element (or initialize if not present)
      var state = hoverIntentData[instanceId];
      if (!state) { hoverIntentData[instanceId] = state = { id: instanceId }; }

      // state properties:
      // id = instance ID, used to clean up data
      // timeoutId = timeout ID, reused for tracking mouse position and delaying "out" handler
      // isActive = plugin state, true after `over` is called just until `out` is called
      // pX, pY = previously-measured pointer coordinates, updated at each polling interval
      // event = string representing the namespaced event used for mouse tracking

      // clear any existing timeout
      if (state.timeoutId) { state.timeoutId = clearTimeout(state.timeoutId); }

      // namespaced event used to register and unregister mousemove tracking
      var mousemove = state.event = 'mousemove.hoverIntent.hoverIntent' + instanceId;

      // handle the event, based on its type
      if (e.type === 'mouseenter') {
        // do nothing if already active
        if (state.isActive) { return; }
        // set "previous" X and Y position based on initial entry point
        state.pX = ev.pageX; state.pY = ev.pageY;
        // update "current" X and Y position based on mousemove
        $el.off(mousemove,track).on(mousemove,track);
        // start polling interval (self-calling timeout) to compare mouse coordinates over time
        state.timeoutId = setTimeout( function () {compare(ev,$el,state,cfg);} , cfg.interval );
      } else { // "mouseleave"
        // do nothing if not already active
        if (!state.isActive) { return; }
        // unbind expensive mousemove event
        $el.off(mousemove,track);
        // if hoverIntent state is true, then call the mouseOut function after the specified delay
        state.timeoutId = setTimeout( function () {delay(ev,$el,state,cfg.out);} , cfg.timeout );
      }
    };

    // listen for mouseenter and mouseleave
    return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
  };
});
;
(function ($) {
  $(document).ready(function () {
    $('.toolbar-tray-horizontal li.menu-item--expanded, .toolbar-tray-horizontal ul li.menu-item--expanded .menu-item').hoverIntent({
      over: function () {
        // At the current depth, we should delete all "hover-intent" classes.
        // Other wise we get unwanted behaviour where menu items are expanded while already in hovering other ones.
        $(this).parent().find('li').removeClass('hover-intent');
        $(this).addClass('hover-intent');
      },
      out: function () {
        $(this).removeClass('hover-intent');
      },
      timeout: 250
    });
  });
})(jQuery);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;
  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }
  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var toolbarEscape = once('escapeAdmin', '[data-toolbar-escape-admin]');
      if (toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $(toolbarEscape).attr('href', escapeAdminPath);
        } else {
          toolbarEscape[0].textContent = Drupal.t('Home');
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function ($, Drupal, _ref) {
  var tabbable = _ref.tabbable,
    isTabbable = _ref.isTabbable;
  function TabbingManager() {
    this.stack = [];
  }
  function TabbingContext(options) {
    $.extend(this, {
      level: null,
      $tabbableElements: $(),
      $disabledElements: $(),
      released: false,
      active: false,
      trapFocus: false
    }, options);
  }
  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$trapFocus = _ref2.trapFocus,
        trapFocus = _ref2$trapFocus === void 0 ? false : _ref2$trapFocus;
      var il = this.stack.length;
      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }
      var tabbableElements = [];
      $(elements).each(function (index, rootElement) {
        tabbableElements = [].concat(_toConsumableArray(tabbableElements), _toConsumableArray(tabbable(rootElement)));
        if (isTabbable(rootElement)) {
          tabbableElements = [].concat(_toConsumableArray(tabbableElements), [rootElement]);
        }
      });
      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $(tabbableElements),
        trapFocus: trapFocus
      });
      this.stack.push(tabbingContext);
      tabbingContext.activate();
      $(document).trigger('drupalTabbingConstrained', tabbingContext);
      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;
      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }
      this.stack.splice(toActivate + 1);
      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;
      var $disabledSet = $(tabbable(document.body)).not($set);
      tabbingContext.$disabledElements = $disabledSet;
      var il = $disabledSet.length;
      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }
      $disabledSet.prop('tabindex', -1).prop('autofocus', false);
      var $hasFocus = $set.filter('[autofocus]').eq(-1);
      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }
      $hasFocus.trigger('focus');
      if ($set.length && tabbingContext.trapFocus) {
        $set.last().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && !event.shiftKey) {
            event.preventDefault();
            $set.first().focus();
          }
        });
        $set.first().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && event.shiftKey) {
            event.preventDefault();
            $set.last().focus();
          }
        });
      }
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      tabbingContext.$tabbableElements.first().off('keydown.focus-trap');
      tabbingContext.$tabbableElements.last().off('keydown.focus-trap');
      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');
      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];
        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
          $el[0].removeAttribute('tabindex');
        }
        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }
        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;
          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }
          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });
  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);
        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);
        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);
        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });
  if (Drupal.tabbingManager) {
    return;
  }
  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };
  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }
    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });
    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }
  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if (once('contextualToolbar-init', 'body').length) {
        initContextualToolbar(context);
      }
    }
  };
  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,
      isVisible: false,
      contextualCount: 0,
      tabbingContext: null
    },
    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);
      this.listenTo(this, 'change:contextualCount', this.updateVisibility);
      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);
      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));
      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');
      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }
        tabbingContext.release();
      }
      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },
        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));
      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));
      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  var blockConfigureSelector = '[data-settings-tray-edit]';
  var toggleEditSelector = '[data-drupal-settingstray="toggle"]';
  var itemsToToggleSelector = '[data-off-canvas-main-canvas], #toolbar-bar, [data-drupal-settingstray="editable"] a, [data-drupal-settingstray="editable"] button';
  var contextualItemsSelector = '[data-contextual-id] a, [data-contextual-id] button';
  var quickEditItemSelector = '[data-quickedit-entity-id]';
  function preventClick(event) {
    if ($(event.target).closest('.contextual-links').length) {
      return;
    }
    event.preventDefault();
  }
  function closeToolbarTrays() {
    $(Drupal.toolbar.models.toolbarModel.get('activeTab')).trigger('click');
  }
  function disableQuickEdit() {
    $('.quickedit-toolbar button.action-cancel').trigger('click');
  }
  function closeOffCanvas() {
    $('.ui-dialog-off-canvas .ui-dialog-titlebar-close').trigger('click');
  }
  function getItemsToToggle() {
    return $(itemsToToggleSelector).not(contextualItemsSelector);
  }
  function setEditModeState(editMode) {
    if (!document.querySelector('[data-off-canvas-main-canvas]')) {
      throw new Error('data-off-canvas-main-canvas is missing from settings-tray-page-wrapper.html.twig');
    }
    editMode = !!editMode;
    var $editables;
    var editButton = document.querySelector(toggleEditSelector);
    if (editMode) {
      if (editButton) {
        editButton.textContent = Drupal.t('Editing');
      }
      closeToolbarTrays();
      $editables = $(once('settingstray', '[data-drupal-settingstray="editable"]'));
      if ($editables.length) {
        document.querySelector('[data-off-canvas-main-canvas]').addEventListener('click', preventClick, true);
        $editables.not(contextualItemsSelector).on('click.settingstray', function (e) {
          if ($(e.target).closest('.contextual').length || !localStorage.getItem('Drupal.contextualToolbar.isViewing')) {
            return;
          }
          $(e.currentTarget).find(blockConfigureSelector).trigger('click');
          disableQuickEdit();
        });
        $(quickEditItemSelector).not(contextualItemsSelector).on('click.settingstray', function (e) {
          if (!$(e.target).parent().hasClass('contextual') || $(e.target).parent().hasClass('quickedit')) {
            closeOffCanvas();
          }
          if ($(e.target).parent().hasClass('contextual') || $(e.target).parent().hasClass('quickedit')) {
            return;
          }
          $(e.currentTarget).find('li.quickedit a').trigger('click');
        });
      }
    } else {
      $editables = $(once.remove('settingstray', '[data-drupal-settingstray="editable"]'));
      if ($editables.length) {
        document.querySelector('[data-off-canvas-main-canvas]').removeEventListener('click', preventClick, true);
        $editables.off('.settingstray');
        $(quickEditItemSelector).off('.settingstray');
      }
      if (editButton) {
        editButton.textContent = Drupal.t('Edit');
      }
      closeOffCanvas();
      disableQuickEdit();
    }
    getItemsToToggle().toggleClass('js-settings-tray-edit-mode', editMode);
    $('.edit-mode-inactive').toggleClass('visually-hidden', editMode);
  }
  function isInEditMode() {
    return $('#toolbar-bar').hasClass('js-settings-tray-edit-mode');
  }
  function toggleEditMode() {
    setEditModeState(!isInEditMode());
  }
  function prepareAjaxLinks() {
    Drupal.ajax.instances.filter(function (instance) {
      return instance && $(instance.element).attr('data-dialog-renderer') === 'off_canvas';
    }).forEach(function (instance) {
      if (!instance.options.data.hasOwnProperty('dialogOptions')) {
        instance.options.data.dialogOptions = {};
      }
      instance.options.data.dialogOptions.settingsTrayActiveEditableId = $(instance.element).parents('.settings-tray-editable').attr('id');
      instance.progress = {
        type: 'fullscreen'
      };
    });
  }
  $(document).on('drupalContextualLinkAdded', function (event, data) {
    prepareAjaxLinks();
    once('settings_tray.edit_mode_init', 'body').forEach(function () {
      var editMode = localStorage.getItem('Drupal.contextualToolbar.isViewing') === 'false';
      if (editMode) {
        setEditModeState(true);
      }
    });
    data.$el.find(blockConfigureSelector).on('click.settingstray', function () {
      if (!isInEditMode()) {
        $(toggleEditSelector).trigger('click').trigger('click.settings_tray');
      }
      disableQuickEdit();
    });
  });
  $(document).on('keyup.settingstray', function (e) {
    if (isInEditMode() && e.keyCode === 27) {
      Drupal.announce(Drupal.t('Exited edit mode.'));
      toggleEditMode();
    }
  });
  Drupal.behaviors.toggleEditMode = {
    attach: function attach() {
      $(once('settingstray', toggleEditSelector)).on('click.settingstray', toggleEditMode);
    }
  };
  $(window).on({
    'dialog:beforecreate': function dialogBeforecreate(event, dialog, $element, settings) {
      if ($element.is('#drupal-off-canvas')) {
        $('body .settings-tray-active-editable').removeClass('settings-tray-active-editable');
        var $activeElement = $("#".concat(settings.settingsTrayActiveEditableId));
        if ($activeElement.length) {
          $activeElement.addClass('settings-tray-active-editable');
        }
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      if ($element.is('#drupal-off-canvas')) {
        $('body .settings-tray-active-editable').removeClass('settings-tray-active-editable');
      }
    }
  });
})(jQuery, Drupal);;
