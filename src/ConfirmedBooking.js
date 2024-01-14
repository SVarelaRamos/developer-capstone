import React from "react";
import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <main>
      <h1>Confirmation succesful!</h1>
      <p>Thanks you for the reservation on Little Lemon.</p>
      <p>See you soon!</p>
      <Link class="button button-primary" to={"/"}>
        Back to home
      </Link>
    </main>
  );
}

export default ConfirmedBooking;
