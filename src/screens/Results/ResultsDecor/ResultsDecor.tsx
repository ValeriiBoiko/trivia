import React from 'react';
import useStyles from '@hooks/useStyles';
import geResultsDecorStyles from './ResultsDecorStyles';
import TopLeftDecor from '@assets/images/decor/results-top-left.svg';
import TopRightDecor from '@assets/images/decor/results-top-right.svg';
import BottomLeftDecor from '@assets/images/decor/results-bottom-left.svg';
import BottomRightDecor from '@assets/images/decor/results-bottom-right.svg';
import MiddleRightOneDecor from '@assets/images/decor/results-middle-1-right.svg';
import MiddleRightTwoDecor from '@assets/images/decor/results-middle-2-right.svg';
import Decor from '@components/Decor/Decor';

const ResultsDecor = () => {
  const styles = useStyles(geResultsDecorStyles);

  return (
    <>
      <Decor decor={TopLeftDecor} style={styles.topLeftDecor} />
      <Decor decor={TopRightDecor} style={styles.topRightDecor} />
      <Decor decor={BottomLeftDecor} style={styles.bottomLeftDecor} />
      <Decor decor={MiddleRightOneDecor} style={styles.middleRightOneDecor} />
      <Decor decor={MiddleRightTwoDecor} style={styles.middleRightTwoDecor} />
      <Decor decor={BottomRightDecor} style={styles.bottomRightDecor} />
    </>
  );
};

export default React.memo(ResultsDecor);
