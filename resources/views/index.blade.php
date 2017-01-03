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
                <div class="card-main">
                    <div class="card-inner margin-bottom-no">
                        <div class="row">
                            <a class="btn btn-flat waves-attach">Display/Hide  Explanations</a>
                            <div style="display: inline;" class="dropdown-wrap">
                                <div class="dropdown dropdown-inline">
                                    <a class="btn btn-flat dropdown-toggle-btn waves-attach waves-effect" data-toggle="dropdown" aria-expanded="true">Sort<span class="icon margin-left-sm">keyboard_arrow_down</span></a>
                                    <ul class="dropdown-menu nav">
                                        <li>
                                            <a class="waves-attach waves-effect" href="javascript:void(0)">From The Newst (Default)</a>
                                        </li>
                                        <li>
                                            <a class="waves-attach waves-effect" href="javascript:void(0)">From The Oldest</a>
                                        </li>
                                        <li>
                                            <a class="waves-attach waves-effect" href="javascript:void(0)">From A to Z</a>
                                        </li>
                                        <li>
                                            <a class="waves-attach waves-effect" href="javascript:void(0)">From Z to A</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-table">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Word/Phrase</th>
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
<div aria-hidden="true" class="modal fade" id="new_word_modal" role="dialog" tabindex="-1" style="display: none;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-heading">
                <a class="modal-close" data-dismiss="modal">×</a>
                <h2 class="modal-title">New Word</h2>
            </div>
            <div class="modal-inner">
                <div class="form-group form-group-label control-highlight">
                    <label class="floating-label" for="new_word">Word/Phrase</label>
                    <input class="form-control" id="new_word" type="text" value="">
                </div>
                <div class="form-group form-group-label control-highlight">
                    <label class="floating-label" for="new_word_pronunciation">Pronunciation</label>
                    <input class="form-control" id="new_word_pronunciation" type="text" value="">
                </div>
                <div class="form-group form-group-label control-highlight">
                    <label class="floating-label" for="new_word_type">Type</label>
                    <input class="form-control" id="new_word_type" type="text" value="">
                </div>
                <div class="form-group form-group-label control-highlight">
                    <label class="floating-label" for="new_word_meaning">Meaning</label>
                    <input class="form-control" id=_word"new_meaning" type="text" value="">
                </div>
                <div class="form-group form-group-label control-highlight">
                    <label class="floating-label" for="new_word_example">Example</label>
                    <input class="form-control" id="new_word_example" type="text" value="">
                </div>
            </div>
            <div class="modal-footer">
                <p class="text-right"><button class="btn btn-flat btn-brand waves-attach waves-effect" data-dismiss="modal" type="button">Cancel</button><button class="btn btn-flat btn-brand waves-attach waves-effect" data-dismiss="modal" type="button">Save</button></p>
            </div>
        </div>
    </div>
</div>
</html>
