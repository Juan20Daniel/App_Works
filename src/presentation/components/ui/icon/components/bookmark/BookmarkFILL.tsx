import React from 'react';
import { Path, Svg, SvgProps } from 'react-native-svg';

function SvgBookmarkFILL({ ...props }: SvgProps) {
  if (!props.width) props.width = 24;
  if (!props.height) props.height = 24;
  
  return (
    <Svg viewBox="0 0 25 25" fill="none" {...props}>

      <Path d="M5.89648 20.8412V5.61204C5.89648 5.11881 6.0694 4.69937 6.41523 4.35371C6.76089 4.00788 7.1799 3.83496 7.67227 3.83496H17.3259C17.8183 3.83496 18.2373 4.00788 18.5829 4.35371C18.9288 4.69937 19.1017 5.11881 19.1017 5.61204V20.8412L12.4991 18.0206L5.89648 20.8412Z" fill={props.color}/>

    </Svg>
  );
}

export default React.memo(SvgBookmarkFILL);