import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import { Link } from 'react-router';
import './sidebar.scss';
import menus from './const';

// 菜单集合
const { SubMenu, Item } = Menu; 

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo"></div>
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={['1']}
        >
          {
            (menus || []).map((menu, index) => {
              return this.renderMenu(menu);
            })
          }
        </Menu>
      </div>
    );
  }

  renderMenu(menu) {
    return menu.children && menu.children.length > 0 ? this.renderMenuHaveChildren(menu) : this.renderMenuNoChildren(menu);
  }
  
  // 读取主菜单和子菜单
  renderMenuHaveChildren(menu) {
    return (
      <SubMenu key={menu.key} title={<span><Icon type={menu.iconType} />{menu.name}</span>} >
        {
          menu.children.map((childMenu) => {
            return (
              <Item key={childMenu.key}>
                <Link to={childMenu.link}>{childMenu.name}</Link>
              </Item>
            )
          })
        }
      </SubMenu>
    )
  }

  renderMenuNoChildren(menu) {
    return (
      <Item key={menu.key}>
        <Link to={menu.link}><Icon type={menu.iconType} />{menu.name}</Link>
      </Item>
    )
  }
}

export default Sidebar