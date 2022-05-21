import React, { useState } from 'react';
import DatePicker from 'react-date-picker';


export default function Tripdate() {
    const [value, onChange] = useState(new Date());

    return (
        <div className='my-3'>
            <DatePicker onChange={onChange} value={value} />
        </div>
    );
}
