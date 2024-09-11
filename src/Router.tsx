import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefalaLayout } from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefalaLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />}/>
            </Route>
        </Routes>
    )
}