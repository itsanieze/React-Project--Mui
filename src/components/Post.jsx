import React from 'react';
import { Avatar, Box, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Card, Checkbox } from "@mui/material";
import { Share, Favorite, MoreVert, FavoriteBorder } from '@mui/icons-material';


const Post = () => {
    return (
          
        <Card sx={{margin:5}}>

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Nature Vibe"
        subheader="September 14, 2023"
      />

      <CardMedia
        component="img" 
        height="400"
        width="400"
        src="https://mag.noorgram.ir/wp-content/uploads/2022/01/%D8%B9%DA%A9%D8%B3-%D8%B7%D8%A8%DB%8C%D8%B9%D8%AA-500x500.jpg"
        alt="pic"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder/>}
            checkedIcon={<Favorite sx={{color:"red"}} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
      </CardActions>

            </Card>

    )
}



export default Post;