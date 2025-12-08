export default (configContext) => {
  const {
    React,
    Immutable,
    FormattedMessage,
  } = configContext.lib;

  return {
    tags: {
      formatter: (data) => {
        let nagpraEligible;
        const nagpraCategoriesList = data.get('nagpraCategories');
        if (nagpraCategoriesList) {
          const nagpraCategories = nagpraCategoriesList.get('nagpraCategory');
          if (Immutable.List.isList(nagpraCategories)) {
            nagpraEligible = nagpraCategories.filter((category) => !!category).length > 1;
          } else {
            nagpraEligible = nagpraCategories && nagpraCategories.length > 0;
          }
        }

        const eligible = (
          <FormattedMessage
            id="grid.collectionobject.nagpraEligible"
            description="The text for NAGPRA eligible results the search grid view"
            defaultMessage="NAGPRA-eligible"
          />
        );

        return nagpraEligible ? <p>{eligible}</p> : null;
      },
    },
  };
};
