import React from "react";
import { Canvas } from "@react-pdf/renderer";

/**
 *
 * @param {{strDotColor:string, strMarginRight:string}} param0
 * @returns
 */
const DotIcon = ({ strDotColor, strMarginRight }) => {
  const dotSize = 6;

  const drawDot = (dotSize, strDotColor, doc) => {
    const path = "M3,12a9,9 0 1,0 18,0a9,9 0 1,0 -18,0";
    return doc
      .scale(dotSize / 24)
      .path(path)
      .fillColor(strDotColor)
      .fill();
  };

  return (
    <Canvas
      debug={false}
      style={[
        { width: dotSize, height: dotSize },
        { margin: 4, marginRight: strMarginRight },
      ]}
      paint={drawDot.bind(null, dotSize, strDotColor)}
    />
  );
};

export { DotIcon };
