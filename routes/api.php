<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/news', function(){
	$data = [
		[
			"title" => 'Jual Rumah Murah',
			"thumbnail" => "https://avatars.githubusercontent.com/u/12620257?v=3"
		],
		[
			"title" => 'Jual Rumah Murah 2',
			"thumbnail" => "https://github.com/identicons/jasonlong.png"
		],
		[
			"title" => 'Jual Rumah Murah 3',
			"thumbnail" => "https://avatars0.githubusercontent.com/u/883126?v=3&s=400"
		],
		[
			"title" => 'Jual Rumah Murah 3',
			"thumbnail" => "https://avatars3.githubusercontent.com/u/4?v=3&s=400"
		],
		[
			"title" => 'James Kyle',
			"thumbnail" => "https://avatars1.githubusercontent.com/u/952783?v=3&s=400"
		],
	];	
	return response()->json($data, 200);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
