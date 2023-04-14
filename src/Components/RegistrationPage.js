import React, { useState } from 'react';
import  './RegistrationPage.css'
import SuicideScreeningForm from './SuicideScreeningForm';

function RegistrationPage(){
    const [Suicide, setSuicide] = useState(false)
    const changeSuicide = (event) =>{
        if(event.target.value === "yes"){
            setSuicide(true)
        }
        else{
            setSuicide(false)
        }
    }    
    return(
        <div >
            <h1 className='heading'>Register Here</h1>
            <div className='pStyle' >
                <label className='space'>Patient Name</label> 
                <input className='inputStyle' type='text' placeholder='Name' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Age</label>
                <input type='number' className='inputStyle' min="1" placeholder='Age' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space' htmlFor="dob" name="dob">Enter Date of Birth</label>
                <input className='inputStyle' type='date'/><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Chief Complaint</label>
                <input className='inputStyle' type='text' placeholder='Chief Complaint' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Allergies</label>
                <input className='inputStyle' type='text' placeholder='Allergies' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Medications</label>
                <input className='inputStyle' type='text' placeholder='Medications' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Vaccinations</label>
                <input className='inputStyle' type='text' placeholder='Vaccinations' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Pain Score</label>
                <input className='inputStyle' type='number' placeholder='Pain Score' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Injury</label>
                <input className='inputStyle' type='text' placeholder='Injury' /><br/><br/>
            </div>

            <div className='pStyle'>
                <label className='space' for="illness" name="illness">Exposed to any illness:</label>      
                <select className='inputStyle' name="illness" id="illness">
                    <option value="tuberculosis">tuberculosis</option>   
                    <option value="Chicken pox">Chicken pox</option> 
                    <option value="measoles">measoles</option>
                    <option value="pertussis">pertussis</option>
                    <option value="cold">cold</option>
                    <option value="Flu">Flu</option>
                    <option value="Covid">covid</option>
                    <option value="Other">Other</option>

                </select><br/><br/>   
            </div> 

            <div className='pStyle'>
                <label className='space'>Suicide Screening</label>
                <select onChange={changeSuicide} className='inputStyle'>
                    <option value="yes">yes</option>
                    <option selected value="No">No</option>
                </select>
                
            </div>

            <div className='ButtonStyle'>
                <button className='btn'>SUBMIT</button>
            </div>
            {Suicide && <SuicideScreeningForm/>}
        </div>
    );
}

export default RegistrationPage;