# Getting Started with Create React App


### Attention!

```shell
# 配环境多用yarn，而npm不要用，这个包会不兼容。然后启动用npm start  打包用yarn build
# yarn build 失败，报错   每个ts，js都加上下面这个在开头
/* eslint-disable */
```



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### 开放工具支持

https://arco.design

https://ant.design

https://echarts.apache.org

### 可能出现的问题

该框架建议`yarn`和`npm`混用

# 关于把网页挂载到服务器

我更推荐挂在github page上(✔)

或者可以用ngnix

```bash
# 启用和关闭这些服务
systemctl stop nginx
systemctl start nginx
```

后端运行python flask程序进行收发

```shell
export FLASK_APP=/usr/pythoncode/backend.py  #在任意目录下都可
flask run
flask run --host=0.0.0.0 #这将使您的服务器在外部 IP 上可用。但请注意，这样做可能会暴露您的服务器面临安全风险。在生产环境中，请确保使用适当的安全设置和防火墙配置。
nohup flask run --host=0.0.0.0 &  #一直运行,用上秒的sudo kill来杀死这个进程
```

购买的服务器建议用centOS(建议使用这个)

[React项目部署在阿里云服务器ECS - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/107285294)

[前端React项目部署到阿里云-linux 服务器 - 小宁526 - 博客园 (cnblogs.com)](https://www.cnblogs.com/ningwuyu/p/12455738.html)
