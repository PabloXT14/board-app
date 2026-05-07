import { ArchiveIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="mx-auto flex h-dvh w-full max-w-412.5 flex-col gap-8 p-10">
      <main className="grid flex-1 grid-cols-4 items-stretch gap-5">
        {/* BACKLOG */}
        <div className="flex flex-col gap-1 rounded-xl border-[0.5px] border-navy-500 bg-navy-800 pt-3">
          {/* HEADER */}
          <div className="flex items-center justify-between px-3">
            <span className="flex items-center gap-2 rounded-lg bg-navy-700 px-3 py-1.5 text-xs">
              <ArchiveIcon className="size-3" />
              Backlog
            </span>

            <span className="text-navy-200 text-xs">16</span>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-2.5 overflow-y-scroll p-3">
            <div className="h-20 rounded-lg bg-navy-700" />
            <div className="h-20 rounded-lg bg-navy-700" />
            <div className="h-20 rounded-lg bg-navy-700" />
            <div className="h-20 rounded-lg bg-navy-700" />
            <div className="h-20 rounded-lg bg-navy-700" />
          </div>
        </div>
      </main>
    </div>
  )
}
