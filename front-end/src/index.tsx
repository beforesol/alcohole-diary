import React, { Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { routes } from './routes';
import { Provider } from 'react-redux';
import store from './config/store';
import Loading from '@src/components/Loading';
import NotFound from '@src/components/NotFound';
import Login from '@src/pages/Login';
import LoginProvider, { useLogin } from '@src/hooks/useLogin';
import Layout from '@src/components/Layout';

const Main = () => {
  const { isLoggedin, isLoadedKaKaoSdk } = useLogin();

  return (
    // <>
    //   {isLoadedKaKaoSdk ? (
    //     <>
    //       {isLoggedin ? (
    //         <BrowserRouter>
    //           <Layout >
    //             <Suspense fallback={<Loading />}>
    //               <Switch>
    //                 {routes.map((route, index) =>
    //                   <Route
    //                     key={index}
    //                     exact={route.exact}
    //                     path={route.path}
    //                     component={route.component}
    //                   />
    //                 )}
    //                 <Route component={NotFound} />
    //               </Switch>
    //             </Suspense>
    //           </Layout>
    //         </BrowserRouter>
    //       ) : (
    //           <Login />
    //         )}
    //     </>
    //   ) : (
    //       <Loading />
    //     )}
    // </>
    <BrowserRouter>
      <Layout >
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map((route, index) =>
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            )}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <LoginProvider>
        <Main />
      </LoginProvider>
    </Provider>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
