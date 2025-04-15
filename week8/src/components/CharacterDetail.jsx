//import React from "react";
import {useLoaderData, Outlet} from "react-router-dom";
import {Grid, Card, CardContent, CardMedia, Typography, Box} from "@mui/material";

export function loader({params}) {
  return fetch(
    `https://rickandmortyapi.com/api/character/${params.characterId}`
  ).then((res) => res.json());
}

export function CharacterDetail() {
  const characters = useLoaderData();

  return(
    <div>
      <Box sx={{px: 2, py: 4}}>
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">Character Details</Typography>

        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Card sx={{borderRadius: 4, boxShadow: 4}}>
              <CardMedia component="img" height="300" image={characters.image} alt={characters.name}/>
              <CardContent sx={{textAlign: "center"}}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>{characters.name}</Typography>
                <Typography variant="body1">Status: {characters.status}</Typography>
                <Typography variant="body1">Species: {characters.species}</Typography>
                <Typography variant="body1">Gender: {characters.gender}</Typography>
                <Typography variant="body1">Origin: {characters.origin?.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Outlet/>
      </Box>
    </div>
  );
}