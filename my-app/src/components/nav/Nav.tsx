import AppBar from "@mui/material/AppBar";
import PdLogo from "../../assets/Logo.svg";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import InputBase from "@mui/material/InputBase";

export default function Nav() {
  const Search = styled("div")(() => ({
    position: "relative",
    borderRadius: "8px",
    backgroundColor: "#F7F7F9",
    color: "#979797",
    marginLeft: 0,
    width: "100%",
    maxWidth: "370px",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
    },
  }));

  return (
    <AppBar
      sx={{
        backgroundColor: "#FFFFFF",
        paddingBlock: "11px" /* paddingTop i Bottom u jednom redu*/,
      }}
    >
      <Box
        sx={{
          paddingInline: "24px",
          maxWidth: "1344px",
          width: "100%",
          marginInline: "auto", //marginLeft=marginRight u jednom, ovo ga postavlja na sredinu,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={PdLogo} alt="Logo" style={{ height: "42px" }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for title or author"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Avatar sx={{ backgroundColor: "#00609A", borderRadius: "8px" }}>
          D
        </Avatar>
      </Box>
    </AppBar>
  );
}
