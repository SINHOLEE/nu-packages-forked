import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0095 8C18.0095 5.79086 16.2176 4 14.0071 4C11.7967 4 10.0048 5.79086 10.0048 8C10.0048 9.39799 10.7224 10.6285 11.8099 11.3424C11.0945 11.5708 10.4117 11.9106 9.77875 12.3529C9.55232 12.5112 9.49713 12.8229 9.65548 13.0492C9.81382 13.2755 10.1257 13.3307 10.3522 13.1724C11.4445 12.409 12.6994 12 14.0071 12C17.7123 12 20.7908 15.3005 21 19.524C21.0137 19.7998 21.2485 20.0124 21.5244 19.9987C21.8004 19.9851 22.013 19.7504 21.9994 19.4746C21.8069 15.5881 19.417 12.3686 16.2048 11.3436C17.2919 10.6285 18.0095 9.39799 18.0095 8ZM6.00237 13C8.21283 13 10.0047 14.7909 10.0047 17C10.0047 19.2091 8.21283 21 6.00237 21C3.79192 21 2 19.2091 2 17C2 14.7909 3.79192 13 6.00237 13ZM6.00178 14C4.34394 14 3 15.3431 3 17C3 18.6569 4.34394 20 6.00178 20C7.65962 20 9.00356 18.6569 9.00356 17C9.00356 15.3431 7.65962 14 6.00178 14ZM7.78167 15.3825C7.99313 15.5073 8.07897 15.7635 7.99672 15.9858L7.95792 16.0673L6.42551 18.6595C6.28163 18.9028 5.97012 18.9741 5.73761 18.8342L5.66338 18.7797L4.19669 17.4836C3.98969 17.3007 3.97026 16.9847 4.15329 16.7778C4.31598 16.594 4.58387 16.5582 4.78678 16.681L4.85948 16.7345L5.87129 17.629L7.09645 15.5586C7.237 15.3209 7.54378 15.242 7.78167 15.3825ZM11.0053 8C11.0053 6.34315 12.3493 5 14.0071 5C15.665 5 17.0089 6.34315 17.0089 8C17.0089 9.65685 15.665 11 14.0071 11C12.3493 11 11.0053 9.65685 11.0053 8Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'hr-24');
export default IconComponent;
