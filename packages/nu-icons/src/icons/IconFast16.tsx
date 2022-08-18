import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.70942 8.24725L6.47396 2.74725C6.54035 2.54034 6.73277 2.39999 6.95006 2.39999H9.72455C10.0799 2.39999 10.3218 2.76025 10.1874 3.08918L8.91139 6.21081C8.77694 6.53973 9.01888 6.89999 9.37422 6.89999H10.4433C10.8654 6.89999 11.0976 7.39069 10.8299 7.71705L6.17565 13.3924C5.82655 13.8181 5.14627 13.4495 5.31231 12.9246L6.37951 9.55079C6.48147 9.22848 6.24084 8.89999 5.90279 8.89999H5.18552C4.84661 8.89999 4.60589 8.56995 4.70942 8.24725Z"
        fill="#FFB633"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'fast-16');
export default IconComponent;
