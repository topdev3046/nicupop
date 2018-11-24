import React        from 'react';
import connectField from 'uniforms/connectField';
import { TimePicker } from 'antd';
import moment from 'moment';

const TimeRange = ({onChange, value: time_range}) =>{
    
    time_range = time_range || {
        start: moment('00:00:00', 'HH:mm:ss').toDate(),
        end: moment('00:00:00', 'HH:mm:ss').toDate(),
    }

    time_range.start = time_range.start || moment('00:00:00', 'HH:mm:ss').toDate();

    time_range.end = time_range.end || moment('00:00:00', 'HH:mm:ss').toDate();

    return ( 

        <section>

            <TimePicker onChange={(time, time_string) => {
                
                const new_timerange = {
                    start: time.toDate(),
                    end: time_range.end,
                }

                if (new_timerange.start.getTime() > new_timerange.end.getTime()){
                    new_timerange.end = new_timerange.start;
                }

                onChange(new_timerange);

            }} defaultValue={moment('00:00:00', 'HH:mm:ss')} className='cust-timepicker' value={moment(time_range.start, 'HH:mm:ss')}/> 
                
            <TimePicker onChange={(time, time_string) => {

                const new_timerange = {
                    start: time_range.start,
                    end: time.toDate(),
                }

                if (new_timerange.start.getTime() > new_timerange.end.getTime()){
                    new_timerange.start = new_timerange.end;
                }

                onChange(new_timerange);

            }} defaultValue={moment('00:00:00', 'HH:mm:ss')} className='cust-timepicker' value={moment(time_range.end, 'HH:mm:ss')}/>

        </section>

    );
};

export default connectField(TimeRange);
