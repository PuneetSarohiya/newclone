import React from 'react';
import './Footer.css';
import { ArrowDropDown, Language } from '@material-ui/icons';

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <div className='footer'>
      <div className='footer_contact' style={{color: '#fff'}}>Questions? Contact Us</div>
      <div className='footer_container'>
        <div>
        <a href='https://help.netflix.com/en/node/412' style={{textDecoration: 'none',}}><p style={{color: '#fff'}}>FAQ</p></a>
          <p style={{color: '#fff'}}>Investor Relations</p>
          <p style={{color: '#fff'}}>Privacy</p>
          <p style={{color: '#fff'}}>Speed Test</p>
        </div >
        <div>
          <p style={{color: '#fff'}}>Help Center</p>
          <p style={{color: '#fff'}}>Jobs</p>
          <p style={{color: '#fff'}}>Cookie Preferences</p>
          <p style={{color: '#fff'}}>Legal Notices</p>
        </div>
        <div>
          <p style={{color: '#fff'}}>Account</p>
          <p style={{color: '#fff'}}>Ways to Watch</p>
          <p style={{color: '#fff'}}>Corporate Informatioon</p>
          <p style={{color: '#fff'}}>Netflix Originals</p>
        </div>
        <div>
          <p style={{color: '#fff'}}>Media Center</p>
          <p style={{color: '#fff'}}>Terms of Use</p>
          <p style={{color: '#fff'}}>Contact Us</p>
        </div>
      </div>
      <div className='footer_language'>
        <button className='footer_button'>
          <Language /> <span style={{color: '#fff'}}>English</span> <ArrowDropDown />
        </button>
      </div>
      <div className='footer_country'>Netflix Kenya</div>
      <div className='footer_author'>
        
      </div>
    </div>
  );
};

export default Footer;
