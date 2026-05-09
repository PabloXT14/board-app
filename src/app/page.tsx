import { ArchiveIcon } from "lucide-react"

import { Section } from "@/components/section"

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
            <div className="h-20 rounded-lg bg-navy-700" />
            <div className="h-20 rounded-lg bg-navy-700" />
            <div className="h-20 rounded-lg bg-navy-700" />
            <div className="h-20 rounded-lg bg-navy-700" />
            <div className="h-20 rounded-lg bg-navy-700" />
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  )
}
