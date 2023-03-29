
import './App.css';
import MovieList from './components/MovieList';
import Stars from './components/Stars';
import Movie from './components/Movie';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import Review from './components/Review';


function App() {
  return (
    <div className="App" id="background">
      <header>
        <h1>Movie Review App</h1>
      </header>
      <main>
      <MovieList />
      <ReviewList />
      </main>
      <br></br>
      <div>
      {/* <Review /> */}
      {/* <ReviewForm /> */}
      </div>
    </div>
  );
}

export default App;
