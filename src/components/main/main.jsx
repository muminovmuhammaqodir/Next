import { Box, Stack, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Category, Videos } from "../index";
import { colors } from "../../constants/colors";
import { ApiService } from "../../service/apiServise";

const Main = () => {
	const [selectcategory, setselectcategory] = useState("New");
	console.log(process.env.REACT_APP_PUBLIC_KEY);

	const setselectcategoryHandler = (name) => setselectcategory(name);

	useEffect(() => {
		ApiService.fatching("search").then((res) => {
			console.log(res);
		});
	}, []);

	return (
		<Stack>
			<Category
				setselectcategoryHandler={setselectcategoryHandler}
				selectcategory={selectcategory}
			/>
			<Box p={2} sx={{ height: "90vh" }}>
				<Container maxWidth={"90%"}>
					<Typography variant={"h4"} fontWeight={"bold"}>
						{selectcategory}{" "}
						<span style={{ color: colors.secondary }}>
							<Videos />
						</span>
					</Typography>
				</Container>
			</Box>
		</Stack>
	);
};

export default Main;
