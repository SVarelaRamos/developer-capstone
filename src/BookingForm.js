import React, { useState } from "react";

function BookingForm() {
  const [resDate, setResDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOcasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  function handleGuests(e) {
    setGuests(e.value);
  }

  function handleResDate(e) {
    setResDate(e.target.value);
  }

  function handleResTime(e) {
    setResTime(e.target.value);
  }

  function handleOcasion(e) {
    setOcasion(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={handleResDate}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={resTime} onChange={handleResTime}>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuests}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOcasion}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
