import React from "react";
import { useState } from "react";

function Right_component () {

    const [items, setItems] = useState([
        {
            car_image : "assets/img/brands/1.jpeg",
            car_name : "Honda"
        },
        {
            car_image : "assets/img/brands/2.jpeg",
            car_name : "Hyundai"
        },
        {
            car_image : "assets/img/brands/3.jpeg",
            car_name : "MarutiSuzuki"
        },
        {
            car_image : "assets/img/brands/4.jpeg",
            car_name : "Chevrolet"
        },
        {
            car_image : "assets/img/brands/5.jpeg",
            car_name : "Daewoo"
        },
        {
            car_image : "assets/img/brands/6.jpeg",
            car_name : "Datsun"
        },
        {
            car_image : "assets/img/brands/7.jpeg",
            car_name : "Fiat"
        },
        {
            car_image : "assets/img/brands/8.jpeg",
            car_name : "Ford"
        },
        {
            car_image : "assets/img/brands/9.jpeg",
            car_name : "Mahindra"
        },
        {
            car_image : "assets/img/brands/10.jpeg",
            car_name : "Mitsubishi"
        },
        {
            car_image : "assets/img/brands/11.jpeg",
            car_name : "Nissan"
        },
        {
            car_image : "assets/img/brands/12.jpeg",
            car_name : "Renault"
        },
        {
            car_image : "assets/img/brands/13.jpeg",
            car_name : "Skoda"
        },
        {
            car_image : "assets/img/brands/14.jpeg",
            car_name : "Tata"
        },
        {
            car_image : "assets/img/brands/15.jpeg",
            car_name : "Toyota"
        },
        {
            car_image : "assets/img/brands/16.jpeg",
            car_name : "Volkswegan"
        },
        {
            car_image : "assets/img/brands/17.jpeg",
            car_name : "AstronMartin"
        },
        {
            car_image : "assets/img/brands/18.jpeg",
            car_name : "Audi"
        },
        {
            car_image : "assets/img/brands/19.jpeg",
            car_name : "Bentley"
        },
        {
            car_image : "assets/img/brands/20.jpeg",
            car_name : "BMW"
        },
        {
            car_image : "assets/img/brands/21.jpeg",
            car_name : "Ferrari"
        },
        {
            car_image : "assets/img/brands/22.jpeg",
            car_name : "Jaguar"
        },
        {
            car_image : "assets/img/brands/23.jpeg",
            car_name : "Lamborghini"
        },
        {
            car_image : "assets/img/brands/24.jpeg",
            car_name : "Land Rover"
        },
        {
            car_image : "assets/img/brands/25.jpeg",
            car_name : "Meserati"
        },
        {
            car_image : "assets/img/brands/26.jpeg",
            car_name : "Mercedes"
        },
        {
            car_image : "assets/img/brands/27.jpeg",
            car_name : "Mini"
        },
        {
            car_image : "assets/img/brands/28.jpeg",
            car_name : "Porche"
        },
        {
            car_image : "assets/img/brands/29.jpeg",
            car_name : "Rolls Royce"
        },
        {
            car_image : "assets/img/brands/30.jpeg",
            car_name : "Volvo"
        },
        {
            car_image : "assets/img/brands/31.jpeg",
            car_name : "Force"
        },
        {
            car_image : "assets/img/brands/32.jpeg",
            car_name : "Isuzu"
        },
        {
            car_image : "assets/img/brands/33.jpeg",
            car_name : "HindustanMotors"
        },
        {
            car_image : "assets/img/brands/34.jpeg",
            car_name : "Jeep"
        },
        {
            car_image : "assets/img/brands/35.jpeg",
            car_name : "Opel"
        },
        {
            car_image : "assets/img/brands/36.jpeg",
            car_name : "Ssangyong"
        },
        {
            car_image : "assets/img/brands/37.jpeg",
            car_name : "Kia"
        },
        {
            car_image : "assets/img/brands/38.jpeg",
            car_name : "Mg"
        },
        {
            car_image : "assets/img/brands/39.jpeg",
            car_name : "Photon"
        },
        {
            car_image : "assets/img/brands/40.jpeg",
            car_name : "Jayem"
        },
        {
            car_image : "assets/img/brands/41.jpeg",
            car_name : "Dc"
        },
        {
            car_image : "assets/img/brands/42.jpeg",
            car_name : "Lexus"
        },
        {
            car_image : "assets/img/brands/43.jpeg",
            car_name : "Citroen"
        }

    ])


    return (
        <div className="columns_second" >
              <div className="border_1">
            
              <div className="in">    <h2 className="ones">
      Select  Manufacturer
        </h2>
        
   <input type="search" id="myInput" placeholder="🔍 Search Car Brand" class="form-control search-input" data-table="customers-list"/></div>
              
        <table class="table customers-list">
        
        <tbody>
                <tr>
                    {
                        items.map( (item, index) => <td key={index} className="gallery"><img src={item.car_image}  alt="brands"/><p>{item.car_name}</p></td>)
                    }
                </tr>

  </tbody>
        </table>
    </div>
</div>
    )
}

export default Right_component;
