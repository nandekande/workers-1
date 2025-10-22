"use client";

import { useState } from "react";
import { Box } from "./Box";

type PropsType = {
	text: string;
};

export const StaticClientComponent = ({ text }: PropsType) => {
	const [count, setCount] = useState(0);
	const onClickCountUp = () => {
		setCount((prev) => prev + 1);
	};
	return (
		<Box>
			<h2>StaticClientComponent</h2>
			<p>{text}</p>
			<button onClick={onClickCountUp} type="button">count up</button>
			<p>{count}</p>
		</Box>
	);
};
