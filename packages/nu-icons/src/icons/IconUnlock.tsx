import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize20 {
  size?: '20';
}
type OverrideIconSize = OverrideIconSize20;

const SvgComponent = ({
  size = '20',
  color = '#616161',
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
  if (size === '20') {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.43633 5.02155C7.08103 3.83676 8.43011 3 10.0142 3C12.2588 3 14.0028 4.66346 14.0028 6.62543V7L10 7.00001L5 7C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V9C17 7.89543 16.1046 7 15 7V6.625C15 4.03062 12.7261 2 10.0142 2C8.08299 2 6.38881 3.02127 5.56102 4.54253C5.42912 4.78493 5.51813 5.08867 5.75984 5.22094C6.00155 5.35322 6.30442 5.26395 6.43633 5.02155ZM5 8C4.48716 8 4.06449 8.38604 4.00673 8.88338L4 9V15C4 15.5128 4.38604 15.9355 4.88338 15.9933L5 16H15C15.5128 16 15.9355 15.614 15.9933 15.1166L16 15V9C16 8.48716 15.614 8.06449 15.1166 8.00673L15 8H5ZM12 11C12 9.89543 11.1046 9 10 9C8.89543 9 8 9.89543 8 11C8 11.9319 8.63738 12.715 9.49998 12.937L9.5 14.5C9.5 14.7761 9.72386 15 10 15C10.2761 15 10.5 14.7761 10.5 14.5L10.501 12.9367C11.3631 12.7144 12 11.9316 12 11ZM10 10C9.44772 10 9 10.4477 9 11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11C11 10.4477 10.5523 10 10 10Z"
          fill={color}
        />
      </svg>
    );
  }
  return <div></div>;
};
/**
 * 컬러 주입 가능여부: 가능,
 * 기본컬러:#616161
 * 사용가능한 사이즈는 20 입니다.
 *
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'unlock');
export default IconComponent;
