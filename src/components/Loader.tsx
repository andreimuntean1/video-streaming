import { Box, CircularProgress } from "@mui/material";

function Loader() {
  return (
    <Box sx={{width: '100%', minHeight: '100vh', display: 'grid', placeItems: 'center'}}>
      <CircularProgress color="primary"  />
    </Box>
  );
}

export default Loader;