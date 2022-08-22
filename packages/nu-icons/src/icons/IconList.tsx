import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#595959', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 4C21.1046 4 22 4.89543 22 6C22 7.05436 21.1841 7.91817 20.1493 7.99451L20 8H4C2.89543 8 2 7.10457 2 6C2 4.94564 2.81588 4.08183 3.85074 4.00549L4 4H20ZM20 10C21.1046 10 22 10.8954 22 12C22 13.0544 21.1841 13.9182 20.1493 13.9945L20 14H4C2.89543 14 2 13.1046 2 12C2 10.9456 2.81588 10.0818 3.85074 10.0055L4 10H20ZM22 18C22 16.8954 21.1046 16 20 16H4L3.85074 16.0055C2.81588 16.0818 2 16.9456 2 18C2 19.1046 2.89543 20 4 20H20L20.1493 19.9945C21.1841 19.9182 22 19.0544 22 18ZM4 17H20L20.1166 17.0067C20.614 17.0645 21 17.4872 21 18C21 18.5523 20.5523 19 20 19H4L3.88338 18.9933C3.38604 18.9355 3 18.5128 3 18C3 17.4477 3.44772 17 4 17ZM4 11H20L20.1166 11.0067C20.614 11.0645 21 11.4872 21 12C21 12.5523 20.5523 13 20 13H4L3.88338 12.9933C3.38604 12.9355 3 12.5128 3 12C3 11.4477 3.44772 11 4 11ZM4 5H20L20.1166 5.00673C20.614 5.06449 21 5.48716 21 6C21 6.55228 20.5523 7 20 7H4L3.88338 6.99327C3.38604 6.93551 3 6.51284 3 6C3 5.44772 3.44772 5 4 5Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'list');
export default IconComponent;