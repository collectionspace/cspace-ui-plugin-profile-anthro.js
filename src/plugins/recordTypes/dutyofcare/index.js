import messages from './messages';
import sidebar from './sidebar';

export default () => ({
  recordTypes: {
    dutyofcare: {
      sidebar,
      messages,
    },
  },
});
