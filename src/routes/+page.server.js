export async function load({ fetch }) {
	let url = 'https://api.datadesk.co.za/json.php?table=dd_coastal_ethekwini_population_6694931';

	const res = await fetch(url);
	const data = await res.json();

	data.forEach((d) => {
		d.population = +d.population;
		d.year = +d.year;
	});

	return {
		data
	};
}
