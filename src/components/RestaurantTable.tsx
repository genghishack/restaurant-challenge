import React, {useEffect, useState} from 'react';
import {RequestOptions} from "https";

interface Restaurant {
  address1: string;
  attire: string;
  city: string;
  genre: string;
  hours: string;
  id: string;
  lat: string;
  long: string;
  name: string;
  state: string;
  tags: string;
  telephone: string;
  website: string;
  zip: string;
}

export async function getData<T>(
  request: RequestInfo,
  options: RequestInit
): Promise<T> {
  const response = await fetch(request, options);
  const body = response.json();
  return body;
}

const RestaurantTable: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    const getRestaurants = async () => {
      const data = await getData<Restaurant[]>(
        process.env.API_ENDPOINT!,
        {
          headers: {
            Authorization: process.env.API_KEY!,
          },
        }
      );
      setRestaurants(data);
    }
    getRestaurants();
  }, []);

  return (
    <div className="restaurant">
      {restaurants.map((restaurant: Restaurant) => {
        return (
          <div>{restaurant.name}</div>
        )
      })}
    </div>
  )
}

export default RestaurantTable;
