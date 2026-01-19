# GitHub Pages 部署指南

本文档说明如何将 frontend 目录部署到 GitHub Pages。

## 快速开始

### 部署到 Always1172.github.io

**重要**：只推送 `frontend` 目录的内容到 GitHub，不包括后端代码。

```bash
# 1. 进入 frontend 目录
cd /Users/mlamp/project/mcp-api-apply/frontend

# 2. 初始化 Git（如果还没有）
git init

# 3. 添加所有文件
git add .

# 4. 创建提交
git commit -m "feat: 初始化 React + shadcn/ui 前端项目"

# 5. 添加远程仓库
git remote add origin https://github.com/Always1172/Always1172.github.io.git

# 6. 推送到 GitHub（首次推送使用 -f 强制推送）
git branch -M main
git push -u origin main -f
```

### 在 GitHub 仓库中启用 Pages

1. 访问仓库设置：
   ```
   https://github.com/Always1172/Always1172.github.io/settings/pages
   ```

2. 在 **Source** 部分选择：**GitHub Actions** ✅

3. 保存设置

### 查看部署状态

- Actions 页面：https://github.com/Always1172/Always1172.github.io/actions
- 等待构建完成（1-2 分钟）
- 访问网站：https://always1172.github.io

---

## 后续更新

每次修改代码后：

```bash
cd /Users/mlamp/project/mcp-api-apply/frontend

git add .
git commit -m "你的提交信息"
git push origin main
```

GitHub Actions 会自动构建并部署。

---

## 更换部署仓库

### 部署到普通仓库（如 `my-project`）

1. **修改 GitHub Actions 工作流**

   编辑 `.github/workflows/deploy.yml`：

   ```yaml
   - name: Build
     run: npm run build
     env:
       VITE_BASE_PATH: '/my-project/'  # 改为你的仓库名
   ```

2. **推送到新仓库**

   ```bash
   git remote set-url origin https://github.com/<username>/my-project.git
   git push origin main
   ```

3. **启用 GitHub Pages**
   - 访问：https://github.com/\<username\>/my-project/settings/pages
   - Source 选择 "GitHub Actions"

4. **访问网站**
   - https://\<username\>.github.io/my-project/

---

## 项目结构

```
frontend/                        # 这个目录推送到 GitHub
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 配置
├── public/                     # 静态资源
│   ├── DM_Launch.jpg          # 背景图
│   ├── logo_blue.png          # Logo
│   └── vite.svg
├── src/
│   ├── components/            # React 组件
│   │   ├── ui/               # shadcn/ui 组件
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── InfoSection.tsx
│   │   └── ApplicationForm.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vite.config.ts
├── package.json
├── DEPLOYMENT.md             # 本文件
└── README.md
```

---

## 本地预览

```bash
# 开发模式
npm run dev

# 构建并预览
npm run build
npm run preview
```

---

## 故障排查

### 问题 1: Actions 没有权限

**解决方案**：
- 前往：Settings > Actions > General > Workflow permissions
- 选择：Read and write permissions

### 问题 2: 样式或图片 404

**解决方案**：
- 检查 `vite.config.ts` 中的 `base` 配置
- 对于 `username.github.io`：`base: '/'`
- 对于普通仓库：`base: '/repo-name/'`

### 问题 3: 构建失败

**解决方案**：
```bash
# 本地测试构建
npm run build

# 如果成功，检查 GitHub Actions 日志
# 访问：https://github.com/your-username/your-repo/actions
```

### 问题 4: 后端代码被推送了

**解决方案**：
- 确保你在 `frontend` 目录下执行 git 命令
- 不要在项目根目录执行 git push

---

## 技术栈

- **框架**: Vite 7 + React 19 + TypeScript 5
- **样式**: Tailwind CSS v3
- **组件**: shadcn/ui
- **语法高亮**: react-syntax-highlighter
- **部署**: GitHub Actions + GitHub Pages
- **Node.js**: v20

---

## 相关链接

- [Vite 部署文档](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [shadcn/ui 文档](https://ui.shadcn.com)
