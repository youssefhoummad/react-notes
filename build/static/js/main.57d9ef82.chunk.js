(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(6),i=a.n(l),o=a(2),c=a(3),s=a.n(c),u=Object(r.createContext)(),d=function(e){var t=e.reducer,a=e.initialState,l=e.children;return n.a.createElement(u.Provider,{value:Object(r.useReducer)(t,a)},l)},m=function(){return Object(r.useContext)(u)};var f=function(e){var t=e.id,a=e.name,r=m(),l=Object(o.a)(r,2),i=l[0].currentFolder,u=l[1];return n.a.createElement("a",{className:i.id===t?"item active":"item",onClick:function(){u({type:"SET_CURRENT_FOLDER",payload:t})},href:"/#"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fa fa-folder-open-o"})),n.a.createElement(s.a,{type:c.Types.TEXT,onSave:function(e){u({type:"RENAME_FOLDER",payload:e})},value:a||"",attributes:{className:"renamed-input"},hideCancelButton:!0,hideSaveButton:!0,placeholder:"\u0627\u0633\u0645 \u0627\u0644\u0645\u062c\u0644\u062f"}))};var p=function(){var e=m(),t=Object(o.a)(e,2),a=t[0].folders,r=t[1];return n.a.createElement("div",{className:"folders-pan"},n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"\u0627\u0644\u0640\u0645\u062c\u0644\u062f\u0627\u062a"),n.a.createElement("span",{onClick:function(){r({type:"ADD_FOLDER",payload:null})},className:"new-item icon"},n.a.createElement("i",{className:"fa fa-plus-circle"}))),a.map((function(e){return n.a.createElement(f,{key:e.id,id:e.id,name:e.name})})))};var E=function(e){var t=e.note,a=m(),r=Object(o.a)(a,2),l=r[0].currentNote,i=r[1];return n.a.createElement("div",{className:l.id===t.id?"item active":"item",onClick:function(){i({type:"SET_CURRENT_NOTE",payload:t.id})}},n.a.createElement("div",{className:"note-subject"},n.a.createElement(s.a,{type:c.Types.TEXT,onSave:function(e){i({type:"RENAME_NOTE",payload:e})},value:t.title||"",attributes:{className:"renamed-input"},hideCancelButton:!0,hideSaveButton:!0,placeholder:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0629"})))};var N=function(){var e=m(),t=Object(o.a)(e,2),a=t[0],r=a.currentFolder,l=a.menuCollapsed,i=t[1];return n.a.createElement("div",{className:"notes-pan"},n.a.createElement("div",{className:"title"},n.a.createElement("span",{onClick:function(){var e="";""===l&&(e="collapsed"),i({type:"TOGGLE_COLLAPSE_FOLDERS_PAN",payload:e})},className:"new-item icon"},n.a.createElement("i",{className:l?"fa fa-angle-left":"fa fa-angle-right"})),n.a.createElement("h1",null,"\u0627\u0644\u0640\u0645\u0644\u0627\u062d\u0638\u0627\u062a"),n.a.createElement("span",{onClick:function(){i({type:"ADD_NOTE",payload:null})},className:"new-item icon"},n.a.createElement("i",{className:"fa fa-plus-circle"}))),r.notes.map((function(e){return n.a.createElement(E,{key:e.id,note:e})})))},g=a(7),O=a.n(g),S=(a(25),{toolbar:{default:"Default",save:"\u062d\u0641\u0638",font:"\u062e\u0637",formats:"\u062a\u0646\u0633\u064a\u0642",fontSize:"\u062d\u062c\u0645",bold:"\u063a\u0627\u0645\u0642",underline:"\u062a\u0633\u0637\u064a\u0631",italic:"\u0645\u0627\u0626\u0644",strike:"\u062a\u0634\u0637\u064a\u0628",subscript:"Subscript",superscript:"Superscript",removeFormat:"\u0645\u0633\u062d \u0627\u0644\u062a\u0646\u0633\u064a\u0642",fontColor:"\u0644\u0648\u0646 \u0627\u0644\u062e\u0637",hiliteColor:"\u0644\u0648\u0646 \u0627\u0644\u062a\u0645\u064a\u064a\u0632",indent:"Indent",outdent:"Outdent",align:"Align",alignLeft:"Align left",alignRight:"Align right",alignCenter:"Align center",alignJustify:"Align justify",list:"\u0642\u0627\u0626\u0645\u0629",orderList:"\u062a\u0631\u0642\u064a\u0645",unorderList:"\u0642\u0627\u0626\u0645\u0629 \u0646\u0642\u0637\u064a\u0629",horizontalRule:"horizontal line",hr_solid:"solid",hr_dotted:"dotted",hr_dashed:"dashed",table:"Table",link:"\u0631\u0627\u0628\u0637",image:"\u0635\u0648\u0631\u0629",video:"Video",fullScreen:"Full screen",showBlocks:"Show blocks",codeView:"Code view",undo:"\u062a\u0631\u0627\u062c\u0639",redo:"\u0625\u0639\u0627\u062f\u0629",preview:"\u0645\u0639\u0627\u064a\u0646\u0629",print:"\u0637\u0628\u0627\u0639\u0629",tag_p:"\u0641\u0642\u0631\u0629",tag_div:"\u0639\u0627\u062f\u064a (DIV)",tag_h:"\u0639\u0646\u0648\u0627\u0646 ",tag_blockquote:"\u0627\u0642\u062a\u0628\u0627\u0633",tag_pre:"\u0643\u0648\u062f",template:"Template"},dialogBox:{linkBox:{title:"Insert Link",url:"URL to link",text:"\u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u0639\u0631\u0648\u0636",newWindowCheck:"\u0641\u062a\u062d \u0641\u064a \u0646\u0627\u0641\u0630\u0629 \u062c\u062f\u064a\u062f\u0629"},imageBox:{title:"\u0625\u062f\u0631\u0627\u062c \u0635\u0648\u0631\u0629",file:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0645\u0644\u0641",url:"\u0631\u0627\u0628\u0637 \u0635\u0648\u0631\u0629",altText:"\u0646\u0635 \u0628\u062f\u064a\u0644"},videoBox:{title:"Insert Video",url:"Media embed URL, YouTube"},caption:"\u0627\u062f\u0631\u0627\u062c \u0648\u0635\u0641",close:"\u0625\u063a\u0644\u0627\u0642",submitButton:"\u0625\u0631\u0633\u0627\u0644",revertButton:"Revert",proportion:"\u062a\u0646\u0627\u0633\u0628 \u0627\u0644\u0623\u0628\u0639\u0627\u062f",width:"\u0639\u0631\u0636",height:"\u0627\u0631\u062a\u0641\u0627\u0639",basic:"\u0623\u0633\u0627\u0633\u064a",left:"\u064a\u0633\u0627\u0631",right:"\u064a\u0645\u064a\u0646",center:"\u0648\u0633\u0637"},controller:{edit:"\u062a\u0639\u062f\u064a\u0644",remove:"\u062d\u0630\u0641",insertRowAbove:"Insert row above",insertRowBelow:"Insert row below",deleteRow:"Delete row",insertColumnBefore:"Insert column before",insertColumnAfter:"Insert column after",deleteColumn:"Delete column",resize100:"Resize 100%",resize75:"Resize 75%",resize50:"Resize 50%",resize25:"Resize 25%",mirrorHorizontal:"Mirror, Horizontal",mirrorVertical:"Mirror, Vertical",rotateLeft:"Rotate left",rotateRight:"Rotate right",maxSize:"Max size",minSize:"Min size",tableHeader:"Table header",mergeCells:"Merge cells",splitCells:"Split Cells",HorizontalSplit:"Horizontal split",VerticalSplit:"Vertical split"}}),v=function(){var e=m(),t=Object(o.a)(e,2),a=t[0].currentNote,l=t[1],i=Object(r.useRef)();return n.a.createElement("div",null,n.a.createElement(O.a,{ref:i,lang:S,setDefaultStyle:"font-family: ibm-plex-arabic; font-size: 1.1rem; line-height:2.5rem",height:"calc(100vh - 50px)",placeholder:"\u0627\u0628\u062f\u0623 \u0627\u0644\u062a\u062f\u0648\u064a\u0646...",autoFocus:!0,onChange:function(e){l({type:"TEMP_NOTE",payload:e})},setContents:a.content,setOptions:{buttonList:[["link","image"],["list"],["fontColor","hiliteColor","removeFormat"],["bold","underline","italic","strike"],["formatBlock"],["save"]],callBackSave:function(e){l({type:"SAVE_NOTE",payload:e})},imageFileInput:!1,shortcutsDisable:["undo","redo"],rtl:!0,resizingBar:!1}}))},b=(a(26),function(){var e=m(),t=Object(o.a)(e,2),a=t[0].menuCollapsed,r=t[1];return n.a.createElement("div",{className:"App"},n.a.createElement("button",{onClick:function(){r({type:"DELETE_NOTE",payload:null})},className:"delete_note"},"Delete"),n.a.createElement(n.a.Fragment,null,n.a.createElement("aside",{className:"folders "+a},n.a.createElement(p,null)),n.a.createElement("aside",{className:"notes"},n.a.createElement(N,null)),n.a.createElement("section",{className:"editor"},n.a.createElement(v,null))))}),h=a(1),y={};if(localStorage.length)y=JSON.parse(localStorage.getItem("initialState"));else{var T=[{id:"1608232926248vpmbk",name:"\u0627\u0644\u0623\u0641\u0643\u0627\u0631"}],R=[{id:"1608232hjs926248vpmbk",title:"\u0645\u0644\u0627\u062d\u0638\u0629 \u0648\u0627\u062d\u062f",content:"\u0627\u0644\u062d\u0645\u062f \u0644\u0644\u0647 \u0631\u0628 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0646 \u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0631\u062d\u064a\u0645"}],_=T[0],C=R[0];T[0].notes=R,y={folders:T,currentFolder:_,currentNote:C,tempNote:"",menuCollapsed:""},localStorage.setItem("initialState",JSON.stringify(y))}var j=function(){return(new Date).getTime()+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5)},F=function(e){return e.tempNote?(e.currentNote.content=e.tempNote,e.tempNote="",localStorage.setItem("initialState",JSON.stringify(e)),console.log(e.folders),e):e},D=function(e,t){switch(t.type){case"DELETE_NOTE":var a=Object(h.a)({},e),r=a.currentFolder.notes.filter((function(t){return t.id!==e.currentNote.id}));if(!r.length){if(a.folders.length>1){var n=a.folders.filter((function(t){return t.id!==e.currentFolder.id}));return a.folders=n,a.currentFolder=a.folders[0],a.currentNote=a.currentFolder.notes[0],localStorage.setItem("initialState",JSON.stringify(a)),a}return a}return a.currentFolder.notes=r,a.currentNote=a.currentFolder.notes[0],localStorage.setItem("initialState",JSON.stringify(a)),a;case"TEMP_NOTE":return Object(h.a)(Object(h.a)({},e),{},{tempNote:t.payload});case"SAVE_NOTE":return F(Object(h.a)({},e));case"RENAME_NOTE":var l=Object(h.a)({},e);return l.currentNote.title=t.payload,localStorage.setItem("initialState",JSON.stringify(l)),l;case"RENAME_FOLDER":var i=Object(h.a)({},e);return i.currentFolder.name=t.payload,localStorage.setItem("initialState",JSON.stringify(i)),i;case"ADD_FOLDER":var o=Object(h.a)({},e),c={id:j(),name:"\u0645\u062c\u0644\u062f \u062c\u062f\u064a\u062f",notes:[{id:j(),title:"\u0645\u0644\u0627\u062d\u0638\u0629 \u062c\u062f\u064a\u062f\u0629",content:"..."}]};return o.folders.push(c),o.currentNote=c.notes[0],localStorage.setItem("initialState",JSON.stringify(o)),o;case"ADD_NOTE":var s={id:j(),title:"\u0645\u0644\u0627\u062d\u0638\u0629 \u062c\u062f\u064a\u062f\u0629",content:""},u=Object(h.a)({},e);return u.currentFolder.notes.push(s),u=Object(h.a)(Object(h.a)({},e),{},{currentNote:s}),localStorage.setItem("initialState",JSON.stringify(u)),u;case"SET_CURRENT_FOLDER":if(e.currentFolder.id===t.payload)return e;var d=F(Object(h.a)({},e)),m=d.folders.find((function(e){return e.id===t.payload})),f=m.notes[0];return Object(h.a)(Object(h.a)({},d),{},{currentFolder:m,currentNote:f});case"SET_CURRENT_NOTE":if(e.currentNote.id===t.payload)return e;var p=F(Object(h.a)({},e));return p.currentNote=p.currentFolder.notes.find((function(e){return e.id===t.payload})),localStorage.setItem("initialState",JSON.stringify(p)),p;case"TOGGLE_COLLAPSE_FOLDERS_PAN":var E=t.payload;return Object(h.a)(Object(h.a)({},e),{},{menuCollapsed:E});default:return e}},k=document.getElementById("root");i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,{initialState:y,reducer:D},n.a.createElement(b,null))),k)},8:function(e,t,a){e.exports=a(27)}},[[8,1,2]]]);
//# sourceMappingURL=main.57d9ef82.chunk.js.map