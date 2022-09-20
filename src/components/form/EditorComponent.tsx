import { Editor } from '@tinymce/tinymce-react'
import { FC, MutableRefObject } from 'react'

import { KEY_EDITOR } from '../../utils'

interface IEditorComponent {
  editorRef: MutableRefObject<any>
  value: string
}

const EditorComponent: FC<IEditorComponent> = ({ editorRef, value }) => {
  return (
    <Editor
      onInit={(evt, editor) => (editorRef.current = editor)}
      apiKey={KEY_EDITOR}
      initialValue={value}
      init={{
        plugins:
          'lists checklist image link code table media emoticons anchor pagebreak nonbreaking insertdatetime advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table  code wordcount',
        toolbar:
          'checklist numlist  indent undo redo bold underline  alignleft aligncenter alignright alignjustify fontsizeselect  forecolor backcolor link image media  removeformat emoticons pagebreak preview fullscreen  code codesample  table advlist',
        placeholder: 'Escribe tu tarea',
        height: 250,
        menubar: false,
        content_style:
          'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
    />
  )
}

export default EditorComponent
