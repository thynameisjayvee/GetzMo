<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function test(){
      $users = User::all();
      return view('welcome')->with(compact('users'));
    }
}
