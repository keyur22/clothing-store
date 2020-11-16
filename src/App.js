import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";

import { checkUserSession } from "./redux/user/user-actions";

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import CheckoutPage from "./pages/checkout/checkout";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { checkUserSession } = this.props;
    checkUserSession();
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
  checkUserSession: PropTypes.func.isRequired,
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
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
