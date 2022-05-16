Install instructions
### STEP 1:

Click ["Use this template"](https://github.com/belferink1996/MERN-template/generate) to generate a
new repository.<br />
Then open your terminal and clone your repository:

> cd ~/Desktop <br />
> git clone https://github.com/KennySB1/pommodores-timer.git

<br />

### STEP 2:

Go to the root of your repository's folder, and install all dependecies:

> cd ~/Desktop/[pommodores-timer]<br />
> npm install

<br />

### STEP 3:

Prepare your MongoDB database ([atlas](https://www.mongodb.com/cloud/atlas),
[community](<https://github.com/belferink1996/MERN-template/wiki/Install-MongoDB-Community-Server-(MacOS)>)).<br />
Then configure your database within `server/constants/index.js`, by configuring the `MONGO_URI` variable.

<br />

### STEP 4: CODE !!!

<br />
<br />

### To run the client and/or the server, you can do any of the following:

#### Short Method

From the root of your project run:
> npm start

#### Long Method

Open terminal #1 (backend)
> cd ./server<br />
> npm start

Open terminal #2 (frontend)
> cd ./client<br />
> npm start