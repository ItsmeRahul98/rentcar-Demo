import React from "react";
import "./RentForm.scss";
import TextBox from "../../components/TextBox/TextBox";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import grace from '../../assets/images/grace.JPG'
import logosmall from '../../assets/images/logosmall.PNG'
import DatePicker from "react-datepicker";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import "react-datepicker/dist/react-datepicker.css";

class RentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Modal: {
      bookedCar: props.location.state.carDetails,
      show: false,
      modalMessage: "Your passwords has been changed successfully.",
      customerName: "",
      customerNumber: "",
      issueDate: null,
      returnDate: null,
      isValid: false,
      // },
    };
  }

  onNameTextChange = (e) => {
    this.setState({
      customerName: e
    });
  }

  onNumberTextChange = (e) => {
    this.setState({
      customerNumber: e
    });
  }

  onIssueDateChange = (e) => {
    this.setState({
      issueDate: e
    });
  }

  onReturnDateChange = (e) => {
    this.setState({
      returnDate: e
    });
  }

  isValid() {
    let {
      customerName,
      customerNumber,
      issueDate,
      returnDate,
      bookedCar
    } = this.state
    let modalMessage = "";
    let isValid = true;
    if (!(customerName && customerNumber && issueDate && returnDate)) {
      modalMessage = "All filed are compulsory";
      isValid = false;
    }
    if (customerNumber.length < 10) {
      modalMessage = "Customer number should be 10 digits";
      isValid = false;
    }
    if (issueDate >= returnDate) {
      modalMessage = "Return date should be greater than issue date";
      isValid = false;
    }

    this.setState({
      isValid: isValid,
      show: true,
      modalMessage: modalMessage
    })
  }


  render() {
    return (<
      div className="RentFormMain" >

      <
      div className="formcenter" >
        <
      div className="imgpart" >
          <
            img src={
              grace
            }
          /> < /
      div > <
      div className="formpart" >
            <
      div className="titleImage" >
              <
      span className="bookingtitle" > Booking Details < /span> <
                  img src={
                    logosmall
                  }
                  className="logosmall" />
                <
      /div>

      <
      div className="rowline" >
                  <
                    TextBox type="text"
                    name="name"
                    title="Name"
                    placeholder="Jane Doe"
                    handleChange={
                      (input) => this.onNameTextChange(input)
                    }
                  /> <
                    TextBox type="text"
                    name="number"
                    title="Contact Number"
                    placeholder="+91"
                    handleChange={
                      (input) => this.onNumberTextChange(input)
                    }
                  /> < /
      div > <
      div className="rowline" > {
                      /* <TextBox
                                      type="text"
                                      name="name"
                                      title="Issue Date"
                                      placeholder="DD/MM/YY"
                                    /> */
                    } <
      div className="datesec" >
                      <
      span className="datetitle" > Issue Date < /span> <
                          DatePicker
                          // showYearDropdown
                          dateFormat="dd/MM/yyyy"
                          // yearDropdownItemNumber={15}
                          // scrollableYearDropdown
                          selected={
                            this.state.issueDate
                          }
                          // startDate={new Date()}
                          // endDate={new Date(this.state.toDate)}
                          // inline
                          onChange={
                            (d) => this.onIssueDateChange(d)
                          }
                          placeholderText="" />
                        <
      /div>

      <
      div className="datesec" >
                          <
      span className="datetitle" > Return Date < /span> <
                              DatePicker
                              // showYearDropdown
                              dateFormat="dd/MM/yyyy"
                              // dateFormatCalendar="MMMM"
                              // yearDropdownItemNumber={15}
                              // scrollableYearDropdown
                              selected={
                                this.state.returnDate
                              }
                              // startDate={new Date(this.state.fromDate)}
                              // endDate={new Date(this.state.toDate)}
                              // inline
                              onChange={
                                (d) => this.onReturnDateChange(d)
                              }
                              placeholderText="" /
                            >
                            <
      /div> < /
      div > <
      div className="rowline btnarea" >
                              <
      a className="backlink"
                                onClick={
                                  () => this.props.history.goBack()
                                } >
                                Back <
      /a> <
      div className="btn" >
                                  <
                                    ButtonCustom className={
                                      "greyDark"
                                    }
                                    titleBtn="Book Car"
                                    onClick={
                                      () => {
                                        this.isValid();

                                      }
                                    }
                                  /> < /
      div > < /
      div > <
      /div> <
      div >

                                    <
      /div> < /
      div >
      <
                                      ModalComponent show={
                                        this.state.show
                                      }
                                      modalMessage={
                                        this.state.modalMessage
                                      }
                                      isValid={
                                        this.state.isValid
                                      }
                                      carName={
                                        this.state.bookedCar && this.state.bookedCar.carName ? this.state.bookedCar.carName : ""
                                      }
                                      duration={
                                        this.state.issueDate && this.state.returnDate ? this.state.issueDate.toString().substring(0, 11) + " - " + this.state.returnDate.toString().substring(0, 11) : ""
                                      }
                                      onContinueClick={
                                        () => {
                                          this.setState({
                                            show: false
                                          })
                                          if (this.state.isValid) {
                                            this.props.history.push("/dashboard")
                                          }
                                        }
                                      }
                                    /> <
      /div>
    );
  }
}
export default RentForm;
