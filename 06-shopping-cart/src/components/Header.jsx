import { Filters } from "./Filters.jsx";
export function Header({ categorysAll }) {
    return (
        <header>
            <h1>React Shop</h1>
            <Filters categorysAll={categorysAll} />
        </header>
    )
}