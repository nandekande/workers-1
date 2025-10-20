import type { ReactNode } from "react";

type PropsType = {
	children: ReactNode;
};
export const Box = ({ children }: PropsType) => {
	return (
		<div className="p-5 m-5 border-1 , border-neutral-100 / flex flex-col justify-center items-center gap-1">
			{children}
		</div>
	);
};
