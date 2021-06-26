# react 模版工程

## 概述

使用 vite 搭建一个 react 模版工程。

- [x] vite
- [x] react
- [x] react-router-dom
- [x] ant-design
- [x] eslint
- [x] prettier
- [x] storybook
- [x] tailwindcss
- [ ] axios
- [ ] redux

## 具体步骤

### 清理 src 目录

删除 src 目录下无用的文件，组织新的文件夹目录。

### 安装 rect-router-dom

```
yarn add react-router-dom
yarn add @types/react-router-dom -D
```

### 安装 ant-design

```
yarn add antd

yarn add vite-plugin-style-import less -D

// 修改vite.config.js
export default defineConfig({
  plugins: [
    reactRefresh(),
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
```

### 环境变量

```
// 修改脚本
"scripts": {
  "start": "vite --mode dev",
  "build:test": "vite build --mode test",
  "build:prod": "vite build --mode production",
  "serve": "vite preview"
},

// 获取
const env = process.argv[process.argv.length - 1]
```

### 路径别名

```
yarn add @types/node -D

// 在tsconfig.json中配置
{
  compilerOptions: {
    "baseUrl": "./src",
    "paths": {
      "pages": ["pages/*"],
      "components": ["components/*"]
    }
  }
}

// 在vite.config.js配置
resolve: {
  alias: {
    pages: path.resolve(__dirname, 'src/pages'),
    components: path.resolve(__dirname, 'src/components'),
  },
},
```

### eslint

```
yarn add eslint -D

eslint --init
// 将生成一份eslint配置文件
// ✔ How would you like to use ESLint? · problems
// ✔ What type of modules does your project use? · esm
// ✔ Which framework does your project use? · react
// ✔ Does your project use TypeScript? · Yes
// ✔ Where does your code run? · browser
// ✔ What format do you want your config file to be in? · JSON
// ✔ Would you like to install them now with npm? · Yes

// 在package.json中添加脚本
"eslint": "eslint src"

// 添加如下配置到eslintrc.json
"settings": {
  "react": {
    "version": "detect" // 自动检测react版本
  }
},
"rules": {
  "@typescript-eslint/explicit-module-boundary-types": 0,
  "react/display-name": 0
}
```

### prettier

```
yarn add --dev --exact prettier

// 生成配置文件
echo {}> .prettierrc.json

// 排除不需要格式化的文件目录
echo > .prettierignore

// 添加脚本
"prettier": "prettier --config ./.prettierrc.json --write 'src/**/*.@(js|ts)?(x)'"
```

### storybook

```
// 初始化storybook配置
npx sb init
// 上面的命令将对您的本地环境进行以下更改：
// - 安装所需的依赖项。
// - 设置必要的脚本来运行和构建 Storybook。
// - 添加默认的 Storybook 配置。
// - 添加一些样板story以帮助您入门。

// 清理默认的样板story，并修改.storybook中的main.js配置
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'], // 修改引入路径
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
```

### tailwindcss

```
// 安装tailwindcss
yarn add tailwindcss@latest

// 安装postcss及插件
yarn add postcss@latest autoprefixer@latest -D

// 创建postcss配置
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

// 初始化tailwindcss配置
npx tailwindcss init

// 在main.tsx中引入tailwindcss
// main.js
import "tailwindcss/tailwind.css"

// 为生产而构建时，请确保配置清除 (purge) 选项以删除任何未使用类，这样生成的文件尺寸最小(当NODE_ENV设置为production时)
// tailwind.config.js
purge: ['./index.html', './src/**/*.tsx'],
```

### redux

```
yarn add @reduxjs/toolkit react-redux

yarn add redux-devtools -D

// 按照文档配置https://redux.js.org/tutorials/quick-start
```
