import React from 'react';
import PropTypes from 'prop-types';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InformationModal from './InformationModal';
import SelectModeContainer from '../../containers/SelectModeContainer';

const Card = ({
  selected, card, removeCard, toggleModal, toggleSelectModeModal,
}) => {
  const [selectModeOpen, setSelectMode] = React.useState(false);

  const remove = () => {
    removeCard(card._id);
  };

  const openSelectMode = () => {
    setSelectMode(true);
  };

  const closeSelectMode = () => {
    setSelectMode(false);
  };

  const handleOpen = () => {
    toggleModal(card._id);
  };

  return (
    selected ? (
      <div className="card">
        <img alt={`a game card showing ${card.idName}`} src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`} />
        <InfoIcon className="infoIcon" fontSize="large" onClick={handleOpen} />
        <DeleteIcon className="deleteIcon" fontSize="large" onClick={() => remove()} />
        <InformationModal card={card} open={card.open} toggleModal={toggleModal} />
      </div>
    ) : (
      <div className="notSelected">
        <AddCircleIcon className="addIcon" onClick={openSelectMode} />
        <SelectModeContainer
          card={card}
          selectModeOpen={selectModeOpen}
          closeSelectMode={closeSelectMode}
          toggleSelectModeModal={toggleSelectModeModal}
        />
      </div>
    )
  );
};

Card.propTypes = {
  selected: PropTypes.bool.isRequired,
  card: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    idName: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    elixirCost: PropTypes.number.isRequired,
  }).isRequired,
  removeCard: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  toggleSelectModeModal: PropTypes.func.isRequired,
};


export default Card;
