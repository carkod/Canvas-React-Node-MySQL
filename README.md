# Canvas-React-Node-MySQL

This is a (empty) canvas for creating React Web Apps with a Node backend and a MySQL connection

For a full tutorial, that creates a full-working app, refer to [this great blog post](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/) and their [repository](https://github.com/fullstackreact/food-lookup-demo)

## If you need to install NVM and Node

#### NVM

I used homebrew - althrough not officially supported. But I have not yet run into any issues

```
brew update
brew install nvm
source $(brew --prefix nvm)/nvm.sh
```

Follow directions on screen 

```
You should create NVM's working directory if it doesn't exist:

  mkdir ~/.nvm

Add the following to ~/.bash_profile or your desired shell
configuration file:

  export NVM_DIR="$HOME/.nvm"
  . "$(brew --prefix nvm)/nvm.sh"

You can set $NVM_DIR to any location, but leaving it unchanged from
/usr/local/Cellar/nvm/0.32.0 will destroy any nvm-installed Node installations
upon upgrade/reinstall.
```

#### Node

```
nvm install node
```

Follow any recommendations on screen e.g 

```
nvm use --delete-prefix v6.6.0
```


## If your enviroment is not up-to-date

* Possibly NVM

```
brew update 
```

* Get latest npm

```
npm install -g npm@latest 
```

* Update global npm packages

```
npm update -g
```

## Create your App folder, init repo

```
mkdir MyWebApp
cd MyWebApp
git init
...(add readme, commit, set up origin, push)
```


## Set up the CLIENT

That's what we use create-react-app for:

```
create-react-app client
```

To test:

```
cd client
npm start
```

## Set up the SERVER

###MyWebApp/server.js

The file is an example of what it may look like for a server that:
	* Serves at port 3001
	* Uses static index.html when in production mode
	* Connects to a MySQL pool (pools allow handles reconnecting)
	* Has a server-api that the client side can talk to

### MyWebApp/package.json

Contents where borrowed from [this file](https://github.com/fullstackreact/food-lookup-demo/blob/master/package.json).


### MyWebApp/start-client.js

Contents where borrowed from [this file](https://github.com/fullstackreact/food-lookup-demo/blob/master/start-client.js)
