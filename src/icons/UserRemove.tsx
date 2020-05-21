import React, { Ref, SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
}

const UserRemove = (
  { size = 24, ...props }: Props,
  svgRef: Ref<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width={size}
      height={size}
      ref={svgRef}
      {...props}
    >
      <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0zm3 11a6 6 0 00-12 0h12zm-1-9a1 1 0 100 2h4a1 1 0 100-2h-4z" />
    </svg>
  );
};

const ForwardRef = React.forwardRef(UserRemove);
export default ForwardRef;
