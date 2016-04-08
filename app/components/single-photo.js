import Ember from 'ember';

export default Ember.Component.extend({
    showPhotoDetail: false,
    actions: {
        togglePhotoShow() {
            if (this.showPhotoDetail) {
                this.set('showPhotoDetail', false);
            } else {
                this.set('showPhotoDetail', true);
            }
        }
    }
});