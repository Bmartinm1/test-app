import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>ManyEvents</div>
			<nav>
				<ul>
					<li>
						<Link href='/events'>All Events</Link>
					</li>
					<li>
						<Link href='/test/admin/addEvent'>Add New Event</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
