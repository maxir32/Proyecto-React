/*import './Footer.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

const Footer = () => {
    return (
        <div className="footer">
            <ul className="contact-info">
                <li><i className="fas fa-map-marker-alt"></i> Lavalle 40 - 1°Piso - San Salvador de Jujuy</li>
                <li><i className="fas fa-phone"></i> (388) 4211659</li>                
            </ul>
            <div className="social-icons">
                <a target="_blank" rel="noreferrer" href="https://wa.me/+543884211659"><i className="fab fa-whatsapp"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/kalem_terapia_formacion/"><i className="fab fa-instagram"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100080691285115"><i className="fab fa-facebook"></i></a>
            </div>
        </div>
    );
};

export default Footer;

const rootElement = document.getElementById('footer');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<Footer />);
}*/

import React from 'react';
import { Whatsapp, Facebook , Instagram } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="tarjetascorreos">
                    <div>
                        <img src="/images/footer-tarjetas.png" alt="Métodos de pago" />
                    </div>                    
                </div>
                <div className="footerKalem">Lavalle 40 - 1°Piso - San Salvador de Jujuy</div>
                <div className="accesoalpanel">                    
                    <a href="https://wa.me/+543884211659" target="_blank" rel="noopener noreferrer"><Whatsapp/></a>  
                    <a href="https://www.facebook.com/profile.php?id=100080691285115" target="_blank" rel="noopener noreferrer"><Facebook/></a>                  
                    <a href="https://www.instagram.com/kalem_terapia_formacion/" target="_blank" rel="noopener noreferrer"><Instagram/></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer