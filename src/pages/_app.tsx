import { AppProps } from 'next/app';
import '../styles/global.css';
import { Provider } from 'react-redux';
import store from '../store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../store/userReducer';
import Layout from '@/components/Layout';
import { ThemeProviderWrapper } from '@/ThemeProviderWrapper';

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
