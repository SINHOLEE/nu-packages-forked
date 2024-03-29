import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize20 {
  size?: '20';
}
interface OverrideIconSize16 {
  size: '16';
}
interface OverrideIconSize32 {
  size: '32';
}
type OverrideIconSize = OverrideIconSize20 | OverrideIconSize16 | OverrideIconSize32;

const SvgComponent = ({
  size = '20',
  color = '#FFB633',
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
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
          d="M5.73892 10.165L8.06262 3.66503C8.13373 3.46611 8.32219 3.33334 8.53344 3.33334H12.3974C12.7612 3.33334 13.0032 3.70951 12.8524 4.04059L11.1317 7.8184C10.9809 8.14949 11.2229 8.52565 11.5868 8.52565H13.3658C13.8005 8.52565 14.0281 9.04206 13.7349 9.36294L7.1951 16.5196C6.82768 16.9216 6.17337 16.5298 6.35443 16.0161L7.94637 11.4996C8.06102 11.1743 7.8197 10.8333 7.47481 10.8333H6.20974C5.8639 10.8333 5.6225 10.4907 5.73892 10.165Z"
          fill={color}
        />
      </svg>
    );
  }
  if (size === '16') {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.70942 8.24725L6.47396 2.74725C6.54035 2.54034 6.73277 2.39999 6.95006 2.39999H9.72455C10.0799 2.39999 10.3218 2.76025 10.1874 3.08918L8.91139 6.21081C8.77694 6.53973 9.01888 6.89999 9.37422 6.89999H10.4433C10.8654 6.89999 11.0976 7.39069 10.8299 7.71705L6.17565 13.3924C5.82655 13.8181 5.14627 13.4495 5.31231 12.9246L6.37951 9.55079C6.48147 9.22848 6.24084 8.89999 5.90279 8.89999H5.18552C4.84661 8.89999 4.60589 8.56995 4.70942 8.24725Z"
          fill={color}
        />
      </svg>
    );
  }
  if (size === '32') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.7655 15.3185L12.4404 3.3185C12.5152 3.12646 12.7002 3 12.9063 3H21.19C21.561 3 21.8028 3.38993 21.6378 3.7223L17.8877 11.2777C17.7228 11.6101 17.9646 12 18.3356 12H23.2965C23.7414 12 23.9647 12.5375 23.6508 12.8528L9.24044 27.3237C8.85905 27.7067 8.22559 27.2961 8.41939 26.7916L12.3036 16.6793C12.4293 16.3518 12.1876 16 11.8368 16H8.23139C7.87958 16 7.63779 15.6463 7.7655 15.3185Z"
          fill={color}
        />
      </svg>
    );
  }
  return <div></div>;
};
/**
 * 컬러 주입 가능여부: 가능,
 * 기본컬러:#FFB633
 * 사용가능한 사이즈는 16, 20, 32 입니다.
 *
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'fast');
export default IconComponent;
