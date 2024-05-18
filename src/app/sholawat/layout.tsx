import { Footer, Navbar } from "@/components"

export default function Sholawat({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar/>
        {children}
      <Footer/>
    </section>
  )
}