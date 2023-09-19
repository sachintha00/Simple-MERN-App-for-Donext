import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import RadioButton from '../radio_button';
import FileInput from '../file_input';
import Dropdown from '../drop_down';
import TextInput from '../text_input';
import validationSchema from '../../schema/validations';

const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
];

const dropdownOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
];


function App() {
    return (
        <Container maxWidth="sm">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    gender: '',
                    dropdown1: '',
                    dropdown2: '',
                    dropdown3: '',
                    file: null,
                    dateOfBirth: null,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <Form>
                    <Typography variant="h4" align="center" gutterBottom>
                        Registration Form
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Field
                                name="firstName"
                                label="First Name"
                                component={TextInput}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                name="lastName"
                                label="Last Name"
                                component={TextInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name="email"
                                label="Email Address"
                                component={TextInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name="password"
                                label="Password"
                                type="password"
                                component={TextInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                component={TextInput}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">Gender</Typography>
                            <Field name="gender">
                                {({ field }) =>
                                    genderOptions.map((option) => (
                                        <RadioButton
                                            key={option.value}
                                            name={field.name}
                                            value={option.value}
                                            label={option.label}
                                            field={field}
                                        />
                                    ))
                                }
                            </Field>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} mt={1} mb={3}>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <Field
                                    name={`dropdown${index + 1}`}
                                    label={`Dropdown ${index + 1}`}
                                    options={dropdownOptions}
                                    component={Dropdown}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={12} mb={2}>
                        <Field name="file" component={FileInput} />
                    </Grid>
                    <Box mt={2}>
                        <Button variant="contained" color="primary" type="submit">
                            Register
                        </Button>
                    </Box>
                </Form>
            </Formik>
        </Container>
    );
}

export default App;
