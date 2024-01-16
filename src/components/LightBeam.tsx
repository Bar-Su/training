import { relative } from "path";
import { FC } from "react";

interface LightBeamProps {
  lightBeamAngle: number;
  refractedBeamAngle: number;
}

export const LightBeam: FC<LightBeamProps> = ({ lightBeamAngle, refractedBeamAngle }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "1px",
            height: "150px",
            color: "red",
            border: "solid red",
            transformOrigin: "bottom",
            transform: `rotate(${lightBeamAngle}deg)`,
          }}
        >
          <div style={{ padding: "10px", transform: "rotate(90deg)" }}>
            incidentRay
          </div>
        </div>
        <div
          style={{ width: "1px", height: "150px", border: "solid blue" }}
        ></div>

        <div
          style={{
            width: "1px",
            height: "150px",
            color: "red",
            border: "solid red",
            transformOrigin: "bottom",
            transform: `rotate(${-lightBeamAngle}deg)`,
          }}
        >
          <div
            style={{
              padding: "10px",
              transform: "rotate(90deg)",
              scale: "1",
            }}
          >
            refelctedRay
          </div>
        </div>
      </div>

      <div
        style={{
          width: "1px",
          height: "150px",
          border: "solid hotpink",
          transformOrigin: "top",
          transform: `rotate(${refractedBeamAngle}deg)`,
          position: "relative",
          left: " 3px",
        }}
      ></div>
    </div>
  );
};
