import React from "react";
import { view, store } from "@risingstack/react-easy-state";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import NavBar from "./NavBar";
import SearchList from "./searchList";

// this is re-rendered whenever the relevant parts of the used data stores change
const Search = ({
  name,
  description,
  image_url: imageUrl,
  food_pairing: foodPairing,
}) => {
  const search = store({ details: false });

  return (
    <>
      <NavBar />
      <SearchList />
    </>
  );
};

export default view(Search);
