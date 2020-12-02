import * as React from "react";
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const DeviceTablet = (
  { size = 24, ...props }: Props,
  svgRef: React.Ref<SVGSVGElement>
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
      <path
        fillRule="evenodd"
        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(DeviceTablet);
export default ForwardRef;
