import React from "react";
import {Restaurant} from '../interfaces';

type RestaurantRowProps = {
  restaurant: Restaurant;
}

const RestaurantRow: React.FC<RestaurantRowProps> = ({restaurant}) => {
  const {name, city, state, telephone, genre} = restaurant;

  return (
    <tr>
      <td>{name}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{telephone}</td>
      <td>{genre}</td>
    </tr>
  )
}

export default RestaurantRow;
