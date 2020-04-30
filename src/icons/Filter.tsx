import React, { forwardRef, SVGAttributes } from "react";
export interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Filter = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
        clipRule="evenodd"
      />
    </svg>
  );
});
export default Filter;
