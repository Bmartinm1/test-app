import eventItem from './eventItem';
import classes from './eventList.module.css';

function eventList(props) {
	return (
		<ul className={classes.list}>
			{props.events.map((event) => (
				<eventItem
					key={event.id}
					id={event.id}
					image={event.image}
					title={event.title}
					address={event.address}
				/>
			))}
		</ul>
	);
}

export default eventList;
