import { Date } from './date'

function Certificate({ certificate, date }) {
  return (
    <div className="certificate">
      <h3>{certificate}</h3>
      <Date startDate={date} endDate={date} />
    </div>
  )
}

function Certificates({ certificates }) {
  return (
    <div className="certificates">
      <h2>CERTIFICATES</h2>
      {certificates.map(item => (
        <Certificate key={item.id} {...item} />
      ))}
    </div>
  )
}

export { Certificates }
