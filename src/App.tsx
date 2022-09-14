import { Header } from "./components/Header";
import { NowShowing } from "./components/NowShowing";
import { Popular } from "./components/Popular";

export function App() {
  return (
    <div className="App">
      <Header />
      <NowShowing />
      <Popular />
    </div>
  )
}