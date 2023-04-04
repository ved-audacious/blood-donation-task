import React from 'react'
import "./RegistrationForm.css"
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'

const RegistrationForm = () => {
  return (
    <div className="mainContainer">
      <div className='subContainer'>

        <Form>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className='labels'>
                  Firstname
                </Label>
                <Input

                  placeholder="Firstname"
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

                  placeholder="Lastname"
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className='labels'>
                  Fathers Name
                </Label>
                <Input

                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label className='labels'>
                  Mothers Name
                </Label>
                <Input
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
                  id="exampleDate"
                  name="date"
                  placeholder="date placeholder"
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
                  name="select"
                  type="select"
                >
                  <option>
                    Select
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
                  name="select"
                  type="select"
                >
                  <option>
                    Select
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

                  placeholder="Lastname"
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

                  placeholder="Firstname"
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


                  placeholder="Enter your email"
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
              
              name="text"
              type="text"
            />
          </FormGroup>
           </Col>
         <button className='Btn'> Add Donor</button>
    




        </Form>

      </div>

    </div>
  )
}

export default RegistrationForm
