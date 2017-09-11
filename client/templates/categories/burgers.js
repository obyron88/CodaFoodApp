Template.burgers.logos = function() {
    return _.map(_.range(1, 7), function(idx) {
        return {url: '/images/b' + idx + '.png'};
    });
};