import React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7855 4.29998L7.87026 8.17774C7.79201 8.28449 7.71874 8.39438 7.65058 8.50703C7.37542 8.18024 6.96212 7.97242 6.5 7.97242H3.5C2.67157 7.97242 2 8.64029 2 9.46414V19.409C2 20.2328 2.67157 20.9007 3.5 20.9007H6.5C7.03002 20.9007 7.49583 20.6273 7.76264 20.2146C8.20373 20.6397 8.80085 20.9007 9.45824 20.9007L17.0352 21C18.5281 21 19.8508 20.0265 20.3099 18.5898L21.8809 13.6741C21.9598 13.4271 22 13.1691 22 12.9095C22 11.5364 20.8994 10.4233 19.5418 10.4233L16.8119 10.324C16.5404 10.324 16.3202 10.1014 16.3202 9.82674V5.95705C16.3202 4.63254 15.4464 3.4708 14.1843 3.11734C12.9186 2.76285 11.5676 3.23291 10.7855 4.29998ZM8 18.6397C8.10737 19.3567 8.71935 19.9062 9.45824 19.9062L17.0352 20.0055C18.1016 20.0055 19.0463 19.3102 19.3743 18.2839L20.9452 13.3683C20.9926 13.22 21.0167 13.0652 21.0167 12.9095C21.0167 12.0856 20.3563 11.4178 19.5418 11.4178L16.8119 11.3185C15.9973 11.3185 15.3369 10.6506 15.3369 9.82674V5.95705C15.3369 5.07957 14.758 4.30992 13.9219 4.07575L13.7575 4.0365C12.933 3.8732 12.0816 4.20159 11.5754 4.89224L8.66016 8.76999C8.28818 9.27746 8.06105 9.87591 8 10.5003V18.6397ZM7 10.8429V9.46414C7 9.18953 6.77614 8.9669 6.5 8.9669H3.5C3.22386 8.9669 3 9.18953 3 9.46414V19.409C3 19.6836 3.22386 19.9062 3.5 19.9062H6.5C6.77614 19.9062 7 19.6836 7 19.409V18.4145V10.8429Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'vote-24');
export default IconComponent;
