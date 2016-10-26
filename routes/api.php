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
	$data = \App\News::get()->map(function($item){
		return [
                'id' => $item->id,
                'title' => $item->title,
                'thumbnail' => $item->thumbnail
            ];
	});
	return response()->json($data, 200);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
