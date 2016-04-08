import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.$.getJSON("http://jsonplaceholder.typicode.com/albums/");
    }
});
