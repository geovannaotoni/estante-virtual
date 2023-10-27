// setupProxy.js
// const { createProxyMiddleware } = require('http-proxy-middleware');
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app) {
  app.use(
    '/GraphQL', 
    createProxyMiddleware({
      target: 'https://us-central1-ss-devops.cloudfunctions.net',
      changeOrigin: true,
    })
  );
};
