import React, { forwardRef } from "react";
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}
const TagOutline = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
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
        d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
      />
    </svg>
  );
});
export default TagOutline;
