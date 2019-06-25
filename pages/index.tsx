import * as React from 'react';
import { NextPageContext, NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
// import Submit from '../components/Submit';
// import CategoryList from '../components/CategoryList';
// import isLoggedIn from '../lib/isLoggedIn';
// import redirect from '../lib/redirect';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      {/* <Submit /> */}
      {/* <CategoryList /> */}
    </Layout>
  );
};

// IndexPage.getInitialProps = async (context: NextPageContext) => {
//   const { apolloClient } = context;
//   const loggedInUser = await isLoggedIn(apolloClient);
//   if (!loggedInUser) {
//     redirect(context, '/login');
//   }
//   return { loggedInUser };
// };

export default IndexPage;
