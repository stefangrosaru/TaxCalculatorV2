import React, { useState } from 'react';
import { Button, Container, Form, FormGroup, Table, Input,
  InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { calculate } from './Calculate';

const isNumeric = string => string.match('^[0-9]+$') !== null;

const monthly = x => '£'+(x / 12).toFixed(2);

const weekly = x => '£'+(x /52).toFixed(2);

function App() {
  const [gross, setGross] = useState('');
  const [result, setResult] = useState();

  const fit = (size = window.innerWidth) => {
    if(size<500)return "col-auto";
    if(size<1000)return "col-6";
    if(size<1250)return "col-5";
    if(size<1500)return "col-4";
    return "col-3";
  }

  return (
    <Container className={fit()}>
      <h1 className="mt-5 text-center">Calculate Tax</h1>
      <Form className="mt-5">
        <FormGroup>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>£</InputGroupText>
          </InputGroupAddon>
          <Input type="text" placeholder="Enter your salary" value={gross} onChange={e => setGross(e.target.value)} onKeyPress={e => !isNumeric(e.key) && e.preventDefault()}></Input>
          </InputGroup>
        </FormGroup>
        <div className="btn-toolbar">
        <Button color="primary" onClick={() => setResult(calculate(gross))} >Calculate</Button>
        <Button className="ml-auto" color="danger" onClick={() => setGross('') || setResult()}>Reset</Button>
        </div>
      </Form>
      {result && <>
        <h1 className="mt-5 text-center">Tax Breakdown</h1>
       <Table className="mt-5">
      <thead>
        <tr>
          <th></th>
          <th>Net Salary</th>
          <th>Tax Paid</th>
          <th>National Insurance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Yearly</th>
          <td>{`£${result.salary}`}</td>
          <td>{`£${result.tax}`}</td>
          <td>{`£${result.ni}`}</td>
        </tr>
        <tr>
          <th scope="row">Monthly</th>
          <td>{monthly(result.salary)}</td>
          <td>{monthly(result.tax)}</td>
          <td>{monthly(result.ni)}</td>
        </tr>
        <tr>
          <th scope="row">Weekly</th>
          <td>{weekly(result.salary)}</td>
          <td>{weekly(result.tax)}</td>
          <td>{weekly(result.ni)}</td>
        </tr>
      </tbody>
    </Table>
    </>}
    </Container>
  );
}

export default App;
