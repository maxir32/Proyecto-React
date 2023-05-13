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