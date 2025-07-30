export default function DashBoardDetailPage({ params, searchParams }) {
	return (
		<main>
			DashBoard Detail Page {params.id} code={searchParams.code}
		</main>
	);
}
