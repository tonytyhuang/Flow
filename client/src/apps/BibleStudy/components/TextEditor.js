import { useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "../styles/TextEditor.css";

export default function TextEditor() {
  const ref = useCallback((wrap) => {
    if (wrap == null) {
      return;
    }
    wrap.innerHTML = "";
    const editor = document.createElement("div");
    wrap.append(editor);
    var toolbarOptions = [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike"], // toggled buttons
      [{ header: 1 }, { header: 2 }], // custom button values
      ["blockquote", "code-block"],

      [{ list: "ordered" }, { list: "bullet" }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],

      ["clean"], // remove formatting button
    ];
    new Quill(editor, {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: "snow",
    });

    return () => {
      ref.innerHTML = "";
    };
  }, []);

  return <div className="TextContainer" ref={ref}></div>;
}
