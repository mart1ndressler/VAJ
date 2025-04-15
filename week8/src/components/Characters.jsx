//import React from "react";
import {useLoaderData, Link} from "react-router-dom";
import {Grid, Card, CardContent, CardMedia, Typography, CardActionArea, Box} from "@mui/material";

export function loader() {
  return fetch("https://rickandmortyapi.com/api/character").then((res) =>
    res.json()
  );
}

export function Characters() {
  const {results} = useLoaderData();

  return(
    <div>
      <Box sx={{px: 2, py: 4}}>
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold" >Characters</Typography>

        <Grid container spacing={10} justifyContent="center">
          {results.map((character) =>
          (
            <Grid item xs={12} sm={6} md={3} lg={3} key={character.id}>
              <Card sx={{borderRadius: 4, boxShadow: 4}}>
                <CardActionArea component={Link} to={`/characters/${character.id}`}>
                  <CardMedia component="img" height="300" image={character.image} alt={character.name}/>
                  <CardContent sx={{textAlign: "center"}}>
                    <Typography variant="h6" component="div" fontWeight="bold">{character.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}