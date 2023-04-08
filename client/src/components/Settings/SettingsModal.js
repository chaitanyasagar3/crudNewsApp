// SettingsModal.js

import { React, useState } from "react";
import { Modal, Form, FormGroup, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const SettingsModal = ({ show, onHide, onSubmit }) => {
  const {user:{preferences}} = useAuth() || {user:{preferences:{}}};
  const [selectedCategories, setSelectedCategories] = useState({
    general: true,
    business: false,
    entertainment: false,
    health: false,
    science: false,
    sports: false,
    technology: false,
    ...preferences,
  });

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setSelectedCategories((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedCategories);
  };

  const handleCancel = () => {
    const categoriesCopy = { ...preferences };
    setSelectedCategories(categoriesCopy);
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={handleCancel}
      centered
      className="settings-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center text-custom fw-bold">
          Settings
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Form.Check
              type="checkbox"
              id="general"
              label="General"
              name="general"
              checked={selectedCategories.general}
              onChange={handleCategoryChange}
              className="custom-control custom-checkbox text-custom"
            />
            <Form.Check
              type="checkbox"
              id="business"
              label="Business"
              name="business"
              checked={selectedCategories.business}
              onChange={handleCategoryChange}
              className="custom-control custom-checkbox text-custom"
            />
            <Form.Check
              type="checkbox"
              id="entertainment"
              label="Entertainment"
              name="entertainment"
              checked={selectedCategories.entertainment}
              onChange={handleCategoryChange}
              className="custom-control custom-checkbox text-custom"
            />
            <Form.Check
              type="checkbox"
              id="health"
              label="Health"
              name="health"
              checked={selectedCategories.health}
              onChange={handleCategoryChange}
              className="custom-control custom-checkbox text-custom"
            />
            <Form.Check
              type="checkbox"
              id="science"
              label="Science"
              name="science"
              checked={selectedCategories.science}
              onChange={handleCategoryChange}
              className="custom-control custom-checkbox text-custom"
            />
            <Form.Check
              type="checkbox"
              id="sports"
              label="Sports"
              name="sports"
              checked={selectedCategories.sports}
              onChange={handleCategoryChange}
              className="custom-control custom-checkbox text-custom"
            />
            <Form.Check
              type="checkbox"
              id="technology"
              label="Technology"
              name="technology"
              checked={selectedCategories.technology}
              onChange={handleCategoryChange}
              className="custom-control custom-checkbox text-custom"
            />
          </FormGroup>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" className="me-2" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!Object.values(selectedCategories).some(Boolean)}
            >
              Save
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SettingsModal;
