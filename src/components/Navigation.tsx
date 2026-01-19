interface NavigationProps {
  language: "zh" | "en"
  onLanguageChange: (lang: "zh" | "en") => void
}

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8 flex items-center">
          <a
            href="https://www.mininglamp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src="/logo_blue.png"
              alt="明略科技"
              className="h-12 w-auto"
            />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-1">
            <a
              href="#intro"
              className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {language === "zh" ? "简介" : "Overview"}
            </a>
            <a
              href="#config"
              className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {language === "zh" ? "配置" : "Config"}
            </a>
            <a
              href="#apply"
              className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {language === "zh" ? "申请" : "Apply"}
            </a>
          </nav>
          <div className="ml-4 inline-flex rounded-md border border-gray-200 bg-white p-1 gap-1">
            <button
              onClick={() => onLanguageChange("zh")}
              className={
                language === "zh"
                  ? "px-3 py-1.5 text-sm font-medium rounded-sm bg-blue-600 text-white shadow-sm transition-colors"
                  : "px-3 py-1.5 text-sm font-medium rounded-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              }
            >
              中文
            </button>
            <button
              onClick={() => onLanguageChange("en")}
              className={
                language === "en"
                  ? "px-3 py-1.5 text-sm font-medium rounded-sm bg-blue-600 text-white shadow-sm transition-colors"
                  : "px-3 py-1.5 text-sm font-medium rounded-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              }
            >
              English
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
