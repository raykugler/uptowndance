import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Q_Instructors from './Q_Instructors';


class Instructors extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
    return(
 
    <div className='instructors'>
    <p>These are the instructors</p>
    </div>
);

}};

export default Instructors;