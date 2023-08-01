import {scaleFontSize} from './layout';

export const Font = {
  PRIMARY_BOLD: 'Quicksand-Bold',
  PRIMARY_MEDIUM: 'Quicksand-Medium',
  SECONDARY_THIN: 'Comfortaa-Bold',
} as const;

export const Typography = {
  headline1: {
    fontFamily: Font.PRIMARY_MEDIUM,
    fontSize: scaleFontSize(31, 0.5),
    lineHeight: scaleFontSize(31 * 1.3, 0.5),
  },
  headline2: {
    fontFamily: Font.PRIMARY_BOLD,
    fontSize: scaleFontSize(26, 0.5),
    lineHeight: scaleFontSize(26 * 1.3, 0.5),
  },
  headline3: {
    fontFamily: Font.PRIMARY_MEDIUM,
    fontSize: scaleFontSize(25, 0.5),
    lineHeight: scaleFontSize(25 * 1.3, 0.5),
  },
  headline4: {
    fontFamily: Font.PRIMARY_MEDIUM,
    fontSize: scaleFontSize(18, 0.5),
    lineHeight: scaleFontSize(18 * 1.3, 0.5),
  },
  body1: {
    fontFamily: Font.PRIMARY_MEDIUM,
    fontSize: scaleFontSize(13, 0.5),
    lineHeight: scaleFontSize(13 * 1.3, 0.5),
  },
  body2: {
    fontFamily: Font.PRIMARY_MEDIUM,
    fontSize: scaleFontSize(12, 0.5),
    lineHeight: scaleFontSize(12 * 1.3, 0.5),
  },
  button: {
    fontFamily: Font.PRIMARY_BOLD,
    fontSize: scaleFontSize(15, 0.5),
    lineHeight: scaleFontSize(15 * 1.3, 0.5),
  },
} as const;
