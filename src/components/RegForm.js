import { Box, Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react';


const RegForm = () => {


    return (
        <div >
            <div className="w3-card-4 w3-margin" >
                <div class="w3-container w3-brown">
                    <h2>Register form</h2>
                </div>
                <form class="w3-container" action="">
                    <p>
                        <label class="w3-text-brown"><b> Name</b></label>
                        <input class="w3-input w3-border w3-sand" name="firstName" type="text" />
                    </p>
                    <p>
                        <label class="w3-text-brown"><b>E-mail</b></label>
                        <input class="w3-input w3-border w3-sand" name="email" type="text " />

                    </p>
                    <p>
                        <button class="w3-btn w3-brown" type='Submit'>Register</button></p>
                </form>
            </div>

        </div>
    )
}

export default RegForm


