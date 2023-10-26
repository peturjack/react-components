import MyButton from "./components/button";
import MyCard from "./components/card";



function App() {
  return (
    <div>
      <section className="center">
        <h1>We love react!</h1>
        <div>
        <MyButton/>
        <MyButton/>
        </div>
      </section>
      <main className="center-2">
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
      </main>
    </div>
  );
}

export default App;
