1.  Explain the differences between `client-side routing` and `server-side routing`.

- Server side routing causes a whole new page to be downloaded from the server, while client side routing will just change the component being rendered.
- Server side routing also causes a whole page reload that has performance issues. Client side routing on the other hand will save the application another round trip to the server

2.  What does HTTP stand for?

  HyperText Transfer Protocol

3.  What does CRUD stand for?

  `CREATE` `READ` `UPDATE` `DELETE`

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

  |CRUD ACRONYM|HTTP METHOD|
  |------------|-----------|
  |CREATE|POST|
  |READ|GET|
  |UPDATE|POST/PATCH|
  |DELETE|DELETE|

5.  Mention three tools we can use to make AJAX requests

- [Axios](https://github.com/axios/axios)
- [Native Javascript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JQuery AJAX](http://api.jquery.com/jquery.ajax/)
