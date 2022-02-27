import { FunctionalComponent, h } from 'preact';
import style from './style.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMapComponent from '../../components/map';

const API_KEY = 'AIzaSyAiRZAzwT0SIZzxN_64dhqctqn9izEDAFE';
const defaultConfig = {
  center: {
    lat: 50.450001,
    lng: 30.523333
  },
  zoom: 6,
}

const Home: FunctionalComponent = () => {

  const render = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return <h1>Loading...</h1>;
      case Status.FAILURE:
        return <h1>Error</h1>;
      case Status.SUCCESS:
        return <MyMapComponent {...defaultConfig} />;
    }
  };

  return <Wrapper apiKey={API_KEY} render={render} />;
};

export default Home;
