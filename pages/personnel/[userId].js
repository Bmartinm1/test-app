import { useRouter } from 'next/router';

// test-app.com/personnel/userId

const UserPage = () => {
  const router = useRouter();

  router.query.userId;
  console.log(router.query.userId)

	return (
		<div>
			<h1>Hello from the User page!</h1>
		</div>
	);
};

export default UserPage;
