"use client"

import type { ChangeEvent } from "react"
import { parseAsString, useQueryState, debounce } from "nuqs"
import { LogInIcon, SearchIcon } from "lucide-react"

import { Input } from "@/components/input"

export const Header = () => {
  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""))

  const handleSearchUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value !== "" ? debounce(500) : undefined,
    })
  }

  return (
    <header className="mx-auto flex w-full max-w-225 items-center justify-between">
      {/* TITLE */}
      <div className="space-y-1">
        <h1 className="font-semibold text-xl">Board</h1>

        <p className="text-navy-100 text-sm">
          Follow the development progress of your entire platform.
        </p>
      </div>

      {/* SEARCH & FILTER */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-navy-200" />

          <Input
            type="text"
            placeholder="Search for features..."
            className="max-w-67.5 pl-8"
            value={search}
            onChange={handleSearchUpdate}
          />
        </div>

        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-full border border-navy-500 bg-navy-700 transition-colors duration-150 hover:bg-navy-600"
        >
          <LogInIcon className="size-3.5 text-navy-200" />
        </button>
      </div>
    </header>
  )
}
