# JET Restaurant Data

## Overview
I have been tasked to complete a coding exercise for JET Early Careers Software Engineer program ahead of the assessment day. Below is the problem and brief I've been given to carry out:

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

### Interface Used

### How to build, compile and run solution
- Setup the environment 
- Create README.md file
- Create your axios.js file that will contain all your code to request data from the API
- Install 'Axios' library
- Insert postcode into the API
- Write your code using axios library to request and get data and to display these data in your terminal
- In the terminal, insert 'node axios'

### Uncertainties and Assumptions:
![Screenshot of CORS block](assets/images/cors-blocking.png)
I had issues with requesting data from the API using fetch. As fetch represents data via web browser, I encountered a challenge related to Cross-Origin Resource Sharing (CORS) blocking. I initially struggled with this issue, I thought of all types of ways I could bypass this. I eventually contacted JET to inquire whether this is an expected part of the assesment  or if it may be indicative of an unintended issue. I was thinking it's possible I missed instructions on how to navigate the API.

After hours of research reading documentation and stack overflow, I later find out I could use the axios library to get the data.
### Future Improvement


