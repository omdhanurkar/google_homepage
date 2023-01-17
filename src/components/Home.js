import React from "react";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
const Home = (props) => {
  const [state, setState] = React.useState("");
  const searchGoogle = (e) => {
    props.history.push({ pathname: "/search", state });
  };
  return (
    <div className="home">
      <div className="home__container">
        <div className="logo"> 
          <img src="/images/googleLogo.png" alt="Logo" />
        </div>
        <form className="home__form" onSubmit={searchGoogle} >
          <input type="text" className="word_box"
            onChange={(e) => setState(e.target.value)}
            value={state}
            required
          />
          <div className="home__group">
            <input type="submit" className="serch_button" value="Google Search" />
            <input type="submit" className="lucky_button" value="I'm Feeling Lucky" />
          </div>
          <div id="languageNote">
            Google offered In:
            <a href="https://www.google.com/setprefs?sig=0_dzgIchzdFaeyLw3yofawnLjMWj0%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjuh6CuyMz8AhWmVmwGHdCnB0IQ2ZgBCBQ">hindi</a>
          </div>
          <FaSistrix className="search__icon" />
          <FaMicrophone className="microphone" />

        </form>
      </div>
    </div>
  );
};

export default Home;
