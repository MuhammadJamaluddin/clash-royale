import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const levels = {
  Common: '1',
  Rare: '3',
  Epic: '6',
  Legendary: '9',
};

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    width: '70%',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const InformationModal = ({ card, open, toggleModal }) => {
  const classes = useStyles();

  const handleClose = () => {
    toggleModal(card._id);
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>{card.name}</h2>
            <p>
              <b>Elixir cost: </b>
              {card.elixirCost}
            </p>
            <p>
              <b>Type: </b>
              {card.type}
            </p>
            <p>
              <b>Rarity: </b>
              {card.rarity}
            </p>
            <p>
              <b>Level: </b>
              {levels[card.rarity]}
            </p>
            <p>
              <b>Description: </b>
              {card.description}
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default InformationModal;
