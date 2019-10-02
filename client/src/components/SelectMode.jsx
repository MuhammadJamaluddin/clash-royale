import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SelectionTabs from './SelectionTabs';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    width: '90%',
    height: '70%',
    overflow: 'scroll',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SelectMode = ({
  cardsData, card, selectModeOpen, closeSelectMode,
}) => {
  const classes = useStyles();

  const handleClose = () => {
    closeSelectMode();
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={selectModeOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={selectModeOpen}>
          <div className={classes.paper}>
            <SelectionTabs cardsData={cardsData} card={card} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

SelectMode.propTypes = {
  cardsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  card: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    idName: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    elixirCost: PropTypes.number.isRequired,
  }).isRequired,
  selectModeOpen: PropTypes.bool.isRequired,
  closeSelectMode: PropTypes.func.isRequired,
};

export default SelectMode;
