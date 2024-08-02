import { Box, Container, Typography } from '@mui/material'

export default function Home() {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    My Grocery List
                </Typography>
            </Box>
        </Container>
    )
}