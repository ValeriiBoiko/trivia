import React from 'react';
import useStyles from '@hooks/useStyles';
import geLevelSettingsDecorStyles from './LevelSettingsDecorStyles';
import TopLeftDecor from '@assets/images/decor/home-top-left.svg';
import TopRightDecor from '@assets/images/decor/home-top-right.svg';
import BottomLeftDecor from '@assets/images/decor/home-bottom-left.svg';
import BottomRightDecor from '@assets/images/decor/home-bottom-right.svg';
import Decor from '@components/Decor/Decor';

const LevelSettingsDecor = () => {
  const styles = useStyles(geLevelSettingsDecorStyles);

  return (
    <>
      <Decor decor={TopLeftDecor} style={styles.topLeftDecor} />
      <Decor decor={TopRightDecor} style={styles.topRightDecor} />
      <Decor decor={BottomRightDecor} style={styles.bottomRightDecor} />
      <Decor decor={BottomLeftDecor} style={styles.bottomLeftDecor} />
    </>
  );
};

export default React.memo(LevelSettingsDecor);
