import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  color = '#616161',
  size,
  ...rest
}: React.SVGProps<SVGSVGElement> & IconSize) {
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
          d="M10.4498 3C14.5642 3 17.8996 6.33538 17.8996 10.4498C17.8996 12.3282 17.2043 14.0443 16.0571 15.3547L20.8545 20.1522C21.0485 20.3461 21.0485 20.6606 20.8545 20.8545C20.6606 21.0485 20.3461 21.0485 20.1522 20.8545L15.3548 16.0571C14.0443 17.2043 12.3283 17.8996 10.4498 17.8996C6.33538 17.8996 3 14.5642 3 10.4498C3 6.33538 6.33538 3 10.4498 3ZM10.4498 3.99331C6.88397 3.99331 3.99331 6.88397 3.99331 10.4498C3.99331 14.0156 6.88397 16.9063 10.4498 16.9063C14.0156 16.9063 16.9063 14.0156 16.9063 10.4498C16.9063 6.88397 14.0156 3.99331 10.4498 3.99331Z"
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.1466 2C19.3027 2 24.2932 6.99051 24.2932 13.1466C24.2932 16.0424 23.189 18.6802 21.3786 20.6621L29.8563 29.1398C30.0516 29.3351 30.0516 29.6516 29.8563 29.8469L29.8469 29.8563C29.6516 30.0516 29.3351 30.0516 29.1398 29.8563L20.6621 21.3786C18.6802 23.189 16.0424 24.2932 13.1466 24.2932C6.99051 24.2932 2 19.3027 2 13.1466C2 6.99051 6.99051 2 13.1466 2ZM13.1466 3.01333C7.55015 3.01333 3.01333 7.55015 3.01333 13.1466C3.01333 18.7431 7.55015 23.2799 13.1466 23.2799C18.7431 23.2799 23.2799 18.7431 23.2799 13.1466C23.2799 7.55015 18.7431 3.01333 13.1466 3.01333Z"
          fill={color}
        />
      </svg>
    );
  }

  if (size === '40') {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1409 4C24.3984 4 30.2818 9.88339 30.2818 17.1409C30.2818 20.5879 28.9547 23.7248 26.7835 26.0687L35.8558 35.141C36.0511 35.3363 36.0511 35.6529 35.8558 35.8481L35.8481 35.8558C35.6529 36.0511 35.3363 36.0511 35.141 35.8558L26.0687 26.7835C23.7248 28.9547 20.5879 30.2818 17.1409 30.2818C9.88339 30.2818 4 24.3984 4 17.1409C4 9.88339 9.88339 4 17.1409 4ZM17.1409 5.01084C10.4417 5.01084 5.01084 10.4417 5.01084 17.1409C5.01084 23.8402 10.4417 29.271 17.1409 29.271C23.8402 29.271 29.271 23.8402 29.271 17.1409C29.271 10.4417 23.8402 5.01084 17.1409 5.01084Z"
          fill={color}
        />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8.5C14 11.5376 11.5376 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3C11.5376 3 14 5.46243 14 8.5ZM12.7291 13.4362C11.5923 14.411 10.1149 15 8.5 15C4.91015 15 2 12.0899 2 8.5C2 4.91015 4.91015 2 8.5 2C12.0899 2 15 4.91015 15 8.5C15 10.1149 14.411 11.5923 13.4362 12.7291L17.4805 16.7734C17.6757 16.9686 17.6757 17.2852 17.4805 17.4805C17.2852 17.6757 16.9686 17.6757 16.7734 17.4805L12.7291 13.4362Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'search');
export default IconComponent;