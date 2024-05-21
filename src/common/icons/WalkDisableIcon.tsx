import * as React from "react";

function WalkDisableIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M13 5a1 1 0 100-2 1 1 0 000 2zM7 21l3-4M16 21l-2-4-3-3 1-6"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12l2-3 4-1 3 3 3 1M3 3l18 18"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoWalkDisableIcon = React.memo(WalkDisableIcon);
export default MemoWalkDisableIcon;
