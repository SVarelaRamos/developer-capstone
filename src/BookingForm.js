import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [resDate, setResDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOcasion] = useState("Birthday");
  const [errors, setErrors] = useState({
    date: null,
    time: null,
    guests: null,
    occasion: null,
  });

  function handleGuests(e) {
    setGuests(e.value);
  }

  function handleResDate(e) {
    setResDate(e.target.value);
    dispatch({ type: "update_times", payload: e.target.value });
  }

  function handleResTime(e) {
    setResTime(e.target.value);
    console.log(e.target.value);
    if (!e.target.value || e.target.value === "--- Select a Time ---") {
      setErrors((prevVal) => {
        return { ...prevVal, time: "Choose a valid time" };
      });
    } else {
      setErrors((prevVal) => {
        return { ...prevVal, time: null };
      });
    }
  }

  function handleOcasion(e) {
    setOcasion(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (errors.time) return;
    submitForm({
      date: resDate,
      time: resTime,
      guests: guests,
      occasion: occasion,
    });
  }
  return (
    <>
      <h1>Book your table!</h1>
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "10px" }}
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
        {errors.time && <span class="error">{errors.time}</span>}
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
        <input
          disabled={errors.time}
          class="button button-primary"
          type="submit"
          value="Make Your reservation"
        />
      </form>
    </>
  );
}

export default BookingForm;
