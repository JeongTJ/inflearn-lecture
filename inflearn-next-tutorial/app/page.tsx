import Image from "next/image";
import Link from "next/link";

// 모든 페이지에 필요한 파일
export default function Home() {
	return (
		<main>
			Home
			<Link href="/dashboard">Go To DashBoard</Link>
			<a href="/dashboard">Go To DashBoard</a>
		</main>
	);
}
