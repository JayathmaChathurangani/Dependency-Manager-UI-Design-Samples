import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Version ${i}`} />);
}

export default class DropDownMenuLongMenuExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
    <div>
      <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange} label="SelectVersion">
        {items}
      </DropDownMenu>
     </div>
    );
  }
}

