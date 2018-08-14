import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const Q_Describe = gql`
 {        
    classDescriptions
    {
      classStyle
      theDescription
      id

    }}
    `;



export default Q_Describe;