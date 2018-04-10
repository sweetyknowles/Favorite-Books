import React, { Component } from 'react';

import axios from 'axios'




class Reader extends Component {
    state = {
        reader: {},
        books:[]
    }
}

componenetWillMount(){

    const readerId = this.props. match.params.id
    this.getReaderAndBookData(readerId)  
}

fetchReaderAndBookData = async (readerId) =>{
    try{

        const readerResponse = await axios.get(`/api/readers/${readerId`)
    }
}



    render() {
        return (
            <div>
                
            </div>
        );
    }



export default Reader;