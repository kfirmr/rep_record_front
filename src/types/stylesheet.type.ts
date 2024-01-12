import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

type StyleSheetGenrator = (
  props: Record<string, any>
) => CSSProperties | SxProps<any>;

export type StyleSheet = {
  [key: string]: CSSProperties | SxProps<any> | StyleSheetGenrator;
};
