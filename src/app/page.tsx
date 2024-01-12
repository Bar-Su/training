"use client";
import { AngleSlider } from "@/components/AngleSlider";
import { LightBeam } from "@/components/LightBeam";
import { TodoInput } from "@/components/TodoInput";
import { transform } from "framer-motion";
import { root } from "postcss";
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

  return (
    <main>
      <div className="angle-simulator">
        <TodoInput valueInput={angleValue} />
        <AngleSlider
          angleValueSlider={angleValue}
          onAngleChange={setAnglaValue}
        />
        {/* <ReflectionBeam></ReflectionBeam> */}
        <LightBeam lightBeamAngle={angleValue} />
      </div>
    </main>
  );
}
