import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowIcon = memo(({color}) => {
  return (
    <Svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill={color || '#A39E93'}
        d="M11.3226 0.412704L6.68781 5.0654L2.05303 0.412704L0.629272 1.84509L6.68781 7.94032L12.7463 1.84509L11.3226 0.412704Z"
      />
    </Svg>
  );
});
