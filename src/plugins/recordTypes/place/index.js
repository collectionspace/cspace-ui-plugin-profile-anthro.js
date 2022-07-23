import forms from './forms';
import fields from './fields';
import messages from './messages';

export default () => (configContext) => ({
  recordTypes: {
    place: {
      forms: forms(configContext),
      fields: fields(configContext),
      messages: messages(configContext),
    },
  },
});
