// components/templates/Layout.tsx
import React, { ReactNode } from 'react';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col w-[100%] h-[100%]">
      <Header />
      <main className="w-[100%] h-[100%]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
