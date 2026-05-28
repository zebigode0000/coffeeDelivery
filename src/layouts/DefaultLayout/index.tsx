import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function DefaultLayout() {
    return (
        <div className="max-w-6xl mx-auto p-8 rounded-xl">
            <Header />
            <Outlet />
        </div>
    )
}