import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const HashtagOutline = (
  { size = 24, ...props }: Props,
  svgRef: React.Ref<SVGSVGElement>
) => {
  return (
    <svg width={size} height={size} fill="none" ref={svgRef} {...props}>
      <path
        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
        stroke="#4A5568"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(HashtagOutline);
export default ForwardRef;
