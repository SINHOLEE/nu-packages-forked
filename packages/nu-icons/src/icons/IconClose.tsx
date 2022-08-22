import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#595959', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8ZM5.97752 10.7013C5.79006 10.8888 5.48612 10.8888 5.29866 10.7013C5.1112 10.5138 5.1112 10.2099 5.29866 10.0224L7.32119 7.99998L5.29866 5.97753C5.1112 5.79007 5.1112 5.48613 5.29866 5.29866C5.48612 5.1112 5.79006 5.1112 5.97752 5.29866L8.00002 7.32115L10.0225 5.29868C10.21 5.11122 10.5139 5.11122 10.7014 5.29868C10.8888 5.48614 10.8888 5.79008 10.7014 5.97754L8.67884 7.99998L10.7013 10.0225C10.8888 10.2099 10.8888 10.5139 10.7013 10.7013C10.5139 10.8888 10.2099 10.8888 10.0225 10.7013L8.00002 8.6788L5.97752 10.7013Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'close');
export default IconComponent;