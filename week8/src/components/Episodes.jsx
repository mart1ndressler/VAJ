//import React from "react";
import {Outlet, useLoaderData, NavLink} from "react-router-dom";
import {Box, List, ListItem, ListItemText, Typography} from "@mui/material";

export function loader() {
  return fetch("https://rickandmortyapi.com/api/episode").then((res) =>
    res.json()
  );
}

export function Episodes() {
  const episodes = useLoaderData();

  return(
    <div>
      <Box sx={{display: "flex", px: 2, py: 4}}>
        <Box sx={{width: 300, mr: 4}}>
          <Typography variant="h5" gutterBottom fontWeight="bold">Episodes</Typography>
          <List>
            {episodes.results.map((ep) => 
            (
              <ListItem key={ep.id} component={NavLink} to={`${ep.id}`}
                sx={{textDecoration: "none", color: "inherit", "&.active": {backgroundColor: "#e0e0e0", borderRadius: 2}}}>
                <ListItemText primary={ep.name} secondary={ep.episode}/>
              </ListItem>
            ))}
          </List>
        </Box>
        <Outlet/>
      </Box>
    </div>
  );
}