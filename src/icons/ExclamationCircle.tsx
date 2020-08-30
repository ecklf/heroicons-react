import * as React from "react";
interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ExclamationCircle = (
  { size = 24, ...props }: Props,
  svgRef: React.Ref<SVGSVGElement>
) => {
  return (
    <svg width={size} height={size} fill="none" ref={svgRef} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
        fill="#4A5568"
      />
    </svg>
  );
};

const ForwardRef = React.forwardRef(ExclamationCircle);
export default ForwardRef;
