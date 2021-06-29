import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Results = () => {
  const dispatch = useDispatch();
  const userLocation = useSelector(state => state.zipCode);

  const apiUrl = `https://api.yelp.com/v3/businesses/search?location=${userLocation}&open_now=true&sort_by=rating`;

  // const apiOptions = {
  //   method: 'GET',
  //   url: `https://api.yelp.com/v3/businesses/search?location=${userLocation}&open_now=true&sort_by=rating`,
  //   headers: {
  //     Authorization:
  //       'Bearer OegFATirJ1-3hDdhCzcrhXJxWlJJrgDZ0dmTd9-HsW_FCb7DybH5-yEeAWSLkjr5szlmHDc0hDOL0zfwdupuYTYMFzcKZDghM0DPfHDVvmskDjMkF0EdCvbnX1jbYHYx',
  //   },
  // };

  useEffect(() => {
    axios.request(apiUrl, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization:
          'Bearer OegFATirJ1-3hDdhCzcrhXJxWlJJrgDZ0dmTd9-HsW_FCb7DybH5-yEeAWSLkjr5szlmHDc0hDOL0zfwdupuYTYMFzcKZDghM0DPfHDVvmskDjMkF0EdCvbnX1jbYHYx',
      },
    });
  });

  const buttonHandler = e => {
    e.preventDefault();
    console.log(userLocation);
  };
  return (
    <div>
      <h2>Hello these are your results for {userLocation}.</h2>
      <button onClick={buttonHandler}>Test Redux Store</button>
    </div>
  );
};

export default Results;
