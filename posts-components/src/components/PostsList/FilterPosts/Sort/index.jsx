//libraries
import React from "react";
//components
import { FormGroup, Label, Input } from "reactstrap";
//styles
import "./Sort.scss";

const Sort = ({ typeSort, setTypeSortCallBack }) => {

  const selectOptions = [
    { value: 'id', text: 'Position' },
    { value: 'name', text: 'Name' },
    { value: 'city', text: 'City' },
  ]

  return (
    <FormGroup className="posts__sort">
      <Label className="posts__sort-label" htmlFor="sortSelect">Sort by:</Label>
      <Input
        className="posts__sort-input"
        value={typeSort}
        type="select"
        name="select"
        id="sortSelect"
        onChange={(e) => setTypeSortCallBack(e.target.value)}
      >
        {selectOptions.map(option => (
          <option value={option.value}>{option.text}</option>
        ))}
      </Input>
    </FormGroup>
  )
};

export default Sort;