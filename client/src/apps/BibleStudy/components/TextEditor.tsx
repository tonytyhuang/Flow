import { useEffect } from "react";
import { FC, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/TextEditor.css";

interface Props {
  onChange: (key: number, text: string | undefined) => void;
  index: number;
}

const TextEditor:FC<Props> = ({index, onChange}) => {
  const [body, setBody] = useState<string | undefined>();
  var toolbarOptions = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"], // toggled buttons
      [{ header: 1 }, { header: 2 }], // custom button values
      ["blockquote", "code-block"],

      [{ list: "ordered" }, { list: "bullet" }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
  };
  useEffect(() => {
    if (body){
      onChange(index, body);
    }
  }, [body])
  return (
    <div className="TextContainer">
      <ReactQuill
        theme="snow"
        placeholder="hello"
        modules={toolbarOptions}
        onChange={setBody}
        value = {body || ""}
      ></ReactQuill>
    </div>
  );
}

export default TextEditor;
