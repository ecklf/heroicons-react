import React, { forwardRef, SVGAttributes } from "react";
export interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const User = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  );
});
export default User;
