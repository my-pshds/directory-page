import { useState } from "react";
import CategoryNav from "./CategoryNav";
import CardsContainer from "./timeCardsContainer";

export default function Dashboard() {

  const [filter, setFilter] = useState("all");

  return <>
    <CategoryNav filter={filter} setFilter={setFilter} />
    <CardsContainer filter={filter} />
  </>
}