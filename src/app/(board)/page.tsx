import { ArchiveIcon, MessageCircleIcon, ThumbsUp } from "lucide-react"

import { Section } from "@/components/section"
import { Card } from "@/components/card"
import { Button } from "@/components/button"

export default function Home() {
  return (
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
              <Button>
                <ThumbsUp className="size-3" />
                <span className="text-sm">12</span>
              </Button>

              <Button>
                <MessageCircleIcon className="size-3" />
                <span className="text-sm">6</span>
              </Button>
            </Card.Footer>
          </Card.Root>
        </Section.Content>
      </Section.Root>
    </main>
  )
}
