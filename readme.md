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

- open two terminals

  - terminal 1 // server

    - cd applicationServer/
    - npm i --save -g
    - npm i
    - node server.ts

  - terminal 2 // frontend

    - cd app/
    - npm i --save -g
    - npm i
    - export PORT=5000
    - npm start

  - terminal 3 // video call

    - cd twillio-video-react-hooks
    - npm i --save -g
    - npm i
    - npm run start

  - terminal 4 //video server

    - cd video
    - cd serve
    - npm i --save -g
    - npm i
    - node index.js
