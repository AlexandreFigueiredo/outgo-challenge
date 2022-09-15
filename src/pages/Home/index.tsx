import { Header } from "../../components/Header";
import { NowShowing } from "../../components/NowShowing";
import { Popular } from "../../components/Popular";

export function Home() {

    return (
        <>
            <Header />
            <NowShowing />
            <Popular />
        </>
    )
}