import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0115 3.09793C18.926 3.03474 18.822 3 18.7143 3H9.21429L9.03164 3.0052C7.33911 3.10179 6 4.5324 6 6.27778V25.7222L6.00508 25.908C6.09947 27.6296 7.49777 29 9.21429 29H22.7857L22.9684 28.9948C24.6609 28.8982 26 27.4676 26 25.7222V10.4444L25.9906 10.3479C25.9719 10.2531 25.9261 10.1651 25.8576 10.095L19.0719 3.15056L19.0115 3.09793ZM9.21429 4H18V9.2L18.006 9.34763C18.0811 10.2727 18.8556 11 19.8 11H25V25.7222L24.9949 25.8785C24.9168 27.0658 23.9552 28 22.7857 28H9.21429L9.06298 27.9948C7.91288 27.9148 7 26.9302 7 25.7222V6.27778L7.00512 6.12153C7.08323 4.93424 8.04484 4 9.21429 4ZM13.6537 15V21H12.5V15H13.6537ZM17.8608 15.0857C17.5958 15.0286 17.3125 15 17.0111 15H15V21H16.1537V18.5857H16.9566L18.2328 21H19.4986L18.0791 18.4065L18.2398 18.3357C18.4986 18.2079 18.7113 18.0314 18.8781 17.8062C19.0781 17.536 19.1782 17.1826 19.1782 16.7461C19.1782 16.4135 19.1223 16.1355 19.0106 15.912C18.8988 15.6886 18.7455 15.5093 18.5507 15.3742C18.3558 15.239 18.1258 15.1429 17.8608 15.0857ZM16.902 15.912H16.1537V17.6737H16.902C17.2762 17.6737 17.5607 17.5971 17.7556 17.4438C17.9504 17.2905 18.0479 17.0579 18.0479 16.7461C18.0479 16.4343 17.9504 16.2173 17.7556 16.0952C17.5607 15.9731 17.2762 15.912 16.902 15.912ZM19 9.2V4.508L24.367 10H19.8L19.6996 9.99377C19.3052 9.9444 19 9.60784 19 9.2Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'file-32-IR');
export default IconComponent;
