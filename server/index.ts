import express from 'express';
import next from 'next/dist/server/next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/category/:id', (req, res) => {
      const actualPage = '/category';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/product/:id', (req, res) => {
      const actualPage = '/product';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/order/:id', (req, res) => {
      const actualPage = '/order';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
