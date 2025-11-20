"use client";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";

const percentage = 60;

export default function CircleProgress() {
  return (
    <div style={{ width: "200px", height: "200px" }}>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#214ca4" />
            <stop offset="100%" stopColor="#8704b2" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgressbarWithChildren
        value={100}
        text={`${100}%`}
        strokeWidth={8}
        styles={buildStyles({
          strokeLinecap: "butt",
          pathColor: "url(#progressGradient)",
          trailColor: "#e5e7eb",
        })}
      >
        <RadialSeparators
          count={12}
          style={{
            background: "#fff",
            width: "2px",
            // This needs to be equal to props.strokeWidth
            height: `${10}%`,
          }}
        />
      </CircularProgressbarWithChildren>
    </div>
  );
}
