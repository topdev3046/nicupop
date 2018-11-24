import React, { Component } from 'react';
import DateRange from './DateRange';
import TimeRange from './TimeRange';
import AutoForm from 'uniforms-antd/AutoForm';
import ErrorsField from "uniforms-antd/ErrorsField";
import SubmitField from "uniforms-antd/SubmitField";
import schema from '../lib/schema.js';
import '../App.css';
import 'antd/dist/antd.css';

class App extends Component {

    constructor(){

        super();

        this.state = {
            date_range: null,
            time_range: null,
        }

        this.onChange = this.onChange.bind(this);

        console.log(schema);

    }


    onChange(key, value) {
        this.setState({[key]: value});
    }

    render() {

        console.log('render', this.state);

        return (
            <div className="container">
            
                <AutoForm label={false} 
                    onChange={this.onChange} 
                    model={this.state}
                    schema={schema}
                    spacing={3}
                    onSubmit={(model)=>console.log('onSubmit', model)}
                    onSubmitFailure={(model)=>console.log('onSubmitFailure',model)}
                    onSubmitSuccess={(model)=>console.log('onSubmitSuccess',model)} >

                    <section className="section">
                        <DateRange name="date_range"/>
                    </section>

                    <section className="section">
                        <TimeRange name="time_range"/>
                    </section>

                    {/* <section className='section'>
                        <Repeater name='repeater' list={[
                            'List item number one',
                            'List item number two',
                            'List item number three',
                            'List item number four',
                        ]}/>
                    </section> */}

                    <ErrorsField />                    
                    <SubmitField />

                </AutoForm>

            </div>
        );
        
    }
}

export default App;
