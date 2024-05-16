import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App overflow-hidden">
      <Header/>
      <Home/>
      <footer className="premium-footer">
  <h1 className="banner-heading mb-5">About Our Developer</h1> <hr/>
  <p className='lead'>Website Created and maintained by Bhaskar Antony. Enhancing your online experience and services.</p>
  <p className='lead'><span className='g-text'>Contact: </span> +91 9606729320 | <span className='g-text'>Emai: </span>: bhaskarbabu6@gmail.com</p>
  <p className='lead'>We're your go-lto destination for website development and maintenance services. Whether you're a small business, a startup, or an individual, we've got the expertise to craft stunning websites that drive results. From responsive design to SEO optimization and social media integration, we offer affordable, custom solutions tailored to your needs. With personalized support and dedication to your satisfaction, we're here to help you elevate your online presence.</p>
  <button className="my-btn fs-5">Click for Your Own Website</button>
</footer>

      <footer className="text-center bg-dark text-white p-3">
       <p>Copyright@2024 | All rights Reserved</p>
      </footer>

    </div>
  );
}

export default App;
