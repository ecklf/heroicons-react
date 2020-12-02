import * as React from "react";
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ArrowNarrowRightOutline = (
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
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(ArrowNarrowRightOutline);
export default ForwardRef;
