import MaxWidthContainer from "./max-width-container";

export const StickyHeaderContainer = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<header className="bg-background sticky top-0 z-50 border-b">
			<MaxWidthContainer className="py-0 border-0 md:border-l md:border-r">
				<div className="h-16">{children}</div>
			</MaxWidthContainer>
		</header>
	);
};
