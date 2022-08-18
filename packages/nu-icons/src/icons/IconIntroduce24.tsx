import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1625 3.10403C14.0756 3.03705 13.9684 3 13.8571 3H7.35714L7.20121 3.00535C5.96465 3.09057 5 4.18214 5 5.5V18.5L5.00705 18.6943C5.05388 19.3376 5.33189 19.9313 5.78189 20.3602C6.21032 20.7685 6.76658 21 7.35714 21H7.5H9.5H16.5L16.6644 20.9947C17.9685 20.91 19 19.8255 19 18.5V12.5V9.56314V8.5L18.9912 8.4066C18.9738 8.31484 18.9308 8.22914 18.8664 8.15977L14.2235 3.15977L14.1625 3.10403ZM16.5 20H9.5H7.5H7.35714L7.21754 19.9921C6.94106 19.9609 6.68257 19.8371 6.47181 19.6363C6.17504 19.3534 6 18.9439 6 18.5V5.5L6.0063 5.3543C6.07293 4.58786 6.65981 4 7.35714 4H13V8.4L13.006 8.54414C13.0739 9.35206 13.707 10 14.5 10H18V12.5V18.5L17.9931 18.6445C17.9204 19.4051 17.2797 20 16.5 20ZM13 16.5C13 16.2239 12.7761 16 12.5 16H8.5C8.22386 16 8 16.2239 8 16.5C8 16.7761 8.22386 17 8.5 17H12.5C12.7761 17 13 16.7761 13 16.5ZM15.5 13C15.7761 13 16 13.2239 16 13.5C16 13.7761 15.7761 14 15.5 14H8.5C8.22386 14 8 13.7761 8 13.5C8 13.2239 8.22386 13 8.5 13H15.5ZM12 10.5C12 10.2239 11.7761 10 11.5 10H8.5C8.22386 10 8 10.2239 8 10.5C8 10.7761 8.22386 11 8.5 11H11.5C11.7761 11 12 10.7761 12 10.5ZM14 8.4V4.389L18 8.697V9H14.5L14.4216 8.99242C14.1904 8.94746 14 8.7073 14 8.4Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'introduce-24');
export default IconComponent;
