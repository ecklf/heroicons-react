import * as React from "react";
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const SortAscending = (
  { size = 24, ...props }: Props,
  svgRef: React.Ref<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width={size}
      height={size}
      ref={svgRef}
      {...props}
    >
      <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zm0 4a1 1 0 000 2h5a1 1 0 000-2H3zm0 4a1 1 0 100 2h4a1 1 0 100-2H3zm10 5a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
    </svg>
  );
};

const ForwardRef = React.forwardRef(SortAscending);
export default ForwardRef;
