import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <a href="#hero" className="logo clr-transition">eCream</a>
        <nav className="navbar">
          <ul className="nav-items">
            <li className="nav-item"><a href="#hero" className="nav-link clr-transition">Home</a></li>
            <li className="nav-item"><a href="#products" className="nav-link clr-transition">Product</a></li>
            <li className="nav-item"><a href="#about" className="nav-link clr-transition">About</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link clr-transition">Contact</a></li>
          </ul>
          <div className="social-links">
            <ul>
              <li><i className='bx bxl-instagram nav-icon clr-transition'></i></li>
              <li><i className='bx bxl-twitter nav-icon clr-transition'></i></li>
              <li><i className='bx bxl-facebook nav-icon clr-transition'></i></li>
            </ul>
            <span className="line-divider clr-transition"></span>
            <div className="theme-togglers">
              <i className='bx bxs-sun theme-toggler clr-transition'></i>
              <i className='bx bxs-moon theme-toggler clr-transition'></i>
            </div>
          </div>
        </nav>
        <div className="menu-togglers">
          <i className="bx bx-menu menu-toggle clr-transition"></i>
        </div>
      </header>
      <main id="hero" className="main">
        <section className="section section-one">
          <div className="container hook-container">
            <h1 className="hook-title clr-transition">Real ice cream for real ice cream lovers</h1>
            <h2 className="hook-sub_title clr-transition">Sweet ice cream for pleasure seekers.</h2>
            <div className="hero-btns-container">
              <button className="button btn-hero btn-primary buy-hero-btn"><i className="bx bx-cart in-btn-icon"></i> BUY ONLINE</button>
              <button className="button btn-hero btn-second-alt"><i className="bx bx-map in-btn-icon"></i> FIND IN STORE</button>
            </div>
          </div>
        
          <img src="https://raw.githubusercontent.com/r-e-d-ant/eCream/master/assets/images/hero-woman.png" alt="woman licking ice cream and smiling" className="hero-lady-img"/>
        </section>

        <section id="products" className="section section-two container">
          <div className="s-two-upper-info">
            <h2 className="s-two-slogan">We Pride Ourselves On Exceptional Flavors.</h2>
            <p className="s-two-definition s-definition">
              The nearly -200 °C (-328 °F) liquid freezes the ingredients—sweet cream, flavoring, and handpicked mix-ins—almost instantaneously, creating tiny ice crystals and a smooth texture.
            </p>
          </div>
          <div className="s-two-products">
            <div className="product product-one">
              <h3 className="price pos-abs-center">$7</h3>
              <img src="https://raw.githubusercontent.com/r-e-d-ant/eCream/master/assets/images/product1.png" alt="ice cream with honey" loading="lazy"/>
              <h3 className="buy-btn pos-abs-center">BUY</h3>
              <h3 className="name pos-abs-center">Ice cream <b>honey</b></h3>
            </div>
            <div className="product product-two">
              <h3 className="price pos-abs-center">$5</h3>
              <img src="https://raw.githubusercontent.com/r-e-d-ant/eCream/master/assets/images/product2.jpg" alt="choco delight" loading="lazy"/>
              <h3 className="buy-btn pos-abs-center">BUY</h3>
              <h3 className="name pos-abs-center">Choco <b>delight</b></h3>
            </div>
            <div className="product product-three">
              <h3 className="price pos-abs-center">$15</h3>
              <img src="https://raw.githubusercontent.com/r-e-d-ant/eCream/master/assets/images/product3.png" alt="carnival strawberry" loading="lazy"/>
              <h3 className="buy-btn pos-abs-center">BUY</h3>
              <h3 className="name pos-abs-center">Carnival <b>strawberry</b></h3>
            </div>
          </div>
        </section>

        <section className="section section-three container">
          <div className="s-three-upper-img-container">
            <img src="https://raw.githubusercontent.com/r-e-d-ant/eCream/master/assets/images/product4.png" alt="product image" loading="lazy"/>
          </div>
          <div className="s-three-lower-container">
            <h3 className="s-three-title">Stress out? Try eating our ice cream.</h3>
            <p className="s-three-desc s-definition">The nearly -200 °C (-328 °F) liquid freezes the ingredients—sweet cream, flavoring, and handpicked mix-ins—almost instantaneously, creating tiny ice crystals and a smooth texture.</p>
            <span className="s-three-price">$12</span>
            <button className="button ad-buy-btn">Buy Now</button>
          </div>
        </section>

      
      </main>
      <footer id="contact" className="footer container">
        <h2 className="footer-title">Contact</h2>
        <form className="contact-form">
          <div className="name-email-inputs-container">
            <div className="form-control">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" className="normal-input all-input"/>
            </div>
            <div className="form-control">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" id="email" className="normal-input all-input"/>
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="message" className="form-label">Message</label>
            <div contentEditable="true" id="message" className="textarea-input all-input"></div>
          </div>
          <button type="submit" className="send-msg-btn button ad-buy-btn">SEND</button>
        </form>

        <div className="other-footer-infos-container">
          <span className="footer-info"><i className="bx bx-map"></i>ADDRESS:BIT</span>
          <span className="footer-info"><i className="bx bx-phone"></i> 801*******</span>
          <span className="footer-info"><i className="bx bx-mail-send"></i> eCream@.com</span>
          <div className="footer-social-links">
            <ul>
              <li><i className='bx bxl-instagram-alt nav-icon clr-transition'></i></li>
              <li><i className='bx bxl-twitter nav-icon clr-transition'></i></li>
              <li><i className='bx bxl-facebook-square nav-icon clr-transition'></i></li>
            </ul>
          </div>
        </div>
        <div className="lower-footer">
          <span className="lower-footer-elt copy">copyright © 2022 eCream</span>
          <span className="lower-footer-elt developer">Developed by Chaithanya.P</span>
          <span className="lower-footer-elt policy"><a href="#" className="policy-link">Privacy • Policy</a></span>
        </div>
      </footer>
    </div>
  );
}

export default App;
