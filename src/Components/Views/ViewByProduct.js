import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ProductTable from '../Tables/ViewByProduct';
import DropDownVersion from '../DropDowns/DropDownVersion';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Chip from 'material-ui/Chip';

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

export default class ViewByProduct extends Component {

  state = {
      searchText: '',
    };

    handleUpdateInput = (searchText) => {
      this.setState({
        searchText: searchText,
      });
    };


  render() {
    return (
      <div>
        <div></div>
        <div><Card>
                 <CardTitle title="View By Product" subtitle="Here libraries are displayed according to the products" />
               </Card>
        </div>
        <div>
        <AutoComplete
              floatingLabelText="Search  Product"
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
                                 <ToolbarTitle text="**ProductName" />
                            </ToolbarGroup>
                            <ToolbarGroup>
                                <ToolbarTitle text="Version :" />

                                <Chip backgroundColor='#FFEB3B'>#Version</Chip>
                            </ToolbarGroup>
                    </Toolbar>
                </div>
        <div>
            <ProductTable />
        </div>
      </div>
    );
  }
}