import React, { Ref, SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
}

const ShoppingBag = (
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
      <path d="M5 8h10l1 9H4l1-9z" />
      <path d="M7 6a3 3 0 013-3 3 3 0 013 3v3a3 3 0 01-3 3 3 3 0 01-3-3V6z" />
      <rect width={2} height={2} x={6} y={9} rx={1} />
      <rect width={2} height={2} x={12} y={9} rx={1} />
    </svg>
  );
};

const ForwardRef = React.forwardRef(ShoppingBag);
export default ForwardRef;
