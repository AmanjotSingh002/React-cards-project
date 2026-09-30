import React from 'react'
import Card from './component/card'

const jobs = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLAJVzmoKCjknlgdw2CJGiOpHmKzJuGvmBiB3iJTN5A&s",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBI0D8nJcJCAp_wUk8_cwJ587S9bj4GzGq_7j_U3jryJMN6dcvxtOWI7M&s=10",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzChlzw4_AmFlEk86g0TiPq7s9vBGzBlpw7N6U6Dp-muzJ4FH9Dm3Ee0&s=10",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$75/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW2xDojnD1M3k4m2qVOKzlEzYCx7WJ4hIi0pvcN-68g&s=10",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsa-zk5xFaL97i5exqlRiYxcYmvG_c874ZRToEyX98g&s",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$105/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJANb0XItp3xw1MB-dF4ccHxxCtgDc7auj-nAXlk-vw&s=10",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthFkKxxe5oOqzfgM7YR46pLgPnm9Q4ihc6Cz3RsR3akjh-KFpH7NTKORj&s=10",
    companyName: "NVIDIA",
    datePosted: "2 weeks ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/3840px-Spotify_App_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    companyName: "Spotify",
    datePosted: "6 days ago",
    post: "UX Researcher",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.png?width=1200&format=pjpg&optimize=medium",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctQHNKlkEsXVexZAmmrmpb-rYIIbAQIBWKltrsIbh1fbuNWSJZxtSx9Y-&s=10",
    companyName: "Salesforce",
    datePosted: "10 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "Gurgaon, India"
  }
];


const App = ()=>{
  return (
      <div className= "parent">
        {jobs.map(function(elem){
           return <Card company={elem.companyName} post = {elem.post} logo = {elem.brandLogo} posted = {elem.datePosted} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location}/>

        })}
        

      
    
    </div>
  )
}
export default App;