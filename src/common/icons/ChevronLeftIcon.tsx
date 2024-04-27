import * as React from "react";

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M15 6l-6 6 6 6"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoChevronLeftIcon = React.memo(ChevronLeftIcon);
export default MemoChevronLeftIcon;
