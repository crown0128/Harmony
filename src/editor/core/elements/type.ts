import { Group } from "konva/lib/Group";
import { FC, MutableRefObject } from "react";
import { IKeyTool } from "../hooks/tool/types";

export type IStyleElement = {
  backgroundColor?: string;
  fontSize?: number;
  fontStyle?: string;
  fontFamily?: string;
  textDecoration?: string;
  fontWeight?: number;
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffset?: {
    x?: number;
    y?: number;
  };
  shadowOpacity?: number;
  borderRadius?: number;
  isAllBorderRadius?: boolean;
  borderRadiusTopLeft?: number;
  zIndex?: number;
  borderRadiusTopRight?: number;
  borderRadiusBottomRight?: number;
  borderRadiusBottomLeft?: number;
  colorText?: string;
  stroke?: string;
  strokeWidth?: number;
};

export type IElement = {
  id: string;
  tool: IKeyTool;
  x: number;
  y: number;
  width?: number;
  height?: number;
  text?: string;
  visible: boolean;
  resolution?: "portrait" | "landscape";
  isBlocked: boolean;
  pageId: string;
  groupId: string;
  points?: number[];
  src?: string;
  rotate?: number;
  view_position: number;
  style?: IStyleElement;
};

export type IParamsElement = Partial<IElement>;

export type IPELMT = IParamsElement | IElement;

export type IFCElement = IParamsElement & {
  draggable: boolean;
  onChange: (item: IPELMT) => void;
  isSelected: boolean;
  onRef?: (ref: MutableRefObject<Group | undefined>) => void;
  isRef?: boolean;
  onSelect: (item: IPELMT) => void;
  isMoving: boolean;
  element?: IPELMT;
  elements?: IPELMT[];
};

export type FCE = FC<IFCElement>;
