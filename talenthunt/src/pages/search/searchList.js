import React from "react";
import { view } from "@risingstack/react-easy-state";
import appStore from "./appStore";
import Search from "./search";

// this is re-rendered whenever the relevant parts of the used data stores change
const SearchList = () => (
  <div className="searchlist">
    {!appStore.beers.length ? (
      <h3>No matching jobs found!</h3>
    ) : (
      appStore.beers.map((beer) => <Beer key={beer.name} {...beer} />)
    )}
  </div>
);

export default view(SearchList);
