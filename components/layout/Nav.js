'use client'

import { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import PaletteIcon from '@mui/icons-material/Palette';
import ListIcon from '@mui/icons-material/List';
import BookIcon from '@mui/icons-material/Book';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const navItems = [
        { text: 'My Pantry', icon: <PaletteIcon />, href: '/' },
        { text: 'Grocery List', icon: <ListIcon />, href: '/grocery-list' },
        { text: 'Recipes', icon: <BookIcon />, href: '/recipes' },
    ];

    const NavList = ({ onClick }) => (
        <List>
            {navItems.map((item) => (
                <ListItem button key={item.text} component={Link} href={item.href} onClick={onClick}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItem>
            ))}
        </List>
    );

    return (
        <>
            {/* Desktop View */}
            <AppBar position='sticky' sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', justifyContent: 'space-between', padding: '10px 20px', height: 'auto' }}>
                <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                    <PaletteIcon sx={{ mr: 1 }} />
                    Pantry Tracker
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {navItems.map((item) => (
                        <Typography key={item.text} component={Link} href={item.href} sx={{ marginRight: 2, color: 'inherit', textDecoration: 'none' }}>
                            {item.text}
                        </Typography>
                    ))}
                </Box>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search your pantry..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </AppBar>

            {/* Tablet and Mobile View */}
            <AppBar position='sticky' sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', padding: '10px 20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                        <PaletteIcon sx={{ mr: 1 }} />
                        Pantry Tracker
                    </Typography>
                </Box>
                <Search sx={{ display: { xs: 'none', sm: 'flex' }, width: '50%' }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search your pantry..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    edge='end'
                    onClick={handleDrawerToggle}
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    <MenuIcon />
                </IconButton>
            </AppBar>

            {/* Mobile and Tablet Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                <NavList onClick={handleDrawerToggle} />
            </Drawer>
        </>
    );
}


// 'use client'

// import { useState } from 'react';
// import Link from 'next/link';
// import { Box, AppBar, Toolbar, Typography, Button, IconButton, InputBase, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { styled, alpha } from '@mui/material/styles';
// import MenuIcon from '@mui/icons-material/Menu';
// import PaletteIcon from '@mui/icons-material/Palette';
// import ListIcon from '@mui/icons-material/List';
// import BookIcon from '@mui/icons-material/Book';
// import SearchIcon from '@mui/icons-material/Search';


// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));


// export default function Navbar() {
//     const [mobileOpen, setMobileOpen] = useState(false);

//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     }

//     const navItems = [
//         { text: 'My Pantry', icon: <PaletteIcon />, href: '/' },
//         { text: 'Grocery List', icon: <ListIcon />, href: '/grocery-list' },
//         { text: 'Recipes', icon: <BookIcon />, href: '/recipes' },
//     ]

//     const drawerContent = (
//         <List>
//             {navItems.map((item) => (
//                 <ListItem button key={item.text} component={Link} href={item.href} prefetch={false}>
//                     <ListItemIcon>{item.icon}</ListItemIcon>
//                     <ListItemText primary={item.text} />
//                 </ListItem>
//             ))}
//         </List>
//     )

//     const NavList = () => (
//         <List>
//             {navItems.map((item) => (
//                 <ListItem button key={item.text} component={Link} href={item.href} prefetch={false}>
//                     <ListItemIcon>{item.icon}</ListItemIcon>
//                     <ListItemText primary={item.text} />
//                 </ListItem>
//             ))}
//         </List>
//     );

//     return (
//         <AppBar position='sticky'>
//             <Toolbar sx={{ flexDirection: { xs: 'row', md: 'column' }, alignItems: { md: 'flex-start' }, height: { md: '100vh' } }}>
//                 <IconButton
//                     color='inherit'
//                     aria-label='open drawer'
//                     edge='start'
//                     onClick={handleDrawerToggle}
//                     sx={{ mr: 2, display: { md: 'none' } }}
//                 >
//                     <MenuIcon />
//                 </IconButton>
//                 <Typography variant="h6" noWrap component="div" sx={{ display: 'flex', alignItems: 'center', mb: { md: 2 } }}>
//                     <PaletteIcon sx={{ mr: 1 }} />
//                     Pantry Tracker
//                 </Typography>
//                 <Box sx={{ display: { xs: 'none', md: 'block' }, width: '100%' }}>
//                     <NavList />
//                 </Box>
//                 <Box sx={{ flexGrow: 1 }} />
//                 <Search>
//                     <SearchIconWrapper>
//                         <SearchIcon />
//                     </SearchIconWrapper>
//                     <StyledInputBase
//                         placeholder="Search your pantry..."
//                         inputProps={{ 'aria-label': 'search' }}
//                     />
//                 </Search>
//             </Toolbar>
//             {/* <Drawer
//                 variant="temporary"
//                 open={mobileOpen}
//                 onClose={handleDrawerToggle}
//                 ModalProps={{
//                     keepMounted: true,
//                 }}
//                 sx={{
//                     display: { xs: 'block', md: 'none' },
//                     '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
//                 }}
//             >
//                 <NavList />
//             </Drawer> */}
//         </AppBar>
//     )
// }