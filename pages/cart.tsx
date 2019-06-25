import { useQuery, useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { NextPage } from 'next';

import Layout from '../components/Layout';
import Link from 'next/link';

const Cart: NextPage = () => {
  const hasItems = false;

  if (!hasItems) {
    return (
      <Layout title="Checkout">
        <p data-testid="empty-message">No items in your cart</p>
      </Layout>
    );
  }

  // const cartItems = [me.cart!.items!];

  return (
    <Layout title="Cart">
      <div>My Cart</div>
      {/* <CartItems {...{ cartItems }} /> */}
      <Link href="/checkout">
        <button>Checkout</button>
      </Link>
    </Layout>
  );
};

// Cart.getInitialProps = async context => {
//   const { apolloClient } = context;
//   const loggedInUser = await isLoggedIn(apolloClient);
//   if (!loggedInUser) {
//     redirect(context, '/login');
//   }
//   return { loggedInUser };
// };

export default Cart;
