<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\UniqueContact;

class CreateContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email', new UniqueContact],
            'name' => ['required', 'string'],
            'title' => ['required', 'string'],
            'phone' => ['required', 'string'],
            'address' => ['required', 'string'],
            'avatar' => ['image']
        ];
    }
}
