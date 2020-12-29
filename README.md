# react-antdesign-demo

* router使用history模式时，nginx的相关配置
```ini
location /react-antdesign-demo/ {
    # nginx根路径，不需要前缀/，需要后缀/
    alias react-antdesign-demo/build/;
    # alias根路径，不需要前缀/，
    index index.html;
    # nginx根路径下html文件夹（location中的root）根路径，需要前缀/
    # try_files $uri $uri/ /../react-antdesign-demo/build/index.html;
    # 或者将404导向根路径
    error_page 404 = /react-antdesign-demo/;
}
```

* 解决github pages刷新后404，找不到页面默认使用根目录下的404.html
```
拷贝build目录下的index.html，更名为404.html
```

* build目录提交到github的pages分支，用pages分支构建github pages
```cmd
git subtree push --prefix build github pages
```
