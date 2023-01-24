import { Stack } from "@mui/material";
import { category } from "../../constants/index";
import { colors } from "../../constants/colors";

const Category = ({ setselectcategoryHandler, selectcategory }) => {
	return (
		<Stack direction={"row"} sx={{ overflowX: "scroll" }}>
			{category.map((item) => {
				return (
					<button
						onClick={() => setselectcategoryHandler(item.name)}
						key={item.name}
						className="category-btn"
						style={{
							borderRadius: "0",
							background:
								selectcategory === item.name && colors.secondary,
							color: selectcategory === item.name && "#fff",
						}}>
						<span
							style={{
								color: item.name === selectcategory && '#fff',
								marginRight: "15px",
							}}>
							{item.icon}
						</span>
						<span>{item.name}</span>
					</button>
				);
			})}
		</Stack>
	);
};

export default Category;
