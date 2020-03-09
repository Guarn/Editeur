import React, { useState } from "react";
import * as S from "./Styled";
import { ChampEditionI, EditorDefs } from "./interfaces";
import { Node } from "slate";
import Bloc from "./Bloc";

const ChampEdition: React.FC<ChampEditionI> = ({
  listeCours,
  onChange,
  setEditor
}) => {
  const [value, setValue] = useState<Node[][]>(listeCours || initialValue);
  const [indexEditor, setIndexEditor] = useState<number | null>(null);

  const changeValue = (val: Node[], index: number) => {
    console.log(val);

    let newState = [...value];
    newState[index] = val;
    setValue(newState);
    if (onChange) onChange(newState);
  };

  const changeEditor = (editor: EditorDefs | null, index: number) => {
    if (editor) {
      setIndexEditor(index);
      setEditor(editor);
    } else {
      setIndexEditor(null);
      setEditor(null);
    }
  };

  return (
    <S.ChampEditionCtn>
      <S.ChampEdition>
        {value.map((val, index: number) => {
          return (
            <Bloc
              key={`Bloc-${index}`}
              setEditor={val => changeEditor(val, index)}
              value={val}
              onChange={el => changeValue(el, index)}
              isActive={index === indexEditor}
            />
          );
        })}
      </S.ChampEdition>
    </S.ChampEditionCtn>
  );
};
export default ChampEdition;

const initialValue = [
  [
    {
      type: "paragraph",
      children: [{ text: "First paragraph." }]
    }
  ]
];
