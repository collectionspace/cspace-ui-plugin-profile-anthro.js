import advancedSearch from './advancedSearch';
import columns from './columns';
import detailList from './detailList';
import forms from './forms';
import fields from './fields';
import grid from './grid';
import messages from './messages';
import optionLists from './optionLists';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    collectionobject: {
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      detailList: detailList(configContext),
      forms: forms(configContext),
      fields: fields(configContext),
      grid: grid(configContext),
      messages: messages(configContext),
    },
  },
});
