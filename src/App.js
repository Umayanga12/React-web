import logo from './logo.svg';
import './App.css';
import Navbar from './componant/Nav-bar/Nav-bar';
import BasicExample from './componant/Nav-bar/Nav-bar';
import KitchenSinkExample from './componant/Card/Card';
import Contact from './componant/Pages/Contact';
import About from './componant/Pages/About';
import BackgroundVideo from './home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <div>
        <BackgroundVideo/>
      </div>
     <h1 className='servies'>Our Services</h1>
      <div className='card-container'>
        <KitchenSinkExample title="Wide Range of Phones" discription="We provide a diverse selection of the latest smartphones from top brands, ensuring you have access to the best and most innovative devices on the market."/>
        <KitchenSinkExample title="Expert Advice" discription="Our team of knowledgeable experts is ready to assist you in finding the perfect phone that suits your needs, preferences, and budget."/>
        <KitchenSinkExample title="Phone Accessories" discription="Enhance your mobile experience with our range of high-quality accessories, including cases, screen protectors, chargers, and more."/>
        <KitchenSinkExample title="Trade-In and Upgrade" discription="Trade in your old device for credit towards a new purchase, making upgrading to the latest technology even more affordable."/>
      </div>
      <div className='card-container'>
        <KitchenSinkExample title="Device Financing" discription="We offer flexible financing options to help you get the phone you want without breaking the bank, with convenient monthly payment plans."/>
        <KitchenSinkExample title="Warranty and Protection Plans" discription="Protect your investment with extended warranty and protection plans, ensuring peace of mind against accidental damage, malfunctions, and more."/>
        <KitchenSinkExample title="Unlocked Phones" discription="Enjoy the freedom of choosing your carrier with our selection of unlocked phones, giving you the flexibility to switch providers as needed."/>
        <KitchenSinkExample title="Online Shopping Convenience" discription="Browse, compare, and purchase your desired phone and accessories from the comfort of your own home through our user-friendly online store."/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
