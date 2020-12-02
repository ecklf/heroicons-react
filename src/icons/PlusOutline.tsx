import * as React from "react";
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const PlusOutline = (
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
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(PlusOutline);
export default ForwardRef;
