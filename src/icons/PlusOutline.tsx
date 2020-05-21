import React, { Ref, SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
}

const PlusOutline = (
  { size = 24, ...props }: Props,
  svgRef: Ref<SVGSVGElement>
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
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(PlusOutline);
export default ForwardRef;
