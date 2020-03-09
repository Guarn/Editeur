import React, { useState, useEffect } from "react";
import * as S from "./Styled";
import { EditorDefs, EditeurI } from "./interfaces";
import ToolBar from "./Toolbar";
import ChampEdition from "./ChampEdition";

const Editeur = ({ onChange, listeCours }: EditeurI) => {
  const [editor, setEditor] = useState<EditorDefs | null>(null);
  const [ii, iii] = useState(0);
  const changeEditor = (val: EditorDefs | null) => {
    setEditor(val);
  };

  return (
    <S.EditeurCtn>
      <ToolBar editor={editor} />
      <ChampEdition
        listeCours={listeCours}
        onChange={val => {
          iii(ii + 1);
          onChange && onChange(val);
        }}
        setEditor={changeEditor}
      />
    </S.EditeurCtn>
  );
};
export default Editeur;
