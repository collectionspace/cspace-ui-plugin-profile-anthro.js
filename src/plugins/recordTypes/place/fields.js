export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      ...extensions.nagpra.place.fields,
      'ns2:places_common': {
        ...extensions.associatedAuthority.fields,
      },
    },
  };
};
