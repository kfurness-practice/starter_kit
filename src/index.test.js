import { expect } from 'chai'
import jsdom from 'jsdom'
// Comes along with node (file system)
import fs from 'fs'

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true)
  })
})

// Used to test html without having to fire up a browser!!!
describe('index.html', () => {
  // when we call jsdom, asynchronous call that occurs, SO we have to set up test to be asynchronous
  // when we call it, takes a parameter we call done, that will tell mocha that our test is done, and then it will run the expect and report results AFTER it sees done
  it('should say hello', (done) => {
    // reference to html file (fs part of node's file system)
    const index = fs.readFileSync('./src/index.html', 'utf-8')
    // use jsdom to define environment, pass index.html
    // You can also provide an array of JS files to load into JSDOM environment as second parameter (after index) - if those files use fetch, must use isomorphic fetch instead, since fetch uses the browser
    jsdom.env(index, function(err, window) {
      // target first h1 - window represents window in browser
      // returns an array, just want first one hence the [0]
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!?");
      //
      done();
      // close window to free up memory taken
      window.close();
    })
  })
})
