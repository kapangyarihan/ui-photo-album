import React from 'react';
import bg from '../assets/mainbg.png'
import {Button, TextField, Typography, Box} from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./Header";

const Register = () => {

    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div
                className="flex-grow bg-cover bg-center relative flex items-center justify-center flex-col"
                style={{ backgroundImage: `url(${bg})` }}
                >
                {/*Registration form*/}
                <div className="z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                    <Typography variant="h5" className="text-center pb-4 text-custom-maroon">
                        Register
                    </Typography>
                    <Box component="form" NoValidate="off">
                        <div className="space-y-4">
                            <TextField
                                label="First Name"
                                name="firstname"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                label="Last Name"
                                name="lastname"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                label="Mobile"
                                name="mobile"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                label="Email"
                                name="email"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                label="Password"
                                name="password"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: '#872434', // Tailwind's bg-red-800 equivalent
                                '&:hover': {
                                    backgroundColor: '#7f1d1d', // Tailwind's hover:bg-red-900 equivalent
                                },
                                color: '#fff', // White text color
                                marginTop: '10px'
                            }}
                        >
                            Register
                        </Button>
                    </Box>

                    {/*Login Link*/}
                    <div className="flex justify-center text-sm mt-4">
                        <span className="text-gray-600">Already have an account?&nbsp;</span>
                        <Link to ="/" className="text-custom-maroon hover:underline">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;