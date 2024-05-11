import * as React from "react";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M16.927 17.04L20.4 20.4m-9-13.2a3.6 3.6 0 013.6 3.6m4.28.64a7.84 7.84 0 11-15.68 0 7.84 7.84 0 0115.68 0z"
        stroke="#475467"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

const MemoIconSearch = React.memo(SearchIcon);
export default MemoIconSearch;
