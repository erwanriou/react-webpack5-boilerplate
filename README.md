# React boilerplate with webpack 5

- Same folder structure with public as a **CRA** but simplified bundle and lighter build
- development and production setups ready for a production release
- 0 vulnerabilities (so far)
- Configured for alias (already `@components` implemented)
- SplitChunk optimization for spliting libraries bundles (react and reactDom so far, but you can add them into the regex)
- Possibility to proxy your servers endpoints (example in webpack dev config)
- start it with `npm install` then `npm start`

```sh
<w> [webpack-dev-server] "hot: true" # automatically applies HMR plugin, you don't have to add it manually to your webpack configuration.
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:3000/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.1.141:3000/
<i> [webpack-dev-server] Content not from webpack is served from '~/Documents/react-webpack5-boilerplate/build' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
<i> [webpack-dev-middleware] wait until bundle finished: /
```
