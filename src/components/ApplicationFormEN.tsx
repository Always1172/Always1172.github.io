import { useState, type FormEvent } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Select } from "./ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Alert, AlertDescription } from "./ui/alert"

export function ApplicationFormEN() {
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
          text: result.message || "Application submitted successfully! We will contact you via email within 1-2 business days.",
        })
        formElement.reset()
        setTimeout(() => setMessage(null), 5000)
      } else {
        setMessage({
          type: "error",
          text: result.detail || result.message || "Submission failed, please try again later",
        })
        setTimeout(() => setMessage(null), 8000)
      }
    } catch (error) {
      console.error("Submission error:", error)
      setMessage({
        type: "error",
        text: "Network error, please check if the server is running or try again later",
      })
      setTimeout(() => setMessage(null), 8000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Apply for MCP Token</CardTitle>
        <CardDescription>
          Fill in the following information, and we will contact you within 1-2 business days to help you access the Trusted Data Source MCP service
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Contact Name *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Please enter your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Business Email *</Label>
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
              <Label htmlFor="organization">Company/Organization Name *</Label>
              <Input
                type="text"
                id="organization"
                name="organization"
                required
                placeholder="Full name of your company or organization"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">Position *</Label>
              <Input
                type="text"
                id="position"
                name="position"
                required
                placeholder="Your position"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="useCase">Use Case *</Label>
              <Select id="useCase" name="useCase" required>
                <option value="">Please select your primary use case</option>
                <option value="research">Research Data Query</option>
                <option value="market">Market Data Analysis</option>
                <option value="government">Government Open Data</option>
                <option value="finance">Financial Data Service</option>
                <option value="medical">Medical Health Data</option>
                <option value="education">Education Training Resources</option>
                <option value="social">Social Statistics</option>
                <option value="other">Other Data Needs</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamSize">Team Size</Label>
              <Select id="teamSize" name="teamSize">
                <option value="">Please select</option>
                <option value="1-10">1-10 people</option>
                <option value="11-50">11-50 people</option>
                <option value="51-200">51-200 people</option>
                <option value="201-1000">201-1000 people</option>
                <option value="1000+">1000+ people</option>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Data Requirements Description *</Label>
            <Textarea
              id="description"
              name="description"
              required
              placeholder="Please describe in detail the type of data sources you need, use cases, data requirements, etc..."
              className="min-h-[120px]"
            />
          </div>

          <div className="hidden">
            <Input type="text" id="github" name="github" />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
            {isSubmitting ? "Submitting..." : "Submit Application"}
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
