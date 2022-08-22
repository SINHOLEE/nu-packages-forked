import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#595959', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 16C2 8.26803 8.26803 2 16 2C23.732 2 30 8.26803 30 16C30 23.732 23.732 30 16 30C8.26803 30 2 23.732 2 16ZM16 8.41667C10.8453 8.41667 6.66667 11.7115 6.66667 15.7757C6.66667 18.4032 8.41363 20.7088 11.0415 22.0108C10.8985 22.5038 10.1228 25.1827 10.0919 25.3931C10.0919 25.3931 10.0733 25.5512 10.1757 25.6115C10.2781 25.6718 10.3985 25.625 10.3985 25.625C10.6922 25.584 13.8037 23.3984 14.3423 23.0188C14.8803 23.095 15.4343 23.1346 16 23.1346C21.1547 23.1346 25.3333 19.84 25.3333 15.7757C25.3333 11.7115 21.1547 8.41667 16 8.41667ZM10.3012 17.8303C10.3012 18.1139 10.5427 18.3446 10.8397 18.3446C11.1366 18.3446 11.3781 18.1139 11.3781 17.8303V14.6314H12.2183C12.5096 14.6314 12.7467 14.3948 12.7467 14.1042C12.7467 13.8135 12.5097 13.577 12.2183 13.577H9.46107C9.16975 13.577 8.93262 13.8135 8.93262 14.1042C8.93262 14.3948 9.16963 14.6314 9.46107 14.6314H10.3012V17.8303ZM15.1132 18.0998C15.165 18.2464 15.3368 18.3376 15.5613 18.3376C15.6794 18.3377 15.7961 18.3123 15.9036 18.2633C16.052 18.1951 16.1947 18.0067 16.0308 17.4977L14.7434 14.109C14.6524 13.8506 14.3768 13.5849 14.0251 13.577C13.6744 13.585 13.3988 13.8506 13.3081 14.1085L12.0201 17.4986C11.8566 18.0065 11.9993 18.1948 12.1477 18.2633C12.2551 18.3123 12.3719 18.3377 12.49 18.3376C12.7146 18.3376 12.8862 18.2465 12.9378 18.1001L13.2046 17.4016L14.8466 17.4018L15.1132 18.0998ZM14.0256 14.9201L14.5634 16.4479H13.4878L14.0256 14.9201ZM16.3814 17.7725C16.3814 18.0446 16.6128 18.2661 16.8974 18.2661H18.6249C18.9095 18.2661 19.141 18.0446 19.141 17.7725C19.141 17.5003 18.9095 17.2788 18.6249 17.2788H17.4807V14.1154C17.4807 13.8184 17.2341 13.577 16.9311 13.577C16.628 13.577 16.3814 13.8184 16.3814 14.1154V17.7725ZM19.3504 17.7991C19.3504 18.0961 19.5919 18.3376 19.8889 18.3376C20.0317 18.3374 20.1686 18.2805 20.2696 18.1796C20.3706 18.0786 20.4274 17.9417 20.4276 17.7988V16.624L20.6144 16.4372L21.8771 18.1103C21.9272 18.1771 21.9921 18.2313 22.0668 18.2685C22.1415 18.3056 22.2239 18.3248 22.3073 18.3244C22.4242 18.3246 22.5381 18.2865 22.6312 18.2157C22.6878 18.1733 22.7354 18.1201 22.7712 18.0591C22.8071 17.9981 22.8305 17.9307 22.8401 17.8606C22.8501 17.7905 22.8462 17.7193 22.8284 17.6508C22.8107 17.5823 22.7795 17.518 22.7367 17.4617L21.4113 15.7058L22.6384 14.4788C22.7227 14.3944 22.765 14.278 22.7572 14.151C22.7495 14.0251 22.6932 13.9039 22.5989 13.8096C22.4977 13.7086 22.3628 13.6506 22.2283 13.6506C22.1131 13.6506 22.0069 13.6932 21.9296 13.7704L20.4273 15.2728V14.1154C20.4273 13.8184 20.1858 13.577 19.8889 13.577C19.5919 13.577 19.3504 13.8184 19.3504 14.1154V17.7991Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'kakao');
export default IconComponent;