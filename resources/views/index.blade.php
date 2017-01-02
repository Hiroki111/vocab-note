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
    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="/js/base.min.js"></script>
    <script type="text/javascript" src="/js/project.min.js"></script>
</head>
<body>
    <div class="flex-center position-ref full-height">
        @if (Route::has('login'))
        <div class="top-right links">
            <a href="{{ url('/login') }}">Login</a>
            <a href="{{ url('/register') }}">Register</a>
        </div>
        @endif
        <div class="content">
            <div class="title">
                Hiroki's Vocab Note
            </div>
            <div class="card">
                <div class="card-main">
                    <div class="card-inner margin-bottom-no">
                        <a class="btn btn-flat waves-attach">Display/Hide  All</a>
                        <div class="card-table">
                            <div class="table-responsive">
                                <table class="table" title="A table within a card">
                                    <thead>
                                        <tr>
                                            <th>Word</th>
                                            <th>Pronunciation</th>
                                            <th>Type</th>
                                            <th>Meaning</th>
                                            <th>Example</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>pronunciation</td>
                                            <td>prəˌnʌnsɪˈeɪʃ(ə)n</td>
                                            <td>noun - C/U</td>
                                            <td>the way in which a word is pronounced.</td>
                                            <td>I haven't learned proper pronunciation of French words.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="card-action">
                        <div class="card-action-btn pull-right">
                            <a class="btn btn-flat waves-attach waves-effect" href="javascript:void(0)"><span class="icon">chevron_left</span></a>
                            <a class="btn btn-flat waves-attach waves-effect" href="javascript:void(0)"><span class="icon">chevron_right</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
