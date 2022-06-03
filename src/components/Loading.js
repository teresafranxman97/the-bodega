import { Icon } from "@iconify/react";

const Loading = ({ isLoading }) => {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Icon
				icon="eos-icons:bubble-loading"
				hFlip={true}
				vFlip={true}
				style={{ color: "#111111", height: "50vh" }}
				width={125}
			/>
		</div>
	);
};

export default Loading;
