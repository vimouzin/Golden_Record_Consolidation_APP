step 1: 
to start this project please enter your jfrog log in credentials within 
your .npmrc file.
    your file should look like this:
    registry=https://tamr.jfrog.io/artifactory/api/npm/npm/
_auth = "your token here"
email="your tamr email here"
always-auth=true

step 2: 
    npm login
    then 
    npm install

step 3: cd into top directory /GOLDEN_RECORD
        and run sudo java -jar flex-transform-cli-jvm-0.0.0-all.jar --server

step 4: within /GOLDEN_RECORD/golden_record_consolidation/
        DO npm run start 

        m