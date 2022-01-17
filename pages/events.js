import EventList from '../components/events/EventList'

const DUMMY_EVENTS = [
	{
		id: 'ev1',
		title: 'Event number 1',
		image:
			'https://cdn1.epicgames.com/ue/product/Screenshot/RobotScreen04-1920x1080-d102d0e4e88d4c00d2baea3c887be589.jpg?resize=1&w=1920',
		address: 'this is going away',
		description: 'this will take over',
	},
	{
		id: 'ev2',
		title: 'Event number 2',
		image:
			'https://cdn1.epicgames.com/ue/product/Screenshot/RobotScreen04-1920x1080-d102d0e4e88d4c00d2baea3c887be589.jpg?resize=1&w=1920',
		address: 'this is going away',
		description: 'this will take over',
	},
	{
		id: 'ev3',
		title: 'Event number 3',
		image:
			'https://cdn1.epicgames.com/ue/product/Screenshot/RobotScreen04-1920x1080-d102d0e4e88d4c00d2baea3c887be589.jpg?resize=1&w=1920',
		address: 'this is going away',
		description: 'this will take over',
	},
];

const EventPage = () => {
	return (
		<div>
			<EventList events={DUMMY_EVENTS} />
		</div>
	);
};

export default EventPage;
