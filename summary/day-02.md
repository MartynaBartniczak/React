# Day 2

- ES6 features:
  - import ... from ...
  - export default ...
  - const vs let
  - arrow function vs function
  
- React:
  - const X = React.createClass vs class X extends React.Component
  - VirtualDOM vs DOM (diff updates)
  - one direction data flow
  - JSX
    - className vs class
    - onClick
  - state vs props
  - passing props to component
  - reading props inside a component (this.props)
  - modifying this.state using this.setState
  - defining class methods using arrow functions (eg. for handling click events)
  - passing function down the cascade from parent component 
    to allow children modify parent state
  - lifecycle methods:
    - mounting:
      - componentWillMount
      - render
      - componentDidMount
    - updating:
      - componentWillReceiveProps
      - shouldComponentUpdate
      - componentWillUpdate
      - render
      - componentDidUpdate
    - unmounting:
      - componentWillUnmount