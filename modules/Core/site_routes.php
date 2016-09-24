<?php


Route::get('/', function () {
    return view('master');
});

Route::get('/{name}.js', function($name) {
    return site()->getThemeScripts($name);
});
Route::get('/{name}.{build}.js', function($name, $build) {
    return site()->getThemeScripts($name, $build);
});
Route::get('/{name}.{build}.{type}.js', function($name, $build, $type) {
    return site()->getThemeScripts($name, $build, $type);
});