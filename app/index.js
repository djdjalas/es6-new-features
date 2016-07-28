import 'babel-polyfill';

// section 4
import constants from './newSyntaxAndBuiltInMethods/constants';
import spread from './newSyntaxAndBuiltInMethods/spread';
import strings from './newSyntaxAndBuiltInMethods/strings';
import templateLitertals from './newSyntaxAndBuiltInMethods/template-literals';
import variablScoping from './newSyntaxAndBuiltInMethods/variable-scoping';

// section 5
import arrowFunctions from './functionsAndObjects/arrow-functions';
import lexicalThis from './functionsAndObjects/lexical-this';
import destructuringAssignment from './functionsAndObjects/destructuring-assignment';
import enhancedObjectProperties from './functionsAndObjects/enhanced-object-properties';
import functionDefaultParameters from './functionsAndObjects/function-default-parameters';
import promisesAll from './functionsAndObjects/promises-all';
import promisesRealExample from './functionsAndObjects/promises-real-example';
import promises from './functionsAndObjects/promises';
import theCatch from './functionsAndObjects/the-catch';
import generators from './functionsAndObjects/generators';

// section 6
import firstClass from './classes/first-class';
import inheritance from './classes/inheritance';
import statics from './classes/static';

const section4 = () => {
  variablScoping();
  templateLitertals();
  constants();
  spread();
  strings();
};

const section5 = () => {
  // arrowFunctions();
  // lexicalThis();
  // destructuringAssignment();
  // enhancedObjectProperties();
  // functionDefaultParameters();
  // promises();
  // promisesRealExample();
  theCatch();
  // generators();
};

// section5();

const section6 = () => {
  firstClass();
  inheritance();
  statics();
};
