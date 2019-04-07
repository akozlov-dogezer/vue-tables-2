import bus from '../bus';

module.exports = function () {

    var event = 'vue-tables';
    if (this.name) event += '.' + this.name;

    this.opts.customFilters.forEach(function (filter) {
        bus.$off(`${event}.filter::${filter}`);
        bus.$on(`${event}.filter::${filter}`, function (value) {
            this.customQueries[filter] = value;
            this.updateState('customQueries', this.customQueries);
            this.refresh();
        }.bind(this));
    }.bind(this));

    bus.$off(`${event}.all_filters`);
    bus.$on(`${event}.all_filters}`, function (filters) {
        foreach(filter in filters)
        {
            this.customQueries[filter] = filter[filter];
        }
        this.updateState('customQueries', this.customQueries);
        this.refresh();
    }.bind(this));
}
