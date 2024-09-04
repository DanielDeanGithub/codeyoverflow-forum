import {comments} from './commentData';
import Card from './Card.js';

function App() {
  return comments.map((comment, index) => <Card key={index} commentObject={comment}/>);
};

export default App;
