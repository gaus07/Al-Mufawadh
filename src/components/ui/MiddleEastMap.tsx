"use client";

import { useMemo } from "react";
import DottedMap from "dotted-map";

type MapWithImage = DottedMap & {
  image: { width: number; height: number };
};

const pins = [
  { lat: 20.5937, lng: 78.9629, label: "India", color: "#0a2b28" },
  { lat: 23.8859, lng: 45.0792, label: "Saudi Arabia", color: "#0a2b28" },
  { lat: 29.3117, lng: 47.4818, label: "Kuwait", color: "#0a2b28" },
  { lat: 23.4241, lng: 53.8478, label: "UAE", color: "#0a2b28" },
];

export default function MiddleEastMap() {
  const { mapInstance, svgString, width, height } = useMemo(() => {
    const map = new DottedMap({ height: 70, grid: "diagonal" });

    const svg = map.getSVG({
      shape: "circle",
      radius: 0.22,
      color: "#777272",
      backgroundColor: "#FFFFFF",
    });

    const { width, height } = (map as MapWithImage).image;

    return { mapInstance: map, svgString: svg, width, height };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto relative">
      {/* data URI → next/image no benefit, disable rule */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`}
        className="h-full w-full [mask-image:radial-gradient(ellipse_at_center,white_0%,white_60%,transparent_100%)] pointer-events-none select-none"
        alt="middle east map"
        draggable={false}
      />

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {pins.map((pin, i) => {
          const point = mapInstance.getPin({ lat: pin.lat, lng: pin.lng });

          return (
            <g key={`pin-${i}`}>
              {[0, 1, 2].map((ringIndex) => (
                <circle
                  key={`ring-${ringIndex}`}
                  cx={point.x}
                  cy={point.y}
                  r="0.5"
                  fill="none"
                  stroke={pin.color}
                  strokeWidth="0.1"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    from="0.5"
                    to="3"
                    dur="2s"
                    begin={`${ringIndex * 0.6}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.6"
                    to="0"
                    dur="2s"
                    begin={`${ringIndex * 0.6}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
              <circle cx={point.x} cy={point.y} r="0.5" fill={pin.color} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
