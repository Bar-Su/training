"use client";
import { FC, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const AngleSlider: FC = () => {
  const [angleValue, setAnglaValue] = useState<number | number[]>(0);

  return (
    <div>
      <Slider
        style={{ width: "150px", paddingTop: "20px" }}
        min={0}
        max={90}
        step={10}
        onChange={(value) => {
          setAnglaValue(value);
        }}
      />
      <div>{angleValue}</div>
    </div>
  );
};
