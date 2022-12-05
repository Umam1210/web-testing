import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuillEditor({ value, setValue, style }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }]
    ]
  };

  return (
    <ReactQuill theme="snow" value={value} modules={modules} onChange={setValue} style={style} />
  );
}

export default QuillEditor;
