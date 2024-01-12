import { FC } from "react";

interface LightBeamProps {
  lightBeamAngle: number;
}

export const LightBeam: FC<LightBeamProps> = ({ lightBeamAngle }) => {
  return (
    <section style={{ display: "flex", flexDirection: "row" }}>
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
    </section>
  );
};
