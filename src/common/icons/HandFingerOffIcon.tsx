import * as React from "react";

function HandFingerOffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M8 13V8M8.06 4.077A1.5 1.5 0 0111 4.5V7m0 4v1M12.063 8.065A1.5 1.5 0 0114.002 9.5v.5M14.06 10.082A1.5 1.5 0 0117 10.5V12"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 11.5a1.5 1.5 0 013 0V16m-.88 3.129A5.996 5.996 0 0114 22h-2 .208a6 6 0 01-5.012-2.7L7 19c-.312-.479-1.407-2.388-3.286-5.728a1.5 1.5 0 01.536-2.022 1.867 1.867 0 012.28.28L8 13M3 3l18 18"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoHandFingerOff = React.memo(HandFingerOffIcon);
export default MemoHandFingerOff;
