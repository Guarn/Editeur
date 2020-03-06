import React, { useState } from "react";
import { Node } from "slate";
import * as S from "./Styled";
import Bloc from "./Bloc";
import { EditeurT } from "./interfaces";

const Editeur: React.FC = () => {
  const [editor, setEditor] = useState<EditeurT>(null);
  const [value, setValue] = useState<Node[][]>([
    [
      {
        type: "paragraph",
        children: [{ text: "First paragraph." }]
      }
    ],
    [
      {
        type: "paragraph",
        children: [{ text: "Second paragraph." }]
      }
    ]
  ]);

  const handleChange = (val: Node[], index: number) => {
    let newState = [...value];
    newState[index] = val;
    setValue(newState);
  };

  return (
    <S.EditeurCtn>
      {value.map((val: Node[], index: number) => {
        return (
          <Bloc
            refEditor={ref => setEditor(ref)}
            value={val}
            onChange={el => handleChange(el, index)}
          />
        );
      })}
    </S.EditeurCtn>
  );
};
export default Editeur;
/*
const ToolBar = ({ editor }: any) => {
  const handle = () => {
    Transforms.setNodes(
      editor,
      { bold: !isFormatActive(editor, "bold") },
      { match: Text.isText, split: true }
    );
  };
  return (
    <div
      onMouseDown={e => {
        e.preventDefault();

        handle();
      }}
    >
      GRAS
    </div>
  );
};
*/
