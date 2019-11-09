/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        //first test
        it('all feeds are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        //Second test
        it('each feed in allFeeds object has a url and not empty ', function () {
            //to loop amoung the url feed in array
            for (let feedIndex of allFeeds) {
                expect(feedIndex.url).toBeDefined(); // first check for url
                expect(feedIndex.url.length).toBeGreaterThan(0); // Second check for url
            }

        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        //Second test
        it('each feed in allFeeds object has a name and not empty ', function () {
            //to loop amoung the name feed in array
            for (let feedIndex of allFeeds) {
                expect(feedIndex.name).toBeDefined(); // first check for name
                expect(feedIndex.name.length).toBeGreaterThan(0); // Second check for name
            }

        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        let menuVisibility = document.body
        /* TODO: Write a test that ensures the menu element is
          * hidden by default. You'll have to analyze the HTML and
          * the CSS to determine how we're performing the
          * hiding/showing of the menu element.
          */

        it('menu element is hidden by default ', function () {
            expect(menuVisibility.className).toContain('menu-hidden');
        });

        /* TODO: Write a test that ensures the menu changes
           * visibility when the menu icon is clicked. This test
           * should have two expectations: does the menu display when
           * clicked and does it hide when clicked again.
           */
        it('the menu changes visibility when the menu icon is clicked ', function () {
            let menuIcon = document.querySelector(".menu-icon-link");
            menuIcon.click();
            expect(menuVisibility.className).not.toContain('menu-hidden');
            menuIcon.click();
            expect(menuVisibility.className).toContain('menu-hidden');

        });



    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /* TODO: Write a test that ensures when the loadFeed
                 * function is called and completes its work, there is at least
                 * a single .entry element within the .feed container.
                 * Remember, loadFeed() is asynchronous so this test will require
                 * the use of Jasmine's beforeEach and asynchronous done() function.
                 */
        //this function should run before each spec
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('there is at least a single .entry element within the .feed container. ', function (done) {
            let Entries = document.querySelector(".feed").getElementsByClassName('entry');
            expect(Entries.length).toBeGreaterThan(0);
            done();


        });



    });


    /* TODO: Write a new test suite named "New Feed Selection" */


    describe('New Feed Selection', function () {

        let oldFeeds;
        //this function is called before each spec 
        beforeEach(function (done) {
            loadFeed(0, function () {
                let oldFeeds = document.querySelector(".feed").innerHTML;
                loadFeed(1, function () {
                    done();
                });

            });
        });
        /* TODO: Write a test that ensures when a new feed is loaded
* by the loadFeed function that the content actually changes.
* Remember, loadFeed() is asynchronous.
*/
        it('the content of new feed is changed ', function (done) {
            let NewFeeds = document.querySelector(".feed").innerHTML;
            expect(oldFeeds).not.toBe(NewFeeds);
            done();

        });

    });

}());
