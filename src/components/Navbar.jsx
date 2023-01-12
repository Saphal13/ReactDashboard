import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChat, BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboard, MdKeyboardArrowDown, MdKeyboardReturn } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import {Cart,Chat,Notifications,UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider';


//React arrow fxn cmp with instant return fxn
//Navbutton is self close cmp
const NavButton = ({ title,customFunc,icon,color,dotColor}) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button type="button" onClick={customFunc}
            style={{color}}
            className="relative text-xl rounded-full p-3
            hover:bg-light-gray">
        
        <span style={{background: dotColor}}
            className="absolute inline-flex rounded-full
             h-2 w-2 right-2 top-2"/>
              {icon}
        </button>
    </TooltipComponent>
)

const Navbar = () => {

  const {activeMenu,setActiveMenu,
          isClicked,setisClicked,handleClick,
        screenSize,setScreenSize} = useStateContext();

    useEffect(() => {

        //determine screensize
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize',handleResize);

        handleResize();
        //after listening the event it is removed in react generally
        return ()=> window.removeEventListener('resize',handleResize);
    },[])

    useEffect(() => {
        if(screenSize <=900){
          setActiveMenu(false); //for small screen no sidebar display on loading
        }else{
          setActiveMenu(true);
        }
    },[screenSize]);


  return (
    <div className="flex justify-between p-2
          md:mx-6 relative">
        {/* Navbar
        //has fxnality to check whether the sidebar is open or not */}
        <NavButton title="Menu" customFunc={()=> {
          setActiveMenu((prevActiveMenu) => !prevActiveMenu)
        }} color="blue" icon={<AiOutlineMenu/>} />

        <div className='flex'>
          <NavButton title="Menu" 
            customFunc={() => handleClick('cart')} 
            color="blue" icon={<FiShoppingCart/>}
          />
          <NavButton title="Chat"
            dotColor="#03C907" 
            customFunc={() => handleClick('chat')} 
            color="blue" icon={<BsChatLeft/>}
          />
          <NavButton title="Notifications" 
            dotColor="#03C907" 
            customFunc={() => handleClick('notification')} 
            color="blue" icon={<RiNotification3Line/>}
          />

          <TooltipComponent
              content="Profile"
              position='BottomCenter'>
                <div className="flex items-center
                  gap-2 cursor-pointer p-1
                  hover:bg-light-gray"
                  onClick={()=> handleClick('userProfile')}
                  >
                    <img src={avatar}
                      className="rounded-full w-8 h-8"/>
                    <p>
                      <span className='text-gray-400 text-14'>Hi, </span> {' '}
                      <span className='text-gray-400 text-14 font-bold ml-1'>Saphal</span>
                      {/* Hi {' '} for space and name */}
                    </p>
                    <MdKeyboardArrowDown className='text-gray-400 text-14'/>
                </div>

          </TooltipComponent>

          {/*After these tooltip cmp icons in navbar Now the task is to make aware our contextProvider about these*/}
          {isClicked.chat && <Chat/>}
          {isClicked.cart && <Cart/>}
          {isClicked.notification && <Notifications/>}
          {isClicked.userProfile && <UserProfile/>}


        </div>


    </div>
  )
}

export default Navbar
