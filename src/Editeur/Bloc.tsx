import React, { useMemo, useState } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { EditeurT } from "./interfaces";
import { withHistory } from "slate-history";
import { isEqual } from "lodash";
import * as S from "./Styled";

export interface BlocI {
  value: Node[];
  onChange: (val: Node[]) => void;
  refEditor: (val: EditeurT) => void;
}

const Bloc = ({ value, onChange, refEditor }: BlocI) => {
  const editor = useMemo(() => withReact(withHistory(createEditor())), []);
  const [isSelected, setIsSelected] = useState(false);
  return (
    <S.BlocCtn>
      <S.Bloc selected={isSelected}>
        <Slate
          editor={editor}
          value={value}
          onChange={val => {
            console.log("change");

            if (!isEqual(value, val)) {
              onChange(val);
            }
          }}
        >
          <Editable
            onFocus={(e: any) => {
              setIsSelected(true);
              refEditor(editor);
              console.log("focus");
              e.persist();
              console.log(e);
            }}
            onBlur={() => {
              setIsSelected(false);
              console.log("blur");
            }}
            spellCheck
            renderLeaf={props => <Leaf {...props} />}
          />
        </Slate>
      </S.Bloc>
    </S.BlocCtn>
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
