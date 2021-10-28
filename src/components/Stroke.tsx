import React from 'react';

import { Polygons } from '@ge9/kage-engine-2';

export interface StrokeComponentProps {
  polygons: Polygons;
}

const StrokeComponent = (props: StrokeComponentProps) => (
  <>
    {props.polygons.array.map((polygon, i) => (
      <polygon key={i} points={polygon.array.map(({ x, y }) => `${x},${y} `).join("")} />
    ))}
  </>
);

export default StrokeComponent;
