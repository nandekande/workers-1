import { cookies } from "next/headers";
import { Box } from "./Box";

type PropsType = {
	text: string;
};

export const DynamicServerComponent = async ({ text }: PropsType) => {
	const cookieStore = await cookies();
	const username = cookieStore.get("username")?.value ?? "no name";
	return (
    <Box>
      <h2>DynamicServerComponent</h2>
      <p>{text}</p>
      <p>username: {username}</p>
    </Box>
  );
};
