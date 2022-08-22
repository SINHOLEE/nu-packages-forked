import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#595959', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.41789 2.12514C9.73215 1.96215 10.1135 1.94178 10.4391 2.06177L10.5748 2.12179L17.4294 5.54922C18.1503 5.92042 18.1882 6.82429 17.5434 7.25002L17.4296 7.31637L15.9063 8.10161L17.4394 8.91132C18.1477 9.29653 18.1849 10.2095 17.5514 10.6486L17.4396 10.7173L15.6808 11.6749L17.4294 12.5492C18.1502 12.9204 18.1881 13.8228 17.5434 14.2498L17.4296 14.3164L10.5807 17.8469C10.2678 18.0085 9.8877 18.0287 9.55724 17.9076L9.41899 17.8471L2.56951 14.3163C1.85013 13.945 1.81227 13.0432 2.46077 12.6136L2.57521 12.5465L4.31846 11.6749L2.56031 10.7176C1.81336 10.3122 1.81336 9.3183 2.56532 8.90844L4.093 8.1016L2.57031 7.31667C1.85004 6.94657 1.81214 6.0434 2.45591 5.61608L2.56951 5.54944L2.806 6.00899L2.57521 5.54654L9.41789 2.12514ZM5.17662 8.66019L3.03814 9.78957L3.02525 9.7965C2.99817 9.81096 2.99295 9.81375 3.00952 9.82362L9.88682 13.5682C9.93608 13.5949 10.0016 13.6016 10.0587 13.5883L10.1121 13.5684L16.9624 9.83847L16.9777 9.83033C17.0024 9.81739 17.0069 9.81499 16.9926 9.80652L14.8226 8.6602L10.5807 10.8469C10.2678 11.0085 9.8877 11.0287 9.55724 10.9076L9.419 10.8471L5.17662 8.66019ZM10.1202 3.01244C10.0684 2.98544 9.99771 2.97869 9.93322 2.99378L9.8717 3.01621L3.037 6.43199L9.87683 9.95804C9.93008 9.98544 10.0019 9.99229 10.0641 9.97867L10.1221 9.95823L16.961 6.43299L10.1202 3.01244ZM10.5907 14.4464L14.6105 12.2577L16.961 13.432L10.1221 16.9582L10.0641 16.9787C10.0019 16.9923 9.93008 16.9854 9.87683 16.958L3.038 13.433L5.38887 12.2577L9.40899 14.4466L9.53346 14.5052C9.87298 14.642 10.2682 14.6224 10.5907 14.4464Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'news');
export default IconComponent;