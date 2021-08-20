import Link from "next/link"

function EventItem({ event }) {
  const {
    id,
    title,
    location,
    date,
    image
  } = event
  const imageSource = `/${image}`
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const formattedAddress = location.replace(", ", "\n")
  const exploreLink = `/events/${id}`
  return <li>
    <img src={imageSource} alt={title} />
    <div>
      <h2>{title}</h2>
      <div>
        <time>{humanReadableDate}</time>
      </div>
      <div>
        <address>{formattedAddress}</address>
      </div>
    </div>
    <div>
      <Link href={exploreLink}>Explore Event</Link>
    </div>
  </li>
}

export default EventItem