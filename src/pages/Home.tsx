import React from 'react';
import Card from '../components/Card';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <Card
        imageSrc="https://via.placeholder.com/300x200"
        imageAlt="Project Image"
        title="Project Name"
        textContent="This is a description of the project."
      />
    </div>
  );
};

export default Home;
