import React, { useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

export const Header = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => {
    setActiveItem({ activeItem: name });
  };

  const user = useSelector((state) => state.auth.user);
  console.log(user);
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
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          {user ? (
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={handleItemClick}
            />
          ) : (
            <Menu.Item
              name='login with google'
              active={activeItem === 'login'}
              // onClick={()=> dispatch(actions.logout())}
            />
          )}
        </Menu.Menu>
      </Menu>
    </>
  );
};
