function EventList({events}) {
  return (
    <ul>
      {
        events.map(item => <EventItem event={item} />)
      }
    </ul>
  )
}
export default EventList