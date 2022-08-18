import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM16.4686 8.70008C16.5546 8.46654 16.4601 8.19922 16.2323 8.07049C15.9759 7.92568 15.6478 8.01112 15.4995 8.26133L11.7205 14.6332L8.41013 11.4905L8.335 11.4309C8.12398 11.2925 7.83532 11.3166 7.65179 11.5008C7.44532 11.7081 7.45008 12.0395 7.66243 12.241L11.4669 15.8518L11.5465 15.9143C11.7975 16.0759 12.1475 16.0043 12.3049 15.7387L16.4278 8.78574L16.4686 8.70008Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'check-24-selected');
export default IconComponent;
