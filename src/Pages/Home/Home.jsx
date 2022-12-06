import React, { useEffect, useState } from 'react';
import exampleApi from '../../Api/exampleApi';

function Home(props) {
  const [state, setState] = useState();

  useEffect(() => {
    const testApi = async () => {
      const data = await exampleApi.example2();
      setState(data);
    };
    testApi();
  }, []);

  console.log(state);
  return <div></div>;
}

export default Home;
