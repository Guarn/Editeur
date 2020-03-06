import { Editor } from "slate";
import { ReactEditor } from "slate-react";

export type EditeurT = (Editor & ReactEditor) | null;
