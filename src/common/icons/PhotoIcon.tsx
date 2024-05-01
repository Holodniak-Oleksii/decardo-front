import * as React from "react";

function PhotoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 18" fill="none" {...props}>
      <path
        d="M15 8h.01M17 4H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 15l4-4c.456-.439.973-.67 1.5-.67s1.044.231 1.5.67l5 5"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14l1-1c.456-.439.973-.67 1.5-.67s1.044.231 1.5.67l2 2"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoPhotoIcon = React.memo(PhotoIcon);
export default MemoPhotoIcon;
