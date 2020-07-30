##### this is the application for better video calling or work from home features

##### this web application is designed on node and react and functions on a single github page

##### the process to run the application are shared below

##### video explanation in the video folder provided for help

##### download mongosb on your pc for viewing the server

##### download nodejs from the browser on your pc using website nodejs.org

- on installation open the terminal or cmd to check installation
  - npm -v
  - node -v

##### clone the resporatory to a fresh folder

- open two terminals and change directory to the folder locaion

  - to do this copy the folder path which contains all the other folders such as app, video, applicationServer, etc
  - then open terminal and write cd pasteTheFilePathHere

  - terminal 1 // server

    - npm i concurrently
    - cd app
    - npm i
    - cd ..
    - npm i
    - cd applicationServer
    - npm i
    - cd ..
    - cd video
    - npm i
    - cd server
    - npm i
    - cd ..
    - cd ..
    - npm run tsinge

  - terminal 2 // frontend

    - cd app/
    - if linux or mac only
      - export PORT=5000
    - if windows only and only
      - set PORT=5000
    - npm run start
