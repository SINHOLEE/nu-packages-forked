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
          d="M2.18375 11.268C3.13475 9.473 6.09575 5 12.0007 5C17.9047 5 20.8667 9.473 21.8167 11.268C22.0627 11.73 22.0627 12.269 21.8167 12.732C20.8667 14.526 17.9047 19 12.0007 19C6.09575 19 3.13475 14.526 2.18375 12.732C1.93875 12.269 1.93875 11.73 2.18375 11.268ZM20.9427 11.731C20.0277 10.005 17.3267 5.99 12.0007 5.99C6.67475 5.99 3.97275 10.005 3.05875 11.731C2.96675 11.904 2.96675 12.095 3.05875 12.269C3.97275 13.995 6.67475 18.01 12.0007 18.01C17.3267 18.01 20.0277 13.995 20.9427 12.269C21.0347 12.095 21.0347 11.904 20.9427 11.731ZM9.25125 12C9.25125 10.4811 10.4824 9.25 12.0013 9.25C13.5201 9.25 14.7513 10.4811 14.7513 12C14.7513 13.5189 13.5201 14.75 12.0013 14.75C10.4824 14.75 9.25125 13.5189 9.25125 12ZM12.0013 8.25C9.93011 8.25 8.25125 9.92886 8.25125 12C8.25125 14.0711 9.93011 15.75 12.0013 15.75C14.0724 15.75 15.7513 14.0711 15.7513 12C15.7513 9.92886 14.0724 8.25 12.0013 8.25Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'view');
export default IconComponent;
