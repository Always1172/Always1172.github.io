import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { CodeBlock } from "./ui/code-block"

export function InfoSection() {
  return (
    <div className="space-y-10">
      {/* 平台简介 */}
      <section id="intro" className="scroll-mt-20">
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-3xl font-bold tracking-tight">平台简介</h2>
          <p className="text-lg text-muted-foreground">
            了解可信数据源 MCP 如何帮助您的 AI 应用获取高质量数据
          </p>
        </div>

        <Alert className="mb-6">
          <AlertTitle>什么是可信数据源 MCP？</AlertTitle>
          <AlertDescription className="mt-2">
            可信数据源 MCP 是一个开源的数据源检索服务，通过 Model Context
            Protocol 为 AI 提供权威、可信的数据源查找能力。帮助用户快速找到经过验证的、高质量的数据源，确保
            AI 使用准确可靠的信息。
          </AlertDescription>
        </Alert>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">🔍</span>
                智能检索匹配
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                基于语义理解的数据源搜索，快速找到最匹配需求的权威数据源
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">✓</span>
                权威认证保障
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                精选来自政府、学术机构、行业组织等权威渠道的高质量数据源
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">📚</span>
                开源社区驱动
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                完全开源透明，社区共建共享，持续更新维护数据源库
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">⚡</span>
                一键快速接入
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                标准化 MCP 接口，简单配置即可将数据源接入到 Claude 等 AI 应用
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">🏷️</span>
                分类标签体系
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                按领域、类型、地域等维度分类，支持标签过滤和精准查找
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">📊</span>
                质量评分机制
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                基于更新频率、数据完整性、用户评价等多维度评估数据源质量
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 配置示例 */}
      <section id="config" className="scroll-mt-20">
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-3xl font-bold tracking-tight">快速配置</h2>
          <p className="text-lg text-muted-foreground">
            申请通过后，将以下配置添加到您的 Claude 配置文件中
          </p>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>配置文件</CardTitle>
              <CardDescription>
                将以下 JSON 配置添加到 Claude Desktop 的配置文件中
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="json"
                code={`{
  "mcpServers": {
    "datasource_hub": {
      "type": "http",
      "url": "\${DATASOURCE_HUB_URL:-http://localhost:8001/mcp}",
      "headers": {
        "Authorization": "Bearer \${DATASOURCE_HUB_TOKEN}"
      }
    }
  }
}`}
              />
            </CardContent>
          </Card>

          <Alert>
            <AlertTitle>配置说明</AlertTitle>
            <AlertDescription className="mt-2 space-y-2">
              <p>
                <strong>type</strong>: HTTP 类型的 MCP 服务器
              </p>
              <p>
                <strong>url</strong>: 数据源服务地址，支持通过环境变量配置
              </p>
              <p>
                <strong>Authorization</strong>: 访问令牌，通过下方申请表单获取
              </p>
              <p className="mt-4 font-semibold">
                ⚠️ 重要：申请通过后，我们会通过邮件发送您的专属 Token
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  )
}
