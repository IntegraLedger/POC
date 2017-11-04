module.exports = {
  "extends": "standard",
  "rules": {
    // Unfortunately, esline doesn't grok the "Office" object, I guess.
    "no-undef": 0,

    // Disable nuisance hazards to rapid iteration and troubleshooting.
    "no-unused-vars": 0,
    "spaced-comment": 0,
    "no-trailing-spaces": 0,
    "no-multiple-empty-lines": 0,
    "quotes": 0,
    "semi": 0,
    "indent": 0,
    "padded-blocks": 0,
    "space-before-function-paren": 0,
    
    // As far as I can tell, our "standard" expects these rules to be
    // known to eslint, and it has no idea what they are.  Must be yet
    // another version mismatch.  Disabling them for now.
    "react/jsx-sort-prop-types": 0,
    "react/require-extension": 0,
    "react/wrap-multilines": 0
  }
};
