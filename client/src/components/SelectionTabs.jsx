/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardOptionContainer from '../../containers/CardOptionContainer';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const selectionTabs = ({ cardsData, card }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Common" />
        <Tab label="Rare" />
        <Tab label="Epic" />
        <Tab label="Legendary" />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div id="modalDeck">
            {cardsData.filter((inspectedCard) => inspectedCard.rarity === 'Common').map((inspectedCard) => (
              <CardOptionContainer card={inspectedCard} originalCard={card} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div id="modalDeck">
            {cardsData.filter((inspectedCard) => inspectedCard.rarity === 'Rare').map((inspectedCard) => (
              <CardOptionContainer card={inspectedCard} originalCard={card} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div id="modalDeck">
            {cardsData.filter((inspectedCard) => inspectedCard.rarity === 'Epic').map((inspectedCard) => (
              <CardOptionContainer card={inspectedCard} originalCard={card} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <div id="modalDeck">
            {cardsData.filter((inspectedCard) => inspectedCard.rarity === 'Legendary').map((inspectedCard) => (
              <CardOptionContainer card={inspectedCard} originalCard={card} />
            ))}
          </div>
        </TabPanel>
      </SwipeableViews>
    </Paper>
  );
};

export default selectionTabs;
