import Ember from 'ember';
import _ from "npm:lodash";

export default Ember.Mixin.create({
  themeService: Ember.inject.service('theme-service'),
  themeContext: 'default',
  classNameBindings: [ 'themeContextClass' ],
  themeContextClass: Ember.computed('themeContext', function () {
    if ( this.get('themeContext') !== 'default' ) {
      return 'theme-context-' + this.get('themeContext');
    }
    else {
      return '';
    }

  }),
  _insertedStyles: [],
  init:function(){

    this._super(...arguments);
    this.set('_insertedStyles', []);
    this.get('themeService').initThemesForComponent(this);
    this.insertRule = _.bind(this.get('themeService').insertRule,this.get('themeService'));
  },

  willDestroyElement(){
    this.get('themeService').deleteInstanceRules(this);
    this._super(...arguments);
  },

  didInsertElement(){
    this._super(...arguments);
    let self = this;
    let setInstanceCSSRuleProperty = this.get('themeService').setInstanceCSSRuleProperty;
    _.each(this.get('_themeProperties'), function ( property ) {
     if(self.get(property))
     {
       setInstanceCSSRuleProperty(_.last(property.split('.')), self);
     }
    });

  }
});
