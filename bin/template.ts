export const template = (
  { template }: any,
  opts: any,
  { imports, componentName, props, jsx, exports }: any
) => {
  const tsTemplate = template.smart({ plugins: ["typescript"] });
  return tsTemplate.ast`
      ${imports}

      export interface Props extends React.SVGProps<SVGSVGElement> {
        size?: number;
      }

      const ${componentName} = ({ size = 24, ...props }: Props, svgRef: React.Ref<SVGSVGElement>) => {
        return (
          ${jsx}
        )
      };

      ${exports}
    `;
};

export default template;
