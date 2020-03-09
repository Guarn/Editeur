import { Editor } from "slate";
import { ReactEditor } from "slate-react";
import { Node } from "slate";

export type EditorDefs = Editor & ReactEditor;

export interface EditeurI {
  onChange?: (val: Node[][]) => void;
  listeCours?: Node[][];
}

export interface ChampEditionI {
  listeCours?: Node[][];
  setEditor: (val: EditorDefs | null) => void;
  onChange?: (val: Node[][]) => void;
}

// Styled Components
export type BlocT = {
  isActive: boolean;
};

// Component
export interface BlocI {
  value: Node[];
  onChange: (val: Node[]) => void;
  setEditor: (val: EditorDefs | null) => void;
  isActive: boolean;
}

export interface ToolbarI {
  editor: EditorDefs | null;
}

export interface SimpleButtonI {
  isActive: boolean;
  onClick: () => void;
  editor: EditorDefs | null;
  format: TexteStylesInline;
}

/**
 * Bouton actif
 * @param {boolean} isActive
 */
export interface RectSelectI {
  isActive: boolean;
}

export type ToolbarButtons =
  | { type: "TexteStylesInline"; value: TexteFormats | TexteColor }
  | { type: "TexteStylesBlock"; value: TexteAlign | TexteHeader | TexteList };

export type TexteFormats = "bold" | "italic";
export type TexteAlign = "right" | "justify" | "left" | "center";
export type TexteHeader = "h1" | "h2" | "h3";
export type TexteList = "numbered-list" | "bulleted-list";
export type TexteColor = "couleurTexteActive" | "couleurBackgroundActive";

export type TexteStylesInline = TexteColor | TexteFormats;

export type TexteStylesBlock = TexteAlign | TexteHeader | TexteList;

export type TexteStyles = TexteStylesInline | TexteStylesBlock;
