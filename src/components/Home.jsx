import { useProvider } from "../contextAPI/context";

export default function Home() {
    const state = useProvider();
    console.log(state);
  return (
    <div>Home</div>
  )
}
