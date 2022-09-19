import { Editor } from '@tinymce/tinymce-react'

const EditorComponent = () => {
  return (
    <Editor
      apiKey={import.meta.env.VITE_API_KEY_EDITOR}
      init={{
        plugins:
          'lists checklist image link code table media emoticons hr anchor pagebreak nonbreaking toc insertdatetime advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code wordcount',
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
