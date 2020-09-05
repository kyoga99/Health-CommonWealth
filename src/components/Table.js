import React, { Component } from 'react'
import "./table.css";
import { useAuth0 } from "@auth0/auth0-react";


class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         procedures: [
            { id: '1', name: 'knee surgery', hospital: 'Seattle Grace', date: '09/04/2020', price: '$21,000.00', contractors: 'no' },
            { id: '2', name: 'knee surgery', hospital: 'Seattle Grace', date: '09/04/2020', price: '$21,000.00', contractors: 'no' },
            { id: '3', name: 'knee surgery', hospital: 'Seattle Grace', date: '09/04/2020', price: '$21,000.00', contractors: 'no' },
            { id: '4', name: 'knee surgery', hospital: 'Seattle Grace', date: '09/04/2020', price: '$21,000.00', contractors: 'no' }
         ]
      }
   }
   renderTableHeader() {
      let header = Object.keys(this.state.procedures[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.procedures.map((procedure, index) => {
         const { id, name, hospital, date, price, contractors } = procedure //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{hospital}</td>
               <td>{date}</td>
               <td>{price}</td>
               <td>{contractors}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>Procedure History</h1>
            <table id='procedures'>
               <tbody>
               		 <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table //exporting a component make it reusable and this is the beauty of react
