# Kris® — 个人网站 2.0 (Personal Portfolio)

<div align="center">

[![Solid.js](https://img.shields.io/badge/Solid.js-1.9-2c4f7c?style=flat-square&logo=solid)](https://www.solidjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38b2ac?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-white?style=flat-square)](LICENSE)

**融合视觉美学、企业级系统工程与前沿 AI 技术的电影级高质感个人站**

[在线预览 (chkris.com)](https://chkris.com) · [GitHub 仓库](https://github.com/Chan-Kris/personal-site-2.0)

</div>

---

## ✦ 项目简介

**Kris® 2.0** 是一套专为全栈工程师打造的现代化单页长流式（One-Page Scroll）个人网站。

项目抛弃了传统千篇一律的卡片式模板布局，采用 **Solid.js** 原生无虚拟 DOM 架构，实现极致的加载性能（生产打包 JS Gzip 仅约 12KB）。在视觉呈现上，融合了全屏背景视效、GPU 加速的高斯模糊过渡、双层蒙版拟物液体玻璃（Liquid Glass）与电影级大衬线排版。

---

## ✦ 视觉与交互特性

- **🎬 全屏动态背景与景深过渡**：
  - 首屏搭载超高清背景循环视频，展现纯粹的景深张力；
  - 页面向下滚动时，自动触发 **GPU 硬件加速的高斯模糊平滑过渡**（`blur-xl` + 午夜蓝氛围叠层），内容卡片层次感与阅读舒适度大幅提升；
  - 返回首屏时自适应平滑褪去模糊，瞬间恢复通透清晰。
- **💎 超精细液体玻璃光效（.liquid-glass）**：
  - 基于 `backdrop-filter: blur(4px)` 与 `background-blend-mode: luminosity`；
  - 通过 `::before` 伪元素运用双层遮罩（`-webkit-mask-composite: xor` / `mask-composite: exclude`）渲染 1.4px 渐变流光外圈高光。
- **✒️ 电影感中西衬线排版（Cinematic Typography）**：
  - 英文展示采用经典西文衬线体 `Instrument Serif`；
  - 中文展示深度适配 `Noto Serif SC`（思源宋体）与系统宋体，实现高级雅致的双色灰度对比排版。
- **⚡️ 极简单页长流（One-Page Smooth Scroll）**：
  - 顶部吸顶毛玻璃导航（Sticky Glassmorphism Navbar），全站平滑滚动与移动端自适应。

---

## ✦ 核心板块构成

| 模块 | 标识 / 锚点 | 核心内容 |
| :--- | :--- | :--- |
| **首屏视觉 (Hero)** | `#home` | 电影级 H1 标题大字、全栈工程师定位文案、核心行动按钮 |
| **专业技能 (Skills)** | `#skills` | 5 大能力矩阵：AI 前沿范式 (ComfyUI / Vibe Coding / AI 数据分析)、前端工程、后端服务、数据与基础云、视觉与后期剪辑 |
| **经历历程 (About)** | `#about` | 2016 独立创作者 ➔ 2019 工业 MES/ERP 实施顾问 ➔ 当前 AI 全栈跃迁的故事线 |
| **实践成果入口 (Projects Teaser)** | `#projects` | 主页轻量级探索入口卡片，一键导航直达独立作品页面 |
| **实践成果独立页 (Projects Page)** | `#/projects` | 独立路由页面：双旗舰作品（亚马逊数据自动化系统、Solid.js 全栈个人站）、分类过滤、深度亮点展示 |
| **亚马逊数据系统深度复盘页** | `#/project/amazon-data` | 专属独立技术复盘专栏：双读签名防污染、缺失值治理、生产数据库写入纪律与七维商业分析模型 |
| **联系方式 (Contact)** | `#contact` | 邮箱一键点击复制（带反馈 Toast）、GitHub 开源主页直达、全站页脚 |

---

## ✦ 技术栈矩阵

- **前端核心框架**：[Solid.js](https://www.solidjs.com/)（细粒度响应式更新，零虚拟 DOM 开销）
- **开发与构建工具**：[Vite 6](https://vitejs.dev/) + [vite-plugin-solid](https://github.com/solidjs/vite-plugin-solid)
- **样式与原子化**：[Tailwind CSS](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **类型系统**：TypeScript 5.x
- **多端交付优化**：集成本地自动化 Vite 插件，打包构建时自动生成 `dist/index.php`，完美兼容各类 Web 服务器与虚拟主机环境。

---

## ✦ 本地开发与构建

### 1. 安装依赖
```bash
npm install
```

### 2. 启动本地开发服务
```bash
npm run dev
```
访问本地开发服务：`http://localhost:3000`

### 3. 生产环境构建
```bash
npm run build
```
构建产物将输出在 `dist/` 目录下，包含：
- `dist/index.php`（PHP 环境直接部署入口）
- `dist/index.html`（静态服务器入口）
- `dist/assets/`（编译压缩后的 JS 与 CSS 文件）

---

## ✦ 服务器部署指南

本项目采用相对路径资产引用（`base: './'`），部署极为便捷：

1. 执行 `npm run build`；
2. 将 `dist/` 文件夹下的 **`index.php`**（或 `index.html`）以及 **`assets/` 文件夹**上传至服务器的网站根目录（如 Nginx、Apache、宝塔面板网站运行目录）；
3. 刷新域名即可直接上线访问。

---

## ✦ 开发者信息

- **作者**：Kris
- **定位**：全栈工程师 / AIGC 创作者
- **GitHub**：[@Chan-Kris](https://github.com/Chan-Kris)
- **联系邮箱**：[Cforiky0314@gmail.com](mailto:Cforiky0314@gmail.com)

---

## ✦ License

本项目采用 [MIT License](LICENSE) 开源。
