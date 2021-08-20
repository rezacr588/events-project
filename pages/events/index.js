import {getFeaturedEvents} from "../../dummy-data"

function EventsPage() {

  const featuredItems = getFeaturedEvents()

  return <div>
    <EventList events={featuredItems} />
  </div>
  
}

export default EventsPage