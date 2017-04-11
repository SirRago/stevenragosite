import React, { Component } from 'react';
import { Row, Col, Button, FormGroup, FormControl } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import '../App.css';
import axios from 'axios'

class MusicApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText:''

        }
        this.searchButtonClick = this.searchButtonClick.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        
    }


    searchButtonClick() {
        var youtubeLink='https://www.youtube.com/watch?v=IxGvm6btP1A'
        var downloadLink = "http://youtubeconverter.me/downloadz/index.php?output=yt/IxGvm6btP1A/64~~256~~Kanye_West_-_Fade_Explicit_uuid-58ec534cc8442.mp3"

        var api_call = axios.get('http://youtubeconverter.me/downloadz/?url=' + youtubeLink + '&amp;ftype=mp3&amp;quality=320')
        api_call.then((data) => {
            var htmlData = data['data']
            //console.log(htmlData)
            var dlloca =  htmlData.lastIndexOf("showConversionResult")

            var dl = htmlData.substring(dlloca ,dlloca + 150)

           // var dllocaStart =  dl.indexOf("showConversionResult")
            
            
            console.log(dl)
        //    // console.log("start - ",dllocaStart)
        //     console.log("end - ",dlloca)

        //     var URL = dl.substring(9,dllocaStart - 1 )

        //     console.log("first" , URL)
        //     var dllocaStart2 =  URL.lastIndexOf("=")
        //     URL = URL.substring(0,dllocaStart2 + 1 )

        //     var mp3URL = URL.substring(0, URL.length ) + "mp3"
        //     var mp3URL = URL.substring(0, URL.length ) + "mp3"
        //     var mp3URL = URL.substring(0, URL.length ) + "mp3"

        //     console.log("sec URL" , URL)
        //     console.log("mp3URL" , mp3URL)

            var downloadURL =  "http://youtubeconverter.me/downloadz/index.php?output="


        
            
        })
    }

    onChangeText() {
        var text = ReactDOM.findDOMNode(this.searchRef).value;
        this.setState({
            searchText:text
        })
    }

    render() {

        var formJsx = (
            <form>
                <FormGroup bsSize="large">
                    <FormControl ref={(refVar) => this.searchRef = refVar} type="text" style={{width:"400px",height:"30px"}} placeholder="Enter song info" onChange={()=>{this.onChangeText()}}/>
                </FormGroup>
            </form>)


        return (
            <div className="App">
                <h1> Welcome to EasyMusic</h1>
                {formJsx}
                <Button style={{'marginTop':"15px",width:"180px",height:"30px"}} bsStyle="primary" bsSize="large" onClick={()=>{this.searchButtonClick()}}>Search</Button>
            </div>
        );
    }
}

export default MusicApp;
