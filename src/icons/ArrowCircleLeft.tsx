import React, { forwardRef } from "react";
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}
const ArrowCircleLeft = forwardRef(
  ({ size = 24, ...props }: Props, ref: any) => {
    return (
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        ref={ref}
        width={size}
        height={size}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);
export default ArrowCircleLeft;
