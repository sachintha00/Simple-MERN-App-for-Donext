import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

function RadioButton({ field, label, value, error }) {
    return (
        <>
            <FormControlLabel
                control={<Radio {...field} />}
                label={label}
                value={value}
            />
            {error && <div className="error">{error}</div>}
        </>
    );
}

export default RadioButton;
