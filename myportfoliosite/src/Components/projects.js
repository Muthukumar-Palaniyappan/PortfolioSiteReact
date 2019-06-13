import React,{Component} from 'react';
import {Grid,Cell,Tab,Tabs,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }
    toggleCategories(){
        if(this.state.activeTab ===0){
            return(
                <div className="projects-grid">
               <Card shadow={5} style={{minWidth:'350px',margin:'auto'}}>
                   <CardTitle style={{color:'#black', height:'176px',background:
                   'url(data:image/png;base64,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) center / cover'}}>
                       React Project #1
                   </CardTitle>
                   <CardText> Lorem Ipsumdfdfdf</CardText>
                   <CardActions border>
                       <Button colored> GitHub</Button>
                       <Button colored> CodePen</Button>
                       <Button colored> LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                       <IconButton name="share"></IconButton>
                   </CardMenu>
               </Card> 

            <Card shadow={5} style={{minWidth:'350px',margin:'auto'}}>
            <CardTitle style={{color:'#black', height:'176px',background:
            'url(data:image/png;base64,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) center / cover'}}>
                React Project #2
            </CardTitle>
            <CardText> Lorem Ipsumdfdfdf</CardText>
            <CardActions border>
                <Button colored> GitHub</Button>
                <Button colored> CodePen</Button>
                <Button colored> LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name="share"></IconButton>
            </CardMenu>
            </Card> 

            <Card shadow={5} style={{minWidth:'350px',margin:'auto'}}>
<CardTitle style={{color:'#black', height:'176px',background:
'url(data:image/png;base64,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) center / cover'}}>
    React Project #3
</CardTitle>
<CardText> Lorem Ipsumdfdfdf</CardText>
<CardActions border>
    <Button colored> GitHub</Button>
    <Button colored> CodePen</Button>
    <Button colored> LiveDemo</Button>
</CardActions>
<CardMenu style={{color:'#fff'}}>
    <IconButton name="share"></IconButton>
</CardMenu>
</Card> 
            </div>
                )
            }
            else if(this.state.activeTab ===1){
                return(
                    <div><h1>This is Angular</h1></div>
                    )
                }
                if(this.state.activeTab ===2){
                    return(
                        <div><h1>This is .Net Core</h1></div>
                        )
                    }

    }
  
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>.Net Core</Tab>
                    <Tab>React</Tab>
                </Tabs>
                <Grid >
                    <Cell cols={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;
