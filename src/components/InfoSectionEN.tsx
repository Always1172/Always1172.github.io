import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { CodeBlock } from "./ui/code-block"

export function InfoSectionEN() {
  return (
    <div className="space-y-10">
      {/* Platform Introduction */}
      <section id="intro" className="scroll-mt-20">
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Platform Overview</h2>
          <p className="text-lg text-muted-foreground">
            Learn how Trusted Data Source MCP helps your AI applications access high-quality data
          </p>
        </div>

        <Alert className="mb-6">
          <AlertTitle>What is Trusted Data Source MCP?</AlertTitle>
          <AlertDescription className="mt-2">
            Trusted Data Source MCP is an open-source data source retrieval service that provides AI with
            authoritative and trusted data source discovery capabilities through the Model Context Protocol.
            It helps users quickly find verified, high-quality data sources, ensuring AI uses accurate and
            reliable information.
          </AlertDescription>
        </Alert>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">🔍</span>
                Intelligent Matching
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Semantic understanding-based data source search to quickly find the most relevant authoritative sources
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">✓</span>
                Authority Certified
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Curated high-quality data sources from government, academic institutions, and industry organizations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">📚</span>
                Community Driven
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Fully open source and transparent, community-built and shared, continuously updated data source library
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">⚡</span>
                Quick Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Standardized MCP interface, simple configuration to integrate data sources into Claude and other AI apps
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">🏷️</span>
                Tag Classification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Classification by domain, type, region, supporting tag filtering and precise search
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">📊</span>
                Quality Scoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Multi-dimensional assessment based on update frequency, data completeness, and user reviews
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Configuration Example */}
      <section id="config" className="scroll-mt-20">
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Quick Configuration</h2>
          <p className="text-lg text-muted-foreground">
            After approval, add the following configuration to your Claude config file
          </p>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuration File</CardTitle>
              <CardDescription>
                Add the following JSON configuration to Claude Desktop's config file
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
            <AlertTitle>Configuration Instructions</AlertTitle>
            <AlertDescription className="mt-2 space-y-2">
              <p>
                <strong>type</strong>: HTTP-based MCP server
              </p>
              <p>
                <strong>url</strong>: Data source service address, configurable via environment variable
              </p>
              <p>
                <strong>Authorization</strong>: Access token, obtained through the application form below
              </p>
              <p className="mt-4 font-semibold">
                ⚠️ Important: After approval, we will send your exclusive token via email
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  )
}
