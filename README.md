# react-antdesign-demo

- [Nginx](https://nginx.org/) config
```
location /react-antdesign-demo/ {
    alias react-antdesign-demo/build/;
    index index.html;
    error_page 404 = /react-antdesign-demo/;
}
```

- `docs` : root path of GitHub Pages, `404.html` is a copy of `index.html`

- dependency
  - [Node](https://nodejs.org/en/)
  - [React](https://reactjs.org/)
  - [Create React App](https://create-react-app.dev/)
  - [React Router](https://reactrouter.com/)
  - [Ant Design](https://ant.design/)
  - [NProgress](https://ricostacruz.com/nprogress/)
  - [env-cmd](https://github.com/toddbluhm/env-cmd/)
    
