import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


function MyForm(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [addres, setAddres] = useState("");
  const [gender, setGender] = useState("perempuan");

  const mySubmitHandler = (e) => {
    e.preventDefault();
    if (!Number(age)) {
        alert("Usia harus berupa angka");
        }else {
         alert("Data terkirim")
      console.log(username)

      var formValue = {
        username: username,
        age: age,
        addres: addres,
        gender: gender,
      }
      console.log(formValue);
    }
  };

  return (
    <form onSubmit={mySubmitHandler}>
      <p>Masukan Nama:</p>
      <input type="text" name="username" onChange={(e)=>{setUsername(e.target.value)}} />
      <p>Masukan Usia Anda: </p>
      <input type="text" name="age" onChange={(e)=>{setAge(e.target.value)}} />
      <p>Gender : </p>
          <select name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
          <option value="perempuan">Perempuan</option>
          <option value="laki-laki">Laki-Laki </option>
        </select>
      <p>Alamat: </p>
      <input type="textarea" name="addres" value={props.addres} onChange={(e)=>{setAddres(e.target.value)}} />
      <input type="submit" value="Submit" />
    </form>
  );
}
ReactDOM.render(<MyForm />, document.getElementById("root"));
