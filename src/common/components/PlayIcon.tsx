import * as React from "react";

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M17.973 10.937c1.367.762 1.372 1.72 0 2.58L7.376 20.666c-1.331.71-2.236.29-2.33-1.247L5 4.46c-.03-1.416 1.136-1.817 2.248-1.138l10.724 7.615z"
        stroke="#ffffff"
        strokeWidth={1.4}
      />
    </svg>
  );
}

const MemoPlayIcon = React.memo(PlayIcon);
export default MemoPlayIcon;
