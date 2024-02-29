import React from "react";
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
    </CardContent>
  </Card>;
};
export default view(Search);
