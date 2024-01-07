import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <section className="cta">
        <div className="container">
          <article>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes serverd with a modern twist
            </p>
            <Link className="button button-primary" to={"/booking"}>
              Reserve a table
            </Link>
          </article>
          <img alt="pinchos" />
        </div>
      </section>
      <section className="weeks-specials">
        <div className="week-title">
          <h2>This weeks specials!</h2>
          <a className="button button-primary" href="#root">
            Online menu
          </a>
        </div>
        <div className="menu-list">
          <article>
            <img alt="Greek salad"></img>
            <header>
              <h5>Greek salad</h5>
              <span>$12.99</span>
            </header>
            <p>
              The famous greek salad of cruspy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <footer>
              <span>Order a delivery</span>
              <span></span>
            </footer>
          </article>
          <article>
            <img alt="Bruschetta"></img>
            <header>
              <h5>Bruschetta</h5>
              <span>$ 5.99</span>
            </header>
            <p>
              Our bruschetta is mad from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <footer>
              <span>Order a delivery</span>
              <span></span>
            </footer>
          </article>
          <article>
            <img alt="Lemon Dessert"></img>
            <header>
              <h5>Lemon Dessert</h5>
              <span>$ 5.00</span>
            </header>
            <p>
              this comes straight from grandma's recipe book, every last
              ingredient has been sourced and is authentic as can be imagined.
            </p>
            <footer>
              <span>Order a delivery</span>
              <span></span>
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
