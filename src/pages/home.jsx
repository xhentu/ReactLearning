import React from 'react';
import MainButton from '../components/mainButton';
import lesson1 from './lesson1';
import lesson2 from './lesson2';

const Home = () => {
  return (
    <div>
      <MainButton label="Lesson 1" lesson="lesson1" />
      <MainButton label="Lesson 2" lesson="lesson2" />
    </div>
  );
};

export default Home;
