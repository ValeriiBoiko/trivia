# Trivia (FireartStudio)

## How to start

1. Download the project
2. Open terminal, go inside project folder and run `yarn` to install packages
3. Run `cd ios && pod install && cd ..` if you want to run the application on IOS device
4. Run `yarn run android` or `yarn run ios` to run app on Android or IOS device correspondingly

## Notes

- I included `.env` under versioning control only because it is test task
- the colors and typography are inconsistent throughout the application. I sticked to the design, but if it was real project I would bring this up
- as it is test task I was not considering additional cases and extra flexibility for components
- as the test task is quite extensive I decided to not spent additional time on creating animations with `react-native-reanimated`, but used **experimental** React Native Layout Animation API

## Project structure

The structure of source code is pretty classic:

- `api` - files to work with remote API services
- `assets` - all kind of assets: images, fonts, icons, etc.
- `components` - reusable pieces of UI
- `hooks` - place to store files reusable logic placed in custom hooks
- `screens` - components, each of which represent navigation route
- `store` - redux-related files
- `theme` - files that are related global styling and theming
- `types` - global type that are not related to any other specific piece of app or module declarations files
