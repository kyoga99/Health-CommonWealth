import React, { Component } from 'react'
import "./table.css";
import { useAuth0 } from "@auth0/auth0-react";


class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         procedures: [
            { id: '1', name: 'INFLAMMATORY BOWEL DISEASE', hospital: 'Kaiser Permanente', date: '08/19/2020', price: '$34,543.00', contractors: 'No' },
            { id: '2', name: 'FEVER AND INFLAMMATORY CONDITIONS', hospital: 'Kaiser Permanente', date: '03/16/2020', price: '$23,829.00', contractors: 'Yes (Warning: actual cost may be higher than estimate due to 3rd-party contractors)' },
            { id: '3', name: 'HYPERTENSION', hospital: 'Kaiser Permanente', date: '07/10/2019', price: '$28,865.00', contractors: 'No' }
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