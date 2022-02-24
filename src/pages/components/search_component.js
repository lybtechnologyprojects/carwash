import React, { useState } from 'react';


// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
    {
        id: 1,
        car_image : "assets/img/brands/1.jpeg",
        car_name : "Honda"
    },
    {
        id: 2,
        car_image : "assets/img/brands/2.jpeg",
        car_name : "Hyundai"
    },
    {
        id: 3,
        car_image : "assets/img/brands/3.jpeg",
        car_name : "MarutiSuzuki"
    },
    {
        id: 4,
        car_image : "assets/img/brands/4.jpeg",
        car_name : "Chevrolet"
    },
    {
        id: 5,
        car_image : "assets/img/brands/5.jpeg",
        car_name : "Daewoo"
    },
    {
        id: 6,
        car_image : "assets/img/brands/6.jpeg",
        car_name : "Datsun"
    },
    {
        id: 7,
        car_image : "assets/img/brands/7.jpeg",
        car_name : "Fiat"
    },
    {
        id: 8,
        car_image : "assets/img/brands/8.jpeg",
        car_name : "Ford"
    },
    {
        id: 9,
        car_image : "assets/img/brands/9.jpeg",
        car_name : "Mahindra"
    },
    {
        id: 10,
        car_image : "assets/img/brands/10.jpeg",
        car_name : "Mitsubishi"
    },
    {
        id: 11,
        car_image : "assets/img/brands/11.jpeg",
        car_name : "Nissan"
    },
    {
        id: 12,
        car_image : "assets/img/brands/12.jpeg",
        car_name : "Renault"
    },
    {
        id: 13,
        car_image : "assets/img/brands/13.jpeg",
        car_name : "Skoda"
    },
    {
        id: 14,
        car_image : "assets/img/brands/14.jpeg",
        car_name : "Tata"
    },
    {
        id: 15,
        car_image : "assets/img/brands/15.jpeg",
        car_name : "Toyota"
    },
    {
        id: 16,
        car_image : "assets/img/brands/16.jpeg",
        car_name : "Volkswegan"
    },
    {
        id: 17,
        car_image : "assets/img/brands/17.jpeg",
        car_name : "AstronMartin"
    },
    {
        id: 18,
        car_image : "assets/img/brands/18.jpeg",
        car_name : "Audi"
    },
    {
        id: 19,
        car_image : "assets/img/brands/19.jpeg",
        car_name : "Bentley"
    },
    {
        id: 20,
        car_image : "assets/img/brands/20.jpeg",
        car_name : "BMW"
    },
    {
        id: 21,
        car_image : "assets/img/brands/21.jpeg",
        car_name : "Ferrari"
    },
    {
        id: 22,
        car_image : "assets/img/brands/22.jpeg",
        car_name : "Jaguar"
    },
    {
        id: 23,
        car_image : "assets/img/brands/23.jpeg",
        car_name : "Lamborghini"
    },
    {
        id: 24,
        car_image : "assets/img/brands/24.jpeg",
        car_name : "Land Rover"
    },
    {
        id: 25,
        car_image : "assets/img/brands/25.jpeg",
        car_name : "Meserati"
    },
    {
        id: 26,
        car_image : "assets/img/brands/26.jpeg",
        car_name : "Mercedes"
    },
    {
        id: 27,
        car_image : "assets/img/brands/27.jpeg",
        car_name : "Mini"
    },
    {
        id: 28,
        car_image : "assets/img/brands/28.jpeg",
        car_name : "Porche"
    },
    {
        id: 29,
        car_image : "assets/img/brands/29.jpeg",
        car_name : "Rolls Royce"
    },
    {
        id: 30,
        car_image : "assets/img/brands/30.jpeg",
        car_name : "Volvo"
    },
    {
        id: 31,
        car_image : "assets/img/brands/31.jpeg",
        car_name : "Force"
    },
    {
        id: 32,
        car_image : "assets/img/brands/32.jpeg",
        car_name : "Isuzu"
    },
    {
        id: 33,
        car_image : "assets/img/brands/33.jpeg",
        car_name : "HindustanMotors"
    },
    {
        id: 34,
        car_image : "assets/img/brands/34.jpeg",
        car_name : "Jeep"
    },
    {
        id: 35,
        car_image : "assets/img/brands/35.jpeg",
        car_name : "Opel"
    },
    {
        id: 36,
        car_image : "assets/img/brands/36.jpeg",
        car_name : "Ssangyong"
    },
    {
        id: 37,
        car_image : "assets/img/brands/37.jpeg",
        car_name : "Kia"
    },
    {
        id: 38,
        car_image : "assets/img/brands/38.jpeg",
        car_name : "Mg"
    },
    {
        id: 39,
        car_image : "assets/img/brands/39.jpeg",
        car_name : "Photon"
    },
    {
        id: 40,
        car_image : "assets/img/brands/40.jpeg",
        car_name : "Jayem"
    },
    {
        id: 41,
        car_image : "assets/img/brands/41.jpeg",
        car_name : "Dc"
    },
    {
        id: 42,
        car_image : "assets/img/brands/42.jpeg",
        car_name : "Lexus"
    },
    {
        id: 43,
        car_image : "assets/img/brands/43.jpeg",
        car_name : "Citroen"
    }

];

function Search_component () {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <td key={user.id} className="gallery"><img src={user.car_image}  alt="brands"/><p>{user.car_name}</p></td>
          ))
        ) : (  
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default Search_component;