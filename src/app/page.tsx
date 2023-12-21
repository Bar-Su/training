import { AngleSlider } from "@/components/AngleSlider";
import { TodoInput } from "@/components/TodoInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodoInput />
      <AngleSlider />
    </main>
  );
}
