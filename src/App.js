import './App.css';
import Card from './Card';
import Props from './Props';
function App() {
  return (
    <>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Props name="sanjay" age="21" city="kolkata"/>
      <Props/>
    </>
  );
}

export default App;
