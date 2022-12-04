import React, { useEffect, useState } from 'react';
import exampleApi from '../../Api/exampleApi';

function Home(props) {
  const [state, setState] = useState();

  useEffect(() => {
    const testApi = async () => {
      const data = await exampleApi.example();
      setState(data);
    };
    testApi();
  }, []);

  console.log(state);
  return <div>HOME page</div>;
}

export default Home;
