// App.js
import React , {useContext}from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './comoponents/layout/Layout';
import HomePage from './comoponents/Pages/HomePage';
import StorePage from './comoponents/Pages/StorePage';
import AuthPage from './comoponents/Pages/AuthPage';
import About from './comoponents/Pages/AboutPage';
import { CartProvider } from './store/CartContext';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <CartProvider>
      <Layout>
        <main>
          <Switch>
            {/* Update the path for the homepage */}
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/store' exact>
              {authCtx.isLoggedIn ? <StorePage /> : <Redirect to='/auth' />}
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            {!authCtx.isLoggedIn && (
              <Route path='/auth'>
                <AuthPage />
              </Route>
            )}
           
            <Redirect to='/' />
          </Switch>
        </main>
      </Layout>
    </CartProvider>
  );
}

export default App;