import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Redeye from 'material-ui/svg-icons/image/remove-red-eye';

import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */


export default class ViewByProduct extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };



  render() {
    return (
      <div>
      <Paper zDepth={5}>

        <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader displaySelectAll={false}  adjustForCheckbox={false}>

            <TableRow>
              <TableHeaderColumn tooltip="The Library ID"style={{textAlign:'left',fontSize:'24px'}}>Library ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Library ID"style={{textAlign:'left',fontSize:'24px'}}>Library Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Group ID" style={{textAlign:'left',fontSize:'24px'}}>GroupID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Artifact ID" style={{textAlign:'left',fontSize:'24px'}}>ArtifactID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Current Version" style={{textAlign:'left',fontSize:'24px'}}>Current Version</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Latest Version" style={{textAlign:'left',fontSize:'24px'}}>Latest Version</TableHeaderColumn>
              <TableHeaderColumn ></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
            displayRowCheckbox={ false }
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}  >
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn></TableRowColumn>
                <TableRowColumn><Chip>Current Version</Chip></TableRowColumn>
                <TableRowColumn><Chip backgroundColor='#F50057'>Latest Version</Chip></TableRowColumn>
                <TableRowColumn><RaisedButton label="Dependency Heirarchy"
                                primary={true} labelPosition="before"
                                icon={<Redeye />}/></TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>

            </TableRow>
          </TableFooter>
        </Table>


        </div>

        </Paper>
      </div>
    );
  }
}