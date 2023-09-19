import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Dropdown({ field, form, label, options }) {
    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
                {...field}
                error={form.touched[field.name] && Boolean(form.errors[field.name])}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default Dropdown;
