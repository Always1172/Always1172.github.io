import { Badge } from "./ui/badge"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b min-h-[500px]">
      {/* 背景图片 */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/DM_Launch.jpg')" }}
      >
        {/* 深色遮罩层，使文字更清晰 */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 h-full min-h-[500px] flex items-center py-12">
        <div className="flex max-w-[42rem] flex-col items-center gap-3 text-center">
          <Badge variant="secondary" className="mb-1 text-xl bg-white/90 text-primary border-white/20">
            开源 · 可信 · 易用
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            可信数据源 MCP
          </h1>

          <p className="max-w-[42rem] leading-normal text-white/90 sm:text-xl sm:leading-8">
            智能检索权威数据源，通过 Model Context Protocol 为 AI 提供高质量、可验证的数据源查找能力
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <Badge variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-base px-4 py-1.5">🔍 智能检索</Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-base px-4 py-1.5">✓ 权威认证</Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-base px-4 py-1.5">📚 开源共享</Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-base px-4 py-1.5">⚡ 快速接入</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
