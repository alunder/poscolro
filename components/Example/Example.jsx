import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/styles';

// use styled components
// https://material-ui.com/styles/basics/#styled-components-api
// https://material-ui.com/styles/basics/#adapting-the-styled-components-api
const Title = styled('div')({
  fontSize: 18,
  fontWeight: 'bold',
});

const Example = props => {
  const { title, children } = props;
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

Example.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Example;
