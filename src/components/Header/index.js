import "./style.css";
import Modal from 'react-modal'
 import React from 'react';
// import ReactDOM from 'react-dom';
import {Link,NavLink} from 'react-router-dom';



function Header() {

const customStyles = {
  content: {
    top: '0',
    // left: '',
    right: '0',
    
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <header className="headerdiv">
      <nav>
        <div>
          <img
            src="http://demos.codexcoder.com/labartisan/html/maxino/assets/images/logo/logo.gif"
            alt="logo"
          />
        </div>
        <ul>
           <li><NavLink to = '/'> Home </NavLink></li>
           <li><NavLink  to = '/aboutme'> About Me </NavLink></li>
           <li><NavLink to = '/resume'> Resume </NavLink></li>
           <li><NavLink to = '/services'> Services </NavLink></li>
           <li><NavLink to = '/portfolio'> Portfolio </NavLink></li>
           <li><NavLink to ='/pricing'> Pricing </NavLink></li>
           <li><NavLink to ='/clients'> Clients </NavLink></li>
           <li><NavLink to ='/blog'> Blog </NavLink></li>
           <li><NavLink to ='contact'> Contact </NavLink></li>
        </ul>
       
        <div className="navbarimgdiv">
        <button onClick={openModal}>
          <img
            className="navbarimg"
            src="https://w7.pngwing.com/pngs/117/74/png-transparent-hamburger-button-business-menu-computer-icons-horizontal-line-angle-company-text-thumbnail.png"
            alt="logo"
          /></button>
        </div>
      </nav>
     <div>
     
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
        <button onClick={closeModal}>X</button>
        </h2>
        
        <ul>
           <li><Link to = '/'>Home</Link></li>
           <li><Link to = '/aboutme'>About Me</Link></li>
           <li><Link to = '/resume'>Resume</Link></li>
           <li><Link to = '/services'>Services</Link></li>
           <li><Link to = '/portfolio'>Portfolio</Link></li>
           <li><Link to ='/pricing'>Pricing</Link></li>
           <li><Link to ='/clients'>Clients</Link></li>
           <li><Link to ='/blog'>Blog</Link></li>
           <li><Link to ='contact'>Contact</Link></li>
        </ul>
      </Modal>
    </div>
    </header>
  );
}
export default Header;
