<html>
<head>
  <link rel="stylesheet" href="primer.css">
</head>

<body>
  <article class="markdown-body p-5">

  <div class="container-lg pl-4">
    <h1 class=" border-0">Primer Cheatsheet</h1>
    <p class="f3">A single-page reference for all the utility classes in 
    <a href="https://github.com/primer/css">@primer/css</a> 
    <span class="text-gray-light"> v{{primerModule.version}}</span>
    <a href="https://github.com/zeke/primer-cheatsheet">(Source code)</a>
    </p>
  </div>

  {% for class in classes %}
  <div class="container-lg clearfix border-top">
    <div class="col-5 float-left border-right p-4" id="{{class.slug}}">
      <a href="#{{class.slug}}"><code>{{class.selectors}}</code></a>
    </div>
    <div class="col-7 float-left">
      <pre><code>{{class.definition}}</code></pre>
    </div>
  </div>
  {% endfor %}

  </article>
</body>
<html>