(function( root ) {

    Polymer( 'star-wars', {

        /**
         * Published properties
         */
        publish: {
            /**
             * Is the element showing
             *
             * @property _showing
             * @type boolean
             */
            _showing: false
        },


        /*-----------------------------------------------------------*\
         *
         *  Polymer lifecycle events
         *
        \*-----------------------------------------------------------*/


        /**
         * Fired when Polymer has got the element ready
         */
        ready: function() {
            this.bindAll( this );

            this.createAnimationFrames();
        },


        /**
         * Light DOM should be ready by now so grab all the relevant child nodes
         */
        attached: function() {},


        /*-----------------------------------------------------------*\
         *
         *  Events
         *
        \*-----------------------------------------------------------*/

        eventDelegates: {
            down: 'downAction',
            up: 'upAction'
        },

        /**
         * Abstract for initial touch on element
         */
        downAction: function( event ) {},

        /**
         * A click starts state transition to loading if the element is shown and not already loading
         */
        upAction: function( event ) {},


        /*-----------------------------------------------------------*\
         *
         *  Methods
         *
        \*-----------------------------------------------------------*/

        start: function() {
            var slide = this.querySelectorAll( 'star-slide' );

            slide[ 0 ].show();
        },



        /*-----------------------------------------------------------*\
         *
         *  Helpers
         *
        \*-----------------------------------------------------------*/


        /**
         * Simple, dirty bindAll implementation
         *
         * @param ctx {Object} the context to bind `this` to
         */
        bindAll: function( ctx ) {
            for ( method in this ) {
                if ( typeof this[ method ] === 'function' && !this.hasOwnProperty( method ) ) {
                    try {
                        this[ method ] = this[ method ].bind( ctx );
                    } catch( err ) {
                        console.log( this.element.name + '::', 'method binding error\n', method, err );
                    }
                }
            }
        },


        /**
         * Creates the animation frames
         */
        createAnimationFrames: function() {
            this.frames = {
                show: new KeyframeEffect([
                    { opacity: '0', transform: 'scale(.8,.8) translateY( 20 )' },
                    { opacity: '1', transform: 'scale(1,1), translateY( 0 )' }
                ]),

                hide: new KeyframeEffect([
                    { opacity: '1', transform: 'scale(1,1), translateY( 0 )' },
                    { opacity: '0', transform: 'scale(.8,.8) translateY( -10 )' }
                ])
            };
        }


    });


})( this );
