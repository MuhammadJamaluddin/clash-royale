import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import SendIcon from '@material-ui/icons/Send';

const ShareButton = ({ shareCards, currentDeck }) => (
  <div>
    <Button
      variant="contained"
      color="primary"
      id="send"
      onClick={() => shareCards(currentDeck)}
    >
      Share
      <SvgIcon>
        <SendIcon />
      </SvgIcon>
    </Button>
  </div>
);

ShareButton.propTypes = {
  shareCards: PropTypes.func.isRequired,
  currentDeck: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShareButton;
