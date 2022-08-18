import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.72379 3.05453L3.6423 3.02211C3.18342 2.88101 2.78716 3.44633 3.1286 3.83401L7.32751 8.60301C6.55301 9.23619 5.87866 9.83169 5.30423 10.3899C3.71585 11.9334 3 13.0222 3 14C3 15.034 3.60396 15.8801 4.57838 16.1129C5.0244 16.2194 5.59433 16.1184 6.42464 15.8602L6.56108 15.8172L7.66101 15.4499L7.94579 15.3667L8.06705 15.3409L8.21086 15.3229L8.41805 15.3053L9.43397 15.2427C9.74224 15.2222 10.011 15.1997 10.2686 15.1715L10.4248 15.1538C10.6713 15.6375 10.7391 15.9947 10.662 16.2168L10.6272 16.2912L10.5868 16.3523L10.4871 16.4762L10.2535 16.7333L9.49416 17.525L9.14999 17.894C8.55824 18.55 8.26871 19.0124 8.26871 19.4854C8.26871 20.6068 9.12433 20.9641 10.4966 20.9641C12.8839 20.9641 16.1303 19.7295 17.8115 17.7124C19.5789 15.592 19.7041 13.0079 18.5617 11.0087C18.5069 10.9128 18.4483 10.8178 18.3861 10.7239C18.9286 11.249 19.3197 11.8566 19.5808 12.5381C19.9767 13.5712 20.0454 14.5839 19.9456 15.8631L19.8973 16.3643C19.6992 17.8481 18.9307 18.9655 17.6403 20.1141C17.4312 20.3002 17.4125 20.6206 17.5983 20.8299C17.7842 21.0391 18.1043 21.0579 18.3133 20.8719C19.8603 19.495 20.7767 18.1057 20.9372 16.1653L20.979 15.5934C21.0503 14.3341 20.9497 13.2794 20.5265 12.1749C20.0933 11.0443 19.3556 10.0763 18.2654 9.31946C16.4191 8.03774 14.9476 7.32084 13.243 7.09024L13.218 7.087L13.1974 6.94721C13.1606 6.74785 13.0917 6.50757 12.9903 6.22322L12.8555 5.86678L12.6904 5.46823L12.495 5.02643L12.269 4.54023L12.1445 4.28012L12.0968 4.2004C11.9007 3.93171 11.4841 3.92398 11.2838 4.21186L9.962 6.11L3.72379 3.05453ZM10.0648 7.7145L11.6079 5.495L11.8148 5.96674L11.9514 6.30098L12.0608 6.59177L12.1431 6.83797C12.2003 7.02423 12.2291 7.16285 12.2291 7.25085C12.2291 7.4817 12.0932 7.90403 11.8185 8.4907L11.637 8.86221L11.5338 9.06235C11.4055 9.30689 11.4998 9.60912 11.7443 9.73739C11.9888 9.86566 12.2911 9.77141 12.4193 9.52687C12.677 9.03564 12.8737 8.61015 13.0069 8.24298C13.4177 8.33765 13.8429 8.48373 14.2826 8.68188C15.6356 9.29158 17.0351 10.3528 17.6934 11.5049C18.636 13.1543 18.5328 15.2852 17.0434 17.0722C15.5721 18.8374 12.6093 19.9641 10.4966 19.9641C9.62399 19.9641 9.26871 19.8158 9.26871 19.4854C9.26871 19.4104 9.33407 19.2767 9.46267 19.0938L9.61227 18.8949L9.70273 18.7839L9.91469 18.5398L10.0361 18.4073L11.1051 17.2894L11.2384 17.1428L11.3832 16.971L11.4507 16.8788L11.5014 16.7967L11.5407 16.718L11.5901 16.5921L11.6486 16.4015C11.7488 15.9834 11.6754 15.5098 11.4448 14.9757C12.0001 14.839 12.4259 14.6462 12.7291 14.3689C13.5084 13.656 13.6505 12.6314 13.1987 11.3947C13.1039 11.1353 12.8169 11.0019 12.5575 11.0966C12.2981 11.1914 12.1647 11.4785 12.2594 11.7379C12.5834 12.6248 12.5005 13.2227 12.0541 13.6311C11.7727 13.8885 11.1154 14.0728 10.1597 14.1775L9.78365 14.2138L9.36752 14.245L8.35194 14.3073L8.12688 14.3261L7.95017 14.3471L7.80687 14.3723C7.7767 14.3787 7.74536 14.386 7.71251 14.3942L7.49463 14.4546L7.2245 14.5402L6.3935 14.8202L5.9373 14.9627C5.38416 15.1238 4.99692 15.1847 4.81071 15.1402C4.30702 15.0199 4 14.5898 4 14C4 13.3785 4.59518 12.4733 6.00113 11.107C6.99542 10.1409 8.31295 9.04793 9.9525 7.83033L10.0648 7.7145ZM9.5 10C9.77614 10 10 10.2239 10 10.5C10 10.7761 9.77614 11 9.5 11C9.22386 11 9 10.7761 9 10.5C9 10.2239 9.22386 10 9.5 10ZM8.10969 7.9774L5.5375 5.05581L9.384 6.941L9.29093 7.076L8.9449 7.33547C8.65626 7.55331 8.37786 7.76728 8.10969 7.9774Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'unicorn-24');
export default IconComponent;
