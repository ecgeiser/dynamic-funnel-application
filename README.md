## Running Locally

available at http://localhost:3000/ after running 
```npm start```


## Dynamic Funnel Application

Using Vue or React, please create a single page application to gather data from users with a dynamic set of `Input Pages` ending in a `Display Page`. The first page loaded should always be the first data `Input Page`. The application must load some configuration file at start and it should be easy to change the configuration without rebuilding the application. Details on the configuration format are found below.

### Input Pages

Shows 1 to N input fields based on the configuration loaded on app load.

### Display Page

Displays all data gathered in a readable UI.

### Configuration Format

The top level content of the configuration file is an Object with a `pages` property. This property is an Array of `Page Objects`. 

`Page Objects` have one property, `fields`, which is an array of `Field Objects`.

`Field Objects` have two properties, `name` and `type`. The `name` is the name of the field being updated. `type` is the type of input that is being requested.

Below is an example showing a single page with 3 inputs.

```json
{
  "pages": [
    {
      "fields": [
        {"name":"Name", "type":"string"},
        {"name":"Age", "type":"number"},
        {"name":"Date", "type":"date"},
      ]
    }
  ]
}
```

Below is an example showing a 3 pages with 1 input each.

```json
{
  "pages": [
    {
      "fields": [
        {"name":"Name", "type":"string"},
      ]
    },
    {
      "fields": [
        {"name":"Age", "type":"number"},
      ]
    },
    {
      "fields": [
        {"name":"Date", "type":"date"},
      ]
    }
  ]
}
```