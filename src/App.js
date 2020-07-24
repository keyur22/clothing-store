import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import CheckoutPage from "./pages/checkout/checkout";

import { setCurrentUser } from "./redux/user/user-actions";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        this.unsubscribeFromSnapshot = userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={
              () =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              // eslint-disable-next-line react/jsx-curly-newline
            }
          />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const propTypes = {
  currentUser: PropTypes.shape({}),
  setCurrentUser: PropTypes.func.isRequired,
};

const defaultProps = {
  currentUser: null,
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
