import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imageURL from "../../images/logo.jpg";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const Body = styled.div`
  && {
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 2280px;
    background: #20D88E 0% 0% no-repeat padding-box;
    opacity: 1;
  }
  
 
`;

const Container1=styled(Paper)`
    &&{
      top: 374px;
      left: 0px;
      width: 1920px;
      height: 800px;
      background: #FDC874 0% 0% no-repeat padding-box;
      opacity: 1;
    }

    #Cilent {
      top: 441px;
      margin-left: 759px;
      width: 88px;
      height: 41px;
      text-align: center;
      font: normal normal bold 30px/41px Noto Sans;
      letter-spacing: 0px;
      color: #393434;
      text-transform: capitalize;
      opacity: 1;
         }


         #Freelancer {

          margin-top: -43px;
         margin-left: 1000px;
width: 159px;
height: 41px;
text-align: left;
font: normal normal bold 30px/41px Noto Sans;
letter-spacing: 0px;
color: #393434;
text-transform: capitalize;
opacity: 1;

        }


        #PopularTopics {
          top: 586px;
          margin-left: 333px;
          width: 217px;
          height: 41px;
          text-align: left;
          font: normal normal bold 30px/41px Noto Sans;
          letter-spacing: 0px;
          color: #393434;
          text-transform: capitalize;
          opacity: 1
    
             }
    
             #box1{
              margin-top: 0px;
              margin-left: 333px;
              width: 298px;
              height: 257px;
              background: #FDDDD1 0% 0% no-repeat padding-box;
              opacity: 1;
             }
             
             #box2{
              margin-top: -260px;
              margin-left: 662px;
width: 298px;
height: 257px;
background: #FDDDD1 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
             }

             #box3{
              margin-top: -260px;
              margin-left: 991px;
width: 298px;
height: 257px;
background: #FDDDD1 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
             }
    
             #box4{
              margin-top: -260px;
              margin-left: 1320px;
width: 298px;
height: 257px;
background: #FDDDD1 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
             }
    
    
             #box5{
              margin-top: 40px;
              margin-left: 333px;
width: 298px;
height: 257px;
background: #FDDDD1 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
             }

             #box6{
              margin-top: -260px;
              margin-left: 662px;
              width: 298px;
              height: 257px;
              background: #FDDDD1 0% 0% no-repeat padding-box;
              border-radius: 5px;
              opacity: 1;
             
             }
             
             #box7{
              margin-top: -260px;
              margin-left: 991px;
width: 298px;
height: 257px;
background: #FDDDD1 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
             
             }

             #box8{
              margin-top: -260px;
              margin-left: 1320px;
width: 298px;
height: 257px;
background: #FDDDD1 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
            
             }
    
             
    `;

    const Container2=styled(Paper)`
    &&{
      top: 1300px;
      left: 333px;
width: 1920px;
height: 290px;
text-align: left;
          font: normal normal bold 30px/41px Noto Sans;
          letter-spacing: 0px;
          color: #FDC874;
          text-transform: capitalize;
          opacity: 1
    }


    #Morehelp{
      top: 1349px;
left: 396px;
width: 220px;
height: 34px;
color: var(--unnamed-color-fe885d);
text-align: center;
font: normal normal normal 25px/34px Noto Sans;
letter-spacing: 0px;
color: #FE885D;
text-transform: capitalize;
opacity: 1;
    }

    #Contactus{
      top: 1406px;
      left: 396px;
      width: 152px;
      height: 41px;
      text-align: center;
      font: normal normal 600 30px/41px Noto Sans;
      letter-spacing: 0px;
      color: #393434;
      opacity: 1;
    }

    button{
      margin-top: 47px;
      margin-left: 0px;
      width: 266px;
      height: 63px;
      background: transparent linear-gradient(180deg, #FD6F82 0%, var(--unnamed-color-fe885d) 100%) 0% 0% no-repeat padding-box;
      background: transparent linear-gradient(180deg, #FD6F82 0%, #FE885D 100%) 0% 0% no-repeat padding-box;
      border-radius: 32px;
      opacity: 1;
      }
    `;

    const Container3=styled(Paper)`
    &&{
      top: 1654px;
left: 0px;
width: 1920px;
height: 546px;
background: #252A42 0% 0% no-repeat padding-box;
opacity: 1;
    }
    `;

const Header = styled.div`
  && {
    top: 0px;
    left: 0px;
    width: 1920px;

    background: #20D88E 0% 0% no-repeat padding-box;
opacity: 1;

  }

  #con {
    margin-top: 142px;
    margin-left: 793px;
    width: 500px;
    height: 30px;
    text-align: left;
    font: normal normal bold 33px Noto Sans;
    letter-spacing: 0px;
    color: #393434;
    text-transform: capitalize;
    opacity: 1;
  }

  #Support {
    
    margin-top: 74px;
    margin-left: 1371px;
width: 200px;
height: 30px;
text-align: left;
font: normal normal normal 18px/24px Noto Sans;
letter-spacing: 0px;
color: #000000;
text-transform: capitalize;
opacity: 1;
  }
  

`;

const Container=styled(Paper)`
    &&{
      margin-top: 65px;
      margin-left: 603px;
width: 900px;
height: 64px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 32px;
opacity: 1;


    }

       
    button{
      margin-top: -3.35px;
      margin-left: 157px;
      width: 173px;
      height: 64px;
      background: var(--unnamed-color-fe885d) 0% 0% no-repeat padding-box;
      background: #FE885D 0% 0% no-repeat padding-box;
      border-radius: 0px 32px 32px 0px;
      opacity: 1;
        }

        input{
          top: 223px;
          margin-left: 70px;
          width: 500px;
          height: 45px;
          text-align: left;
          font: normal normal 600 22px/30px Noto Sans;
          letter-spacing: 0px;
          color: #3D3D3D;
          opacity: 1;
        }
    

`;



export default class PasswordForm extends Component {
  render() {
    return (
      <Body>
        <Header>
          <img src={imageURL} width="72" height="42" />
          <Grid >
              <div id="Support">
                 <Link style={{ color: "#393434" }}>
                   MY Support Request
                 </Link>
               </div>
             </Grid>
             <Grid>
             <div id="con">
              what do you need help with ?
              </div>
              </Grid>
          <Grid container justify="center" >
          </Grid>

          <Container component="form">
      <InputBase
        placeholder="   loreum espium   "
        inputProps={{ 'aria-label': '   loreum espium   ' }}
      ></InputBase>
      <IconButton type="submit" aria-label="search">
      <SearchIcon />
    </IconButton>
    </Container>
<br/>
<br/>
<br/>
        </Header>

        <Grid container1 justify="center"/>
          
        <Container1 component="form">
        <Grid >
              <div id="Cilent">
                 <Link style={{ color: "#393434" }}>
                   Cilent
                 </Link>
               </div>
             </Grid>

             <Grid >
              <div id="Freelancer">
                 <Link style={{ color: "#393434" }}>
                 Freelancer
                 </Link>
               </div>
             </Grid>
             <br/>
             <br/>
             <Grid >
                <div id="PopularTopics">
                   <Link style={{ color: "#393434" }}>
                   Popular Topics
                   </Link>
                 </div>
                 <br/>
                 <br/>
               <form id="box1">
               <h2>Get Started</h2><br/><br/>
               how it works , getting started fees & protection
               </form>
               <form id="box2">
               <h2>build your profile</h2><br/><br/>
               profile settings,edit profile, freelancer programs, stats
               </form>
               <form id="box3">
               <h2>find a project</h2><br/><br/>
               search send proposals, interview, accept offers
               </form>
               <form id="box4">
               <h2>start working</h2><br/><br/>
               messages , work diary, contracts ,feedback
               </form>
               <form id="box5">
               <h2>Get Paid</h2><br/><br/>
                Get Paid , Payment Options, Reports, Earnings, Taxes
               </form>
               <form id="box6">
               <h2>payment issues</h2><br/><br/>
               payment schedule. troubleshooting,disputes
               </form>
               <form id="box7">
               <h2>account</h2><br/><br/>
               account settings,service options,identify verification
               </form>
               <form id="box8">
               <h2>apps</h2><br/><br/>
               mobile app, desktop app, time tracker
               </form>

               </Grid>

        </Container1>
        <br/>
        <br/>
        <Grid container2 justify="center"/>
          
        <Container2 component="form">
        <Grid >
        <div id="Morehelp">
                   <Link style={{ color: "#FE885D" }}>
                   need more help ?
                   </Link>
                 </div>
        </Grid>
        <Grid >
        <div id="Contactus">
                   <Link style={{ color: "#393434" }}>
                   Contactus
                   </Link>
                 </div>
        </Grid>

        <IconButton type="submit">
      Get Help
    </IconButton>
        </Container2>

        <br/>
        <br/>
        <Container3 component="form">
        <Grid >

        </Grid>
        </Container3>
        
        <h1>COPYRIGHT 2015 -2020</h1>
      </Body>
    );
  }
}
