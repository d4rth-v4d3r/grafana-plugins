This plugin uses Mapbox to show a map with markers and popups. **This plugin is currently working with version prior to Grafana 6.6.4**.

You need to an API token and a map style from Mapbox in order to visualize your map. This plugin animates the last point from your dataset, grouped by key field.

This plugin expects a table data source with the following structure:

| field     | type     | description                                                                                             |
| --------- | -------- | ------------------------------------------------------------------------------------------------------- |
| image     | string   | The image to show in the popup window, it should be a link                                              |
| legend    | string   | The text to show in the popup window.                                                                   |
| key       | string   | The key to create groups of data in order to animate the last record                                    |
| name      | string   | The name of the group, used to show a legend down to the last marker of groups                          |
| latitude  | number   | Latitude                                                                                                |
| longitude | number   | Longitude                                                                                               |
| time      | DateTime | The timestamp of the record, in ISO-8601                                                                |
| icon      | string   | An icon from Fontawesome 5 to be used as marker, for example: `fas fa-circle` or `fas fa-circle 2x`     |
| color     | string   | An RGB color to fill your icon, it is optional, if not provided then a random color based on key groups |

Happy coding!
