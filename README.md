# Fayching's Blog

个人技术博客，使用 VitePress 构建。

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具

## 目录结构

```
.
├── .vitepress/          # VitePress 配置
│   ├── config.mts       # 站点配置
│   └── theme/           # 主题定制
├── blog/                # 博客文章
├── public/              # 静态资源
├── index.md             # 首页
├── about.md             # 关于页面
└── archive.md           # 归档页面
```

## 写作

在 `blog/` 目录下创建 Markdown 文件即可。文章支持 frontmatter：

```markdown
---
title: 文章标题
description: 文章描述
date: 2025-01-27
tags:
  - 标签1
  - 标签2
---

# 文章内容
```

## 部署

本博客使用 GitHub Actions 自动部署到 GitHub Pages。

推送到 master 分支后会自动触发部署流程。

## License

MIT

## 联系方式

- GitHub: [@fayching](https://github.com/fayching)
- Blog: [fayching.github.io](https://fayching.github.io)

