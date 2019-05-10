import React from 'react';
import './App.css';
import { Card, Image, Popup} from 'semantic-ui-react'
import ProfilePic from './ProfilePic.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card fluid centered raised id='main_card'>
          {/*title  section*/}
          <Card.Content>
            <Card.Header> <Popup content=<Image src={ProfilePic} avatar size='small' position="bottom center"/> trigger={<Image src={ProfilePic} avatar size='huge'/>} /><Popup trigger={<span>Yong Liang</span>} content="This is a web page resume created by Yong Liang"/></Card.Header>
            {/*About section  */}
            <Card.Description textAlign='center' id="contact_info">510-203-6233 | yongliang24@gmail.com | <Popup content="Visit Yong's Github Page" trigger={<a href="https://github.com/YongLiang24" target="_blank" rel="noopener noreferrer">Github</a>}/> | <Popup content="Visit Yong's Blog Posts" trigger={<a href="https://dev.to/yongliang24" target="_blank" rel="noopener noreferrer">Blogs</a>} /></Card.Description><br/><br/>
              <Card.Description textAlign='left' id="slogan">Full stack web developer with a passion for software development and new technologies. With experience in Ruby on Rails, JavaScript, and React and a background in computer science, I discovered web development through college courses. I bring strong skills in customer services and team collaborations that support a company’s success.</Card.Description><br/><br/>

              <Card.Content extra>
                <Card.Header id="sub_headers">Technical Projects</Card.Header>
              </Card.Content><hr/>
              {/*project 1  */}
              <Card.Description textAlign='left' className='project_text'><Popup content="Visit Metro Pizza Github Repository" trigger={<strong><a href="https://github.com/YongLiang24/frontend_customers_metro_pizza" target="_blank" rel="noopener noreferrer">Metro Pizza</a></strong>}/> | <Popup trigger={<a href="https://yongliang24.github.io/frontend_customers_metro_pizza/" target="_blank" rel="noopener noreferrer">Demo Link</a>} content="Visit Metro Pizza Website"/></Card.Description>
                <Card.Description textAlign='left' className="project_detail">Metro Pizza allows customers to place orders online, a restaurant to receive orders and manage menu items</Card.Description>
                <Card.Description textAlign='left' className="project_description">+ Implemented mouse drawing using HTML canvas</Card.Description>
                <Card.Description textAlign='left' className="project_description">+ Developed a Rails API backend with endpoints for guessing, canvas coordinates
                </Card.Description>
                <Card.Description textAlign='left' className="project_description">+ Built live update drawing and messages communicate with the guessing site</Card.Description>
                <Card.Description textAlign='left' className="project_description">+ Implemented user interface using React and CSS for styling</Card.Description>
                <br/>
                {/*project 2  */}
                <Card.Description textAlign='left' className='project_text'><Popup trigger={<strong><a href="https://github.com/YongLiang24/pictionary-online" target="_blank" rel="noopener noreferrer">Pictionary Online</a></strong>} content="Visit Pictionary Github Repository" /> |<Popup content="Visit Pictionary Online Website" trigger={<a href="https://yongliang24.github.io/pictionary-online/#/" target="_blank" rel="noopener noreferrer">Demo Link</a>}/></Card.Description>
                  <Card.Description textAlign='left' className="project_detail">Pictionary Online a simple way to play pictionary game online with friends.</Card.Description>
                  <Card.Description textAlign='left' className="project_description">+ Developed a custom Rails API backend with endpoints for menu items, admin user, customer orders </Card.Description>
                  <Card.Description textAlign='left' className="project_description">+ Implemented administrator UI to create or delete menu items, receive online orders in real time
                  </Card.Description>
                  <Card.Description textAlign='left' className="project_description">+ Implemented customers UI to view menu, add to cart and place orders online</Card.Description>
                  <Card.Description textAlign='left' className="project_description">+ Built all user interfaces employing React with Semantic UI React </Card.Description><br/>

                  {/*project 3  */}
                  <Card.Description textAlign='left' className='project_text'><Popup trigger={<strong><a href="https://github.com/YongLiang24/translatr-frontend" target="_blank" rel="noopener noreferrer">Translatr</a></strong>} content="Visit Translatr Github Repository"/> |<Popup trigger={<a href="https://yongliang24.github.io/translatr-frontend/" target="_blank" rel="noopener noreferrer">Demo Link</a>} content="Visit Translatr Website"/></Card.Description>
                    <Card.Description textAlign='left' className="project_detail">Translatr a utility to create trips, translate and save common phrases you’ll use for that trip.
                    </Card.Description>
                    <Card.Description textAlign='left' className="project_description">+ Utilized Google’s Translate API to translate user’s inputs in many languages
                    </Card.Description>
                    <Card.Description textAlign='left' className="project_description">+ Utilized Foreign Exchange Rate api to implement a currency converter
                    </Card.Description>
                    <Card.Description textAlign='left' className="project_description">+ Implemented user interface with normal Javascript, HTML, and CSS</Card.Description>
                    <Card.Description textAlign='left' className="project_description">+ Developed a Rails API backend with endpoints for translation, trip, and user</Card.Description>
                  </Card.Content>
                    {/*Technical skills section  */}
                    <Card.Content extra>
                      <Card.Header id="sub_headers">Technical Skills</Card.Header>
                      <Card.Description textAlign='left' className='project_description'>React, Ruby, Rails, SQL, JavaScript, HTML, CSS, Web Development</Card.Description>
                    </Card.Content>
                    {/*work experience  */}
                    <Card.Content extra>
                      <Card.Header id="sub_headers">Employment History</Card.Header>
                      <Card.Description textAlign='left' className='work_text'>
                        <strong>HCL America</strong>, Redmond, WA
                      </Card.Description>
                      <Card.Description textAlign='left' className="project_detail">Video Game Tester, July 2017 - December 2018</Card.Description>
                      <Card.Description textAlign='left' className="project_description">+ Tested games to Identify glitches and bugs</Card.Description>
                      <Card.Description textAlign='left' className="project_description">+ Documented test procedures, test cases and bug reports</Card.Description>
                      <Card.Description textAlign='left' className="project_description">+ Collaborated with 8 other team members to complete daily tasks </Card.Description><br/>

                      <Card.Description textAlign='left' className='work_text'>
                        <strong>Uber Technologies</strong>, Bellevue, Seattle
                      </Card.Description>
                      <Card.Description textAlign='left' className="project_detail">Driver, May 2016 - June 2017</Card.Description>
                      <Card.Description textAlign='left' className="project_description">+ Communicated with passengers, provided safe and welcoming rides</Card.Description>
                      <Card.Description textAlign='left' className="project_description">+ Managed own schedule and accounting</Card.Description>
                      <Card.Description textAlign='left' className="project_description">+ Maintained high customer standards and ratings </Card.Description><br/>

                      <Card.Description textAlign='left' className='work_text'>
                        <strong>Fu Wah Restaurant</strong>, Lioza, PR
                      </Card.Description>
                      <Card.Description textAlign='left' className="project_detail">Chef , May 2011 - December 2015</Card.Description>
                      <Card.Description textAlign='left' className="project_description">+ Managed daily supply list for ordering</Card.Description>
                      <Card.Description textAlign='left' className="project_description">+ Collaborated with two other chefs and communicated with cashiers regarding orders</Card.Description>
                      <Card.Description textAlign='left' className="project_description">+ Managed food service effectively and efficiently in a fast paced environment</Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                      <Card.Header id="sub_headers">Education</Card.Header>
                      <Card.Description textAlign='left' className='work_text'>
                        <strong>Flatiron School - Seattle, WA  </strong> - May 2019
                      </Card.Description>
                      <Card.Description textAlign='left' className="education_description">+ Full Stack Web Development, Ruby on Rails, JavaScript, and React.js program</Card.Description><br/>

            <Card.Description textAlign='left' className='work_text'>
              <strong>Lake Washington Institute of Technology - Kirkland, WA</strong> - Sep 2016- June 2018
            </Card.Description>
            <Card.Description textAlign='left' className="education_description">+ Associate Degree in Computing and Software Development.</Card.Description>
          </Card.Content>

        </Card>
      </header>
    </div>
  );
}

export default App;
