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
          d="M17.938 4.50381C17.7173 3.63926 16.9333 3 16 3C15.0667 3 14.2827 3.63926 14.062 4.50381C14.0417 4.5013 14.021 4.5 14 4.5H3.5C3.22386 4.5 3 4.72386 3 5C3 5.27614 3.22386 5.5 3.5 5.5H14C14.021 5.5 14.0417 5.4987 14.062 5.49619C14.2827 6.36074 15.0667 7 16 7C16.9333 7 17.7173 6.36074 17.938 5.49619C17.9583 5.4987 17.979 5.5 18 5.5H20.5C20.7761 5.5 21 5.27614 21 5C21 4.72386 20.7761 4.5 20.5 4.5H18C17.979 4.5 17.9583 4.5013 17.938 4.50381ZM15 5C15 4.44772 15.4477 4 16 4C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6C15.4477 6 15 5.55228 15 5ZM17.938 18.5038C17.7173 17.6393 16.9333 17 16 17C15.0667 17 14.2827 17.6393 14.062 18.5038C14.0417 18.5013 14.021 18.5 14 18.5H3.5C3.22386 18.5 3 18.7239 3 19C3 19.2761 3.22386 19.5 3.5 19.5H14C14.021 19.5 14.0417 19.4987 14.062 19.4962C14.2827 20.3607 15.0667 21 16 21C16.9333 21 17.7173 20.3607 17.938 19.4962C17.9583 19.4987 17.979 19.5 18 19.5H20.5C20.7761 19.5 21 19.2761 21 19C21 18.7239 20.7761 18.5 20.5 18.5H18C17.979 18.5 17.9583 18.5013 17.938 18.5038ZM15 19C15 18.4477 15.4477 18 16 18C16.5523 18 17 18.4477 17 19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19ZM8 10C7.06671 10 6.28273 10.6393 6.06203 11.5038C6.04171 11.5013 6.021 11.5 6 11.5H3.5C3.22386 11.5 3 11.7239 3 12C3 12.2761 3.22386 12.5 3.5 12.5H6C6.021 12.5 6.04171 12.4987 6.06203 12.4962C6.28273 13.3607 7.06671 14 8 14C8.93329 14 9.71727 13.3607 9.93797 12.4962C9.95829 12.4987 9.979 12.5 10 12.5H20.5C20.7761 12.5 21 12.2761 21 12C21 11.7239 20.7761 11.5 20.5 11.5H10C9.979 11.5 9.95829 11.5013 9.93797 11.5038C9.71727 10.6393 8.93329 10 8 10ZM8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'filter');
export default IconComponent;
