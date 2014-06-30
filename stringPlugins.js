;
(function($) {
    jQuery.fn.toTitleCase = function(settings) {
        var config = {
            lowers: ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At', 'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'],
            uppers: ['Id', 'Tv', 'Sit']
        };
        if (settings) {
            $.extend(config, settings);
        }

        return this.each(function() {
            var str = $(this).text();
            str = str.replace(/\b\w+/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });

            for (var i = 0; i < config.lowers.length; i++) {
                str = str.replace(new RegExp('\\b' + config.lowers[i] + '\\b', 'g'),
                    config.lowers[i].toLowerCase());
            }

            for (i = 0; i < config.uppers.length; i++) {
                str = str.replace(new RegExp('\\b' + config.uppers[i] + '\\b', 'g'),
                    config.uppers[i].toUpperCase());
            }
            return $(this).text(str);
        });
    };
}(jQuery));