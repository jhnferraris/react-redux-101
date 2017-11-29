import React, { Component, PropTypes} from 'react';
import { Paper, TextField, SelectField, MenuItem, RaisedButton} from 'material-ui';

const defaultStyle = {
  padding: 20
};

export default class CreateFaqForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      faqType: "hr"
    };
  }

  handleFaqTypeChange = (event, index, faqType) => this.setState({faqType});

  render() {
    return (
      <Paper style={defaultStyle}>
        <TextField hintText="FAQ Title"/>
        <br/>
        <SelectField
          floatingLabelText="FAQ Type"
          value={this.state.faqType}
          onChange={this.handleFaqTypeChange}
        >
          <MenuItem value={"hr"} primaryText="HR" />
          <MenuItem value={"ops"} primaryText="Operations" />
          <MenuItem value={"finance"} primaryText="Finance" />
        </SelectField>
        <br/>
        <TextField hintText="Answer"/>
        <br/>
        <RaisedButton label="Submit" primary={true}  />
      </Paper>
    );
  }
}