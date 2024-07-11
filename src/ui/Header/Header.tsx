export interface IHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: IHeaderProps) => {
  return <header className={className}>{children}</header>;
};

export default Header;
