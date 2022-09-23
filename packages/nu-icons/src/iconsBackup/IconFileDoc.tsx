import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  color = '#616161',
  size = '32',
  ...rest
}: React.SVGProps<SVGSVGElement> & IconSize) {
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
          d="M23.5714 3C23.6793 3 23.7836 3.03488 23.8692 3.09831L23.9296 3.15113L32.8582 12.3178C32.9264 12.3878 32.9721 12.4757 32.9906 12.5703L33 12.6667V32.8333C33 35.062 31.2888 36.8864 29.132 36.9949L28.9286 37H11.0714C8.88808 37 7.11069 35.2431 7.00497 33.041L7 32.8333V7.16667C7 4.93803 8.71123 3.11363 10.868 3.00511L11.0714 3H23.5714ZM23 4H11.0714C9.4365 4 8.09542 5.31897 8.00487 6.98669L8 7.16667V32.8333C8 34.5247 9.28471 35.902 10.8974 35.995L11.0714 36H28.9286C30.5635 36 31.9046 34.681 31.9951 33.0133L32 32.8333V13.5H25.3C24.0827 13.5 23.0862 12.5543 23.0053 11.3575L23 11.2V4ZM28 30.5C28 30.2239 27.7761 30 27.5 30H12.5C12.2239 30 12 30.2239 12 30.5C12 30.7761 12.2239 31 12.5 31H27.5C27.7761 31 28 30.7761 28 30.5ZM27.5 25C27.7761 25 28 25.2239 28 25.5C28 25.7761 27.7761 26 27.5 26H12.5C12.2239 26 12 25.7761 12 25.5C12 25.2239 12.2239 25 12.5 25H27.5ZM28 20.5C28 20.2239 27.7761 20 27.5 20H12.5C12.2239 20 12 20.2239 12 20.5C12 20.7761 12.2239 21 12.5 21H27.5C27.7761 21 28 20.7761 28 20.5ZM17.5 15C17.7761 15 18 15.2239 18 15.5C18 15.7761 17.7761 16 17.5 16H12.5C12.2239 16 12 15.7761 12 15.5C12 15.2239 12.2239 15 12.5 15H17.5ZM24 11.2V4.656L31.64 12.5H25.3L25.1671 12.4933C24.5115 12.4267 24 11.8731 24 11.2Z"
          fill={color}
        />
      </svg>
    );
  }

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0115 3.09793C18.926 3.03474 18.822 3 18.7143 3H9.21429L9.03164 3.0052C7.33911 3.10179 6 4.5324 6 6.27778V25.7222L6.00508 25.908C6.09947 27.6296 7.49777 29 9.21429 29H22.7857L22.9684 28.9948C24.6609 28.8982 26 27.4676 26 25.7222V10.4444L25.9906 10.3479C25.9719 10.2531 25.9261 10.1651 25.8576 10.095L19.0719 3.15056L19.0115 3.09793ZM9.21429 4H18V9.2L18.006 9.34763C18.0811 10.2727 18.8556 11 19.8 11H25V25.7222L24.9949 25.8785C24.9168 27.0658 23.9552 28 22.7857 28H9.21429L9.06298 27.9948C7.91288 27.9148 7 26.9302 7 25.7222V6.27778L7.00512 6.12153C7.08323 4.93424 8.04484 4 9.21429 4ZM10.5 11H14.5C14.7761 11 15 11.2239 15 11.5C15 11.7761 14.7761 12 14.5 12H10.5C10.2239 12 10 11.7761 10 11.5C10 11.2239 10.2239 11 10.5 11ZM21.5 15H10.5C10.2239 15 10 15.2239 10 15.5C10 15.7761 10.2239 16 10.5 16H21.5C21.7761 16 22 15.7761 22 15.5C22 15.2239 21.7761 15 21.5 15ZM10.5 19H21.5C21.7761 19 22 19.2239 22 19.5C22 19.7761 21.7761 20 21.5 20H10.5C10.2239 20 10 19.7761 10 19.5C10 19.2239 10.2239 19 10.5 19ZM10.5 23H21.5C21.7761 23 22 23.2239 22 23.5C22 23.7761 21.7761 24 21.5 24H10.5C10.2239 24 10 23.7761 10 23.5C10 23.2239 10.2239 23 10.5 23ZM24.367 10L19 4.508V9.2C19 9.60784 19.3052 9.9444 19.6996 9.99377L19.8 10H24.367Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'file-doc');
export default IconComponent;