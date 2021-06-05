import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button"
import zIndex from "@material-ui/core/styles/zIndex";

const Header = ({aboutMe, projects, misc, contact}) => {
    const goToHighlights = (loc) => {
        loc.current.scrollIntoView();
    }
    return (
        <div className="customHeader" style={styles.customHeader}>
            <div style={styles.ulStyle}>
                <li style={styles.buttonMargin}><Button variant="outlined"  color="primary" style={styles.buttonStyle} onClick={() => goToHighlights(aboutMe)}>About Me</Button></li>
                <li style={styles.buttonMargin}><Button variant ="outlined" color="primary" style={styles.buttonStyle} onClick={() => goToHighlights(projects)}>Projects</Button></li>
                {/* <li style={styles.buttonMargin}><Button variant="outlined" color="primary" style={styles.aboutMe}>Education</Button></li> */}
                <li style={styles.buttonMargin}><Button variant="outlined" color="primary" style={styles.buttonStyle} onClick={() => goToHighlights(contact)}>Contact</Button></li>
            </div>
        </div>
    );
};
const styles=  {
    buttonStyle: {
        fontSize:"calc(8px + 0.4vw)",
        fontFamily:"Proxima Nova",
        maxWidth:"calc(16px+0.4vw)",
        minWidth:"calc(16px+0.4vw)",
        minHeight:"4vh",
        maxHeight:"4vh",


    },
    customHeader: {
        width:"60vw",
        height:"6vh",
        backgroundColor: "#FFB45F",
        // marginLeft:"20vw",
        // marginRight:"20vw",
        paddingTop:"1.5vh",
        // maringTop: "10vh",
        // zIndex:100,
        position: "fixed",
        top: "0vh",
        width: "100%"
        
    },
    ulStyle: {
        display:"flex",
        flexDirection:"row",
        listStyleType: "none",
        justifyContent: "space-evenly",
        
    },
    buttonMargin: {
        marginRight: "0.0vw",
        marginLeft: "0.0vw",

        
    }

}

export default Header;