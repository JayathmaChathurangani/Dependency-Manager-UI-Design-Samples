import React, { Component } from 'react';
import './App.css';
import Header from './Components/Layouts/Header';
import LeftSideBar from './Components/Layouts/LeftSideBar';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Home from 'material-ui/svg-icons/action/home';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {pink500,blue500,grey900, yellow600} from 'material-ui/styles/colors';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Avatar from 'material-ui/Avatar';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import { Link } from 'react-router';
import logo from './Images/wso2logo.jpg';

class App extends Component {

    constructor(props){
            super(props)
            this.state = {open: false}
            this.handleToggle = this.handleToggle.bind(this)
          }

      handleToggle() {
        this.setState({open: !this.state.open})
      }

    render() {
        const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

        if (this.state.open) {
          contentStyle.marginLeft = 256;
        }

         const muiTheme = getMuiTheme({
                 palette:
                     {
                       primary1Color: '#000000',
                     },
                 appBar: {
                    height: 80,
                    position: "fixed",

                 },
               });
         const styles = {
           title: {
             cursor: 'pointer',
             fontSize:'72px'
           },
         };

        return (
             <div>
             <MuiThemeProvider muiTheme={muiTheme}>
                <div className="App">
                            <div style={{textAlign:'left'}}>
                                <AppBar
                                   onLeftIconButtonTouchTap={this.handleToggle}

                                   title='Dependency Manager'
                                    iconElementRight={<img style={{width: 200, height: 90}} src ={logo}/>}
                                    zDepth = "5"

                                   >
                                </AppBar>
                             </div>
                            <div>

                             <Drawer
                               type="persistent"
                               docked={false}
                               open={this.state.open}
                               onRequestChange={(open) => this.setState({open})}
                               containerStyle={{height: 'calc(100% - 64px)', top: 110}}
                               >
                             <div>
                             <List>
                               <ListItem
                                primaryText="Home"
                                leftAvatar={<Avatar icon={<Home />} backgroundColor={pink500} />}
                                containerElement={<Link to="/" />}
                                />
                               <ListItem
                                 primaryText="View By"
                                 leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                                 initiallyOpen={false}
                                 primaryTogglesNestedList={true}
                                 nestedItems={[
                                   <ListItem
                                     key={1}
                                     primaryText="Product"
                                     leftIcon={<ActionGrade />}
                                     containerElement={<Link to="/viewbyproduct" />}
                                   />,
                                   <ListItem
                                    key={2}
                                    primaryText="Library"
                                    leftIcon={<ActionGrade />}
                                    containerElement={<Link to="/viewbylibrary" />}
                                  />,
                                 ]}
                               />
                             </List>
                             </div>
                           </Drawer>
                            <div style={contentStyle}>
                                      {this.props.children}
                            </div>
                            </div>
                         </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
