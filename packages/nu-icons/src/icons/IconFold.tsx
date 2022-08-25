import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#616161', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <defs>
        <filter
          id="muriqmai4a"
          width="150%"
          height="150%"
          x="-25%"
          y="-25%"
          filterUnits="objectBoundingBox"
        >
          <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2" />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        </filter>
        <circle id="8blqgcnhjb" cx="12" cy="12" r="12" />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <g transform="translate(-71 -79) translate(75 83)">
              <use fill="#000" filter="url(#muriqmai4a)" xlinkHref="#8blqgcnhjb" />
              <circle
                cx="12"
                cy="12"
                r="11.5"
                fill="#FEFEFE"
                stroke="#2581FF"
                stroke-linejoin="square"
              />
            </g>
            <path
              fill="#2781FF"
              fill-rule="nonzero"
              d="M13.85 16.182c.217.202.196.512-.046.693-.241.18-.612.163-.828-.038l-4.826-4.51c-.2-.186-.2-.468 0-.654l4.826-4.51c.216-.201.587-.219.828-.038.242.18.263.491.046.693L9.375 12l4.475 4.182z"
              transform="translate(-71 -79) translate(75 83)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'fold');
export default IconComponent;