import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1992-08-20T08:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 39,
    link:
      'https://www.google.com/maps/d/edit?mid=1t0VDwxDt9ktzliERW0rMJ6jYkTsEXN8&usp=sharing',
  },
  {
    key: 'games',
    label: 'Games Finished',
    value: 539,
    link:
      'http://www.gamespot.com/profile/origamibomber/stacks/gamesivefinished/76467699/',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Istanbul, TR',
  },
];

export default data;
