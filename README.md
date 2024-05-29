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

## Empower funnel testing

Assume that the `Dynamic Funnel Application` you built is running and is underperforming. For the last few months you have been making one off tweaks to the page configuration, but experimentation has been limited as the app only supports one configuration and because tweaks, while easy to do, are blocked by a slower than designed release process. As you and the PM have talked this problem over, its become clear that investment in a way to give the PM (and others) control of the configuration files while also supporting many different options would solve these problems and unlock the experimentation you both think you need to optimize this part of the product.

With this context in mind, draft an implementation plan that sets out a longer term vision for the system while also creating a clear roadmap to get the first iteration out in the next sprint.

### PROPOSED SYSTEM UPDATES:

#### 1. Load config from DB
  - overview
    - In order to bypass the slow release process, we should store the config in our application db and load it by making a request to the server.
    ```
      dynamic_funnel_configs {
        id: primary _key,
        version: varchar,
        config: jsonb,
        active: boolean,
        timestamps
      }
    ```
    - Storing the config data as jsonb gives us flexibility to change the shape of this data and not make those decisions in advance. The 'active' flag will allow us to easily filter out deprecated versions without having to delete them. We may want to store analytics in the future so it is good to keep old versions. Storing the version as a string rather than a number allows the PM to give versions understandable names rather than having to remember what number corresponded to what change.
  - next sprint implementation
    1. create table for dynamic_funnel_configs
    2. create POST & GET endpoints for creating new configs and fetching a single config by id or all active configs. This should utilize our system's existing roles/permissions to ensure only authorized users can make changes.
    3. create row for current config in dynamic_funnel_configs table to maintain current functionality
    4. refactor frontend code to fetch config data from server
  - future enhancements
    - create PUT endpoint for updating config's active status
    - depending on how complex these configs can get we may want to be able to 'clone' an existing one to change it so we don't have to start from scratch. Once a version is active we should not allow changes so that our analytics are clean and understandable.

#### 2. UI for updating config versions
  - overview
    - In order for the PM (or others) to create new config versions we would need to build a new interface. The simplest way to achieve this would be to utilize the existing form display functionality and add some UI elements to add/delete form fields.
  - next sprint implementation
    1. Build new interface that includes:
      - text input for version name
      - grouped select field & text input for `type` and `name` along with an `add` button to add it to the config
      - reuse existing form display components to visualize the config as it is changed
      - include `delete` buttons to remove added fields
      - save button to persist data
  - future enhancements
    - enable additional input types
    - create dashboard to view all versions and click in for details

#### 3. A/B testing multiple config versions
  - overview
    - LaunchDarkly is a great tool for A/B testing and I would recommend it in this case for speed rather than rolling our own implementation. It would allow our PM to view analytics of our experiments without our having to build out a dedicated UI.
  - next sprint implementation
    1. refactor frontend code to integrate LaunchDarkly
    2. configure LaunchDarkly to split traffic between different versions
  - future enhancements
    - allow multiple configs (not just two) to be tested against each other.

#### 4. Error Handling and Validation
  - depending on the prioritization of speed vs stability at the company it may either be a priority in the first iteration or a quick follow to add:
    - server-side validation to prevent invalid configs from being saved
    - frontend error handling and graceful degredation if fetching fails or the config data is invalid