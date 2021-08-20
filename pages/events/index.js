import EventList from "../../components/events/event-list.component"
import { getAllEvents } from "../../dummy-data"

function EventsPage() {

  const allEventItems = getAllEvents()

  return <div>
    <EventList events={allEventItems} />
  </div>
  
}

export default EventsPage