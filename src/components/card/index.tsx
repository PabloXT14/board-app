import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type CardRootProps = ComponentProps<"a">

const CardRoot = ({ className, ...rest }: CardRootProps) => {
  return (
    <a
      href="/"
      className={twMerge(
        "block space-y-4 rounded-lg border-[0.5px] border-navy-600 bg-navy-700 p-3",
        "transition-colors duration-150 hover:border-navy-500 hover:bg-navy-600/50",
        "outline-none focus-visible:ring-2 focus-visible:ring-navy-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950",
        className,
      )}
      {...rest}
    ></a>
  )
}

type CardHeaderProps = ComponentProps<"div">

const CardHeader = ({ className, ...rest }: CardHeaderProps) => {
  return (
    <div className={twMerge("flex flex-col gap-2", className)} {...rest}></div>
  )
}

type CardTitleProps = ComponentProps<"span">

const CardTitle = ({ className, ...rest }: CardTitleProps) => {
  return (
    <span
      className={twMerge("font-medium text-sm", className)}
      {...rest}
    ></span>
  )
}

type CardNumberProps = ComponentProps<"span">

const CardNumber = ({ className, ...rest }: CardNumberProps) => {
  return (
    <span
      className={twMerge("text-navy-200 text-xs", className)}
      {...rest}
    ></span>
  )
}

type CardFooterProps = ComponentProps<"div">

const CardFooter = ({ className, ...rest }: CardFooterProps) => {
  return (
    <div
      className={twMerge("flex items-center gap-2", className)}
      {...rest}
    ></div>
  )
}

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Number: CardNumber,
  Footer: CardFooter,
}
