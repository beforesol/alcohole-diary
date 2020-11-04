import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route, Redirect, useHistory } from 'react-router-dom';
import { routes, ROUTE_PATH } from './routes';
import { Provider } from 'react-redux';
import store from './config/store';
import Loading from '@components/Loading';
import NotFound from '@components/NotFound';
import { firestore } from "./firebase";
import { loadJs } from '@utils/loadJs';
import { UserProfile } from 'alcoholeDiary';

firestore.collection('users').doc('jeonsol').get().then((doc) => console.log(doc.data()))

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    loadJs('//developers.kakao.com/sdk/js/kakao.min.js', 'kakao-sdk').then(() => {
      window.Kakao?.init('20e658648ba462950843d2a595aaebe8');

      const isLogin = window.Kakao.Auth.getAccessToken();

      if (isLogin) {
        window.Kakao?.API.request({
          url: "/v2/user/me",
          success: (_profile: UserProfile) => {
            // dispatch(setUserProfile(profile))

            setIsLoggedin(true);
          },
        });
      } else {
        history.push(ROUTE_PATH.LOGIN.path)
      }
    });
  }, []);

  return (isLoggedin ? (
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
      <Loading />
    )
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
