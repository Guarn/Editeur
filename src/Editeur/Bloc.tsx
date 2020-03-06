import React, { useMemo } from "react";
import { createEditor, Transforms, Editor, Text, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { EditeurT } from "./interfaces";

export interface BlocI {
  value: Node[];
  onChange: (val: Node[]) => void;
  refEditor: (val: EditeurT) => void;
}

const Bloc = ({ value, onChange, refEditor }: BlocI) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  return (
    <Slate editor={editor} value={value} onChange={val => onChange(val)}>
      <Editable
        onFocus={() => refEditor(editor)}
        spellCheck
        renderLeaf={props => <Leaf {...props} />}
        placeholder="Enter some text..."
        onDOMBeforeInput={(event: any) => {
          switch (event.inputType) {
            case "formatBold":
              return toggleFormat(editor, "bold");
            case "formatItalic":
              return toggleFormat(editor, "italic");
            case "formatUnderline":
              return toggleFormat(editor, "underline");
          }
        }}
      />
    </Slate>
  );
};
export default Bloc;

const toggleFormat = (editor: any, format: any) => {
  const isActive = isFormatActive(editor, format);
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: Text.isText, split: true }
  );
};

const isFormatActive = (editor: any, format: any) => {
  const [match] = Editor.nodes(editor, {
    match: n => n[format] === true,
    mode: "all"
  });
  return !!match;
};

const Leaf = ({ attributes, children, leaf }: any) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underlined) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
