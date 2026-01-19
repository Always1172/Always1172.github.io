import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base 路径配置：
  // - 对于 username.github.io 仓库，使用 '/'
  // - 对于其他仓库（如 myrepo），使用 '/myrepo/'
  // 可以通过环境变量 VITE_BASE_PATH 自定义
  base: process.env.VITE_BASE_PATH || '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
