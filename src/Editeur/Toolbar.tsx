import React, { useEffect } from "react";
import {
  ToolbarI,
  EditorDefs,
  ToolbarButtons,
  TexteStyles,
  SimpleButtonI
} from "./interfaces";
import { Transforms, Editor, Text } from "slate";
import * as S from "./Toolbar.styled";

const ToolBar = ({ editor }: ToolbarI) => {
  const handleClick = ({ type, value }: ToolbarButtons) => {
    if (editor) {
      switch (type) {
        case "TexteStylesInline":
          Transforms.setNodes(
            editor,
            { [value]: !isFormatActive(editor, value) },
            { match: Text.isText, split: true }
          );
      }
    }
  };
  return (
    <S.ToolBarCtn>
      <SimpleButton
        onClick={() =>
          handleClick({ type: "TexteStylesInline", value: "bold" })
        }
        isActive={isFormatActive(editor, "bold")}
        editor={editor}
        format="bold"
      >
        G
      </SimpleButton>
      <SimpleButton
        onClick={() =>
          handleClick({ type: "TexteStylesInline", value: "italic" })
        }
        isActive={isFormatActive(editor, "italic")}
        editor={editor}
        format="italic"
      >
        I
      </SimpleButton>
      <S.Separateur />
      {/*<FormatAlignLeft
        selected={handleClick({ type: "TexteStylesBlock", value: "left" })}
      />
      <S.Separateur />
      <FormatAlignCenter
        selected={handleClick({ type: "TexteStylesBlock", value: "center" })}
      />
      <S.Separateur />
      <FormatAlignRight
        selected={handleClick({ type: "TexteStylesBlock", value: "right" })}
      />
      <S.Separateur />
      <FormatAlignJustify
        selected={handleClick({ type: "TexteStylesBlock", value: "justify" })}
      />
      <S.Separateur />
      <FormatCouleurTexte
        selected={handleClick({
          type: "TexteColor",
          value: "couleurTexteActive"
        })}
        couleurTexte={"black"}
      />
      <S.Separateur />
      <FormatCouleurBackground
        selected={handleClick({
          type: "TexteColor",
          value: "couleurBackgroundActive"
        })}
        couleurBackground={"white"}
      />
      <S.Separateur />
      <FormatUnfold />
      <S.Separateur />
      <FormatFold selected={false} />
      <S.Separateur />
      <FormatH1 selected={handleClick({ type: "TexteHeader", value: "h1" })} />
      <S.Separateur />
      <FormatH2 selected={handleClick({ type: "TexteHeader", value: "h2" })} />
      <S.Separateur />
      <FormatH3 selected={handleClick({ type: "TexteHeader", value: "h3" })} />
      <S.Separateur />
      <FormatNumberedList
        selected={handleClick({ type: "TexteList", value: "numbered-list" })}
      />
      <S.Separateur />
      <FormatOrderedList
        selected={handleClick({ type: "TexteList", value: "bulleted-list" })}
      />
      <S.Separateur />
      <FormatLink selected={false} />*/}
    </S.ToolBarCtn>
  );
};
export default ToolBar;

const SimpleButton: React.FC<SimpleButtonI> = ({
  isActive,
  children,
  onClick,
  editor,
  format
}) => {
  useEffect(() => {
    console.log(isFormatActive(editor, format));
  });
  return (
    <S.Outils
      onMouseDown={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
      <S.RectSelect isActive={isFormatActive(editor, format)} />
    </S.Outils>
  );
};

const isFormatActive = (editor: EditorDefs | null, format: TexteStyles) => {
  if (editor) {
    console.log(editor);
    const [match] = Editor.nodes(editor, {
      match: n => n[format] === true,
      mode: "all"
    });
    console.log(!!match);

    return !!match;
  } else {
    console.log("Isactive false");
    return false;
  }
};
