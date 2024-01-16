"use client";
import { AngleSlider } from "@/components/AngleSlider";
import { LightBeam } from "@/components/LightBeam";
import { TodoInput } from "@/components/TodoInput";
import { Button } from "@nextui-org/react";
import { transform } from "framer-motion";
import { Philosopher } from "next/font/google";
import { root } from "postcss";
import { pid } from "process";
import { useState } from "react";
import { styled } from "styled-components";
// const ReflectionBeam = styled.div`
// width: 1px,
// height: 100px,
// color: red,
// border: solid red,
// transformOrigin: bottom,
// transform: `rotate(${-angleValue}deg)`;

export default function Home() {
  const [angleValue, setAnglaValue] = useState<number>(0);
  const [refractedAngle, setRefractedAngle] = useState(0);
  const getRefractedAngle = () => {
    const n1Air = 1.000277;
    const n2Diamond = 2.417;
    const valueOfRefractedAngle = (n1Air * Math.sin(angleValue)) / n2Diamond;
    const value = (Math.asin(valueOfRefractedAngle) * 180) / Math.PI;
    return setRefractedAngle(value);
  };
  const changeAngle = () => {
    setAnglaValue
    const n1Air = 1.000277;
    const n2Diamond = 2.417;
    const valueOfRefractedAngle = (n1Air * Math.sin(angleValue)) / n2Diamond;
    setRefractedAngle(Math.asin(valueOfRefractedAngle));
  };
  return (
    <main>
      <div className="angle-simulator">
        <TodoInput valueInput={angleValue} />
        <Button onClick={changeAngle}>x</Button>
        <AngleSlider
          angleValueSlider={angleValue}
          onAngleChange={changeAngle}
        />
        {/* <ReflectionBeam></ReflectionBeam> */}
        <LightBeam
          lightBeamAngle={angleValue}
          refractedBeamAngle={refractedAngle}
        />
      </div>
    </main>
  );
}
