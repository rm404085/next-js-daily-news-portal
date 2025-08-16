"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const MobileMenu = () => {

  const [isMenuOpen, setIsMenuOpen ] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>

  <div>
     <Button onClick={toggleMenu} >
            {
              isMenuOpen ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
            }

          </Button>
  </div>
  </>
  )
}

export default MobileMenu;