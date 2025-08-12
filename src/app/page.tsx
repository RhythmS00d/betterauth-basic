import Hero from "@/components/hero";
import Navigation from "@/components/navigation/navigation";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full mx-auto items-center">
      
      <section>
        <Hero />
      </section>
    </main>
  );
}
