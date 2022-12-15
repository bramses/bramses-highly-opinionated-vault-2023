
```dataview
table phone, email, birthday, relationship, elink("https://instagram.com/@" + instagram, instagram) as instagram, elink("https://twitter.com/" + twitter, twitter) as twitter, elink("https://linkedin.com/@" + linkedin, linkedin) as linkedin, url as url
from "Databases/CRM"
where file.name != "CRM"
```


