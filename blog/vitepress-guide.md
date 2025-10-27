---
title: VitePress 搭建博客指南
description: 从零开始使用 VitePress 搭建个人博客
date: 2025-01-27
tags:
  - VitePress
  - 教程
  - 博客
---

# VitePress 搭建博客指南

这篇文章将介绍如何使用 VitePress 快速搭建一个现代化的个人博客。

## 为什么选择 VitePress？

VitePress 是一个基于 Vite 和 Vue 3 的静态站点生成器，具有以下优势：

- ⚡ **极速的开发体验**：基于 Vite，热更新速度极快
- 🎨 **简洁优雅**：默认主题美观且专业
- 🔍 **内置搜索**：支持本地全文搜索
- 📱 **响应式设计**：完美支持移动端
- 🚀 **性能优异**：生成的静态页面加载速度快
- 🛠️ **高度可定制**：基于 Vue 3，可以自由定制

## 快速开始

### 1. 初始化项目

```bash
# 创建项目目录
mkdir my-blog && cd my-blog

# 初始化 npm 项目
npm init -y

# 安装 VitePress
npm install -D vitepress vue
```

### 2. 创建基本结构

```bash
# 创建配置目录
mkdir .vitepress

# 创建首页
echo '# Hello VitePress' > index.md
```

### 3. 配置 package.json

```json
{
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  }
}
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 即可看到你的博客！

## 核心配置

### 站点配置

创建 `.vitepress/config.mts` 文件：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的博客",
  description: "一个基于 VitePress 的博客",
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于', link: '/about' }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername' }
    ],
    
    search: {
      provider: 'local'
    }
  }
})
```

### 自定义主题

创建 `.vitepress/theme/index.ts`：

```typescript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
  }
}
```

### 自定义样式

创建 `.vitepress/theme/custom.css`：

```css
:root {
  --vp-c-brand-1: #3b82f6;
  --vp-c-brand-2: #60a5fa;
}
```

## 写作技巧

### Frontmatter

每篇文章可以使用 frontmatter 添加元数据：

```markdown
---
title: 文章标题
description: 文章描述
date: 2025-01-27
tags:
  - 标签1
  - 标签2
---
```

### 自定义容器

VitePress 支持多种自定义容器：

::: tip 提示
这是一个提示信息
:::

::: warning 警告
这是一个警告信息
:::

::: danger 危险
这是一个危险警告
:::

::: details 点击查看详情
这是隐藏的详细内容
:::

### 代码块

支持语法高亮和行号：

```javascript{1,3-5}
function hello() {
  console.log('Hello VitePress!')
  // 高亮的行
  const message = 'Amazing!'
  return message
}
```

### 在 Markdown 中使用 Vue

VitePress 允许在 Markdown 中直接使用 Vue 组件：

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<button @click="count++">点击次数: {{ count }}</button>
```

## 部署到 GitHub Pages

### 1. 配置 base

在 `.vitepress/config.mts` 中设置：

```typescript
export default defineConfig({
  base: '/', // 如果仓库名不是 username.github.io，改为 '/仓库名/'
})
```

### 2. 创建部署脚本

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .vitepress/dist
```

### 3. 推送代码

```bash
git add .
git commit -m "初始化博客"
git push
```

GitHub Actions 会自动构建并部署到 `gh-pages` 分支。

## 最佳实践

### 1. 组织文章结构

```
blog/
├── frontend/
│   ├── vue-tips.md
│   └── react-hooks.md
├── backend/
│   └── nodejs-best-practices.md
└── index.md
```

### 2. 使用组件增强文章

创建可复用的 Vue 组件来丰富文章内容。

### 3. 优化 SEO

- 为每篇文章添加完整的 frontmatter
- 配置 sitemap
- 添加 meta 标签

### 4. 添加评论系统

可以集成 Giscus 或 Gitalk 等评论系统。

## 总结

VitePress 是一个强大且易用的静态站点生成器，非常适合搭建个人技术博客。它的核心优势在于：

- ✅ 开发体验极佳
- ✅ 性能优异
- ✅ 可定制性强
- ✅ 部署简单

希望这篇指南能帮助你快速上手 VitePress！

## 参考资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)

---

*祝你搭建博客愉快！* 🎉

