step 1: 
to start this project please enter your jfrog log in credentials within 
your .npmrc file.
    your file should look like this:
    
    
   
registry=https://tamr.jfrog.io/artifactory/api/npm/npm/
<br>
_auth = "your token here"
<br>
email="your tamr email here"
<br>
always-auth=true
<br>

step 2: <br>
    npm login <br>
    then 
    <br>
    npm install

step 3: cd into top directory /GOLDEN_RECORD
        and run 
        
        sudo java -jar transform.jar --server

step 4: within /GOLDEN_RECORD/golden_record_consolidation/
        DO 
        
        npm run start 
