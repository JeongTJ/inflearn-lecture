import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next.js Tutorial",
	description: "Next.js 튜토리얼",
};

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
