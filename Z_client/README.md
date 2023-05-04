# capstone

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## To integrate kmeans-ts: https://www.npmjs.com/package/kmeans-ts
Kmeans-ts is a npm module which allows for the kmeans to be ran by the package instead of our manual implementation
To Install: npm i kmeans-ts
To be safe can run another npm install or npm install kmeans-ts

To import: import kmeans from "kmeans-ts";

Code for generating clusters based on this module is in tim-branch and can be seen in src/components/BaseComp.vue
The comments are over the functions and the two functions which utilize the package are genSamp() and genClusters()

All that is needed to integrate this is installing the package and moving those two functions into the BaseComp.vue page 
It may take a little reorganizing of other functions howeve should be easy to integrate
