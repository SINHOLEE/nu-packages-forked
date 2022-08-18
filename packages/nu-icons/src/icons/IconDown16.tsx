import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.86852 4L12.1315 4C12.9302 4 13.4066 4.89015 12.9635 5.5547L8.83205 11.7519C8.43623 12.3457 7.56377 12.3457 7.16795 11.7519L3.03647 5.5547C2.59343 4.89014 3.06982 4 3.86852 4Z"
        fill="#616161"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'down-16');
export default IconComponent;
