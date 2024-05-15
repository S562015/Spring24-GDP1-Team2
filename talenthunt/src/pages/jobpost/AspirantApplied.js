import React, { useEffect, useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import AspirantCard from "./AspirantCard";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllAspirant, getApplications } from "../home/homeActions";

const AspirantsList = () => {
  const [aspirantDataList, setAspirantDataList] = useState([]);
  const dispatch = useDispatch();
  const { applicationList } = useSelector((state) => state.homeReducer);
  const { appliedData } = useSelector((state) => state.homeReducer);
  const { selectedJobID } = useSelector((state) => state.helperReducer);

  useEffect(() => {
    dispatch(getApplications());
  }, []);

  useEffect(() => {
    if (applicationList?.length) {
      let ids = applicationList
        .filter((val) => val.jobId === selectedJobID)
        .map((val) => val.aspirantId);
      console.log({ ids });
      if (ids.length) {
        dispatch(getAllAspirant(ids, (data) => setAspirantDataList(data)));
      }
    }
  }, [applicationList]);

  return (
    <div>
      <Typography variant="h5" align="center" gutterBottom>
        List of Aspirants Applied for Job
      </Typography>
      <Grid container spacing={2}>
        {aspirantDataList?.map((aspirant, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <AspirantCard
              aspirant={aspirant}
              applicationList={applicationList}
              selectedJobID={selectedJobID}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AspirantsList;
