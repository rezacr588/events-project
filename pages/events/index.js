import EventList from "../../components/events/event-list.component"
import { getFeaturedEvents } from "../../dummy-data"

function EventsPage() {

  const featuredItems = getFeaturedEvents()

  return <div>
    <EventList events={featuredItems} />
  </div>
  
}

export default EventsPage