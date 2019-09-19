<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{title}}</title>
  <style>
    p {
      margin: 0 5px 10px;
      overflow: hidden;
    }
    .list {
      display: block;
      float: left;
    }
    span.list {
      width: 15%;
    }
    a.list {
      width: 85%;
    }
  </style>
</head>
<body>
  {{#each files}}
    <p><span class="list">{{icon}}</span> <a href="{{../dir}}/{{file}}" class="list">{{file}}</a></p>
  {{/each}}
</body>
</html>