export default (configContext) => {
  const {
    React,
    Immutable,
    FormattedMessage,
  } = configContext.lib;

  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    tags: {
      formatter: (data, separator = ', ') => {
        let concepts;
        const contentConcepts = data.get('contentConcepts');
        if (contentConcepts) {
          let conceptTags;
          const conceptPrefix = (
            <FormattedMessage
              id="detailList.collectionobject.concepts"
              description="The prefix for content concept tags in the search detail view"
              defaultMessage="CONCEPT TAGS: "
            />
          );
          const contentConcept = contentConcepts.get('contentConcept');
          if (Immutable.List.isList(contentConcept)) {
            conceptTags = contentConcept.filter((concept) => !!concept)
              .map((concept) => formatRefName(concept))
              .join(separator);
          } else {
            conceptTags = formatRefName(contentConcept);
          }

          concepts = (
            <p>
              {conceptPrefix}
              {conceptTags}
            </p>
          );
        }

        let determinations;
        const nagpraCategories = data.get('nagpraCategories');
        if (nagpraCategories) {
          let nagpraDeterminations;
          const nagpraPrefix = (
            <FormattedMessage
              id="detailList.collectionobject.determinations"
              description="The prefix for NAGPRA determination tags in the search detail view"
              defaultMessage="NAGPRA DETERMINATION: "
            />
          );

          const nagpraCategory = nagpraCategories.get('nagpraCategory');
          if (Immutable.List.isList(nagpraCategory)) {
            nagpraDeterminations = nagpraCategory.filter((category) => !!category)
              .map((category) => formatRefName(category))
              .join(separator);
          } else {
            nagpraDeterminations = formatRefName(nagpraCategory);
          }
          determinations = (
            <p>
              {nagpraPrefix}
              {nagpraDeterminations}
            </p>
          );
        }

        return (
          <>
            {concepts}
            {determinations}
          </>
        );
      },
    },
  };
};
