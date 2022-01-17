import { MongoClient, ObjectId } from 'mongodb';

import EventDetail from '../../../components/events/EventDetail'

const EventDetails = (props) => {
  return (
		<EventDetail
			image={props.eventData.image}
			title={props.eventData.title}
			address={props.eventData.address}
			description={props.eventData.description}
		/>
	);
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
		'mongodb+srv://ben_m_squared:Thetrinity1@cluster0.fwv4v.mongodb.net/eventsDatabase?retryWrites=true&w=majority'
	);
	const db = client.db();

	const eventsCollection = db.collection('events');

  const events = await eventsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: true,
		paths: events.map(event => ({ 
      params: {eventId: event._id.toString()}
    })),
	};
}

export async function getStaticProps(context) {

  const eventId = context.params.eventId;

  const client = await MongoClient.connect(
    'mongodb+srv://ben_m_squared:Thetrinity1@cluster0.fwv4v.mongodb.net/eventsDatabase?retryWrites=true&w=majority'
  );
  const db = client.db();

  const eventsCollection = db.collection('events');

  const selectedEvent = await eventsCollection.findOne({_id: ObjectId(eventId),
  });

  client.close();

  return {
		props: {
			eventData: {
        id: selectedEvent._id.toString(),
        title: selectedEvent.title,
        address: selectedEvent.address,
        image: selectedEvent.image,
        description: selectedEvent.description
      },
		},
	};
}

export default EventDetails;
