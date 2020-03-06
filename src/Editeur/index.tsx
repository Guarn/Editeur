import React, { useState, useEffect } from "react";
import { Node, Transforms } from "slate";
import * as S from "./Styled";
import Bloc from "./Bloc";
import { EditeurT } from "./interfaces";
import ToolBar from "./Toolbar";

const Editeur: React.FC = () => {
  const [editor, setEditor] = useState<EditeurT>({} as EditeurT);
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

  const changeValue = (val: Node[], index: number) => {
    let newState = [...value];
    newState[index] = val;
    setValue(newState);
  };

  const changeEditor = (val: EditeurT) => {
    Transforms.deselect(editor);
    setEditor(val);
  };

  useEffect(() => {}, []);
  return (
    <S.EditeurCtn>
      <ToolBar editor={editor} />
      <S.ChampEdition>
        {value.map((val: Node[], index: number) => {
          return (
            <Bloc
              key={`Bloc-${index}`}
              refEditor={ref => changeEditor(ref)}
              value={val}
              onChange={el => changeValue(el, index)}
            />
          );
        })}
      </S.ChampEdition>
    </S.EditeurCtn>
  );
};
export default Editeur;
