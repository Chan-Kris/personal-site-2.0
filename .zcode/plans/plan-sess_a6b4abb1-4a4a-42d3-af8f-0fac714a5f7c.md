# 背景平滑过渡高斯模糊（Gaussian Blur on Scroll）实现方案

当用户在页面顶部（Hero 首屏）时，背景视频保持 100% 原始清晰度与电影级景深；当页面向下滚动后，背景视频与环境层平滑渐变进入高斯模糊状态，凸显内容卡片的质感与阅读舒适度。

---

## 1. 交互与视觉设计

1. **状态监听机制**：
   - 在 `src/App.tsx` 中挂载轻量级滚动监听 `window.addEventListener('scroll', ...)`（使用 passive 监听保障滚动帧率 60fps）。
   - 定义响应式状态 `isScrolled`（当滚动超过 60px 时触发）。
2. **GPU 加速高斯模糊动画**：
   - 视频层：配置 `transition-all duration-700 ease-out`。未滚动时保持 `filter-none scale-100 opacity-100`；滚动后平滑过渡至 `filter blur-md sm:blur-xl scale-[1.04] opacity-50`。
   - `scale-[1.04]` 微放大可杜绝边缘模糊产生白边/暗角的常见问题，保持全屏饱满。
3. **环境氛围叠加层**：
   - 配合暗色主题午夜蓝（`bg-background/50 backdrop-blur-sm`），在模糊的同时营造如呼吸灯般的柔和环境光感。
4. **反向平滑恢复**：
   - 当用户滚动回到顶部时，背景在 0.7 秒内柔和无缝恢复为超高清原始视频。

---

## 2. 实施步骤

1. 修改 `src/App.tsx`：引入 `createSignal`、`onMount`、`onCleanup`，绑定滚动监听与动态类名绑定。
2. 运行 `npm run build` 执行编译，自动更新 `dist/index.php` 与对应资源。