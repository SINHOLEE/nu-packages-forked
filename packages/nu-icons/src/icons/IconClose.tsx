import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize40 {
  size: '40';
}
interface OverrideIconSize24 {
  size: '24';
}
interface OverrideIconSize20 {
  size?: '20';
}
interface OverrideIconSize16 {
  size: '16';
}
type OverrideIconSize =
  | OverrideIconSize40
  | OverrideIconSize24
  | OverrideIconSize20
  | OverrideIconSize16;

const SvgComponent = ({
  size = '20',
  color = '#616161',
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
  if (size === '40') {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.15625 4.15625C4.36459 3.94792 4.70238 3.94792 4.91072 4.15625L19.9985 19.2455L35.0893 4.15625C35.2976 3.94792 35.6354 3.94792 35.8437 4.15625C36.0521 4.36459 36.0521 4.70238 35.8437 4.91072L20.753 20L35.8437 35.0893C36.0521 35.2976 36.0521 35.6354 35.8437 35.8437C35.6354 36.0521 35.2976 36.0521 35.0893 35.8437L19.9985 20.7545L4.91072 35.8437C4.70238 36.0521 4.36459 36.0521 4.15625 35.8437C3.94792 35.6354 3.94792 35.2976 4.15625 35.0893L19.244 20L4.15625 4.91072C3.94792 4.70238 3.94792 4.36459 4.15625 4.15625Z"
          fill={color}
        />
      </svg>
    );
  }
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
          d="M20.8473 3.15269C21.0509 3.35629 21.0509 3.68638 20.8473 3.88997L12.7373 12L20.8473 20.11C21.0509 20.3136 21.0509 20.6437 20.8473 20.8473C20.6437 21.0509 20.3136 21.0509 20.11 20.8473L12 12.7373L3.88997 20.8473C3.68638 21.0509 3.35629 21.0509 3.15269 20.8473C2.9491 20.6437 2.9491 20.3136 3.15269 20.11L11.2627 12L3.15269 3.88997C2.9491 3.68638 2.9491 3.35629 3.15269 3.15269C3.35629 2.9491 3.68638 2.9491 3.88997 3.15269L12 11.2627L20.11 3.15269C20.3136 2.9491 20.6437 2.9491 20.8473 3.15269Z"
          fill={color}
        />
      </svg>
    );
  }
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
          d="M3.15746 3.15746C3.36741 2.94751 3.7078 2.94751 3.91774 3.15746L10 9.23972L16.0823 3.15746C16.2922 2.94751 16.6326 2.94751 16.8425 3.15746C17.0525 3.36741 17.0525 3.7078 16.8425 3.91774L10.7603 10L16.8425 16.0823C17.0525 16.2922 17.0525 16.6326 16.8425 16.8425C16.6326 17.0525 16.2922 17.0525 16.0823 16.8425L9.99924 10.7595L3.91774 16.8425C3.7078 17.0525 3.36741 17.0525 3.15746 16.8425C2.94751 16.6326 2.94751 16.2922 3.15746 16.0823L9.23896 9.99924L3.15746 3.91774C2.94751 3.7078 2.94751 3.36741 3.15746 3.15746Z"
          fill={color}
        />
      </svg>
    );
  }
  if (size === '16') {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.13497 2.13497C2.31492 1.95501 2.60668 1.95501 2.78664 2.13497L8 7.34833L13.2134 2.13497C13.3933 1.95501 13.6851 1.95501 13.865 2.13497C14.045 2.31492 14.045 2.60668 13.865 2.78664L8.65167 8L13.865 13.2134C14.045 13.3933 14.045 13.6851 13.865 13.865C13.6851 14.045 13.3933 14.045 13.2134 13.865L7.99935 8.65102L2.78664 13.865C2.60668 14.045 2.31492 14.045 2.13497 13.865C1.95501 13.6851 1.95501 13.3933 2.13497 13.2134L7.34768 7.99935L2.13497 2.78664C1.95501 2.60668 1.95501 2.31492 2.13497 2.13497Z"
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
 * 사용가능한 사이즈는 16, 20, 24, 40 입니다.
 *
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'close');
export default IconComponent;
