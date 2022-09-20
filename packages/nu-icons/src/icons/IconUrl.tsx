import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize32 {
  size: '32';
}
type OverrideIconSize = OverrideIconSize32;

const SvgComponent = ({
  size,
  color = '#616161',
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
  if (size === '32') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM6.66667 12.9083H8.22378V16.7926C8.22378 17.3515 8.37065 17.8007 8.66439 18.1401C8.95813 18.4794 9.35596 18.6491 9.85789 18.6491C10.3598 18.6491 10.7576 18.4794 11.0514 18.1401C11.3451 17.8007 11.492 17.3515 11.492 16.7926V12.9083H13.0491V16.7926C13.0491 17.4428 12.9165 18.0146 12.6513 18.5079C12.3861 19.0013 12.0125 19.382 11.5305 19.6501C11.0485 19.9182 10.491 20.0522 9.85789 20.0522C9.22477 20.0522 8.66724 19.9182 8.18528 19.6501C7.70331 19.382 7.32972 19.0013 7.0645 18.5079C6.79928 18.0146 6.66667 17.4428 6.66667 16.7926V12.9083ZM18.345 19.8811L16.9932 17.6823H15.7527V19.8811H14.1956V12.9083H17.0018C17.5836 12.9083 18.0855 13.0067 18.5076 13.2035C18.9296 13.4003 19.2519 13.6783 19.4743 14.0377C19.6968 14.397 19.808 14.8162 19.808 15.2953C19.808 15.7744 19.6982 16.1922 19.4786 16.5487C19.259 16.9052 18.9439 17.1804 18.5332 17.3743L20.1502 19.8811H18.345ZM16.9333 16.3049H15.7527V14.2858H16.9333C17.3497 14.2858 17.6734 14.3728 17.9044 14.5467C18.1354 14.7207 18.2509 14.9702 18.2509 15.2953C18.2509 15.6204 18.1354 15.87 17.9044 16.0439C17.6734 16.2179 17.3497 16.3049 16.9333 16.3049ZM22.426 12.9083V18.5037H25.9081V19.8811H20.8689V12.9083H22.426Z"
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
 * 사용가능한 사이즈는 32 입니다.
 * 20(디폴트)사이즈가 없으므로 size prop은 required 입니다.
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'url');
export default IconComponent;
