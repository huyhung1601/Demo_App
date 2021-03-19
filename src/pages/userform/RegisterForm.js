import React from 'react'

import {useStep} from 'react-hooks-helper'
import Account from './Account'
import Profile from './Profile'
import Review from './Review'



const RegisterForm = (props) => {   
    const steps = [
        {id: 'account'},
        {id: 'profile'},
        {id: 'review'},
    ] 

    
    const{step, navigation} = useStep({
        steps,
        initialStep: 0
    });

    const registerProps = {navigation,...props}
    
    
    //console.log(registerProps.navigation)

    switch(step.id){
        case 'account':
            return(
                <Account
                    {...registerProps}
                />
            );
        case 'profile':
            return(
               <Profile
                    {...registerProps}
               />                    
            )
        case 'review':
            return(
                <Review
                {...registerProps}
                />
            )
    }
    
}

export default RegisterForm
