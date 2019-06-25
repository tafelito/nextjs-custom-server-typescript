import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Global, css } from '@emotion/core';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => {
  const cartItemsCount = 4;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>
          {' | '}
          <Link href="/cart">
            <a>{`Cart ${cartItemsCount}`}</a>
          </Link>
        </nav>
      </header>
      <Global
        styles={css`
          * {
            font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
              'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
              monospace, serif;
          }
          body {
            margin: 0;
            padding: 25px 50px;
          }
          a {
            color: #22bad9;
            text-decoration: none;
          }

          footer {
            background-color: rgba(255, 255, 255, 0.95);
            bottom: 0;
            font-size: 12px;
            left: 0;
            padding: 15px 0;
            position: fixed;
            text-align: center;
            width: 100%;
          }

          p {
            font-size: 14px;
            line-height: 24px;
          }

          article {
            margin: 0 auto;
            max-width: 650px;
          }

          button {
            align-items: center;
            background-color: #22bad9;
            border: 0;
            color: white;
            display: flex;
            padding: 5px 7px;
            transition: background-color 0.3s;
          }

          button:active {
            background-color: #1b9db7;
            transition: background-color 0.3s;
          }

          button:focus {
            outline: none;
          }
        `}
      />
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
