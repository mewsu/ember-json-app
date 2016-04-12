import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['album_id', 'album_title'],
    album_id: null,
    album_title: null
});
