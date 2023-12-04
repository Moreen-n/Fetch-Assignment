import React from 'react';

export default async function Dogs() {
  // Send a request to get some dog images
  const response = await fetch("https://dog.ceo/api/breeds/image/random/10");
  const info = await response.json();
  const dogs = info.message; // Correct path to the array of dog images
  console.log(info);

  return (
    <div>
      <h3>Dogs</h3>
      <p>
        Here's an API to fetch 10 random dog images:{" "}
        <a href="https://dog.ceo/api/breeds/image/random/10" target="_blank">
          images: https://dog.ceo/api/breeds/image/random/10
        </a>
      </p>
      <div className="image-container">
        {dogs.map((dog, index) => (
          <img className="pics" key={index} src={dog} alt={`Dog ${index}`} />
        ))}
      </div>
      <br></br>
      <br></br>
      <hr></hr>
    </div>
  );
}
