import { ArchiveIcon, MessageCircleIcon, ThumbsUp } from "lucide-react"

import { Section } from "@/components/section"
import { Card } from "@/components/card"

export default function Home() {
  return (
    <div className="mx-auto flex h-dvh w-full max-w-412.5 flex-col gap-8 p-10">
      <main className="grid flex-1 grid-cols-4 items-stretch gap-5">
        {/* BACKLOG */}
        <Section.Root>
          {/* HEADER */}
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              Backlog
            </Section.Title>

            <Section.IssueCount>16</Section.IssueCount>
          </Section.Header>

          {/* CONTENT */}
          <Section.Content>
            <Card.Root>
              <Card.Header>
                <Card.Number>ECO-001</Card.Number>
                <Card.Title>Implementar cartão de crédito</Card.Title>
              </Card.Header>

              <Card.Footer>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg bg-navy-600 px-2.5 py-1 text-navy-100"
                >
                  <ThumbsUp className="size-3" />
                  <span className="text-sm">12</span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg bg-navy-600 px-2.5 py-1 text-navy-100"
                >
                  <MessageCircleIcon className="size-3" />
                  <span className="text-sm">6</span>
                </button>
              </Card.Footer>
            </Card.Root>
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  )
}
