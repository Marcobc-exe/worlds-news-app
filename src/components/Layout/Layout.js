import { Box } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <Box style={{ display: "flex" }}>
      <Navbar />
      <Box 
        component={"main"}
        sx={{
					flexGrow: 1,
					p: 3,
					marginTop: 8,
					width: "100%",
					backgroundColor: "#222",
					overflow:'hidden',
				}}
      >
        {children}
      </Box>
    </Box>
  );
};
