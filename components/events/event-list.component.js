import EventItem from "./event-item.component"
import classes from "./event-list.module.css"

function EventList({ events }) {
  return (
    <ul className={classes.list}>
      {
        events.map(item => <EventItem event={item} />)
      }
    </ul>
  )
}
export default EventList