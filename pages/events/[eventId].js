import { Fragment } from "react"
import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"
import { useRouter } from "next/router"
import {getEventById} from "../../dummy-data"

function EventDetailPage() {
  const router = useRouter()
  const event = getEventById(router.query.eventId)
  if(!event) return <p>No Event Found</p>
  return <Fragment>
    <EventSummary title={event.title} />
    <EventLogistics
      date={event.date}
      address={event.location}
      image={event.image}
      imageAlt={event.title}
    />
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
  </Fragment>
}

export default EventDetailPage