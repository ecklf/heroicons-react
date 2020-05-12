import * as React from "react";
interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

const CheveronUpOutline = (
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
        d="M5 15l7-7 7 7"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(CheveronUpOutline);
export default ForwardRef;
