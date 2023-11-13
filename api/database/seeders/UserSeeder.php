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
                'title' => 'Engineer',
                'phone' => '911234567891',
                'address' => 'Manaus, AM, Brazil',
                'avatar' => 'avatar1.png',
                'password' => Hash::make('password!23')
            ],
            [
                'name' => 'John doe',
                'email' => 'john@gmail.com',
                'title' => 'Writer',
                'phone' => '911234567891',
                'address' => 'Windsor, ON, Canada',
                'avatar' => 'avatar2.png',
                'password' => Hash::make('password!23')
            ]
        ];

        User::insert($data);
    }
}
