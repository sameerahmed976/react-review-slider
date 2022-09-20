import Review from "./style/Review";
import "./style/style.css";

function App() {
  return (
    <main className="app">
      <section className="heading">
        <h1 className="heading__reviews">Reviews</h1>
      </section>
      <Review />
    </main>
  );
}

export default App;
