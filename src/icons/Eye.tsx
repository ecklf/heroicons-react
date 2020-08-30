import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Eye = (
  { size = 24, ...props }: Props,
  svgRef: React.Ref<SVGSVGElement>
) => {
  return (
    <svg width={size} height={size} fill="none" ref={svgRef} {...props}>
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" fill="#4A5568" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
        fill="#4A5568"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(Eye);
export default ForwardRef;
