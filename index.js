import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class MyForm extends React.Component {
  constructor(props){
super(props);
    this.state = {username: '', age: null, gender : 'perempuan', address : ''};
  }
  mySubmitHandler = (event) => {
      event.preventDefault();
        let age = this.state.age;
        if (!Number(age)) {
          alert("Usia harus berupa angka");
        }else {
          alert("Data terkirim")
          console.log(this.state);
        }
      }
  myChangeHandler = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
  
    this.setState({address: event.target.address})
    this.setState({[nam]: val});
  }
  
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />

      <p>Gender : </p>
      <select name="gender" value={this.state.gender} onChange={this.myChangeHandler}>
       <option value="perempuan">Perempuan</option>
       <option value="laki-laki">Laki-Laki </option>
       </select>
       <p>Alamat :</p>
       <input type="textarea" name="address" value={this.state.address} onChange={this.myChangeHandler}/>
       <input type='submit' />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

export default MyForm;