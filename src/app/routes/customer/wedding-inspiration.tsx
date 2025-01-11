import Wedding from "../../../features/wedding-inspiration/components/wedding";
import { ComponentTypes } from "../../../types/component-types";

export default function WeddingInspiration({ type }: ComponentTypes) {
  return <Wedding type={type} />;
}
