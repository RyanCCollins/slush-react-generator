# Slush React-generator [![Build Status](https://travis-ci.org/RyanCCollins/slush-react-generator.svg)](https://travis-ci.org/ryanccollins/slush-react-generator) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-react-generator.png)](http://badges.enytc.com/for/npm/slush-react-generator)

> React redux generator for automating tedious react component setup, integrated with the [React Redux Simple Starter](https://github.com/RyanCCollins/react-redux-simple-starter) project.

Note:  If you're looking for a project that is a bit more opinionated, the [Scalable React Boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate) takes the feature-first approach.  Along with component generators, the scalable-react-boilerplate project serves as a starting place for building scalable apps and component libraries.

## Getting Started

Install `slush-react-generator` globally:

```bash
$ npm install -g slush-react-generator
```

### Usage

Create a new folder for your project:

```bash
$ mkdir my-slush-react-generator
```

Run the generator from within the new folder:

```bash
$ cd my-slush-react-generator && slush react-generator
```

### Generators
The following generators are provided for usage with React
- Stateless Functional Components
```
npm run gen:component
```
- Containers
```
npm run gen:container
```

The generators will create new folders within the component and container directories respectively, along with a accompanying .scss file.  

Coming soon, there will be generators for:
- Action Creators
- Reducers
- Tests

### File Structure
* Some files left out for brevity.  Please reference the files in the [React Redux Simple Starter](https://github.com/RyanCCollins/react-redux-simple-starter) project for information about the file structure.
```
.
├── README.md
├── LICENSE
├── index.html
├── package.json
├── webpack.config.js
├── app/
|   ├── fonts
|   ├── images
|   ├── src
|   |   ├── actions
|   |   ├── components
|   |   |   ├── MyComponent
|   |   |   ├── MyOtherComponent
|   |   |   ├── App.js
|   |   |   ├── Main.js
|   |   |   └── index.js
|   |   ├── containers
|   |   |   ├── MyContainer
|   |   |   └── index.js
|   |   ├── pages
|   |   ├── reducers
|   |   ├── store
|   |   ├── utils
|   |   └── index.js
|   ├── styles
|   └── tests
|   |   ├── actions
|   |   ├── components
|   |   ├── reducers
|   |   └── test_helper.js
├── .eslintignore
├── .eslintrc
├── .gitattributes
└── .gitignore
```

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/ryanccollins/slush-react-generator/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/ryanccollins/slush-react-generator/issues).

## Timeline / Todos
* [x] Add stateless functional component and container generators
* [x] Migrate to feature-first architecture
* [ ] Add reducer and action creator generators
* [ ] Add test generators
* [ ] Add documentation for generators

## License

The MIT License

Copyright (c) 2016, Ryan Collins

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
