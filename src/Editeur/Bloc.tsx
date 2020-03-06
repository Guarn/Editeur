import React, { useMemo } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { EditeurT } from "./interfaces";
import { withHistory } from "slate-history";
import { isEqual } from "lodash";

export interface BlocI {
  value: Node[];
  onChange: (val: Node[]) => void;
  refEditor: (val: EditeurT) => void;
}

const Bloc = ({ value, onChange, refEditor }: BlocI) => {
  const editor = useMemo(() => withReact(withHistory(createEditor())), []);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={val => {
        if (!isEqual(value, val)) {
          onChange(val);
        }
      }}
    >
      <Editable
        onFocus={() => {
          refEditor(editor);
        }}
        spellCheck
        renderLeaf={props => <Leaf {...props} />}
      />
    </Slate>
  );
};
export default Bloc;

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
