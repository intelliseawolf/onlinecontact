<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

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

Route::middleware(['auth:sanctum'])->get('/me', function (Request $request) {
    return $request->user();
});

Route::middleware('auth')->group(function () {
    Route::get('/contacts', [ContactController::class, 'list'])->name('contact.list');
    Route::get('/contacts/{contact}', [ContactController::class, 'read'])->name('contact.read');
    Route::put('/contacts/{contact}', [ContactController::class, 'update'])->name('contact.update');
    Route::post('/contacts', [ContactController::class, 'create'])->name('contact.create');
});
