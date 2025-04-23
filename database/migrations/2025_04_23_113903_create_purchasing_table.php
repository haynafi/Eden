<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('purchasing', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_number')->unique();
            $table->string('distributor');
            $table->string('evidence')->nullable();
            $table->text('description')->nullable();
            $table->date('transaction_date');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('purchasing');
    }
};