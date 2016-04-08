import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return Ember.$.getJSON("http://jsonplaceholder.typicode.com/photos?albumId=" + params.album_id);
    }
});
