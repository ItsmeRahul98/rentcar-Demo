import React from "react";
import "./RentDetails.scss";
import logosmall from '../../assets/images/logosmall.PNG'
import i10 from '../../assets/images/i10.jpg'
import eyesdropper from '../../assets/icons/eyedropper.svg'
import rupee from '../../assets/icons/rupee.svg'
import seat from '../../assets/icons/seat.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import twitter from '../../assets/icons/twitter.svg'
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import Card from 'react-bootstrap/Card'
import "react-datepicker/dist/react-datepicker.css";

class RentDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props.location.state.carDetails);
    this.state = {
      carDetails : props.location.state.cardDetails
    };
  }

  componentDidMount() {
    this.setState({carDetails:  this.props.location.state.cardDetails});
      console.log("carDeatils", this.state.carDetails);
  }

  render() {
    const {carDetails} = this.props.location.state;
    return (
      <div className="detailsMain">
        <div className="logoTop">
          <img src={logosmall} className="logo" />
        </div>
        <div className="container">
          <div className="cardSec">
            <div className="imgSec">
              <img src={carDetails.image} className="carImg" />
            </div>

            <div className="content">
              <div className="carIcon">
                <span className="carName">{carDetails.carName}</span>
                <div className="iconSec">
                  <span className="eyedropper"> <img src={eyesdropper} className="icon" /> {carDetails.color}</span>
                  <span className="seat"> <img src={seat} className="icon" /> {carDetails.seating} Seater</span>
                </div>
              </div>

              <div className="priceSec">
                <span>Rent per day :</span>
                <span className="price"><img src={rupee} className="rupeesicon" />{carDetails.rent}</span>
              </div>
              <div className="btnSec">
                <ButtonCustom
                  className="greyDisabled"
                  titleBtn="Book Now"
                />
                <span className="error">Currently Unavailable!</span>
              </div>
            </div>
          </div>

          <div className="detailSec">
            <label className="title">Car Details</label>
            <ButtonCustom
              className="greyDark"
              titleBtn="Not Available X"
            />
            <span>Vehicle Number: {carDetails.vehicleNumber}</span>
            <span>{carDetails.isPetrol ? "Petrol" : "Diesel"} Car</span>
            <span>{carDetails.model}</span>
            <span>{carDetails.desc}</span>

            <label className="title">Current Booking</label>
            <div className="tableSec">
              <div className="namesec">
                <span className="bluetitle">NAME</span>
                <span> Jon Doe</span>
              </div>
              <div className="nosec">
                <span className="bluetitle">PHONE NUMBER</span>
                <span>+917905654483</span>
              </div>
              <div className="datesec">
                <span className="bluetitle">ISSUE DATE</span>
                <span>25th Jan '20</span>
              </div>
              <div className="datesec">
                <span className="bluetitle">RETURN DATE</span>
                <span> 28th Jan '20</span>
              </div>
            </div>
          </div>




        </div>

        <div className="footer">
            <span className="title">Rent Vroom</span>
            <span >RentVroom Pvt. Ltd.</span>
            <span className="addreess">No: 296, 3rd Crosas Rd, Jakkaasnadra , 1st Block, Koramgola , Bengluru, Karnataka 560034 </span>
            <div className="socialIcon">
              <img src={twitter} className="socicon" />
              <img src={instagram} className="socicon" />
              <img src={linkedin} className="socicon" />
            </div>
            <div className="lastSec">
              <div className="leftPart">
                <span >Home</span>
                <span >Contact</span>
                <span >About</span>
              </div>
              <div className="rightPart">
                <span >Privacy Policy</span>
                <span >Term Of Services</span>

              </div>
            </div>
          </div>

      </div>
    );
  }
}
export default RentDetails;
