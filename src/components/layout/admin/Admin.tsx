import * as React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export interface AdminLayoutProps {}

export const AdminLayout = (props: AdminLayoutProps) => {
  const renderHeader = () => {
    return (
      <div>
        <Header />{' '}
      </div>
    );
  };
  const renderBody = () => {
    return <div>body </div>;
  };
  const renderFooter = () => {
    return (
      <div>
        <Footer />{' '}
      </div>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </>
  );
};
