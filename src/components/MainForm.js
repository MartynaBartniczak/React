/**
 * Created by dominikakosiedowska on 05.07.17.
 */
import React from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button

} from 'react-bootstrap'

export default class MainForm extends React.Component {

  render() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Name</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="Jane Doe" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
          <ControlLabel>Email</ControlLabel>
          {' '}
          <FormControl type="email" placeholder="jane.doe@example.com" />
        </FormGroup>
        {' '}
        <Button type="submit">
          Register
        </Button>
      </Form>

    )
  }
}