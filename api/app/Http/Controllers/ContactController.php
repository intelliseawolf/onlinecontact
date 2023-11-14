<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use App\Http\Requests\CreateContactRequest;

class ContactController extends Controller
{
    public function list(Request $request) {
        $query = $request->query();

        if (array_key_exists('name', $query)) {
            $contacts = Contact::where('user_id', '=' , auth()->user()->id)
                ->where('name', 'LIKE', '%' . $query['name'] . '%')
                ->get();
        } else {
            $contacts = auth()->user()->contacts;
        }
    
        return response()->json([
            'contacts' => $contacts,
        ]);
    }

    public function create(CreateContactRequest $request) {
        $upload_path = public_path('upload');

        $avatar_name = $request->avatar->getClientOriginalName();
        $generated_new_name = time() . '_' . $avatar_name;
        $request->avatar->move($upload_path, $generated_new_name);

        auth()->user()->contacts()->create([
            ...$request->all(),
            'avatar' => '/upload/' . $generated_new_name,
        ]);

        return response()->json(['success' => 'You have successfully created']);
    }

    public function read(Request $request, Contact $contact) {
        return response()->json([
            'contact' => $contact,
        ]);
    }
}
