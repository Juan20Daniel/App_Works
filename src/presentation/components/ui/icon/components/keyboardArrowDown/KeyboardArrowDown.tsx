import React from 'react';
import { Path, Svg, SvgProps } from 'react-native-svg';

function SvgKeyboardArrowDown({ ...props }: SvgProps) {
  if (!props.width) props.width = 24;
  if (!props.height) props.height = 24;
  
  return (
    <Svg viewBox="0 -960 960 960" fill="none" {...props}>
      <Path d="m480-361.89-221.31-221.3 39.73-38.92L480-440.54l181.58-181.57 39.73 38.92L480-361.89Z" fill={props.color}/>
    </Svg>
  );
}

export default React.memo(SvgKeyboardArrowDown);