<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{title}}</title>
  <style>
    p {
      height: 32px;
      line-height: 32px;
      padding: 0 5px;
      margin: 0;
      overflow: hidden;
      background-color: #dec9c9;
    }
     p:nth-child(even) {
      background-color: #fff;
     }
    .list {
      display: block;
      float: left;
    }
    span.list {
      width: 25%;
    }
    a.list {
      width: 75%;
    }
  </style>
</head>
<body>
  {{#each files}}
    <p><span class="list">{{icon}}</span> <a href="{{../dir}}/{{file}}" class="list">{{file}}</a></p>
  {{/each}}
</body>
</html>