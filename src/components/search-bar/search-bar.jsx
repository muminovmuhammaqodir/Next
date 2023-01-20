import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import { colors } from "../../constants/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
	const [value, setValue] = useState("");
	const navigate = useNavigate();

	const onSearchHandler = (e) => {
		e.preventDefault();

		console.log(value);
		if (value) {
			navigate(`/search/${value}`);
		}
	};
	return (
		<Paper
			sx={{
				border: `1px solid ${colors.secondary}`,
				paddingLeft: 2,
				boxShadow: "none",
			}}
			component={"form"}
			onSubmit={onSearchHandler}>
			<input
				type="text"
				placeholder="Search..."
				className="search-bar"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<IconButton type="submit">
				<Search />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
