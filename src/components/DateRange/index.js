
import React from 'react';
import connectField from 'uniforms/connectField';
import { DatePicker } from 'antd';
const { RangePicker} = DatePicker;

const DateRange = ({onChange, value: data_range}) =>{
    return (
        <section>
            <RangePicker onChange={(date, date_string) =>{

                const new_daterange = {
                    start: date[0].toDate(),
                    end: date[1].toDate()
                }

                onChange(new_daterange);

            }} />
        </section>
    )
};

export default connectField(DateRange);
