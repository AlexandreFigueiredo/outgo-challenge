import { Header } from "../../components/Header/Header";
import { NowShowing } from "../../components/NowShowing/NowShowing";
import { Popular } from "../../components/Popular/Popular";

export function Home() {
  return (
    <>
      <Header />
      <NowShowing />
      <Popular />
    </>
  );
}
