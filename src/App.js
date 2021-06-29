import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Results from './components/results';

const App = () => {
  const [location, setLocation] = useState();
  const [error, setError] = useState('');
  const [locationComplete, setLocationComplete] = useState(false);

  const dispatch = useDispatch();

  const zipValidator = userZip => {
    const zipCheck = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(userZip);
    if (zipCheck === false) {
      setError('Invalid zip code');
      setTimeout(() => {
        setError('');
      }, 3000);
    } else {
      setLocationComplete(true);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(zipValidator(location));
    dispatch({
      type: 'userLocation',
      zipCode: location,
    });
  };

  const onChange = e => {
    e.preventDefault();
    setLocation(e.target.value);
  };

  if (locationComplete === false) {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <label htmlFor='zipcode'>
            Enter your 5-digit zip code:
            <input name='zipcode' onChange={onChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <p>{error}</p>
      </div>
    );
  } else if (locationComplete === true) {
    return (
      <div>
        <Results />
      </div>
    );
  }
};

export default App;
