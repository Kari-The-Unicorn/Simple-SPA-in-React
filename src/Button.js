import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => ( <div >
 <MuiThemeProvider><RaisedButton label="Show more/ less - Button z Button.js" secondary={true} style={style}/>
         </MuiThemeProvider>  {
    /* <RaisedButton label="Primary" primary={true} style={style} />
        <RaisedButton label="Secondary" secondary={true} style={style} />
        <RaisedButton label="Disabled" disabled={true} style={style} />
        <br />
        <br />
        <RaisedButton label="Full width" fullWidth={true} /> */
  } </div>
);

export default RaisedButtonExampleSimple;