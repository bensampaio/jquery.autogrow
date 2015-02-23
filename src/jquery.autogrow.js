/*!
 * jQuery Textarea AutoGrow plugin
 * Author: Bruno Sampaio
 * Licensed under the MIT license
 */
(function($) {
	var pluginName = 'autogrow';

	var textareaClass = pluginName+'-field';
	var mirrorClass = pluginName+'-mirror';

	$.fn[pluginName] = function(options)
	{
		return this.each(function(index, element) {
			if(element.tagName != 'TEXTAREA') return true;

			var textarea = $(element);
			var mirror = $('<div></div>');

			// Add mirror classes
			mirror.addClass(mirrorClass);	

			// Add options properties to mirror element
			if(options !== undefined) {
				if(options.id !== undefined) mirror.attr('id', index == 0? options.id : options.id+'-'+index); 
				if(options.classes !== undefined) mirror.addClass(options.classes);
			}

			textarea

				// Add textarea classes
				.addClass(textareaClass)

				// On input change textarea height
				.on('input keyup', function(event) {
					var message = textarea.val();

					// Add a non breakable space to the message if it is empty or the last character is a line break (otherwise line break height is ignored)
					if(!message || message.charAt(message.length - 1) == '\n') message+= '\xA0';

					// Replace all line breaks in the message by the line break HTML element and add message to mirror element
					mirror.html(message.replace(/\n/g, '<br/>'));

					// Set textarea height equal to mirror height
					textarea.height(mirror.height());
				})
			
				// On resize change mirror styles
				.off(pluginName+'.resize')
				.on(pluginName+'.resize', function() {
					mirror.css({
						'border' : textarea.css('border'),
						'font-family' : textarea.css('font-family'),
						'font-size' : textarea.css('font-size'),
						'font-weight' : textarea.css('font-weight'),
						'letter-spacing' : textarea.css('letter-spacing'),
						'line-height' : textarea.css('line-height'),
						'padding' : textarea.css('padding'),
						'width' : textarea.css('width'),
						'zoom' : textarea.css('zoom')
					});
				})
				.trigger(pluginName+'.resize');

			// Add mirror to DOM
			textarea.after(mirror);
		});
	}
})($ || jquery);