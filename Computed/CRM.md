

```dataview
table phone, email, birthday, relationship, 
choice(
	regexmatch("\w+", instagram), 
	elink("https://instagram.com/@" + instagram, instagram), "\-") as instagram,
choice(
	regexmatch("\w+", instagram),
	elink("https://twitter.com/" + twitter, twitter), "\-") as twitter,
choice(
	regexmatch("\w+", instagram),
	elink("https://linkedin.com/@" + linkedin, linkedin), "\-") as linkedin, url as url
from "Databases/CRM"
where file.name != "CRM"
```


