import './about.css';
import UserClass from './ClassUser';

const About = () => {
  return (
    <div className="about-us">
      <UserClass name="Ravi Kumar" location="Bengaluru"/>
      <h1>About Us</h1>
      <p>
        Welcome to [Your Website Name], your one-stop destination for ordering
        delicious meals from the best local restaurants. We are passionate about
        bringing people together through the joy of food, offering a seamless
        and enjoyable online ordering experience.
      </p>

      <h2>Our Mission</h2>
      <p>
        At [Your Website Name], our mission is simple: to make great food
        accessible to everyone, anywhere, and at any time. We believe that food
        is not just sustenance—it's a way to connect, celebrate, and share
        moments with loved ones. Whether you're craving a quick bite or planning
        a feast, we've got you covered.
      </p>
      <h2>Join Us</h2>
      <p>
        Whether you're a foodie, a busy professional, or a family looking for
        dinner solutions, [Your Website Name] is here to serve you. Browse our
        menu, place your order, and let us handle the rest. Your next delicious
        meal is just a few clicks away!
      </p>
    </div>
  );
};

export default About;
