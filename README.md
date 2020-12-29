**Farzan salimian**

**Digikala - Task**

**Last Changed Time:** Dec 29, 2020

**Status:**  Initial

# Requirements

- **movie collection app:**

  Screens:
  Login
  Home & search
  Categories List
  Category Movies

  **API:**
  [https://documenter.getpostman.com/view/8900598/SWDzeLkp](https://slack-redir.net/link?url=https%3A%2F%2Fdocumenter.getpostman.com%2Fview%2F8900598%2FSWDzeLkp)

  **Demands:**
  clean code
  project structure
  best practices
  state Management and data handling
  reusable components



#### ***<u>App is only tested on android</u>***.



# Screens


# Login screen
## <img width="270" height="480" src="https://github.com/farzansalimian/DigikalaProject/blob/master/docImages/login.png" alt="image-20201229200908515" style="zoom: 25%;" />    
# Home & search screen
## <img width="270" height="480" src="https://github.com/farzansalimian/DigikalaProject/blob/master/docImages/search.png" alt="image-20201229201139170" style="zoom: 25%;" />    
# Categories List
## <img width="270" height="480" src="https://github.com/farzansalimian/DigikalaProject/blob/master/docImages/categories.png" alt="image-20201229201335334" style="zoom:25%;" /> 
# Category Movies
## <img width="270" height="480" src="https://github.com/farzansalimian/DigikalaProject/blob/master/docImages/categoryMovie.png" alt="image-20201229201431753" style="zoom:25%;" /> 



# Project structure

This project is build based on feature folder pattern.

<img width="270" height="480" src="https://github.com/farzansalimian/DigikalaProject/blob/master/docImages/structure.png" style="zoom:25%;" />



- src/app/App.js -> main entry where wrappers like PersistGate and Provider are used.
- src/app/rootReducer.js -> use combineReducers to combine all reducers.
- src/app/StackScreens.js -> decide which stack should be shown. options are : AppDrawerScreen if user is logged in or AuthStackScreen
- src/app/store.js -> redux configs

------------------------

- src/assets -> static assets are defined here.
- src/assets/svgIcons.js -> svg icons with react-native-svg are defined here.

--------------------

Custom reusable component are defined here.

- src/components/Button.js -> like login button
- src/components/Category.js -> items row in category list
- src/components/Chip.js -> chips in movies list
- src/components/Divider.js -> used in lists
- src/components/Input.js -> like login input
- src/components/List.js -> category & movies list with recyclerlistview
- src/components/Loading.js -> used when data is loading
- src/components/Movie.js -> items in movies list

-----------------

constant variables are defined here

- src/constants/reducerNames.js
- src/constants/screens.js
- src/constants/serverUrls.js

----------------------------------------

- src/features/auth/AuthScreen.js -> auth screen 

- src/features/auth/useAuth.js -> auth screen hooks

- src/features/auth/authSlice.js -> auth reducers & actions

  ------------------------------------------

- src/features/categories/CategoriesScreen.js -> categories list screen

- src/features/categories/categoriesSlice.js -> categories reducers & actions

- src/features/categories/useCategories.js -> categories screen hooks

---------------------------------

- src/features/errorHandlingSlice.js -> error handling reducers & actions
- src/features/useToastMessage.js -> error handling hooks which display toast message when there is an error

-------------

- src/features/movies/MoviesScreen.js -> movies list screen
- src/features/movies/moviesSlice.js -> movies reducers & actions
- src/features/movies/useMoveSearch.js -> movies screen hooks

-----------------------

- src/navigation/AppDrawerScreen.js -> drawer when user is logged in

- src/navigation/AuthStackScreen.js -> stackNavigator when user is not logged in

- src/navigation/CustomDrawerContent.js -> custom drawer component

- ------------------

- src/utils/dataHelper/auth -> data helper for auth feature

- src/utils/dataHelper/categories -> data helper for categories feature

- src/utils/dataHelper/errorHandling -> data helper for error handling feature

- src/utils/dataHelper/movies -> data helper for movies feature

- src/utils/dataHelper/navigationDataHelper.js -> data helper for navigation

- src/utils/authUtils.js -> utilities like password validation

- src/utils/dateUtils.js -> utilities like formatted date

-----------------------------------



# External libraries

```
// Navigation feature
"@react-navigation/drawer": "^5.11.4",
"@react-navigation/native": "^5.8.10",
"@react-navigation/stack": "^5.12.8",
"@react-native-community/masked-view": "^0.1.10",
"react-native-gesture-handler": "^1.9.0",
"react-native-reanimated": "^1.13.2",

// State management
"@reduxjs/toolkit": "^1.5.0",
"@react-native-async-storage/async-storage": "^1.13.2",
"axios": "^0.21.1",
"react-redux": "^7.2.2",
"redux": "^4.0.5",
"redux-persist": "^6.0.0",
"redux-thunk": "^2.3.0",

// Toast message 
"react-native-root-siblings": "^4.1.0",
"react-native-root-toast": "^3.2.1",

// List 
"recyclerlistview": "^3.0.0",
"react-native-collapsible": "^1.5.3",
"react-native-keyboard-aware-scroll-view": "^0.9.3",

// Icons
"react-native-svg": "^12.1.0",

// Used in utilities
"lodash": "^4.17.20",
"moment": "^2.29.1",




```



# Android sdk 

Open command line in **DigikalaProject/android** and run : **./generate-release-apk.sh** 

Apk location: **DigikalaProject/android/app/build/outputs/apk/release/app-release.apk**

