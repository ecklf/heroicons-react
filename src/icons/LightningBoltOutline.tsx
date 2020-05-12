import * as React from "react";
interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

const LightningBoltOutline = (
  { size = 24, ...props }: Props,
  svgRef: React.Ref<SVGSVGElement>
) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={size}
      height={size}
      ref={svgRef}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(LightningBoltOutline);
export default ForwardRef;
