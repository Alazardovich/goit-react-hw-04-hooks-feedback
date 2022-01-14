import React from "react";
import PropTypes from "prop-types";
import { OptionsList, ListItem, Button } from "./CSSFeedback";

const FeedbackOptions = ({ leaveFeedback }) => {
  return (
    <OptionsList>
      <ListItem>
        <Button type="button" name="good" onClick={leaveFeedback}>
          Good
        </Button>
      </ListItem>
      <ListItem>
        <Button type="button" name="neutral" onClick={leaveFeedback}>
          Neutral
        </Button>
      </ListItem>
      <ListItem>
        <Button type="button" name="bad" onClick={leaveFeedback}>
          Bad
        </Button>
      </ListItem>
    </OptionsList>
  );
};
FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
