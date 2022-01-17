import EventDetail from '../../../components/events/EventDetail'

const EventDetails = () => {
  return (
		<EventDetail
			image='https://cdn1.epicgames.com/ue/product/Screenshot/RobotScreen04-1920x1080-d102d0e4e88d4c00d2baea3c887be589.jpg?resize=1&w=1920'
			title='The first event'
			description='This is the first ever event!'
		/>
	);
}

export async function getStaticPaths() {
  return {
    fallback: false,
		paths: [
			{
				params: {
					eventId: 'ev1',
				},
			},
			{
				params: {
					eventId: 'ev2',
				},
			},
		],
	};
}

export async function getStaticProps(context) {
  // fetch event data

  const eventId = context.params.eventId;
  console.log(eventId);

  return {
		props: {
			image:
				'https://cdn1.epicgames.com/ue/product/Screenshot/RobotScreen04-1920x1080-d102d0e4e88d4c00d2baea3c887be589.jpg?resize=1&w=1920',
			id: eventId,
			title: 'first',
      description: 'this is the first meetup'
		},
	};
}

export default EventDetails;
