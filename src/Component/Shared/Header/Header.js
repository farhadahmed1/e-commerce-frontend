import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Box >
                        <Link to="/" className="navlink"> <Button color="inherit"> Home</Button></Link>
                        <Link to="products" className="navlink"> <Button color="inherit"> Products</Button></Link>

                        <Link to="shopping" className="navlink"><Button color="inherit" >
                            <Badge badgeContent={4}>
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </Button></Link>
                        <Link to="loging" className="navlink"><Button color="inherit">Loging</Button></Link>


                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;