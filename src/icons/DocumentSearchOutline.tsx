import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const DocumentSearchOutline = (
  { size = 24, ...props }: Props,
  svgRef: React.Ref<SVGSVGElement>
) => {
  return (
    <svg width={size} height={size} fill="none" ref={svgRef} {...props}>
      <path
        d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
        stroke="#374151"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(DocumentSearchOutline);
export default ForwardRef;
