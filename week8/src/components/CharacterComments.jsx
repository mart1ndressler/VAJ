//import React from "react";
import {Form, useLoaderData} from "react-router-dom";
import {addComment, getComments} from "../api/comments";
import {Box, Typography, TextField, Button, Paper, Stack} from "@mui/material";

export function loader({params}) {
  return getComments(params.characterId);
}

export async function action({request, params}) {
  const formData = await request.formData();
  const content = formData.get("content");
  return addComment(params.characterId, content);
}

export function CharacterComments() {
  const comments = useLoaderData();

  return(
    <div>
      <Box sx={{mt: 4}}>
        <Typography variant="h5" gutterBottom fontWeight="bold">Comments</Typography>

        <Form method="post" onSubmit={(e) => {setTimeout(() => e.target.reset(), 0);}}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{mb: 3}}>
            <TextField name="content" label="Write a comment" variant="outlined" size="small" fullWidth/>
            <Button type="submit" variant="contained">Add</Button>
          </Stack>
        </Form>

        <Stack spacing={2}>
          {comments.map((comment, index) =>
          (
            <Paper key={index} sx={{p: 2}}>
              <Typography variant="body1">{comment}</Typography>
            </Paper>
          ))}
        </Stack>
      </Box>
    </div>
  );
}