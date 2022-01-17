import Link from 'next/link';
import { MongoClient } from 'mongodb';

import EventList from '../components/events/EventList';

const LandingPage = (props) => {

  return (
		<>
      <div>
        <h1>Hooman wants you to join the Bit Force!</h1>
      </div>
      <div>
        <EventList events={props.events} />
      </div>
		</>
	);
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
		'mongodb+srv://ben_m_squared:Thetrinity1@cluster0.fwv4v.mongodb.net/eventsDatabase?retryWrites=true&w=majority'
	);
	const db = client.db();

	const eventsCollection = db.collection('events');

  const events = await eventsCollection.find().toArray();

  client.close();

  return {
		props: {
      events: events.map(event => ({
        title: event.title,
        image: event.image,
        address: event.address,
        id: event._id.toString()
      }))
    },
    revalidate: 1
	};
}

export default LandingPage;
