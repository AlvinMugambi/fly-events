import React from "react";
// reactstrap components
import { Form, FormGroup, Input, Button, Label, FormText } from "reactstrap";
import ImageUploader from "react-images-upload";
// core components

function EventForm(props) {
  const [pictures, setPictures] = React.useState([]);
  const [eventName, setEventName] = React.useState("");
  const [eventOwner, setEventOwner] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");
  const [date, setDate] = React.useState("");
  const onDrop = picture => {
    setPictures(picture);
  };

  const createEvent = () => {
    props.createEvent(
      pictures,
      eventName,
      eventOwner,
      description,
      location,
      startTime,
      endTime,
      date
    );
    props.disableModal(false);
  };
  return (
    <>
      <div className="container">
        <Form>
          <div className="form-row">
            <FormGroup className="col-md-6">
              <label htmlFor="inputName">Event Name</label>
              <Input
                id="inputName"
                placeholder="Name"
                type="text"
                onChange={e => setEventName(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup className="col-md-6">
              <label htmlFor="inputOwner">Event Owner</label>
              <Input
                id="inputOwner"
                placeholder="Owner Name"
                type="text"
                onChange={e => setEventOwner(e.target.value)}
              ></Input>
            </FormGroup>
          </div>
          <FormGroup>
            <label htmlFor="inputDescription">Description</label>
            <Input
              id="inputDescription"
              placeholder="Give details about your event"
              type="textarea"
              onChange={e => setDescription(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <label htmlFor="inputAddress2">Location</label>
            <Input
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              type="text"
              onChange={e => setLocation(e.target.value)}
            ></Input>
          </FormGroup>
          <div className="form-row">
            <FormGroup className="col-md-6">
              <label htmlFor="inputCity">City</label>
              <Input
                id="inputCity"
                type="text"
                placeholder="e.g. Nairobi"
              ></Input>
            </FormGroup>
            <FormGroup className="col-md-2">
              <label htmlFor="inputDate">Date</label>
              <Input
                id="inputDate"
                type="text"
                placeholder="YYYY-MM-DD format"
                onChange={e => setDate(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup className="col-md-2">
              <label htmlFor="inputStartTime">Start Time</label>
              <Input
                id="inputStartTime"
                type="text"
                placeholder="e.g. 4pm"
                onChange={e => setStartTime(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup className="col-md-2">
              <label htmlFor="inputEndTime">End Time</label>
              <Input
                id="inputEndTime"
                type="text"
                placeholder="e.g. 10pm"
                onChange={e => setEndTime(e.target.value)}
              ></Input>
            </FormGroup>
          </div>
          <FormGroup>
            <Label for="exampleFile">Images</Label>
            <ImageUploader
              withIcon={true}
              buttonText="Choose images"
              onChange={onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
              withPreview
            />
            <FormText color="muted">Upload your photos for the event</FormText>
          </FormGroup>

          <Button color="primary" type="submit" onClick={createEvent}>
            Create
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EventForm;
