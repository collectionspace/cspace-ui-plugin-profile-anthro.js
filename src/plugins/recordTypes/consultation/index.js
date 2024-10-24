import messages from './messages';
import sidebar from './sidebar';

export default () => ({
  recordTypes: {
    consultation: {
      sidebar,
      messages,
    },
  },
});
