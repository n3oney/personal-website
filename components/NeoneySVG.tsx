import * as React from "react";

const NeoneySVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 2048 2048"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M495.547 618.24L446 585.75v599.14l19.123 8.4 545.997 240 12.87 5.66 12.87-5.65 547-240 19.14-8.4V585.839l-49.51 32.379L1194.47 853H853.556L495.547 618.24z"
      stroke="currentColor"
      strokeWidth={64}
    />
    <path
      d="M650.868 1274.95L606 1255.24v251.92l49.515-32.38 131.5-86 49.432-32.33-54.079-23.75-131.5-57.75zM1397.13 1274.95l44.87-19.7V1507.17l-49.51-32.38-131.5-86-49.44-32.33 54.08-23.75 131.5-57.76z"
      stroke="currentColor"
      strokeWidth={64}
    />
  </svg>
);

export default NeoneySVG;