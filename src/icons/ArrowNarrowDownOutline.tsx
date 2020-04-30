import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}
const ArrowNarrowDownOutline = React.forwardRef(
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
          d="M16 17l-4 4m0 0l-4-4m4 4V3"
        />
      </svg>
    );
  }
);
export default ArrowNarrowDownOutline;
