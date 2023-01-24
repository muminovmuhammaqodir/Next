import { Box, Stack, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Category, Videos } from "../index";
import { colors } from "../../constants/colors";
import { ApiService } from "../../service/apiServise";

const Main = () => {
	const [selectcategory, setselectcategory] = useState("New");
	const [videos, setsetvideos] = useState([]);

	const setselectcategoryHandler = (name) => setselectcategory(name);

    useEffect(() => {
			
			const getData = () => {
				try {
					ApiService.fatching(
						`search?part=snippet&q=${selectcategory}`
					).then((res) => setsetvideos(res.items));
				} catch (error) {
					console.log(error);
				}
			};
			getData();
		}, [selectcategory]);

	return (
		<Stack>
			<Category
				setselectcategoryHandler={setselectcategoryHandler}
				selectcategory={selectcategory}
			/>
			<Box p={2} sx={{ height: "90vh" }}>
				<Container maxWidth={"90%"}>
					<Typography variant={"h4"} fontWeight={"bold"}>
						{selectcategory}
						{" "}
						<span style={{ color: colors.secondary }}>Videos</span>
					</Typography>
					<Videos videos={videos} />
				</Container>
			</Box>
		</Stack>
	);
};

export default Main;
