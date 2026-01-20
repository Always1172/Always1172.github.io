import { Badge } from "./ui/badge"

export function HeroEN() {
  return (
    <section className="relative overflow-hidden border-b min-h-[500px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/DM_Launch.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full min-h-[500px] flex items-center py-12">
        <div className="flex max-w-[42rem] flex-col items-center gap-3 text-center">
          <Badge variant="secondary" className="mb-1 text-xl bg-white/90 text-primary hover:bg-white/90">
            Open Source · Trusted · Easy to Use
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
            Trusted Data Source MCP
          </h1>

          <p className="max-w-[42rem] leading-normal text-white/95 sm:text-xl sm:leading-8 drop-shadow-md">
            Provide authoritative and reliable data source retrieval services for AI applications,
            ensuring your AI uses accurate and trustworthy information.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Badge variant="outline" className="text-base bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20">
              MCP Protocol
            </Badge>
            <Badge variant="outline" className="text-base bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20">
              Intelligent Matching
            </Badge>
            <Badge variant="outline" className="text-base bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20">
              Authority Certified
            </Badge>
            <Badge variant="outline" className="text-base bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20">
              Community Driven
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
