import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import { routes } from './routes';
import { Provider } from 'react-redux';
import store from './config/store';
import Loading from '@components/Loading';
import NotFound from '@components/NotFound';
import { firestore } from "./firebase";


firestore.collection('users').doc('jeonsol').get().then((doc) => console.log(doc.data()))
const App = () => {
  return (
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
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
