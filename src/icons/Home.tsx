import React, { forwardRef, SVGAttributes } from "react";
export interface Props extends SVGAttributes<SVGElement> {
  size?: number;
}
const Home = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      ref={ref}
      width={size}
      height={size}
      {...props}
    >
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );
});
export default Home;
