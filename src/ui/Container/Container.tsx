export interface IContainerProps {
  element?: 'section' | 'nav' | 'div';
  className?: string;
  children?: React.ReactNode;
}

const Container = ({ element, className, children, ...props }: IContainerProps) => {
  let Element: React.ElementType = 'section';
  let styles = 'max-w-[1240px] mx-6 xl:mx-auto';

  switch (element) {
    case 'nav':
      Element = 'nav';
      break;
    case 'div':
    default:
      Element = 'div';
      break;
  }

  if (className) styles = `${styles} ${className}`;

  return (
    <Element className={styles} {...props}>
      {children}
    </Element>
  );
};

export default Container;
