import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize24 {
  size: '24';
}
type OverrideIconSize = OverrideIconSize24;

const SvgComponent = ({
  size,
  color = '#616161',
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
  if (size === '24') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 4H20C21.1046 4 22 4.89543 22 6V15V16C22 17.1046 21.1046 18 20 18H12.5V19H16.5C16.7761 19 17 19.2239 17 19.5C17 19.7761 16.7761 20 16.5 20H12.5H11.5H7.5C7.22386 20 7 19.7761 7 19.5C7 19.2239 7.22386 19 7.5 19H11.5V18H4C2.89543 18 2 17.1046 2 16V15V6C2 4.89543 2.89543 4 4 4ZM3 16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16H3ZM21 15H3V6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6V15ZM12.013 7.3039L14.7425 9.0473C15.4027 9.46904 15.5962 10.3461 15.1745 11.0064C15.0636 11.18 14.9162 11.3274 14.7426 11.4383L12.0133 13.1814C11.353 13.6031 10.4759 13.4096 10.0542 12.7494C9.90855 12.5213 9.83115 12.2564 9.83113 11.9858L9.83096 8.49928C9.83092 7.71585 10.466 7.08079 11.2494 7.08083C11.52 7.08084 11.7849 7.15825 12.013 7.3039ZM14.2335 10.6413C14.2914 10.6043 14.3405 10.5552 14.3775 10.4973C14.518 10.2772 14.4536 9.98485 14.2335 9.84427L11.504 8.10087C11.428 8.05232 11.3397 8.02652 11.2495 8.02651C10.9883 8.0265 10.7766 8.23819 10.7766 8.49933L10.7768 11.9859C10.7768 12.076 10.8026 12.1644 10.8512 12.2404C10.9918 12.4605 11.2841 12.5249 11.5042 12.3844L14.2335 10.6413Z"
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
 * 사용가능한 사이즈는 24 입니다.
 * 20(디폴트)사이즈가 없으므로 size prop은 required 입니다.
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'unicornlive');
export default IconComponent;
