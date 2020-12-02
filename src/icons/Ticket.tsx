import * as React from "react";
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Ticket = (
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
      <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
    </svg>
  );
};

const ForwardRef = React.forwardRef(Ticket);
export default ForwardRef;
