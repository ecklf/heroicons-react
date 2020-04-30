import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}
const Collection = React.forwardRef(
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
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm-2 4a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
    );
  }
);
export default Collection;