import Ember from 'ember';
import _ from "npm:lodash";
export default Ember.Mixin.create({
  themeService: Ember.inject.service('theme-service'),
  init: function () {
    this._super(...arguments);
    this.insertRule = _.bind(this.get('themeService').insertRule,this.get('themeService'));
    let self = this;
    let themeSettingsForItem = this.get('themeService').get('themes')[ 0 ][ this.get('className') ];
    _.each(themeSettingsForItem, function ( item ) {
      let selectorForThemeContext = item.context === 'default' ?  '': '.theme-context-'+item.context;
      _.forIn(_.omit(item,['context']), function ( propertyValue, key ) {
          let ruleDef = self.get('properties')[ key ];
          if ( ruleDef ) {
            _.bind(ruleDef.setGlobalCSSRule, self)(propertyValue,selectorForThemeContext);
          }

      });
    });
  }


});
