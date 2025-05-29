import React, { useCallback, useState, memo } from 'react';
import './App.scss';
import LogoIcon from './assets/images/logoIcon.svg';
import LogoText from './assets/images/logoText.svg';
import Rocket from './assets/images/rocket.svg';

const useMenuItems = () => {
  const [menuItems] = useState([
    { id: 0, name: 'Home', link: '#', isIcon: false },
    { id: 1, name: 'Products', link: '#', isIcon: false },
    { id: 2, name: 'Cart', link: '#', isIcon: true },
  ])

  return { menuItems }
}

const useOffers = () => {
  const [offers] = useState([
    { id: 0, title: 'Move the borders of reality!', text: "Go on a space adventure - it's possible with us!", modifier: 'move' },
    { id: 1, title: 'Space is not just stars and planets', text: 'It is a majestic journey to explore.', modifier: 'space' },
    { id: 2, title: 'For those who dream of stars', text: 'Our offer: make your dream come true.', modifier: 'stars' },
    { id: 3, title: 'Fulfill your fantastic dreams', text: 'Space has never been so close.', modifier: 'dreams' },
  ])

  return { offers }
}

const MenuItem = memo(({ item }) => {
  return (
    <li className={`navigation__item ${item.isIcon ? 'navigation__symbol' : ''}`}>
      <a
        href={item.link}
        className={item.isIcon ? 'navigation__symbol-link' : 'navigation__item-link'}
      >
        <span className={item.isIcon ? 'navigation__symbol-text' : 'navigation__text'}>
          {item.name}
        </span>
        {item.isIcon && (
          <div className={`navigation__symbol-icon navigation__symbol-icon--${item.name.toLowerCase()}`}></div>
        )}
      </a>
    </li>
  )
})

const MenuItems = memo(() => {
  const { menuItems } = useMenuItems()
  return (
    <>
      {menuItems.map(item => <MenuItem key={item.id} item={item} />)}
    </>
  )
})

const Menu = memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onClickMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen])

  return (
    <div className="menu">
      <button
        className={`menu__icon ${menuOpen ? 'menu__icon--active' : ''}`}
        onClick={onClickMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navigation ${menuOpen ? 'navigation--open' : ''}`}>
        <ul className="navigation__list">
          <MenuItems />
        </ul>
      </nav>
    </div>
  )
})

const OffersItem = memo(({ item }) => (
  <li className={`offers__item offers__item--${item.modifier}`}>
    <article className="offers__article">
      <div className="offers__text-container">
        <h3 className="offers__item-title">{item.title}</h3>
        <p className="offers__item-text">{item.text}</p>
      </div>
      <button className="offers__item-button">Learn more</button>
    </article>
  </li>
))

const OffersItems = memo(() => {
  const { offers } = useOffers()
  return (
    <>
      {offers.map(offersItem => <OffersItem key={offersItem.id} item={offersItem} />)}
    </>
  )
})

const Offers = memo(() => (
  <section className="offers">
    <div className="container">
      <h2 className="offers__title">Offers</h2>
      <ul className="offers__list">
        <OffersItems />
      </ul>
    </div>
  </section>
))

const Header = memo(() => (
  <header className="header">
    <div className="header__container">
      <div className="header__logo">
        <img src={LogoIcon} alt="Logo" className="header__logo-icon" />
        <img src={LogoText} alt="Logo" className="header__logo-text" />
      </div>        
      <Menu />
    </div>
  </header>
))

const Hero = memo(() => (
  <section className="hero">
    <div className="hero__content">
      <div className="hero__info">
        <h1 className="hero__title">
          Discover the vast <br /> expanses of <span className="hero__highlight">space</span>
        </h1>
        <p className="hero__subtitle">
          Where the possibilities are <span className="hero__emphasis">endless!</span>
        </p>
        <button className="hero__button">Learn more</button>
      </div>
      <div className="hero__planet"></div>
    </div>
  </section>
))

const Journeys = memo(() => (
  <section className="journey">
    <div className="container">
      <div className="journey__content">
        <h2 className="journey__title">
          Embark on a space journey
        </h2>
        <input type="checkbox" id="toggle-text" className="journey__checkbox" />
        <p className="journey__text">
          Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
        </p>
        <label htmlFor="toggle-text" className="journey__link"></label>
      </div>
    </div>
  </section>
))

const Footer = memo(() => (
  <footer className="footer">
    <div className="footer__content">
      <img className="footer__rocket" src={Rocket} alt="Rocket" />
      <p className="footer__text">Exciting space adventure!</p>
    </div>
  </footer>
))

const Main = memo(() => (
  <main className="main">
    <Hero />
    <Offers />
    <Journeys />
  </main>
))

const App = memo(() => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
))

export default App