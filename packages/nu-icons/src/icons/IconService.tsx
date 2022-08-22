import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#595959', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2C17.0544 2 17.9182 2.81588 17.9945 3.85074L18 4H20C21.0544 4 21.9182 4.81588 21.9945 5.85074L22 6V18C22 19.0544 21.1841 19.9182 20.1493 19.9945L20 20H18C18 21.0544 17.1841 21.9182 16.1493 21.9945L16 22H4C2.94564 22 2.08183 21.1841 2.00549 20.1493L2 20V4C2 2.94564 2.81588 2.08183 3.85074 2.00549L4 2H16ZM17 4L16.9933 3.88338C16.9399 3.4243 16.5757 3.06005 16.1166 3.00673L16 3H4C3.48716 3 3.06449 3.38604 3.00673 3.88338L3 4V20C3 20.5128 3.38604 20.9355 3.88338 20.9933L4 21H16C16.5128 21 16.9355 20.614 16.9933 20.1166L17 20V4ZM20 19H18V5H20L20.1166 5.00673C20.614 5.06449 21 5.48716 21 6V18L20.9933 18.1166C20.9355 18.614 20.5128 19 20 19ZM14 9C14 6.79086 12.2091 5 10 5C7.79086 5 6 6.79086 6 9C6 11.2091 7.79086 13 10 13C12.2091 13 14 11.2091 14 9ZM7 9C7 7.34315 8.34315 6 10 6C11.6569 6 13 7.34315 13 9C13 10.6569 11.6569 12 10 12C8.34315 12 7 10.6569 7 9ZM5.5 14C5.22386 14 5 14.2239 5 14.5C5 14.7761 5.22386 15 5.5 15H14.5C14.7761 15 15 14.7761 15 14.5C15 14.2239 14.7761 14 14.5 14H5.5ZM5 16.5C5 16.2239 5.22386 16 5.5 16H14.5C14.7761 16 15 16.2239 15 16.5C15 16.7761 14.7761 17 14.5 17H5.5C5.22386 17 5 16.7761 5 16.5ZM5.5 18C5.22386 18 5 18.2239 5 18.5C5 18.7761 5.22386 19 5.5 19H14.5C14.7761 19 15 18.7761 15 18.5C15 18.2239 14.7761 18 14.5 18H5.5Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'service');
export default IconComponent;