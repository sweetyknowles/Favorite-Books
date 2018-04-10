import React, { Component } from 'react'
import { Link } from  'react-router-dom'
import axios from 'axios'

class readerList extends Component {
    constructor(){
        super();
        this.state = {
            error: '',
            readers:[] 
        }
    }
    componentWillMount(){
        this.fetchReaders()
    }
    fetchReaders = async () =>{
        try{
            const res = await axios.get('/api/artists')
            await this.setState({readers: red.data})
            return res.data
     }
     catch(err){
     console.logg(err)
     await this.setState({error: err.message})
     return err.message
     }
     }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default componentName;