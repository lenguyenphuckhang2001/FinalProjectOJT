import React from 'react';
import './HomeStories.scss';
import ProjectApi from '../../../Api/ProjectAPI';
import CardSwiper from '../../../Components/CardSwiper/CardSwiper';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
function HomeStories() {
  const [state, setState] = useState([]);
  useEffect(() => {
    ProjectApi.getProject()
      .then((result) => {
        const filteredData = result.filter((item) => {
          return Number(item.id) < 5;
        });
        setState(filteredData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className='home-stories'>
      <Container>
        <div className='homes-stories-content'>
          <div className='stories-header'>
            <h2>Typical successful stories</h2>
            <h3>
              From ideas turned into carefully crafted pixels and problems crafted into solutions.
            </h3>
          </div>
          <div className='stories-space'></div>
          <div className='stories-body'>
            <div className='row g-0'>
              {state.map((item) => {
                return (
                  <CardSwiper
                    name={item.name}
                    img={item.img}
                    description={item.description}
                    tech={item.tech}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeStories;
