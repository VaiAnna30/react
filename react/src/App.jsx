import React from 'react'
import Card from './components/Card';
const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCvLeTHwisItiq2ogbeAY_JJe5SBA38iLCA&s",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "₹1800/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "₹2200/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAclBMVEX///8AfvcAe/cAdfcAePcAcvYAcPbt8/7y9/72+f/q8f7v9f77/f/l7v7e6f3Z5v21zvzE1/wAbfYthfiZvfrJ2vyLtfqoxvt+rPmvyPtgnPlqnfhZlPhqofm70vwkgfdFkPg9i/jS4P2LsPkAZ/Z1qPonAhhGAAAFGklEQVR4nO2aW5OiOhCApZOgOCIiXpABBVz+/19cL6STQOI4Gzx1Hvp72KotWtJ0On3LzGYEQRAEQRAEQRAEQRAEQRAEQRDE/5l4fyiB86DpTkn0Qi6K2zTdt+uvz6uU5FnIIbgBXPDyuHLIfe2KS3gH6nz/YZWKkAcawMRxYZGLc/HU/C4DDDavTOrJEQyVHrB6PZI7XdhQKPmQSvNSjFS6W0LsTLlFEY6FwsNHdFqWYzM9MRf8aqxyYf6BLVwzl05BIAq1YAtgF2KNzfu8iBvHWs8FO6nVGnUCzgTjXP2MfU+sVZSZdhqag5VPuQQfiPp6TtrztRQwFJqKTj9OnPEsu/2jKyauD90vIM106oPmIlXfMzwSfuy0c8eywyMIzI/GabxrtZB7zAp9pw6oFdtMp9NSO+O8wrgUnfRdFOdZxaWLmYH+JO0M3JUBfs2q1LzV2IG41rY163rLsevwDRtpK15NpdSGOXS67eG3OgAy3PNi/IqdfAWfKBGulOuIUVxeFYOMEkBp26KqF4NsGqXwKwP+PV5vXprRAWBpe0mcAbreBMSZcnLbekszZrHU/pqNkIacIt0oQ7GjVWCvx1XuTLwyXAiH1r8Cl3R+41GLVxfne1LpVbW/Tmdc0bUxs1mhbMVjl1BUyMjqFHmbChNs45SZq2wNhTM8yhDKvZPN+iKXe3FsIu0EipNTLJRu4FstnAQaau4UOuixCpztC2ahcQH9O2ppA/exmrVG+cs7l9xepiHf/cP1hLP0X9Rm+GStQzBupjl/KW6M+6zng0TjziTy0DC/WgFLIebcvXbU43CXr8s4zF22fIvVN1a3rvd8yXCgFaLgiETrbS/q5VRLDECZK+LJk8cr5VrM5et/etncR6kES8bK4QZ7eRIucaJM5aqa+lLBL1KlcknXt+HJu/tcpdKkI673EtBYy5s3UQWjo+KXXQ7A7T+Rcvmt3dfR033CZ46Hz+7nrVT62aaoKifIrBski6rQZ96BOS20Vi3YUsGzH4iUr/NR83BHxvTQp1LHbLy1Psact+3PZrpFU1kTXCsLPZ/+D7cDbE8xbKrIqvl6bflF0n+lo4Z9D1UiWB6qnKcOU4uWssb1aZWqLQ+v8mmoVVqqigEY1zrrvgnxqhNeKYX9gvEwgldx/dNKYc4LwAgXWjvNR0X9p5XqMISZwV4bPEAzDCSTKKW+evhk4xykJKoOHXX5ifwQdyH/MxkGz8GDtYqSo37iqs08Bomg7R959e7YXzEzLyyUQ43HC0vV50NjPj1PkWZUQjY2YtWp2Zylx9moxDxwOJlLwSchY7UEtTEvRLexR0G9YzY2Cjt3d7v2M6oV1Wt0FSAdg7kEf2ZWKWfZjjq7sHdQNboalkQ57g5YZ0M3juoEagUd5iXPxv2oTRbz+CtaxJtA25t3Rh4AvVcv8B7Fs0Ve6XNhXhflRWuoXlwCxVp/CpDvl8v1Du9svEeMO2NMYAztbANXJNW7QeCMaXcBXtXUnVjzWROwV7yS63BAq/3Qp214cB5f3r2jk5oHj5ji2qGzXz3+GP8W9nu/gE8ytL5abMVfTKskUWmzFVy8N+9Btx3e9Yn6nYv9uUUr2E51m5xmQleLXd4tsQ9seC/Y+E7xFPPNRXB+iwjAb6f78P6L97fPUUUfF9W0fzqxPF67qqrywy/7yH3XCHELUyxkZT6NO5msVv8yglsm5+Nut0uT/+APTAiCIAiCIAiCIAiCIAiCIAiCIIjf8Re90zkkv+9J+QAAAABJRU5ErkJggg==",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Part-Time",
      tag2: "Junior Level",
      pay: "₹1500/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/500px-Apple_logo_grey.svg.png",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "₹2500/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhjGtDVpCbI43esVmATVPezbYYFOwkYw5zw&s",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Cloud Engineer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "₹2700/hour",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Software Engineer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "₹2000/hour",
      location: "Noida, India"
    },
    {
      brandLogo: "https://i.pinimg.com/736x/56/3a/a2/563aa2189ef92dc242a7db5b91078804.jpg",
      companyName: "Adobe",
      datePosted: "6 days ago",
      post: "UI/UX Designer",
      tag1: "Part-Time",
      tag2: "Senior Level",
      pay: "₹1600/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://i.pinimg.com/736x/43/e9/69/43e969979dfd8ae4b364f517571aee58.jpg",
      companyName: "Tesla",
      datePosted: "8 weeks ago",
      post: "Embedded Systems Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "₹3000/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYglJ5cooESw4EEKVpBAtJQtGC4qYb9Os_Q&s",
      companyName: "LinkedIn",
      datePosted: "9 days ago",
      post: "Data Analyst",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "₹1700/hour",
      location: "Gurgaon, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/501/non_2x/uber-logo-uber-icon-transparent-free-png.png",
      companyName: "Uber",
      datePosted: "12 days ago",
      post: "DevOps Engineer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "₹2100/hour",
      location: "Mumbai, India"
    }
  ];


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.companyName} logo={elem.brandLogo} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App