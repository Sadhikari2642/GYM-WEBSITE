import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Join our top workout sessions designed to push your limits and help you achieve your fitness goals. From cardio to strength training, we have it all.
          Whether you are a beginner or an experienced athlete, our sessions are tailored to meet your needs. 
          Sign up today and start your journey towards a healthier, stronger you!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Discover our featured bootcamps that offer a mix of high-intensity training and fun activities. Perfect for those looking to challenge themselves in a group setting.
          Each bootcamp is led by experienced trainers who will motivate and guide you through every workout.
          Don't miss out on the camaraderie and support from fellow participants—join a bootcamp today!
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Bootcamp</h4>
            <p>
              Experience the intensity of our HIIT Bootcamp. Burn calories and build muscle with our expert trainers.
              Each session is packed with high-energy exercises that will keep you moving and sweating.
              Perfect for those who want a quick and effective workout.
            </p>
          </div>
          <div>
            <h4>Strength & Conditioning</h4>
            <p>
              Improve your strength and overall fitness with our Strength & Conditioning bootcamp. Suitable for all fitness levels.
              Focus on building muscle, improving endurance, and enhancing overall athletic performance.
              Our trainers will help you master the proper techniques to maximize your results.
            </p>
          </div>
          <div>
            <h4>Cardio Blast</h4>
            <p>
              Get your heart pumping and burn fat with our Cardio Blast bootcamp. A fun and energizing way to stay fit.
              Expect a mix of cardio exercises that will keep your heart rate up and your body moving.
              Ideal for those looking to lose weight and improve cardiovascular health.
            </p>
          </div>
          <div>
            <h4>Yoga Fusion</h4>
            <p>
              Blend the tranquility of yoga with the benefits of strength training in our Yoga Fusion bootcamp. Ideal for enhancing flexibility and core strength.
              Enjoy a balanced workout that combines stretching, strengthening, and relaxation.
              Suitable for all levels, from beginners to advanced practitioners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
