<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hiroki's Vocab Note</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="/css/base.min.css">
    <link rel="stylesheet" type="text/css" href="/css/project.min.css">
    <link rel="stylesheet" type="text/css" href="/css/www.css">
    <script type="text/javascript" src="/js/lib/jquery.min.js"></script>
    <script type="text/javascript" src="/js/lib/base.min.js"></script>
    <script type="text/javascript" src="/js/lib/project.min.js"></script>
    <script type="text/javascript" src="/js/www.js"></script>
</head>
<body>
    <div class="flex-center position-ref full-height">
        @if (Route::has('login'))
        <div class="top-right links">
            <!-- <a href="{{ url('/login') }}">Login</a> -->
            <!-- <a href="{{ url('/register') }}">Register</a> -->
            <a class="" data-toggle="modal" href="#new_word_modal">Register new word</a>
        </div>
        @endif
        <div class="content">
            <div class="title">
                Hiroki's Vocab Note
            </div>
            <div class="card">
                <div id="reactroot" class="card-main">
                </div>
            </div>
        </div>
    </div>
</body>
<div aria-hidden="true" class="modal fade" id="new_word_modal" role="dialog" tabindex="-1" style="display: none;">
</div>
</html>
<script type="text/javascript" src="/js/build/reactapp.js"></script>
