import NewEventForm from '../../../components/events/NewEventForm'

const addEventPage = () => {
  function addEventHandler(enteredEventData) {
    console.log(enteredEventData)
  }

  return <NewEventForm onAddEvent={addEventHandler} />
};

export default addEventPage;
