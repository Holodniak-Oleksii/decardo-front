import * as React from "react";

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M4 6.176h16M16 21H8c-1.105 0-2-.948-2-2.118V7.235c0-.584.448-1.059 1-1.059h10c.552 0 1 .475 1 1.06v11.646c0 1.17-.895 2.118-2 2.118zM10 6.176h4c.552 0 1-.474 1-1.058v-1.06C15 3.475 14.552 3 14 3h-4c-.552 0-1 .474-1 1.059v1.059c0 .584.448 1.058 1 1.058z"
        stroke="#1D2939"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

const MemoTrashIcon = React.memo(TrashIcon);
export default MemoTrashIcon;
