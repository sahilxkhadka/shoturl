export default async function Home() {
	// Artificial delay of 2 seconds
	await new Promise((resolve) => setTimeout(resolve, 7000));

	const res = await fetch(
		"https://hireme.caandd.com/api/blog-inner/e6d1fecb-6d6f-43c2-bb13-98b8848da54d"
	);
	console.log(res);
	const data = await res.json();
	console.log("🚀 ~ Home ~ data:", data);
	return <h1>Hello</h1>;
}
