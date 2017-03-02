import Ember from 'ember';
import _ from 'npm:lodash';
import getThemes from "../utils/get-themes";

export function initialize( application ) {

  var themeService = Ember.Service.extend({
    themes: Ember.computed(getThemes),
    init(){
      this._super(...arguments);

    },
    initThemesForComponent( component ){
      //  console.log(Object.keys(component));
      //  console.log('initThemeForComponent',component);
    },
    setInstanceCSSRuleProperty( property, instance ){
      _.bind(instance.get('_themeHandler.properties')[ property ].setInstanceCSSRule, instance)();
    },

    insertRule( rule, instance ){
      if(document.styleSheets[ document.styleSheets.length - 1 ].cssRules) {
        let index = document.styleSheets[ document.styleSheets.length - 1 ].cssRules.length;
        document.styleSheets[ document.styleSheets.length - 1 ].insertRule(rule, index);
        instance.get('_insertedStyles').push(this.getRuleSelector(rule));
      }

    },
    deleteInstanceRules( instance ){
      if(document.styleSheets[ document.styleSheets.length - 1 ].cssRules) {
        _.each(instance.get("_insertedStyles"), function ( selectorText ) {
          var index = _.findIndex(document.styleSheets[ document.styleSheets.length - 1 ].cssRules, function ( cssRule ) {

            return cssRule.selectorText === selectorText;
          });
          //console.log(index);
          if ( index >= 0 ) {
            document.styleSheets[ document.styleSheets.length - 1 ].deleteRule(index);
          }
        });
        instance.set("_insertedStyles", []);
      }

    },
    getRuleSelector( rule ){
      return _.trim(rule.split("{")[ 0 ].replace(/\s\s+/g, ' '));
    }
  });
  application.register('service:theme-service', themeService, { instantiate: true });
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'theme-service-initializer',
  initialize
};
