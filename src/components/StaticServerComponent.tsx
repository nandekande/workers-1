import { Box } from "./Box";

type PropsType = {
	text: string;
};

export const StaticServerComponent = ({ text }: PropsType) => {
	return (
		<Box>
			<h2>Static Server Component</h2>
			<p>{text}</p>
		</Box>
	);
};

export default StaticServerComponent;