import { useRouter } from 'next/router';

const UserPage = () => {
	const router = useRouter();

	router.query.userId;
	console.log(router.query.userId);

	return (
		<div>
			<h1>Hello from the User page!</h1>
			<div className='userStats'>
				<h2>Hello from the userStat box!</h2>
			</div>
			<div className='eventFeed'>
				<h2>Hello from the event feed!</h2>
			</div>
			<div className='badgeBox'>
				<h2>Hello from the badge box</h2>
			</div>
		</div>
	);
};

export default UserPage;
