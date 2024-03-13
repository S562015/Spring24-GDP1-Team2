import React from "react";
<<<<<<< HEAD
import { view, store } from "@risingstack/react-easy-state";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

// this is re-rendered whenever the relevant parts of the used data stores change
const Search = ({
  name,
  description,
  image_url: imageUrl,
  search_Result: searchResult,
}) => {
  const search = store({ details: false });

  return (
    <Card
      onClick={() => {
        search.details = !search.details;
      }}
      className="search"
    >
      {!search.details && <CardMedia image={imageUrl} className="media" />}
      <CardContent>
        <h3>{name}</h3>
        {search.details ? (
          <p>{description}</p>
        ) : (
          <ul>
            {searchResult.map((job) => (
              <li key={job}>{job}</li>
            ))}
          </ul>
        )}
=======
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const Search = ({
  name,
  description,
  image_url: imageUrl,
  search_Result: searchResult,
}) => {
  return (
    <Card className="search">
      <CardMedia image={imageUrl} className="media" />
      <CardContent>
        <h3>{name}</h3>
        <p>{description}</p>
>>>>>>> d8aa7f2761dfa286cf0d4d620c5ab8a42afb7a9c
      </CardContent>
    </Card>
  );
};

export default view(Search);
