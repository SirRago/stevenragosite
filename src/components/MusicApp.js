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
            songsFromBE: [],
            searchTextBox:''

        }
        this.searchButtonClick = this.searchButtonClick.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
       // this.optionClicked = this.optionClicked.bind(this);
        this.getLink = this.getLink.bind(this);
        
    }

    getLink(e){
        const backendLink = 'http://localhost:5000/api/v1/youtubelinks/getLink?id=' + e.id
        console.log(backendLink)



        var api_call = axios.get(backendLink)
        api_call.then((data) => {  
            console.log(data)
            let newSongsFromBE = this.state.songsFromBE.map((songs)=>{
            if(songs.id == e.id){
                songs['downloadLink'] = data['data']['downloadLink']
            }
            return songs
        }) 


            console.log(data)
            this.setState({
               // songsFromBE: data['data']['links']
               songsFromBE: newSongsFromBE
            })

        
            
        })

    }


    searchButtonClick() {
        const backendLink = 'http://localhost:5000/api/v1/youtubelinks?q=' + this.state.searchText
        console.log(backendLink)

        var api_call = axios.get(backendLink)
        api_call.then((data) => {   
            console.log(data)
            this.setState({
                songsFromBE: data['data']['links']
            })

        
            
        })
    }

    onChangeText() {
        var text = ReactDOM.findDOMNode(this.searchRef).value;
        if(text == ''){
            this.setState({
                searchText: ''
            })
            return
        }
        else{
            this.setState({
                searchText: text
            })
        }


    //    const searchTextLink='https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' + text

    //     axios.get(searchTextLink).then((data) => {   
    //         console.log(data['data'][1])
    //         this.setState({
    //             searchTextBox: data['data'][1]
    //         })
            
    //     })

    }

    // optionClicked(e){
    //     this.setState({searchText:e})
        
    //     this.searchButtonClick()
    // }

    render() {
        let loadingSpinner = (
            <div className="loader">
            </div>
        )

        //DOWNLOAD LINKS
        let songsFromBEJSX = null

            console.log(this.state.songsFromBE)
        if(this.state.songsFromBE != null){

            
            songsFromBEJSX = this.state.songsFromBE.map((e)=>{
                let download=null
                if(e.downloadLink != null){
                    download =(
                        
                            <Button href={e.downloadLink} bsStyle='success' style ={{width:'150px',height:'35px'}}>
                                            Download
                            </Button >
                        
                    )
                }

                return (<div>
                    <Row style ={{height:'60px'}}>
                        <Col xs={2}>
                             <p><a href={e.pictureLink}><img src={e.pictureLink}/></a></p>
                        </Col>
                        <Col xs={2}>
                            <h5>{e.title}</h5>
                        </Col>
                            <Col xs={4}>
                            <Button onClick={()=>{e.downloadLink='waiting';this.getLink(e)}}bsStyle='primary' style ={{width:'150px',height:'35px'}}>
                                Get Link
                            </Button >
                        </Col>
                        <Col xs={4}>
                        {download}
                        </Col>
                    </Row>
                </div>)
             })
        }

        //OPTIONS
        let options = null
        // if(this.state.searchTextBox != ''){
        //     options = this.state.searchTextBox.map((e)=>{
        //         return (<div className='dropdown-options'>{e}</div>)
        //     })
        // }
        // else{
        //     options = null
        // }


        var formJsx = (
            <Row >
                <Col xs={2}>
                    {options}
                </Col>
                <Col xs={7}>     
                        <FormGroup  bsSize="large">
                            <FormControl className='zero-padding' ref={(refVar) => this.searchRef = refVar} type="text" style={{'text-align':'center',width:"400px",height:"50px",display:'inline'}} placeholder="Enter song info" onChange={()=>{this.onChangeText()}}/>
                        </FormGroup>
                        
                        <div>
                            <Button  style={{'margin-bottom':'25px','marginTop':'15px','width':'180px','height':'50px'}} bsStyle="primary" bsSize="large" onClick={()=>{this.searchButtonClick()}}>Search</Button>
                            {songsFromBEJSX}
                        </div>
                                              
                </Col>
                <Col xs={3}>         
                </Col>
            </Row>)


        return (
            <div>
                {formJsx}

  
            </div>
        );
    }
}

export default MusicApp;
