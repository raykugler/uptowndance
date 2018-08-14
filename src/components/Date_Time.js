import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const Time_Test=  gql`
   {        
    classSchedules(where: {classType: Tango})
    {
      timeDay
      classType
    	teachers {
    	  teacherName
    	}
    }
  }
`;

console.log(Time_Test);

export default Time_Test;