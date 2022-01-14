import { useEffect, useState } from 'react';
import RiskVisual from './riskVisual';

const Indicator = () => {
	// --- RISK ---
	// current risk level for selected
	const [risk, setRisk] = useState();

	// --- REGION ---
	// selected region
	const [region, setRegion] = useState({ id: 0, name: 'Tessin' });
	// array that contains all available industries
	const [regionList, setRegionList] = useState();

	// --- INDUSTRIES ---
	// selected trade sector
	const [trade, setTrade] = useState({ id: 0, name: 'Technology & Media' });
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
			{ id: 2, name: 'Central Switzerland' },
			{ id: 3, name: 'Northwestern Switzerland' },
			{ id: 4, name: 'Eastern Switzerland' },
		]);

		// fetch trade sectors from api
		// callAPI('/trades').then((response) => setTradeList(response.items));
		setTradeList([
			{ id: 0, name: 'Technology & Media' },
			{ id: 1, name: 'Pharmaceuticals & Chemicals' },
			{ id: 2, name: 'Finance sector' },
			{ id: 3, name: 'Real Estate' },
			{ id: 4, name: 'Healthcare' },
			{ id: 5, name: 'Retail ' },
			{ id: 6, name: 'Public sector' },
		]);
	}, []);

	//fetch risk every time region or trade changes
	useEffect(() => {
		//fetch risk for industry and region from API
		// callAPI(`/risk&industry=${trade}&region=${region}`).then((response) =>
		// 	setRisk(response.risk)
		// );
		const devRisks = ['VERY LOW', 'LOW', 'HIGH', 'VERY HIGH'];
		const riskValues = [
			[3, 1, 4, 4, 3, 4, 4], // Tessin
			[4, 1, 3, 4, 3, 1, 1], // Romandie
			[1, 1, 2, 4, 3, 2, 2], // Zentralschweiz
			[3, 3, 4, 2, 4, 1, 2], // Nordwestschweiz
			[2, 2, 1, 4, 3, 1, 2], // Ostschweiz
		];
		setRisk(
			devRisks[trade && region ? riskValues[region.id][trade.id] - 1 : 0]
		);
	}, [trade, region]);

	// apply changes in industry or region dropdown
	const onChange = (event) => {
		event.preventDefault();
		if (event.target.id === 'tradeDrop') {
			setTrade(tradeList[event.target.value]);
		} else if (event.target.id === 'regionDrop') {
			setRegion(regionList[event.target.value]);
		}
	};

	// --- Display ---
	return (
		<div className="flex col align-center">
			<RiskVisual risk={risk} />
			<div className="dropContainer">
				<select
					id="regionDrop"
					className="drop"
					value={region.id}
					onChange={onChange}>
					{regionList?.map((el) => (
						<option key={el.id} value={el.id}>
							{el.name}{' '}
						</option>
					))}
				</select>
				<img
					className="locationIcon"
					alt="request location"
					src="icons/546310.png"
					onClick={() =>
						confirm('Would you like to let us know your location?')
					}></img>
			</div>
			<div className="dropContainer">
				<select
					id="tradeDrop"
					className="drop"
					value={trade.id}
					onChange={onChange}>
					{tradeList?.map((el) => (
						<option key={el.id} value={el.id}>
							{el.name}{' '}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export { Indicator };
