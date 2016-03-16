"use strict";

/*!
 * jQuery Textarea AutoGrow plugin
 * Author: Bruno Sampaio
 * Licensed under the MIT license
 */
(function($) {
    var pluginName = 'autogrow';

    var textareaClass = pluginName+'-field';
    var mirrorClass = pluginName+'-mirror';

    /**
     *
     * @param selector
     * @param options
     * @returns {*}
     */
    $.fn[pluginName] = function(selector, options)
    {
        var $elements = this;
        var context = this.context;

        // Set options default value if its value is invalid
        if (options === undefined) {
            options = selector instanceof Object? selector : {};
        }

        // Set selector default value if its value is invalid
        if (typeof selector !== 'string') {
            selector = null;
        }

        if (selector) {
            $elements = $(selector, context);

            $(document).on('DOMNodeInserted', function(event) {
                var element = event.target;

                if ($(element, context).is(selector)) {
                    apply(element, options);
                }
            });
        }

        $elements.each(function(index, element) {
            apply(element, options);
        });

        return this;
    }

    /**
     *
     * @param element
     * @param options
     */
    function apply(element, options) {
        if(element.tagName === 'TEXTAREA') {
            var $textarea = $(element);
            var $mirror = $('<div></div>');

            // Add mirror classes
            $mirror.addClass(mirrorClass);

            // Add options properties to mirror element
            if(options.id !== undefined) $mirror.attr('id', index == 0? options.id : options.id+'-'+index);
            if(options.classes !== undefined) $mirror.addClass(options.classes);

            $textarea

                // Add textarea classes
                .addClass(textareaClass)

                // On input change textarea height
                .on('input keyup', function(event) {
                    var message = $textarea.val();

                    // Add a non breakable space to the message if it is empty or the last character is a line break (otherwise line break height is ignored)
                    if(!message || message.charAt(message.length - 1) == '\n') message+= '\xA0';

                    // Parse message content
                    // Replace all line breaks in the message by the line break HTML element and add message to mirror element
                    message = message
                        .replace(/&/g, '&amp;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(/ /g, '&nbsp;')
                        .replace(/\n/g, '<br/>');

                    // Add text to message field
                    $mirror.html(message);

                    // Set textarea height equal to mirror height
                    $textarea.height($mirror.height());
                })

                // On resize change mirror styles
                .off(pluginName+'.resize')
                .on(pluginName+'.resize', function() {
                    $mirror.css({
                        'border': $textarea.css('border'),
                        'font-family': $textarea.css('font-family'),
                        'font-size': $textarea.css('font-size'),
                        'font-weight': $textarea.css('font-weight'),
                        'letter-spacing': $textarea.css('letter-spacing'),
                        'line-height': $textarea.css('line-height'),
                        'padding': $textarea.css('padding'),
                        'position': 'absolute',
                        'visibility': 'hidden',
                        'white-space': 'normal',
                        'width': $textarea.css('width'),
                        'word-break': 'break-word',
                        'z-index': -1,
                        'zoom': $textarea.css('zoom'),
                    });
                })
                .trigger(pluginName+'.resize')

                // Add mirror to DOM
                .after($mirror);
        }
    }

})(jQuery);