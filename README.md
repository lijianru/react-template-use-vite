# react模版工程
## 概述
使用vite搭建一个react模版工程。
- [x] vite
- [x] react
- [x] react-router-dom
- [x] ant-design
- [ ] axios

## 具体步骤
### 清理src目录
删除src目录下无用的文件，组织新的文件夹目录。

### 安装normalize.css
```
yarn add normalize.css

// 在main中引入normalize.css
import 'normalize.css'
```

### 安装rect-router-dom
```
yarn add react-router-dom
yarn add @types/react-router-dom -D
```

### 安装ant-design
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
  "build:prod": "vite build --mode prod",
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
