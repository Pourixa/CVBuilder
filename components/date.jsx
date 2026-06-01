function Date({ startDate, endDate }) {
  return (
    <div className="date">
      <h4>{startDate}</h4>
      <p> - </p>
      <h4>{endDate}</h4>
    </div>
  )
}

export { Date }
