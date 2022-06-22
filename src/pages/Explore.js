import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ButtonExplore from '../components/Explore/Button';

function Explore() {
  const history = useHistory();
  const clickExploreFoods = () => {
    history.push('/explore/foods');
  };
  const clickExploreDrinks = () => {
    history.push('/explore/drinks');
  };
  return (
    <div>
      <Header namePage="Explore" isEnable={ false } />
      <ButtonExplore
        buttonText="Explore Foods"
        testId="explore-foods"
        handleClick={ clickExploreFoods }
      />
      <ButtonExplore
        buttonText="Explore Drinks"
        testId="explore-drinks"
        handleClick={ clickExploreDrinks }
      />
      <Footer />
    </div>
  );
}

export default Explore;
