import Link from 'next/link';
import { Fragment } from 'react';

const LandingPage = () => {
  return (
		<Fragment>
      <h1>Hooman needs you to join the Bit Force!</h1>
			<ul>
				<li>
					<Link href='/login'>Login</Link>
				</li>
				<li>
					<Link href='/enlist'>Enlist</Link>
				</li>
			</ul>
		</Fragment>
	);
}

export default LandingPage;
