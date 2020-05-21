import React, { Ref, SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
}

const DotsHorizontal = (
  { size = 24, ...props }: Props,
  svgRef: Ref<SVGSVGElement>
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
      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm4 2a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
};

const ForwardRef = React.forwardRef(DotsHorizontal);
export default ForwardRef;
