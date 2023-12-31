import React, { useState } from "react";
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"
import { Fab, Tooltip, Modal, Box, styled, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from "@mui/material";



const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",

})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px",

})


const Add = () => {
    const [open, setOpen] = useState(false)
    return(
        <div>
           <Tooltip onClick={e=>setOpen(true)} title="Delete" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
           <Fab color="primary" aria-label="add">
             <AddIcon />
           </Fab>
           </Tooltip>
    <StyledModal  open={open} onClose={e=>setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box width={400} height={300} p={3} bgcolor={"background.default"} color={"text.primary"} borderRadius={5} >
            <Typography variant="h6" color="gray" textAlign="center">
                Create Post
            </Typography> 
            <UserBox>
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoImpG6ePmcPlFPMSikVNlsop4yB-CKoW1SQ&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoImpG6ePmcPlFPMSikVNlsop4yB-CKoW1SQ&usqp=CAU"
                  sx={{width:30, height:30}}
                />
                <Typography fontWeight={500} variant="span">John Doe</Typography>
            </UserBox>
        <TextField
         sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="Whats on your mind"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2}>
         <EmojiEmotions color="primary"/>
         <Image color="secondary"/>
         <VideoCameraBack color="success" />
         <PersonAdd color="error"/>
        </Stack>
        <ButtonGroup  fullWidth variant="contained" marginBottom="20px" aria-label="outlined primary button group">
         <Button>Post</Button>
         <Button sx={{width:"100px"}}>
            <DateRange/>
        </Button>
         
</ButtonGroup>
        </Box>
    </StyledModal>
   
        </div>
    )
}

export default Add;