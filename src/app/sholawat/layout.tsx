import { Footer, Navbar } from "@/components"

export default function Sholawat({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar/>
        <div className="min-h-screen">
          {children}
        </div>
      <Footer/>
    </section>
  )
}