import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ApiService } from "../../service/apiServise";
import { Box, Chip, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { Tag } from "@mui/icons-material";

const VideoDetail = () => {
	const [videoDetail, setVideoDetail] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const getData = async () => {
			const data = await ApiService.fatching(
				`videos?part=snippet,statistics&id=${id}`
			);

			setVideoDetail(data.items[0]);
		};
		getData();
	}, [id]);

	// const {
	// 	snippet: {
	// 		title,
	// 		channelId,
	// 		channelTitle,
	// 		description,
	// 		tags,
	// 		thumbnails,
	// 	},
	// } = videoDetail;

	// const {
	// 	statistics: { viewCount, likeCount, commentCount },
	// } = videoDetail;

    console.log(videoDetail);

	return (
		<Box minHeight={"90vh"} mb={10}>
			<Box display={"flex"}>
				<Box width={"75%"}>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${id}`}
						className="react-palyer"
						controls
					/>
					{videoDetail.snippet.tags.map((tag, index) => {
						return (
							<Chip
								label={tag}
								key={index}
								sx={{
									marginTop: "10px",
									cursor: "pointer",
									ml: "10px",
								}}
								deleteIcon={<Tag />}
								onDelete={() => {}}
								variant="outlined"
							/>
						);
					})}

					<Typography variant="h5" fontWeight="bold" p={2}>
						{videoDetail.snippet.title}
					</Typography>
					<Typography variant="subtitle2" p={2} sx={{ opacity: ".7" }}>
						{videoDetail.snippet.description}
					</Typography>
				</Box>
				<Box width={"25%"}></Box>
			</Box>
		</Box>
	);
};

export default VideoDetail;
