import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Input, Menu } from 'semantic-ui-react'
import { Component } from 'react'



 class NavBar extends Component{
  state = { activeItem: 'home' }

  handleItemClick = (e, { ReaderList}) => this.setState({ activeItem: ReaderList })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'ReaderList'} onClick={this.handleItemClick} />
        {/* <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} /> */}
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}






// const NavStyle = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100vw;
//   padding: 15px 2.5vw;
//   background: palevioletred;



// const NavBar = () => {

//   return (
//     <NavStyle>
//       <h1>Reading Bee</h1>
//       <div>
//         <div><Link to="/">All Readers</Link></div>
//        {/* <div><Link to="/reader/3">Reading Bee</Link></div> */} 
     
      
//       </div>
//     </NavStyle>
//   )
// }

export default NavBar;