import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}
const Adjustments = React.forwardRef(
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
        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zm6 0a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zm5-1a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
      </svg>
    );
  }
);
export default Adjustments;