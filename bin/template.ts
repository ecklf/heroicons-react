export const template = (
  { template }: any,
  opts: any,
  { imports, componentName, props, jsx, exports }: any
) => {
  const tsTemplate = template.smart({ plugins: ["typescript"] });
  return tsTemplate.ast`
      ${imports}

      interface Props extends React.SVGProps<SVGSVGElement> {
        size?: number;
      }

      const ${componentName} = React.forwardRef(({ size = 24, ...props }: Props, ref: any) => {
        return (
          ${jsx}
        )
      });

      ${exports}
    `;
};

export default template;
