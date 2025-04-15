//import React from "react";
import {Outlet, Link} from "react-router-dom";
import {AppBar, Toolbar, Typography, Button, Box} from "@mui/material";

function App() {
  return(
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" variant="h6" sx={{ flexGrow: 1, textDecoration: "none" }} component={Link} to="/">
            VAJ - APP
          </Typography>
          <Button color="inherit" component={Link} to="/characters">
            Characters
          </Button>
          <Button color="inherit" component={Link} to="/episodes">
            Episodes
          </Button>
          <Button color="inherit" component={Link} to="/locations">
            Locations
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{p: 3}}>
        <Outlet/>
      </Box>
    </div>
  );
}

export default App;