import React from "react";
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
      </CardContent>
    </Card>
  );
};
export default Search;
