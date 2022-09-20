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
          d="M14.5199 20.636C15.9364 18.982 16.9064 15.977 16.9923 12.5H20.9751C20.7623 16.368 18.1041 19.59 14.5199 20.636ZM3.04491 12.5H7.02773C7.11364 15.977 8.08362 18.982 9.50013 20.636C5.91589 19.59 3.25868 16.368 3.04491 12.5ZM9.50113 3.364C8.08362 5.018 7.11364 8.023 7.02773 11.5H3.04491C3.25868 7.631 5.91589 4.409 9.50113 3.364ZM12.489 11.5V3.086C14.1782 3.621 15.8764 6.904 15.9943 11.5H12.489ZM12.489 20.914V12.5H15.9943C15.8764 17.095 14.1782 20.378 12.489 20.914ZM11.49 12.5V20.899C9.8158 20.324 8.14355 17.058 8.02668 12.5H11.49ZM11.49 3.1V11.5H8.02668C8.14355 6.941 9.8158 3.676 11.49 3.1ZM20.9751 11.5H16.9923C16.9064 8.023 15.9364 5.018 14.5199 3.364C18.1041 4.409 20.7623 7.631 20.9751 11.5ZM21.979 12.405C21.985 12.269 22 12.136 22 12C22 11.863 21.985 11.73 21.979 11.595V11.5H21.974C21.7203 6.371 17.6156 2.268 12.489 2.024V2H11.49V2.026C6.3824 2.29 2.29969 6.385 2.04595 11.5H2V12.5H2.04595C2.29969 17.615 6.3824 21.71 11.49 21.973V22H12.489V21.975C17.6156 21.732 21.7203 17.629 21.974 12.5H21.979V12.405Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'site');
export default IconComponent;
