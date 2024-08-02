import { FC, ReactNode } from 'react';
import { Suspense } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Suspense>{children}</Suspense>
      {children}
    </div>
  );
};

export default Layout;
