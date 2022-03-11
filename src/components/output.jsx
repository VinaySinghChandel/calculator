import React, { Component } from 'react';

class CalOutput extends Component {
    render(props) {
        return(
            <div className='cal-output'>
                <div style={{paddingTop:'4%', paddingRight:'5px'}}>
                    {this.props.data}
                </div>
                <div className='cal-temp-output'>
                    {(this.props.temp) !== '' ? '= ' + this.props.temp : ''}
                </div>
            </div>
        )
    }
}

export default CalOutput;