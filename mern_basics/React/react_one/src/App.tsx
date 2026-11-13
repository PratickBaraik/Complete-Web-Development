// import ListGroup from './components/ListGroup';

import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {

  // let items = [
  //   'New York',
  //   'San Francisco',
  //   'Tokyo',
  //   'London',
  //   'Paris'
  // ];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /> */}
      {/* <ListGroup /> */}
      <Alert>
        This is an Alert! <span>"Saying Hello World!"</span>
      </Alert>
      <Button color="warning" onClick={() => console.log('Clicked')}>
        My Button
      </Button>
    </div>
  );
}

export default App;