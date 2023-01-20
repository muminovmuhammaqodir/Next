import { Box, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "../index";
import { colors } from "../../constants/colors";
import { ApiService } from "../../service/apiServise";

const Search = () => {
	const [video, setVideos] = useState([]);
	const { id } = useParams();
	
	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fatching(`search?part=snippet&q=${id}`);
                setVideos(data.items);
               
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, [id]);
	return (
		<Box p={2} sx={{ height: "90vh" }}>
			<Container maxWidth={"90%"}>
				<Typography variant="h4" fontWeight={"bold"} mb={2}>
					Search results for{" "}
					<span style={{ color: colors.secondary }}>{id}</span>
				</Typography>
                <Videos videos={video} />
               
			</Container>
		</Box>
	);
};

export default Search;
