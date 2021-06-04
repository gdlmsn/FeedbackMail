import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Input, Menu } from 'semantic-ui-react';



export const Header = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => {
    setActiveItem({ activeItem: name });
  };

  const user = useSelector((state) => state.auth.user);
  // const dispatch = useDispatch();

  // handleInputChange = (event) =>{
       
  // }
  
  return (
    <>
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...'/>
          </Menu.Item>
          {user ? (
             <a href="/api/logout">
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
            /></a>
          ) : (
           <a href="/auth/google"><Menu.Item
              name='login with google'
              active={activeItem === 'login'}
              
            /></a>
          )}
        </Menu.Menu>
      </Menu>
    </>
  );
};
