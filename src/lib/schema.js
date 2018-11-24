import SimpleSchema2 from 'simpl-schema';
const schema = new SimpleSchema2({    
    date_range: {type: Object},    
    "date_range.start": {type: Date},    
    "date_range.end": {type: Date},    
    time_range: {type: Object},    
    "time_range.start": {type: Date},   
    "time_range.end": {type: Date},    
    repeater: {optional: true, type: Array},   
    'repeater.$': {type: String},
});
export default schema;