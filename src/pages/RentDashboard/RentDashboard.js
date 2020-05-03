import React from "react";
import "./RentDashboard.scss";
import logosmall from '../../assets/images/logosmall.PNG'
import i10 from '../../assets/images/i10.jpg'
import suzuki from '../../assets/images/suzuki.jpg'
import honda from '../../assets/images/honda.jpg'
import ford from '../../assets/images/ford.jpg'
import eyesdropper from '../../assets/icons/eyedropper.svg'
import rupee from '../../assets/icons/rupee.svg'
import seat from '../../assets/icons/seat.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import twitter from '../../assets/icons/twitter.svg'
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import Card from 'react-bootstrap/Card'

import "react-datepicker/dist/react-datepicker.css";

class RentDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [{
          image: i10,
          carName: "Hyundai Grand i10",
          color: "White",
          model: "1.2 Kappa Dual VTVT BS6 Petrol Engine",
          vehicleNumber: "18 D 4356",
          seating: 4,
          rent: 350,
          isPetrol: true,
          desc: "Hyundai GRAND i 10 NIOS comes with Wonder Warranty options of upto 5 years Std. Customer can choose any warranty option as per his driving requirement at the time of new vehicle delivery. From a strong body structure to Standard Dual airbags and ABS with EBD, maximum care has been taken to integrate a plethora of safety features"
        },
        {
          image: ford,
          carName: "Ford EcoSport",
          color: "Deep Blue",
          model: "1.2 Kappa Dual VTVT BS6 Petrol Engine",
          vehicleNumber: "18 D 4357",
          seating: 4,
          rent: 1350,
          isPetrol: true,
          desc: "Hyundai GRAND i 10 NIOS comes with Wonder Warranty options of upto 5 years Std. Customer can choose any warranty option as per his driving requirement at the time of new vehicle delivery. From a strong body structure to Standard Dual airbags and ABS with EBD, maximum care has been taken to integrate a plethora of safety features"
        },
        {
          image:  suzuki,
          carName: "Suzuki Black",
          color: "Glossy Black",
          model: "1.2 Kappa Dual VTVT BS6 Petrol Engine",
          vehicleNumber: "18 D 4359",
          seating: 5,
          rent: 850,
          isPetrol: false,
          desc: "Suzuki Black NIOS comes with Wonder Warranty options of upto 5 years Std. Customer can choose any warranty option as per his driving requirement at the time of new vehicle delivery. From a strong body structure to Standard Dual airbags and ABS with EBD, maximum care has been taken to integrate a plethora of safety features"
        },
        {
          image: honda,
          carName: "Honda CR-V",
          color: "Blue",
          model: "1.2 Kappa Dual VTVT BS6 Petrol Engine",
          vehicleNumber: "18 D 7356",
          seating: 4,
          rent: 450,
          isPetrol: true,
          desc: "Honda CR-V comes with Wonder Warranty options of upto 5 years Std. Customer can choose any warranty option as per his driving requirement at the time of new vehicle delivery. From a strong body structure to Standard Dual airbags and ABS with EBD, maximum care has been taken to integrate a plethora of safety features"
        }
      ]
    };
  }

  //  carRows = this.state.cars.map((item, key) =>
  //   <
  //   li key = {
  //     item.carName
  //   } > {
  //     item.carName
  //   } < /li>
  // );





  render() {
    return ( < div className = "dashboardMain" >
      <
      div className = "logoTop" >
      <
      img src = {
        logosmall
      }
      className = "logo" / >
      <
      /div>

      <div className = "container" >
      <label className = "title" > Carsfor rent < /label> 
      <div className = "divider" / >
      <div className = "cardView" >
      <span className = "carTitle" > Car Details < /span> 
      <span className = "rentTitle" > Rent Per Day < /span>

      <ul className="ul" > {
        this.state.cars.map((item, index) =>
          <
          Card className = "cardSec" >
          <
          div className = "imgSec" >
          <
          img src = {
            item.image
          }
          className = "carImg" / >
          <
          /div>


          <div className = "content" >
          <div className = "carIcon" >
          <span className = "carName" > {
            item.carName
          } < /span> 
          <div className = "iconSec" >
          <span className = "eyedropper" > < img src = {
            eyesdropper
          }
          className = "icon" / > {
            item.color
          } < /span> <span className = "seat" > < img src = {
            seat
          }
          className = "icon" / > {
            item.seating
          }
          Seater < /span> < /div >
          </div>

          <div className = "priceSec" >
          <span className = "price" > < img src = {
            rupee
          }
          className = "rupeesicon" / > {
            item.rent
          } < /span> < /div >
           <div className = "btnSec" >
          <ButtonCustom className = "greyDark"
          titleBtn = "Book Now"
          onClick = {
            () => {
              this.props.history.push("/form", {
                carDetails: item
              });
            }
          }
          /> 
          < ButtonCustom className = "greyLight"
          titleBtn = "Details"
          onClick = {
            () => {
              this.props.history.push("/details", {
                carDetails: item
              });
            }
          }
          /> 
          </div> 
          </div > 
          </Card>
        )
      } <
      /ul>


      </div>

      <div className = "footer" >
      <span className = "title" > Rent Vroom < /span>
      <span > RentVroom Pvt.Ltd. < /span> 
      <span className = "addreess" > No: 296, 3 rd Crosas Rd, Jakkaasnadra, 1 st Block, Koramgola, Bengluru, Karnataka 560034 < /span> <
      div className = "socialIcon" >
      <
      img src = {
        twitter
      }
      className = "socicon" / >
      <
      img src = {
        instagram
      }
      className = "socicon" / >
      <
      img src = {
        linkedin
      }
      className = "socicon" / >
      <
      /div> <
      div className = "lastSec" >
      <
      div className = "leftPart" >
      <
      span > Home < /span> <
      span > Contact < /span> <
      span > About < /span> < /
      div > <
      div className = "rightPart" >
      <span > Privacy Policy < /span> 
      <span > Term Of Services < /span>

      </div> < /div > </div>

      </div> 
      < /div >
    );
  }
}
export default RentDashboard;