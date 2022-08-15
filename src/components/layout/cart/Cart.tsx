import * as React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export interface CartLayoutProps {}

export const CartLayout = (props: CartLayoutProps) => {
  const renderBody = () => {
    return <div>body cart</div>;
  };
  return (
    <div>
      <Header />
      {renderBody()}
      <Footer />
    </div>
  );
};
