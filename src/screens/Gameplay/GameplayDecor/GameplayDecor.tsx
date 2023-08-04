import React from 'react';
import useStyles from '@hooks/useStyles';
import geGameplayDecorStyles from '../GameplayStyles';
import TopLeftDecor from '@assets/images/decor/game-top-left.svg';
import TopRightDecor from '@assets/images/decor/game-top-right.svg';
import BottomLeftDecor from '@assets/images/decor/game-bottom-left.svg';
import MiddleRightDecor from '@assets/images/decor/game-middle-right.svg';
import BottomRightDecor from '@assets/images/decor/game-bottom-right.svg';
import Decor from '@components/Decor/Decor';

const Gameplay = () => {
  const styles = useStyles(geGameplayDecorStyles);

  return (
    <>
      <Decor decor={TopLeftDecor} style={styles.topLeftDecor} />
      <Decor decor={TopRightDecor} style={styles.topRightDecor} />
      <Decor decor={BottomRightDecor} style={styles.bottomRightDecor} />
      <Decor decor={BottomLeftDecor} style={styles.bottomLeftDecor} />
      <Decor decor={MiddleRightDecor} style={styles.middleRightDecor} />
    </>
  );
};

export default React.memo(Gameplay);
