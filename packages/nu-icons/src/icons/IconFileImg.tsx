import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize40 {
  size: '40';
}
interface OverrideIconSize32 {
  size: '32';
}
type OverrideIconSize = OverrideIconSize40 | OverrideIconSize32;

const SvgComponent = ({
  size,
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
          d="M23.5714 3H11.0714C8.81985 3 7 4.86838 7 7.16667V32.8333C7 35.1316 8.81985 37 11.0714 37H28.9286C31.1801 37 33 35.1316 33 32.8333V13V12.6667C33 12.5363 32.9491 12.4112 32.8582 12.3178L23.9296 3.15113C23.8355 3.0545 23.7063 3 23.5714 3ZM31.6396 12.5L24 4.65609V11.2C24 11.8731 24.5115 12.4267 25.1671 12.4933L25.3 12.5H31.6396ZM23 4H11.0714C9.37811 4 8 5.41486 8 7.16667V32.8333C8 34.5851 9.37811 36 11.0714 36H28.9286C30.6219 36 32 34.5851 32 32.8333V13.5H25.3C24.0827 13.5 23.0862 12.5543 23.0053 11.3575L23 11.2V4ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20ZM28.7447 25.3861C29.2556 26.0429 28.7875 27 27.9554 27H19H16H12C11.176 27 10.7056 26.0592 11.2 25.4L13.7 22.0667C14.1 21.5333 14.9 21.5333 15.3 22.0667L17.5273 25.0364L22.2106 19.0149C22.611 18.5001 23.389 18.5001 23.7894 19.0149L28.7447 25.3861Z"
          fill={color}
        />
      </svg>
    );
  }
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
          d="M19.0115 3.09793C18.926 3.03474 18.822 3 18.7143 3H9.21429L9.03164 3.0052C7.33911 3.10179 6 4.5324 6 6.27778V25.7222L6.00508 25.908C6.09947 27.6296 7.49777 29 9.21429 29H22.7857L22.9684 28.9948C24.6609 28.8982 26 27.4676 26 25.7222V10.4444L25.9906 10.3479C25.9719 10.2531 25.9261 10.1651 25.8576 10.095L19.0719 3.15056L19.0115 3.09793ZM15 14.5C15 15.3284 14.3284 16 13.5 16C12.6716 16 12 15.3284 12 14.5C12 13.6716 12.6716 13 13.5 13C14.3284 13 15 13.6716 15 14.5ZM20.9425 21C21.777 21 22.2444 20.0383 21.7289 19.3822L18.2863 15.0008C17.8859 14.4912 17.1141 14.4912 16.7137 15.0008L13.5349 19.0465L12.8 18.0667C12.4 17.5333 11.6 17.5333 11.2 18.0667L10.2 19.4C9.70557 20.0592 10.176 21 11 21H12H15H20.9425ZM18 4H9.21429C8.04484 4 7.08323 4.93424 7.00512 6.12153L7 6.27778V25.7222C7 26.9302 7.91288 27.9148 9.06298 27.9948L9.21429 28H22.7857C23.9552 28 24.9168 27.0658 24.9949 25.8785L25 25.7222V11H19.8C18.8556 11 18.0811 10.2727 18.006 9.34763L18 9.2V4ZM19 4.508L24.367 10H19.8L19.6996 9.99377C19.3052 9.9444 19 9.60784 19 9.2V4.508Z"
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
 * 사용가능한 사이즈는 32, 40 입니다.
 * 20(디폴트)사이즈가 없으므로 size prop은 required 입니다.
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'fileImg');
export default IconComponent;
