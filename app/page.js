import { PantryManager } from '@/components/sample';
import { Box, Container, Typography } from '@mui/material'

export default function Home() {
  return (
    <div className='app'>
      <Container>
        <Typography variant='h4'> Pantry Tracker</Typography>
        <PantryManager />
      </Container>
    </div>
    // <Box>
    //   <Typography variant="h1">Hello World</Typography>
    //   <Typography>This is Tush</Typography>
      
    //   <PantryManager />
    // </Box>
    // <PantryManager />
  );
}
