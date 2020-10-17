import React, {useEffect, useState} from 'react';
import {Restaurant} from '../interfaces';
import {getData} from '../utils';
import RestaurantRow from "./RestaurantRow";

const RestaurantTable: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    const getRestaurants = async () => {
      const data = await getData<Restaurant[]>(
        'https://code-challenge.spectrumtoolbox.com/api/restaurants',
        {
          headers: {
            Authorization: 'Api-Key q3MNxtfep8Gt',
          },
        }
      );
      setRestaurants(data);
    }
    getRestaurants();
  }, []);

  return (
    <div className="restaurant">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
          <th>Phone #</th>
          <th>Genres</th>
        </tr>
        </thead>
        <tbody>
        {restaurants.map((restaurant: Restaurant) => (
          <RestaurantRow restaurant={restaurant}/>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantTable;
