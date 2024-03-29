# JET Restaurant Data

## Overview
I am thrilled to share with you an exciting opportunity I've been given as part of the JET Early Careers Software Engineer program. Ahead of the assessment day, I've been entrusted with an engaging coding exercise that promises to ignite my passion for problem-solving and innovation.

Let's dive right into the challenge provided:

**The Problem**: We are looking for you to find restaurant data and return this in an interface of your choice.
Using the API provided you will need to send a postcode to return a set of data, you’ll need to filter this data to focus just on the restaurant data.
You will notice that a lot of data is returned in the ‘restaurant object’ (and in the whole response!), we’re only interested in the following pieces of data being returned:

- Name
- Cuisines
- Rating - as a number
- Address

**The Brief**: We would like you to display these four data points in any way of your choosing, this could be: a web interface, console application, or anything you like.
Regardless of interface we’d like you to limit your shown data to the first 10 restaurants returned, we’re more interested in how you display each one rather than a huge list of data.
Please upload your completed solution to Github (bonus points if we can see git history!).

**Assignment Criteria**

Ensure you complete the below:
- All four restaurant data points are displayed in your interface (name, cuisines,
rating-as a number and address)
- All interface types will be assessed the same, please focus on displaying the
data
- Add how to build, compile and run your solution into the README
- Include any assumptions or things that were not clear to you in the README
- Include any improvements you’d make to your solution in the README

## Interface Used
I have chosen to present these four data points using the web interface. By utilising the intuitive and user-friendly nature of the webpage environment, I aim to provide clear and accessible information. Get ready to explore the data directly from the webpage interface!

## Features
### Header
![Header of the page image](/assets/images/jet-header.png)
### Postcode Entry
![Postcode entry image](/assets/images/postcode-entry.png)
### Restaurant data
![Restaurant data image](/assets/images/restaurants.png)
## Technologies Used
### Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries And Programs Used 
#### [Node.js](https://nodejs.org/en)
   - Node.js used as runtime environment to run javascript code.
#### [Express](https://expressjs.com/)
   - Express used to create the app for server side API.
#### [Axios](https://axios-http.com/)
   - Axios used to make http request.


## How to build, compile and run solution
### Clone my Repo from Github
- To clone my repository from GitHub to your local machine, carry out the following command in your Terminal: 
`git clone https://github.com/AASanusi/jet-resto-data.git`

- Press Enter to execute the git clone command.

- Once the cloning process is complete, you can access the cloned repository in the specified directory on your local machine.

#### Run Solution
- Visit [Node.js](https://nodejs.org/en) website. Download and install.
- Open your terminal to install Express. Type following commands: `npm init` to create package.json file for the application. Accept the defaults and making sure `entry point: server.js`. Enter this command: `npm install express` to install Express
- Install axios by enter this command into your terminal: `npm axios`
- In the terminal enter the following command: `node server.js` to run the server
- Terminal shows app is running on port: `3000`
- Insert `localhost:3000` into the address bar in the browser and press 'Enter'
- A blank webpage will open up with an input section and submit (Find Restaurant) button
- Insert a postcode and view the first 10 restaurants with the following details:
  - Name,
  - Cuisines,
  - Ratings,
  - Address

### Uncertainties and Assumptions:
- I faced challenges with fetching data from the API using fetch due to Cross-Origin Resource Sharing (CORS) restrictions in the web browser. After exploring different approaches and seeking clarification from JET, I realised I that I could use node/express to set up a local server.

![Screenshot of CORS block](assets/images/cors-blocking.png)

- There was no clarification regarding whether additional features or functionalities are expected beyond displaying the four specified data points.

- The specific formatting or styling preferences for displaying the restaurant data were ambiguous or not clearly defined.

### Future Improvement
- **React Frontend Integration**: Seamlessly integrate React frontend into Node.js backend for improved development and management.
- **Restaurant Website Links**: Enhance user experience by including direct links to restaurant websites for additional information and convenience.
- **Map Feature**: Improve user engagement with location context by integrating a map feature for each restaurant.
- **Pagination**: Implement pagination for navigating large sets of data, improving usability.
- **Responsive Design**: Ensure mobile-friendly and responsive design for seamless user experience across devices.


