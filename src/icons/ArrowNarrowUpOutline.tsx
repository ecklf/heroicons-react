import React, { forwardRef, SVGAttributes } from "react";
export interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const ArrowNarrowUpOutline = forwardRef(
  ({ size = 24, ...props }: Props, ref: any) => {
    return (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ref={ref}
        width={size}
        height={size}
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
  }
);
export default ArrowNarrowUpOutline;
