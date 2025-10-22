import { Box } from "@/components/Box";
import { StaticClientComponent } from "@/components/StaticClientComponent";
import { StaticServerComponent } from "@/components/StaticServerComponent";

const StaticRenderingPage = () => {
	return (
		<Box>
			<h1>Dynamic Rendering Page</h1>
			<StaticServerComponent text="StaticServerComponentへのProps" />
			<StaticClientComponent text="Static Client ComponentへのProps" />
		</Box>
	);
};

export default StaticRenderingPage;
