import React from "react";
import PropTypes from "prop-types";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;

  const publishKey =
    "pk_test_51HYmMbJ6wYqZqELRjMC8PaS0bIQ9uDUMQBc9voTRyhs54piIGxe04qzzndGMCtnSwB2EI9DOv6I1mO73s4EYahim00VGXkDmN0";

  const onToken = (token) => {
    // eslint-disable-next-line no-console
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      panelLabel="Pay Now"
      name="CRWN Clothing Ltd."
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      shippingAddress
      billingAddress
      amount={stripePrice}
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

const propTypes = {
  price: PropTypes.number.isRequired,
};

StripeCheckoutButton.propTypes = propTypes;

export default StripeCheckoutButton;
