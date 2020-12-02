import * as React from "react";
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ArrowNarrowUpOutline = (
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
        d="M8 7l4-4m0 0l4 4m-4-4v18"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(ArrowNarrowUpOutline);
export default ForwardRef;
