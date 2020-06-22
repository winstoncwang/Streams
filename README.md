# Streams

Focuses on building a video streaming page that allows users to create read update and destroy their stream. Initially, I will be utilising REACT/REDUX to build the frontend portion. RTMP server will be used to handle the video feed in this case.

UI structure:
-Guest Page(allows existing user to login)

    - Index Page : shows all the ongoing video streams
    - Show Stream Page : shows the selected video stream

-Existing User Page(allows logout)

    - Index Page : shows the created stream and allow edit etc
    - Create Stream Page : creates stream with title and description
    - Edit Stream Page : allows user to edit the existing stream page
    - Delete Stream Page : deletes the existing stream


Challenges ahead:

- Understand REACT ROUTER for navigation purpose
- Oauth authentication for login and logout
- Handle form submission in redux
- CRUD operation in react/redux
- handle error appropriately

-------------------------------------------------------------
V1.1

    Initial project setup

-------------------------------------------------------------
V1.2

    adding component file for different route

-------------------------------------------------------------
V1.3

    adding route for different page

-------------------------------------------------------------
V1.4

    add header and fix link outside browser router error

-------------------------------------------------------------
V2.1

    adding googleAuth component and wire gapi js library

-------------------------------------------------------------
V2.2

    load and init the oauth process

-------------------------------------------------------------
V2.3

    fix small bug with syntax error and using auth object to determine the login states

-------------------------------------------------------------
V2.31

    dynamic change to the loggin status via listen()

-------------------------------------------------------------
V2.4

    adding google oauth 2.0 for the correct login status as a button
    
-------------------------------------------------------------
V2.5

    adding redux or state management, add reducer, action creater, react-redux
    
-------------------------------------------------------------
V2.51

    adding userId as a parameter to the action creator to widen use of state management

    
-------------------------------------------------------------
V3.1

    add redux devtools for debugging redux

    
-------------------------------------------------------------
V3.2

    adding redux form, using field component to render inputbox

    
-------------------------------------------------------------
V3.3

    create a validation function to return errors when empty input is submitted

    
-------------------------------------------------------------
V3.4

    display error when user enter empty input

    
-------------------------------------------------------------
V3.41

    display error depending on the condition

    
-------------------------------------------------------------
V4.1

    setup json server for tracking stream id and data

    
-------------------------------------------------------------
V4.2

    create a rest post call to create a stream, update to action creater

    



