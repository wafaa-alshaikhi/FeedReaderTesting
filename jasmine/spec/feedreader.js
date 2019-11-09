
(function () {
  //first suite
    describe('RSS Feeds', function () {
        
        //first test
        it('all feeds are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        
        //second test
        it('each feed in allFeeds object has a url and not empty ', function () {
            //to loop amoung the url feed in array
            for (let feedIndex of allFeeds) {
                expect(feedIndex.url).toBeDefined(); // first check for url
                expect(feedIndex.url).toBeTruthy(); // Second check for url
            }

        });

        
        //third test
        it('each feed in allFeeds object has a name and not empty ', function () {
            //to loop amoung the name feed in array
            for (let feedIndex of allFeeds) {
                expect(feedIndex.name).toBeDefined(); // first check for name
                expect(feedIndex.name).toBeTruthy(); // Second check for name
            }

        });
    });


    //second suite
    describe('The menu', function () {
        
        //first test
        it('menu element is hidden by default ', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
       
        //second test
        it('the menu changes visibility when the menu icon is clicked ', function () {
            let menuIcon = document.querySelector(".menu-icon-link");
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);  
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });



    });

    //third suite
    describe('Initial Entries', function () {
   
        //this function should run before each spec
        beforeEach(function (done) {
            loadFeed(0, done);
        });
        //first test
        it('there is at least a single .entry element within the .feed container. ', function (done) {
            let Entries = document.querySelector(".feed").getElementsByClassName('entry');
            expect(Entries.length).toBeGreaterThan(0);
            done();
        });

    });



//fourth suite
    describe('New Feed Selection', function () {

        let oldFeeds;
        //this function is called before each spec 
        beforeEach(function (done) {
            loadFeed(0, function () {
                 oldFeeds = document.querySelector(".feed").innerHTML;
                loadFeed(1, done);

            });
        });
        //first test
        it('the content of new feed is changed ', function (done) {
            let NewFeeds = document.querySelector(".feed").innerHTML;
            expect(oldFeeds).not.toBe(NewFeeds);
            done();

        });

    });

}());
