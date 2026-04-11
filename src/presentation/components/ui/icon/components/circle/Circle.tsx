import React from 'react';
import { Path, Svg, SvgProps } from 'react-native-svg';

function SvgCircle({ ...props }: SvgProps) {
  if (!props.width) props.width = 24;
  if (!props.height) props.height = 24;
  
  return (
    <Svg viewBox="0 -960 960 960" fill="none" {...props}>
      <Path d="M480.09-108.08q-77.15 0-145.06-29.32-67.92-29.33-118.16-79.6-50.23-50.27-79.51-118.05-29.28-67.79-29.28-144.86 0-77.15 29.32-145.06 29.33-67.92 79.6-118.16 50.27-50.23 118.05-79.51 67.79-29.28 144.86-29.28 77.15 0 145.06 29.32 67.92 29.33 118.16 79.6 50.23 50.27 79.51 118.05 29.28 67.79 29.28 144.86 0 77.15-29.32 145.06-29.33 67.92-79.6 118.16-50.27 50.23-118.05 79.51-67.79 29.28-144.86 29.28Z" fill={props.color}/>
    </Svg>
  );
}

export default React.memo(SvgCircle);