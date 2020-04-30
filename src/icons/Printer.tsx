import React, { forwardRef, SVGAttributes } from "react";
interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Printer = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
        clipRule="evenodd"
      />
    </svg>
  );
});
export default Printer;
