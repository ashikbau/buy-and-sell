import React from 'react';
import keylogo from '../../assets/keylogo.png'

const Footer = () => {
    return (
        <footer className="footer p-32 bg-primary text-white mt-10">
            <div>
                <img className='w-1/2 h-1/3' src={keylogo} alt="" />
                <p>buy-sell<br/>Providing reliable experience since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href="/"className="link link-hover">Branding</a>
                <a href="/"className="link link-hover">Design</a>
                <a href="/"className="link link-hover">Marketing</a>
                <a href="/"className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/"className="link link-hover">About us</a>
                <a href="/"className="link link-hover">Contact</a>
                <a href="/"className="link link-hover">Jobs</a>
                <a href="/"className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/"className="link link-hover">Terms of use</a>
                <a href="/"className="link link-hover">Privacy policy</a>
                <a href="/"className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;