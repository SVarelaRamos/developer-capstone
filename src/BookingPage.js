import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import fakeAPI from "./fakeApi";
function updateTimes(date) {
  const availableTimes = fakeAPI.fetchAPI(date);
  return { availableTimes: availableTimes };
}

function initializeTimes() {
  const availableTimes = fakeAPI.fetchAPI(
    new Date().toISOString().split("T")[0]
  );
  return { availableTimes: availableTimes };
}

const reducer = (state, action) => {
  if (action.type === "update_times") return updateTimes(action.payload);
  return state;
};

function BookingPage() {
  const navigate = useNavigate();

  function submitForm(formData) {
    if (fakeAPI.submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  const [state, dispatch] = useReducer(reducer, initializeTimes());
  return (
    <main>
      <BookingForm
        availableTimes={state.availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default BookingPage;
