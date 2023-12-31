import { IElement } from "@/editor/core/elements/type";
import { v4 as uuidv4 } from "uuid";
import { IRelativePosition } from "../../types";

const textElementStart = (
  event: IRelativePosition,
  count: number,
  pageId: string,
  groupId: string,
  params?: {
    text?: string;
  }
): IElement => {
  const { x, y } = event;
  return {
    id: uuidv4(),
    x,
    y,
    pageId,
    isBlocked: false,
    groupId,
    tool: "TEXT",
    rotate: 0,
    visible: true,
    text: params?.text ?? uuidv4().slice(0, 4),
    style: {
      backgroundColor: "#000",
      stroke: "#ffffff",
      strokeWidth: 0,
      colorText: "#000",
      fontStyle: "normal",
      shadowBlur: 0,
      shadowColor: "#000",
      shadowOffset: {
        x: 0,
        y: 0,
      },
      shadowOpacity: 1,
      fontWeight: 400,
      fontFamily: "Roboto",
      fontSize: 12,
    },
    view_position: count + 1,
    height: 100,
    width: 100,
  };
};
export default textElementStart;
