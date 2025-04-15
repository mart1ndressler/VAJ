//import React from "react";
import {useLoaderData} from "react-router-dom";
import {Box, Card, CardContent, Typography, Grid, Avatar, Tooltip} from "@mui/material";

export async function loader({params}) {
  const episodeRes = await fetch(`https://rickandmortyapi.com/api/episode/${params.episodeId}`);
  const episode = await episodeRes.json();
  const characters = await Promise.all(episode.characters.slice(0, 100).map((url) => fetch(url).then((res) => res.json())));
  return {episode, characters};
}

export function EpisodeDetail() {
  const {episode, characters} = useLoaderData();

  return(
    <div>
      <Box sx={{display: "flex", justifyContent: "center", px: 2, py: 4}}>
        <Box sx={{maxWidth: 500, width: "100%"}}>
          <Card sx={{borderRadius: 4, boxShadow: 4}}>
            <CardContent sx={{textAlign: "center"}}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>{episode.name}</Typography>
              <Typography variant="body1">Air Date: {episode.air_date}</Typography>
              <Typography variant="body1" gutterBottom>Episode Code: {episode.episode}</Typography>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom mt={3}>Characters:</Typography>

              <Grid container spacing={1} justifyContent="center">
                {characters.map((char) => 
                (
                  <Grid item key={char.id}>
                    <Tooltip title={char.name}>
                      <Avatar alt={char.name} src={char.image} sx={{width: 60, height: 60}}/>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
}