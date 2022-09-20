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
          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21L12.3601 20.9929C13.6765 20.941 14.9457 20.6052 16.0972 20.0153L16.223 19.947L18.3781 20.499L20.1969 20.945L20.4051 20.9909C20.7933 21.066 21.111 20.682 20.9644 20.3147L19.6302 16.7751C20.5197 15.3567 21 13.7135 21 12C21 7.02944 16.9706 3 12 3ZM12 4C16.4183 4 20 7.58172 20 12C20 13.6027 19.5283 15.1339 18.6575 16.4376C18.5841 16.5474 18.5579 16.6806 18.5819 16.8079L18.6217 16.9336L19.696 19.795L16.5515 19.0014L16.3181 18.9371C16.185 18.8937 16.0398 18.9081 15.9178 18.9768C14.7317 19.6443 13.3923 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'chat-off');
export default IconComponent;
