import * as React from "react";
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Play = (
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
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(Play);
export default ForwardRef;
