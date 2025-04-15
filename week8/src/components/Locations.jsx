//import React from "react";
import {Outlet, useLoaderData, NavLink} from "react-router-dom";
import {Box, List, ListItem, ListItemText, Typography} from "@mui/material";

export function loader() {
  return fetch("https://rickandmortyapi.com/api/location").then((res) =>
    res.json()
  );
}

export function Locations() {
  const locations = useLoaderData();

  return(
    <div>
      <Box sx={{display: "flex", px: 2, py: 4}}>
        <Box sx={{width: 300, mr: 4}}>
          <Typography variant="h5" gutterBottom fontWeight="bold">Locations</Typography>
          <List>
            {locations.results.map((loc) =>
            (
              <ListItem key={loc.id} component={NavLink} to={`${loc.id}`} sx={{textDecoration: "none", color: "inherit", "&.active": {backgroundColor: "#e0e0e0", borderRadius: 2}}}>
                <ListItemText primary={loc.name} secondary={loc.type}/>
              </ListItem>
            ))}
          </List>
        </Box>
        <Outlet/>
      </Box>
    </div>
  );
}