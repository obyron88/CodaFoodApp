Template.boissons.logos = function() {
    return _.map(_.range(1, 7), function(idx) {
        return {url: '/images/bo' + idx + '.png'};
    });
};