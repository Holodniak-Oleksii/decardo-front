export { default as FolderOpenIcon } from "./FolderOpenIcon";
import * as React from "react";

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.462 12h11.076M4 7h16m-9.846 10h3.692"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoFilterIcon = React.memo(FilterIcon);
export default MemoFilterIcon;
