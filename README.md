# react-antdesign-demo

- nginx配置
```ini
location /react-antdesign-demo/ {
    alias react-antdesign-demo/build/;
    index index.html;
    error_page 404 = /react-antdesign-demo/;
}
```
