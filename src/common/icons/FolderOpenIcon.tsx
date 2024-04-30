import * as React from "react";

const FolderOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={21} fill="none" {...props}>
    <path
      d="M4.5 4.941v-1.5a1 1 0 011-1H15a1 1 0 011 1v4M2 16.56V8.955 6.323a1 1 0 011-1h4.765l2.304 2.462H17a1 1 0 011 1v7.774a2 2 0 01-2 2H4a2 2 0 01-2-2z"
      stroke="#ffffff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default React.memo(FolderOpenIcon);
