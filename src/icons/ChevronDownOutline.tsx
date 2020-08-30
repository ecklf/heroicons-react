import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ChevronDownOutline = (
  { size = 24, ...props }: Props,
  svgRef: React.Ref<SVGSVGElement>
) => {
  return (
    <svg width={size} height={size} fill="none" ref={svgRef} {...props}>
      <path
        d="M19 9l-7 7-7-7"
        stroke="#4A5568"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(ChevronDownOutline);
export default ForwardRef;
