// src/pages/index.tsx (Cleaned up Home Page)

import { Typography, Container } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" component="h1" gutterBottom>
        Allocation Engine Dashboard Overview
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Use this interface to upload data, set parameters, and initiate the AI allocation process.
      </Typography>
      {/* The Step 4 Data Input Dashboard components will go here! */}
    </Container>
  );
}