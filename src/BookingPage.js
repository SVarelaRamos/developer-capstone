import { useEffect, useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./fakeApi";
async function updateTimes(date) {
  const availableTimes = await fetchAPI(date);
  return { availableTimes: availableTimes };
}

async function initializeTimes() {
  const availableTimes = fetchAPI(new Date().toISOString().split("T")[0]);
  return { availableTimes: availableTimes };
}

const reducer = (state, action) => {
  if (action.type === "update_times") return updateTimes(action.payload);
  return state;
};

function BookingPage() {
  useEffect(() => {
    initializeTimes();
  }, []);
  const [state, dispatch] = useReducer(reducer, initializeTimes());
  return (
    <main>
      <BookingForm availableTimes={state.availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default BookingPage;
