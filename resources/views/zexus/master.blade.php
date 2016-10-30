<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{site()->name}}</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">

    <style type="text/css">
        body {background-color: #141212;}
        #loader:after,#loader:before{content:"";position:absolute}#loader-wrapper{position:fixed;top:0;left:0;min-width:100%;height:100%;z-index:1000}#loader{display:block;position:relative;left:50%;top:50%;width:150px;height:150px;margin:-75px 0 0 -75px;border-radius:50%;border:3px solid transparent;border-top-color:#db2c31;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;z-index:1001}#loader:before{top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;border:3px solid transparent;border-top-color:#db2c31;-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}#loader:after{top:15px;left:15px;right:15px;bottom:15px;border-radius:50%;border:3px solid transparent;border-top-color:#fff;-webkit-animation:spin 1.5s linear infinite;animation:spin 1.5s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}#loader-wrapper .loader-section{position:fixed;top:0;width:51%;height:100%;z-index:1000;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
    </style>

</head>
<body>
    <app-root>
        <div id="loader-wrapper">
            <div id="loader"></div>
        </div>
    </app-root>


@foreach(site()->scripts() as $script )
    <script type="text/javascript" src="/static/js/{{$script}}"></script>
@endforeach

</body>
</html>
