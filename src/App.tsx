import { useState } from "react"
import { Navigation } from "./components/Navigation"
import { Hero } from "./components/Hero"
import { InfoSection } from "./components/InfoSection"
import { ApplicationForm } from "./components/ApplicationForm"
import { HeroEN } from "./components/HeroEN"
import { InfoSectionEN } from "./components/InfoSectionEN"
import { ApplicationFormEN } from "./components/ApplicationFormEN"

function App() {
  const [language, setLanguage] = useState<"zh" | "en">("zh")

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <main className="flex-1">
        {language === "zh" ? <Hero /> : <HeroEN />}

        <section className="container py-8 md:py-12 lg:py-16">
          {language === "zh" ? <InfoSection /> : <InfoSectionEN />}
        </section>

        <section id="apply" className="border-t bg-muted/50 scroll-mt-20">
          <div className="container py-8 md:py-12">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex flex-col gap-2 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {language === "zh" ? "开始使用" : "Get Started"}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {language === "zh"
                    ? "立即申请 MCP Token，让您的 AI 应用接入可信数据源"
                    : "Apply for MCP Token now to connect your AI application to trusted data sources"}
                </p>
              </div>
              {language === "zh" ? <ApplicationForm /> : <ApplicationFormEN />}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn/ui
            </a>
            . Powered by{" "}
            <a
              href="https://www.mininglamp.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              明略科技
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
