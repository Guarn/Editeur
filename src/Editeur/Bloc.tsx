import React, { useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { BlocI } from "./interfaces";
import { withHistory } from "slate-history";
import { isEqual } from "lodash";
import * as S from "./Styled";

const Bloc = ({ value, onChange, setEditor, isActive }: BlocI) => {
  const editor = useMemo(() => withReact(withHistory(createEditor())), []);
  return (
    <S.BlocCtn>
      <S.Bloc isActive={isActive}>
        <Slate
          editor={editor}
          value={value}
          onChange={val => {
            onChange(val);
          }}
        >
          <Editable
            onFocus={(e: any) => {
              setEditor(editor);
            }}
            onBlur={() => {
              setEditor(null);
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
