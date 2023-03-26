import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SettingsModal from "./SettingsModal";

describe("SettingsModal", () => {
  const onSubmit = jest.fn();
  const onHide = jest.fn();

  it("should update the selected categories on checkbox change", () => {
    const { getByLabelText, getByText } = render(
      <SettingsModal show onHide={onHide} onSubmit={onSubmit} />
    );

    // Select the "Business" category checkbox
    const businessCheckbox = getByLabelText("Business");
    fireEvent.click(businessCheckbox);

    // Select the "Health" category checkbox
    const healthCheckbox = getByLabelText("Health");
    fireEvent.click(healthCheckbox);

    // Submit the form
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);

    // Check that onSubmit is called with the correct categories
    expect(onSubmit).toHaveBeenCalledWith({
      general: true,
      business: true,
      entertainment: false,
      health: true,
      science: false,
      sports: false,
      technology: false,
    });
  });

  it("should call onSubmit with the selected categories when save button is clicked", () => {
    const { getByLabelText, getByText } = render(
      <SettingsModal show onHide={onHide} onSubmit={onSubmit} />
    );
    const generalCheckbox = getByLabelText("General");
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);

    expect(onSubmit).toHaveBeenCalledWith({
      general: true,
      business: false,
      entertainment: false,
      health: false,
      science: false,
      sports: false,
      technology: false,
    });
  });

  it("should reset selected categories when cancel button is clicked", () => {
    const { getByLabelText, getByText } = render(
      <SettingsModal show onHide={onHide} onSubmit={onSubmit} />
    );
    const generalCheckbox = getByLabelText("General");
    fireEvent.click(generalCheckbox);
    const cancelButton = getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(onHide).toHaveBeenCalled();
  });

  it("should select General category by default", () => {
    const { getByLabelText } = render(
      <SettingsModal show onHide={onHide} onSubmit={onSubmit} />
    );
    const generalCheckbox = getByLabelText("General");
    expect(generalCheckbox.checked).toBe(true);
  });
});
