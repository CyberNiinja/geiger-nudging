import { useEffect, useState } from 'react';
import RiskVisual from './riskVisual';

const Indicator = () => {
	// --- RISK ---
	// current risk level for selected
	const [risk, setRisk] = useState();

	// --- REGION ---
	// selected region
	const [region, setRegion] = useState('');
	// array that contains all available industries
	const [regionList, setRegionList] = useState();

	// --- INDUSTRIES ---
	// selected trade sector
	const [trade, setTrade] = useState('');
	// array that contains all available trade sectors
	const [tradeList, setTradeList] = useState();

	// // API Call
	// const callAPI = async (route) => {
	// 	const url = '' + route;
	// 	const response = await fetch(url);
	// 	return response.json();
	// };

	// fetch industries onload
	useEffect(() => {
		// fetch regions from api
		// callAPI('/regions').then((response) => setRegionList(response.items));
		setRegionList([
			{ id: 0, name: 'Tessin' },
			{ id: 1, name: 'Romandie' },
			{ id: 2, name: 'Zentralschweiz' },
			{ id: 3, name: 'Nordwestschweiz' },
			{ id: 4, name: 'Ostschweiz' },
		]);

		// fetch trade sectors from api
		// callAPI('/trades').then((response) => setTradeList(response.items));
		setTradeList([
			{ id: 0, name: 'Technologie & Medien' },
			{ id: 1, name: 'Pharma & Chemie' },
			{ id: 2, name: 'Finanzsektor' },
			{ id: 3, name: 'Immobilien' },
			{ id: 4, name: 'Gesundheitswesen' },
			{ id: 5, name: 'Detailhandel' },
			{ id: 6, name: 'Staat & öffentlicher Sektor' },
		]);
	}, []);

	//fetch risk every time region or trade changes
	useEffect(() => {
		//fetch risk for industry and region from API
		// callAPI(`/risk&industry=${trade}&region=${region}`).then((response) =>
		// 	setRisk(response.risk)
		// );
		const devRisks = ['VERY LOW', 'LOW', 'HIGH', 'VERY HIGH'];
		const r = Math.floor(Math.random() * 4);
		setRisk(devRisks[r]);
	}, [trade, region]);

	// apply changes in industry or region dropdown
	const onChange = (event) => {
		if (event.target.id === 'tradeDrop') setTrade(event.target.value);
		else setRegion(event.target.value);
	};

	// --- Display ---
	return (
		<div className="flex col align-center">
			<RiskVisual risk={risk} />
			{dropdown('regionDrop', region, onChange, regionList)}
			{dropdown('tradeDrop', trade, onChange, tradeList)}
		</div>
	);
};

const dropdown = (id, value, onChange, items) => (
	<select id={id} className="drop" value={value} onChange={onChange}>
		{items ? (
			items.map((el) => (
				<option key={el.id} value={el.value ?? el.name}>
					{el.name}
				</option>
			))
		) : (
			<option>loading</option>
		)}
	</select>
);

export { Indicator };
