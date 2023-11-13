<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ContactController extends Controller
{
    public function list(Request $request) {
        $query = $request->query();
    
        if (array_key_exists('name', $query)) {
            $contacts = User::where('id', '!=' , auth()->user()->id)
                ->where('name', 'LIKE', '%' . $query['name'] . '%')
                ->get();
        } else {
            $contacts = User::where('id', '!=' , auth()->user()->id)->get();
        }
    
        return response()->json([
            'contacts' => $contacts,
        ]);
    }
}
