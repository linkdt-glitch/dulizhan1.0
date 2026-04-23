# MixerAttach - KitchenAid配件商城

## 项目概述
一个多语言的 KitchenAid 配件商城网站，支持 5 种语言切换，使用 Express 托管静态文件，可部署到 Railway 等云平台。

## 技术栈
- **后端**: Node.js + Express（静态文件服务）
- **前端**: 纯 HTML/CSS/JavaScript 单页应用
- **字体**: Google Fonts (Inter, Playfair Display)

## 目录结构
```
/workspace/projects/
├── server.js           # Express 服务器入口
├── package.json        # Node.js 项目配置
├── .coze               # 部署配置
├── public/
│   └── index.html      # 主页面（包含所有样式和脚本）
└── styles/
    └── main.css        # 默认样式（未被使用）
```

## 开发与部署

### 本地开发
```bash
pnpm install
pnpm start
# 访问 http://localhost:5000
```

### Railway 部署
1. 将代码推送到 GitHub 仓库
2. 在 Railway 中新建项目，关联该仓库
3. Railway 自动检测 Node.js 项目并运行 `npm start`
4. 服务监听 `process.env.PORT`（Railway 自动注入）

### 关键配置
- **端口**: 使用 `process.env.PORT || 5000`，Railway 会注入 PORT 环境变量
- **启动命令**: `node server.js`（package.json 的 scripts.start）
- **Node 版本**: >= 18.0.0

## 功能特性
1. **多语言支持**: 英语、中文、法语、西班牙语、希腊语
2. **响应式设计**: 适配各种屏幕尺寸
3. **模块化布局**: Hero区、价值展示、分类、产品、评价、订阅、信任区、页脚
4. **语言切换**: 下拉菜单选择语言，自动保存到 localStorage

## 注意事项
- 图片使用 Unsplash 占位图，需网络访问
- 订阅功能仅为前端演示，无后端存储
- Google Fonts 需要网络访问
