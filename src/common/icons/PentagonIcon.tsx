import * as React from "react";

function PentagonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={427} height={413} fill="none" {...props}>
      <path
        d="M178.233 11.623c21.029-15.279 49.505-15.279 70.534 0l153.44 111.48c21.029 15.279 29.828 42.361 21.796 67.082l-58.609 180.379c-8.032 24.722-31.07 41.459-57.063 41.459H118.669c-25.993 0-49.03-16.737-57.063-41.458L2.997 190.186c-8.032-24.722.767-51.804 21.796-67.083l153.44-111.48z"
        fill="#D9D9D9"
      />
    </svg>
  );
}

const MemoPentagonIcon = React.memo(PentagonIcon);
export default MemoPentagonIcon;
