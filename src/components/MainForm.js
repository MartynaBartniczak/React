import React from 'react'
import { Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'

export default class MainForm extends React.Component {

  render () {
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Name:</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="Jane Doe" required="required"/>
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
          <ControlLabel>Email:</ControlLabel>
          {' '}
          <FormControl type="email" placeholder="jane.doe@example.com" required="required" />
        </FormGroup>
        {' '}
        <Button type="submit">
          Join Us!
        </Button>
      </Form>
    )

  }

}

