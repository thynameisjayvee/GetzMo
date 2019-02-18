<?php


Route::get('/test', 'UserController@test');
Route::get('/{any}', 'SPAController@index')->where('any', '.*');
