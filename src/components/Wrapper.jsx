import React from "react";
import { Container } from 'react-bootstrap'
import './Styles/styles.css'

const Wrapper = props => <Container className="test">{props.children}</Container>;

export default Wrapper;