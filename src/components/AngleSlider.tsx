import { FC } from "react";
import { Slider } from "@nextui-org/react";

export const AngleSlider: FC = () => {
  return (
    <Slider
      label="Angle"
      step={0.01}
      maxValue={1}
      minValue={0}
      defaultValue={0.4}
      className="max-w-md"
    />
  );
};
