import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  size = '20',
  color = '#616161',
  ...rest
}: React.SVGProps<SVGSVGElement> & IconSize) {
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
          d="M9.64644 12.8536C9.84171 13.0488 10.1583 13.0488 10.3536 12.8536L13.182 10.0251C13.3772 9.82986 13.3772 9.51328 13.182 9.31802C12.9867 9.12276 12.6701 9.12276 12.4749 9.31802L10.5 11.2929L10.5 3.5C10.5 3.22386 10.2761 3 9.99999 3C9.72385 3 9.49999 3.22386 9.49999 3.5L9.49999 11.2929L7.52512 9.31802C7.32986 9.12276 7.01328 9.12276 6.81802 9.31802C6.62275 9.51328 6.62275 9.82986 6.81802 10.0251L9.64644 12.8536Z"
          fill={color}
        />
        <path
          d="M4 10.5C4 10.2239 3.77614 10 3.5 10C3.22386 10 3 10.2239 3 10.5H4ZM17 10.5C17 10.2239 16.7761 10 16.5 10C16.2239 10 16 10.2239 16 10.5H17ZM16 10.5V15.5H17V10.5H16ZM15.5 16H4.5V17H15.5V16ZM4 15.5V10.5H3V15.5H4ZM4.5 16C4.22386 16 4 15.7761 4 15.5H3C3 16.3284 3.67157 17 4.5 17V16ZM16 15.5C16 15.7761 15.7761 16 15.5 16V17C16.3284 17 17 16.3284 17 15.5H16Z"
          fill={color}
        />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 3.5C12.5 3.22386 12.2761 3 12 3C11.7239 3 11.5 3.22386 11.5 3.5L11.4994 15.0376L8.11091 11.6464L8.04167 11.5886C7.8468 11.4536 7.57737 11.4729 7.40381 11.6464C7.20854 11.8417 7.20854 12.1583 7.40381 12.3536L11.6779 16.625L11.733 16.6655L11.8279 16.7122L11.8946 16.7315C11.9286 16.7388 11.9638 16.7426 12 16.7426L12.0742 16.7372L12.1277 16.7261L12.1943 16.7035L12.2707 16.6631C12.3001 16.6442 12.3279 16.6219 12.3536 16.5962L16.5962 12.3536L16.654 12.2843C16.789 12.0894 16.7698 11.82 16.5962 11.6464L16.5269 11.5886C16.3321 11.4536 16.0627 11.4729 15.8891 11.6464L12.4994 15.0376L12.5 3.5ZM20.9919 14.4101C20.9496 14.1769 20.7455 14 20.5 14C20.2239 14 20 14.2239 20 14.5V19.5L19.9919 19.5899C19.9496 19.8231 19.7455 20 19.5 20H4.5L4.41012 19.9919C4.17688 19.9496 4 19.7455 4 19.5V14.5L3.99194 14.4101C3.94961 14.1769 3.74546 14 3.5 14C3.22386 14 3 14.2239 3 14.5V19.5L3.00687 19.6445C3.07955 20.4051 3.7203 21 4.5 21H19.5L19.6445 20.9931C20.4051 20.9204 21 20.2797 21 19.5V14.5L20.9919 14.4101Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'download');
export default IconComponent;