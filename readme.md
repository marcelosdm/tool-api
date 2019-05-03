# Tool API

This is a simple API to store useful tools with their names, links, descriptions and tags.

## Getting Started

To run this api successfully, you'll need to setup a few things first.

### Prerequisites

1. MongoDB database.

It can be local or even online.

2. Create a _.env_ file in the root folder. It needs the following variables:

   a. NODE_ENV - eg. _develpment_ or _test_

   b. APP_SECRET - it can be anything. For example, _MYSECRET123_

   c. DB_URL - the url for the database.

**Example:**

```
NODE_ENV=development
APP_SECRET=MYAPP123
DB_URL=mongodb+srv://<user>:<password>.mongodb.net/test?retryWrites=true
```

### Installing

To get a development env running, you should just run one of those commands bellow.

**Using npm**

```
npm install
```

**Using yarn**

```
yarn install
```

## Running the tests

To run the tests, simply run the command bellow.

```
yarn test
```

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [Jest](https://jestjs.io/) - Testing framework

## Authors

- [**Marcelo Melo**](https://github.com/marcelosdm)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
