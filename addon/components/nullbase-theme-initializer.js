import Ember from 'ember';


export default Ember.Component.extend({
  contextMenu: true,
  tagName: '',
  didInsertElement(){
    if ( !this.get('contextMenu') ) {
      $(document).on('contextmenu', function ( e ) {
        if ( !($(e.target).is('input') || $(e.target).is('textarea')) ) {
          e.preventDefault();
        }
      });
    }
    $(document).ready(function () {

      // Add selectText function to jQuery
      $(function () {

        $.fn.selectText = function () {
          var doc = document, element = this[ 0 ], range, selection;

          if ( doc.body.createTextRange ) {

            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
          }
          else if ( window.getSelection ) {

            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);

          }
        };
      });


    });


  }
});
