import Link from 'next/link';
import { Fragment } from 'react';

const LandingPage = () => {
  return (
		<Fragment>
			<ul>
				<li>
					<Link href='/login'>Login</Link>
				</li>
				<li>
					<Link href='/enlist'>Enlist</Link>
				</li>
				<li>
					<Link href='/events'>Events</Link>
				</li>
			</ul>
		</Fragment>
	);
}

export default LandingPage;
