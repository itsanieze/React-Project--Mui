import React, { useState } from 'react';
import { AppBar, styled, Toolbar, Typography, InputBase, Avatar, Box, MenuItem, Menu}  from '@mui/material';
import { Pets, Mail, Notifications} from '@mui/icons-material';
import Badge from '@mui/material/Badge';



const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
})

const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%",
}))

const Icons = styled(Box)(({theme})=>({
       display:"none",
       gap:"20px",
       alignItems:"center",
      [theme.breakpoints.up("sm")]: {
        display:"flex"
      },
}));

const UserBox = styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
   [theme.breakpoints.up("sm")]:{
    display:"none"
   },
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return ( 
        <AppBar position="sticky">
                <StyledToolbar>
                    <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
                        Menue
                    </Typography>
                    <Pets sx={{display:{xs:"block", sm:"none"}}}/>
                    <Search><InputBase placeholder="search...."/></Search>
                    <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail color="white" />
                    </Badge>

                    <Badge badgeContent={4} color="error">
                        <Notifications color="white" />
                    </Badge>
                    <Avatar sx={{width:30, height:30}} src="https://th.bing.com/th/id/OIP.tTMHwvWIPL8c4-sLzFLZggHaHn?rs=1&pid=ImgDetMain" onClick={e=>setOpen(true)}/>
                    </Icons>
                    <UserBox>
                    <Avatar sx={{width:30, height:30}} src="https://th.bing.com/th/id/OIP.tTMHwvWIPL8c4-sLzFLZggHaHn?rs=1&pid=ImgDetMain" onClick={e=>setOpen(true)}/>
                    <Typography variant="span">Ana</Typography>
                    </UserBox>
                </StyledToolbar> 
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={e=>setOpen(false)}
                    anchorOrigin={{
                    vertical: 'top',
                  horizontal: 'right',
                   }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
            </AppBar>
     );
}
 
export default Navbar;



