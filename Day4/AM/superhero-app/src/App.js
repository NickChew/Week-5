import { useState } from 'react';
import { allHeroes } from './heroData';
import './App.css';

const App = () => {
  
  const [favourites, setFavourites] = useState([]);

  const handleAddToFav = (hero) => {
    let newFavArr = [...favourites];
    newFavArr.push(hero);
    setFavourites(newFavArr);
  };
// handle the removal of the fav hero using splice index
  const handleRemove = (index) => {
    let newFavArr = [...favourites];
    newFavArr.splice(index, 1);
    setFavourites(newFavArr);
  };

  return (
    <>
      <h1>HERO INFORMATION</h1>   

      <div>
        <h3>FAVOURITE HEROES</h3>
        {favourites.map((favHero, index) => {
        return <Favourites key={index} removeFav ={() => handleRemove(index)} favHeroData={favHero}/>
      })}
      </div>

      {allHeroes.map((heroInfo, index) => {
        return <HeroCard key={index} heroObj={heroInfo} favFunc={handleAddToFav} />
      })}

    </>
  );
};

const Favourites = ({favHeroData, removeFav }) => {
  return (
    <div>
      <p>Fav Hero {favHeroData.hero}</p>
      <button onClick={removeFav}>X</button>
    </div>
  );
};

const HeroCard = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <p>HERO: {props.heroObj.hero}</p>

      {show && (                      // && if this is true
        <div>
          <p>INFO: {props.heroObj.info}</p>
          <p>VILLAIN: {props.heroObj.villain}</p>
        </div>
      )}                                                      
      <button onClick={() => setShow(!show)}>{ show ? "HIDE INFO" : "SHOW INFO" }</button> 
      <button onClick={() => props.favFunc(props.heroObj)}>ADD TO FAVOURITES</button>
    </>
  );
};

export default App;