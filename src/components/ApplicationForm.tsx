import { useState, type FormEvent } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Select } from "./ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Alert, AlertDescription } from "./ui/alert"

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const API_URL = 'https://centered-repeat-dow-locate.trycloudflare.com/api/apply'

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formElement = e.currentTarget
    const formData = new FormData(formElement)

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      organization: formData.get("organization") as string,
      position: formData.get("position") as string,
      useCase: formData.get("useCase") as string,
      teamSize: formData.get("teamSize") as string || "",
      description: formData.get("description") as string,
      github: formData.get("github") as string || "",
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setMessage({
          type: "success",
          text: result.message || "申请已成功提交!我们会在 1-2 个工作日内通过邮件与您联系。",
        })
        formElement.reset()
        setTimeout(() => setMessage(null), 5000)
      } else {
        setMessage({
          type: "error",
          text: result.detail || result.message || "提交失败,请稍后重试",
        })
        setTimeout(() => setMessage(null), 8000)
      }
    } catch (error) {
      console.error("提交错误:", error)
      setMessage({
        type: "error",
        text: "网络错误,请检查服务器是否运行或稍后重试",
      })
      setTimeout(() => setMessage(null), 8000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>申请 MCP Token</CardTitle>
        <CardDescription>
          填写以下信息,我们将在 1-2 个工作日内与您联系,协助您接入可信数据源 MCP 服务
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">联系人姓名 *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                placeholder="请输入您的姓名"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">企业邮箱 *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="organization">公司/组织名称 *</Label>
              <Input
                type="text"
                id="organization"
                name="organization"
                required
                placeholder="您所在的公司或组织全称"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">职位 *</Label>
              <Input
                type="text"
                id="position"
                name="position"
                required
                placeholder="您的职位"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="useCase">应用场景 *</Label>
              <Select id="useCase" name="useCase" required>
                <option value="">请选择您的主要使用场景</option>
                <option value="research">科研数据查询</option>
                <option value="market">市场数据分析</option>
                <option value="government">政府公开数据</option>
                <option value="finance">金融数据服务</option>
                <option value="medical">医疗健康数据</option>
                <option value="education">教育培训资源</option>
                <option value="social">社会统计数据</option>
                <option value="other">其他数据需求</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamSize">团队规模</Label>
              <Select id="teamSize" name="teamSize">
                <option value="">请选择</option>
                <option value="1-10">1-10 人</option>
                <option value="11-50">11-50 人</option>
                <option value="51-200">51-200 人</option>
                <option value="201-1000">201-1000 人</option>
                <option value="1000+">1000+ 人</option>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">数据需求描述 *</Label>
            <Textarea
              id="description"
              name="description"
              required
              placeholder="请详细描述您需要的数据源类型、应用场景、数据要求等信息..."
              className="min-h-[120px]"
            />
          </div>

          <div className="hidden">
            <Input type="text" id="github" name="github" />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
            {isSubmitting ? "提交中..." : "提交申请"}
          </Button>

          {message && (
            <Alert variant={message.type === "error" ? "destructive" : "default"}>
              <AlertDescription>
                {message.type === "success" ? "✅ " : "❌ "}
                {message.text}
              </AlertDescription>
            </Alert>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
