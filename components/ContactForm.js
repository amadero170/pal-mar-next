export default function ContactForm() {
  return (
    <div className="contact-form-wrapper">
      <h2>REQUEST QUOTATION & AVAILABILITY</h2>
      <form className="contact-form">
        <div className="flex-grow-1">
          <label htmlFor="name">Name:</label>
          <br></br>
          <input name="name" type="text"></input>
          <br></br>
        </div>
        <label htmlFor="phone">Phone:</label>
        <br></br>
        <input name="phone" type="text" inputMode="numeric"></input>
        <br></br>
        <label htmlFor="email">Email:</label>
        <br></br>
        <input name="email" type="email"></input>
        <br></br>
        <div className="flex">
          <div className="flex-grow-1">
            <label htmlFor="check-in">Check-in:</label>
            <br></br>
            <input name="check-in" type="date"></input>
          </div>
          <div className="flex-grow-1">
            <label htmlFor="check-out">Check-out:</label>
            <br></br>
            <input name="check-out" type="date"></input>
          </div>
        </div>
        <div className="flex">
          <div className="flex-grow-1">
            <label htmlFor="adults">Adults:</label>
            <br></br>
            <input name="adults" type="number"></input>
          </div>
          <div className="flex-grow-1">
            <label htmlFor="children">Children:</label>
            <br></br>
            <input name="children" type="number"></input>
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
