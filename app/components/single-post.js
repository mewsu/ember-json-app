import Ember from 'ember';

export default Ember.Component.extend({
    showPostDetail: false,
    actions: {
        togglePostShow() {
            if (this.showPostDetail) {
                this.set('showPostDetail', false);
            } else {
                this.set('showPostDetail', true);
            }
        }
    }
});
