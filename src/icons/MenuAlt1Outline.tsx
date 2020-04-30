import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const MenuAlt1Outline = forwardRef(
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
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    );
  }
);
export default MenuAlt1Outline;
