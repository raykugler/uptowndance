import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const Q_Instructors =  gql`
{        
    teachers    
         
   {  			
           id
           teacherName
                 salsa
                 belly
                 tango
                 swing
                 hipHop
                 wedding
                 modern
     theirPhoto {
             url
             
           }
           teacherBio
   }             
       }
`;


export default Q_Instructors;


/*export default Teachers;

gql`
    {
          teachers (where:{
              tango: true
          })
              {
            classTime
            classStyle
            teacherName
            id
            theirPhoto {
              url
            }
        
      
            
      
        }
      }
`*/