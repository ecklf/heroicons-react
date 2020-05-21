export const template = (
  { template }: any,
  opts: any,
  { imports, componentName, props, jsx, exports }: any
) => {
  const tsTemplate = template.smart({ plugins: ["typescript"] });
  return tsTemplate.ast`
      import React, {Ref, SVGProps} from "react";

      interface Props extends SVGProps<SVGSVGElement> {
        size?: number;
      }

      const ${componentName} = ({ size = 24, ...props }: Props, svgRef: Ref<SVGSVGElement>) => {
        return (
          ${jsx}
        )
      };

      ${exports}
    `;
};

export default template;
