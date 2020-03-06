import React from "react";
import * as S from "./Styled";
import { EditeurT } from "./interfaces";
import { Transforms, Editor, Text } from "slate";

export interface ToolbarI {
  editor: EditeurT;
}

const ToolBar = ({ editor }: ToolbarI) => {
  const handle = () => {
    Transforms.setNodes(
      editor,
      { bold: !isFormatActive(editor, "bold") },
      { match: Text.isText, split: true }
    );
  };
  return (
    <S.ToolbarCTN
      onMouseDown={e => {
        e.preventDefault();

        handle();
      }}
    >
      GRAS
    </S.ToolbarCTN>
  );
};
export default ToolBar;

const isFormatActive = (editor: any, format: any) => {
  const [match] = Editor.nodes(editor, {
    match: n => n[format] === true,
    mode: "all"
  });
  return !!match;
};
