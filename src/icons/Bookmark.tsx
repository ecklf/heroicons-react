import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}
const Bookmark = React.forwardRef(
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
        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
      </svg>
    );
  }
);
export default Bookmark;
