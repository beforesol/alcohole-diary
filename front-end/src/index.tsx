import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { routes } from './routes';
import { Provider } from 'react-redux';
import store from './config/store';
import Loading from '@components/Loading';
import NotFound from '@components/NotFound';
import Login from '@pages/Login';
import { firestore } from "./firebase";
import LoginProvider, { useLogin } from '@hooks/useLogin';

firestore.collection('users').doc('jeonsol').get().then((doc) => console.log(doc.data()))

const Main = () => {
  const { isLoggedin, isLoadedKaKaoSdk } = useLogin();

  return (
    <>
      {isLoadedKaKaoSdk ? (
        <>
          {isLoggedin ? (
            <Provider store={store}>
              <BrowserRouter>
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
              </BrowserRouter>
            </Provider>
          ) : (
              <Login />
            )}
        </>
      ) : (
          <Loading />
        )}
    </>
  )
}

const App = () => {
  return (
    <LoginProvider>
      <Main />
    </LoginProvider>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
