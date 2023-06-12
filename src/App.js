const App = () => {
  return <div className="app">
    <Logo />
    <Form />
    <PackingLIst />
    <Stats />
  </div>
};

export default App;

const Logo = () => {
  return <h1> 🌴 Far Away 🧳</h1>;
};
const Form = () => {
  return (
    <div className="add-form">
      <h3>What do you need for your trip 😍</h3>
    </div>
  );
};
const PackingLIst = () => {
  return <div className="list">List</div>;
};
const Stats = () => {
  return (
    <footer className="stats">
      <em>🧳 You have X items on yout list, and you already packed X (x%)</em>
    </footer>
  );
};
