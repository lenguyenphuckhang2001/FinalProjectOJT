import React, { useEffect, useState } from 'react';
import TeamApi from '../../Api/TeamAPI';
function Home(props) {
  const [state, setState] = useState();

  useEffect(() => {
    TeamApi.getTeam()
      .then((result) => {
        console.log(result);
        setState(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* {state &&
        state.map((item) => {
          return <p>{item.name}</p>;
        })} */}
    </div>
  );
}

export default Home;
