import './app.css'
import Router, { Route } from 'preact-router';
import SelectColor from './routes/SelectColor.tsx';
import FavouriteColor from './routes/FavouriteColor.tsx';

export function App() {
  return (
    <Router>
      <Route path="/" component={SelectColor} />
      <Route path="/favourite-color" component={FavouriteColor} />
    </Router>
  )
}
