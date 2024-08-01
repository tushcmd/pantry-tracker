import PantryManager from '@/components/PantryManager'
import { Box, Container, Typography } from '@mui/material'

export default function Home() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          My Pantry Manager
        </Typography>
        <PantryManager />
      </Box>
    </Container>
  )
}


// import { PantryManager } from '@/components/PantryManager';
// import { Box, Container, Typography } from '@mui/material'

// export default function Home() {
//   return (
//     <div>
//       <h1>My Pantry Manager</h1>
//       <PantryManager />
//     </div>
//     // <div className='app'>
//     //   <Container>
//     //     <Typography variant='h4'> Pantry Tracker</Typography>
//     //     <PantryManager />
//     //   </Container>
//     // </div>
//     // <Box>
//     //   <Typography variant="h1">Hello World</Typography>
//     //   <Typography>This is Tush</Typography>
      
//     //   <PantryManager />
//     // </Box>
//     // <PantryManager />
//   );
// }

