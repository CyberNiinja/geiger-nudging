const Navbar = () => {
	return (
		<div id="navbar">
			<div id="navbar-content">
				<a href="/geiger-nudging/#/norm" id="logo">
					<img src="31072020_geiger-logo_rgb.svg" alt="logo" height={50}></img>
				</a>
				<a
					href="https://project.cyber-geiger.eu/"
					id="navbar-btn"
					className="btn">
					Download Toolbox
				</a>
			</div>
		</div>
	);
};

export { Navbar };
