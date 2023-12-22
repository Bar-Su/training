import { AngleSlider } from "@/components/AngleSlider";
import { TodoInput } from "@/components/TodoInput";

export default function Home() {
  return (
    <main>
      <div className="angle-simulator">
        <TodoInput />
        <AngleSlider />
      </div>
    </main>
  );
}
