<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Agustin Bello',
                'email' => 'agustin@gmail.com',
                'password' => Hash::make('password!23')
            ],
        ];

        User::insert($data);
    }
}
