import React from 'react';
import './styles/Landing.css'

const Landing = () => (
  
        <section className="landing">
          <h1 className="hero-title">Turn the music up!</h1>
        <img className="background" src="https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?cs=srgb&dl=audience-backlit-band-154147.jpg&fm=jpg"></img>
        <div className="layoutBackground">
        <section className="selling-points">
        <div className="container">
          <div className="row"> 
            <div className="col-md-4">
              <h2 className="point-title">Choose your music</h2>
              <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
            </div>
            <div className="col-md-4">
              <h2 className="point-title">Unlimited, streaming, ad-free</h2>
              <p className="point-description">No arbitrary limits. No distractions.</p>
            </div>
            <div className="col-md-4">
              <h2 className="point-title">Mobile enabled</h2>
              <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
            </div>
          </div>
        </div>
        </section>
        </div>
      </section>
);

export default Landing;