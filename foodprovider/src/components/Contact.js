import React from "react";
import { View } from "react";


const Contact = (props) => {
    const { pStyle, viewStyle } = styles;
    
    return ( 
    <div>
        <View style={viewStyle}>
        <p style={pStyle}>
            
            
            Witam Państwa!

        </p>
        </View>
    </div>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: "#F8F8F8"
    },

    pStyle:
    {
        fontSize: 20
    }
}

export default Contact;