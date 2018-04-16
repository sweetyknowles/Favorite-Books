import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Input, Menu } from 'semantic-ui-react'
import { Component } from 'react'


const CustomMenu = styled(Menu)`
  &&&& {
    background: orange;
  }
`

 class NavBar extends Component{
  state = { activeItem: 'home' }

  handleItemClick = (e, { ReaderList}) => this.setState({ activeItem: ReaderList })

  render() {
    const { activeItem } = this.state

    return (
      <CustomMenu secondary>
        <Menu.Item name='home' as={Link} to="/" active={activeItem === 'ReaderList'} onClick={this.handleItemClick} />
        {/* <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} /> */}
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </CustomMenu>
    )
  }
}








export default NavBar;