# Change Log

## v9.2.0

v9.2.0 adds support for CollectionSpace 8.3, and requires cspace-ui version 10.

### Changes
- Adds `objectNameList`, `anthroOwnershipGroupList` to the `corenagpra` template.
- Changes `secondarynagpra` template by removing several fields and adding `function` field.
- Adds the `materialTechniqueDescription` to the default template.
- Adds `nagpraDeterminations` to `tags` section.
- Adds the `NAGPRA-eligible` tag formatter.

## v9.1.0

v9.0.0 adds support for CollectionSpace 8.2, and requires cspace-ui version 10.

### Changes

- On the record editor form for Object records:
  - The field Object Production Agent (`objectProductionAgents/objectProductionAgent`) has been added. If this version of the anthropology profile is used with a CollectionSpace server older than 8.2.0, values entered in this repeating field will not be saved.
  - The displayed fields in the public browser template have been updated to be better aligned with what is displayed in the CollectionSpace Public Browser.
- The `anthroOwnershipAccess` field was unused and has been removed.
- The cspace-ui-plugin-ext-nagpra plugin has been updated to fix a bug when querying fields with the advanced search.

## v9.0.0

v9.0.0 adds support for CollectionSpace 8.1, and requires cspace-ui version 10.

- Relabel Ethnographic Culture to Cultural Group

### Breaking Changes

- On the record editor form for Object records:
  - The field Production Place Verbatim (`objectProductionPlacesVerbatim`) has been added. If this version of the anthropology profile is used with an older CollectionSpace server, values entered in these fields will not be saved.
  - The field Object Count Unit (`objectCountUnit`) has been added to the field group Object Count Group. If this version of the anthropology profile is used with an older CollectionSpace server, values entered in these fields will not be saved.
  - The field group Publised Related Links (`publishedRelatedLinkGroupList/publishedRelatedLinkGroup`) has been added. If this version of the anthropology profile is used with an older CollectionSpace server, values entered in these fields will not be saved.

## v8.0.0

v8.0.0 adds support for CollectionSpace 8.0, and requires cspace-ui version 9.

### Breaking Changes

- On the record editor form for Object records:
  - The number of objects field (`numberOfObjects`) has been replaced with the repeating object count group (`objectCountGroupList/objectCountGroup`). If this version of the anthropology profile is used with an older CollectionSpace server, values entered in the repeating group will not be saved.
  - The field collection place field (`fieldCollectionPlace`) has been replaced with the repeating field collection places (`fieldCollectionPlaces/fieldCollectionPlace`). If this version of the anthropology profile is used with an older CollectionSpace server, values entered in the repeating field will not be saved.

- On the record editor form for Chronology records:
  - Various associated authority fields have been added, in the Associated Authorities panel. If this version of the anthropology profile is used with an older CollectionSpace server, values entered in these fields will not be saved.

- On the record editor form for Person records:
  - Various associated authority fields have been added, in the Associated Authorities panel. If this version of the anthropology profile is used with an older CollectionSpace server, values entered in these fields will not be saved.

- On the record editor form for Place records:
  - Various associated authority fields have been added, in the Associated Authorities panel. If this version of the anthropology profile is used with an older CollectionSpace server, values entered in these fields will not be saved.

## v7.0.0

v7.0.0 adds support for CollectionSpace 7.2.

### Breaking Changes

The record editor form for Object records now includes the following new fields, added in CollectionSpace 7.2. To use this version of the anthropology profile with an older CollectionSpace server, these fields should be hidden; otherwise, any values entered will not be saved.

- Description Level (`descriptionLevel`)
- Object Name Controlled (`objectNameList/objectNameGroup/objectNameControlled`)
- Material Controlled (`materialGroupList/materialGroup/materialControlled`)
- Field Collection Event (`fieldCollectionEvents/fieldCollectionEvent`)
- Field Collection Site (`fieldCollectionSites/fieldCollectionSite`)
- Apparel Size (`apparelSizes/apparelSize`)
- NAGPRA Note (`nagpraNotes/nagpraNote`)
- Content controlled event or period/era (`contentEvents/contentEvent`)
- Associated controlled event or period/era (`assocEvents/assocEvent`)

## v6.0.0

v6.0.0 adds support for CollectionSpace 7.1.

### Breaking Changes

- The record editor form for place records now includes fields from the NAGPRA place extension, added in CollectionSpace 7.1. To use this version of the anthropology profile with an older CollectionSpace server, the NAGPRA-related sections should be hidden; otherwise, any values entered will not be saved.

## v5.0.0

v5.0.0 adds support for CollectionSpace 7.0.

### Breaking Changes

- The record editor form for object records now uses the `nagpraReportFiledGroupList/nagpraReportFiledGroup` repeating group, added in CollectionSpace 7.0. To use this version of the anthropology profile with an older CollectionSpace server, this field group should be hidden; otherwise, any values entered will not be saved.

  The following fields, present in CollectionSpace prior to 7.0, have been removed from the form:

  - `nagpraReportFiled`
  - `nagpraReportFiledBy`
  - `nagpraReportFiledDate`

  To use this version of the anthropology profile with an older CollectionSpace server, the above fields must be added back to the form.

- v5.0.0 requires cspace-ui version 6. The record editor form for object records now uses the annotation fields that are defined in cspace-ui as of version 6, instead of using the (now deprecated) cspace-ui-plugin-ext-annotation plugin.

## v4.1.0

- Added the Named Collection field to the Object record editor form (only if using cspace-ui version 5).
- Added local organizations to NAGPRA Report Filed By autocomplete sources.

## v4.0.0

v4.0.0 contains configuration cleanup.

### Breaking Changes

- The message ID of the label for the field `graveAssocCodes/graveAssocCode` has changed. It is now `field.collectionobjects_nagpra.graveAssocCode.name`. If you have customized this label using the previous message ID (`field.collectionobjects_nagpra.graveAssocCodes.name`), update your configuration to use the new ID. The previous ID contained a typo.

## v3.0.0

v3.0.0 adds support for CollectionSpace 6.0.

### Breaking Changes

- v3.0.0 requires cspace-ui version 4. If you've customized this profile, see the cspace-ui 4.0.0 change log for configuration changes that may be needed.

## v2.0.0

v2.0.0 adds support for CollectionSpace 5.2.

### Breaking Changes

- New fields have been added to the record editor form for object records. These fields exist in CollectionSpace 5.2, but not in older versions of CollectionSpace. To use this version of the anthropology profile with an older CollectionSpace server, these new fields should be hidden; otherwise, any values entered will not be saved. The following fields are new:

  - `nagpraReportFiled`
  - `nagpraReportFiledBy`
  - `nagpraReportFiledDate`
