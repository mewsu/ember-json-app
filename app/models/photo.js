import DS from 'ember-data';

export default DS.Model.extend({
    albumId: DS.attr(),
    title: DS.attr(),
    url: DS.attr()
});
