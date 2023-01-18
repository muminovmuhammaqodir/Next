import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import { colors } from "../../constants/colors";

const SearchBar = () => {
	return (
		<Paper
			sx={{
				border: `1px solid ${colors.secondary}`,
				paddingLeft: 2,
				boxShadow: "none",
			}}
			component={"form"}>
			<input type="text" placeholder="Search..." className="search-bar" />
			<IconButton>
				<Search />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
