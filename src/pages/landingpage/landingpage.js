import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "react-datepicker/dist/react-datepicker.css";

const LandingPage = () => {

    const [startDate, setStartDate] = useState(new Date());

    return(
        <div className = "container-fluid row">

            <div className = "justify-content-center">
                <h1>Hatch Match!</h1>
                <p>Enter location:</p>

                <Form>
                <Form.Group className="mb-3" controlId="formZip">
                <Form.Label>Zip Code: </Form.Label>
                <Form.Control type="" placeholder="Enter zip" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formDatePicker">
                <Form.Label>Date: </Form.Label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </Form.Group>

                <Button variant="secondary" type="submit"> Match the Hatch </Button>

                </Form>
            </div>

        </div>
    )
}

export default LandingPage