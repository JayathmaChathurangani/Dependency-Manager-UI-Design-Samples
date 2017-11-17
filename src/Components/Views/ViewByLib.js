import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import LibraryTable from '../Tables/ViewByLib';
import DropDownVersion from '../DropDowns/DropDownVersion';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import Redeye from 'material-ui/svg-icons/image/remove-red-eye';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Dialog from 'material-ui/Dialog';
import DTreeDialog from '../Dialogs/DTreeDialog';
import logo from './WSO2_Logo.png';
import Hello from '../Layouts/Hello';
const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const customContentStyle = {

    width: '100'
};

export default class ViewByLib extends Component {


    state = {
      searchText: '',
       open: false,
    };

    handleUpdateInput = (searchText) => {
      this.setState({
        searchText: searchText,
      });
    };


      handleOpen = () => {
        this.setState({open: true});
      };

      handleClose = () => {
        this.setState({open: false});
      };

  render() {

    const actions = [
          <RaisedButton
            label="Close"
            primary={true}
            onClick={this.handleClose}
          />,

        ];


    return (
      <div>


        <div></div>
        <div><Card>
                 <CardTitle title="View By Library" subtitle="Here products are displayed according to the Library Used" />
               </Card>
        </div>
        <div>
        <AutoComplete
              floatingLabelText="Search  Library"
              searchText={this.state.searchText}
              onUpdateInput={this.handleUpdateInput}
              filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
              dataSource={colors}

            />
        <DropDownVersion />
        </div>
        <div>
            <Toolbar>
                    <ToolbarGroup firstChild={false}>
                         <ToolbarTitle text="**Library Name" />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarTitle text="Current Version :" />
                        <Chip backgroundColor='#FFFF00'>#Version</Chip>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarTitle text="Latest Version :" />
                        <Chip backgroundColor='#F50057'>#Version</Chip>
                        <ToolbarSeparator />
                        <RaisedButton label=" View Dependency Heirarchy"
                                    primary={true} labelPosition="before"
                                    icon={<Redeye />}
                                    onClick={this.handleOpen}
                                   >

                        </RaisedButton>
                        <Dialog
                                 fullScreen
                                  title="Dependency Heirarchy"
                                  actions={actions}
                                  modal={true}
                                  open={this.state.open}
                                  onRequestClose={this.handleClose}
                                  contentStyle={customContentStyle}
                                  autoScrollBodyContent={true}
                                >
                                <div>
                                    <Hello />
                                    </div>
                                <img style={{width: 1000, height: 1000}} src ={logo}/>

                                </Dialog>
                    </ToolbarGroup>
            </Toolbar>
        </div>
        <div>
            <LibraryTable />
        </div>
      </div>
    );
  }
}