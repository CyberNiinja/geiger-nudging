const RiskVisual = ({ risk }) => {
	return (
		<div id="riskVisual">
			<svg
				width="351px"
				height="207px"
				viewBox="0 0 351 207"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg">
				<title>Risk Indicator</title>
				<g
					id="Page-1"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd">
					<g
						id="Desktop-HD-Copy-11"
						transform="translate(-496.000000, -61.000000)">
						<g id="Group-21" transform="translate(504.082343, 72.880606)">
							<path
								d="M0,187.072351 C0,166.102934 4.13292675,146.731884 12.3987803,128.9592 C20.6646338,111.186515 30.1709259,96.8239971 40.9176568,85.8716446"
								id="Line"
								stroke="#04BF55"
								strokeWidth="16"
								strokeLinecap="round"></path>
							<path
								d="M294,187.072351 C294,166.102934 298.132927,146.731884 306.39878,128.9592 C314.664634,111.186515 324.170926,96.8239971 334.917657,85.8716446"
								id="Line-Copy-4"
								stroke="#D92323"
								strokeWidth="16"
								strokeLinecap="round"
								transform="translate(314.458828, 136.471998) scale(-1, 1) translate(-314.458828, -136.471998) "></path>
							<path
								d="M86,100.072351 C86,79.1029344 90.1329268,59.731884 98.3987803,41.9591997 C106.664634,24.1865155 116.170926,9.8239971 126.917657,-1.12835541"
								id="Line-Copy"
								stroke="#FFBF01"
								strokeWidth="16"
								strokeLinecap="round"
								transform="translate(106.458828, 49.471998) rotate(47.000000) translate(-106.458828, -49.471998) "></path>
							<path
								d="M208,100.072351 C208,79.1029344 212.132927,59.731884 220.39878,41.9591997 C228.664634,24.1865155 238.170926,9.8239971 248.917657,-1.12835541"
								id="Line-Copy-2"
								stroke="#FE7501"
								strokeWidth="16"
								strokeLinecap="round"
								transform="translate(228.458828, 49.471998) scale(-1, 1) rotate(47.000000) translate(-228.458828, -49.471998) "></path>
							{risk === 'VERY HIGH' && (
								<g id="Group-26" transform="translate(103.417657, 139.619394)">
									<g
										id="Polygon-4"
										transform="translate(175.310680, 0.000000)"
										fill="#516A7B"
										fillRule="nonzero">
										<path
											d="M19.9231796,2.31426566 C21.0380385,2.45243948 21.8236321,3.89995651 21.3300731,4.90653836 L13.100033,21.6907876 C12.6111636,22.6878155 11.2312617,22.5041202 10.6099359,21.3592879 L0.250382822,2.27106878 C-0.370948218,1.12623647 0.229310684,-0.126567616 1.33361001,0.0102957382 L19.9231796,2.31426566 Z"
											id="Path"></path>
									</g>
									<text
										id="Very-high"
										fontFamily="Roboto-Bold, Roboto"
										fontSize="30"
										fontWeight="bold"
										fill="#D92323">
										<tspan x="0.213378906" y="43.5">
											Very high
										</tspan>
									</text>
								</g>
							)}

							{risk === 'VERY LOW' && (
								<g id="Group-22" transform="translate(34.728336, 139.619394)">
									<g
										id="Polygon-4-Copy-3"
										transform="translate(10.740291, 11.169903) scale(-1, 1) translate(-10.740291, -11.169903) "
										fill="#516A7B"
										fillRule="nonzero">
										<path
											d="M19.9231796,2.31426566 C21.0380385,2.45243948 21.8236321,3.89995651 21.3300731,4.90653836 L13.100033,21.6907876 C12.6111636,22.6878155 11.2312617,22.5041202 10.6099359,21.3592879 L0.250382822,2.27106878 C-0.370948218,1.12623647 0.229310684,-0.126567616 1.33361001,0.0102957382 L19.9231796,2.31426566 Z"
											id="Path"></path>
									</g>
									<text
										id="Very-Low"
										fontFamily="Roboto-Bold, Roboto"
										fontSize="30"
										fontWeight="bold"
										fill="#04BF55">
										<tspan x="70.601918" y="43.5">
											Very Low
										</tspan>
									</text>
								</g>
							)}
							{risk === 'HIGH' && (
								<g id="Group-25" transform="translate(135.417657, 60.479070)">
									<g
										id="Polygon-4-Copy"
										transform="translate(81.050971, 15.310227) rotate(-35.000000) translate(-81.050971, -15.310227) translate(70.310680, 4.140324)"
										fill="#516A7B"
										fillRule="nonzero">
										<path
											d="M19.9231796,2.31426566 C21.0380385,2.45243948 21.8236321,3.89995651 21.3300731,4.90653836 L13.100033,21.6907876 C12.6111636,22.6878155 11.2312617,22.5041202 10.6099359,21.3592879 L0.250382822,2.27106878 C-0.370948218,1.12623647 0.229310684,-0.126567616 1.33361001,0.0102957382 L19.9231796,2.31426566 Z"
											id="Path"></path>
									</g>
									<text
										id="High"
										fontFamily="Roboto-Bold, Roboto"
										fontSize="30"
										fontWeight="bold"
										fill="#FE7501">
										<tspan x="0.469238281" y="122.640324">
											High
										</tspan>
									</text>
								</g>
							)}

							{risk === 'LOW' && (
								<g id="Group-24" transform="translate(103.263903, 60.479070)">
									<g
										id="Polygon-4-Copy-2"
										transform="translate(15.204725, 15.310227) scale(-1, 1) rotate(-35.000000) translate(-15.204725, -15.310227) translate(4.464433, 4.140324)"
										fill="#516A7B"
										fillRule="nonzero">
										<path
											d="M19.9231796,2.31426566 C21.0380385,2.45243948 21.8236321,3.89995651 21.3300731,4.90653836 L13.100033,21.6907876 C12.6111636,22.6878155 11.2312617,22.5041202 10.6099359,21.3592879 L0.250382822,2.27106878 C-0.370948218,1.12623647 0.229310684,-0.126567616 1.33361001,0.0102957382 L19.9231796,2.31426566 Z"
											id="Path"></path>
									</g>
									<text
										id="Low"
										fontFamily="Roboto-Bold, Roboto"
										fontSize="30"
										fontWeight="bold"
										fill="#FFBF01">
										<tspan x="36.5268007" y="122.640324">
											Low
										</tspan>
									</text>
								</g>
							)}
						</g>
					</g>
				</g>
			</svg>
		</div>
	);
};
export default RiskVisual;
