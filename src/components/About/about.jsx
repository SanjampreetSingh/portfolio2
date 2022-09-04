import Grid from "@mui/material/Grid";

export default function About() {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="center"
      alignItems="center"
      alignContent="center"
      wrap="nowrap"
    >
      <Grid xs={12} md={8}>
        Pic
      </Grid>
      <Grid xs={12} md={4}>
        Content
      </Grid>
    </Grid>
  );
}
