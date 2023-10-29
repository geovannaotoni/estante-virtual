import { GET_BOOKS_NAME } from './api/queries';
import FavoriteBooks from './components/FavoriteBooks/FavoriteBooks';
import Header from './components/Header/Header';

function App() {
    return (
    <>
      <Header />
      <FavoriteBooks />
    </>
  );
}

export default App;
