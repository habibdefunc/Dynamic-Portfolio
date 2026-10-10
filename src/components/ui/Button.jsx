export function Button({ as: Component = 'button', variant = 'primary', className = '', ...props }) {
  return <Component className={`button button-${variant} ${className}`.trim()} {...props} />;
}
