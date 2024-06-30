import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/global.css';
import { ThemeProviderWrapper } from '../ThemeProviderWrapper';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from '../store';
import { setUserToken } from '../store/userActions';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <Layout>
          <AppWrapper Component={Component} pageProps={pageProps} />
        </Layout>
      </ThemeProviderWrapper>
    </Provider>
  );
};

interface AppWrapperProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const AppWrapper = ({ Component, pageProps }: AppWrapperProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setUserToken(token));
    }
  }, [dispatch]);

  return <Component {...pageProps} />;
};

export default MyApp;
