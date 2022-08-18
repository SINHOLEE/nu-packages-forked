import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 10C18.2239 10 18 9.77614 18 9.5V7H15.5C15.2239 7 15 6.77614 15 6.5C15 6.22386 15.2239 6 15.5 6H18V3.5C18 3.22386 18.2239 3 18.5 3C18.7761 3 19 3.22386 19 3.5V6H21.5C21.7761 6 22 6.22386 22 6.5C22 6.77614 21.7761 7 21.5 7H19V9.5C19 9.77614 18.7761 10 18.5 10ZM7.8048 11.3444C6.71767 10.6293 6 9.39847 6 8C6 5.79086 7.79086 4 10 4C12.2091 4 14 5.79086 14 8C14 9.39847 13.2823 10.6293 12.1952 11.3444C15.5462 12.4165 18 15.843 18 19.5C18 19.7761 17.7761 20 17.5 20C17.2239 20 17 19.7761 17 19.5C17 15.634 13.866 12 10 12C6.13401 12 3 15.634 3 19.5C3 19.7761 2.77614 20 2.5 20C2.22386 20 2 19.7761 2 19.5C2 15.843 4.45382 12.4165 7.8048 11.3444ZM10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'managerAdd-24');
export default IconComponent;
