import React from "react";
import { TelephoneFill, Whatsapp, Facebook, Instagram } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

export default function Middle() {
    

    return (
        <>
            <div className="middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 middle__logo">
                            <Link to="/"><img src="/images/logo.png" alt="Logo" /></Link>
                        </div>
                        <div className="col-md-8 middle__searchbar">
                            <div className="middle__searchbar__contact">
                                <a href="tel:03884211659">
                                    <TelephoneFill /> <span>0388 15-4211-659</span>
                                </a>
                                <a href="https://wa.me/+543884211659" target="_blank" rel="noopener noreferrer">
                                    <Whatsapp /> <span>3884211659</span>
                                </a>                                
                                <a href="https://www.facebook.com/profile.php?id=100080691285115" target="_blank" rel="noopener noreferrer">
                                    <Facebook /> <span>Kalem Terapéutico Formación</span>
                                </a>
                                <a href="https://www.instagram.com/kalem_terapia_formacion/" target="_blank" rel="noopener noreferrer">
                                    <Instagram /> <span>Kalem Terapia Formación</span>
                                </a>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}