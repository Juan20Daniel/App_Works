import React from 'react';
import { Path, Svg, SvgProps } from 'react-native-svg';

function SvgClose({ ...props }: SvgProps) {
  if (!props.width) props.width = 24;
  if (!props.height) props.height = 24;
  
  return (
    <Svg viewBox="0 -960 960 960" fill="none" {...props}>
      <Path d="m258.42-218.69-38.92-39.73L440.27-480 219.5-701.58l38.92-39.73L480-519.73l221.58-221.58 38.92 39.73L519.73-480 740.5-258.42l-38.92 39.73L480-440.27 258.42-218.69Z" fill={props.color}/>
    </Svg>
  );
}

export default React.memo(SvgClose);