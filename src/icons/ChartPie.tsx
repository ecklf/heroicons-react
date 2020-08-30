import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ChartPie = (
  { size = 24, ...props }: Props,
  svgRef: React.Ref<SVGSVGElement>
) => {
  return (
    <svg width={size} height={size} fill="none" ref={svgRef} {...props}>
      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" fill="#4A5568" />
      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" fill="#4A5568" />
    </svg>
  );
};

const ForwardRef = React.forwardRef(ChartPie);
export default ForwardRef;
