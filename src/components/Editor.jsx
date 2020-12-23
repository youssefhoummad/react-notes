import React, { useRef} from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import { useStateValue } from '../stateProvider';


const Editor = () => {

  const [{currentNote}, dispatch] = useStateValue();


  const editorRef = useRef();

  const handleSave = (content) => {
    dispatch({
      type: "SAVE_NOTE",
      payload: content
    })
  };

  const handleDeleteNote = () => {
    dispatch({
      type: "DELETE_NOTE",
      payload:null
    })
  }

  const handleChange = (value) => {
    dispatch({
      type: "TEMP_NOTE",
      payload: value
    })
  }


  const plugin_delete = {
    name: 'deleteNote',
    display: 'command',
    title: 'حذف الـملاحظة', 
    buttonClass: 'delete_note', 
    innerHTML: '<i class="fa fa-trash-o"></i>',
    add: function (core, targetElement) {},
    action: handleDeleteNote
  }


  return (
    <div>
      <SunEditor 
        key={currentNote.id}
        ref={editorRef} 
        lang={ar}
        setDefaultStyle="font-family: ibm-plex-arabic; font-size: 1.1rem; line-height:2.5rem"
        height="calc(100vh - 50px)"
        placeholder="ابدأ التدوين..."
        autoFocus={true}
        onChange={handleChange}
        setContents={currentNote.content}
        setOptions={{
          buttonList: [
            ["deleteNote"],
            ['link', 'image'],
            ['list'], 
            ['fontColor', 'hiliteColor', 'removeFormat'],
            ['bold', 'underline', 'italic', 'strike'], 
            ['formatBlock'], 
            // ['undo', 'redo'],
            ['save']
          ],
          callBackSave:  function (contents) {
              handleSave(contents);
            },
            imageFileInput: false,
            shortcutsDisable:['undo', 'redo'],
            rtl:true,
            resizingBar:false,
            plugins: [plugin_delete],

        }}
            
      />
    </div>

  );
};

// editor traduction
const ar = {

  toolbar: {

      default: 'Default',

      save: 'حفظ',

      font: 'خط',

      formats: 'تنسيق',

      fontSize: 'حجم',

      bold: 'غامق',

      underline: 'تسطير',

      italic: 'مائل',

      strike: 'تشطيب',

      subscript: 'Subscript',

      superscript: 'Superscript',

      removeFormat: 'مسح التنسيق',

      fontColor: 'لون الخط',

      hiliteColor: 'لون التمييز',

      indent: 'Indent',

      outdent: 'Outdent',

      align: 'Align',

      alignLeft: 'Align left',

      alignRight: 'Align right',

      alignCenter: 'Align center',

      alignJustify: 'Align justify',

      list: 'قائمة',

      orderList: 'ترقيم',

      unorderList: 'قائمة نقطية',

      horizontalRule: 'horizontal line',

      hr_solid: 'solid',

      hr_dotted: 'dotted',

      hr_dashed: 'dashed',

      table: 'Table',

      link: 'رابط',

      image: 'صورة',

      video: 'Video',

      fullScreen: 'Full screen',

      showBlocks: 'Show blocks',

      codeView: 'Code view',

      undo: 'تراجع',

      redo: 'إعادة',

      preview: 'معاينة',

      print: 'طباعة',

      tag_p: 'فقرة',

      tag_div: 'عادي (DIV)',

      tag_h: 'عنوان ',

      tag_blockquote: 'اقتباس',

      tag_pre: 'كود',

      template: 'Template'

  },

  dialogBox: {

      linkBox: {

          title: 'Insert Link',

          url: 'URL to link',

          text: 'النص المعروض',

          newWindowCheck: 'فتح في نافذة جديدة'

      },

      imageBox: {

          title: 'إدراج صورة',

          file: 'اختيار ملف',

          url: 'رابط صورة',

          altText: 'نص بديل'

      },

      videoBox: {

          title: 'Insert Video',

          url: 'Media embed URL, YouTube'

      },

      caption: 'ادراج وصف',

      close: 'إغلاق',

      submitButton: 'إرسال',

      revertButton: 'Revert',

      proportion: 'تناسب الأبعاد',

      width: 'عرض',

      height: 'ارتفاع',

      basic: 'أساسي',

      left: 'يسار',

      right: 'يمين',

      center: 'وسط'

  },

  controller: {

      edit: 'تعديل',

      remove: 'حذف',

      insertRowAbove: 'Insert row above',

      insertRowBelow: 'Insert row below',

      deleteRow: 'Delete row',

      insertColumnBefore: 'Insert column before',

      insertColumnAfter: 'Insert column after',

      deleteColumn: 'Delete column',

      resize100: 'Resize 100%',

      resize75: 'Resize 75%',

      resize50: 'Resize 50%',

      resize25: 'Resize 25%',

      mirrorHorizontal: 'Mirror, Horizontal',

      mirrorVertical: 'Mirror, Vertical',

      rotateLeft: 'Rotate left',

      rotateRight: 'Rotate right',

      maxSize: 'Max size',

      minSize: 'Min size',

      tableHeader: 'Table header',

      mergeCells: 'Merge cells',

      splitCells: 'Split Cells',

      HorizontalSplit: 'Horizontal split',

      VerticalSplit: 'Vertical split'

  }

}

export default Editor;