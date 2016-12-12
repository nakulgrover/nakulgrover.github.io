



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-7f2a605da6435efc2ee84e59714b38adf17b327656cf5739a7f65a0029fbe2d5.css" integrity="sha256-fypgXaZDXvwu6E5ZcUs4rfF7MnZWz1c5p/ZaACn74tU=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-66b4793238c819b34fb96e3275e183137b80b9c46385fb8aea5551146f74fef2.css" integrity="sha256-ZrR5MjjIGbNPuW4ydeGDE3uAucRjhfuK6lVRFG90/vI=" media="all" rel="stylesheet" />
    
    
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-0aa4f1a4bd9907ebd09f265a95d4856cabf513dd39b891f737b1b35c39f12564.css" integrity="sha256-CqTxpL2ZB+vQnyZaldSFbKv1E905uJH3N7GzXDnxJWQ=" media="all" rel="stylesheet" />
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>threeJsBasicExamples/monkey.js at master · alexmackey/threeJsBasicExamples · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars2.githubusercontent.com/u/144549?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="alexmackey/threeJsBasicExamples" name="twitter:title" /><meta content="threeJsBasicExamples - Examples from webgl-threejs-fundamentals Pluralsight Course" name="twitter:description" />
      <meta content="https://avatars2.githubusercontent.com/u/144549?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="alexmackey/threeJsBasicExamples" property="og:title" /><meta content="https://github.com/alexmackey/threeJsBasicExamples" property="og:url" /><meta content="threeJsBasicExamples - Examples from webgl-threejs-fundamentals Pluralsight Course" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    
    <meta name="request-id" content="CC54F40C:6A28:5B76135:584DADD4" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="CC54F40C:6A28:5B76135:584DADD4" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="ODgwZTM3ZmE3ZWJjMTU1YmI5YjBmMWE1ZjI4ZTcwZGY0YjM2ZjExMzBhMzM1MDlhYTMyMDZiYzc4YzZmNzY3OXx7InJlbW90ZV9hZGRyZXNzIjoiMjA0Ljg0LjI0NC4xMiIsInJlcXVlc3RfaWQiOiJDQzU0RjQwQzo2QTI4OjVCNzYxMzU6NTg0REFERDQiLCJ0aW1lc3RhbXAiOjE0ODE0ODU3ODMsImhvc3QiOiJnaXRodWIuY29tIn0=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="d70c91cd5f5d366cf5574c31b981ee6fce04d0bf">
    <meta content="c87fae5124fbbfb5733d53dea08004bac7ace7de" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="6b4a8460f41e82f983e2ce813bac20c2">
    

      
  <meta name="description" content="threeJsBasicExamples - Examples from webgl-threejs-fundamentals Pluralsight Course">
  <meta name="go-import" content="github.com/alexmackey/threeJsBasicExamples git https://github.com/alexmackey/threeJsBasicExamples.git">

  <meta content="144549" name="octolytics-dimension-user_id" /><meta content="alexmackey" name="octolytics-dimension-user_login" /><meta content="24166167" name="octolytics-dimension-repository_id" /><meta content="alexmackey/threeJsBasicExamples" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="24166167" name="octolytics-dimension-repository_network_root_id" /><meta content="alexmackey/threeJsBasicExamples" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/alexmackey/threeJsBasicExamples/commits/master.atom" rel="alternate" title="Recent Commits to threeJsBasicExamples:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/alexmackey/threeJsBasicExamples/blob/master/Module3_MeshesAndGeometry/Demo07%20-%20threeJsLoader/models/monkey.js" data-pjax-transient>
  </head>


  <body class="logged-out  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



          <header class="site-header js-details-container" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav site-header-nav-main">
        <a href="/personal" class="js-selected-navigation-item nav-item nav-item-personal" data-ga-click="Header, click, Nav menu - item:personal" data-selected-links="/personal /personal">
          Personal
</a>        <a href="/open-source" class="js-selected-navigation-item nav-item nav-item-opensource" data-ga-click="Header, click, Nav menu - item:opensource" data-selected-links="/open-source /open-source">
          Open source
</a>        <a href="/business" class="js-selected-navigation-item nav-item nav-item-business" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/partners /business/features /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item nav-item-explore" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>      </nav>

      <div class="site-header-actions">
            <a class="btn btn-primary site-header-actions-btn" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
          <a class="btn site-header-actions-btn mr-1" href="/login?return_to=%2Falexmackey%2FthreeJsBasicExamples%2Fblob%2Fmaster%2FModule3_MeshesAndGeometry%2FDemo07%2520-%2520threeJsLoader%2Fmodels%2Fmonkey.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
      </div>

        <nav class="site-header-nav site-header-nav-secondary mr-md-3">
          <a class="nav-item" href="/pricing">Pricing</a>
          <a class="nav-item" href="/blog">Blog</a>
          <a class="nav-item" href="https://help.github.com">Support</a>
          <a class="nav-item header-search-link" href="https://github.com/search">Search GitHub</a>
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/alexmackey/threeJsBasicExamples/search" class="js-site-search-form" data-scoped-search-url="/alexmackey/threeJsBasicExamples/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>

        </nav>
    </div>
  </div>
</header>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Falexmackey%2FthreeJsBasicExamples"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/alexmackey/threeJsBasicExamples/watchers"
     aria-label="2 users are watching this repository">
    2
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Falexmackey%2FthreeJsBasicExamples"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/alexmackey/threeJsBasicExamples/stargazers"
      aria-label="5 users starred this repository">
      5
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Falexmackey%2FthreeJsBasicExamples"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/alexmackey/threeJsBasicExamples/network" class="social-count"
       aria-label="2 users forked this repository">
      2
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/alexmackey" class="url fn" rel="author">alexmackey</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/alexmackey/threeJsBasicExamples" data-pjax="#js-repo-pjax-container">threeJsBasicExamples</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/alexmackey/threeJsBasicExamples" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /alexmackey/threeJsBasicExamples" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/alexmackey/threeJsBasicExamples/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /alexmackey/threeJsBasicExamples/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/alexmackey/threeJsBasicExamples/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /alexmackey/threeJsBasicExamples/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/alexmackey/threeJsBasicExamples/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /alexmackey/threeJsBasicExamples/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>


  <a href="/alexmackey/threeJsBasicExamples/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /alexmackey/threeJsBasicExamples/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/alexmackey/threeJsBasicExamples/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /alexmackey/threeJsBasicExamples/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/alexmackey/threeJsBasicExamples/blob/6f009a0a8d7aaed3ca64b9041dd050ac8d89b8a3/Module3_MeshesAndGeometry/Demo07%20-%20threeJsLoader/models/monkey.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:138d92fa189184d964d7ef8213e67d35 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/alexmackey/threeJsBasicExamples/blob/master/Module3_MeshesAndGeometry/Demo07%20-%20threeJsLoader/models/monkey.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/alexmackey/threeJsBasicExamples/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/alexmackey/threeJsBasicExamples"><span>threeJsBasicExamples</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/alexmackey/threeJsBasicExamples/tree/master/Module3_MeshesAndGeometry"><span>Module3_MeshesAndGeometry</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/alexmackey/threeJsBasicExamples/tree/master/Module3_MeshesAndGeometry/Demo07%20-%20threeJsLoader"><span>Demo07 - threeJsLoader</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/alexmackey/threeJsBasicExamples/tree/master/Module3_MeshesAndGeometry/Demo07%20-%20threeJsLoader/models"><span>models</span></a></span><span class="separator">/</span><strong class="final-path">monkey.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/alexmackey/threeJsBasicExamples/contributors/master/Module3_MeshesAndGeometry/Demo07%20-%20threeJsLoader/models/monkey.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/alexmackey/threeJsBasicExamples/raw/master/Module3_MeshesAndGeometry/Demo07%20-%20threeJsLoader/models/monkey.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/alexmackey/threeJsBasicExamples/blame/master/Module3_MeshesAndGeometry/Demo07%20-%20threeJsLoader/models/monkey.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Blame</a>
      <a href="/alexmackey/threeJsBasicExamples/commits/master/Module3_MeshesAndGeometry/Demo07%20-%20threeJsLoader/models/monkey.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      48 lines (32 sloc)
      <span class="file-info-divider"></span>
    45 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">{</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>metadata<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>formatVersion<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-c1">3.1</span>,</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>generatedBy<span class="pl-pds">&quot;</span></span>   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Blender 2.66 Exporter<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>vertices<span class="pl-pds">&quot;</span></span>      <span class="pl-k">:</span> <span class="pl-c1">507</span>,</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>faces<span class="pl-pds">&quot;</span></span>         <span class="pl-k">:</span> <span class="pl-c1">500</span>,</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>normals<span class="pl-pds">&quot;</span></span>       <span class="pl-k">:</span> <span class="pl-c1">507</span>,</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>colors<span class="pl-pds">&quot;</span></span>        <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>uvs<span class="pl-pds">&quot;</span></span>           <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>materials<span class="pl-pds">&quot;</span></span>     <span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>morphTargets<span class="pl-pds">&quot;</span></span>  <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>bones<span class="pl-pds">&quot;</span></span>         <span class="pl-k">:</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>scale<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-c1">1.000000</span>,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>materials<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> [	{</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>DbgColor<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-c1">15658734</span>,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>DbgIndex<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>DbgName<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>default<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&quot;</span>vertexColors<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">	}],</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">	&quot;vertices&quot; : [0.553108,0.329612,0.821589,-0.321892,0.329612,0.821589,0.615608,0.2593,0.743464,-0.384392,0.2593,0.743464,0.662483,0.220237,0.634089,-0.431267,0.220237,0.634089,0.467171,0.142112,0.673151,-0.235954,0.142112,0.673151,0.467171,0.1968,0.774714,-0.235954,0.1968,0.774714,0.467171,0.298362,0.837214,-0.235954,0.298362,0.837214,0.389046,0.329612,0.852839,-0.157829,0.329612,0.852839,0.318733,0.2593,0.798151,-0.0875168,0.2593,0.798151,0.271858,0.220237,0.704401,-0.0406418,0.220237,0.704401,0.193733,0.407737,0.712214,0.0374832,0.407737,0.712214,0.256233,0.407737,0.798151,-0.0250168,0.407737,0.798151,0.357796,0.407737,0.852839,-0.126579,0.407737,0.852839,0.389046,0.493675,0.852839,-0.157829,0.493675,0.852839,0.318733,0.556175,0.798151,-0.0875168,0.556175,0.798151,0.271858,0.60305,0.704401,-0.0406418,0.60305,0.704401,0.467171,0.681175,0.673151,-0.235954,0.681175,0.673151,0.467171,0.618675,0.774714,-0.235954,0.618675,0.774714,0.467171,0.524925,0.837214,-0.235954,0.524925,0.837214,0.553108,0.493675,0.821589,-0.321892,0.493675,0.821589,0.615608,0.556175,0.743464,-0.384392,0.556175,0.743464,0.662483,0.60305,0.634089,-0.431267,0.60305,0.634089,0.740608,0.407737,0.618464,-0.509392,0.407737,0.618464,0.678108,0.407737,0.727839,-0.446892,0.407737,0.727839,0.584358,0.407737,0.813776,-0.353142,0.407737,0.813776,0.592171,0.407737,0.829401,-0.360954,0.407737,0.829401,0.560921,0.501487,0.837214,-0.329704,0.501487,0.837214,0.467171,0.54055,0.860651,-0.235954,0.54055,0.860651,0.381233,0.501487,0.876276,-0.150017,0.501487,0.876276,0.342171,0.407737,0.876276,-0.110954,0.407737,0.876276,0.381233,0.3218,0.876276,-0.150017,0.3218,0.876276,0.467171,0.407737,0.884089,-0.235954,0.407737,0.884089,0.467171,0.282737,0.860651,-0.235954,0.282737,0.860651,0.560921,0.3218,0.837214,-0.329704,0.3218,0.837214,0.115608,0.595237,0.798151,0.115608,0.517112,0.876276,0.115608,-0.514138,0.790339,0.115608,-0.154763,0.837214,0.115608,-0.0219502,0.852839,0.115608,-0.607888,0.774714,0.115608,0.5718,0.657526,0.115608,0.735862,0.626276,0.115608,1.06399,-0.490911,0.115608,0.72805,-0.795599,0.115608,0.235862,-0.772161,0.115608,-0.217263,-0.295599,0.318733,-0.0219502,0.618464,-0.0875168,-0.0219502,0.618464,0.428108,-0.27195,0.626276,-0.196892,-0.27195,0.626276,0.467171,-0.529763,0.626276,-0.235954,-0.529763,0.626276,0.482796,-0.725075,0.587214,-0.251579,-0.725075,0.587214,0.443733,-0.779763,0.579401,-0.212517,-0.779763,0.579401,0.295296,-0.8032,0.610651,-0.0640793,-0.8032,0.610651,0.115608,-0.818825,0.634089,0.553108,0.0249248,0.587214,-0.321892,0.0249248,0.587214,0.748421,0.126487,0.595026,-0.517204,0.126487,0.595026,0.943733,0.313987,0.501276,-0.712517,0.313987,0.501276,0.974983,0.595237,0.649714,-0.743767,0.595237,0.649714,0.826546,0.649925,0.680964,-0.595329,0.649925,0.680964,0.607796,0.767112,0.743464,-0.376579,0.767112,0.743464,0.435921,0.923362,0.790339,-0.204704,0.923362,0.790339,0.271858,0.8843,0.813776,-0.0406418,0.8843,0.813776,0.178108,0.657737,0.805964,0.0531082,0.657737,0.805964,0.279671,0.579612,0.829401,-0.0484543,0.579612,0.829401,0.240608,0.470237,0.821589,-0.00939178,0.470237,0.821589,0.318733,0.2593,0.798151,-0.0875168,0.2593,0.798151,0.490608,0.181175,0.759089,-0.259392,0.181175,0.759089,0.607796,0.22805,0.727839,-0.376579,0.22805,0.727839,0.740608,0.35305,0.704401,-0.509392,0.35305,0.704401,0.756233,0.462425,0.704401,-0.525017,0.462425,0.704401,0.717171,0.54055,0.720026,-0.485954,0.54055,0.720026,0.545296,0.60305,0.774714,-0.314079,0.60305,0.774714,0.365608,0.6343,0.813776,-0.134392,0.6343,0.813776,0.115608,-0.600075,0.790339,0.224983,-0.5532,0.790339,0.00623322,-0.5532,0.790339,0.232796,-0.670388,0.766901,-0.00157928,-0.670388,0.766901,0.178108,-0.717263,0.751276,0.0531082,-0.717263,0.751276,0.115608,-0.725075,0.743464,0.115608,-0.0297627,0.805964,0.115608,0.0249248,0.798151,0.217171,0.0171123,0.798151,0.0140457,0.0171123,0.798151,0.240608,-0.0610127,0.805964,-0.00939178,-0.0610127,0.805964,0.201546,-0.123513,0.798151,0.0296707,-0.123513,0.798151,0.514046,0.118675,0.727839,-0.282829,0.118675,0.727839,0.732796,0.220237,0.680964,-0.501579,0.220237,0.680964,0.842171,0.368675,0.657526,-0.610954,0.368675,0.657526,0.857796,0.54055,0.712214,-0.626579,0.54055,0.712214,0.803108,0.579612,0.782526,-0.571892,0.579612,0.782526,0.553108,0.712425,0.852839,-0.321892,0.712425,0.852839,0.428108,0.806175,0.891901,-0.196892,0.806175,0.891901,0.318733,0.782737,0.907526,-0.0875168,0.782737,0.907526,0.217171,0.595237,0.899714,0.0140457,0.595237,0.899714,0.240608,0.0639873,0.868464,-0.00939178,0.0639873,0.868464,0.326546,-0.279763,0.766901,-0.0953293,-0.279763,0.766901,0.365608,-0.537575,0.743464,-0.134392,-0.537575,0.743464,0.381233,-0.654763,0.720026,-0.150017,-0.654763,0.720026,0.349983,-0.748513,0.688776,-0.118767,-0.748513,0.688776,0.279671,-0.764138,0.688776,-0.0484543,-0.764138,0.688776,0.115608,-0.779763,0.696589,0.115608,0.212425,0.782526,0.115608,0.376487,0.821589,0.443733,0.642112,0.798151,-0.212517,0.642112,0.798151,0.279671,0.306175,0.805964,-0.0484543,0.306175,0.805964,0.248421,0.376487,0.813776,-0.0172043,0.376487,0.813776,0.232796,-0.52195,0.790339,-0.00157928,-0.52195,0.790339,0.193733,-0.279763,0.805964,0.0374832,-0.279763,0.805964,0.115608,-0.279763,0.805964,0.115608,-0.162575,0.798151,0.209358,-0.107888,0.837214,0.0218582,-0.107888,0.837214,0.248421,-0.0610127,0.852839,-0.0172043,-0.0610127,0.852839,0.224983,0.0327373,0.837214,0.00623322,0.0327373,0.837214,0.154671,0.0405498,0.837214,0.0765457,0.0405498,0.837214,0.115608,-0.0375752,0.884089,0.162483,0.0171123,0.868464,0.0687332,0.0171123,0.868464,0.209358,0.00929978,0.868464,0.0218582,0.00929978,0.868464,0.224983,-0.0610127,0.884089,0.00623322,-0.0610127,0.884089,0.193733,-0.0844502,0.860651,0.0374832,-0.0844502,0.860651,0.115608,-0.123513,0.860651,0.373421,-0.14695,0.610651,-0.142204,-0.14695,0.610651,0.279671,-0.0766377,0.766901,-0.0484543,-0.0766377,0.766901,0.295296,-0.14695,0.766901,-0.0640793,-0.14695,0.766901,0.349983,-0.0844502,0.610651,-0.118767,-0.0844502,0.610651,0.115608,-0.70945,0.743464,0.162483,-0.701638,0.743464,0.0687332,-0.701638,0.743464,0.209358,-0.654763,0.766901,0.0218582,-0.654763,0.766901,0.209358,-0.576638,0.782526,0.0218582,-0.576638,0.782526,0.115608,-0.6157,0.712214,0.209358,-0.58445,0.720026,0.0218582,-0.58445,0.720026,0.209358,-0.64695,0.696589,0.0218582,-0.64695,0.696589,0.162483,-0.686013,0.688776,0.0687332,-0.686013,0.688776,0.115608,-0.693825,0.688776,0.287483,0.3843,0.837214,-0.0562668,0.3843,0.837214,0.303108,0.3218,0.829401,-0.0718918,0.3218,0.829401,0.451546,0.595237,0.813776,-0.220329,0.595237,0.813776,0.389046,0.587425,0.829401,-0.157829,0.587425,0.829401,0.537483,0.563987,0.829401,-0.306267,0.563987,0.829401,0.678108,0.517112,0.751276,-0.446892,0.517112,0.751276,0.701546,0.454612,0.743464,-0.470329,0.454612,0.743464,0.693733,0.360862,0.735651,-0.462517,0.360862,0.735651,0.592171,0.267112,0.774714,-0.360954,0.267112,0.774714,0.490608,0.22805,0.798151,-0.259392,0.22805,0.798151,0.342171,0.274925,0.837214,-0.110954,0.274925,0.837214,0.295296,0.462425,0.837214,-0.0640793,0.462425,0.837214,0.326546,0.54055,0.837214,-0.0953293,0.54055,0.837214,0.349983,0.524925,0.813776,-0.118767,0.524925,0.813776,0.310921,0.462425,0.813776,-0.0797043,0.462425,0.813776,0.357796,0.29055,0.813776,-0.126579,0.29055,0.813776,0.490608,0.251487,0.782526,-0.259392,0.251487,0.782526,0.576546,0.282737,0.759089,-0.345329,0.282737,0.759089,0.662483,0.376487,0.727839,-0.431267,0.376487,0.727839,0.670296,0.4468,0.727839,-0.439079,0.4468,0.727839,0.646858,0.501487,0.735651,-0.415642,0.501487,0.735651,0.529671,0.556175,0.805964,-0.298454,0.556175,0.805964,0.396858,0.563987,0.821589,-0.165642,0.563987,0.821589,0.451546,0.5718,0.805964,-0.220329,0.5718,0.805964,0.318733,0.337425,0.805964,-0.0875168,0.337425,0.805964,0.310921,0.392112,0.805964,-0.0797043,0.392112,0.805964,0.224983,0.626487,0.665339,0.00623322,0.626487,0.665339,0.310921,0.829612,0.673151,-0.0797043,0.829612,0.673151,0.451546,0.85305,0.649714,-0.220329,0.85305,0.649714,0.599983,0.720237,0.610651,-0.368767,0.720237,0.610651,0.795296,0.618675,0.548151,-0.564079,0.618675,0.548151,0.912483,0.5718,0.516901,-0.681267,0.5718,0.516901,0.889046,0.329612,0.430964,-0.657829,0.329612,0.430964,0.717171,0.16555,0.470026,-0.485954,0.16555,0.470026,0.553108,0.0717998,0.524714,-0.321892,0.0717998,0.524714,0.115608,1.06399,0.345026,0.115608,1.14992,-0.0221613,0.115608,-0.0297627,-0.615911,0.115608,-0.295388,0.243464,0.115608,-0.811013,0.516901,0.115608,-0.639138,0.399714,0.115608,-0.404763,0.376276,0.115608,-0.318825,0.337214,0.967171,0.399925,0.110651,-0.735954,0.399925,0.110651,0.974983,0.485862,0.00908868,-0.743767,0.485862,0.00908868,0.889046,0.431175,-0.381536,-0.657829,0.431175,-0.381536,0.576546,0.60305,-0.647161,-0.345329,0.60305,-0.647161,0.849983,0.118675,0.126276,-0.618767,0.118675,0.126276,0.709358,0.0405498,-0.108099,-0.478142,0.0405498,-0.108099,0.756233,0.157737,-0.373724,-0.525017,0.157737,-0.373724,0.451546,0.220237,-0.608099,-0.220329,0.220237,-0.608099,0.349983,-0.186013,0.462214,-0.118767,-0.186013,0.462214,0.295296,-0.248513,0.313776,-0.0640793,-0.248513,0.313776,0.404671,-0.545388,0.438776,-0.173454,-0.545388,0.438776,0.365608,-0.33445,0.446589,-0.134392,-0.33445,0.446589,0.443733,-0.748513,0.454401,-0.212517,-0.748513,0.454401,0.256233,-0.592263,0.423151,-0.0250168,-0.592263,0.423151,0.240608,-0.373513,0.415339,-0.00939178,-0.373513,0.415339,0.279671,-0.779763,0.493464,-0.0484543,-0.779763,0.493464,0.334358,-0.1157,0.485651,-0.103142,-0.1157,0.485651,0.326546,-0.0610127,0.524714,-0.0953293,-0.0610127,0.524714,0.318733,-0.00632522,0.555964,-0.0875168,-0.00632522,0.555964,0.326546,-0.225075,0.220026,-0.0953293,-0.225075,0.220026,0.412483,-0.14695,-0.209661,-0.181267,-0.14695,-0.209661,0.459358,0.0171123,-0.483099,-0.228142,0.0171123,-0.483099,0.568733,1.03274,-0.326849,-0.337517,1.03274,-0.326849,0.568733,1.09524,-0.0143488,-0.337517,1.09524,-0.0143488,0.568733,1.01711,0.290339,-0.337517,1.01711,0.290339,0.576546,0.688987,0.485651,-0.345329,0.688987,0.485651,0.842171,0.5718,0.391901,-0.610954,0.5718,0.391901,0.748421,0.618675,0.337214,-0.517204,0.618675,0.337214,0.756233,0.868675,0.110651,-0.525017,0.868675,0.110651,0.912483,0.72805,0.180964,-0.681267,0.72805,0.180964,0.912483,0.782737,-0.0612238,-0.681267,0.782737,-0.0612238,0.756233,0.91555,-0.139349,-0.525017,0.91555,-0.139349,0.756233,0.845237,-0.389349,-0.525017,0.845237,-0.389349,0.912483,0.704612,-0.303411,-0.681267,0.704612,-0.303411,0.732796,0.493675,-0.529974,-0.501579,0.493675,-0.529974,0.599983,0.188987,-0.490911,-0.368767,0.188987,-0.490911,0.935921,0.493675,-0.147161,-0.704704,0.493675,-0.147161,0.521858,-0.00632522,0.204401,-0.290642,-0.00632522,0.204401,0.545296,-0.0297627,-0.154974,-0.314079,-0.0297627,-0.154974,1.00623,0.5718,-0.178411,-0.775017,0.5718,-0.178411,0.889046,0.0249248,-0.0690363,-0.657829,0.0249248,-0.0690363,1.15467,0.0639873,-0.272161,-0.923454,0.0639873,-0.272161,1.39686,0.220237,-0.373724,-1.16564,0.220237,-0.373724,1.46717,0.485862,-0.365911,-1.23595,0.485862,-0.365911,1.34998,0.673362,-0.365911,-1.11877,0.673362,-0.365911,1.13905,0.642112,-0.256536,-0.907829,0.642112,-0.256536,1.13123,0.579612,-0.233099,-0.900017,0.579612,-0.233099,1.30311,0.60305,-0.334661,-1.07189,0.60305,-0.334661,1.38123,0.454612,-0.350286,-1.15002,0.454612,-0.350286,1.32655,0.243675,-0.350286,-1.09533,0.243675,-0.350286,1.14686,0.126487,-0.248724,-0.915642,0.126487,-0.248724,0.943733,0.0952373,-0.0768488,-0.712517,0.0952373,-0.0768488,1.03748,0.524925,-0.162786,-0.806267,0.524925,-0.162786,1.06092,0.470237,-0.233099,-0.829704,0.470237,-0.233099,0.998421,0.142112,-0.154974,-0.767204,0.142112,-0.154974,1.15467,0.16555,-0.311224,-0.923454,0.16555,-0.311224,1.30311,0.2593,-0.389349,-1.07189,0.2593,-0.389349,1.34998,0.41555,-0.389349,-1.11877,0.41555,-0.389349,1.28748,0.524925,-0.381536,-1.05627,0.524925,-0.381536,1.13905,0.5093,-0.303411,-0.907829,0.5093,-0.303411,0.959358,0.454612,-0.154974,-0.728142,0.454612,-0.154974,0.951546,0.337425,-0.217474,-0.720329,0.337425,-0.217474,0.873421,0.2593,-0.217474,-0.642204,0.2593,-0.217474,0.935921,0.251487,-0.217474,-0.704704,0.251487,-0.217474,0.959358,0.181175,-0.217474,-0.728142,0.181175,-0.217474,0.928108,0.149925,-0.217474,-0.696892,0.149925,-0.217474,0.842171,0.16555,-0.0143488,-0.610954,0.16555,-0.0143488,0.834358,0.142112,-0.115911,-0.603142,0.142112,-0.115911,0.834358,0.204612,-0.131536,-0.603142,0.204612,-0.131536,0.912483,0.368675,-0.154974,-0.681267,0.368675,-0.154974,1.00623,0.407737,-0.209661,-0.775017,0.407737,-0.209661,1.00623,0.399925,-0.264349,-0.775017,0.399925,-0.264349,0.928108,0.149925,-0.264349,-0.696892,0.149925,-0.264349,0.967171,0.181175,-0.264349,-0.735954,0.181175,-0.264349,0.943733,0.243675,-0.264349,-0.712517,0.243675,-0.264349,0.881233,0.2593,-0.264349,-0.650017,0.2593,-0.264349,0.959358,0.337425,-0.264349,-0.728142,0.337425,-0.264349,1.15467,0.493675,-0.358099,-0.923454,0.493675,-0.358099,1.30311,0.5093,-0.428411,-1.07189,0.5093,-0.428411,1.37342,0.407737,-0.436224,-1.1422,0.407737,-0.436224,1.32655,0.251487,-0.428411,-1.09533,0.251487,-0.428411,1.16248,0.16555,-0.365911,-0.931267,0.16555,-0.365911,0.998421,0.149925,-0.209661,-0.767204,0.149925,-0.209661,1.06873,0.454612,-0.287786,-0.837517,0.454612,-0.287786,1.00623,0.274925,-0.272161,-0.775017,0.274925,-0.272161,1.05311,0.22805,-0.279974,-0.821892,0.22805,-0.279974,1.11561,0.29055,-0.311224,-0.884392,0.29055,-0.311224,1.07655,0.337425,-0.295599,-0.845329,0.337425,-0.295599,1.13123,0.399925,-0.319036,-0.900017,0.399925,-0.319036,1.1703,0.35305,-0.326849,-0.939079,0.35305,-0.326849,1.22498,0.376487,-0.334661,-0.993767,0.376487,-0.334661,1.20155,0.438987,-0.334661,-0.970329,0.438987,-0.334661,1.13905,0.60305,-0.428411,-0.907829,0.60305,-0.428411,1.36561,0.6343,-0.490911,-1.13439,0.6343,-0.490911,1.4828,0.462425,-0.444036,-1.25158,0.462425,-0.444036,1.42811,0.220237,-0.475286,-1.19689,0.220237,-0.475286,1.15467,0.0796123,-0.436224,-0.923454,0.0796123,-0.436224,0.904671,0.0405498,-0.272161,-0.673454,0.0405498,-0.272161,0.974983,0.548362,-0.326849,-0.743767,0.548362,-0.326849],</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>morphTargets<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">	&quot;normals&quot; : [0.977691,-0.011017,0.209723,0.727683,-0.6545,0.205084,0.604022,-0.510239,0.612171,0.802057,-0.003388,0.597186,-0.604022,-0.510239,0.612171,-0.727683,-0.6545,0.205084,-0.977691,-0.011017,0.209723,-0.802057,-0.003388,0.597186,0.682943,-0.547472,0.483535,0.868404,-0.003265,0.495773,-0.682943,-0.547472,0.483535,-0.868404,-0.003265,0.495773,0.098209,-0.750969,0.652974,0.115879,-0.86697,0.484664,-0.115879,-0.86697,0.484664,-0.098209,-0.750969,0.652974,0.037507,-0.965056,0.259224,-0.037507,-0.965056,0.259224,-0.655354,-0.692801,0.300821,-0.451369,-0.539323,0.710868,0.451369,-0.539323,0.710868,0.655354,-0.692801,0.300821,-0.551225,-0.635792,0.540208,0.551225,-0.635792,0.540208,-0.693991,-0.00351,0.719932,-0.814783,-0.003784,0.579699,0.814783,-0.003784,0.579699,0.693991,-0.00351,0.719932,-0.946043,-0.012848,0.323679,0.946043,-0.012848,0.323679,-0.66216,0.691397,0.288919,-0.455123,0.525071,0.719108,0.455123,0.525071,0.719108,0.66216,0.691397,0.288919,-0.529771,0.626576,0.571581,0.529771,0.626576,0.571581,0.101871,0.740135,0.664663,0.12241,0.837306,0.532823,-0.12241,0.837306,0.532823,-0.101871,0.740135,0.664663,0.032075,0.971007,0.236854,-0.032075,0.971007,0.236854,0.732047,0.65273,0.194922,0.608448,0.494919,0.620289,-0.608448,0.494919,0.620289,-0.732047,0.65273,0.194922,0.672201,0.538133,0.508438,-0.672201,0.538133,0.508438,0.721976,0.649861,0.237434,0.973724,-0.012207,0.227271,-0.721976,0.649861,0.237434,-0.973724,-0.012207,0.227271,0.037446,0.933561,0.356395,-0.037446,0.933561,0.356395,-0.626331,0.647023,0.434767,0.626331,0.647023,0.434767,-0.911252,-0.012268,0.411603,0.911252,-0.012268,0.411603,-0.618122,-0.653768,0.436415,0.618122,-0.653768,0.436415,0.036927,-0.935087,0.352397,-0.036927,-0.935087,0.352397,0.715049,-0.65688,0.239051,-0.715049,-0.65688,0.239051,0.183599,-0.00531,0.982971,-0.183599,-0.00531,0.982971,0.157628,-0.974487,0.159581,0.167852,-0.753471,0.635639,0,-0.792169,0.610248,0,-0.977722,0.209815,-0.167852,-0.753471,0.635639,-0.157628,-0.974487,0.159581,0.654103,-0.741752,0.147984,0.362987,-0.618397,0.696951,-0.362987,-0.618397,0.696951,-0.654103,-0.741752,0.147984,0.969573,-0.147282,0.195379,0.555895,-0.215979,0.802667,-0.555895,-0.215979,0.802667,-0.969573,-0.147282,0.195379,0.975768,0.094852,0.197028,0.567827,-0.03296,0.822443,-0.567827,-0.03296,0.822443,-0.975768,0.094852,0.197028,0.965117,0.21894,0.143498,0.587207,0.111942,0.80163,-0.587207,0.111942,0.80163,-0.965117,0.21894,0.143498,0.905301,-0.389111,0.170263,0.360546,-0.931608,0.045442,0.380871,-0.517533,0.766167,0.066317,-0.192907,0.978942,-0.380871,-0.517563,0.766167,-0.360546,-0.931608,0.045442,-0.905301,-0.389111,0.170263,-0.066317,-0.192907,0.978942,0.588885,-0.790796,0.166784,0.498733,-0.401135,0.768303,-0.498733,-0.401135,0.768303,-0.588885,-0.790796,0.166784,0.912625,-0.402722,-0.069796,0.548906,-0.326579,0.769402,-0.548906,-0.326579,0.769402,-0.912625,-0.402722,-0.069796,0.880123,0.423841,0.213782,0.487533,-0.147038,0.860591,-0.487533,-0.147038,0.860591,-0.880123,0.423841,0.213782,0.509964,0.833003,0.214393,0.341685,-0.032533,0.939238,-0.341685,-0.032533,0.939238,-0.509964,0.833003,0.214393,0.597766,0.783776,0.16831,0.314127,-0.030366,0.948882,-0.314127,-0.030366,0.948882,-0.597766,0.783776,0.16831,0.228278,0.9588,0.16892,0.271126,0.213019,0.938658,-0.271126,0.213019,0.938658,-0.228278,0.9588,0.16892,-0.598682,0.777337,0.192999,-0.164251,0.159032,0.973479,0.164251,0.159032,0.973479,0.598682,0.777337,0.192999,-0.791742,0.582873,0.182562,-0.072939,-0.028687,0.996918,0.072939,-0.028687,0.996918,0.791742,0.582873,0.182562,0,0.959532,0.281564,0,-0.024079,0.999695,0.265389,-0.203955,0.942289,0.26603,-0.125706,0.955718,-0.26603,-0.125706,0.955718,-0.265389,-0.203955,0.942289,0.133427,-0.097476,0.986236,-0.133427,-0.097476,0.986236,0.197821,-0.010437,0.980163,-0.197821,-0.010437,0.980163,0.24134,-0.306711,0.920682,-0.24134,-0.306711,0.920682,0.362957,-0.212256,0.907285,-0.362957,-0.212256,0.907285,0.44145,-0.205847,0.873318,-0.44145,-0.205847,0.873318,0.419446,-0.379742,0.824519,-0.419446,-0.379742,0.824519,0.310617,-0.340342,0.887478,-0.310617,-0.340342,0.887478,-0.134922,-0.214576,0.967315,0.134922,-0.214576,0.967315,-0.310404,-0.169744,0.935301,0,0.013459,0.999908,0.310404,-0.169744,0.935301,0.028382,-0.198553,0.979644,-0.028382,-0.198553,0.979644,0,-0.223457,0.9747,-0.162389,-0.199744,0.966277,0.162389,-0.199744,0.966277,-0.025208,-0.411786,0.910916,0,-0.331248,0.94351,0.025208,-0.411786,0.910916,0.089053,-0.322886,0.942228,-0.089053,-0.322886,0.942228,0.155889,-0.170629,0.9729,-0.155889,-0.170629,0.9729,0.138615,0.002899,0.990326,0.180242,-0.057833,0.981903,-0.180242,-0.057833,0.981903,-0.138615,0.002899,0.990326,0.496872,-0.435591,0.750542,0,-0.457564,0.889157,0,-0.004089,0.999969,-0.496872,-0.435591,0.750542,0,-0.034211,0.99939,0,-0.425733,0.904843,0.721549,-0.364605,0.588549,0.924589,-0.212928,0.315867,0.580309,-0.730644,0.359661,-0.580309,-0.730644,0.359661,-0.924589,-0.212928,0.315867,-0.721549,-0.364605,0.588549,0.252785,0.347942,0.902768,0.621784,0.774407,0.116764,-0.621784,0.774407,0.116764,-0.252785,0.347942,0.902768,0,0.569231,0.822138,-0.301798,0.941618,0.149174,0.301798,0.941618,0.149174,0,0.759239,0.650777,0,0.785089,0.619343,0,-0.857418,0.514573,0.220557,-0.563952,0.79577,0,-0.52855,0.848872,-0.220557,-0.563952,0.79577,0,0.113559,0.9935,-0.199164,0.601733,0.773431,0.199164,0.601733,0.773431,0.366375,0.475143,0.799982,-0.366375,0.475143,0.799982,0.42964,-0.184942,0.883816,-0.42964,-0.184942,0.883816,0.743034,0.029542,0.668569,-0.743034,0.029542,0.668569,0.646382,0.14243,0.749565,-0.646382,0.14243,0.749565,0.938505,0.325083,0.116031,-0.938505,0.325083,0.116031,0.953429,0.281594,0.107883,-0.953429,0.281594,0.107883,0,-0.903104,0.429395,-0.114017,-0.61507,0.780145,0.114017,-0.61507,0.780145,-0.650258,0.061495,0.757195,0.650258,0.061495,0.757195,-0.370464,0.545,0.752129,0.370464,0.545,0.752129,0,0.646687,0.762719,-0.327219,0.474502,0.817133,0,0.528855,0.848689,0.327219,0.474502,0.817133,-0.674825,0.114689,0.728965,0.674825,0.114689,0.728965,-0.516343,-0.704123,0.487411,0.516343,-0.704123,0.487411,0,-0.698843,0.715262,-0.017029,-0.061007,0.997986,0.164892,-0.089663,0.982208,0.017029,-0.061007,0.997986,-0.164892,-0.089663,0.982208,0.235847,-0.10889,0.965636,-0.235847,-0.10889,0.965636,0.163335,-0.083621,0.983001,-0.163335,-0.083621,0.983001,0.012879,-0.156011,0.98764,-0.012879,-0.156011,0.98764,0.199774,-0.20719,0.957671,-0.199774,-0.20719,0.957671,0.285775,-0.042482,0.957335,-0.285775,-0.042482,0.957335,0.29899,-0.093356,0.949675,-0.29899,-0.093356,0.949675,0.186956,-0.065493,0.980163,-0.186956,-0.065493,0.980163,0.306253,0.034181,0.951323,-0.306253,0.034181,0.951323,0.17304,-0.110935,0.978637,-0.17304,-0.110935,0.978637,0.165685,0.112888,0.979675,-0.165685,0.112888,0.979675,0.182836,0.036683,0.982452,-0.182836,0.036683,0.982452,0.500961,-0.383892,0.775628,0.306284,-0.34312,0.887906,-0.500961,-0.383892,0.775628,-0.306284,-0.34312,0.887906,0.002106,-0.495285,0.868709,-0.002106,-0.495285,0.868709,-0.14008,-0.762047,0.63216,0.14008,-0.762047,0.63216,-0.194311,-0.616047,0.763329,0.194311,-0.616047,0.763329,-0.354869,-0.128605,0.925993,0.354869,-0.128605,0.925993,-0.25486,0.224128,0.940611,0.25486,0.224128,0.940611,-0.083102,0.541612,0.836482,0.083102,0.541612,0.836482,0.148869,0.613483,0.775506,-0.148869,0.613483,0.775506,0.424451,0.5609,0.710776,-0.424451,0.5609,0.710776,0.68749,0.297403,0.662465,-0.68749,0.297403,0.662465,0.746422,-0.213446,0.630268,-0.746422,-0.213446,0.630268,0.8052,0.014954,0.592792,-0.8052,0.014954,0.592792,-0.504593,0.862178,0.044801,0,0.879391,0.476028,0.504593,0.862178,0.044801,-0.477004,0.509964,-0.715781,0.477004,0.509964,-0.715781,0.114597,0.655507,-0.746422,-0.114597,0.655507,-0.746422,0.30839,0.913816,-0.264199,-0.30839,0.913816,-0.264199,0.351451,0.90875,-0.224921,-0.351451,0.90875,-0.224921,0.739219,0.600482,-0.304849,-0.739219,0.600482,-0.304849,0.939329,-0.306803,-0.153294,-0.939329,-0.306803,-0.153294,0.57683,-0.811029,-0.097171,-0.57683,-0.811029,-0.097171,0.439375,-0.892514,-0.101596,-0.439375,-0.892514,-0.101596,0,-0.317789,-0.948149,0,-0.805109,-0.593097,0.725974,-0.586505,-0.359081,0.337474,-0.253456,-0.906552,-0.725974,-0.586505,-0.359081,-0.337474,-0.253456,-0.906552,0,-0.2978,-0.954619,0.129307,-0.178899,-0.975311,-0.129307,-0.178899,-0.975311,0,-0.850795,-0.525468,0.099277,-0.767937,-0.63274,-0.099277,-0.767937,-0.63274,0.558641,-0.46791,-0.684774,-0.558641,-0.46791,-0.684774,0.605792,0.020814,-0.795312,-0.605792,0.020814,-0.795312,0.776605,-0.009339,-0.629871,-0.776605,-0.009339,-0.629871,0.960143,-0.001648,-0.279427,-0.960143,-0.001648,-0.279427,0.973113,-0.230201,0.000153,0.953703,-0.199866,0.224647,-0.953703,-0.199866,0.224647,-0.973113,-0.230201,0.000153,0.81402,-0.554369,0.173162,-0.81402,-0.554369,0.173162,0,-0.300424,-0.953795,0.423658,-0.324015,-0.845851,0.519089,-0.655629,-0.548296,0,-0.696646,-0.717368,-0.519089,-0.655629,-0.548296,-0.423658,-0.324015,-0.845851,0.521348,-0.825465,-0.216224,0,-0.940977,-0.33845,-0.521348,-0.825465,-0.216224,0.588733,-0.808069,-0.018525,0,-0.986267,-0.164983,-0.588733,-0.808069,-0.018525,0.715201,-0.694998,0.073611,0.976196,-0.201941,0.078707,-0.715201,-0.694998,0.073611,-0.976196,-0.201941,0.078707,0,0.314066,-0.94937,0.453413,0.196875,-0.869259,-0.453413,0.196875,-0.869259,0,0.826655,0.56267,0.461043,0.733787,0.498947,0.419752,0.906949,0.034852,0,0.999725,0.023194,-0.419752,0.906949,0.034852,-0.461043,0.733787,0.498947,0.425825,0.803186,-0.416547,0,0.832545,-0.553941,-0.425825,0.803186,-0.416547,0.765221,0.624409,0.156529,0.47206,0.777764,0.41493,-0.765221,0.624409,0.156529,-0.47206,0.777764,0.41493,0.74752,0.532609,0.396863,0.651387,0.681448,0.333537,-0.74752,0.532609,0.396863,-0.651387,0.681448,0.333537,0.854793,0.518052,-0.030122,0.678793,0.731773,-0.06119,-0.854793,0.518052,-0.030122,-0.678793,0.731773,-0.06119,0.873867,0.307016,-0.376873,0.644032,0.53795,-0.54384,-0.873867,0.307016,-0.376873,-0.644032,0.53795,-0.54384,0.625996,-0.025941,-0.779382,0.586016,-0.015473,-0.810114,-0.586016,-0.015473,-0.810114,-0.625996,-0.025941,-0.779382,0.391614,0.828028,0.401196,-0.391614,0.828028,0.401196,0,0.62038,0.784265,0.998932,-0.045503,0.006165,-0.998932,-0.045503,0.006165,0.896451,0.304361,0.322001,-0.896451,0.304361,0.322001,0.580889,-0.800684,-0.146336,0.573046,-0.803735,0.160009,-0.580889,-0.800684,-0.146336,-0.573046,-0.803735,0.160009,0.274422,-0.95999,-0.055208,-0.274422,-0.95999,-0.055208,0.40202,-0.616718,-0.676748,0.544298,-0.495865,-0.676626,-0.544298,-0.495865,-0.676626,-0.40202,-0.616718,-0.676748,0.016266,0.873623,0.486282,-0.287759,0.738792,0.609394,0.458968,-0.063112,0.886166,0.542039,-0.067415,0.837611,-0.458968,-0.063112,0.886166,0.287759,0.738792,0.609394,-0.016266,0.873623,0.486282,-0.542039,-0.067415,0.837611,0.317362,-0.092959,0.943724,0.360363,0.86053,0.359996,-0.317362,-0.092959,0.943724,-0.360363,0.86053,0.359996,-0.12006,-0.089724,0.988678,0.789575,0.178991,0.586932,0.12006,-0.089724,0.988678,-0.789575,0.178991,0.586932,-0.023988,0.273934,0.961425,0.673116,-0.499832,0.545,0.023988,0.273934,0.961425,-0.673116,-0.499832,0.545,0.492172,0.273751,0.826319,0.471877,-0.779626,0.411634,-0.492172,0.273751,0.826319,-0.471877,-0.779626,0.411634,0.341319,0.352672,0.871242,-0.043886,-0.648122,0.760247,-0.341319,0.352672,0.871242,0.043886,-0.648122,0.760247,-0.16654,0.953887,0.249672,0.232978,0.878811,0.416364,-0.232978,0.878811,0.416364,0.16654,0.953887,0.249672,-0.761345,0.647084,0.039918,0.761345,0.647084,0.039918,-0.981017,-0.093387,0.169805,0.981017,-0.093387,0.169805,-0.140965,-0.77279,0.618793,0.140965,-0.77279,0.618793,0.558733,-0.658284,0.50441,-0.558733,-0.658284,0.50441,0.687796,-0.553331,0.469802,-0.687796,-0.553331,0.469802,0.745048,0.085452,0.661458,0.861507,-0.487991,-0.139958,-0.745048,0.085452,0.661458,-0.861507,-0.487991,-0.139958,0.742698,-0.261116,0.616596,-0.742698,-0.261116,0.616596,0.59331,0.566332,0.572008,-0.59331,0.566332,0.572008,0.883663,-0.062441,0.463912,0.920988,-0.174902,0.348033,-0.920988,-0.174902,0.348033,-0.883663,-0.062441,0.463912,0.858852,0.037141,0.510819,0.573107,0.726249,0.379528,-0.858852,0.037141,0.510819,-0.573107,0.726249,0.379528,0.748131,-0.579913,0.322398,0.871975,-0.424024,0.244606,-0.871975,-0.424024,0.244606,-0.748131,-0.579913,0.322398,0.69631,-0.541185,0.471419,-0.69631,-0.541185,0.471419,0.66686,-0.434767,0.605182,0.635792,-0.409162,0.654439,-0.66686,-0.434767,0.605182,-0.635792,-0.409162,0.654439,0.571398,-0.425855,0.701498,-0.571398,-0.425855,0.701498,0.783685,0.25135,0.56798,-0.783685,0.25135,0.56798,0.444716,0.374004,0.813807,-0.444716,0.374004,0.813807,0.373882,0.368725,0.851009,-0.373882,0.368725,0.851009,0.660024,0.349498,0.664968,-0.660024,0.349498,0.664968,-0.050691,0.951842,0.302316,0.050691,0.951842,0.302316,0.48442,-0.337321,0.807154,-0.48442,-0.337321,0.807154,-0.248451,-0.582598,0.773827,0.248451,-0.582598,0.773827,-0.743309,-0.097324,0.661824,0.743309,-0.097324,0.661824,-0.539171,0.450636,0.711447,0.539171,0.450636,0.711447,0.087283,0.740043,0.666829,-0.087283,0.740043,0.666829,0.385449,0.116214,0.915342,0.19834,0.005127,0.980102,-0.385449,0.116214,0.915342,-0.19834,0.005127,0.980102,0.431532,-0.033113,0.901456,0.328104,0.000183,0.944609,-0.431532,-0.033113,0.901456,-0.328104,0.000183,0.944609,0.344737,-0.076693,0.935545,0.31782,0.093661,0.94351,-0.344737,-0.076693,0.935545,-0.31782,0.093661,0.94351,0.436476,-0.013581,0.899594,0.357311,0.298013,0.885128,-0.436476,-0.013581,0.899594,-0.357311,0.298013,0.885128,-0.079745,-0.845271,-0.528336,-0.041841,-0.698874,-0.714011,0.079745,-0.845271,-0.528336,0.041841,-0.698874,-0.714011,0.614948,-0.490555,-0.617359,-0.614948,-0.490555,-0.617359,0.923399,0.085604,-0.374096,-0.923399,0.085604,-0.374096,0.304758,0.621876,-0.721335,-0.304758,0.621876,-0.721335,-0.417646,0.55858,-0.716605,0.417646,0.55858,-0.716605,-0.656178,0.57152,-0.492691,0.656178,0.57152,-0.492691],</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>colors<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>uvs<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">	&quot;faces&quot; : [35,46,0,2,44,0,0,1,2,3,35,3,1,47,45,0,4,5,6,7,35,44,2,4,42,0,3,2,8,9,35,5,3,45,43,0,10,4,7,11,35,2,8,6,4,0,2,12,13,8,35,7,9,3,5,0,14,15,4,10,35,0,10,8,2,0,1,16,12,2,35,9,11,1,3,0,15,17,5,4,35,10,12,14,8,0,16,18,19,12,35,15,13,11,9,0,20,21,17,15,35,8,14,16,6,0,12,19,22,13,35,17,15,9,7,0,23,20,15,14,35,14,20,18,16,0,19,24,25,22,35,19,21,15,17,0,26,27,20,23,35,12,22,20,14,0,18,28,24,19,35,21,23,13,15,0,27,29,21,20,35,22,24,26,20,0,28,30,31,24,35,27,25,23,21,0,32,33,29,27,35,20,26,28,18,0,24,31,34,25,35,29,27,21,19,0,35,32,27,26,35,26,32,30,28,0,31,36,37,34,35,31,33,27,29,0,38,39,32,35,35,24,34,32,26,0,30,40,36,31,35,33,35,25,27,0,39,41,33,32,35,34,36,38,32,0,40,42,43,36,35,39,37,35,33,0,44,45,41,39,35,32,38,40,30,0,36,43,46,37,35,41,39,33,31,0,47,44,39,38,35,38,44,42,40,0,43,3,9,46,35,43,45,39,41,0,11,7,44,47,35,36,46,44,38,0,42,0,3,43,35,45,47,37,39,0,7,6,45,44,35,46,36,50,48,0,0,42,48,49,35,51,37,47,49,0,50,45,6,51,35,36,34,52,50,0,42,40,52,48,35,53,35,37,51,0,53,41,45,50,35,34,24,54,52,0,40,30,54,52,35,55,25,35,53,0,55,33,41,53,35,24,22,56,54,0,30,28,56,54,35,57,23,25,55,0,57,29,33,55,35,22,12,58,56,0,28,18,58,56,35,59,13,23,57,0,59,21,29,57,35,12,10,62,58,0,18,16,60,58,35,63,11,13,59,0,61,17,21,59,35,10,0,64,62,0,16,1,62,60,35,65,1,11,63,0,63,5,17,61,35,0,46,48,64,0,1,0,49,62,35,49,47,1,65,0,51,6,5,63,34,60,64,48,0,64,62,49,34,49,65,61,0,51,63,65,34,62,64,60,0,60,62,64,34,61,65,63,0,65,63,61,34,60,58,62,0,64,58,60,34,63,59,61,0,61,59,65,34,60,56,58,0,64,56,58,34,59,57,61,0,59,57,65,34,60,54,56,0,64,54,56,34,57,55,61,0,57,55,65,34,60,52,54,0,64,52,54,34,55,53,61,0,55,53,65,34,60,50,52,0,64,48,52,34,53,51,61,0,53,50,65,34,60,48,50,0,64,49,48,34,51,49,61,0,50,51,65,35,88,173,175,90,0,66,67,68,69,35,175,174,89,90,0,68,70,71,69,35,86,171,173,88,0,72,73,67,66,35,174,172,87,89,0,70,74,75,71,35,84,169,171,86,0,76,77,73,72,35,172,170,85,87,0,74,78,79,75,35,82,167,169,84,0,80,81,77,76,35,170,168,83,85,0,78,82,83,79,35,80,165,167,82,0,84,85,81,80,35,168,166,81,83,0,82,86,87,83,35,78,91,145,163,0,88,89,90,91,35,146,92,79,164,0,92,93,94,95,35,91,93,147,145,0,89,96,97,90,35,148,94,92,146,0,98,99,93,92,35,93,95,149,147,0,96,100,101,97,35,150,96,94,148,0,102,103,99,98,35,95,97,151,149,0,100,104,105,101,35,152,98,96,150,0,106,107,103,102,35,97,99,153,151,0,104,108,109,105,35,154,100,98,152,0,110,111,107,106,35,99,101,155,153,0,108,112,113,109,35,156,102,100,154,0,114,115,111,110,35,101,103,157,155,0,112,116,117,113,35,158,104,102,156,0,118,119,115,114,35,103,105,159,157,0,116,120,121,117,35,160,106,104,158,0,122,123,119,118,35,105,107,161,159,0,120,124,125,121,35,162,108,106,160,0,126,127,123,122,35,107,66,67,161,0,124,128,129,125,35,67,66,108,162,0,129,128,127,126,35,109,127,159,161,0,130,131,121,125,35,160,128,110,162,0,122,132,133,126,35,127,178,157,159,0,131,134,117,121,35,158,179,128,160,0,118,135,132,122,35,125,155,157,178,0,136,113,117,134,35,158,156,126,179,0,118,114,137,135,35,123,153,155,125,0,138,109,113,136,35,156,154,124,126,0,114,110,139,137,35,121,151,153,123,0,140,105,109,138,35,154,152,122,124,0,110,106,141,139,35,119,149,151,121,0,142,101,105,140,35,152,150,120,122,0,106,102,143,141,35,117,147,149,119,0,144,97,101,142,35,150,148,118,120,0,102,98,145,143,35,115,145,147,117,0,146,90,97,144,35,148,146,116,118,0,98,92,147,145,35,113,163,145,115,0,148,91,90,146,35,146,164,114,116,0,92,95,149,147,35,113,180,176,163,0,148,150,151,91,35,176,181,114,164,0,151,152,149,95,35,109,161,67,111,0,130,125,129,153,35,67,162,110,112,0,129,126,133,154,35,111,67,177,182,0,153,129,155,156,35,177,67,112,183,0,155,129,154,157,35,176,180,182,177,0,151,150,156,155,35,183,181,176,177,0,157,152,151,155,35,134,136,175,173,0,158,159,68,67,35,175,136,135,174,0,68,159,160,70,35,132,134,173,171,0,161,158,67,73,35,174,135,133,172,0,70,160,162,74,35,130,132,171,169,0,163,161,73,77,35,172,133,131,170,0,74,162,164,78,35,165,186,184,167,0,85,165,166,81,35,185,187,166,168,0,167,168,86,82,35,130,169,167,184,0,163,77,81,166,35,168,170,131,185,0,82,78,164,167,35,143,189,188,186,0,169,170,171,165,35,188,189,144,187,0,171,170,172,168,35,184,186,188,68,0,166,165,171,173,35,188,187,185,68,0,171,168,167,173,35,129,130,184,68,0,174,163,166,173,35,185,131,129,68,0,167,164,174,173,35,141,192,190,143,0,175,176,177,169,35,191,193,142,144,0,178,179,180,172,35,139,194,192,141,0,181,182,176,175,35,193,195,140,142,0,179,183,184,180,35,138,196,194,139,0,185,186,182,181,35,195,197,138,140,0,183,187,185,184,35,137,70,196,138,0,188,189,186,185,35,197,70,137,138,0,187,189,188,185,35,189,143,190,69,0,170,169,177,190,35,191,144,189,69,0,178,172,170,190,35,69,190,205,207,0,190,177,191,192,35,206,191,69,207,0,193,178,190,192,35,70,198,199,196,0,189,194,195,186,35,200,198,70,197,0,196,194,189,187,35,196,199,201,194,0,186,195,197,182,35,202,200,197,195,0,198,196,187,183,35,194,201,203,192,0,182,197,199,176,35,204,202,195,193,0,200,198,183,179,35,192,203,205,190,0,176,199,191,177,35,206,204,193,191,0,193,200,179,178,35,198,203,201,199,0,194,199,197,195,35,202,204,198,200,0,198,200,194,196,35,198,207,205,203,0,194,192,191,199,35,206,207,198,204,0,193,192,194,200,35,138,139,163,176,0,185,181,91,151,35,164,140,138,176,0,95,184,185,151,35,139,141,210,163,0,181,175,201,91,35,211,142,140,164,0,202,180,184,95,35,141,143,212,210,0,175,169,203,201,35,213,144,142,211,0,204,172,180,202,35,143,186,165,212,0,169,165,85,203,35,166,187,144,213,0,86,168,172,204,35,80,208,212,165,0,84,205,203,85,35,213,209,81,166,0,204,206,87,86,35,208,214,210,212,0,205,207,201,203,35,211,215,209,213,0,202,208,206,204,35,78,163,210,214,0,88,91,201,207,35,211,164,79,215,0,202,95,94,208,35,130,129,71,221,0,163,174,209,210,35,71,129,131,222,0,209,174,164,211,35,132,130,221,219,0,161,163,210,212,35,222,131,133,220,0,211,164,162,213,35,134,132,219,217,0,158,161,212,214,35,220,133,135,218,0,213,162,160,215,35,136,134,217,216,0,159,158,214,216,35,218,135,136,216,0,215,160,159,216,35,216,217,228,230,0,216,214,217,218,35,229,218,216,230,0,219,215,216,218,35,217,219,226,228,0,214,212,220,217,35,227,220,218,229,0,221,213,215,219,35,219,221,224,226,0,212,210,222,220,35,225,222,220,227,0,223,211,213,221,35,221,71,223,224,0,210,209,224,222,35,223,71,222,225,0,224,209,211,223,35,223,230,228,224,0,224,218,217,222,35,229,230,223,225,0,219,218,224,223,34,224,228,226,0,222,217,220,34,227,229,225,0,221,219,223,35,182,180,233,231,0,156,150,225,226,35,234,181,183,232,0,227,152,157,228,35,111,182,231,253,0,153,156,226,229,35,232,183,112,254,0,228,157,154,230,35,109,111,253,255,0,130,153,229,231,35,254,112,110,256,0,230,154,133,232,35,180,113,251,233,0,150,148,233,225,35,252,114,181,234,0,234,149,152,227,35,113,115,249,251,0,148,146,235,233,35,250,116,114,252,0,236,147,149,234,35,115,117,247,249,0,146,144,237,235,35,248,118,116,250,0,238,145,147,236,35,117,119,245,247,0,144,142,239,237,35,246,120,118,248,0,240,143,145,238,35,119,121,243,245,0,142,140,241,239,35,244,122,120,246,0,242,141,143,240,35,121,123,241,243,0,140,138,243,241,35,242,124,122,244,0,244,139,141,242,35,123,125,239,241,0,138,136,245,243,35,240,126,124,242,0,246,137,139,244,35,125,178,235,239,0,136,134,247,245,35,236,179,126,240,0,248,135,137,246,35,178,127,237,235,0,134,131,249,247,35,238,128,179,236,0,250,132,135,248,35,127,109,255,237,0,131,130,231,249,35,256,110,128,238,0,232,133,132,250,35,237,255,257,275,0,249,231,251,252,35,258,256,238,276,0,253,232,250,254,35,235,237,275,277,0,247,249,252,255,35,276,238,236,278,0,254,250,248,256,35,239,235,277,273,0,245,247,255,257,35,278,236,240,274,0,256,248,246,258,35,241,239,273,271,0,243,245,257,259,35,274,240,242,272,0,258,246,244,260,35,243,241,271,269,0,241,243,259,261,35,272,242,244,270,0,260,244,242,262,35,245,243,269,267,0,239,241,261,263,35,270,244,246,268,0,262,242,240,264,35,247,245,267,265,0,237,239,263,265,35,268,246,248,266,0,264,240,238,266,35,249,247,265,263,0,235,237,265,267,35,266,248,250,264,0,266,238,236,268,35,251,249,263,261,0,233,235,267,269,35,264,250,252,262,0,268,236,234,270,35,233,251,261,279,0,225,233,269,271,35,262,252,234,280,0,270,234,227,272,35,255,253,259,257,0,231,229,273,251,35,260,254,256,258,0,274,230,232,253,35,253,231,281,259,0,229,226,275,273,35,282,232,254,260,0,276,228,230,274,35,231,233,279,281,0,226,225,271,275,35,280,234,232,282,0,272,227,228,276,35,66,107,283,72,0,128,124,277,278,35,284,108,66,72,0,279,127,128,278,35,107,105,285,283,0,124,120,280,277,35,286,106,108,284,0,281,123,127,279,35,105,103,287,285,0,120,116,282,280,35,288,104,106,286,0,283,119,123,281,35,103,101,289,287,0,116,112,284,282,35,290,102,104,288,0,285,115,119,283,35,101,99,291,289,0,112,108,286,284,35,292,100,102,290,0,287,111,115,285,35,99,97,293,291,0,108,104,288,286,35,294,98,100,292,0,289,107,111,287,35,97,95,295,293,0,104,100,290,288,35,296,96,98,294,0,291,103,107,289,35,95,93,297,295,0,100,96,292,290,35,298,94,96,296,0,293,99,103,291,35,93,91,299,297,0,96,89,294,292,35,300,92,94,298,0,295,93,99,293,35,307,308,327,337,0,296,297,298,299,35,328,308,307,338,0,300,297,296,301,35,306,307,337,335,0,302,296,299,303,35,338,307,306,336,0,301,296,302,304,35,305,306,335,339,0,305,302,303,306,35,336,306,305,340,0,304,302,305,307,35,88,90,305,339,0,66,69,305,306,35,305,90,89,340,0,305,69,71,307,35,86,88,339,333,0,72,66,306,308,35,340,89,87,334,0,307,71,75,309,35,84,86,333,329,0,76,72,308,310,35,334,87,85,330,0,309,75,79,311,35,82,84,329,331,0,80,76,310,312,35,330,85,83,332,0,311,79,83,313,35,329,335,337,331,0,310,303,299,312,35,338,336,330,332,0,301,304,311,313,35,329,333,339,335,0,310,308,306,303,35,340,334,330,336,0,307,309,311,304,35,325,331,337,327,0,314,312,299,298,35,338,332,326,328,0,301,313,315,300,35,80,82,331,325,0,84,80,312,314,35,332,83,81,326,0,313,83,87,315,35,208,341,343,214,0,205,316,317,207,35,344,342,209,215,0,318,319,206,208,35,80,325,341,208,0,84,314,316,205,35,342,326,81,209,0,319,315,87,206,35,78,214,343,345,0,88,207,317,320,35,344,215,79,346,0,318,208,94,321,35,78,345,299,91,0,88,320,294,89,35,300,346,79,92,0,295,321,94,93,35,76,323,351,303,0,322,323,324,325,35,352,324,76,303,0,326,327,322,325,35,303,351,349,77,0,325,324,328,329,35,350,352,303,77,0,330,326,325,329,35,77,349,347,304,0,329,328,331,332,35,348,350,77,304,0,333,330,329,332,35,304,347,327,308,0,332,331,298,297,35,328,348,304,308,0,300,333,332,297,35,325,327,347,341,0,314,298,331,316,35,348,328,326,342,0,333,300,315,319,35,295,297,317,309,0,290,292,334,335,35,318,298,296,310,0,336,293,291,337,35,75,315,323,76,0,338,339,323,322,35,324,316,75,76,0,327,340,338,322,35,301,357,355,302,0,341,342,343,344,35,356,358,301,302,0,345,346,341,344,35,302,355,353,74,0,344,343,347,348,35,354,356,302,74,0,349,345,344,348,35,74,353,315,75,0,348,347,339,338,35,316,354,74,75,0,340,349,348,338,35,291,293,361,363,0,286,288,350,351,35,362,294,292,364,0,352,289,287,353,35,363,361,367,365,0,351,350,354,355,35,368,362,364,366,0,356,352,353,357,35,365,367,369,371,0,355,354,358,359,35,370,368,366,372,0,360,356,357,361,35,371,369,375,373,0,359,358,362,363,35,376,370,372,374,0,364,360,361,365,35,313,377,373,375,0,366,367,363,362,35,374,378,314,376,0,365,368,369,364,35,315,353,373,377,0,339,347,363,367,35,374,354,316,378,0,365,349,340,368,35,353,355,371,373,0,347,343,359,363,35,372,356,354,374,0,361,345,349,365,35,355,357,365,371,0,343,342,355,359,35,366,358,356,372,0,357,346,345,361,35,357,359,363,365,0,342,370,351,355,35,364,360,358,366,0,353,371,346,357,35,289,291,363,359,0,284,286,351,370,35,364,292,290,360,0,353,287,285,371,35,73,359,357,301,0,372,370,342,341,35,358,360,73,301,0,346,371,372,341,35,283,285,287,289,0,277,280,282,284,35,288,286,284,290,0,283,281,279,285,35,283,289,359,73,0,277,284,370,372,35,360,290,284,73,0,371,285,279,372,34,72,283,73,0,278,277,372,34,73,284,72,0,372,279,278,35,293,295,309,361,0,288,290,335,350,35,310,296,294,362,0,337,291,289,352,35,309,311,367,361,0,335,373,354,350,35,368,312,310,362,0,356,374,337,352,35,311,381,369,367,0,373,375,358,354,35,370,382,312,368,0,360,376,374,356,35,313,375,369,381,0,366,362,358,375,35,370,376,314,382,0,360,364,369,376,35,347,349,385,383,0,331,328,377,378,35,386,350,348,384,0,379,330,333,380,35,317,383,385,319,0,334,378,377,381,35,386,384,318,320,0,379,380,336,382,35,297,299,383,317,0,292,294,378,334,35,384,300,298,318,0,380,295,293,336,35,299,343,341,383,0,294,317,316,378,35,342,344,300,384,0,319,318,295,380,34,341,347,383,0,316,331,378,34,384,348,342,0,380,333,319,34,299,345,343,0,294,320,317,34,344,346,300,0,318,321,295,35,313,321,379,377,0,366,383,384,367,35,380,322,314,378,0,385,386,369,368,35,315,377,379,323,0,339,367,384,323,35,380,378,316,324,0,385,368,340,327,35,319,385,379,321,0,381,377,384,383,35,380,386,320,322,0,385,379,382,386,35,349,351,379,385,0,328,324,384,377,35,380,352,350,386,0,385,326,330,379,34,323,379,351,0,323,384,324,34,352,380,324,0,326,385,327,35,399,387,413,401,0,387,388,389,390,35,414,388,400,402,0,391,392,393,394,35,399,401,403,397,0,387,390,395,396,35,404,402,400,398,0,397,394,393,398,35,397,403,405,395,0,396,395,399,400,35,406,404,398,396,0,401,397,398,402,35,395,405,407,393,0,400,399,403,404,35,408,406,396,394,0,405,401,402,406,35,393,407,409,391,0,404,403,407,408,35,410,408,394,392,0,409,405,406,410,35,391,409,411,389,0,408,407,411,412,35,412,410,392,390,0,413,409,410,414,35,409,419,417,411,0,407,415,416,411,35,418,420,410,412,0,417,418,409,413,35,407,421,419,409,0,403,419,415,407,35,420,422,408,410,0,418,420,405,409,35,405,423,421,407,0,399,421,419,403,35,422,424,406,408,0,420,422,401,405,35,403,425,423,405,0,395,423,421,399,35,424,426,404,406,0,422,424,397,401,35,401,427,425,403,0,390,425,423,395,35,426,428,402,404,0,424,426,394,397,35,401,413,415,427,0,390,389,427,425,35,416,414,402,428,0,428,391,394,426,35,317,319,443,441,0,334,381,429,430,35,444,320,318,442,0,431,382,336,432,35,319,389,411,443,0,381,412,411,429,35,412,390,320,444,0,413,414,382,431,35,309,317,441,311,0,335,334,430,373,35,442,318,310,312,0,432,336,337,374,35,381,429,413,387,0,375,433,389,388,35,414,430,382,388,0,391,434,376,392,35,411,417,439,443,0,411,416,435,429,35,440,418,412,444,0,436,417,413,431,35,437,445,443,439,0,437,438,429,435,35,444,446,438,440,0,431,439,440,436,35,433,445,437,435,0,441,438,437,442,35,438,446,434,436,0,440,439,443,444,35,431,447,445,433,0,445,446,438,441,35,446,448,432,434,0,439,447,448,443,35,429,447,431,449,0,433,446,445,449,35,432,448,430,450,0,448,447,434,450,35,413,429,449,415,0,389,433,449,427,35,450,430,414,416,0,450,434,391,428,35,311,447,429,381,0,373,446,433,375,35,430,448,312,382,0,434,447,374,376,35,311,441,445,447,0,373,430,438,446,35,446,442,312,448,0,439,432,374,447,34,441,443,445,0,430,429,438,34,446,444,442,0,439,431,432,35,415,449,451,475,0,427,449,451,452,35,452,450,416,476,0,453,450,428,454,35,449,431,461,451,0,449,445,455,451,35,462,432,450,452,0,456,448,450,453,35,431,433,459,461,0,445,441,457,455,35,460,434,432,462,0,458,443,448,456,35,433,435,457,459,0,441,442,459,457,35,458,436,434,460,0,460,444,443,458,35,435,437,455,457,0,442,437,461,459,35,456,438,436,458,0,462,440,444,460,35,437,439,453,455,0,437,435,463,461,35,454,440,438,456,0,464,436,440,462,35,439,417,473,453,0,435,416,465,463,35,474,418,440,454,0,466,417,436,464,35,427,415,475,463,0,425,427,452,467,35,476,416,428,464,0,454,428,426,468,35,425,427,463,465,0,423,425,467,469,35,464,428,426,466,0,468,426,424,470,35,423,425,465,467,0,421,423,469,471,35,466,426,424,468,0,470,424,422,472,35,421,423,467,469,0,419,421,471,473,35,468,424,422,470,0,472,422,420,474,35,419,421,469,471,0,415,419,473,475,35,470,422,420,472,0,474,420,418,476,35,417,419,471,473,0,416,415,475,465,35,472,420,418,474,0,476,418,417,466,35,457,455,479,477,0,459,461,477,478,35,480,456,458,478,0,479,462,460,480,35,477,479,481,483,0,478,477,481,482,35,482,480,478,484,0,483,479,480,484,35,483,481,487,485,0,482,481,485,486,35,488,482,484,486,0,487,483,484,488,35,485,487,489,491,0,486,485,489,490,35,490,488,486,492,0,491,487,488,492,35,463,475,485,491,0,467,452,486,490,35,486,476,464,492,0,488,454,468,492,35,451,483,485,475,0,451,482,486,452,35,486,484,452,476,0,488,484,453,454,35,451,461,477,483,0,451,455,478,482,35,478,462,452,484,0,480,456,453,484,35,457,477,461,459,0,459,478,455,457,35,462,478,458,460,0,456,480,460,458,35,453,473,479,455,0,463,465,477,461,35,480,474,454,456,0,479,466,464,462,35,471,481,479,473,0,475,481,477,465,35,480,482,472,474,0,479,483,476,466,35,469,487,481,471,0,473,485,481,475,35,482,488,470,472,0,483,487,474,476,35,467,489,487,469,0,471,489,485,473,35,488,490,468,470,0,487,491,472,474,35,465,491,489,467,0,469,490,489,471,35,490,492,466,468,0,491,492,470,472,34,463,491,465,0,467,490,469,34,466,492,464,0,470,492,468,35,391,389,503,501,0,408,412,493,494,35,504,390,392,502,0,495,414,410,496,35,393,391,501,499,0,404,408,494,497,35,502,392,394,500,0,496,410,406,498,35,395,393,499,497,0,400,404,497,499,35,500,394,396,498,0,498,406,402,500,35,397,395,497,495,0,396,400,499,501,35,498,396,398,496,0,500,402,398,502,35,399,397,495,493,0,387,396,501,503,35,496,398,400,494,0,502,398,393,504,35,387,399,493,505,0,388,387,503,505,35,494,400,388,506,0,504,393,392,506,35,493,501,503,505,0,503,494,493,505,35,504,502,494,506,0,495,496,504,506,35,493,495,499,501,0,503,501,497,494,35,500,496,494,502,0,498,502,504,496,34,495,497,499,0,501,499,497,34,500,498,496,0,498,500,502,35,313,381,387,505,0,366,375,388,505,35,388,382,314,506,0,392,376,369,506,35,313,505,503,321,0,366,505,493,383,35,504,506,314,322,0,495,506,369,386,35,319,321,503,389,0,381,383,493,412,35,504,322,320,390,0,495,386,382,414],</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>bones<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>skinIndices<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>skinWeights<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>animation<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> {}</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.06520s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-eGrxxkowQBvwoW6v7VFBW5vLA/cv8xg6H6YAfXyw+Xk=" src="https://assets-cdn.github.com/assets/frameworks-786af1c64a30401bf0a16eafed51415b9bcb03f72ff3183a1fa6007d7cb0f979.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-rT+1ElnxP2D9CTo6KrTwb/OeuYr06jkKhbMcWYrUhew=" src="https://assets-cdn.github.com/assets/github-ad3fb51259f13f60fd093a3a2ab4f06ff39eb98af4ea390a85b31c598ad485ec.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  </body>
</html>

