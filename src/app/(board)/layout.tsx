export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto flex h-dvh w-full max-w-412.5 flex-col gap-8 p-10">
      {/* HEADER */}
      <header>
        <h1 className="font-bold text-2xl">Board</h1>
      </header>

      {children}
    </div>
  )
}
