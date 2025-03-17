import Link from "next/link";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="aximo-default-btn pill aximo-header-btn" href="/">
				Home
			</Link>
			<Link className="aximo-default-btn pill aximo-header-btn" href="/">
			Service
			</Link>
			<Link className="aximo-default-btn pill aximo-header-btn" href="/">
				About
			</Link>
			<Link className="aximo-default-btn pill aximo-header-btn" href="/">
				Plans
			</Link>
			<Link className="aximo-default-btn pill aximo-header-btn" href="/">
				Hire
			</Link>
		</div>
	);
}

export default HeaderButton;
