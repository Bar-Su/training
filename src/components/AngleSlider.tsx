"use client";
import { FC } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface AngleSliderProps {
  angleValueSlider: any;
  onAngleChange: (newValue: any) => void;
}

export const AngleSlider: FC<AngleSliderProps> = ({
  angleValueSlider,
  onAngleChange,
}) => {
  return (
    <div>
      <Slider
        style={{ width: "150px", paddingTop: "20px" }}
        min={-90}
        max={0}
        step={5}
        onChange={(angleValue) => {
          onAngleChange(angleValue);
        }}
      />
      <div>{angleValueSlider} °</div>
    </div>
  );
};
