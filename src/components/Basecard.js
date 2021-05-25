import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cardNum: '',
        cardName: '',
        month: '',
        year: '',
        cvv: '',
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
// const Basecard = () => {
    render() {
        return  (
            <div className="flex justify-center rounded-lg ">
                <div className="shadow-lg p-5 ">
                <div className="bg-local p-5 h-52 w-96 rounded-lg shadow-2xl mb-10" style={{ backgroundImage: `url(/assets/7.jpeg)`, backgroundSize: '100% 100%'}}>
                <div className="flex justify-between">
                    <div className="bg-local h-10 w-12 " style={{ backgroundImage: `url(/assets/chip.png)`, backgroundSize: '100% 100%'}}/>
                    <div className="bg-local h-10 w-12" style={{ backgroundImage: `url()`, backgroundSize: '100% 100%'}}/>
                </div>
                    <p className="text-white pt-8 font-bold text-lg">{this.state.cardNum}</p>
                    <div className="flex justify-between"><p className="text-white text-xs mt-5">Card Holder</p>
                    <p className="inline text-white text-xs mt-5">Expires</p></div>
                    <div className="flex ">
                        <p className="inline text-white font-bold text-lg">{this.state.cardName}</p>
                        <p className="text-white font-bold text-lg ml-auto">{this.state.month}/{this.state.year}</p>
                    </div>
                    
                </div>
                    <p className="text-left text-xs">Card Number</p>
                    <input size="20" pattern="[0-9]*" className="border border-gray-400 rounded-md w-96 p-2 focus:shadow-lg outline-none focus:border-blue-400 focus:border  mb-5" onChange={this.myChangeHandler} name="cardNum"></input>
                    <p className="text-left text-xs">Card Name</p>
                    <input className="border border-gray-400 rounded-md w-96 p-2 focus:shadow-lg outline-none focus:border-blue-400 focus:border mb-5" onChange={this.myChangeHandler} name="cardName"></input>
                    <div className="flex justify-between">
                        <p className="text-xs" >Expiration Date</p>
                        <p className="text-xs">CVV</p>
                    </div>
                    <div className="flex">
                    <select className="border border-gray-400 rounded-md w-min p-2 focus:shadow-lg outline-none focus:border-blue-400 focus:border mb-5  mr-3 bg-white" id="month" onChange={this.myChangeHandler} name="month">
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <select className="border border-gray-400 rounded-md w-24 p-2 focus:shadow-lg outline-none focus:border-blue-400 bg-white focus:border mb-5 " id="Year" onChange={this.myChangeHandler} name="year">
                        <option value="21">2021</option>
                        <option value="22">2022</option>
                        <option value="23">2023</option>
                        <option value="24">2024</option>
                        <option value="25">2025</option>
                        <option value="26">2026</option>
                        <option value="27">2027</option>
                        <option value="28">2028</option>
                    </select>
                    <input className="border border-gray-400 rounded-md w-24 p-2 ml-auto focus:shadow-lg outline-none focus:border-blue-400 focus:border mb-5" placeholder="CVV" onChange={this.myChangeHandler} name="cvv"></input>
                    </div>
                    <button className="text-white font-semibold bg-blue-500 px-3 py-2 border border-gray-400 focus:outline-none w-full rounded-md hover:bg-blue-700 shadow-xl">Submit</button>
                    <p className="bg-gray-400"></p>
                </div>
                
            </div>
        );
    }
}

// export default Basecard;
ReactDOM.render(<MyForm />, document.getElementById("root"));
export default MyForm;