import React from 'react'
import "./RegistrationForm.css"
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'

const RegistrationForm = () => {
  return (
    <div className="mainContainer">
      <div className='subContainer'>

        <Form className='form_donor'>
           <h1 className='h1'>ADD NEW DONOR</h1>
            <h4>New Donor ID : {}</h4>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className='labels'>
                  Firstname
                </Label>
                <Input
                  id='firstname'
                  
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label className='labels'>
                  Lastname
                </Label>
                <Input
                id='lastname'
                   
                type="text"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className='labels'>
                  Father's Name
                </Label>
                <Input
                id='fathersname'
                
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label className='labels'>
                  Mother's Name
                </Label>
                <Input
                id='mothersname'
                
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>


          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className='labels'>
                  Date of Birth
                </Label>
                <Input
                  id="Date"
                         
                  type="date"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label className='labels'>
                  Gender
                </Label>
                <Input
                  id="gender"
                      
                  type="select"
                >
                  <option>
                    
                  </option>
                  <option>
                    Male
                  </option>
                  <option>
                    Female
                  </option>
                  <option>
                    Other
                  </option>

                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className='labels'>
                  Blood Group
                </Label>
                <Input
                id="bloodgroup"
                  type="select"
                >
                  <option>
                    
                  </option>
                  <option>
                    A+
                  </option>
                  <option>
                    A-
                  </option>
                  <option>
                    B+
                  </option>
                  <option>
                    B-
                  </option>
                  <option>
                    AB+
                  </option>
                  <option>
                    AB-
                  </option>
                  <option>
                    O+
                  </option>
                  <option>
                    O-
                  </option>

                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label className='labels'>
                  City
                </Label>
                <Input
                id='city'
                         
                type="text"
                />
              </FormGroup>
            </Col>
          </Row>





          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className='labels'>
                  Mobile Number
                </Label>
                <Input
                id='mobilenumber'
              
                  type="number"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label className='labels'>
                  Email
                </Label>
                <Input
                id='email'
                            
                 type="email"
                />
              </FormGroup>
            </Col>
          </Row>


          <Col md={12}>
          <FormGroup>
            <Label className='labels'>
              Complete Address
            </Label>
            <Input
              className='textarea'
                        
             type="textarea"
            />
          </FormGroup>
           </Col>
        <div className='btn_div'>
        <button className='Btn'> Add Donor</button>
        <button className='Btn'> Reset</button>
        <button className='Btn'> Close</button>
        </div> 
    




        </Form>

      </div>

    </div>
  )
}

export default RegistrationForm
