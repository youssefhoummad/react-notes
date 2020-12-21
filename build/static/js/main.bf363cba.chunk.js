(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),o=a.n(i),l=a(2),s=a(3),c=a.n(s),d=Object(n.createContext)(),u=function(e){var t=e.reducer,a=e.initialState,i=e.children;return r.a.createElement(d.Provider,{value:Object(n.useReducer)(t,a)},i)},m=function(){return Object(n.useContext)(d)};var p=function(e){var t=e.id,a=e.name,n=m(),i=Object(l.a)(n,2),o=i[0].currentFolder,d=i[1];return r.a.createElement("a",{className:o.id===t?"item active":"item",onClick:function(){d({type:"SET_CURRENT_FOLDER",payload:t})},href:"/#"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-folder-open-o"})),r.a.createElement(c.a,{type:s.Types.TEXT,onSave:function(e){d({type:"RENAME_FOLDER",payload:e})},value:a||"",attributes:{className:"renamed-input"},hideCancelButton:!0,hideSaveButton:!0,placeholder:"\u0627\u0633\u0645 \u0627\u0644\u0645\u062c\u0644\u062f"}))};var f=function(){var e=m(),t=Object(l.a)(e,2),a=t[0].folders,n=t[1];return r.a.createElement("div",{className:"folders-pan"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"\u0627\u0644\u0640\u0645\u062c\u0644\u062f\u0627\u062a"),r.a.createElement("span",{onClick:function(){n({type:"ADD_FOLDER",payload:null})},className:"new-item icon"},r.a.createElement("i",{className:"fa fa-plus-circle"}))),a.map((function(e){return r.a.createElement(p,{key:e.id,id:e.id,name:e.name})})))};var g=function(e){var t=e.note,a=m(),n=Object(l.a)(a,2),i=n[0].currentNote,o=n[1];return r.a.createElement("div",{className:i.id===t.id?"item active":"item",onClick:function(){o({type:"SET_CURRENT_NOTE",payload:t.id})}},r.a.createElement("div",{className:"note-subject"},r.a.createElement(c.a,{type:s.Types.TEXT,onSave:function(e){o({type:"RENAME_NOTE",payload:e})},value:t.title||"",attributes:{className:"renamed-input"},hideCancelButton:!0,hideSaveButton:!0,placeholder:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629"})))};var b=function(){var e=m(),t=Object(l.a)(e,2),a=t[0],n=a.currentFolder,i=a.menuCollapsed,o=t[1];return r.a.createElement("div",{className:"notes-pan"},r.a.createElement("div",{className:"title"},r.a.createElement("span",{onClick:function(){var e="";""===i&&(e="collapsed"),o({type:"TOGGLE_COLLAPSE_FOLDERS_PAN",payload:e})},className:"new-item icon"},r.a.createElement("i",{className:i?"fa fa-angle-left":"fa fa-angle-right"})),r.a.createElement("h1",null,"\u0627\u0644\u0640\u0645\u0644\u0627\u062d\u0638\u0627\u062a"),r.a.createElement("span",{onClick:function(){o({type:"ADD_NOTE",payload:null})},className:"new-item icon"},r.a.createElement("i",{className:"fa fa-plus-circle"}))),n.notes.map((function(e){return r.a.createElement(g,{key:e.id,note:e})})))},h=a(7),E=a.n(h),N=(a(25),{toolbar:{default:"Default",save:"\u062d\u0641\u0638",font:"\u062e\u0637",formats:"\u062a\u0646\u0633\u064a\u0642",fontSize:"\u062d\u062c\u0645",bold:"\u063a\u0627\u0645\u0642",underline:"\u062a\u0633\u0637\u064a\u0631",italic:"\u0645\u0627\u0626\u0644",strike:"\u062a\u0634\u0637\u064a\u0628",subscript:"Subscript",superscript:"Superscript",removeFormat:"\u0645\u0633\u062d \u0627\u0644\u062a\u0646\u0633\u064a\u0642",fontColor:"\u0644\u0648\u0646 \u0627\u0644\u062e\u0637",hiliteColor:"\u0644\u0648\u0646 \u0627\u0644\u062a\u0645\u064a\u064a\u0632",indent:"Indent",outdent:"Outdent",align:"Align",alignLeft:"Align left",alignRight:"Align right",alignCenter:"Align center",alignJustify:"Align justify",list:"\u0642\u0627\u0626\u0645\u0629",orderList:"\u062a\u0631\u0642\u064a\u0645",unorderList:"\u0642\u0627\u0626\u0645\u0629 \u0646\u0642\u0637\u064a\u0629",horizontalRule:"horizontal line",hr_solid:"solid",hr_dotted:"dotted",hr_dashed:"dashed",table:"Table",link:"\u0631\u0627\u0628\u0637",image:"\u0635\u0648\u0631\u0629",video:"Video",fullScreen:"Full screen",showBlocks:"Show blocks",codeView:"Code view",undo:"\u062a\u0631\u0627\u062c\u0639",redo:"\u0625\u0639\u0627\u062f\u0629",preview:"\u0645\u0639\u0627\u064a\u0646\u0629",print:"\u0637\u0628\u0627\u0639\u0629",tag_p:"\u0641\u0642\u0631\u0629",tag_div:"\u0639\u0627\u062f\u064a (DIV)",tag_h:"\u0639\u0646\u0648\u0627\u0646 ",tag_blockquote:"\u0627\u0642\u062a\u0628\u0627\u0633",tag_pre:"\u0643\u0648\u062f",template:"Template"},dialogBox:{linkBox:{title:"Insert Link",url:"URL to link",text:"\u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u0639\u0631\u0648\u0636",newWindowCheck:"\u0641\u062a\u062d \u0641\u064a \u0646\u0627\u0641\u0630\u0629 \u062c\u062f\u064a\u062f\u0629"},imageBox:{title:"\u0625\u062f\u0631\u0627\u062c \u0635\u0648\u0631\u0629",file:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0645\u0644\u0641",url:"\u0631\u0627\u0628\u0637 \u0635\u0648\u0631\u0629",altText:"\u0646\u0635 \u0628\u062f\u064a\u0644"},videoBox:{title:"Insert Video",url:"Media embed URL, YouTube"},caption:"\u0627\u062f\u0631\u0627\u062c \u0648\u0635\u0641",close:"\u0625\u063a\u0644\u0627\u0642",submitButton:"\u0625\u0631\u0633\u0627\u0644",revertButton:"Revert",proportion:"\u062a\u0646\u0627\u0633\u0628 \u0627\u0644\u0623\u0628\u0639\u0627\u062f",width:"\u0639\u0631\u0636",height:"\u0627\u0631\u062a\u0641\u0627\u0639",basic:"\u0623\u0633\u0627\u0633\u064a",left:"\u064a\u0633\u0627\u0631",right:"\u064a\u0645\u064a\u0646",center:"\u0648\u0633\u0637"},controller:{edit:"\u062a\u0639\u062f\u064a\u0644",remove:"\u062d\u0630\u0641",insertRowAbove:"Insert row above",insertRowBelow:"Insert row below",deleteRow:"Delete row",insertColumnBefore:"Insert column before",insertColumnAfter:"Insert column after",deleteColumn:"Delete column",resize100:"Resize 100%",resize75:"Resize 75%",resize50:"Resize 50%",resize25:"Resize 25%",mirrorHorizontal:"Mirror, Horizontal",mirrorVertical:"Mirror, Vertical",rotateLeft:"Rotate left",rotateRight:"Rotate right",maxSize:"Max size",minSize:"Min size",tableHeader:"Table header",mergeCells:"Merge cells",splitCells:"Split Cells",HorizontalSplit:"Horizontal split",VerticalSplit:"Vertical split"}}),v=function(){var e=m(),t=Object(l.a)(e,2),a=t[0].currentNote,i=t[1],o=Object(n.useRef)(),s={name:"deleteNote",display:"command",title:"\u062d\u0630\u0641 \u0627\u0644\u0640\u0645\u0644\u0627\u062d\u0638\u0629",buttonClass:"delete_note",innerHTML:'<i class="fa fa-trash-o"></i>',add:function(e,t){},action:function(){i({type:"DELETE_NOTE",payload:null})}};return r.a.createElement("div",null,r.a.createElement(E.a,{key:a.id,ref:o,lang:N,setDefaultStyle:"font-family: ibm-plex-arabic; font-size: 1.1rem; line-height:2.5rem",height:"calc(100vh - 50px)",placeholder:"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u062f\u0648\u064a\u0646...",autoFocus:!0,onChange:function(e){i({type:"TEMP_NOTE",payload:e})},setContents:a.content,setOptions:{buttonList:[["deleteNote"],["link","image"],["list"],["fontColor","hiliteColor","removeFormat"],["bold","underline","italic","strike"],["formatBlock"],["save"]],callBackSave:function(e){i({type:"SAVE_NOTE",payload:e})},imageFileInput:!1,shortcutsDisable:["undo","redo"],rtl:!0,resizingBar:!1,plugins:[s]}}))},y=(a(26),function(){var e=m(),t=Object(l.a)(e,1)[0].menuCollapsed;return r.a.createElement("div",{className:"App"},r.a.createElement(r.a.Fragment,null,r.a.createElement("aside",{className:"folders "+t},r.a.createElement(f,null)),r.a.createElement("aside",{className:"notes"},r.a.createElement(b,null)),r.a.createElement("section",{className:"editor"},r.a.createElement(v,null))))}),S=a(1),O={};if(localStorage.length)O=JSON.parse(localStorage.getItem("initialState"));else{var _=[{id:"1608232926248vpmbk",name:"\u0639\u0646 \u0627\u0644\u062a\u0637\u0628\u064a\u0642"}],T=[{id:"1608232hjs926248vpmbk",title:"\u0644\u0640\u0645\u062d\u0629 \u0639\u0646 \u0627\u0644\u062a\u0637\u0628\u064a\u0642",content:'<div class="se-component se-image-container __se__float-center" contenteditable="false" style="width: 50%; min-width: 100%;"><figure style="width: 50%; margin: auto;"><img src="https://unsplash.com/photos/qaFKsIMv01Y/download?force=true&amp;w=640" data-rotate="" data-proportion="true" data-size="50%,auto" data-align="center" data-percentage="50%,auto" data-file-name="download?force=true&amp;w=640" data-file-size="0" data-origin="," origin-size="640,427" data-index="0" style="width: 100%; height: auto;"></figure></div><h2><span style="font-size: 2em;">\u0627\u0644\u0640\u0645\u0644\u0627\u062d\u0638\u0627\u062a</span><br></h2><h2>\u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0639\u0627\u062f\u064a\u0629</h2><p>\u0647\u0630\u0647 \u0627\u0644\u0643\u0644\u0645\u0629 \u0645\u0643\u062a\u0648\u0628\u0629 \u0628\u0634\u0643\u0644 <strong>\u0639\u0631\u064a\u0636</strong>&nbsp;\u0648\u0647\u0630\u0647 \u0645\u0643\u062a\u0648\u0628\u0629 \u0628\u0634\u0643\u0644 <em>\u0645\u0627\u0626\u0644 </em><span style="color: rgb(51, 51, 51); font-family: ibm-plex-arabic, sans-serif; font-size: 15.4px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">\u0647\u0630\u0647 \u0627\u0644\u0643\u0644\u0645\u0629 \u0645\u0643\u062a\u0648\u0628\u0629 \u0628\u0634\u0643\u0644<em> </em><del>\u0645\u0634\u0637\u0648\u0628&nbsp;</del>\u0647\u0630\u0647 \u0627\u0644\u0643\u0644\u0645\u0629 \u0645\u0643\u062a\u0648\u0628\u0629 \u0628\u0634\u0643\u0644 <u>\u0645\u0633\u0637\u0631 \u0639\u0644\u064a\u0647</u></span></p><p>\u0643\u0645\u0627 \u064a\u0645\u0643\u0646\u0643 <span style="color: rgb(0, 85, 255);">\u062a\u0644\u0648\u064a\u0646 </span><span style="color: rgb(255, 0, 0);">\u0627\u0644\u0643\u0644\u0645\u0627\u062a </span><span style="background-color: rgb(178, 204, 255);">\u0648\u062a\u0638\u0644\u064a\u0644\u0647\u0627 </span><span style="background-color: rgb(206, 242, 121);">\u0628\u0623\u0644\u0648\u0646 \u0645\u062e\u062a\u0644\u0641\u0629</span></p><h2>\u0625\u062f\u0631\u0627\u062c \u0631\u0627\u0628\u0637 \u0623\u0648 \u0635\u0648\u0631\u0629<br></h2><p>\u0647\u0630\u0627 \u0631\u0627\u0628\u0637 \u0644\u0635\u0641\u062d\u062a\u064a \u0639\u0644\u0649 <a href="https://github.com/youssefhoummad/" target="_blank">GITHUB&nbsp;</a>\u0623\u0648 \u0635\u0648\u0631\u0629 \u0643\u0645\u0627 \u0628\u0627\u0644\u0623\u0639\u0644\u0649<br></p><h2>\u0642\u0627\u0626\u0645\u0629 \u0645\u0646\u0642\u0637\u0629</h2><ul><li>\u0639\u0646\u0635\u0631 \u0642\u0627\u0626\u0645\u0629</li><li>&nbsp;\u0639\u0646\u0635\u0631 \u0642\u0627\u0626\u0645\u0629</li><li>\u0639\u0646\u0635\u0631 \u0642\u0627\u0626\u0645\u0629<br></li></ul><p>\u0623\u0648 \u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u0642\u0645\u0629</p><ol><li>\u0639\u0646\u0635\u0631 \u0642\u0627\u0626\u0645\u0629</li><li>&nbsp;\u0639\u0646\u0635\u0631 \u0642\u0627\u0626\u0645\u0629</li><li>\u0639\u0646\u0635\u0631 \u0642\u0627\u0626\u0645\u0629</li></ol><h2>\u0648\u0623\u0645\u0648\u0631 \u0627\u062e\u0631\u0649</h2><blockquote><p>\u0647\u0630\u0627 \u0627\u0642\u062a\u0628\u0627\u0633 \u062c\u0645\u064a\u0644</p></blockquote><pre>\u0648\u0647\u0630\u0627 \u0625\u0637\u0627\u0631 \u0644\u0643\u0648\u062f \u0628\u0631\u0645\u062c\u064a<br></pre><p><br></p><p>\u0623\u062a\u0645\u0646\u0649 \u0623\u0646 \u062a\u064f\u0639\u062c\u0628\u0648\u0627 \u0628\u0627\u0644\u062a\u0637\u0628\u064a\u0642</p>'},{id:"1608kjndf232hjs92624hja8vpmbks3",title:"\u0639\u0646 \u0627\u0644\u0640\u0645\u0637\u0648\u0631",content:'<div class="se-component se-image-container __se__float-none" contenteditable="false"><figure style="margin: 0px;"><img src="https://avatars2.githubusercontent.com/u/25711246?s=460&amp;u=cd03daaebdb90e0cf9ea91ed126328672a4bec19&amp;v=4" alt="" data-rotate="" data-proportion="true" data-rotatex="" data-rotatey="" data-size="," data-align="none" data-percentage="auto,auto" data-index="0" data-file-name="25711246?s=460&amp;u=cd03daaebdb90e0cf9ea91ed126328672a4bec19&amp;v=4" data-file-size="0" data-origin="," style=""></figure></div><h2>\u064a\u0648\u0633\u0641 \u062d\u0645\u062f</h2><div>youssef.hoummad@outlook.com</div><div>\u200b<a href="https://github.com/youssefhoummad" target="_blank"><strong>GITHUB</strong></a><strong></strong>\u200b</div>'}],k=_[0],w=T[0];_[0].notes=T,O={folders:_,currentFolder:k,currentNote:w,tempNote:"",menuCollapsed:""},localStorage.setItem("initialState",JSON.stringify(O))}var R=function(){return(new Date).getTime()+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5)},C=function(e){return e.tempNote?(e.currentNote.content=e.tempNote,e.tempNote="",localStorage.setItem("initialState",JSON.stringify(e)),e):e},j=function(e,t){switch(t.type){case"DELETE_NOTE":var a=Object(S.a)({},e),n=a.currentFolder.notes.filter((function(t){return t.id!==e.currentNote.id}));if(!n.length){if(a.folders.length>1){var r=a.folders.filter((function(t){return t.id!==e.currentFolder.id}));return a.folders=r,a.currentFolder=a.folders[0],a.currentNote=a.currentFolder.notes[0],localStorage.setItem("initialState",JSON.stringify(a)),a}return a.currentNote.id=R(),a.currentNote.title="\u0645\u0644\u0627\u062d\u0638\u0629 \u062c\u062f\u064a\u062f\u0629",a.currentNote.content="<div></div>",a.tempNote="",localStorage.setItem("initialState",JSON.stringify(a)),a}return a.currentFolder.notes=n,a.currentNote=a.currentFolder.notes[0],localStorage.setItem("initialState",JSON.stringify(a)),a;case"TEMP_NOTE":return Object(S.a)(Object(S.a)({},e),{},{tempNote:t.payload});case"SAVE_NOTE":return C(Object(S.a)({},e));case"RENAME_NOTE":var i=Object(S.a)({},e);return i.currentNote.title=t.payload,localStorage.setItem("initialState",JSON.stringify(i)),i;case"RENAME_FOLDER":var o=Object(S.a)({},e);return o.currentFolder.name=t.payload,localStorage.setItem("initialState",JSON.stringify(o)),o;case"ADD_FOLDER":var l=C(Object(S.a)({},e)),s={id:R(),name:"\u0645\u062c\u0644\u062f \u062c\u062f\u064a\u062f",notes:[{id:R(),title:"\u0645\u0644\u0627\u062d\u0638\u0629 \u062c\u062f\u064a\u062f\u0629",content:""}]};return l.folders.push(s),l.currentFolder=s,l.currentNote=s.notes[0],localStorage.setItem("initialState",JSON.stringify(l)),l;case"ADD_NOTE":var c=C(Object(S.a)({},e)),d={id:R(),title:"\u0645\u0644\u0627\u062d\u0638\u0629 \u062c\u062f\u064a\u062f\u0629",content:""};return c.currentFolder.notes.push(d),c.currentNote=d,localStorage.setItem("initialState",JSON.stringify(c)),c;case"SET_CURRENT_FOLDER":if(e.currentFolder.id===t.payload)return e;var u=C(Object(S.a)({},e)),m=u.folders.find((function(e){return e.id===t.payload})),p=m.notes[0];return Object(S.a)(Object(S.a)({},u),{},{currentFolder:m,currentNote:p});case"SET_CURRENT_NOTE":if(e.currentNote.id===t.payload)return e;var f=C(Object(S.a)({},e));return f.currentNote=f.currentFolder.notes.find((function(e){return e.id===t.payload})),localStorage.setItem("initialState",JSON.stringify(f)),f;case"TOGGLE_COLLAPSE_FOLDERS_PAN":var g=t.payload;return Object(S.a)(Object(S.a)({},e),{},{menuCollapsed:g});default:return e}},F=document.getElementById("root");o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,{initialState:O,reducer:j},r.a.createElement(y,null))),F)},8:function(e,t,a){e.exports=a(27)}},[[8,1,2]]]);
//# sourceMappingURL=main.bf363cba.chunk.js.map