import Navbar from "@/components/NavBar/NavBar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button>Hello World, click me</Button>
      </main>
    </>
  );
}
