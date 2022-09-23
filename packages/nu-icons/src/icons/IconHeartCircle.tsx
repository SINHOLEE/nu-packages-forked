import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize24 {
  size: '24';
}
type OverrideIconSize = OverrideIconSize24;

const SvgComponent = ({
  size,
  color = '#616161',
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
  if (size === '24') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM14.5 7.5C13.5949 7.5 12.8572 7.93582 12.1118 8.71373L12.002 8.829L11.9026 8.71909C11.1686 7.93031 10.444 7.5 9.5 7.5C7.71875 7.5 6.5 8.86827 6.5 10.6975C6.5 11.3384 6.67352 11.954 7.01489 12.5745L7.14359 12.7989C7.18773 12.8727 7.23327 12.9456 7.28072 13.0182L7.4293 13.2358C7.45518 13.2721 7.48167 13.3085 7.50883 13.345L7.68028 13.5665C7.71036 13.6039 7.74123 13.6415 7.77296 13.6796L7.97411 13.9126L8.19886 14.1578L8.45023 14.4183L8.88384 14.8457L9.39444 15.3272L10.2127 16.0734L11.9987 17.6692L13.313 16.5028L14.0112 15.8744L14.6109 15.3244L14.9612 14.9955L15.2755 14.6927L15.5567 14.4125L15.8081 14.1514L16.0327 13.906C16.068 13.8662 16.1024 13.8269 16.1359 13.788L16.326 13.5596C16.356 13.5222 16.3852 13.485 16.4137 13.4481L16.5763 13.2288L16.7244 13.0111L16.861 12.7916C16.905 12.7178 16.9476 12.6431 16.9894 12.5669C17.3279 11.9489 17.5 11.3357 17.5 10.6975C17.5 8.86827 16.2812 7.5 14.5 7.5ZM14.5 8.5C15.7015 8.5 16.5 9.39643 16.5 10.6975C16.5 11.1592 16.3736 11.6095 16.1123 12.0865L16.0571 12.1851L15.94 12.38L15.812 12.5741L15.6702 12.7705L15.5118 12.9726L15.334 13.1832L15.1339 13.4056C15.0985 13.4438 15.0621 13.4827 15.0246 13.5222L14.7857 13.7682L14.5176 14.0337L14.0542 14.4756L13.3073 15.1626L12.3923 15.9843L12.001 16.33L10.9077 15.3534L10.3043 14.8055L9.78841 14.3255L9.48846 14.0381L9.22044 13.7731L8.98156 13.5276L8.76902 13.2983L8.58005 13.0823L8.41186 12.8764L8.26165 12.6775L8.12664 12.4827C8.10525 12.4504 8.08437 12.4181 8.06396 12.3858L7.94651 12.1911C7.9277 12.1584 7.90924 12.1256 7.89105 12.0925C7.62745 11.6134 7.5 11.1612 7.5 10.6975C7.5 9.39643 8.29847 8.5 9.5 8.5C10.1105 8.5 10.6073 8.795 11.1705 9.40028L11.319 9.56457L12 10.3503L12.7006 9.54768L12.8338 9.40563C13.4089 8.80548 13.9259 8.5 14.5 8.5Z"
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
 * 사용가능한 사이즈는 24 입니다.
 * 20(디폴트)사이즈가 없으므로 size prop은 required 입니다.
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'heart-circle');
export default IconComponent;