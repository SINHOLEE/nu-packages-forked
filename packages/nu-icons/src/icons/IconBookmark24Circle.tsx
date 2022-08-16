import * as React from 'react';
import { convertIcon } from '../component/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM9 7.94854C9 7.68769 9.20492 7.5 9.42857 7.5H14.5714C14.7951 7.5 15 7.68769 15 7.94854V16.0491L12.7892 14.3247C12.325 13.9626 11.675 13.9626 11.2108 14.3247L9 16.0491V7.94854ZM14.5714 6.5H9.42857C8.63959 6.5 8 7.14853 8 7.94854V16.9206C8 17.2406 8.25584 17.5 8.57143 17.5C8.69745 17.5 8.81994 17.4577 8.91983 17.3798L11.8258 15.1132C11.9285 15.0331 12.0715 15.0331 12.1742 15.1132L15.0802 17.3798C15.3303 17.5749 15.6891 17.5275 15.8815 17.2738C15.9583 17.1725 16 17.0483 16 16.9206V7.94854C16 7.14853 15.3604 6.5 14.5714 6.5Z"
        fill="#595959"
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'bookmark-24-circle');
export default IconComponent;
