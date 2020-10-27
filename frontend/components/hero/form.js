import React, { useEffect, useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import Modal from "../modal/modal";
import Loader from "../modal/loader";
import style from "../../styles/layout.module.scss";
import { wpRestApi } from "../../routes/routes"

const From = ({ formOptions }) => {
  const [select1Data, setSelect1Data] = useState([]);
  const [select2Data, setSelect2Data] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState();
  const [modalContent, setModalContent] = useState();
  const [email, setEmail] = useState('');
  const [industry, setIndestry] = useState('');
  const [business, setBusiness] = useState('');
  const [validationError, setValidationError] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    button: { text: buttonText },
    formtitle,
    input3: { label: input3label, type: input3type },
    selectoptions,
    selectPlaceholders: { select1placeholder, select2placeholder },
  } = formOptions;

  useEffect(() => {
    const select1Data = Object.values(
      selectoptions
    ).map(({ label, value }) => ({ label, value }));
    setSelect1Data(select1Data);
  }, [selectoptions]);

  const setCorrespondingOption = (event) => {
    const index = event.nativeEvent.target.selectedIndex;
    const text = event.nativeEvent.target[index].text;
     const { target: {value:option} } = event; 
    let select2Data = [];
    Object.values(selectoptions).forEach(({ value, correspondingfields }) => {
      if (correspondingfields && value === option) {
        select2Data = Object.values(correspondingfields);
      }
    });
    setIndestry(text);
    setSelect2Data(select2Data);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const submit = (event) => {
    if(!email || !industry || !business){
        setValidationError(true)
        return;
    }
    
    setLoading(true);
    fetch(wpRestApi, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
        body: JSON.stringify({...{email,industry,business}}),
    })
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        if (!result.title) {
            throw new Error(result.data.detail)
        } else {
            result = result;
            setModalTitle(result.title);
            setModalContent(result.detail);
            setShowModal(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        setModalTitle('Something went wrong');
        setModalContent(new String(error));
        setShowModal(true);
      })
  };
  
  return (
    <Col className={`${style.form}`}>
      <h2>{formtitle}</h2>
      <Form>
        <Form.Group
          controlId="ControlSelect1"
          className={style.formGroup}
        >
          <Form.Control
            required
            as="select"
            onChange={(event) => { 
                setCorrespondingOption(event) 
                setValidationError(false)
            }}
            className={style.formField}
          >
            <option value="">{select1placeholder}</option>
            {select1Data.map(
              ({ label, value }, i) =>
                value && (
                  <option value={value} key={`select1-${i}`}>
                    {label}
                  </option>
                )
            )}
          </Form.Control>
        </Form.Group>
        {select2Data.length > 0 && (
          <Form.Group
            controlId="ControlSelect2"
            className={style.formGroup}
          >
            <Form.Control 
                required
                as="select" 
                className={style.formField}
                onChange={({target: {value}}) => {
                    setBusiness(value)
                    setValidationError(false)
                }}
                >
              <option value="">{select2placeholder}</option>
              {select2Data.map(
                ({ label, value }, i) =>
                  value && (
                    <option value={value} key={`select2-${i}`}>
                      {label}
                    </option>
                  )
              )}
            </Form.Control>
          </Form.Group>
        )}
        <Form.Group
          controlId="ControlInput3"
          className={style.formGroup}
        >
          <Form.Control
            required
            type={input3type}
            placeholder={input3label}
            className={style.formField}
            value={email}
            onChange={({target: {value}}) => {
                setEmail(value);
                setValidationError(false);
            }}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1" className={style.formGroup}>
          <Button
            onClick={(e) => submit(e)}
            variant="secondary"
            size="lg"
            type="button"
            className={style.submitButton}
          >
            {buttonText}
          </Button>
          </Form.Group>
        {
            validationError && <Form.Group><p className={style.errorText}>All fields are required</p></Form.Group>
        }

      </Form>
        {showModal && <Modal {...{ hideModal, showModal, modalTitle, modalContent }} />}
        {loading && <Loader />}
    </Col>
  );
};

export default From;
