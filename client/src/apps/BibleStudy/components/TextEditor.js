import { useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default function TextEditor() {
  const ref = useCallback((wrap) => {
    if (wrap == null) {
      return;
    }
    wrap.innerHTML = "";
    const editor = document.createElement("div");
    wrap.append(editor);
    new Quill(editor, { theme: "snow" });

    return () => {
      ref.innerHTML = "";
    };
  }, []);

  return <div id="container" ref={ref}></div>;
}
