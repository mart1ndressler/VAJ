//import React from "react";
import {useLoaderData} from "react-router-dom";
import {Box, Card, CardContent, Typography, Grid, Avatar, Tooltip} from "@mui/material";

export async function loader({params}) {
  const locationRes = await fetch(`https://rickandmortyapi.com/api/location/${params.locationId}`);
  const location = await locationRes.json();
  const characters = await Promise.all(location.residents.slice(0, 100).map((url) => fetch(url).then((res) => res.json())));
  return {location, characters};
}

export function LocationDetail() {
  const {location, characters} = useLoaderData();

  return(
    <div>
      <Box sx={{display: "flex", justifyContent: "center", px: 2, py: 4}}>
      <Box sx={{maxWidth: 500, width: "100%"}}>
        <Card sx={{borderRadius: 4, boxShadow: 4}}>
          <CardContent sx={{textAlign: "center"}}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>{location.name}</Typography>
            <Typography variant="body1">Type: {location.type}</Typography>
            <Typography variant="body1" gutterBottom>Dimension: {location.dimension}</Typography>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom mt={3}>Residents:</Typography>

            <Grid container spacing={1} justifyContent="center">
              {characters.map((char) =>
              (
                <Grid item key={char.id}>
                  <Tooltip title={char.name}>
                    <Avatar alt={char.name} src={char.image} sx={{ width: 60, height: 60 }}/>
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