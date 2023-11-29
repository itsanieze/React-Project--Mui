import Navbar from "../src/components/Navbar"
import Sidebar from "../src/components/Sidebar"
import Feed from "../src/components/Feed"
import Rightbar from "../src/components/Rightbar"
import Add from "../src/components/Add"
import { Box , Stack, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react"




function App3() {
  
  const [mode, setMode] = useState("light");


  const darkTheme = createTheme ({
    palette:{
      mode: mode
    },
  });
    return(
        
        <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar/>
          <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed/>
          <Rightbar/>
          </Stack>
          <Add/>
        </Box>
        </ThemeProvider>
    );
}

export default App3;