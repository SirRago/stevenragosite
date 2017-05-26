import React, { Component } from 'react';
import { Row, Col, Button, FormGroup, FormControl } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import '../App.css';
import axios from 'axios'

class MusicApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText:'',
            downloadLinks: null

        }
        this.searchButtonClick = this.searchButtonClick.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        
    }


    searchButtonClick() {
        const backendLink = 'http://localhost:5000/api/v1/youtubelinks?q=' + this.state.searchText
        console.log(backendLink)

        var api_call = axios.get(backendLink)
        api_call.then((data) => {   
            console.log(data)
            this.setState({
                downloadLinks: data['data']
            })

        
            
        })
    }

    onChangeText() {
        var text = ReactDOM.findDOMNode(this.searchRef).value;
        this.setState({
            searchText:text
        })
    }

    render() {
        let downloadLinksJSX = null
        /*if(this.state.downloadLinks != null){
            downloadLinksJSX = this.state.downloadLinks.map((e)=>{
                <div>
                    <h1>e.title</h1>
                    <h2>e.downloadLink</h2>
                </div>
            })[0]
        }*/

        if(this.state.downloadLinks != null){
               downloadLinksJSX =  (<div>
                    <h1>{this.state.downloadLinks[0].title}</h1>
                    <Button href={this.state.downloadLinks[0].downloadLink} bsStyle='success' style ={{width:'200px',height:'50px'}}>
                        Download
                    </Button >
                </div>)
        }


        var formJsx = (
            <form>
                <FormGroup  bsSize="large">
                    <FormControl ref={(refVar) => this.searchRef = refVar} type="text" style={{'text-align':'center',width:"400px",height:"50px",display:'inline'}} placeholder="Enter song info" onChange={()=>{this.onChangeText()}}/>
                </FormGroup>
            </form>)


        return (
            <div>
                <h1> Welcome to EasyMusic</h1>
                {formJsx}
                <Button style={{'marginTop':"15px",width:"180px",height:"50px"}} bsStyle="primary" bsSize="large" onClick={()=>{this.searchButtonClick()}}>Search</Button>
                {downloadLinksJSX}
            </div>
        );
    }
}

export default MusicApp;
