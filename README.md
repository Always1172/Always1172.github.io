# MCP API 申请页面 - Frontend

这是使用 **Vite + React + TypeScript + Tailwind CSS + shadcn/ui** 构建的可信数据源 MCP 服务申请页面。

## 特性

- ⚡️ **Vite** - 快速的开发服务器和构建工具
- ⚛️ **React 19** - 最新的 React 版本
- 🎨 **Tailwind CSS v4** - 现代化的 CSS 框架
- 🧩 **shadcn/ui** - 高质量的 React 组件库
- 📱 **响应式设计** - 适配各种设备
- 🚀 **GitHub Pages** - 一键部署到 GitHub Pages

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看页面。

### 构建

```bash
npm run build
```

构建产物将生成在 `dist` 目录。

### 预览构建

```bash
npm run preview
```

## 部署到 GitHub Pages

详细的部署说明请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)。

### 快速部署

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages（Source 选择 GitHub Actions）
3. 等待 Actions 构建完成
4. 访问你的 GitHub Pages 网站

## 项目结构

```
frontend/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── public/
│   └── DM_Launch.jpg          # 背景图片
├── src/
│   ├── components/
│   │   ├── ui/                # shadcn/ui 组件
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── select.tsx
│   │   │   └── card.tsx
│   │   ├── Navigation.tsx     # 导航栏组件
│   │   ├── Hero.tsx          # Hero 区域组件
│   │   ├── InfoSection.tsx   # 信息展示组件
│   │   └── ApplicationForm.tsx # 申请表单组件
│   ├── lib/
│   │   └── utils.ts          # 工具函数（cn）
│   ├── App.tsx               # 主应用组件
│   └── index.css             # Tailwind CSS
├── vite.config.ts            # Vite 配置
├── tsconfig.json             # TypeScript 配置
├── package.json
├── DEPLOYMENT.md             # 部署指南
└── README.md                 # 本文件
```

## 技术栈

- **框架**: Vite 7 + React 19 + TypeScript 5
- **样式**: Tailwind CSS v4
- **组件**: shadcn/ui（基于 Radix UI）
- **工具**: class-variance-authority, clsx, tailwind-merge
- **图标**: lucide-react

## 自定义配置

### 修改 API 地址

编辑 `src/components/ApplicationForm.tsx` 中的 `API_URL` 常量：

```typescript
const API_URL = 'https://your-api-endpoint.com/api/apply'
```

### 修改部署路径

编辑 `.github/workflows/deploy.yml` 中的 `VITE_BASE_PATH` 环境变量：

```yaml
env:
  VITE_BASE_PATH: '/your-repo-name/'  # 对于普通仓库
  # 或
  VITE_BASE_PATH: '/'                 # 对于 username.github.io 仓库
```

## shadcn/ui 组件

项目已集成以下 shadcn/ui 组件：

- Button - 按钮组件
- Input - 输入框组件
- Label - 标签组件
- Textarea - 文本域组件
- Select - 选择器组件
- Card - 卡片组件

如需添加更多组件，可以：

1. 访问 [shadcn/ui 文档](https://ui.shadcn.com)
2. 复制组件代码到 `src/components/ui/` 目录
3. 根据需要调整样式

## 开发说明

### 添加新组件

```bash
# 在 src/components/ 目录下创建新组件
touch src/components/NewComponent.tsx
```

### 使用 Tailwind CSS

项目使用 Tailwind CSS v4，可以直接在 JSX 中使用 Tailwind 类名：

```tsx
<div className="bg-blue-600 text-white p-4 rounded-lg">
  Hello World
</div>
```

### 使用 cn 工具函数

用于合并 Tailwind 类名：

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", condition && "conditional-class", className)}>
  Content
</div>
```

## 相关链接

- [Vite 文档](https://vitejs.dev)
- [React 文档](https://react.dev)
- [Tailwind CSS 文档](https://tailwindcss.com)
- [shadcn/ui 文档](https://ui.shadcn.com)
- [部署指南](./DEPLOYMENT.md)
