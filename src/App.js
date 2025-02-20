import './App.css';

function App() {
  return (
    <div className="App">
      <div className="banner-top">
        <a href="/"> {/*Check if it crashes when uploaded to GitHub Pages*/}
          <h1 className="titel">Ronyas</h1>
          <h1 className="titel">Restaurang</h1>
        </a>
      </div>

      <nav>
        <div id="nav-top">
          <button className="hamburger" aria-label="öppna meny">&#9776;</button>
        </div>
        <div className="nav-top">
          <ul>
            <li><a href="#meny">Meny</a></li>
            <li><a href="#öppettider">Öppettider</a></li>
            <li><a href="#dagens">Dagens</a></li>
            <li><a href="#hitta-hit">Hitta hit</a></li>
            <li><a href="#om-oss">Om oss</a></li>
          </ul>
        </div>
      </nav>
      <video autoPlay loop muted>
        <source src="Js/pizza-video.mp4" type="video/mp4"/>
          Din webbläsare stödjer inte videoformat.
      </video>

      <section id="meny">
        <h2 className="meny">Meny</h2>
        <h2>Pizza</h2>
        <div className="item">
          <h3>Margherita</h3>
          <p>Tomatsås och ost</p>
          <p className="price">114 kr</p>
        </div>
        <div className="item">
          <h3>Vesuvio</h3>
          <p>Tomatsås, ost och skinka</p>
          <p className="price">119 kr</p>
        </div>
        <div className="item">
          <h3>Kebabpizza</h3>
          <p>Tomatsås, ost, kebab, lök, tomater, pepperoni och orientsås</p>
          <p className="price">130 kr</p>
        </div>
        <div className="item">
          <h3>Capricciosa</h3>
          <p>Tomatsås, ost, skinka och champinjoner</p>
          <p className="price">119 kr</p>
        </div>
        <div className="showmore">
          <p className="more">Visa mer &#x25BC;</p>
        </div>
        <h2>Inbakade pizzor</h2>
        <div className="item">
          <h3>Calzone</h3>
          <p>Tomatsås, ost och skinka</p>
          <p className="price">124 kr</p>
        </div>
        <div className="showmore">
          <p className="more">Visa mer &#x25BC;</p>
        </div>
        <h2>Grill</h2>
        <div className="item">
          <h3>Grillbiff</h3>
          <p>Serveras med pommes frites och persiljesmör</p>
          <p className="price">163 kr</p>
        </div>
        <div className="showmore">
          <p className="more">Visa mer &#x25BC;</p>
        </div>
        <h2 className="meny">Fler kategorier kommer i samband med JS</h2>
      </section>
      <section id="öppettider">
        <h2 className="meny">Öppettider</h2>
        <h2 className="days">Måndag: 10:00 - 21:00</h2>
        <h2 className="days">Tisdag: 10:00 - 21:00</h2>
        <h2 className="days">Onsdag: 10:00 - 21:00</h2>
        <h2 className="days">Torsdag: 10:00 - 21:00</h2>
        <h2 className="days">Fredag: 10:00 - 22:00</h2>
        <h2 className="days">Lördag: 11:00 - 22:00</h2>
        <h2 className="days">Söndag: 11:00 - 21:00</h2>

        <h2>Ring och Beställ</h2>
        <h2>090 - 12 99 12</h2>
      </section>
      <section id="dagens">
        <h2 className="meny">Dagens</h2>
        <h3>Finns via UmeåLunchGuiden</h3>
        <img src="Js/pizza-photo.jpg" alt="Närbild av pizza"/>
      </section>
      <section id="hitta-hit">
        <h2 className="meny">Hitta hit</h2>
        <img src="Js/google-maps.png" alt="Karta, Skolgatan 65F Umeå"/>
      </section>
      <section id="om-oss">
        <h2 className="meny">Om oss</h2>
        <div className="blue">
          <p>
            Ronyas Restaurang på Vasaplan erbjuder bästa service och mat av hög kvalite. Kom och njut av våra rätter
            tillsammans med ett glas öl, vin eller cider.
          </p>
          <p>
            Varm buffe även tilgänglig på helger.
          </p>
          <p>
            När du besöker Ronyas Restaurang bemöts du av vänlig personal i våra fräscha lokaler. Vår mälsättning är
            att alla våra rätter ska lämpa sig både för att avnjutas direkt i våra lokaler eller tas med. Dessutom
            strävar vi efter att våra rätter ska passa alla åldrar vid alla tillfällen.
          </p>
          <p>
            Har ni speciella önskemål vid beställning gör vi allt för att hjälpa er.
          </p>
          <p>
            Välkomna!
          </p>
        </div>
      </section>
      <div className="banner-bot">
        <div className="footer-section">
          <h2 className="footer">
            Ronyas Restaurang
          </h2>
          <h3 className="footer">
            Skolgatan 65F
          </h3>
          <h3 className="footer">
            Vasaplan Umeå
          </h3>
        </div>
        <div className="footer-section">
          <h2 className="footer">
            Kontakta oss
          </h2>
          <h3 className="footer">
            Telefon: 090 - 12 99 12
          </h3>
        </div>
        <div className="footer-section">
          <h4 className="footer">
            ©2025 Ronyas Restaurang
          </h4>
        </div>
        <div className="footer-section">
          <a href="https://github.com/samosk/webtek/tree/main/Basic" target="_blank" rel='noreferrer'><img src="Js/github-mark-white.png" alt="GitHub Logga" className="github-logo"/></a>
        </div>
      </div>
    </div>
  );
}

export default App;
