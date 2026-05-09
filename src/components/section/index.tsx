import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type SectionProps = ComponentProps<"div">

const SectionRoot = ({ className, ...props }: SectionProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-1 rounded-xl border-[0.5px] border-navy-500 bg-navy-800 pt-3",
        className,
      )}
      {...props}
    />
  )
}

type SectionHeaderProps = ComponentProps<"div">

const SectionHeader = ({ className, ...props }: SectionHeaderProps) => {
  return (
    <div
      className={twMerge("flex items-center justify-between px-3", className)}
      {...props}
    />
  )
}

type SectionTitleProps = ComponentProps<"span">

const SectionTitle = ({ className, ...props }: SectionTitleProps) => {
  return (
    <span
      className={twMerge(
        "flex items-center gap-2 rounded-lg bg-navy-700 px-3 py-1.5 text-xs",
        className,
      )}
      {...props}
    />
  )
}

type SectionIssueCountProps = ComponentProps<"span">

const SectionIssueCount = ({ className, ...props }: SectionIssueCountProps) => {
  return (
    <span className={twMerge("text-navy-200 text-xs", className)} {...props} />
  )
}

type SectionContentProps = ComponentProps<"div">

const SectionContent = ({ className, ...props }: SectionContentProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-2.5 overflow-y-auto p-3",
        className,
      )}
      {...props}
    />
  )
}

export const Section = {
  Root: SectionRoot,
  Header: SectionHeader,
  Title: SectionTitle,
  IssueCount: SectionIssueCount,
  Content: SectionContent,
}
