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
          d="M6.76004 18.9601C6.5988 18.9643 6.43842 18.9354 6.28878 18.8752C6.13915 18.815 6.00344 18.7248 5.89004 18.6101C5.68479 18.3745 5.55505 18.0826 5.5176 17.7723C5.48016 17.4621 5.53672 17.1477 5.68002 16.87L7.36001 11.87C7.40209 11.7703 7.42379 11.6632 7.42379 11.555C7.42379 11.4468 7.40209 11.3397 7.36001 11.24L5.57003 6.80004C5.43399 6.5048 5.38706 6.17624 5.43502 5.85473C5.48298 5.53321 5.62377 5.23266 5.84005 4.98998C6.06944 4.77295 6.363 4.63627 6.67672 4.60021C6.99044 4.56415 7.30739 4.63071 7.58004 4.79003L19.25 10.53C19.5154 10.6525 19.7587 10.8181 19.9701 11.02C20.1148 11.1554 20.2009 11.342 20.21 11.54C20.1999 11.7378 20.1139 11.924 19.9701 12.06C19.7561 12.2587 19.5133 12.4239 19.25 12.55L7.57003 18.8C7.31608 18.9154 7.03879 18.9702 6.76004 18.9601ZM6.76004 5.59008C6.6671 5.59083 6.57785 5.62651 6.51004 5.69005C6.43518 5.79528 6.39087 5.91913 6.38204 6.04796C6.37322 6.1768 6.40023 6.30558 6.46005 6.42003L8.28006 10.8601C8.45011 11.294 8.45011 11.7761 8.28006 12.2101L6.60006 17.2101C6.43006 17.6401 6.51006 17.87 6.60006 17.93C6.69006 17.99 6.83001 18.02 7.11001 17.93L18.75 11.74C18.8308 11.7084 18.9079 11.6682 18.98 11.62L18.8 11.52L7.12002 5.76C7.01868 5.67607 6.89866 5.61784 6.77005 5.59008H6.76004Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'send');
export default IconComponent;
