import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/TextEditor.css";

export default function TextEditor() {
  TextEditor.toolbarOptions = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike"], // toggled buttons
      [{ header: 1 }, { header: 2 }], // custom button values
      ["blockquote", "code-block"],

      [{ list: "ordered" }, { list: "bullet" }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
  };

  return (
    <div className="TextContainer">
      <ReactQuill
        theme="snow"
        placeholder="hello"
        modules={TextEditor.toolbarOptions}
      ></ReactQuill>
    </div>
  );
}
