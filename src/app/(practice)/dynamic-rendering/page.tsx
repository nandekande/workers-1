import { Box } from "@/components/Box";
import { DynamicServerComponent } from "@/components/DynamicServerComponent";
import { StaticClientComponent } from "@/components/StaticClientComponent";

const DynamicRenderingPage = () => {
	return (
		<Box>
			<h1>Dynamic Rendering Page</h1>
			<DynamicServerComponent text="Dynamic Server ComponentへのProps" />
			<StaticClientComponent text="Static Client ComponentへのProps" />
		</Box>
	);
};

export default DynamicRenderingPage;
