import React from 'react';
import TextField from '@mui/material/TextField';

function TextInput({ field, form, label }) {
    return (
        <TextField
            fullWidth
            label={label}
            {...field}
            error={form.touched[field.name] && Boolean(form.errors[field.name])}
            helperText={form.touched[field.name] && form.errors[field.name]}
        />
    );
}

export default TextInput;
