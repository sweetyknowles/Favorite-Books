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
        if (this.state.error)
        
        return 
            <div>
               {this.state.error} 
            </div>
     }
     return
     (
         <div>
         
         <h1> Readers List</h1>
         {this.state.readers.map(readers => (
             <div> key={reader.id}>
             <Link to={`/reader/${reader.id}`} >{reader.name}</Link>

             </div>

         ))}
         
         </div>
     )
       
    }
}

export default ReaderList;