# Ownerstown Backend
Backend for Ownerstown interview test app.

## Task
Create an endpoint that recieves a code and returns the superhero name.  

## Implementation
Used `node` and `express` to create a single route that parses the code and returns the appropiate response.  
Also created necessary middlewares and services to perform all tasks such as error handling,etc.

## Demo
Watch the demo [here](https://akaspanion.github.io/ownerstown-test-app/).

## API

* **URL**: https://salty-woodland-05776.herokuapp.com/api/v1/heroes

* **Method**: `GET`

* **URL Params**: `code={superhero_code}`

* **Sample Call Url**: https://salty-woodland-05776.herokuapp.com/api/v1/heroes?code=0%204855

## Run locally
```bash
git clone https://github.com/AKAspanion/ownerstown-test-api.git
cd ownerstown-test-api
npm install
npm run dev
```
