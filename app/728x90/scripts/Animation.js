var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var cta = document.getElementById('cta');



	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {

        t.set(banner, {opacity: 1});

	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

        tl1.from(txt1, .5, {y:"+=50", autoAlpha: 0, ease: Cubic.easeInOut})
            .to(txt1, .5, {x:"-=300", ease: Cubic.easeInOut}, "+=3")
            .from(txt2, .5, {y:"+=50", autoAlpha: 0, ease: Cubic.easeInOut}, "-=.5")
            .from(cta, .5, {y:"+=50", autoAlpha: 0, ease: Cubic.easeInOut}, "-=.5");

	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
